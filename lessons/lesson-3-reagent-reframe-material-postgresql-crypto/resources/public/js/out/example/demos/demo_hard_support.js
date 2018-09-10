// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.demo_hard_support');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('material_ui_icons');
example.demos.demo_hard_support.global$module$material_ui = goog.global["MaterialUI"];
example.demos.demo_hard_support.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
if((typeof example !== 'undefined') && (typeof example.demos !== 'undefined') && (typeof example.demos.demo_hard_support !== 'undefined') && (typeof example.demos.demo_hard_support.text_state !== 'undefined')){
} else {
example.demos.demo_hard_support.text_state = reagent.core.atom.call(null,"foobar");
}
example.demos.demo_hard_support.view = (function example$demos$demo_hard_support$view(p__26857){
var map__26858 = p__26857;
var map__26858__$1 = ((((!((map__26858 == null)))?(((((map__26858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26858):map__26858);
var props = map__26858__$1;
var classes = cljs.core.get.call(null,map__26858__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(0)], null));
return ((function (component_state,map__26858,map__26858__$1,props,classes){
return (function (){
var current_select = cljs.core.get.call(null,cljs.core.deref.call(null,component_state),new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(100)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Hard Support"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_hard_support.global$module$material_ui.Toolbar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable-gutters","disable-gutters",1438156978),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_hard_support.global$module$material_ui.Button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"class","class",-2030961996),classes.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_select,component_state,map__26858,map__26858__$1,props,classes){
return (function (){
return cljs.core.swap_BANG_.call(null,example.demos.demo_hard_support.text_state,cljs.core.str," foo");
});})(current_select,component_state,map__26858,map__26858__$1,props,classes))
], null),"Update value property",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_hard_support.global$module$material_ui_icons.AddBox], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_hard_support.global$module$material_ui.Button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"class","class",-2030961996),classes.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_select,component_state,map__26858,map__26858__$1,props,classes){
return (function (){
return cljs.core.reset_BANG_.call(null,example.demos.demo_hard_support.text_state,"");
});})(current_select,component_state,map__26858,map__26858__$1,props,classes))
], null),"Reset",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_hard_support.global$module$material_ui_icons.Clear], null)], null)], null)], null);
});
;})(component_state,map__26858,map__26858__$1,props,classes))
});

//# sourceMappingURL=demo_hard_support.js.map?rel=1536537358831
