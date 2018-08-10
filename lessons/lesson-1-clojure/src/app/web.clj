(ns app.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :as handler :refer [site]]
            [compojure.route :as route]
            [clojure.core :as cc]
            [clojure.string :as str]
            [clojure.java.jdbc :as j]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.json :as middleware]
            [environ.core :refer [env]]))

;; -- MODELS -------------------------------------------------------------

;; scientists is a vector of maps - I made up their ages
(defonce scientists
  [ {:name "Sally Ride"        :profession "Astronaunt"         :agency "???"   :age 58 :specialty "Physics" :ship 2}
    {:name "Mae Jemison"       :profession "Astronaunt"         :agency "???"   :age 35 :specialty "Physician" :ship 1}
    {:name "Nancy Grace Roman" :profession "Astronomer"         :agency "???"   :age 32 :specialty "Hubble" :ship 1}
    {:name "Margaret Hamilton" :profession "Computer Scientist" :agency "???"   :age 29 :specialty "Systems Engineer" :ship 1}
    {:name "Rachel Binx"       :profession "Computer Scientist" :agency "???"   :age 23 :specialty "Data Visualization" :ship 2 }])

;; -- HANDLERS -------------------------------------------------------------

(defn get-scientists []
  {:status 200
    :body scientists})

;; -- MAP --

(defn map-scientists [agency-name]
  (map (fn [value] (assoc value :agency agency-name))
    scientists)
  )

(defn map-scientists-to-agency
  "returns a list of scientists adding their agency"
  [agency-name]
  (let [scientists-with-agency (map-scientists agency-name)]
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
     [profession specialty]
     (let [found-scientist
             (first (filter (every-pred (comp #{specialty} :specialty)
                                        (comp #{profession} :profession))
                                        scientists))]
     {:status 200
      :body found-scientist}))

;; -- FILTER BUILD FLEET --

(defn filter-crew [staff ship-id] (filter #(= (:ship %) ship-id) staff))

(def nasa-scientists (map-scientists "NASA"))

(println "nasa" nasa-scientists)

(def fleet [{:ship "apollo" :crew (filter-crew nasa-scientists 1)}
            {:ship "dragon" :crew (filter-crew nasa-scientists 2)}])

(defn get-fleet []
  {:status 200
   :body fleet})

;; -- REDUCE --

(defn reduce-scientists []
  (let [crew
          (reduce
            (fn [acc val]
              ;; coming soon
               acc
            )
        [] scientists)]
  {:status 200
    :body crew}))

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

  (GET "/lesson-1" []
        (route/not-found (slurp (io/resource "lesson-1.html"))))

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
               specialty (get-in request [:body :specialty])]
            (find-scientist profession specialty)))

  (GET "/get-scientists" []
       (get-scientists))

  (GET "/test" []
       (splash))

  (GET "/get-fleet" []
      (get-fleet))

  (GET "/reduce-scientists" []
        (reduce-scientists))

  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

(def app
(-> (site app-routes)
    (middleware/wrap-json-body {:keywords? true})
    middleware/wrap-json-response))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app) {:port port :join? false})))
