// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.demo_dota2_splash');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('material_ui');
goog.require('material_ui_icons');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('example.demos.events');
goog.require('example.demos.subs');
goog.require('example.utils.http_fx');
goog.require('reagent.impl.template');
example.demos.demo_dota2_splash.global$module$material_ui = goog.global["MaterialUI"];
example.demos.demo_dota2_splash.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
example.demos.demo_dota2_splash._LT_sub = cljs.core.comp.call(null,cljs.core.deref,re_frame.core.subscribe);
example.demos.demo_dota2_splash._GT_evt = re_frame.core.dispatch;
example.demos.demo_dota2_splash.client_id = "28964";
example.demos.demo_dota2_splash.redirect_uri = "http://localhost:3000/api/strava/token";
example.demos.demo_dota2_splash.response_type = "code";
example.demos.demo_dota2_splash.scope = "view_private,write";
example.demos.demo_dota2_splash.approval_prompt = "force";
example.demos.demo_dota2_splash.strava_authorize_url = ["https://www.strava.com/oauth/authorize?","client_id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.demos.demo_dota2_splash.client_id),"&","response_type=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.demos.demo_dota2_splash.response_type),"&","redirect_uri=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.demos.demo_dota2_splash.redirect_uri),"&","approval_prompt=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.demos.demo_dota2_splash.approval_prompt),"&","scope=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example.demos.demo_dota2_splash.scope)].join('');
example.demos.demo_dota2_splash.get_strava_activities = (function example$demos$demo_dota2_splash$get_strava_activities(ev){
return example.demos.demo_dota2_splash._GT_evt.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-strava-activities","get-strava-activities",-536732404)], null));
});
example.demos.demo_dota2_splash.view = (function example$demos$demo_dota2_splash$view(p__33202){
var map__33203 = p__33202;
var map__33203__$1 = ((((!((map__33203 == null)))?(((((map__33203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33203):map__33203);
var props = map__33203__$1;
var classes = cljs.core.get.call(null,map__33203__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(0)], null));
return ((function (component_state,map__33203,map__33203__$1,props,classes){
return (function (){
var current_select = cljs.core.get.call(null,cljs.core.deref.call(null,component_state),new cljs.core.Keyword(null,"selected","selected",574897764));
var strava_activities = example.demos.demo_dota2_splash._LT_sub.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example.demos.subs","strava-activities","example.demos.subs/strava-activities",-397893577)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(150),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(50),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/dota-2.svg",new cljs.core.Keyword(null,"width","width",-384071477),(200)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Helvetica",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),"5v5 Positions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(20),new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Helvetica",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),"What role should you choose in Dota 2?"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(20)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_dota2_splash.global$module$material_ui.Button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"class","class",-2030961996),classes.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_select,strava_activities,component_state,map__33203,map__33203__$1,props,classes){
return (function (ev){
return example.demos.demo_dota2_splash.get_strava_activities.call(null,ev);
});})(current_select,strava_activities,component_state,map__33203,map__33203__$1,props,classes))
], null),"Get Activities"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),example.demos.demo_dota2_splash.strava_authorize_url], null),"Authorize Strava"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(20)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_dota2_splash.global$module$material_ui.Button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"class","class",-2030961996),classes.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_select,strava_activities,component_state,map__33203,map__33203__$1,props,classes){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/heros/roles/hard-carry");
});})(current_select,strava_activities,component_state,map__33203,map__33203__$1,props,classes))
], null),"Get Started"], null)], null)], null);
});
;})(component_state,map__33203,map__33203__$1,props,classes))
});

//# sourceMappingURL=demo_dota2_splash.js.map?rel=1538314832031
