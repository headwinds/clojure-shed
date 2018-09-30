(ns example.events
  (:require [reagent.core :as reagent]
            [re-frame.core :as re]
            [example.utils.http-fx :refer  [GET POST PUT <sub >evt set-location]]
            [goog.object :as gobj]
            [ajax.core :as ajax]
            [example.db :as db]
            [example.utils.js :refer [log]]
            [reagent.impl.template :as rtpl]))

;; events

(re/reg-event-db              ;; sets up initial application state
  :initialize                 ;; usage:  (dispatch [:initialize])
  (fn [_ _]
    db/default-db))

(re/reg-event-db
 ::set-active-demo
 (fn [db [_ active-demo]]
   (assoc db :active-demo active-demo)))

(re/reg-event-db :active-demo
 (fn [db [_ active-demo]]
   (assoc db :active-demo active-demo)))


;;-- Log

;; Post Log

(re/reg-event-fx :post-add-log
  (fn [{db :db} [_ vals]]
    (let [username @(:username vals)
          goal @(:goal vals)
          major-bonus @(:major-bonus vals)
          minor-bonus @(:major-bonus vals)
          sidequest-bonus @(:sidequest-bonus vals)

          payload {:username username
                   :goal goal
                   :major-bonus major-bonus
                   :minor-bonus minor-bonus
                   :sidequest-bonus sidequest-bonus}]

     {:http-xhrio (POST "/api/logs/add"
                        payload
                        :post-add-log-success
                        :post-add-log-fail)})))

(re/reg-event-db :post-add-log-success
  (fn [db [_ response]]
      (let [success-notification { :message "Log added!"
                                   :type "success"
                                   :show true}]
      ;;(re/dispatch [:notification success-notification])
      (log "post-add-log-success" response))
      db)) ;; always return the db!

(re/reg-event-db :post-add-log-fail
(fn [db [_ response]]
  (let [fail-notification { :message "Log failed!"
                            :type "error"
                            :show true}]
  ;;(re/dispatch [:notification fail-notification])
  (log "post-add-log-fail" response))
  db))

;; Get Logs

(re/reg-event-fx :fetch-logs
 (fn [{db :db} [_ vals]]
   (let [page (:page vals)
         limit (:limit vals)]
   {:http-xhrio (GET "/api/logs/get"
                      :fetch-logs-success
                      :fetch-logs-failure)}
  ))
 )

(re/reg-event-db :fetch-logs-success
 (fn [db [_ response]]
   (-> db
       (assoc :logs response))))

(re/reg-event-db :fetch-accounts-failure
 (fn [db [_ response]]
   (-> db
       (assoc :error response))))

;;-- STRAVA
;; https://yizeng.me/2017/01/11/get-a-strava-api-access-token-with-write-permission/

;;-- http://localhost/exchange_token?state=&code=bd12d017f3674ad65f5ea9712cf9c29d5b807112&scope=view_private,write

(def code "bd12d017f3674ad65f5ea9712cf9c29d5b807112")

(def client-id "28964")
(def redirect-uri "http://localhost/exchange_token")
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

(re/register-handler :strava-authorize             ;; <-- the button dispatched this id
 (fn
   [db _]
   (print "GET auth: " strava-authorize-url)
   {:http-xhrio (GET
     strava-authorize-url
     :process-response
     :bad-response)}))

(re/register-handler               ;; when the GET succeeds
  :process-response             ;; the GET callback dispatched this event
  (fn
    [db [_ response]]           ;; extract the response from the dispatch event vector
    (-> db
        (assoc :loading? false) ;; take away that modal
        (assoc :data (js->clj response)))
        (print "good response" response)))

(re/register-handler               ;; when the GET succeeds
  :bad-response             ;; the GET callback dispatched this event
  (fn
    [db [_ response]]           ;; extract the response from the dispatch event vector
    (-> db
        (assoc :loading? false) ;; take away that modal
        (assoc :data (js->clj response)))
      (print "bad response" response) ) )

 (re/reg-event-fx :get-authorize-strava
  (fn [{db :db} [_ vals]]
    {:http-xhrio (GET "/api/strava/authorize"
                       :get-authorize-strava-success
                       :get-authorize-strava-fail)}
   ))

 (re/reg-event-db :get-authorize-strava-success
  (fn [db [_ response]]
    (print "strava authoize success " response)
    ))

 (re/reg-event-db :get-authorize-strava-fail
  (fn [db [_ response]]
        (print "strava authoize fail " response)))


;;-- OPEN DOTA

;; Get Matches

;;-- GITHUB

(def github-origin "https://api.github.com")

 (re/reg-event-fx :get-github-events
  (fn [{db :db} [_ vals]]
    {:http-xhrio (GET (str github-origin "/orgs/reagent-project/events")
                       :get-github-events-success
                       :get-github-events-fail)}
   ))

 (re/reg-event-db :get-github-events-success
  (fn [db [_ response]]
    (set-location "#/accounts")
    (assoc db :user response)))

 (re/reg-event-db :get-github-events-fail
  (fn [db [_ response]]
    (set-location "#/accounts") ;; will be a failure screen later
    (assoc db :user {:username "adam" :email "whatever" :id 1})))
