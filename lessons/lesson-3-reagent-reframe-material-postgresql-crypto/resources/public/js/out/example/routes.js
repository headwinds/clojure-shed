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
var G__33228 = (new goog.History());
goog.events.listen(G__33228,goog.history.EventType.NAVIGATE,((function (G__33228){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__33228))
);

G__33228.setEnabled(true);

return G__33228;
});
example.routes.app_routes = (function example$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__33216__auto___33259 = (function (params__33217__auto__){
if(cljs.core.map_QMARK_.call(null,params__33217__auto__)){
var map__33229 = params__33217__auto__;
var map__33229__$1 = ((((!((map__33229 == null)))?(((((map__33229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33229):map__33229);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33217__auto__)){
var vec__33231 = params__33217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__33216__auto___33259);


var action__33216__auto___33260 = (function (params__33217__auto__){
if(cljs.core.map_QMARK_.call(null,params__33217__auto__)){
var map__33234 = params__33217__auto__;
var map__33234__$1 = ((((!((map__33234 == null)))?(((((map__33234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33234):map__33234);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-carry"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33217__auto__)){
var vec__33236 = params__33217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-carry"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/hard-carry",action__33216__auto___33260);


var action__33216__auto___33261 = (function (params__33217__auto__){
if(cljs.core.map_QMARK_.call(null,params__33217__auto__)){
var map__33239 = params__33217__auto__;
var map__33239__$1 = ((((!((map__33239 == null)))?(((((map__33239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33239):map__33239);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"semi-carry"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33217__auto__)){
var vec__33241 = params__33217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"semi-carry"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/semi-carry",action__33216__auto___33261);


var action__33216__auto___33262 = (function (params__33217__auto__){
if(cljs.core.map_QMARK_.call(null,params__33217__auto__)){
var map__33244 = params__33217__auto__;
var map__33244__$1 = ((((!((map__33244 == null)))?(((((map__33244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33244):map__33244);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"soloist"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33217__auto__)){
var vec__33246 = params__33217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"soloist"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/soloist",action__33216__auto___33262);


var action__33216__auto___33263 = (function (params__33217__auto__){
if(cljs.core.map_QMARK_.call(null,params__33217__auto__)){
var map__33249 = params__33217__auto__;
var map__33249__$1 = ((((!((map__33249 == null)))?(((((map__33249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33249):map__33249);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"roaming-support"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33217__auto__)){
var vec__33251 = params__33217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"roaming-support"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/roaming-support",action__33216__auto___33263);


var action__33216__auto___33264 = (function (params__33217__auto__){
if(cljs.core.map_QMARK_.call(null,params__33217__auto__)){
var map__33254 = params__33217__auto__;
var map__33254__$1 = ((((!((map__33254 == null)))?(((((map__33254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33254):map__33254);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-support"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33217__auto__)){
var vec__33256 = params__33217__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-support"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/hard-support",action__33216__auto___33264);


return example.routes.hook_browser_navigation_BANG_.call(null);
});
example.routes.get_main_demo = (function example$routes$get_main_demo(demo_name){
var G__33265 = demo_name;
switch (G__33265) {
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

//# sourceMappingURL=routes.js.map?rel=1538314832120
