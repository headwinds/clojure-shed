// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.demo_hard_carry');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('material_ui_icons');
goog.require('example.components.survey');
example.demos.demo_hard_carry.global$module$material_ui = goog.global["MaterialUI"];
example.demos.demo_hard_carry.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
if((typeof example !== 'undefined') && (typeof example.demos !== 'undefined') && (typeof example.demos.demo_hard_carry !== 'undefined') && (typeof example.demos.demo_hard_carry.text_state !== 'undefined')){
} else {
example.demos.demo_hard_carry.text_state = reagent.core.atom.call(null,"foobar");
}
example.demos.demo_hard_carry.view = (function example$demos$demo_hard_carry$view(p__26831){
var map__26832 = p__26831;
var map__26832__$1 = ((((!((map__26832 == null)))?(((((map__26832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26832):map__26832);
var props = map__26832__$1;
var classes = cljs.core.get.call(null,map__26832__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(0)], null));
return ((function (component_state,map__26832,map__26832__$1,props,classes){
return (function (){
var current_select = cljs.core.get.call(null,cljs.core.deref.call(null,component_state),new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(100)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Hard Carry"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.components.survey.view,classes], null)], null);
});
;})(component_state,map__26832,map__26832__$1,props,classes))
});

//# sourceMappingURL=demo_hard_carry.js.map?rel=1537105875571
