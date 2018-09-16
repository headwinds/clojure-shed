(ns example.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :as handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [lock-key.core :refer [decrypt-from-base64 encrypt-as-base64]]
            [buddy.core.hash :as hash]
            [buddy.core.codecs :refer :all]
            [clojure.java.jdbc :as j]
            [ring.adapter.jetty :as jetty]
            [example.heroku-config :as heroku-config]
            [ring.util.response :refer [response resource-response]]
            [ring.middleware.ssl :as ssl]
            [ring.middleware.json :as json :refer [wrap-json-body]]
            [cheshire.core :as cheshire]
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

(defn hash-username [username]
  (-> (hash/md5 username)
    (bytes->hex)))

(defn encrypt
  "Encrypt a message with the given key."
  [plaintext]
  (encrypt-as-base64 plaintext secret-key))

(defn decrypt
  "Decrypt a message with the given key."
  [ciphertext]
  (decrypt-from-base64 ciphertext secret-key))

  ;;get-raw-key

(def username-hash-sample "b7f787b6fd62dbf0b97947310a2f786ad4e1f24fd19d8d7f6983d86802dbee23ff8e6b5114c19c633b67b2c239ecfaea97740678f0991ce1bc7d2e3870f7ac41")


;;-- username needs to be is a 128 hash
(defn save-log [username goal major-bonus minor-bonus sidequest-bonus]
  (let [username-hash (hash-username username)
        goal-ciphertext (encrypt goal)
        major-bonus-ciphertext (encrypt  major-bonus)
        minor-bonus-ciphertext (encrypt minor-bonus)
        sidequest-bonus-ciphertext (encrypt sidequest-bonus)
        row {:username username-hash
             :goal goal-ciphertext
             :major_bonus major-bonus-ciphertext
             :minor_bonus minor-bonus-ciphertext
             :sidequest_bonus sidequest-bonus-ciphertext }]
             (prn row)
        (j/insert! pg-db :log row)))

;;-- username needs to be is a 128 hash
(defn save-logss [username goal major-bonus minor-bonus sidequest-bonus]
  (let [username-128-hash (hash-username username)
        goal-ciphertext (encrypt goal)
        major-bonus-ciphertext (encrypt  major-bonus)
        minor-bonus-ciphertext (encrypt minor-bonus)
        sidequest-bonus-ciphertext (encrypt sidequest-bonus)
        query (str "INSERT INTO log (username, goal, major_bonus, minor_bonus, sidequest_bonus ) VALUES ('"
                  username-128-hash "','"
                  goal-ciphertext "','"
                  major-bonus-ciphertext "','"
                  minor-bonus-ciphertext "','"
                  sidequest-bonus-ciphertext "');")
      _ (prn "enc query: " query)]

        (j/insert! pg-db
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

  (POST "/api/logs/addd" {:keys [params]}
  (let [{:keys [username]} params]
    (prn "username" username)))

    ;;(let [s (with-out-str (pprint/pprint (conj request {:body (slurp (:body request))})))]
   ;;{:status 200
    ;;:header {"Content-Type" "text/plain"}
    ;;:body   s}))

  (POST "/api/logs/add" request
    (prn "body " (get-in request [:body]))
    (let [data (get-in request [:body])
          username (get data :username)
          goal (get data :goal)
          major-bonus (get data :major-bonus)
          minor-bonus (get data :minor-bonus)
          sidequest-bonus (get data :sidequest-bonus)]
       (save-log username goal major-bonus minor-bonus sidequest-bonus)))

  (GET "/api/logs/get" []
    (get-logs))

  (ANY "*" []
    (route/not-found "<h1>404 Not found</h1>")))

(def app
     (-> (site app-routes)
         (wrap-json-body {:keywords? true :bigdecimals? true})))


(def handler
  (-> (site app-routes)
      (wrap-json-body {:keywords? true :bigdecimals? true})))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app)
                     {:port port :join? false})))
