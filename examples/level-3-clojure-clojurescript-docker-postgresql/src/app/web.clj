(ns app.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :as handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.jdbc :as j]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.json :as middleware]
            [environ.core :refer [env]]))

(def pg-db {:dbtype "postgresql"
            :dbname "shed"
            :host "localhost"
            :port "5432"
            :user "postgres"
            :password "your-password-here"})

(def pg-heroku-uri
  {:connection-uri (str "postgresql://postgres:your-password-here@localhost:5432/shed"
                        "?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory")})

(def pg-uri
  {:connection-uri (str "postgresql://postgres:your-password-here@localhost:5432/shed")})

(defn get-colonists
  []
  (j/query pg-db
    ["select * from colonist"]))

(defn splash []
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello world"})

(defroutes app-routes
  (GET "/" []
        (route/not-found (slurp (io/resource "index.html"))))
  (route/resources "/")
  (POST "/send-str" request
    (let [name (or (get-in request [:params :name])
                   (get-in request [:body :name])
                   "John Doe")]
      {:status 200
       :body {:name name
       :desc (str "The name you sent to me was " name)}}))
  (GET "/lego-blockchain" []
        (route/not-found (slurp (io/resource "lego-blockchain.html"))))
  (GET "/get-colonists" []
       (get-colonists))
  (GET "/test" []
       (splash))
  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

(def app
(-> (site app-routes)
    (middleware/wrap-json-body {:keywords? true})
    middleware/wrap-json-response))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app) {:port port :join? false})))
