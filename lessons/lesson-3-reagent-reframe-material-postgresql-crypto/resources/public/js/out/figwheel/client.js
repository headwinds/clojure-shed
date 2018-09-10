// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e37300){if((e37300 instanceof Error)){
var e = e37300;
return "Error: Unable to stringify";
} else {
throw e37300;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37303 = arguments.length;
switch (G__37303) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37301_SHARP_){
if(typeof p1__37301_SHARP_ === 'string'){
return p1__37301_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37301_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___37306 = arguments.length;
var i__4532__auto___37307 = (0);
while(true){
if((i__4532__auto___37307 < len__4531__auto___37306)){
args__4534__auto__.push((arguments[i__4532__auto___37307]));

var G__37308 = (i__4532__auto___37307 + (1));
i__4532__auto___37307 = G__37308;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37305){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37305));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___37310 = arguments.length;
var i__4532__auto___37311 = (0);
while(true){
if((i__4532__auto___37311 < len__4531__auto___37310)){
args__4534__auto__.push((arguments[i__4532__auto___37311]));

var G__37312 = (i__4532__auto___37311 + (1));
i__4532__auto___37311 = G__37312;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37309){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37309));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37313){
var map__37314 = p__37313;
var map__37314__$1 = ((((!((map__37314 == null)))?(((((map__37314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37314):map__37314);
var message = cljs.core.get.call(null,map__37314__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37314__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33672__auto___37393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33672__auto___37393,ch){
return (function (){
var f__33673__auto__ = (function (){var switch__33649__auto__ = ((function (c__33672__auto___37393,ch){
return (function (state_37365){
var state_val_37366 = (state_37365[(1)]);
if((state_val_37366 === (7))){
var inst_37361 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
var statearr_37367_37394 = state_37365__$1;
(statearr_37367_37394[(2)] = inst_37361);

(statearr_37367_37394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (1))){
var state_37365__$1 = state_37365;
var statearr_37368_37395 = state_37365__$1;
(statearr_37368_37395[(2)] = null);

(statearr_37368_37395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (4))){
var inst_37318 = (state_37365[(7)]);
var inst_37318__$1 = (state_37365[(2)]);
var state_37365__$1 = (function (){var statearr_37369 = state_37365;
(statearr_37369[(7)] = inst_37318__$1);

return statearr_37369;
})();
if(cljs.core.truth_(inst_37318__$1)){
var statearr_37370_37396 = state_37365__$1;
(statearr_37370_37396[(1)] = (5));

} else {
var statearr_37371_37397 = state_37365__$1;
(statearr_37371_37397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (15))){
var inst_37325 = (state_37365[(8)]);
var inst_37340 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37325);
var inst_37341 = cljs.core.first.call(null,inst_37340);
var inst_37342 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37341);
var inst_37343 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37342)].join('');
var inst_37344 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37343);
var state_37365__$1 = state_37365;
var statearr_37372_37398 = state_37365__$1;
(statearr_37372_37398[(2)] = inst_37344);

(statearr_37372_37398[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (13))){
var inst_37349 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
var statearr_37373_37399 = state_37365__$1;
(statearr_37373_37399[(2)] = inst_37349);

(statearr_37373_37399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (6))){
var state_37365__$1 = state_37365;
var statearr_37374_37400 = state_37365__$1;
(statearr_37374_37400[(2)] = null);

(statearr_37374_37400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (17))){
var inst_37347 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
var statearr_37375_37401 = state_37365__$1;
(statearr_37375_37401[(2)] = inst_37347);

(statearr_37375_37401[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (3))){
var inst_37363 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37365__$1,inst_37363);
} else {
if((state_val_37366 === (12))){
var inst_37324 = (state_37365[(9)]);
var inst_37338 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37324,opts);
var state_37365__$1 = state_37365;
if(cljs.core.truth_(inst_37338)){
var statearr_37376_37402 = state_37365__$1;
(statearr_37376_37402[(1)] = (15));

} else {
var statearr_37377_37403 = state_37365__$1;
(statearr_37377_37403[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (2))){
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37365__$1,(4),ch);
} else {
if((state_val_37366 === (11))){
var inst_37325 = (state_37365[(8)]);
var inst_37330 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37331 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37325);
var inst_37332 = cljs.core.async.timeout.call(null,(1000));
var inst_37333 = [inst_37331,inst_37332];
var inst_37334 = (new cljs.core.PersistentVector(null,2,(5),inst_37330,inst_37333,null));
var state_37365__$1 = state_37365;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37365__$1,(14),inst_37334);
} else {
if((state_val_37366 === (9))){
var inst_37325 = (state_37365[(8)]);
var inst_37351 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37352 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37325);
var inst_37353 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37352);
var inst_37354 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37353)].join('');
var inst_37355 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37354);
var state_37365__$1 = (function (){var statearr_37378 = state_37365;
(statearr_37378[(10)] = inst_37351);

return statearr_37378;
})();
var statearr_37379_37404 = state_37365__$1;
(statearr_37379_37404[(2)] = inst_37355);

(statearr_37379_37404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (5))){
var inst_37318 = (state_37365[(7)]);
var inst_37320 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37321 = (new cljs.core.PersistentArrayMap(null,2,inst_37320,null));
var inst_37322 = (new cljs.core.PersistentHashSet(null,inst_37321,null));
var inst_37323 = figwheel.client.focus_msgs.call(null,inst_37322,inst_37318);
var inst_37324 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37323);
var inst_37325 = cljs.core.first.call(null,inst_37323);
var inst_37326 = figwheel.client.autoload_QMARK_.call(null);
var state_37365__$1 = (function (){var statearr_37380 = state_37365;
(statearr_37380[(8)] = inst_37325);

(statearr_37380[(9)] = inst_37324);

return statearr_37380;
})();
if(cljs.core.truth_(inst_37326)){
var statearr_37381_37405 = state_37365__$1;
(statearr_37381_37405[(1)] = (8));

} else {
var statearr_37382_37406 = state_37365__$1;
(statearr_37382_37406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (14))){
var inst_37336 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
var statearr_37383_37407 = state_37365__$1;
(statearr_37383_37407[(2)] = inst_37336);

(statearr_37383_37407[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (16))){
var state_37365__$1 = state_37365;
var statearr_37384_37408 = state_37365__$1;
(statearr_37384_37408[(2)] = null);

(statearr_37384_37408[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (10))){
var inst_37357 = (state_37365[(2)]);
var state_37365__$1 = (function (){var statearr_37385 = state_37365;
(statearr_37385[(11)] = inst_37357);

return statearr_37385;
})();
var statearr_37386_37409 = state_37365__$1;
(statearr_37386_37409[(2)] = null);

(statearr_37386_37409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (8))){
var inst_37324 = (state_37365[(9)]);
var inst_37328 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37324,opts);
var state_37365__$1 = state_37365;
if(cljs.core.truth_(inst_37328)){
var statearr_37387_37410 = state_37365__$1;
(statearr_37387_37410[(1)] = (11));

} else {
var statearr_37388_37411 = state_37365__$1;
(statearr_37388_37411[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33672__auto___37393,ch))
;
return ((function (switch__33649__auto__,c__33672__auto___37393,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33650__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33650__auto____0 = (function (){
var statearr_37389 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37389[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33650__auto__);

(statearr_37389[(1)] = (1));

return statearr_37389;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33650__auto____1 = (function (state_37365){
while(true){
var ret_value__33651__auto__ = (function (){try{while(true){
var result__33652__auto__ = switch__33649__auto__.call(null,state_37365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33652__auto__;
}
break;
}
}catch (e37390){if((e37390 instanceof Object)){
var ex__33653__auto__ = e37390;
var statearr_37391_37412 = state_37365;
(statearr_37391_37412[(5)] = ex__33653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37413 = state_37365;
state_37365 = G__37413;
continue;
} else {
return ret_value__33651__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33650__auto__ = function(state_37365){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33650__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33650__auto____1.call(this,state_37365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33650__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33650__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33650__auto__;
})()
;})(switch__33649__auto__,c__33672__auto___37393,ch))
})();
var state__33674__auto__ = (function (){var statearr_37392 = f__33673__auto__.call(null);
(statearr_37392[(6)] = c__33672__auto___37393);

return statearr_37392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33674__auto__);
});})(c__33672__auto___37393,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37414_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37414_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37418 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37418){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_37416 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37417 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_37416,_STAR_print_fn_STAR_37417,sb,base_path_37418){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_37416,_STAR_print_fn_STAR_37417,sb,base_path_37418))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37417;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37416;
}}catch (e37415){if((e37415 instanceof Error)){
var e = e37415;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37418], null));
} else {
var e = e37415;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37418))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37419){
var map__37420 = p__37419;
var map__37420__$1 = ((((!((map__37420 == null)))?(((((map__37420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37420):map__37420);
var opts = map__37420__$1;
var build_id = cljs.core.get.call(null,map__37420__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37420,map__37420__$1,opts,build_id){
return (function (p__37422){
var vec__37423 = p__37422;
var seq__37424 = cljs.core.seq.call(null,vec__37423);
var first__37425 = cljs.core.first.call(null,seq__37424);
var seq__37424__$1 = cljs.core.next.call(null,seq__37424);
var map__37426 = first__37425;
var map__37426__$1 = ((((!((map__37426 == null)))?(((((map__37426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37426):map__37426);
var msg = map__37426__$1;
var msg_name = cljs.core.get.call(null,map__37426__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37424__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37423,seq__37424,first__37425,seq__37424__$1,map__37426,map__37426__$1,msg,msg_name,_,map__37420,map__37420__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37423,seq__37424,first__37425,seq__37424__$1,map__37426,map__37426__$1,msg,msg_name,_,map__37420,map__37420__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37420,map__37420__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37428){
var vec__37429 = p__37428;
var seq__37430 = cljs.core.seq.call(null,vec__37429);
var first__37431 = cljs.core.first.call(null,seq__37430);
var seq__37430__$1 = cljs.core.next.call(null,seq__37430);
var map__37432 = first__37431;
var map__37432__$1 = ((((!((map__37432 == null)))?(((((map__37432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37432):map__37432);
var msg = map__37432__$1;
var msg_name = cljs.core.get.call(null,map__37432__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37430__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37434){
var map__37435 = p__37434;
var map__37435__$1 = ((((!((map__37435 == null)))?(((((map__37435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37435):map__37435);
var on_compile_warning = cljs.core.get.call(null,map__37435__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37435__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37435,map__37435__$1,on_compile_warning,on_compile_fail){
return (function (p__37437){
var vec__37438 = p__37437;
var seq__37439 = cljs.core.seq.call(null,vec__37438);
var first__37440 = cljs.core.first.call(null,seq__37439);
var seq__37439__$1 = cljs.core.next.call(null,seq__37439);
var map__37441 = first__37440;
var map__37441__$1 = ((((!((map__37441 == null)))?(((((map__37441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37441):map__37441);
var msg = map__37441__$1;
var msg_name = cljs.core.get.call(null,map__37441__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37439__$1;
var pred__37443 = cljs.core._EQ_;
var expr__37444 = msg_name;
if(cljs.core.truth_(pred__37443.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37444))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37443.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37444))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37435,map__37435__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33672__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33673__auto__ = (function (){var switch__33649__auto__ = ((function (c__33672__auto__,msg_hist,msg_names,msg){
return (function (state_37533){
var state_val_37534 = (state_37533[(1)]);
if((state_val_37534 === (7))){
var inst_37453 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37453)){
var statearr_37535_37582 = state_37533__$1;
(statearr_37535_37582[(1)] = (8));

} else {
var statearr_37536_37583 = state_37533__$1;
(statearr_37536_37583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (20))){
var inst_37527 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37537_37584 = state_37533__$1;
(statearr_37537_37584[(2)] = inst_37527);

(statearr_37537_37584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (27))){
var inst_37523 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37538_37585 = state_37533__$1;
(statearr_37538_37585[(2)] = inst_37523);

(statearr_37538_37585[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (1))){
var inst_37446 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37446)){
var statearr_37539_37586 = state_37533__$1;
(statearr_37539_37586[(1)] = (2));

} else {
var statearr_37540_37587 = state_37533__$1;
(statearr_37540_37587[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (24))){
var inst_37525 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37541_37588 = state_37533__$1;
(statearr_37541_37588[(2)] = inst_37525);

(statearr_37541_37588[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (4))){
var inst_37531 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37533__$1,inst_37531);
} else {
if((state_val_37534 === (15))){
var inst_37529 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37542_37589 = state_37533__$1;
(statearr_37542_37589[(2)] = inst_37529);

(statearr_37542_37589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (21))){
var inst_37482 = (state_37533[(2)]);
var inst_37483 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37484 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37483);
var state_37533__$1 = (function (){var statearr_37543 = state_37533;
(statearr_37543[(7)] = inst_37482);

return statearr_37543;
})();
var statearr_37544_37590 = state_37533__$1;
(statearr_37544_37590[(2)] = inst_37484);

(statearr_37544_37590[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (31))){
var inst_37512 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37512)){
var statearr_37545_37591 = state_37533__$1;
(statearr_37545_37591[(1)] = (34));

} else {
var statearr_37546_37592 = state_37533__$1;
(statearr_37546_37592[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (32))){
var inst_37521 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37547_37593 = state_37533__$1;
(statearr_37547_37593[(2)] = inst_37521);

(statearr_37547_37593[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (33))){
var inst_37508 = (state_37533[(2)]);
var inst_37509 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37510 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37509);
var state_37533__$1 = (function (){var statearr_37548 = state_37533;
(statearr_37548[(8)] = inst_37508);

return statearr_37548;
})();
var statearr_37549_37594 = state_37533__$1;
(statearr_37549_37594[(2)] = inst_37510);

(statearr_37549_37594[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (13))){
var inst_37467 = figwheel.client.heads_up.clear.call(null);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37533__$1,(16),inst_37467);
} else {
if((state_val_37534 === (22))){
var inst_37488 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37489 = figwheel.client.heads_up.append_warning_message.call(null,inst_37488);
var state_37533__$1 = state_37533;
var statearr_37550_37595 = state_37533__$1;
(statearr_37550_37595[(2)] = inst_37489);

(statearr_37550_37595[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (36))){
var inst_37519 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37551_37596 = state_37533__$1;
(statearr_37551_37596[(2)] = inst_37519);

(statearr_37551_37596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (29))){
var inst_37499 = (state_37533[(2)]);
var inst_37500 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37501 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37500);
var state_37533__$1 = (function (){var statearr_37552 = state_37533;
(statearr_37552[(9)] = inst_37499);

return statearr_37552;
})();
var statearr_37553_37597 = state_37533__$1;
(statearr_37553_37597[(2)] = inst_37501);

(statearr_37553_37597[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (6))){
var inst_37448 = (state_37533[(10)]);
var state_37533__$1 = state_37533;
var statearr_37554_37598 = state_37533__$1;
(statearr_37554_37598[(2)] = inst_37448);

(statearr_37554_37598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (28))){
var inst_37495 = (state_37533[(2)]);
var inst_37496 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37497 = figwheel.client.heads_up.display_warning.call(null,inst_37496);
var state_37533__$1 = (function (){var statearr_37555 = state_37533;
(statearr_37555[(11)] = inst_37495);

return statearr_37555;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37533__$1,(29),inst_37497);
} else {
if((state_val_37534 === (25))){
var inst_37493 = figwheel.client.heads_up.clear.call(null);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37533__$1,(28),inst_37493);
} else {
if((state_val_37534 === (34))){
var inst_37514 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37533__$1,(37),inst_37514);
} else {
if((state_val_37534 === (17))){
var inst_37473 = (state_37533[(2)]);
var inst_37474 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37475 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37474);
var state_37533__$1 = (function (){var statearr_37556 = state_37533;
(statearr_37556[(12)] = inst_37473);

return statearr_37556;
})();
var statearr_37557_37599 = state_37533__$1;
(statearr_37557_37599[(2)] = inst_37475);

(statearr_37557_37599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (3))){
var inst_37465 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37465)){
var statearr_37558_37600 = state_37533__$1;
(statearr_37558_37600[(1)] = (13));

} else {
var statearr_37559_37601 = state_37533__$1;
(statearr_37559_37601[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (12))){
var inst_37461 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37560_37602 = state_37533__$1;
(statearr_37560_37602[(2)] = inst_37461);

(statearr_37560_37602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (2))){
var inst_37448 = (state_37533[(10)]);
var inst_37448__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37533__$1 = (function (){var statearr_37561 = state_37533;
(statearr_37561[(10)] = inst_37448__$1);

return statearr_37561;
})();
if(cljs.core.truth_(inst_37448__$1)){
var statearr_37562_37603 = state_37533__$1;
(statearr_37562_37603[(1)] = (5));

} else {
var statearr_37563_37604 = state_37533__$1;
(statearr_37563_37604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (23))){
var inst_37491 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37491)){
var statearr_37564_37605 = state_37533__$1;
(statearr_37564_37605[(1)] = (25));

} else {
var statearr_37565_37606 = state_37533__$1;
(statearr_37565_37606[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (35))){
var state_37533__$1 = state_37533;
var statearr_37566_37607 = state_37533__$1;
(statearr_37566_37607[(2)] = null);

(statearr_37566_37607[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (19))){
var inst_37486 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37486)){
var statearr_37567_37608 = state_37533__$1;
(statearr_37567_37608[(1)] = (22));

} else {
var statearr_37568_37609 = state_37533__$1;
(statearr_37568_37609[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (11))){
var inst_37457 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37569_37610 = state_37533__$1;
(statearr_37569_37610[(2)] = inst_37457);

(statearr_37569_37610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (9))){
var inst_37459 = figwheel.client.heads_up.clear.call(null);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37533__$1,(12),inst_37459);
} else {
if((state_val_37534 === (5))){
var inst_37450 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37533__$1 = state_37533;
var statearr_37570_37611 = state_37533__$1;
(statearr_37570_37611[(2)] = inst_37450);

(statearr_37570_37611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (14))){
var inst_37477 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37477)){
var statearr_37571_37612 = state_37533__$1;
(statearr_37571_37612[(1)] = (18));

} else {
var statearr_37572_37613 = state_37533__$1;
(statearr_37572_37613[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (26))){
var inst_37503 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37503)){
var statearr_37573_37614 = state_37533__$1;
(statearr_37573_37614[(1)] = (30));

} else {
var statearr_37574_37615 = state_37533__$1;
(statearr_37574_37615[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (16))){
var inst_37469 = (state_37533[(2)]);
var inst_37470 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37471 = figwheel.client.heads_up.display_exception.call(null,inst_37470);
var state_37533__$1 = (function (){var statearr_37575 = state_37533;
(statearr_37575[(13)] = inst_37469);

return statearr_37575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37533__$1,(17),inst_37471);
} else {
if((state_val_37534 === (30))){
var inst_37505 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37506 = figwheel.client.heads_up.display_warning.call(null,inst_37505);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37533__$1,(33),inst_37506);
} else {
if((state_val_37534 === (10))){
var inst_37463 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37576_37616 = state_37533__$1;
(statearr_37576_37616[(2)] = inst_37463);

(statearr_37576_37616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (18))){
var inst_37479 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37480 = figwheel.client.heads_up.display_exception.call(null,inst_37479);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37533__$1,(21),inst_37480);
} else {
if((state_val_37534 === (37))){
var inst_37516 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37577_37617 = state_37533__$1;
(statearr_37577_37617[(2)] = inst_37516);

(statearr_37577_37617[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (8))){
var inst_37455 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37533__$1,(11),inst_37455);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33672__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33649__auto__,c__33672__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33650__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33650__auto____0 = (function (){
var statearr_37578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37578[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33650__auto__);

(statearr_37578[(1)] = (1));

return statearr_37578;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33650__auto____1 = (function (state_37533){
while(true){
var ret_value__33651__auto__ = (function (){try{while(true){
var result__33652__auto__ = switch__33649__auto__.call(null,state_37533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33652__auto__;
}
break;
}
}catch (e37579){if((e37579 instanceof Object)){
var ex__33653__auto__ = e37579;
var statearr_37580_37618 = state_37533;
(statearr_37580_37618[(5)] = ex__33653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37619 = state_37533;
state_37533 = G__37619;
continue;
} else {
return ret_value__33651__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33650__auto__ = function(state_37533){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33650__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33650__auto____1.call(this,state_37533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33650__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33650__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33650__auto__;
})()
;})(switch__33649__auto__,c__33672__auto__,msg_hist,msg_names,msg))
})();
var state__33674__auto__ = (function (){var statearr_37581 = f__33673__auto__.call(null);
(statearr_37581[(6)] = c__33672__auto__);

return statearr_37581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33674__auto__);
});})(c__33672__auto__,msg_hist,msg_names,msg))
);

return c__33672__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33672__auto___37648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33672__auto___37648,ch){
return (function (){
var f__33673__auto__ = (function (){var switch__33649__auto__ = ((function (c__33672__auto___37648,ch){
return (function (state_37634){
var state_val_37635 = (state_37634[(1)]);
if((state_val_37635 === (1))){
var state_37634__$1 = state_37634;
var statearr_37636_37649 = state_37634__$1;
(statearr_37636_37649[(2)] = null);

(statearr_37636_37649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (2))){
var state_37634__$1 = state_37634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37634__$1,(4),ch);
} else {
if((state_val_37635 === (3))){
var inst_37632 = (state_37634[(2)]);
var state_37634__$1 = state_37634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37634__$1,inst_37632);
} else {
if((state_val_37635 === (4))){
var inst_37622 = (state_37634[(7)]);
var inst_37622__$1 = (state_37634[(2)]);
var state_37634__$1 = (function (){var statearr_37637 = state_37634;
(statearr_37637[(7)] = inst_37622__$1);

return statearr_37637;
})();
if(cljs.core.truth_(inst_37622__$1)){
var statearr_37638_37650 = state_37634__$1;
(statearr_37638_37650[(1)] = (5));

} else {
var statearr_37639_37651 = state_37634__$1;
(statearr_37639_37651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (5))){
var inst_37622 = (state_37634[(7)]);
var inst_37624 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37622);
var state_37634__$1 = state_37634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37634__$1,(8),inst_37624);
} else {
if((state_val_37635 === (6))){
var state_37634__$1 = state_37634;
var statearr_37640_37652 = state_37634__$1;
(statearr_37640_37652[(2)] = null);

(statearr_37640_37652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (7))){
var inst_37630 = (state_37634[(2)]);
var state_37634__$1 = state_37634;
var statearr_37641_37653 = state_37634__$1;
(statearr_37641_37653[(2)] = inst_37630);

(statearr_37641_37653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (8))){
var inst_37626 = (state_37634[(2)]);
var state_37634__$1 = (function (){var statearr_37642 = state_37634;
(statearr_37642[(8)] = inst_37626);

return statearr_37642;
})();
var statearr_37643_37654 = state_37634__$1;
(statearr_37643_37654[(2)] = null);

(statearr_37643_37654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33672__auto___37648,ch))
;
return ((function (switch__33649__auto__,c__33672__auto___37648,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33650__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33650__auto____0 = (function (){
var statearr_37644 = [null,null,null,null,null,null,null,null,null];
(statearr_37644[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33650__auto__);

(statearr_37644[(1)] = (1));

return statearr_37644;
});
var figwheel$client$heads_up_plugin_$_state_machine__33650__auto____1 = (function (state_37634){
while(true){
var ret_value__33651__auto__ = (function (){try{while(true){
var result__33652__auto__ = switch__33649__auto__.call(null,state_37634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33652__auto__;
}
break;
}
}catch (e37645){if((e37645 instanceof Object)){
var ex__33653__auto__ = e37645;
var statearr_37646_37655 = state_37634;
(statearr_37646_37655[(5)] = ex__33653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37656 = state_37634;
state_37634 = G__37656;
continue;
} else {
return ret_value__33651__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33650__auto__ = function(state_37634){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33650__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33650__auto____1.call(this,state_37634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33650__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33650__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33650__auto__;
})()
;})(switch__33649__auto__,c__33672__auto___37648,ch))
})();
var state__33674__auto__ = (function (){var statearr_37647 = f__33673__auto__.call(null);
(statearr_37647[(6)] = c__33672__auto___37648);

return statearr_37647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33674__auto__);
});})(c__33672__auto___37648,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33672__auto__){
return (function (){
var f__33673__auto__ = (function (){var switch__33649__auto__ = ((function (c__33672__auto__){
return (function (state_37662){
var state_val_37663 = (state_37662[(1)]);
if((state_val_37663 === (1))){
var inst_37657 = cljs.core.async.timeout.call(null,(3000));
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37662__$1,(2),inst_37657);
} else {
if((state_val_37663 === (2))){
var inst_37659 = (state_37662[(2)]);
var inst_37660 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37662__$1 = (function (){var statearr_37664 = state_37662;
(statearr_37664[(7)] = inst_37659);

return statearr_37664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37662__$1,inst_37660);
} else {
return null;
}
}
});})(c__33672__auto__))
;
return ((function (switch__33649__auto__,c__33672__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33650__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33650__auto____0 = (function (){
var statearr_37665 = [null,null,null,null,null,null,null,null];
(statearr_37665[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33650__auto__);

(statearr_37665[(1)] = (1));

return statearr_37665;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33650__auto____1 = (function (state_37662){
while(true){
var ret_value__33651__auto__ = (function (){try{while(true){
var result__33652__auto__ = switch__33649__auto__.call(null,state_37662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33652__auto__;
}
break;
}
}catch (e37666){if((e37666 instanceof Object)){
var ex__33653__auto__ = e37666;
var statearr_37667_37669 = state_37662;
(statearr_37667_37669[(5)] = ex__33653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37670 = state_37662;
state_37662 = G__37670;
continue;
} else {
return ret_value__33651__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33650__auto__ = function(state_37662){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33650__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33650__auto____1.call(this,state_37662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33650__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33650__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33650__auto__;
})()
;})(switch__33649__auto__,c__33672__auto__))
})();
var state__33674__auto__ = (function (){var statearr_37668 = f__33673__auto__.call(null);
(statearr_37668[(6)] = c__33672__auto__);

return statearr_37668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33674__auto__);
});})(c__33672__auto__))
);

return c__33672__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33672__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__33673__auto__ = (function (){var switch__33649__auto__ = ((function (c__33672__auto__,figwheel_version,temp__5457__auto__){
return (function (state_37677){
var state_val_37678 = (state_37677[(1)]);
if((state_val_37678 === (1))){
var inst_37671 = cljs.core.async.timeout.call(null,(2000));
var state_37677__$1 = state_37677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37677__$1,(2),inst_37671);
} else {
if((state_val_37678 === (2))){
var inst_37673 = (state_37677[(2)]);
var inst_37674 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37675 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37674);
var state_37677__$1 = (function (){var statearr_37679 = state_37677;
(statearr_37679[(7)] = inst_37673);

return statearr_37679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37677__$1,inst_37675);
} else {
return null;
}
}
});})(c__33672__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__33649__auto__,c__33672__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33650__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33650__auto____0 = (function (){
var statearr_37680 = [null,null,null,null,null,null,null,null];
(statearr_37680[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33650__auto__);

(statearr_37680[(1)] = (1));

return statearr_37680;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33650__auto____1 = (function (state_37677){
while(true){
var ret_value__33651__auto__ = (function (){try{while(true){
var result__33652__auto__ = switch__33649__auto__.call(null,state_37677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33652__auto__;
}
break;
}
}catch (e37681){if((e37681 instanceof Object)){
var ex__33653__auto__ = e37681;
var statearr_37682_37684 = state_37677;
(statearr_37682_37684[(5)] = ex__33653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37685 = state_37677;
state_37677 = G__37685;
continue;
} else {
return ret_value__33651__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33650__auto__ = function(state_37677){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33650__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33650__auto____1.call(this,state_37677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33650__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33650__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33650__auto__;
})()
;})(switch__33649__auto__,c__33672__auto__,figwheel_version,temp__5457__auto__))
})();
var state__33674__auto__ = (function (){var statearr_37683 = f__33673__auto__.call(null);
(statearr_37683[(6)] = c__33672__auto__);

return statearr_37683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33674__auto__);
});})(c__33672__auto__,figwheel_version,temp__5457__auto__))
);

return c__33672__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37686){
var map__37687 = p__37686;
var map__37687__$1 = ((((!((map__37687 == null)))?(((((map__37687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37687):map__37687);
var file = cljs.core.get.call(null,map__37687__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37687__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37687__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37689 = "";
var G__37689__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37689),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37689);
var G__37689__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37689__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37689__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37689__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37689__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37690){
var map__37691 = p__37690;
var map__37691__$1 = ((((!((map__37691 == null)))?(((((map__37691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37691):map__37691);
var ed = map__37691__$1;
var formatted_exception = cljs.core.get.call(null,map__37691__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37691__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37691__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37693_37697 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37694_37698 = null;
var count__37695_37699 = (0);
var i__37696_37700 = (0);
while(true){
if((i__37696_37700 < count__37695_37699)){
var msg_37701 = cljs.core._nth.call(null,chunk__37694_37698,i__37696_37700);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37701);


var G__37702 = seq__37693_37697;
var G__37703 = chunk__37694_37698;
var G__37704 = count__37695_37699;
var G__37705 = (i__37696_37700 + (1));
seq__37693_37697 = G__37702;
chunk__37694_37698 = G__37703;
count__37695_37699 = G__37704;
i__37696_37700 = G__37705;
continue;
} else {
var temp__5457__auto___37706 = cljs.core.seq.call(null,seq__37693_37697);
if(temp__5457__auto___37706){
var seq__37693_37707__$1 = temp__5457__auto___37706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37693_37707__$1)){
var c__4351__auto___37708 = cljs.core.chunk_first.call(null,seq__37693_37707__$1);
var G__37709 = cljs.core.chunk_rest.call(null,seq__37693_37707__$1);
var G__37710 = c__4351__auto___37708;
var G__37711 = cljs.core.count.call(null,c__4351__auto___37708);
var G__37712 = (0);
seq__37693_37697 = G__37709;
chunk__37694_37698 = G__37710;
count__37695_37699 = G__37711;
i__37696_37700 = G__37712;
continue;
} else {
var msg_37713 = cljs.core.first.call(null,seq__37693_37707__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37713);


var G__37714 = cljs.core.next.call(null,seq__37693_37707__$1);
var G__37715 = null;
var G__37716 = (0);
var G__37717 = (0);
seq__37693_37697 = G__37714;
chunk__37694_37698 = G__37715;
count__37695_37699 = G__37716;
i__37696_37700 = G__37717;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37718){
var map__37719 = p__37718;
var map__37719__$1 = ((((!((map__37719 == null)))?(((((map__37719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37719):map__37719);
var w = map__37719__$1;
var message = cljs.core.get.call(null,map__37719__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37721 = cljs.core.seq.call(null,plugins);
var chunk__37722 = null;
var count__37723 = (0);
var i__37724 = (0);
while(true){
if((i__37724 < count__37723)){
var vec__37725 = cljs.core._nth.call(null,chunk__37722,i__37724);
var k = cljs.core.nth.call(null,vec__37725,(0),null);
var plugin = cljs.core.nth.call(null,vec__37725,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37731 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37721,chunk__37722,count__37723,i__37724,pl_37731,vec__37725,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37731.call(null,msg_hist);
});})(seq__37721,chunk__37722,count__37723,i__37724,pl_37731,vec__37725,k,plugin))
);
} else {
}


var G__37732 = seq__37721;
var G__37733 = chunk__37722;
var G__37734 = count__37723;
var G__37735 = (i__37724 + (1));
seq__37721 = G__37732;
chunk__37722 = G__37733;
count__37723 = G__37734;
i__37724 = G__37735;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37721);
if(temp__5457__auto__){
var seq__37721__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37721__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__37721__$1);
var G__37736 = cljs.core.chunk_rest.call(null,seq__37721__$1);
var G__37737 = c__4351__auto__;
var G__37738 = cljs.core.count.call(null,c__4351__auto__);
var G__37739 = (0);
seq__37721 = G__37736;
chunk__37722 = G__37737;
count__37723 = G__37738;
i__37724 = G__37739;
continue;
} else {
var vec__37728 = cljs.core.first.call(null,seq__37721__$1);
var k = cljs.core.nth.call(null,vec__37728,(0),null);
var plugin = cljs.core.nth.call(null,vec__37728,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37740 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37721,chunk__37722,count__37723,i__37724,pl_37740,vec__37728,k,plugin,seq__37721__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37740.call(null,msg_hist);
});})(seq__37721,chunk__37722,count__37723,i__37724,pl_37740,vec__37728,k,plugin,seq__37721__$1,temp__5457__auto__))
);
} else {
}


var G__37741 = cljs.core.next.call(null,seq__37721__$1);
var G__37742 = null;
var G__37743 = (0);
var G__37744 = (0);
seq__37721 = G__37741;
chunk__37722 = G__37742;
count__37723 = G__37743;
i__37724 = G__37744;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37746 = arguments.length;
switch (G__37746) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37747_37752 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37748_37753 = null;
var count__37749_37754 = (0);
var i__37750_37755 = (0);
while(true){
if((i__37750_37755 < count__37749_37754)){
var msg_37756 = cljs.core._nth.call(null,chunk__37748_37753,i__37750_37755);
figwheel.client.socket.handle_incoming_message.call(null,msg_37756);


var G__37757 = seq__37747_37752;
var G__37758 = chunk__37748_37753;
var G__37759 = count__37749_37754;
var G__37760 = (i__37750_37755 + (1));
seq__37747_37752 = G__37757;
chunk__37748_37753 = G__37758;
count__37749_37754 = G__37759;
i__37750_37755 = G__37760;
continue;
} else {
var temp__5457__auto___37761 = cljs.core.seq.call(null,seq__37747_37752);
if(temp__5457__auto___37761){
var seq__37747_37762__$1 = temp__5457__auto___37761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37747_37762__$1)){
var c__4351__auto___37763 = cljs.core.chunk_first.call(null,seq__37747_37762__$1);
var G__37764 = cljs.core.chunk_rest.call(null,seq__37747_37762__$1);
var G__37765 = c__4351__auto___37763;
var G__37766 = cljs.core.count.call(null,c__4351__auto___37763);
var G__37767 = (0);
seq__37747_37752 = G__37764;
chunk__37748_37753 = G__37765;
count__37749_37754 = G__37766;
i__37750_37755 = G__37767;
continue;
} else {
var msg_37768 = cljs.core.first.call(null,seq__37747_37762__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37768);


var G__37769 = cljs.core.next.call(null,seq__37747_37762__$1);
var G__37770 = null;
var G__37771 = (0);
var G__37772 = (0);
seq__37747_37752 = G__37769;
chunk__37748_37753 = G__37770;
count__37749_37754 = G__37771;
i__37750_37755 = G__37772;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___37777 = arguments.length;
var i__4532__auto___37778 = (0);
while(true){
if((i__4532__auto___37778 < len__4531__auto___37777)){
args__4534__auto__.push((arguments[i__4532__auto___37778]));

var G__37779 = (i__4532__auto___37778 + (1));
i__4532__auto___37778 = G__37779;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37774){
var map__37775 = p__37774;
var map__37775__$1 = ((((!((map__37775 == null)))?(((((map__37775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37775):map__37775);
var opts = map__37775__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37773){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37773));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37780){if((e37780 instanceof Error)){
var e = e37780;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37780;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37781){
var map__37782 = p__37781;
var map__37782__$1 = ((((!((map__37782 == null)))?(((((map__37782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37782):map__37782);
var msg_name = cljs.core.get.call(null,map__37782__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1536537372209
