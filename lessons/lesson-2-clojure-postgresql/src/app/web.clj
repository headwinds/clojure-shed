(ns app.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :as handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.jdbc :as j]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.util.response :refer [response resource-response]]
            [app.heroku-config :as heroku-config]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.json :as middleware]
            [environ.core :refer [env]]))

  ;; heroku is not picking up my env uberjar setting but when I hardcode it works!
  ;; so this is a bandaid until we sort out that issue
  (def valid-env (if (nil? (env :database-password)) heroku-config/en env))

  (def pg-db {:dbtype "postgresql"
              :dbname (:database-dbname valid-env)
              :host (:database-host valid-env)
              :port "5432"
              :user (:database-user valid-env)
              :password (:database-password valid-env)
              :sslmode (:database-sslmode valid-env)
              :sslfactory (:database-sslfactory valid-env)
              })

(def limit 10)

(defn get-colonists
  [offset]
  (j/query pg-db
    [(str "SELECT * FROM colonist ORDER BY timestamp DESC OFFSET " offset " LIMIT " limit)]))

(defn get-colonist
  [colonist-name]
    (let [query  (str "SELECT * FROM colonist WHERE colonist_name = '" colonist-name "';")]
  (j/query pg-db
    [query])))

(defn get-answers
  [offset]
  (j/query pg-db
    [(str "SELECT * FROM answer ORDER BY created_timestamp DESC OFFSET " offset " LIMIT " limit)]))

(defn get-questions
  [offset]
  (j/query pg-db
    [(str "SELECT * FROM question ORDER BY created_timestamp DESC OFFSET " offset " LIMIT " limit)]))

(defn post-answer
  [question-id answer colonist-id]
  (let [row {:question-id question-id
             :answer answer
             :colonist-id colonist-id}]
  (j/insert! pg-db :answer row)))

(defn post-question
  [question answer colonist-id]
  (let [row {:question question
             :answer answer
             :colonist_id colonist-id}]
  (j/insert! pg-db :question row)))


(defn splash []
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello world"})

(defroutes app-routes
  (GET "/" []
        (route/not-found (slurp (io/resource "index.html"))))
  (route/resources "/")

 (POST "/post-answer" request
   (let [question-id (get-in request [:body :answer-id])
         answer (get-in request [:body :answer])
         colonist-id (get-in request [:body :colonist-id])]
         (post-answer question-id answer colonist-id)))

 (POST "/post-question" request
   (let [question (get-in request [:body :question])
         answer (get-in request [:body :answer])
         colonist-id (get-in request [:body :colonist_id])]
         (post-question question answer colonist-id)))

  (GET "/lesson-2" []
       (resource-response "lesson-2.html"))

  (GET "/lego-blockchain" []
        (route/not-found (slurp (io/resource "lego-blockchain.html"))))

  (GET "/get-colonist" request
    (let [colonist-name (get-in request [:params :name])]
       ;(get-colonist name)
       (get-colonist colonist-name)
       ))

  (GET "/get-colonists" request
    (let [offset (* (- (read-string (get-in request [:params :page])) 1) limit)]
       (get-colonists offset)))

  (GET "/get-answers" []
        (get-answers))

  (GET "/get-questions" []
       (get-questions))

  (GET "/test" []
       (splash))

  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

(def app
  (-> (site app-routes)
      (middleware/wrap-json-body {:keywords? true})
      (wrap-cors  :access-control-allow-origin [#"http://localhost:3000"]
                  :access-control-allow-methods [:get :put :post :patch :delete])
      middleware/wrap-json-response))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app) {:port port :join? false})))
