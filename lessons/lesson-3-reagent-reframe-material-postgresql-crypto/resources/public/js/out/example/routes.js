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
var G__27191 = (new goog.History());
goog.events.listen(G__27191,goog.history.EventType.NAVIGATE,((function (G__27191){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__27191))
);

G__27191.setEnabled(true);

return G__27191;
});
example.routes.app_routes = (function example$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__26947__auto___27222 = (function (params__26948__auto__){
if(cljs.core.map_QMARK_.call(null,params__26948__auto__)){
var map__27192 = params__26948__auto__;
var map__27192__$1 = ((((!((map__27192 == null)))?(((((map__27192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27192):map__27192);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26948__auto__)){
var vec__27194 = params__26948__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__26947__auto___27222);


var action__26947__auto___27223 = (function (params__26948__auto__){
if(cljs.core.map_QMARK_.call(null,params__26948__auto__)){
var map__27197 = params__26948__auto__;
var map__27197__$1 = ((((!((map__27197 == null)))?(((((map__27197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27197):map__27197);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-carry"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26948__auto__)){
var vec__27199 = params__26948__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-carry"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/hard-carry",action__26947__auto___27223);


var action__26947__auto___27224 = (function (params__26948__auto__){
if(cljs.core.map_QMARK_.call(null,params__26948__auto__)){
var map__27202 = params__26948__auto__;
var map__27202__$1 = ((((!((map__27202 == null)))?(((((map__27202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27202):map__27202);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"semi-carry"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26948__auto__)){
var vec__27204 = params__26948__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"semi-carry"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/semi-carry",action__26947__auto___27224);


var action__26947__auto___27225 = (function (params__26948__auto__){
if(cljs.core.map_QMARK_.call(null,params__26948__auto__)){
var map__27207 = params__26948__auto__;
var map__27207__$1 = ((((!((map__27207 == null)))?(((((map__27207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27207):map__27207);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"soloist"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26948__auto__)){
var vec__27209 = params__26948__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"soloist"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/soloist",action__26947__auto___27225);


var action__26947__auto___27226 = (function (params__26948__auto__){
if(cljs.core.map_QMARK_.call(null,params__26948__auto__)){
var map__27212 = params__26948__auto__;
var map__27212__$1 = ((((!((map__27212 == null)))?(((((map__27212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27212):map__27212);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"roaming-support"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26948__auto__)){
var vec__27214 = params__26948__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"roaming-support"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/roaming-support",action__26947__auto___27226);


var action__26947__auto___27227 = (function (params__26948__auto__){
if(cljs.core.map_QMARK_.call(null,params__26948__auto__)){
var map__27217 = params__26948__auto__;
var map__27217__$1 = ((((!((map__27217 == null)))?(((((map__27217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27217):map__27217);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-support"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26948__auto__)){
var vec__27219 = params__26948__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-support"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/hard-support",action__26947__auto___27227);


return example.routes.hook_browser_navigation_BANG_.call(null);
});
example.routes.get_main_demo = (function example$routes$get_main_demo(demo_name){
var G__27228 = demo_name;
switch (G__27228) {
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

//# sourceMappingURL=routes.js.map?rel=1536537359424
