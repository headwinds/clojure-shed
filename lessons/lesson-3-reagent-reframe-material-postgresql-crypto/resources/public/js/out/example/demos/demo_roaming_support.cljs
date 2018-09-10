;; note ClojureScript can have a namespace with dashes but the file has to use underscores
(ns example.demos.demo-roaming-support
  (:require [reagent.core :as r]
            ["material-ui" :as mui]
            ["material-ui-icons" :as mui-icons])
  )


(defonce text-state (r/atom "foobar"))

(defn view [{:keys [classes] :as props}]
 (let [component-state (r/atom {:selected 0})]
    (fn []
      (let [current-select (get @component-state :selected)]
      [:div {:style {:display "block"
                     :position "relative"
                     :margin-left 100
                     }}
      [:h2 "Roaming Support"]
      [:> mui/Toolbar
       {:disable-gutters true}
       [:> mui/Button
        {:variant "contained"
         :color "primary"
         :class (.-button classes)
         :on-click #(swap! text-state str " foo")}
        "Update value property"
        [:> mui-icons/AddBox]]

       [:> mui/Button
        {:variant "outlined"
         :color "secondary"
         :class (.-button classes)
         :on-click #(reset! text-state "")}
        "Reset"
        [:> mui-icons/Clear]]]]
    ))))
