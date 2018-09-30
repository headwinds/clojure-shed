(ns example.db)

(def default-db
  {
   :active-demo "splash"
   :user nil ; current logged in user
   :logs nil
   :loading? {:table  false}
   :strava {:authorized false ;; could get this from the user if they have the strava code or no
            :activities []}
   :example {"title" "Reagent & Material UI"
             "subtile" "featuring Re-Frame"
   }})
