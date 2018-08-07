(ns app.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :as handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.jdbc :as j]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.json :as middleware]
            [environ.core :refer [env]]))

;;-- DATA

(defonce colonists
  [ {:name "Sally Ride"        :profession "astronaunt"         :agency "???"}
    {:name "Mae Jemison"       :profession "astronaunt"         :agency "???"}
    {:name "Nancy Grace Roman" :profession "astronomer"         :agency "???"}
    {:name "Margaret Hamilton" :profession "computer scientist" :agency "???"}]);

;;-- CALLS

(defn get-colonists []
  {:status 200
    :body colonists})

(defn map-colonists-to-agency
  [agency-name]
  (let [colonists-with-agency
    (map (fn [value] {:name (value :name) :profession (value :profession) :agency agency-name})
      colonists)]
  (println "agency" agency-name)
  {:status 200
   :body colonists-with-agency}))

(defn filter-colonists [] )

(defn find-colonist [] )

;; you could try rewriting the signature to accept language first,
;; then do `(reduce (partial reduce-map lang :english) {} all)`
(defn reduce-colonists [] )

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
  (POST "/map-colonists-to-agency" request
    (let [agency-name (or  (get-in request [:params :name])
                      (get-in request [:body :name])
                      "Space X")]
       (map-colonists-to-agency agency-name)))
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
