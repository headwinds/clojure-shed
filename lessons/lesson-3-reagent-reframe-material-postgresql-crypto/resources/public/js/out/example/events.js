// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.events');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('example.utils.http_fx');
goog.require('goog.object');
goog.require('example.db');
goog.require('example.utils.js');
goog.require('reagent.impl.template');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return example.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),(function (db,p__26866){
var vec__26867 = p__26866;
var _ = cljs.core.nth.call(null,vec__26867,(0),null);
var active_demo = cljs.core.nth.call(null,vec__26867,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),(function (db,p__26870){
var vec__26871 = p__26870;
var _ = cljs.core.nth.call(null,vec__26871,(0),null);
var active_demo = cljs.core.nth.call(null,vec__26871,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"post-add-log","post-add-log",2016590953),(function (p__26874,p__26875){
var map__26876 = p__26874;
var map__26876__$1 = ((((!((map__26876 == null)))?(((((map__26876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26876):map__26876);
var db = cljs.core.get.call(null,map__26876__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26877 = p__26875;
var _ = cljs.core.nth.call(null,vec__26877,(0),null);
var vals = cljs.core.nth.call(null,vec__26877,(1),null);
var username = cljs.core.deref.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(vals));
var goal = cljs.core.deref.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501).cljs$core$IFn$_invoke$arity$1(vals));
var major_bonus = cljs.core.deref.call(null,new cljs.core.Keyword(null,"major-bonus","major-bonus",-87318816).cljs$core$IFn$_invoke$arity$1(vals));
var minor_bonus = cljs.core.deref.call(null,new cljs.core.Keyword(null,"major-bonus","major-bonus",-87318816).cljs$core$IFn$_invoke$arity$1(vals));
var sidequest_bonus = cljs.core.deref.call(null,new cljs.core.Keyword(null,"sidequest-bonus","sidequest-bonus",979738100).cljs$core$IFn$_invoke$arity$1(vals));
var payload = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"goal","goal",-2073396501),goal,new cljs.core.Keyword(null,"major-bonus","major-bonus",-87318816),major_bonus,new cljs.core.Keyword(null,"minor-bonus","minor-bonus",-1950556957),minor_bonus,new cljs.core.Keyword(null,"sidequest-bonus","sidequest-bonus",979738100),sidequest_bonus], null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.POST.call(null,"/api/logs/add",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),payload], null),new cljs.core.Keyword(null,"post-add-log-success","post-add-log-success",-2009973737),new cljs.core.Keyword(null,"post-add-log-fail","post-add-log-fail",-1120993213))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"post-add-log-success","post-add-log-success",-2009973737),(function (db,p__26881){
var vec__26882 = p__26881;
var _ = cljs.core.nth.call(null,vec__26882,(0),null);
var response = cljs.core.nth.call(null,vec__26882,(1),null);
var success_notification = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Log added!",new cljs.core.Keyword(null,"type","type",1174270348),"success",new cljs.core.Keyword(null,"show","show",-576705889),true], null);
return example.utils.js.log.call(null,"post-add-log-success",response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"post-add-log-fail","post-add-log-fail",-1120993213),(function (db,p__26885){
var vec__26886 = p__26885;
var _ = cljs.core.nth.call(null,vec__26886,(0),null);
var response = cljs.core.nth.call(null,vec__26886,(1),null);
var fail_notification = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Log failed!",new cljs.core.Keyword(null,"type","type",1174270348),"error",new cljs.core.Keyword(null,"show","show",-576705889),true], null);
return example.utils.js.log.call(null,"post-add-log-fail",response);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-logs","fetch-logs",1340819569),(function (p__26889,p__26890){
var map__26891 = p__26889;
var map__26891__$1 = ((((!((map__26891 == null)))?(((((map__26891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26891):map__26891);
var db = cljs.core.get.call(null,map__26891__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26892 = p__26890;
var _ = cljs.core.nth.call(null,vec__26892,(0),null);
var vals = cljs.core.nth.call(null,vec__26892,(1),null);
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(vals);
var limit = new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(vals);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,"/api/logs/get",new cljs.core.Keyword(null,"fetch-logs-success","fetch-logs-success",440672751),new cljs.core.Keyword(null,"fetch-logs-failure","fetch-logs-failure",-1277115617))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fetch-logs-success","fetch-logs-success",440672751),(function (db,p__26896){
var vec__26897 = p__26896;
var _ = cljs.core.nth.call(null,vec__26897,(0),null);
var response = cljs.core.nth.call(null,vec__26897,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"logs","logs",1068148008),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fetch-accounts-failure","fetch-accounts-failure",130164813),(function (db,p__26900){
var vec__26901 = p__26900;
var _ = cljs.core.nth.call(null,vec__26901,(0),null);
var response = cljs.core.nth.call(null,vec__26901,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032),response);
}));
example.events.github_origin = "https://api.github.com";
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-github-events","get-github-events",2123865953),(function (p__26904,p__26905){
var map__26906 = p__26904;
var map__26906__$1 = ((((!((map__26906 == null)))?(((((map__26906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26906):map__26906);
var db = cljs.core.get.call(null,map__26906__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26907 = p__26905;
var _ = cljs.core.nth.call(null,vec__26907,(0),null);
var vals = cljs.core.nth.call(null,vec__26907,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),example.utils.http_fx.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.events.github_origin),"/orgs/reagent-project/events"].join(''),new cljs.core.Keyword(null,"get-github-events-success","get-github-events-success",-594973983),new cljs.core.Keyword(null,"get-github-events-fail","get-github-events-fail",229912964))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-github-events-success","get-github-events-success",-594973983),(function (db,p__26911){
var vec__26912 = p__26911;
var _ = cljs.core.nth.call(null,vec__26912,(0),null);
var response = cljs.core.nth.call(null,vec__26912,(1),null);
example.utils.http_fx.set_location.call(null,"#/accounts");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-github-events-fail","get-github-events-fail",229912964),(function (db,p__26915){
var vec__26916 = p__26915;
var _ = cljs.core.nth.call(null,vec__26916,(0),null);
var response = cljs.core.nth.call(null,vec__26916,(1),null);
example.utils.http_fx.set_location.call(null,"#/accounts");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"adam",new cljs.core.Keyword(null,"email","email",1415816706),"whatever",new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null));
}));

//# sourceMappingURL=events.js.map?rel=1536537358880