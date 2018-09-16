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
var G__27946 = (new goog.History());
goog.events.listen(G__27946,goog.history.EventType.NAVIGATE,((function (G__27946){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__27946))
);

G__27946.setEnabled(true);

return G__27946;
});
example.routes.app_routes = (function example$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__27934__auto___27977 = (function (params__27935__auto__){
if(cljs.core.map_QMARK_.call(null,params__27935__auto__)){
var map__27947 = params__27935__auto__;
var map__27947__$1 = ((((!((map__27947 == null)))?(((((map__27947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27947):map__27947);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27935__auto__)){
var vec__27949 = params__27935__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27934__auto___27977);


var action__27934__auto___27978 = (function (params__27935__auto__){
if(cljs.core.map_QMARK_.call(null,params__27935__auto__)){
var map__27952 = params__27935__auto__;
var map__27952__$1 = ((((!((map__27952 == null)))?(((((map__27952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27952):map__27952);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-carry"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27935__auto__)){
var vec__27954 = params__27935__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-carry"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/hard-carry",action__27934__auto___27978);


var action__27934__auto___27979 = (function (params__27935__auto__){
if(cljs.core.map_QMARK_.call(null,params__27935__auto__)){
var map__27957 = params__27935__auto__;
var map__27957__$1 = ((((!((map__27957 == null)))?(((((map__27957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27957):map__27957);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"semi-carry"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27935__auto__)){
var vec__27959 = params__27935__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"semi-carry"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/semi-carry",action__27934__auto___27979);


var action__27934__auto___27980 = (function (params__27935__auto__){
if(cljs.core.map_QMARK_.call(null,params__27935__auto__)){
var map__27962 = params__27935__auto__;
var map__27962__$1 = ((((!((map__27962 == null)))?(((((map__27962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27962):map__27962);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"soloist"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27935__auto__)){
var vec__27964 = params__27935__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"soloist"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/soloist",action__27934__auto___27980);


var action__27934__auto___27981 = (function (params__27935__auto__){
if(cljs.core.map_QMARK_.call(null,params__27935__auto__)){
var map__27967 = params__27935__auto__;
var map__27967__$1 = ((((!((map__27967 == null)))?(((((map__27967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27967):map__27967);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"roaming-support"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27935__auto__)){
var vec__27969 = params__27935__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"roaming-support"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/roaming-support",action__27934__auto___27981);


var action__27934__auto___27982 = (function (params__27935__auto__){
if(cljs.core.map_QMARK_.call(null,params__27935__auto__)){
var map__27972 = params__27935__auto__;
var map__27972__$1 = ((((!((map__27972 == null)))?(((((map__27972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27972):map__27972);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-support"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27935__auto__)){
var vec__27974 = params__27935__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-support"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/hard-support",action__27934__auto___27982);


return example.routes.hook_browser_navigation_BANG_.call(null);
});
example.routes.get_main_demo = (function example$routes$get_main_demo(demo_name){
var G__27983 = demo_name;
switch (G__27983) {
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

//# sourceMappingURL=routes.js.map?rel=1537113923987
