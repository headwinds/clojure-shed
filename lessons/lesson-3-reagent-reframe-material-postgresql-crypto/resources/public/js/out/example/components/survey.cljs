(ns example.components.survey
  (:require [reagent.core :as r]
            ["material-ui" :as mui]
            ["material-ui-icons" :as mui-icons]
            [example.events :as events]
            [example.utils.http-fx :refer [GET POST PUT <sub >evt set-location]]
            [reagent.impl.template :as rtpl])
  )

  ;;-- state

  (defonce username-state (r/atom ""))
  (defonce goal-state (r/atom ""))
  (defonce major-bonus-state (r/atom ""))
  (defonce minor-bonus-state (r/atom ""))
  (defonce sidequest-state (r/atom ""))

  ;;-- handlers

  (defn handle-submit-click []
  (>evt [:post-add-log {:username username-state
                        :goal goal-state
                        :major-bonus major-bonus-state
                        :minor-bonus minor-bonus-state
                        :sidequest-bonus sidequest-state
                        }]))


  ;;-- views

  (def ^:private input-component
    (r/reactify-component
      (fn [props]
        [:input (-> props
                    (assoc :ref (:inputRef props))
                    (dissoc :inputRef))])))

  (def ^:private textarea-component
    (r/reactify-component
      (fn [props]
        [:textarea (-> props
                       (assoc :ref (:inputRef props))
                       (dissoc :inputRef))])))

  ;; To fix cursor jumping when controlled input value is changed,
  ;; use wrapper input element created by Reagent instead of
  ;; letting Material-UI to create input element directly using React.
  ;; Create-element + convert-props-value is the same as what adapt-react-class does.
  (defn text-field [props & children]
    (let [props (-> props
                    (assoc-in [:InputProps :inputComponent] (cond
                                                              (and (:multiline props) (:rows props) (not (:maxRows props)))
                                                              textarea-component

                                                              ;; FIXME: Autosize multiline field is broken.
                                                              (:multiline props)
                                                              nil

                                                              ;; Select doesn't require cursor fix so default can be used.
                                                              (:select props)
                                                              nil

                                                              :else
                                                              input-component))
                    rtpl/convert-prop-value)]
      (apply r/create-element mui/TextField props (map r/as-element children))))

(def style-text {:width 400})

(defn view [classes]
 (let [component-state (r/atom {:selected 0})]
    (fn []
      (let [current-select (get @component-state :selected)]
      [:div {:style {:display "block"
                     :position "relative"
                     }}
        [:> mui/Grid
         {:container true
          :direction "column"}
         [:h3 "Survey"]
         ;; Username
         [text-field
          {:value @username-state
           :label "Username"
           :style style-text
           :placeholder "Username"
           :helper-text "with hashed usernames who needs passwords?!"
           :class (.-textField classes)
           :on-change (fn [e]
                  (reset! username-state (.. e -target -value)))}]
         ;; Goal
         [text-field
          {:value @goal-state
           :label "Goal"
           :style style-text
           :placeholder "Main Goal"
           :helper-text "what do you really want to achieve?"
           :class (.-textField classes)
           :on-change (fn [e]
                        (reset! goal-state (.. e -target -value)))}]
           ;; Major Bonus
           [text-field
            {:value @major-bonus-state
             :label "Major Bonus"
             :style style-text
             :placeholder "Major Bonus Goal"
             :helper-text "add a hard goal to compliment your main achivement"
             :class (.-textField classes)
             :on-change (fn [e]
                (reset! major-bonus-state (.. e -target -value)))}]
           ;; Minor Bonus
           [text-field
            {:value @minor-bonus-state
             :label "Minor Bonus"
             :style style-text
             :placeholder "Minor Bonus"
             :helper-text "add a soft goal to compliment your main achivement"
             :class (.-textField classes)
             :on-change (fn [e]
                 (reset! minor-bonus-state (.. e -target -value)))}]
             ;; Side Quest Bonus
             [text-field
              {:value @sidequest-state
               :label "Side Quest Bonus"
               :style style-text
               :placeholder "Side Quest Bonus"
               :helper-text "add a side goal that is related to the results of this achivement"
               :class (.-textField classes)
               :on-change (fn [e]
                  (reset! sidequest-state (.. e -target -value)))}]

               [:> mui/Toolbar
                {:disable-gutters true
                :style {:margin-top 20}
                }
                [:> mui/Button
                 {:variant "contained"
                  :style {:text-transform "none"}
                  :color "primary"
                  :class (.-button classes)
                  :on-click (fn [] (handle-submit-click))}
                [:> mui-icons/AddBox {:style {:margin-right 10}}]
                 "Submit Log"
                 ]
              ]
          ]
      ]
    ))))
