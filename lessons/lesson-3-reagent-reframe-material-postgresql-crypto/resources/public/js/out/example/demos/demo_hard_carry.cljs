;; note ClojureScript can have a namespace with dashes but the file has to use underscores
(ns example.demos.demo-hard-carry
  (:require [reagent.core :as r]
            ["material-ui" :as mui]
            ["material-ui-icons" :as mui-icons]
            [example.components.survey :as survey]
            ))


(defonce text-state (r/atom "foobar"))

(defn view [{:keys [classes] :as props}]
 (let [component-state (r/atom {:selected 0})]
    (fn []
      (let [current-select (get @component-state :selected)]
      [:div {:style {:display "block"
                     :position "relative"
                     :margin-left 100
                     }}
      [:h2 "Hard Carry"]
      [:div
        [:p ""]]
      [survey/view classes]
    ]
    ))))
