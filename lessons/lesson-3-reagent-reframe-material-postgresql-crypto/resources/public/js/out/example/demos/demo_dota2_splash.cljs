;; note ClojureScript can have a namespace with dashes but the file has to use underscores
(ns example.demos.demo-dota2-splash
  (:require [reagent.core :as r]
            ["material-ui" :as mui]
            ["material-ui-icons" :as mui-icons]
            [example.events :as events]
            [example.utils.http-fx :refer [set-location]]
            [reagent.impl.template :as rtpl]))

(defn authorize-strava [ev]
  (print "here")
  (re-frame.core/dispatch [:strava-authorize]))


(defn view [{:keys [classes] :as props}]
 (let [component-state (r/atom {:selected 0})]
    (fn []
      (let [current-select (get @component-state :selected)]
      [:div {:style {:display "flex"
                     :flexDirection "column"
                     :position "relative"
                     :margin-left 150
                     :margin-top 50
                     :alignItems "center"
                     }}
        [:div {:style {:margin 10}}
          [:img {:src "/images/dota-2.svg" :width 200}]]
        [:h1 {:style {:fontFamily "Helvetica" :color "#666"}} "5v5 Positions"]
        [:h2 {:style {:fontSize 20 :margin 0 :padding 0 :fontFamily "Helvetica" :color "#666"}} "What role should you choose in Dota 2?"]
        [:div {:style {:margin 20}}
          [:> mui/Button
           {:variant "contained"
            :color "primary"
            :class (.-button classes)
            :on-click (fn [ev] (authorize-strava ev))}
           "Authorize Strava"
           ]
         ]
        [:div {:style {:margin 20}}
          [:> mui/Button
           {:variant "contained"
            :color "primary"
            :class (.-button classes)
            :on-click (fn [ev] (set-location "/#/heros/roles/hard-carry"))}
           "Get Started"
           ]
         ]
      ]
    ))))
