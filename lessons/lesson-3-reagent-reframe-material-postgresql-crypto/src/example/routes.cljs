(ns example.routes
  "Sets up url routes and associated views."
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require [secretary.core :as secretary]
            [goog.events :as gevents]
            [goog.history.EventType :as EventType]
            [re-frame.core :as re :refer [reg-sub]]
            [reagent.core :as r]
            [example.events :as events]
            [example.subs :as subs]
            [example.utils.http-fx :refer  [GET POST PUT <sub >evt]]
            ;; demos
            [example.demos.demo-dota2-splash :as demo-dota2-splash]
            [example.demos.demo-hard-carry :as demo-hard-carry]
            [example.demos.demo-semi-carry :as demo-semi-carry]
            [example.demos.demo-soloist :as demo-soloist]
            [example.demos.demo-roaming-support :as demo-roaming-support]
            [example.demos.demo-hard-support :as demo-hard-support]
            ))

(defn hook-browser-navigation! []
  (doto (History.)
    (gevents/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  ;; prefix might be removeable --> https://gist.github.com/city41/aab464ae6c112acecfe1
  (secretary/set-config! :prefix "#")

  ;; Routes:start --------------------

  (defroute "/" []
    (re/dispatch [::events/set-active-demo "splash"]))

  (defroute "/heros/roles/hard-carry" []
    (re/dispatch [::events/set-active-demo "hard-carry"]))

  (defroute "/heros/roles/semi-carry" []
    (re/dispatch [::events/set-active-demo "semi-carry"]))

  (defroute "/heros/roles/soloist" []
    (re/dispatch [::events/set-active-demo "soloist"]))

  (defroute "/heros/roles/roaming-support" []
    (re/dispatch [::events/set-active-demo "roaming-support"]))

  (defroute "/heros/roles/hard-support" []
    (re/dispatch [::events/set-active-demo "hard-support"]))

  ;; Routes:end --------------------

  (hook-browser-navigation!))

(defn get-main-demo [demo-name]
  (case demo-name
    "splash"                  demo-dota2-splash/view
    "hard-carry"              demo-hard-carry/view
    "semi-carry"              demo-semi-carry/view
    "soloist"                 demo-soloist/view
    "roaming-support"         demo-roaming-support/view
    "hard-support"            demo-hard-support/view
    demo-dota2-splash/view)
)
