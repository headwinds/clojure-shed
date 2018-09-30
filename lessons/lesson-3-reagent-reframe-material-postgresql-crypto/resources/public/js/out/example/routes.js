// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('example.events');
goog.require('example.subs');
goog.require('example.utils.http_fx');
goog.require('example.demos.demo_dota2_splash');
goog.require('example.demos.demo_hard_carry');
goog.require('example.demos.demo_semi_carry');
goog.require('example.demos.demo_soloist');
goog.require('example.demos.demo_roaming_support');
goog.require('example.demos.demo_hard_support');
example.routes.hook_browser_navigation_BANG_ = (function example$routes$hook_browser_navigation_BANG_(){
var G__31926 = (new goog.History());
goog.events.listen(G__31926,goog.history.EventType.NAVIGATE,((function (G__31926){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__31926))
);

G__31926.setEnabled(true);

return G__31926;
});
example.routes.app_routes = (function example$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__28551__auto___31957 = (function (params__28552__auto__){
if(cljs.core.map_QMARK_.call(null,params__28552__auto__)){
var map__31927 = params__28552__auto__;
var map__31927__$1 = ((((!((map__31927 == null)))?(((((map__31927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31927):map__31927);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28552__auto__)){
var vec__31929 = params__28552__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__28551__auto___31957);


var action__28551__auto___31958 = (function (params__28552__auto__){
if(cljs.core.map_QMARK_.call(null,params__28552__auto__)){
var map__31932 = params__28552__auto__;
var map__31932__$1 = ((((!((map__31932 == null)))?(((((map__31932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31932):map__31932);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-carry"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28552__auto__)){
var vec__31934 = params__28552__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-carry"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/hard-carry",action__28551__auto___31958);


var action__28551__auto___31959 = (function (params__28552__auto__){
if(cljs.core.map_QMARK_.call(null,params__28552__auto__)){
var map__31937 = params__28552__auto__;
var map__31937__$1 = ((((!((map__31937 == null)))?(((((map__31937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31937):map__31937);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"semi-carry"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28552__auto__)){
var vec__31939 = params__28552__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"semi-carry"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/semi-carry",action__28551__auto___31959);


var action__28551__auto___31960 = (function (params__28552__auto__){
if(cljs.core.map_QMARK_.call(null,params__28552__auto__)){
var map__31942 = params__28552__auto__;
var map__31942__$1 = ((((!((map__31942 == null)))?(((((map__31942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31942):map__31942);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"soloist"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28552__auto__)){
var vec__31944 = params__28552__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"soloist"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/soloist",action__28551__auto___31960);


var action__28551__auto___31961 = (function (params__28552__auto__){
if(cljs.core.map_QMARK_.call(null,params__28552__auto__)){
var map__31947 = params__28552__auto__;
var map__31947__$1 = ((((!((map__31947 == null)))?(((((map__31947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31947):map__31947);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"roaming-support"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28552__auto__)){
var vec__31949 = params__28552__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"roaming-support"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/roaming-support",action__28551__auto___31961);


var action__28551__auto___31962 = (function (params__28552__auto__){
if(cljs.core.map_QMARK_.call(null,params__28552__auto__)){
var map__31952 = params__28552__auto__;
var map__31952__$1 = ((((!((map__31952 == null)))?(((((map__31952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31952):map__31952);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-support"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28552__auto__)){
var vec__31954 = params__28552__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-support"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/hard-support",action__28551__auto___31962);


return example.routes.hook_browser_navigation_BANG_.call(null);
});
example.routes.get_main_demo = (function example$routes$get_main_demo(demo_name){
var G__31963 = demo_name;
switch (G__31963) {
case "splash":
return example.demos.demo_dota2_splash.view;

break;
case "hard-carry":
return example.demos.demo_hard_carry.view;

break;
case "semi-carry":
return example.demos.demo_semi_carry.view;

break;
case "soloist":
return example.demos.demo_soloist.view;

break;
case "roaming-support":
return example.demos.demo_roaming_support.view;

break;
case "hard-support":
return example.demos.demo_hard_support.view;

break;
default:
return example.demos.demo_dota2_splash.view;

}
});

//# sourceMappingURL=routes.js.map?rel=1538262333172
