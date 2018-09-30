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
