(ns example.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [lock-key.core :refer [decrypt-from-base64 encrypt-as-base64]]
            [clojure.java.jdbc :as j]
            [ring.adapter.jetty :as jetty]
            [example.heroku-config :as heroku-config]
            [ring.util.response :refer [response resource-response]]
            [ring.middleware.ssl :as ssl]
            [ring.middleware.json :as middleware]
            [environ.core :refer [env]]))


;;-- State

;; heroku is not picking up my env uberjar setting but when I hardcode it works!
;; so this is a bandaid until we sort out that issue
(def valid-env (if (nil? (env :database-password)) heroku-config/en env))

(def pg-db {:dbtype "postgresql"
            :dbname (get valid-env :database-dbname)
            :host (get valid-env :database-host)
            :port "5432"
            :user (get valid-env :database-user)
            :password (get valid-env :database-password)
            :sslmode (get valid-env :database-sslmode)
            :sslfactory (get valid-env :database-sslfactory)
            })

;; obvious warning do not publish your secret key but I am doing so for demo purposes
;; its even dangerous to store the secret key in the env file
(def secret-key
  (env :secret-key))

(def open-dota-api
  (str "https://api.opendota.com/api/matches/271145478?api_key="
    (env :open-dota-key)))

;;-- Handlers

(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello World"})

(defn encrypt
  "Encrypt a message with the given key."
  [plaintext]
  (encrypt-as-base64 plaintext secret-key))

(defn decrypt
  "Decrypt a message with the given key."
  [ciphertext]
  (decrypt-from-base64 ciphertext secret-key))

(defn save-log [username goal major-bonus minor-bonus sidequest-bonus]
  (let [username-ciphertext (encrypt username)
        goal-ciphertext (encrypt goal)
        major-bonus-ciphertext (encrypt  major-bonus)
        minor-bonus-ciphertext (encrypt minor-bonus)
        sidequest-bonus-ciphertext (encrypt sidequest-bonus)
        query (str "INSERT INTO log (username, goal, major_bonus, minor_bonus, sidequest_bonus ) VALUES ("
                  username-ciphertext ","
                  goal-ciphertext ","
                  major-bonus-ciphertext ","
                  minor-bonus-ciphertext ","
                  sidequest-bonus-ciphertext ")")]
        (j/query pg-db
          [query])))

(defn get-logs
  []
  (print "db" pg-db)
  (j/query pg-db
    ["select * from log"]))

;;-- Routes

(defroutes app-routes
  (GET "/" []
       (slurp (io/resource "public/index.html")))

  (route/resources "/")

  (GET "/h" [] "Hello World there!")

  (POST "/api/logs/add" request
    (let [username (get-in request [:body :username])
          goal (get-in request [:body :goal])
          major-bonus (get-in request [:body :major-bonus])
          minor-bonus (get-in request [:body :minor-bonus])
          sidequest-bonus (get-in request [:body :sidequest-bonus])]
       (save-log user goal major-bonus minor-bonus sidequest-bonus)))

  (GET "/api/logs/get" []
    (get-logs))

  (GET "/api/logs/test" [request] (handler request))

  (ANY "*" []
    (route/not-found "<h1>404 Not found</h1>")))

(def app
     (-> (site app-routes)
       (middleware/wrap-json-body {:keywords? true})
       middleware/wrap-json-response))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app)
                     {:port port :join? false})))
