(ns example.subs
  "Application wide re-frame subscriptions."
  (:require [re-frame.core :as re :refer [reg-sub]]))


(reg-sub :strava-authorized
  (fn [db _] (get-in db [:strava :authorized])))

(reg-sub :strava-activities
  (fn [db _] (get-in db [:strava :activities])))
