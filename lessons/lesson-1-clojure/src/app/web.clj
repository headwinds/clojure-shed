(ns app.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :as handler :refer [site]]
            [compojure.route :as route]
            [clojure.string :as str]
            [clojure.java.jdbc :as j]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.json :as middleware]
            [environ.core :refer [env]]))

;; -- MODELS -------------------------------------------------------------

;; scientists is a vector of maps - I made up their ages
(defonce scientists
  [ {:name "Sally Ride"        :profession "Astronaunt"         :agency "???"   :age 58}
    {:name "Mae Jemison"       :profession "Astronaunt"         :agency "???"   :age 26}
    {:name "Nancy Grace Roman" :profession "Astronomer"         :agency "???"   :age 32}
    {:name "Margaret Hamilton" :profession "Computer Scientist" :agency "???"   :age 29}
    {:name "Rachel Binx"       :profession "Computer Scientist" :agency "???"   :age 23 }]);

;; -- HANDLERS -------------------------------------------------------------

(defn get-scientists []
  {:status 200
    :body scientists})

;; -- MAP --

(defn map-scientists-to-agency
  "returns a list of scientists adding their agency"
  [agency-name]
  (let [scientists-with-agency
    (map (fn [value] {:name (value :name) :profession (value :profession) :agency agency-name})
      scientists)]
  {:status 200
   :body scientists-with-agency}))

;; -- FILTER --

(defn filter-scientists-by-profession
  "returns a list of scientists filtered by profession"
     [field profession scientists-with-agency]
     (let [scientists-filtered-by-profession
       (filter #(= (str/lower-case profession) (str/lower-case (field %))) scientists-with-agency)]
     {:status 200
      :body scientists-filtered-by-profession}))

;; -- FIND --

;; https://stackoverflow.com/questions/30361492/idiomatic-way-to-select-a-map-in-vector-by-a-key
;; https://stackoverflow.com/questions/42643091/how-to-filter-vector-of-maps-by-multiple-keys-in-clojure?rq=1
(defn find-scientist
  "returns the first scientist matching these profession and age arguments"
     [profession age]
     (let [found-scientist
             (first (filter (every-pred (comp #{age} :age)
                                 (comp #{profession} :profession))
                                        scientists))]
     {:status 200
      :body found-scientist}))


;; -- REDUCE --

;; you could try rewriting the signature to accept language first,
;; then do `(reduce (partial reduce-map lang :english) {} all)`
(defn reduce-scientists [] )

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

  (POST "/map-scientists-to-agency" request
    (let [agency-name (or   (get-in request [:params :name])
                            (get-in request [:body :name])
                            "SpaceX")]
       (map-scientists-to-agency agency-name)))

  (POST "/filter-scientists-by-profession" request
    (let [profession (or   (get-in request [:body :profession])
                            "computer scientist")
          scientists-with-agency ((map-scientists-to-agency "NASA") :body)]
       (filter-scientists-by-profession :profession profession scientists-with-agency )))

  (POST "/find-scientist" request
         (let [profession (get-in request [:body :profession])
               age (get-in request [:body :age])]
            (find-scientist profession age)))

  (GET "/get-scientists" []
       (get-scientists))
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
