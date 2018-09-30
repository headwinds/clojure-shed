// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.components.survey');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('material_ui_icons');
goog.require('example.events');
goog.require('example.utils.http_fx');
goog.require('reagent.impl.template');
example.components.survey.global$module$material_ui = goog.global["MaterialUI"];
example.components.survey.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
if((typeof example !== 'undefined') && (typeof example.components !== 'undefined') && (typeof example.components.survey !== 'undefined') && (typeof example.components.survey.username_state !== 'undefined')){
} else {
example.components.survey.username_state = reagent.core.atom.call(null,"");
}
if((typeof example !== 'undefined') && (typeof example.components !== 'undefined') && (typeof example.components.survey !== 'undefined') && (typeof example.components.survey.goal_state !== 'undefined')){
} else {
example.components.survey.goal_state = reagent.core.atom.call(null,"");
}
if((typeof example !== 'undefined') && (typeof example.components !== 'undefined') && (typeof example.components.survey !== 'undefined') && (typeof example.components.survey.major_bonus_state !== 'undefined')){
} else {
example.components.survey.major_bonus_state = reagent.core.atom.call(null,"");
}
if((typeof example !== 'undefined') && (typeof example.components !== 'undefined') && (typeof example.components.survey !== 'undefined') && (typeof example.components.survey.minor_bonus_state !== 'undefined')){
} else {
example.components.survey.minor_bonus_state = reagent.core.atom.call(null,"");
}
if((typeof example !== 'undefined') && (typeof example.components !== 'undefined') && (typeof example.components.survey !== 'undefined') && (typeof example.components.survey.sidequest_state !== 'undefined')){
} else {
example.components.survey.sidequest_state = reagent.core.atom.call(null,"");
}
example.components.survey.handle_submit_click = (function example$components$survey$handle_submit_click(){
return example.utils.http_fx._GT_evt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-add-log","post-add-log",2016590953),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"username","username",1605666410),example.components.survey.username_state,new cljs.core.Keyword(null,"goal","goal",-2073396501),example.components.survey.goal_state,new cljs.core.Keyword(null,"major-bonus","major-bonus",-87318816),example.components.survey.major_bonus_state,new cljs.core.Keyword(null,"minor-bonus","minor-bonus",-1950556957),example.components.survey.minor_bonus_state,new cljs.core.Keyword(null,"sidequest-bonus","sidequest-bonus",979738100),example.components.survey.sidequest_state], null)], null));
});
example.components.survey.input_component = reagent.core.reactify_component.call(null,(function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.dissoc.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"inputRef","inputRef",-414128011).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.Keyword(null,"inputRef","inputRef",-414128011))], null);
}));
example.components.survey.textarea_component = reagent.core.reactify_component.call(null,(function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.dissoc.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"inputRef","inputRef",-414128011).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.Keyword(null,"inputRef","inputRef",-414128011))], null);
}));
example.components.survey.text_field = (function example$components$survey$text_field(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34019 = arguments.length;
var i__4532__auto___34020 = (0);
while(true){
if((i__4532__auto___34020 < len__4531__auto___34019)){
args__4534__auto__.push((arguments[i__4532__auto___34020]));

var G__34021 = (i__4532__auto___34020 + (1));
i__4532__auto___34020 = G__34021;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return example.components.survey.text_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

example.components.survey.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var props__$1 = reagent.impl.template.convert_prop_value.call(null,cljs.core.assoc_in.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"InputProps","InputProps",-1485068760),new cljs.core.Keyword(null,"inputComponent","inputComponent",1255542456)], null),(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"multiline","multiline",-1084693234).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(and__3938__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"maxRows","maxRows",-392329376).cljs$core$IFn$_invoke$arity$1(props));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())?example.components.survey.textarea_component:(cljs.core.truth_(new cljs.core.Keyword(null,"multiline","multiline",-1084693234).cljs$core$IFn$_invoke$arity$1(props))?null:(cljs.core.truth_(new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(props))?null:example.components.survey.input_component
)))));
return cljs.core.apply.call(null,reagent.core.create_element,example.components.survey.global$module$material_ui.TextField,props__$1,cljs.core.map.call(null,reagent.core.as_element,children));
});

example.components.survey.text_field.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
example.components.survey.text_field.cljs$lang$applyTo = (function (seq34017){
var G__34018 = cljs.core.first.call(null,seq34017);
var seq34017__$1 = cljs.core.next.call(null,seq34017);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34018,seq34017__$1);
});

example.components.survey.style_text = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(400)], null);
example.components.survey.view = (function example$components$survey$view(classes){
var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),(0)], null));
return ((function (component_state){
return (function (){
var current_select = cljs.core.get.call(null,cljs.core.deref.call(null,component_state),new cljs.core.Keyword(null,"selected","selected",574897764));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.components.survey.global$module$material_ui.Grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"direction","direction",-633359395),"column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Survey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.components.survey.text_field,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,example.components.survey.username_state),new cljs.core.Keyword(null,"label","label",1718410804),"Username",new cljs.core.Keyword(null,"style","style",-496642736),example.components.survey.style_text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"with hashed usernames who needs passwords?!",new cljs.core.Keyword(null,"class","class",-2030961996),classes.textField,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_select,component_state){
return (function (e){
return cljs.core.reset_BANG_.call(null,example.components.survey.username_state,e.target.value);
});})(current_select,component_state))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.components.survey.text_field,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,example.components.survey.goal_state),new cljs.core.Keyword(null,"label","label",1718410804),"Goal",new cljs.core.Keyword(null,"style","style",-496642736),example.components.survey.style_text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Main Goal",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"what do you really want to achieve?",new cljs.core.Keyword(null,"class","class",-2030961996),classes.textField,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_select,component_state){
return (function (e){
return cljs.core.reset_BANG_.call(null,example.components.survey.goal_state,e.target.value);
});})(current_select,component_state))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.components.survey.text_field,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,example.components.survey.major_bonus_state),new cljs.core.Keyword(null,"label","label",1718410804),"Major Bonus",new cljs.core.Keyword(null,"style","style",-496642736),example.components.survey.style_text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Major Bonus Goal",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"add a hard goal to compliment your main achivement",new cljs.core.Keyword(null,"class","class",-2030961996),classes.textField,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_select,component_state){
return (function (e){
return cljs.core.reset_BANG_.call(null,example.components.survey.major_bonus_state,e.target.value);
});})(current_select,component_state))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.components.survey.text_field,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,example.components.survey.minor_bonus_state),new cljs.core.Keyword(null,"label","label",1718410804),"Minor Bonus",new cljs.core.Keyword(null,"style","style",-496642736),example.components.survey.style_text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Minor Bonus",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"add a soft goal to compliment your main achivement",new cljs.core.Keyword(null,"class","class",-2030961996),classes.textField,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_select,component_state){
return (function (e){
return cljs.core.reset_BANG_.call(null,example.components.survey.minor_bonus_state,e.target.value);
});})(current_select,component_state))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.components.survey.text_field,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,example.components.survey.sidequest_state),new cljs.core.Keyword(null,"label","label",1718410804),"Side Quest Bonus",new cljs.core.Keyword(null,"style","style",-496642736),example.components.survey.style_text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Side Quest Bonus",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"add a side goal that is related to the results of this achivement",new cljs.core.Keyword(null,"class","class",-2030961996),classes.textField,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_select,component_state){
return (function (e){
return cljs.core.reset_BANG_.call(null,example.components.survey.sidequest_state,e.target.value);
});})(current_select,component_state))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.components.survey.global$module$material_ui.Toolbar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disable-gutters","disable-gutters",1438156978),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.components.survey.global$module$material_ui.Button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"none"], null),new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"class","class",-2030961996),classes.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_select,component_state){
return (function (){
return example.components.survey.handle_submit_click.call(null);
});})(current_select,component_state))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.components.survey.global$module$material_ui_icons.AddBox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null)], null)], null),"Submit Log"], null)], null)], null)], null);
});
;})(component_state))
});

//# sourceMappingURL=survey.js.map?rel=1538314527824
