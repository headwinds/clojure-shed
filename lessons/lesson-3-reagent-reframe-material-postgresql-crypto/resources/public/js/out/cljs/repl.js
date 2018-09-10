// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36334){
var map__36335 = p__36334;
var map__36335__$1 = ((((!((map__36335 == null)))?(((((map__36335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36335):map__36335);
var m = map__36335__$1;
var n = cljs.core.get.call(null,map__36335__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36335__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36337_36359 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36338_36360 = null;
var count__36339_36361 = (0);
var i__36340_36362 = (0);
while(true){
if((i__36340_36362 < count__36339_36361)){
var f_36363 = cljs.core._nth.call(null,chunk__36338_36360,i__36340_36362);
cljs.core.println.call(null,"  ",f_36363);


var G__36364 = seq__36337_36359;
var G__36365 = chunk__36338_36360;
var G__36366 = count__36339_36361;
var G__36367 = (i__36340_36362 + (1));
seq__36337_36359 = G__36364;
chunk__36338_36360 = G__36365;
count__36339_36361 = G__36366;
i__36340_36362 = G__36367;
continue;
} else {
var temp__5457__auto___36368 = cljs.core.seq.call(null,seq__36337_36359);
if(temp__5457__auto___36368){
var seq__36337_36369__$1 = temp__5457__auto___36368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36337_36369__$1)){
var c__4351__auto___36370 = cljs.core.chunk_first.call(null,seq__36337_36369__$1);
var G__36371 = cljs.core.chunk_rest.call(null,seq__36337_36369__$1);
var G__36372 = c__4351__auto___36370;
var G__36373 = cljs.core.count.call(null,c__4351__auto___36370);
var G__36374 = (0);
seq__36337_36359 = G__36371;
chunk__36338_36360 = G__36372;
count__36339_36361 = G__36373;
i__36340_36362 = G__36374;
continue;
} else {
var f_36375 = cljs.core.first.call(null,seq__36337_36369__$1);
cljs.core.println.call(null,"  ",f_36375);


var G__36376 = cljs.core.next.call(null,seq__36337_36369__$1);
var G__36377 = null;
var G__36378 = (0);
var G__36379 = (0);
seq__36337_36359 = G__36376;
chunk__36338_36360 = G__36377;
count__36339_36361 = G__36378;
i__36340_36362 = G__36379;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36380 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36380);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36380)))?cljs.core.second.call(null,arglists_36380):arglists_36380));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36341_36381 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36342_36382 = null;
var count__36343_36383 = (0);
var i__36344_36384 = (0);
while(true){
if((i__36344_36384 < count__36343_36383)){
var vec__36345_36385 = cljs.core._nth.call(null,chunk__36342_36382,i__36344_36384);
var name_36386 = cljs.core.nth.call(null,vec__36345_36385,(0),null);
var map__36348_36387 = cljs.core.nth.call(null,vec__36345_36385,(1),null);
var map__36348_36388__$1 = ((((!((map__36348_36387 == null)))?(((((map__36348_36387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36348_36387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36348_36387):map__36348_36387);
var doc_36389 = cljs.core.get.call(null,map__36348_36388__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36390 = cljs.core.get.call(null,map__36348_36388__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36386);

cljs.core.println.call(null," ",arglists_36390);

if(cljs.core.truth_(doc_36389)){
cljs.core.println.call(null," ",doc_36389);
} else {
}


var G__36391 = seq__36341_36381;
var G__36392 = chunk__36342_36382;
var G__36393 = count__36343_36383;
var G__36394 = (i__36344_36384 + (1));
seq__36341_36381 = G__36391;
chunk__36342_36382 = G__36392;
count__36343_36383 = G__36393;
i__36344_36384 = G__36394;
continue;
} else {
var temp__5457__auto___36395 = cljs.core.seq.call(null,seq__36341_36381);
if(temp__5457__auto___36395){
var seq__36341_36396__$1 = temp__5457__auto___36395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36341_36396__$1)){
var c__4351__auto___36397 = cljs.core.chunk_first.call(null,seq__36341_36396__$1);
var G__36398 = cljs.core.chunk_rest.call(null,seq__36341_36396__$1);
var G__36399 = c__4351__auto___36397;
var G__36400 = cljs.core.count.call(null,c__4351__auto___36397);
var G__36401 = (0);
seq__36341_36381 = G__36398;
chunk__36342_36382 = G__36399;
count__36343_36383 = G__36400;
i__36344_36384 = G__36401;
continue;
} else {
var vec__36350_36402 = cljs.core.first.call(null,seq__36341_36396__$1);
var name_36403 = cljs.core.nth.call(null,vec__36350_36402,(0),null);
var map__36353_36404 = cljs.core.nth.call(null,vec__36350_36402,(1),null);
var map__36353_36405__$1 = ((((!((map__36353_36404 == null)))?(((((map__36353_36404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36353_36404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36353_36404):map__36353_36404);
var doc_36406 = cljs.core.get.call(null,map__36353_36405__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36407 = cljs.core.get.call(null,map__36353_36405__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36403);

cljs.core.println.call(null," ",arglists_36407);

if(cljs.core.truth_(doc_36406)){
cljs.core.println.call(null," ",doc_36406);
} else {
}


var G__36408 = cljs.core.next.call(null,seq__36341_36396__$1);
var G__36409 = null;
var G__36410 = (0);
var G__36411 = (0);
seq__36341_36381 = G__36408;
chunk__36342_36382 = G__36409;
count__36343_36383 = G__36410;
i__36344_36384 = G__36411;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__36355 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36356 = null;
var count__36357 = (0);
var i__36358 = (0);
while(true){
if((i__36358 < count__36357)){
var role = cljs.core._nth.call(null,chunk__36356,i__36358);
var temp__5457__auto___36412__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36412__$1)){
var spec_36413 = temp__5457__auto___36412__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36413));
} else {
}


var G__36414 = seq__36355;
var G__36415 = chunk__36356;
var G__36416 = count__36357;
var G__36417 = (i__36358 + (1));
seq__36355 = G__36414;
chunk__36356 = G__36415;
count__36357 = G__36416;
i__36358 = G__36417;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__36355);
if(temp__5457__auto____$1){
var seq__36355__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36355__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36355__$1);
var G__36418 = cljs.core.chunk_rest.call(null,seq__36355__$1);
var G__36419 = c__4351__auto__;
var G__36420 = cljs.core.count.call(null,c__4351__auto__);
var G__36421 = (0);
seq__36355 = G__36418;
chunk__36356 = G__36419;
count__36357 = G__36420;
i__36358 = G__36421;
continue;
} else {
var role = cljs.core.first.call(null,seq__36355__$1);
var temp__5457__auto___36422__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36422__$2)){
var spec_36423 = temp__5457__auto___36422__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36423));
} else {
}


var G__36424 = cljs.core.next.call(null,seq__36355__$1);
var G__36425 = null;
var G__36426 = (0);
var G__36427 = (0);
seq__36355 = G__36424;
chunk__36356 = G__36425;
count__36357 = G__36426;
i__36358 = G__36427;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1536537371160
