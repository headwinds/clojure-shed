(ns example.db)

(def default-db
  {
   :active-demo "splash"
   :user nil ; current logged in user
   :logs nil
   :loading? {:table  false}
   :strava {:authorized false
            :activities []}
   :example {"title" "Reagent & Material UI"
             "subtile" "featuring Re-Frame"
   }})
