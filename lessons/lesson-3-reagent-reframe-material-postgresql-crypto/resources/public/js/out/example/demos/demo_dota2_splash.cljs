;; note ClojureScript can have a namespace with dashes but the file has to use underscores
(ns example.demos.demo-dota2-splash
  (:require [reagent.core :as r]
            [re-frame.core :as re]
            ["material-ui" :as mui]
            ["material-ui-icons" :as mui-icons]
            [cljs.core.async :refer [<!]]
            [cljs-http.client :as http]
            [example.demos.events :as events]
            [example.demos.subs :as subs]
            [example.utils.http-fx :refer [set-location]]
            [reagent.impl.template :as rtpl])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def <sub (comp deref re-frame.core/subscribe))
(def >evt re-frame.core/dispatch)

(def client-id "28964")
(def redirect-uri "http://localhost:3000/api/strava/token")
(def response-type "code")
(def scope "view_private,write")
(def approval-prompt "force")
(def strava-authorize-url
  (str "https://www.strava.com/oauth/authorize?"
       "client_id=" client-id "&"
       "response_type=" response-type "&"
       "redirect_uri=" redirect-uri "&"
       "approval_prompt=" approval-prompt "&"
       "scope=" scope))


;; it's not a get - you need to open strava's web page - so you use a simple a tag instead
;;(defn authorize-strava [ev]
;;  (go (let [response (<! (http/get "/api/strava/auth"))]
;;    (prn (:status response))
;;    (prn (:body response)))))

(defn get-strava-activities [ev]
  (>evt [:get-strava-activities ]))

(defn view [{:keys [classes] :as props}]
 (let [component-state (r/atom {:selected 0})]
    (fn []
      (let [current-select (get @component-state :selected)
            strava-activities (<sub [::subs/strava-activities])]
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
            :on-click (fn [ev] (get-strava-activities ev))}
           "Get Activities"
           ]
           [:a {:href strava-authorize-url} "Authorize Strava"]
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
