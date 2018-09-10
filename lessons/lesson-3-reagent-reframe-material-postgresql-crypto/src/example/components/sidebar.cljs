(ns example.components.sidebar
    (:require [reagent.core :as r]
              [example.utils.http-fx :refer [set-location]]))

(def item-style
  {:display "block"
   :position "relative"
   :border "1px solid #eee"
   :font-family "Helvetica Neue"
   :font-size 14
   :cursor "pointer"
   :color "#666"
   :padding 10
   :margin 2
   :width 300
   :height 40
   :background "transparent"})

(defn sidebar-view []
 (let [component-state (r/atom {:selected 0})]
    (fn []
      (let [current-select (get @component-state :selected)]
      [:div {:style {:display "block"
                     :position "relative"
                     :width 200
                     :height "100vh"
                     :background "transparent"
                     }}
        [:h2 {:style
                {:fontFamily "Helvetica Neue" :color "#666" :fontSize 18 :margin 10 :cursor "pointer"}
              :on-click (fn [ev] (set-location "/"))  } "5v5 POSITIONS" ]
        [:div {:on-click (fn [ev] (set-location "/#/heros/roles/hard-carry")) :style item-style} "THE HARD CARRY"]
        [:div {:on-click (fn [ev] (set-location "/#/heros/roles/semi-carry")) :style item-style} "THE SOLO, GANKER, OR SEMI-CARRY"]
        [:div {:on-click (fn [ev] (set-location "/#/heros/roles/soloist")) :style item-style} "THE OFFLANER OR SUICIDE SOLO"]
        [:div {:on-click (fn [ev] (set-location "/#/heros/roles/roaming-support")) :style item-style} "THE ROAMING SUPPORT OR JUNGLER"]
        [:div {:on-click (fn [ev] (set-location "/#/heros/roles/hard-support")) :style item-style} "THE HARD SUPPORT OR BABYSITTER)"]
      ]
    ))))
