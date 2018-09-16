// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.events');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('example.utils.http_fx');
goog.require('goog.object');
goog.require('ajax.core');
goog.require('example.db');
goog.require('example.utils.js');
goog.require('reagent.impl.template');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return example.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),(function (db,p__27856){
var vec__27857 = p__27856;
var _ = cljs.core.nth.call(null,vec__27857,(0),null);
var active_demo = cljs.core.nth.call(null,vec__27857,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),(function (db,p__27860){
var vec__27861 = p__27860;
var _ = cljs.core.nth.call(null,vec__27861,(0),null);
var active_demo = cljs.core.nth.call(null,vec__27861,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"post-add-log","post-add-log",2016590953),(function (p__27864,p__27865){
var map__27866 = p__27864;
var map__27866__$1 = ((((!((map__27866 == null)))?(((((map__27866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27866):map__27866);
var db = cljs.core.get.call(null,map__27866__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27867 = p__27865;
var _ = cljs.core.nth.call(null,vec__27867,(0),null);
var vals = cljs.core.nth.call(null,vec__27867,(1),null);
var username = cljs.core.deref.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(vals));
var goal = cljs.core.deref.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501).cljs$core$IFn$_invoke$arity$1(vals));
var major_bonus = cljs.core.deref.call(null,new cljs.core.Keyword(null,"major-bonus","major-bonus",-87318816).cljs$core$IFn$_invoke$arity$1(vals));
var minor_bonus = cljs.core.deref.call(null,new cljs.core.Keyword(null,"major-bonus","major-bonus",-87318816).cljs$core$IFn$_invoke$arity$1(vals));
var sidequest_bonus = cljs.core.deref.call(null,new cljs.core.Keyword(null,"sidequest-bonus","sidequest-bonus",979738100).cljs$core$IFn$_invoke$arity$1(vals));
var payload = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"goal","goal",-2073396501),goal,new cljs.core.Keyword(null,"major-bonus","major-bonus",-87318816),major_bonus,new cljs.core.Keyword(null,"minor-bonus","minor-bonus",-1950556957),minor_bonus,new cljs.core.Keyword(null,"sidequest-bonus","sidequest-bonus",979738100),sidequest_bonus], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.POST.call(null,"/api/logs/add",payload,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"post-add-log-success","post-add-log-success",-2009973737),new cljs.core.Keyword(null,"post-add-log-fail","post-add-log-fail",-1120993213))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"post-add-log-success","post-add-log-success",-2009973737),(function (db,p__27871){
var vec__27872 = p__27871;
var _ = cljs.core.nth.call(null,vec__27872,(0),null);
var response = cljs.core.nth.call(null,vec__27872,(1),null);
var success_notification_27875 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Log added!",new cljs.core.Keyword(null,"type","type",1174270348),"success",new cljs.core.Keyword(null,"show","show",-576705889),true], null);
example.utils.js.log.call(null,"post-add-log-success",response);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"post-add-log-fail","post-add-log-fail",-1120993213),(function (db,p__27876){
var vec__27877 = p__27876;
var _ = cljs.core.nth.call(null,vec__27877,(0),null);
var response = cljs.core.nth.call(null,vec__27877,(1),null);
var fail_notification_27880 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Log failed!",new cljs.core.Keyword(null,"type","type",1174270348),"error",new cljs.core.Keyword(null,"show","show",-576705889),true], null);
example.utils.js.log.call(null,"post-add-log-fail",response);

return db;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-logs","fetch-logs",1340819569),(function (p__27881,p__27882){
var map__27883 = p__27881;
var map__27883__$1 = ((((!((map__27883 == null)))?(((((map__27883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27883):map__27883);
var db = cljs.core.get.call(null,map__27883__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27884 = p__27882;
var _ = cljs.core.nth.call(null,vec__27884,(0),null);
var vals = cljs.core.nth.call(null,vec__27884,(1),null);
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(vals);
var limit = new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(vals);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,"/api/logs/get",new cljs.core.Keyword(null,"fetch-logs-success","fetch-logs-success",440672751),new cljs.core.Keyword(null,"fetch-logs-failure","fetch-logs-failure",-1277115617))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fetch-logs-success","fetch-logs-success",440672751),(function (db,p__27888){
var vec__27889 = p__27888;
var _ = cljs.core.nth.call(null,vec__27889,(0),null);
var response = cljs.core.nth.call(null,vec__27889,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"logs","logs",1068148008),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fetch-accounts-failure","fetch-accounts-failure",130164813),(function (db,p__27892){
var vec__27893 = p__27892;
var _ = cljs.core.nth.call(null,vec__27893,(0),null);
var response = cljs.core.nth.call(null,vec__27893,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032),response);
}));
example.events.github_origin = "https://api.github.com";
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-github-events","get-github-events",2123865953),(function (p__27896,p__27897){
var map__27898 = p__27896;
var map__27898__$1 = ((((!((map__27898 == null)))?(((((map__27898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27898):map__27898);
var db = cljs.core.get.call(null,map__27898__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27899 = p__27897;
var _ = cljs.core.nth.call(null,vec__27899,(0),null);
var vals = cljs.core.nth.call(null,vec__27899,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.events.github_origin),"/orgs/reagent-project/events"].join(''),new cljs.core.Keyword(null,"get-github-events-success","get-github-events-success",-594973983),new cljs.core.Keyword(null,"get-github-events-fail","get-github-events-fail",229912964))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-github-events-success","get-github-events-success",-594973983),(function (db,p__27903){
var vec__27904 = p__27903;
var _ = cljs.core.nth.call(null,vec__27904,(0),null);
var response = cljs.core.nth.call(null,vec__27904,(1),null);
example.utils.http_fx.set_location.call(null,"#/accounts");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-github-events-fail","get-github-events-fail",229912964),(function (db,p__27907){
var vec__27908 = p__27907;
var _ = cljs.core.nth.call(null,vec__27908,(0),null);
var response = cljs.core.nth.call(null,vec__27908,(1),null);
example.utils.http_fx.set_location.call(null,"#/accounts");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"adam",new cljs.core.Keyword(null,"email","email",1415816706),"whatever",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null));
}));

//# sourceMappingURL=events.js.map?rel=1537113923828
