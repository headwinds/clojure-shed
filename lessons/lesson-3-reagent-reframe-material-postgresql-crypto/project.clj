(defproject material-ui-reagent "0.6.0"
  :min-lein-version "2.5.3"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [org.clojure/java.jdbc "0.6.1"]
                 [reagent "0.8.1"]
                 [re-frame "0.9.4"]
                 [secretary "1.2.3"]
                 [cljs-ajax "0.7.3"]
                 [figwheel "0.5.16"]
                 [cheshire "5.8.0"] ;; https://bauerspace.com/library-cheshire/
                 [clj-http "3.9.1"] ;; https://github.com/dakrone/clj-http
                 [cljs-http "0.1.39"]
                 [cljsjs/material-ui "1.2.1-1"]
                 [cljsjs/material-ui-icons "1.1.0-1"]
                 [compojure "1.6.0"]
                 [ekimber/clj-strava "0.1.1"]
                 [org.clojure/core.async "0.4.474"]
                 [ring/ring-jetty-adapter "1.6.2"]
                 [ring/ring-ssl "0.3.0"]
                 [ring/ring-json "0.3.1"]
                 [ring-cors "0.1.12"]
                 [lock-key "1.5.0"]
                 [buddy/buddy-core "1.4.0"]
                 [org.postgresql/postgresql "9.4-1201-jdbc41"]
                 [environ "1.1.0"]]

  :plugins [[lein-environ "1.1.0"]
            [lein-cljsbuild "1.1.7"]
            [lein-ring "0.12.4"]
            [lein-figwheel "0.5.16"]]
  :uberjar-name "example.jar"
  :ring {:handler example.web/handler}
  :figwheel {:repl false
             :http-server-root "public"
             :ring-handler example.web/-main
             :server-port 5000}
 :profiles {:dev [:profiles/dev]
             :uberjar [:profiles/uberjar]
             ;; only edit :profiles/* in profiles.clj
             :profiles/dev  {}
             :profiles/uberjar {}})
