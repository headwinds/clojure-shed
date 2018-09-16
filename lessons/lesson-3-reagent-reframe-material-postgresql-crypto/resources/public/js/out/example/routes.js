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
var G__26857 = (new goog.History());
goog.events.listen(G__26857,goog.history.EventType.NAVIGATE,((function (G__26857){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__26857))
);

G__26857.setEnabled(true);

return G__26857;
});
example.routes.app_routes = (function example$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__26845__auto___26888 = (function (params__26846__auto__){
if(cljs.core.map_QMARK_.call(null,params__26846__auto__)){
var map__26858 = params__26846__auto__;
var map__26858__$1 = ((((!((map__26858 == null)))?(((((map__26858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26858):map__26858);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26846__auto__)){
var vec__26860 = params__26846__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"splash"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__26845__auto___26888);


var action__26845__auto___26889 = (function (params__26846__auto__){
if(cljs.core.map_QMARK_.call(null,params__26846__auto__)){
var map__26863 = params__26846__auto__;
var map__26863__$1 = ((((!((map__26863 == null)))?(((((map__26863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26863):map__26863);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-carry"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26846__auto__)){
var vec__26865 = params__26846__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-carry"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/hard-carry",action__26845__auto___26889);


var action__26845__auto___26890 = (function (params__26846__auto__){
if(cljs.core.map_QMARK_.call(null,params__26846__auto__)){
var map__26868 = params__26846__auto__;
var map__26868__$1 = ((((!((map__26868 == null)))?(((((map__26868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26868):map__26868);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"semi-carry"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26846__auto__)){
var vec__26870 = params__26846__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"semi-carry"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/semi-carry",action__26845__auto___26890);


var action__26845__auto___26891 = (function (params__26846__auto__){
if(cljs.core.map_QMARK_.call(null,params__26846__auto__)){
var map__26873 = params__26846__auto__;
var map__26873__$1 = ((((!((map__26873 == null)))?(((((map__26873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26873):map__26873);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"soloist"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26846__auto__)){
var vec__26875 = params__26846__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"soloist"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/soloist",action__26845__auto___26891);


var action__26845__auto___26892 = (function (params__26846__auto__){
if(cljs.core.map_QMARK_.call(null,params__26846__auto__)){
var map__26878 = params__26846__auto__;
var map__26878__$1 = ((((!((map__26878 == null)))?(((((map__26878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26878):map__26878);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"roaming-support"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26846__auto__)){
var vec__26880 = params__26846__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"roaming-support"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/roaming-support",action__26845__auto___26892);


var action__26845__auto___26893 = (function (params__26846__auto__){
if(cljs.core.map_QMARK_.call(null,params__26846__auto__)){
var map__26883 = params__26846__auto__;
var map__26883__$1 = ((((!((map__26883 == null)))?(((((map__26883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26883):map__26883);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-support"], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26846__auto__)){
var vec__26885 = params__26846__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),"hard-support"], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/heros/roles/hard-support",action__26845__auto___26893);


return example.routes.hook_browser_navigation_BANG_.call(null);
});
example.routes.get_main_demo = (function example$routes$get_main_demo(demo_name){
var G__26894 = demo_name;
switch (G__26894) {
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

//# sourceMappingURL=routes.js.map?rel=1537105875653
