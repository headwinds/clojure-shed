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
                      :format          (ajax/json-request-format)
                      :response-format (ajax/json-response-format {:keywords? true})
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
