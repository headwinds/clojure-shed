(ns example.heroku-config-sample)

(def en {:env
          {:production true
           :secret-key ""
           :open-dota-key ""
           :database-dbname ""
           :database-subprotocol "postgresql"
           :database-host ""
           :database-user ""
           :database-password ""
           :database-sslmode "require"
           :database-sslfactory "org.postgresql.ssl.NonValidatingFactory"
           :strava-secret "0ea43d67520d24ffb89fe8fb362c1ac3e3ebe298"
           :strava-id "28964"
           :strava-public-token "2ee5a5d82a2abf47274dd3f2b3657d5912b13341"}})
