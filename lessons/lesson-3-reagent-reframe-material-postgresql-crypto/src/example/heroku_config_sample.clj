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
           :database-sslfactory "org.postgresql.ssl.NonValidatingFactory"}})
