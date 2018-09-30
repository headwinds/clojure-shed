;; rename to profiles.clj with your details and be careful to include profiles.clj in your .gitignore

{:dev {:env
          {:production "false"
           :secret-key "your-hashed-secret-key"
           :open-dota-key "your-api-key"
           :database-dbname "shed"
           :database-host "localhost"
           :database-user "postgres"
           :database-password "your-password"
           :database-sslmode "disable"
           :strava-secret ""
           :strava-id ""
           :strava-public-token ""}}
       :dependencies [[com.cemerick/piggieback "0.2.2"]
                                [figwheel-sidecar "0.5.13"]
                                [binaryage/devtools "0.9.4"]]
       :source-paths ["src" "dev"]
       :cljsbuild {:builds [{:id "dev"
                             :source-paths ["src"]
                             :figwheel true
                             :compiler {:main "example.core"
                                        :preloads [devtools.preload]
                                        :asset-path "js/out"
                                        :output-to "resources/public/js/main.js"
                                        :output-dir "resources/public/js/out"
                                        :optimizations :none
                                        :recompile-dependents true
                                        :source-map true}}]}}
 :uberjar {:env
             {:production true
              :secret-key "your-hashed-secret-key"
              :open-dota-key "your-api-key"
              :database-dbname "your-heroku-dname"
              :database-host "your-heroku-host"
              :database-user "your-heroku-username"
              :database-password "your-heroku-password"
              :database-sslmode "require"
              :strava-secret ""
              :strava-id ""
              :strava-public-token ""}}
           :source-paths ["src"]
           :prep-tasks ["compile" ["cljsbuild" "once"]]
           :cljsbuild {:builds [{:id "production"
                                 :source-paths ["src"]
                                 :jar true
                                 :compiler {:main "example.core"
                                            :asset-path "js/out"
                                            :output-to "resources/public/js/main.js"
                                            :output-dir "resources/public/js/out"
                                            :optimizations :advanced
                                            :pretty-print false}}]}}}
