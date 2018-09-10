// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34422_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34422_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34423 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34424 = null;
var count__34425 = (0);
var i__34426 = (0);
while(true){
if((i__34426 < count__34425)){
var n = cljs.core._nth.call(null,chunk__34424,i__34426);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34427 = seq__34423;
var G__34428 = chunk__34424;
var G__34429 = count__34425;
var G__34430 = (i__34426 + (1));
seq__34423 = G__34427;
chunk__34424 = G__34428;
count__34425 = G__34429;
i__34426 = G__34430;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34423);
if(temp__5457__auto__){
var seq__34423__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34423__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__34423__$1);
var G__34431 = cljs.core.chunk_rest.call(null,seq__34423__$1);
var G__34432 = c__4351__auto__;
var G__34433 = cljs.core.count.call(null,c__4351__auto__);
var G__34434 = (0);
seq__34423 = G__34431;
chunk__34424 = G__34432;
count__34425 = G__34433;
i__34426 = G__34434;
continue;
} else {
var n = cljs.core.first.call(null,seq__34423__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34435 = cljs.core.next.call(null,seq__34423__$1);
var G__34436 = null;
var G__34437 = (0);
var G__34438 = (0);
seq__34423 = G__34435;
chunk__34424 = G__34436;
count__34425 = G__34437;
i__34426 = G__34438;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__34439){
var vec__34440 = p__34439;
var _ = cljs.core.nth.call(null,vec__34440,(0),null);
var v = cljs.core.nth.call(null,vec__34440,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__34443){
var vec__34444 = p__34443;
var k = cljs.core.nth.call(null,vec__34444,(0),null);
var v = cljs.core.nth.call(null,vec__34444,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34456_34464 = cljs.core.seq.call(null,deps);
var chunk__34457_34465 = null;
var count__34458_34466 = (0);
var i__34459_34467 = (0);
while(true){
if((i__34459_34467 < count__34458_34466)){
var dep_34468 = cljs.core._nth.call(null,chunk__34457_34465,i__34459_34467);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_34468;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34468));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34468,(depth + (1)),state);
} else {
}


var G__34469 = seq__34456_34464;
var G__34470 = chunk__34457_34465;
var G__34471 = count__34458_34466;
var G__34472 = (i__34459_34467 + (1));
seq__34456_34464 = G__34469;
chunk__34457_34465 = G__34470;
count__34458_34466 = G__34471;
i__34459_34467 = G__34472;
continue;
} else {
var temp__5457__auto___34473 = cljs.core.seq.call(null,seq__34456_34464);
if(temp__5457__auto___34473){
var seq__34456_34474__$1 = temp__5457__auto___34473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34456_34474__$1)){
var c__4351__auto___34475 = cljs.core.chunk_first.call(null,seq__34456_34474__$1);
var G__34476 = cljs.core.chunk_rest.call(null,seq__34456_34474__$1);
var G__34477 = c__4351__auto___34475;
var G__34478 = cljs.core.count.call(null,c__4351__auto___34475);
var G__34479 = (0);
seq__34456_34464 = G__34476;
chunk__34457_34465 = G__34477;
count__34458_34466 = G__34478;
i__34459_34467 = G__34479;
continue;
} else {
var dep_34480 = cljs.core.first.call(null,seq__34456_34474__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_34480;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34480));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34480,(depth + (1)),state);
} else {
}


var G__34481 = cljs.core.next.call(null,seq__34456_34474__$1);
var G__34482 = null;
var G__34483 = (0);
var G__34484 = (0);
seq__34456_34464 = G__34481;
chunk__34457_34465 = G__34482;
count__34458_34466 = G__34483;
i__34459_34467 = G__34484;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34460){
var vec__34461 = p__34460;
var seq__34462 = cljs.core.seq.call(null,vec__34461);
var first__34463 = cljs.core.first.call(null,seq__34462);
var seq__34462__$1 = cljs.core.next.call(null,seq__34462);
var x = first__34463;
var xs = seq__34462__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34461,seq__34462,first__34463,seq__34462__$1,x,xs,get_deps__$1){
return (function (p1__34447_SHARP_){
return clojure.set.difference.call(null,p1__34447_SHARP_,x);
});})(vec__34461,seq__34462,first__34463,seq__34462__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34485 = cljs.core.seq.call(null,provides);
var chunk__34486 = null;
var count__34487 = (0);
var i__34488 = (0);
while(true){
if((i__34488 < count__34487)){
var prov = cljs.core._nth.call(null,chunk__34486,i__34488);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34489_34497 = cljs.core.seq.call(null,requires);
var chunk__34490_34498 = null;
var count__34491_34499 = (0);
var i__34492_34500 = (0);
while(true){
if((i__34492_34500 < count__34491_34499)){
var req_34501 = cljs.core._nth.call(null,chunk__34490_34498,i__34492_34500);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34501,prov);


var G__34502 = seq__34489_34497;
var G__34503 = chunk__34490_34498;
var G__34504 = count__34491_34499;
var G__34505 = (i__34492_34500 + (1));
seq__34489_34497 = G__34502;
chunk__34490_34498 = G__34503;
count__34491_34499 = G__34504;
i__34492_34500 = G__34505;
continue;
} else {
var temp__5457__auto___34506 = cljs.core.seq.call(null,seq__34489_34497);
if(temp__5457__auto___34506){
var seq__34489_34507__$1 = temp__5457__auto___34506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34489_34507__$1)){
var c__4351__auto___34508 = cljs.core.chunk_first.call(null,seq__34489_34507__$1);
var G__34509 = cljs.core.chunk_rest.call(null,seq__34489_34507__$1);
var G__34510 = c__4351__auto___34508;
var G__34511 = cljs.core.count.call(null,c__4351__auto___34508);
var G__34512 = (0);
seq__34489_34497 = G__34509;
chunk__34490_34498 = G__34510;
count__34491_34499 = G__34511;
i__34492_34500 = G__34512;
continue;
} else {
var req_34513 = cljs.core.first.call(null,seq__34489_34507__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34513,prov);


var G__34514 = cljs.core.next.call(null,seq__34489_34507__$1);
var G__34515 = null;
var G__34516 = (0);
var G__34517 = (0);
seq__34489_34497 = G__34514;
chunk__34490_34498 = G__34515;
count__34491_34499 = G__34516;
i__34492_34500 = G__34517;
continue;
}
} else {
}
}
break;
}


var G__34518 = seq__34485;
var G__34519 = chunk__34486;
var G__34520 = count__34487;
var G__34521 = (i__34488 + (1));
seq__34485 = G__34518;
chunk__34486 = G__34519;
count__34487 = G__34520;
i__34488 = G__34521;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34485);
if(temp__5457__auto__){
var seq__34485__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34485__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__34485__$1);
var G__34522 = cljs.core.chunk_rest.call(null,seq__34485__$1);
var G__34523 = c__4351__auto__;
var G__34524 = cljs.core.count.call(null,c__4351__auto__);
var G__34525 = (0);
seq__34485 = G__34522;
chunk__34486 = G__34523;
count__34487 = G__34524;
i__34488 = G__34525;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34485__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34493_34526 = cljs.core.seq.call(null,requires);
var chunk__34494_34527 = null;
var count__34495_34528 = (0);
var i__34496_34529 = (0);
while(true){
if((i__34496_34529 < count__34495_34528)){
var req_34530 = cljs.core._nth.call(null,chunk__34494_34527,i__34496_34529);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34530,prov);


var G__34531 = seq__34493_34526;
var G__34532 = chunk__34494_34527;
var G__34533 = count__34495_34528;
var G__34534 = (i__34496_34529 + (1));
seq__34493_34526 = G__34531;
chunk__34494_34527 = G__34532;
count__34495_34528 = G__34533;
i__34496_34529 = G__34534;
continue;
} else {
var temp__5457__auto___34535__$1 = cljs.core.seq.call(null,seq__34493_34526);
if(temp__5457__auto___34535__$1){
var seq__34493_34536__$1 = temp__5457__auto___34535__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34493_34536__$1)){
var c__4351__auto___34537 = cljs.core.chunk_first.call(null,seq__34493_34536__$1);
var G__34538 = cljs.core.chunk_rest.call(null,seq__34493_34536__$1);
var G__34539 = c__4351__auto___34537;
var G__34540 = cljs.core.count.call(null,c__4351__auto___34537);
var G__34541 = (0);
seq__34493_34526 = G__34538;
chunk__34494_34527 = G__34539;
count__34495_34528 = G__34540;
i__34496_34529 = G__34541;
continue;
} else {
var req_34542 = cljs.core.first.call(null,seq__34493_34536__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34542,prov);


var G__34543 = cljs.core.next.call(null,seq__34493_34536__$1);
var G__34544 = null;
var G__34545 = (0);
var G__34546 = (0);
seq__34493_34526 = G__34543;
chunk__34494_34527 = G__34544;
count__34495_34528 = G__34545;
i__34496_34529 = G__34546;
continue;
}
} else {
}
}
break;
}


var G__34547 = cljs.core.next.call(null,seq__34485__$1);
var G__34548 = null;
var G__34549 = (0);
var G__34550 = (0);
seq__34485 = G__34547;
chunk__34486 = G__34548;
count__34487 = G__34549;
i__34488 = G__34550;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34551_34555 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34552_34556 = null;
var count__34553_34557 = (0);
var i__34554_34558 = (0);
while(true){
if((i__34554_34558 < count__34553_34557)){
var ns_34559 = cljs.core._nth.call(null,chunk__34552_34556,i__34554_34558);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34559);


var G__34560 = seq__34551_34555;
var G__34561 = chunk__34552_34556;
var G__34562 = count__34553_34557;
var G__34563 = (i__34554_34558 + (1));
seq__34551_34555 = G__34560;
chunk__34552_34556 = G__34561;
count__34553_34557 = G__34562;
i__34554_34558 = G__34563;
continue;
} else {
var temp__5457__auto___34564 = cljs.core.seq.call(null,seq__34551_34555);
if(temp__5457__auto___34564){
var seq__34551_34565__$1 = temp__5457__auto___34564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34551_34565__$1)){
var c__4351__auto___34566 = cljs.core.chunk_first.call(null,seq__34551_34565__$1);
var G__34567 = cljs.core.chunk_rest.call(null,seq__34551_34565__$1);
var G__34568 = c__4351__auto___34566;
var G__34569 = cljs.core.count.call(null,c__4351__auto___34566);
var G__34570 = (0);
seq__34551_34555 = G__34567;
chunk__34552_34556 = G__34568;
count__34553_34557 = G__34569;
i__34554_34558 = G__34570;
continue;
} else {
var ns_34571 = cljs.core.first.call(null,seq__34551_34565__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34571);


var G__34572 = cljs.core.next.call(null,seq__34551_34565__$1);
var G__34573 = null;
var G__34574 = (0);
var G__34575 = (0);
seq__34551_34555 = G__34572;
chunk__34552_34556 = G__34573;
count__34553_34557 = G__34574;
i__34554_34558 = G__34575;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34576__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34577__i = 0, G__34577__a = new Array(arguments.length -  0);
while (G__34577__i < G__34577__a.length) {G__34577__a[G__34577__i] = arguments[G__34577__i + 0]; ++G__34577__i;}
  args = new cljs.core.IndexedSeq(G__34577__a,0,null);
} 
return G__34576__delegate.call(this,args);};
G__34576.cljs$lang$maxFixedArity = 0;
G__34576.cljs$lang$applyTo = (function (arglist__34578){
var args = cljs.core.seq(arglist__34578);
return G__34576__delegate(args);
});
G__34576.cljs$core$IFn$_invoke$arity$variadic = G__34576__delegate;
return G__34576;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__34579_SHARP_,p2__34580_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34579_SHARP_)].join('')),p2__34580_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__34581_SHARP_,p2__34582_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34581_SHARP_)].join(''),p2__34582_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34583 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34583.addCallback(((function (G__34583){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34583))
);

G__34583.addErrback(((function (G__34583){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34583))
);

return G__34583;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34584){if((e34584 instanceof Error)){
var e = e34584;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34584;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34585){if((e34585 instanceof Error)){
var e = e34585;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34585;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34586 = cljs.core._EQ_;
var expr__34587 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34586.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34587))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34586.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34587))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34586.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34587))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34586,expr__34587){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34586,expr__34587))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34589,callback){
var map__34590 = p__34589;
var map__34590__$1 = ((((!((map__34590 == null)))?(((((map__34590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34590):map__34590);
var file_msg = map__34590__$1;
var request_url = cljs.core.get.call(null,map__34590__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34590,map__34590__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34590,map__34590__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33672__auto__){
return (function (){
var f__33673__auto__ = (function (){var switch__33649__auto__ = ((function (c__33672__auto__){
return (function (state_34628){
var state_val_34629 = (state_34628[(1)]);
if((state_val_34629 === (7))){
var inst_34624 = (state_34628[(2)]);
var state_34628__$1 = state_34628;
var statearr_34630_34656 = state_34628__$1;
(statearr_34630_34656[(2)] = inst_34624);

(statearr_34630_34656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (1))){
var state_34628__$1 = state_34628;
var statearr_34631_34657 = state_34628__$1;
(statearr_34631_34657[(2)] = null);

(statearr_34631_34657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (4))){
var inst_34594 = (state_34628[(7)]);
var inst_34594__$1 = (state_34628[(2)]);
var state_34628__$1 = (function (){var statearr_34632 = state_34628;
(statearr_34632[(7)] = inst_34594__$1);

return statearr_34632;
})();
if(cljs.core.truth_(inst_34594__$1)){
var statearr_34633_34658 = state_34628__$1;
(statearr_34633_34658[(1)] = (5));

} else {
var statearr_34634_34659 = state_34628__$1;
(statearr_34634_34659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (15))){
var inst_34607 = (state_34628[(8)]);
var inst_34609 = (state_34628[(9)]);
var inst_34611 = inst_34609.call(null,inst_34607);
var state_34628__$1 = state_34628;
var statearr_34635_34660 = state_34628__$1;
(statearr_34635_34660[(2)] = inst_34611);

(statearr_34635_34660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (13))){
var inst_34618 = (state_34628[(2)]);
var state_34628__$1 = state_34628;
var statearr_34636_34661 = state_34628__$1;
(statearr_34636_34661[(2)] = inst_34618);

(statearr_34636_34661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (6))){
var state_34628__$1 = state_34628;
var statearr_34637_34662 = state_34628__$1;
(statearr_34637_34662[(2)] = null);

(statearr_34637_34662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (17))){
var inst_34615 = (state_34628[(2)]);
var state_34628__$1 = state_34628;
var statearr_34638_34663 = state_34628__$1;
(statearr_34638_34663[(2)] = inst_34615);

(statearr_34638_34663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (3))){
var inst_34626 = (state_34628[(2)]);
var state_34628__$1 = state_34628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34628__$1,inst_34626);
} else {
if((state_val_34629 === (12))){
var state_34628__$1 = state_34628;
var statearr_34639_34664 = state_34628__$1;
(statearr_34639_34664[(2)] = null);

(statearr_34639_34664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (2))){
var state_34628__$1 = state_34628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34628__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34629 === (11))){
var inst_34599 = (state_34628[(10)]);
var inst_34605 = figwheel.client.file_reloading.blocking_load.call(null,inst_34599);
var state_34628__$1 = state_34628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34628__$1,(14),inst_34605);
} else {
if((state_val_34629 === (9))){
var inst_34599 = (state_34628[(10)]);
var state_34628__$1 = state_34628;
if(cljs.core.truth_(inst_34599)){
var statearr_34640_34665 = state_34628__$1;
(statearr_34640_34665[(1)] = (11));

} else {
var statearr_34641_34666 = state_34628__$1;
(statearr_34641_34666[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (5))){
var inst_34594 = (state_34628[(7)]);
var inst_34600 = (state_34628[(11)]);
var inst_34599 = cljs.core.nth.call(null,inst_34594,(0),null);
var inst_34600__$1 = cljs.core.nth.call(null,inst_34594,(1),null);
var state_34628__$1 = (function (){var statearr_34642 = state_34628;
(statearr_34642[(10)] = inst_34599);

(statearr_34642[(11)] = inst_34600__$1);

return statearr_34642;
})();
if(cljs.core.truth_(inst_34600__$1)){
var statearr_34643_34667 = state_34628__$1;
(statearr_34643_34667[(1)] = (8));

} else {
var statearr_34644_34668 = state_34628__$1;
(statearr_34644_34668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (14))){
var inst_34599 = (state_34628[(10)]);
var inst_34609 = (state_34628[(9)]);
var inst_34607 = (state_34628[(2)]);
var inst_34608 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34609__$1 = cljs.core.get.call(null,inst_34608,inst_34599);
var state_34628__$1 = (function (){var statearr_34645 = state_34628;
(statearr_34645[(8)] = inst_34607);

(statearr_34645[(9)] = inst_34609__$1);

return statearr_34645;
})();
if(cljs.core.truth_(inst_34609__$1)){
var statearr_34646_34669 = state_34628__$1;
(statearr_34646_34669[(1)] = (15));

} else {
var statearr_34647_34670 = state_34628__$1;
(statearr_34647_34670[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (16))){
var inst_34607 = (state_34628[(8)]);
var inst_34613 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34607);
var state_34628__$1 = state_34628;
var statearr_34648_34671 = state_34628__$1;
(statearr_34648_34671[(2)] = inst_34613);

(statearr_34648_34671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (10))){
var inst_34620 = (state_34628[(2)]);
var state_34628__$1 = (function (){var statearr_34649 = state_34628;
(statearr_34649[(12)] = inst_34620);

return statearr_34649;
})();
var statearr_34650_34672 = state_34628__$1;
(statearr_34650_34672[(2)] = null);

(statearr_34650_34672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34629 === (8))){
var inst_34600 = (state_34628[(11)]);
var inst_34602 = eval(inst_34600);
var state_34628__$1 = state_34628;
var statearr_34651_34673 = state_34628__$1;
(statearr_34651_34673[(2)] = inst_34602);

(statearr_34651_34673[(1)] = (10));


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
});})(c__33672__auto__))
;
return ((function (switch__33649__auto__,c__33672__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33650__auto__ = null;
var figwheel$client$file_reloading$state_machine__33650__auto____0 = (function (){
var statearr_34652 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34652[(0)] = figwheel$client$file_reloading$state_machine__33650__auto__);

(statearr_34652[(1)] = (1));

return statearr_34652;
});
var figwheel$client$file_reloading$state_machine__33650__auto____1 = (function (state_34628){
while(true){
var ret_value__33651__auto__ = (function (){try{while(true){
var result__33652__auto__ = switch__33649__auto__.call(null,state_34628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33652__auto__;
}
break;
}
}catch (e34653){if((e34653 instanceof Object)){
var ex__33653__auto__ = e34653;
var statearr_34654_34674 = state_34628;
(statearr_34654_34674[(5)] = ex__33653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34675 = state_34628;
state_34628 = G__34675;
continue;
} else {
return ret_value__33651__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33650__auto__ = function(state_34628){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33650__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33650__auto____1.call(this,state_34628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33650__auto____0;
figwheel$client$file_reloading$state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33650__auto____1;
return figwheel$client$file_reloading$state_machine__33650__auto__;
})()
;})(switch__33649__auto__,c__33672__auto__))
})();
var state__33674__auto__ = (function (){var statearr_34655 = f__33673__auto__.call(null);
(statearr_34655[(6)] = c__33672__auto__);

return statearr_34655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33674__auto__);
});})(c__33672__auto__))
);

return c__33672__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34677 = arguments.length;
switch (G__34677) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34679,callback){
var map__34680 = p__34679;
var map__34680__$1 = ((((!((map__34680 == null)))?(((((map__34680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34680):map__34680);
var file_msg = map__34680__$1;
var namespace = cljs.core.get.call(null,map__34680__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34680,map__34680__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34680,map__34680__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34682){
var map__34683 = p__34682;
var map__34683__$1 = ((((!((map__34683 == null)))?(((((map__34683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34683):map__34683);
var file_msg = map__34683__$1;
var namespace = cljs.core.get.call(null,map__34683__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34685){
var map__34686 = p__34685;
var map__34686__$1 = ((((!((map__34686 == null)))?(((((map__34686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34686):map__34686);
var file_msg = map__34686__$1;
var namespace = cljs.core.get.call(null,map__34686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34688,callback){
var map__34689 = p__34688;
var map__34689__$1 = ((((!((map__34689 == null)))?(((((map__34689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34689):map__34689);
var file_msg = map__34689__$1;
var request_url = cljs.core.get.call(null,map__34689__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33672__auto___34739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33672__auto___34739,out){
return (function (){
var f__33673__auto__ = (function (){var switch__33649__auto__ = ((function (c__33672__auto___34739,out){
return (function (state_34724){
var state_val_34725 = (state_34724[(1)]);
if((state_val_34725 === (1))){
var inst_34698 = cljs.core.seq.call(null,files);
var inst_34699 = cljs.core.first.call(null,inst_34698);
var inst_34700 = cljs.core.next.call(null,inst_34698);
var inst_34701 = files;
var state_34724__$1 = (function (){var statearr_34726 = state_34724;
(statearr_34726[(7)] = inst_34700);

(statearr_34726[(8)] = inst_34699);

(statearr_34726[(9)] = inst_34701);

return statearr_34726;
})();
var statearr_34727_34740 = state_34724__$1;
(statearr_34727_34740[(2)] = null);

(statearr_34727_34740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (2))){
var inst_34701 = (state_34724[(9)]);
var inst_34707 = (state_34724[(10)]);
var inst_34706 = cljs.core.seq.call(null,inst_34701);
var inst_34707__$1 = cljs.core.first.call(null,inst_34706);
var inst_34708 = cljs.core.next.call(null,inst_34706);
var inst_34709 = (inst_34707__$1 == null);
var inst_34710 = cljs.core.not.call(null,inst_34709);
var state_34724__$1 = (function (){var statearr_34728 = state_34724;
(statearr_34728[(11)] = inst_34708);

(statearr_34728[(10)] = inst_34707__$1);

return statearr_34728;
})();
if(inst_34710){
var statearr_34729_34741 = state_34724__$1;
(statearr_34729_34741[(1)] = (4));

} else {
var statearr_34730_34742 = state_34724__$1;
(statearr_34730_34742[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (3))){
var inst_34722 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34724__$1,inst_34722);
} else {
if((state_val_34725 === (4))){
var inst_34707 = (state_34724[(10)]);
var inst_34712 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34707);
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34724__$1,(7),inst_34712);
} else {
if((state_val_34725 === (5))){
var inst_34718 = cljs.core.async.close_BANG_.call(null,out);
var state_34724__$1 = state_34724;
var statearr_34731_34743 = state_34724__$1;
(statearr_34731_34743[(2)] = inst_34718);

(statearr_34731_34743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (6))){
var inst_34720 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34732_34744 = state_34724__$1;
(statearr_34732_34744[(2)] = inst_34720);

(statearr_34732_34744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (7))){
var inst_34708 = (state_34724[(11)]);
var inst_34714 = (state_34724[(2)]);
var inst_34715 = cljs.core.async.put_BANG_.call(null,out,inst_34714);
var inst_34701 = inst_34708;
var state_34724__$1 = (function (){var statearr_34733 = state_34724;
(statearr_34733[(12)] = inst_34715);

(statearr_34733[(9)] = inst_34701);

return statearr_34733;
})();
var statearr_34734_34745 = state_34724__$1;
(statearr_34734_34745[(2)] = null);

(statearr_34734_34745[(1)] = (2));


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
});})(c__33672__auto___34739,out))
;
return ((function (switch__33649__auto__,c__33672__auto___34739,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33650__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33650__auto____0 = (function (){
var statearr_34735 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34735[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33650__auto__);

(statearr_34735[(1)] = (1));

return statearr_34735;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33650__auto____1 = (function (state_34724){
while(true){
var ret_value__33651__auto__ = (function (){try{while(true){
var result__33652__auto__ = switch__33649__auto__.call(null,state_34724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33652__auto__;
}
break;
}
}catch (e34736){if((e34736 instanceof Object)){
var ex__33653__auto__ = e34736;
var statearr_34737_34746 = state_34724;
(statearr_34737_34746[(5)] = ex__33653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34747 = state_34724;
state_34724 = G__34747;
continue;
} else {
return ret_value__33651__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33650__auto__ = function(state_34724){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33650__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33650__auto____1.call(this,state_34724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33650__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33650__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33650__auto__;
})()
;})(switch__33649__auto__,c__33672__auto___34739,out))
})();
var state__33674__auto__ = (function (){var statearr_34738 = f__33673__auto__.call(null);
(statearr_34738[(6)] = c__33672__auto___34739);

return statearr_34738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33674__auto__);
});})(c__33672__auto___34739,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34748,opts){
var map__34749 = p__34748;
var map__34749__$1 = ((((!((map__34749 == null)))?(((((map__34749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34749):map__34749);
var eval_body = cljs.core.get.call(null,map__34749__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34749__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34751){var e = e34751;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34752_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34752_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34753){
var vec__34754 = p__34753;
var k = cljs.core.nth.call(null,vec__34754,(0),null);
var v = cljs.core.nth.call(null,vec__34754,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34757){
var vec__34758 = p__34757;
var k = cljs.core.nth.call(null,vec__34758,(0),null);
var v = cljs.core.nth.call(null,vec__34758,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34764,p__34765){
var map__34766 = p__34764;
var map__34766__$1 = ((((!((map__34766 == null)))?(((((map__34766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34766):map__34766);
var opts = map__34766__$1;
var before_jsload = cljs.core.get.call(null,map__34766__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34766__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34766__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34767 = p__34765;
var map__34767__$1 = ((((!((map__34767 == null)))?(((((map__34767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34767):map__34767);
var msg = map__34767__$1;
var files = cljs.core.get.call(null,map__34767__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34767__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34767__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33672__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33673__auto__ = (function (){var switch__33649__auto__ = ((function (c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34921){
var state_val_34922 = (state_34921[(1)]);
if((state_val_34922 === (7))){
var inst_34784 = (state_34921[(7)]);
var inst_34782 = (state_34921[(8)]);
var inst_34781 = (state_34921[(9)]);
var inst_34783 = (state_34921[(10)]);
var inst_34789 = cljs.core._nth.call(null,inst_34782,inst_34784);
var inst_34790 = figwheel.client.file_reloading.eval_body.call(null,inst_34789,opts);
var inst_34791 = (inst_34784 + (1));
var tmp34923 = inst_34782;
var tmp34924 = inst_34781;
var tmp34925 = inst_34783;
var inst_34781__$1 = tmp34924;
var inst_34782__$1 = tmp34923;
var inst_34783__$1 = tmp34925;
var inst_34784__$1 = inst_34791;
var state_34921__$1 = (function (){var statearr_34926 = state_34921;
(statearr_34926[(7)] = inst_34784__$1);

(statearr_34926[(8)] = inst_34782__$1);

(statearr_34926[(11)] = inst_34790);

(statearr_34926[(9)] = inst_34781__$1);

(statearr_34926[(10)] = inst_34783__$1);

return statearr_34926;
})();
var statearr_34927_35010 = state_34921__$1;
(statearr_34927_35010[(2)] = null);

(statearr_34927_35010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (20))){
var inst_34824 = (state_34921[(12)]);
var inst_34832 = figwheel.client.file_reloading.sort_files.call(null,inst_34824);
var state_34921__$1 = state_34921;
var statearr_34928_35011 = state_34921__$1;
(statearr_34928_35011[(2)] = inst_34832);

(statearr_34928_35011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (27))){
var state_34921__$1 = state_34921;
var statearr_34929_35012 = state_34921__$1;
(statearr_34929_35012[(2)] = null);

(statearr_34929_35012[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (1))){
var inst_34773 = (state_34921[(13)]);
var inst_34770 = before_jsload.call(null,files);
var inst_34771 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34772 = (function (){return ((function (inst_34773,inst_34770,inst_34771,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34761_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34761_SHARP_);
});
;})(inst_34773,inst_34770,inst_34771,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34773__$1 = cljs.core.filter.call(null,inst_34772,files);
var inst_34774 = cljs.core.not_empty.call(null,inst_34773__$1);
var state_34921__$1 = (function (){var statearr_34930 = state_34921;
(statearr_34930[(13)] = inst_34773__$1);

(statearr_34930[(14)] = inst_34771);

(statearr_34930[(15)] = inst_34770);

return statearr_34930;
})();
if(cljs.core.truth_(inst_34774)){
var statearr_34931_35013 = state_34921__$1;
(statearr_34931_35013[(1)] = (2));

} else {
var statearr_34932_35014 = state_34921__$1;
(statearr_34932_35014[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (24))){
var state_34921__$1 = state_34921;
var statearr_34933_35015 = state_34921__$1;
(statearr_34933_35015[(2)] = null);

(statearr_34933_35015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (39))){
var inst_34874 = (state_34921[(16)]);
var state_34921__$1 = state_34921;
var statearr_34934_35016 = state_34921__$1;
(statearr_34934_35016[(2)] = inst_34874);

(statearr_34934_35016[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (46))){
var inst_34916 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
var statearr_34935_35017 = state_34921__$1;
(statearr_34935_35017[(2)] = inst_34916);

(statearr_34935_35017[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (4))){
var inst_34818 = (state_34921[(2)]);
var inst_34819 = cljs.core.List.EMPTY;
var inst_34820 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34819);
var inst_34821 = (function (){return ((function (inst_34818,inst_34819,inst_34820,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34762_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34762_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34762_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34762_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_34818,inst_34819,inst_34820,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34822 = cljs.core.filter.call(null,inst_34821,files);
var inst_34823 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34824 = cljs.core.concat.call(null,inst_34822,inst_34823);
var state_34921__$1 = (function (){var statearr_34936 = state_34921;
(statearr_34936[(12)] = inst_34824);

(statearr_34936[(17)] = inst_34818);

(statearr_34936[(18)] = inst_34820);

return statearr_34936;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34937_35018 = state_34921__$1;
(statearr_34937_35018[(1)] = (16));

} else {
var statearr_34938_35019 = state_34921__$1;
(statearr_34938_35019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (15))){
var inst_34808 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
var statearr_34939_35020 = state_34921__$1;
(statearr_34939_35020[(2)] = inst_34808);

(statearr_34939_35020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (21))){
var inst_34834 = (state_34921[(19)]);
var inst_34834__$1 = (state_34921[(2)]);
var inst_34835 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34834__$1);
var state_34921__$1 = (function (){var statearr_34940 = state_34921;
(statearr_34940[(19)] = inst_34834__$1);

return statearr_34940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34921__$1,(22),inst_34835);
} else {
if((state_val_34922 === (31))){
var inst_34919 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34921__$1,inst_34919);
} else {
if((state_val_34922 === (32))){
var inst_34874 = (state_34921[(16)]);
var inst_34879 = inst_34874.cljs$lang$protocol_mask$partition0$;
var inst_34880 = (inst_34879 & (64));
var inst_34881 = inst_34874.cljs$core$ISeq$;
var inst_34882 = (cljs.core.PROTOCOL_SENTINEL === inst_34881);
var inst_34883 = ((inst_34880) || (inst_34882));
var state_34921__$1 = state_34921;
if(cljs.core.truth_(inst_34883)){
var statearr_34941_35021 = state_34921__$1;
(statearr_34941_35021[(1)] = (35));

} else {
var statearr_34942_35022 = state_34921__$1;
(statearr_34942_35022[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (40))){
var inst_34896 = (state_34921[(20)]);
var inst_34895 = (state_34921[(2)]);
var inst_34896__$1 = cljs.core.get.call(null,inst_34895,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34897 = cljs.core.get.call(null,inst_34895,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34898 = cljs.core.not_empty.call(null,inst_34896__$1);
var state_34921__$1 = (function (){var statearr_34943 = state_34921;
(statearr_34943[(21)] = inst_34897);

(statearr_34943[(20)] = inst_34896__$1);

return statearr_34943;
})();
if(cljs.core.truth_(inst_34898)){
var statearr_34944_35023 = state_34921__$1;
(statearr_34944_35023[(1)] = (41));

} else {
var statearr_34945_35024 = state_34921__$1;
(statearr_34945_35024[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (33))){
var state_34921__$1 = state_34921;
var statearr_34946_35025 = state_34921__$1;
(statearr_34946_35025[(2)] = false);

(statearr_34946_35025[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (13))){
var inst_34794 = (state_34921[(22)]);
var inst_34798 = cljs.core.chunk_first.call(null,inst_34794);
var inst_34799 = cljs.core.chunk_rest.call(null,inst_34794);
var inst_34800 = cljs.core.count.call(null,inst_34798);
var inst_34781 = inst_34799;
var inst_34782 = inst_34798;
var inst_34783 = inst_34800;
var inst_34784 = (0);
var state_34921__$1 = (function (){var statearr_34947 = state_34921;
(statearr_34947[(7)] = inst_34784);

(statearr_34947[(8)] = inst_34782);

(statearr_34947[(9)] = inst_34781);

(statearr_34947[(10)] = inst_34783);

return statearr_34947;
})();
var statearr_34948_35026 = state_34921__$1;
(statearr_34948_35026[(2)] = null);

(statearr_34948_35026[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (22))){
var inst_34837 = (state_34921[(23)]);
var inst_34834 = (state_34921[(19)]);
var inst_34838 = (state_34921[(24)]);
var inst_34842 = (state_34921[(25)]);
var inst_34837__$1 = (state_34921[(2)]);
var inst_34838__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34837__$1);
var inst_34839 = (function (){var all_files = inst_34834;
var res_SINGLEQUOTE_ = inst_34837__$1;
var res = inst_34838__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34837,inst_34834,inst_34838,inst_34842,inst_34837__$1,inst_34838__$1,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34763_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34763_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34837,inst_34834,inst_34838,inst_34842,inst_34837__$1,inst_34838__$1,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34840 = cljs.core.filter.call(null,inst_34839,inst_34837__$1);
var inst_34841 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34842__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34841);
var inst_34843 = cljs.core.not_empty.call(null,inst_34842__$1);
var state_34921__$1 = (function (){var statearr_34949 = state_34921;
(statearr_34949[(23)] = inst_34837__$1);

(statearr_34949[(26)] = inst_34840);

(statearr_34949[(24)] = inst_34838__$1);

(statearr_34949[(25)] = inst_34842__$1);

return statearr_34949;
})();
if(cljs.core.truth_(inst_34843)){
var statearr_34950_35027 = state_34921__$1;
(statearr_34950_35027[(1)] = (23));

} else {
var statearr_34951_35028 = state_34921__$1;
(statearr_34951_35028[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (36))){
var state_34921__$1 = state_34921;
var statearr_34952_35029 = state_34921__$1;
(statearr_34952_35029[(2)] = false);

(statearr_34952_35029[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (41))){
var inst_34896 = (state_34921[(20)]);
var inst_34900 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34901 = cljs.core.map.call(null,inst_34900,inst_34896);
var inst_34902 = cljs.core.pr_str.call(null,inst_34901);
var inst_34903 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34902)].join('');
var inst_34904 = figwheel.client.utils.log.call(null,inst_34903);
var state_34921__$1 = state_34921;
var statearr_34953_35030 = state_34921__$1;
(statearr_34953_35030[(2)] = inst_34904);

(statearr_34953_35030[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (43))){
var inst_34897 = (state_34921[(21)]);
var inst_34907 = (state_34921[(2)]);
var inst_34908 = cljs.core.not_empty.call(null,inst_34897);
var state_34921__$1 = (function (){var statearr_34954 = state_34921;
(statearr_34954[(27)] = inst_34907);

return statearr_34954;
})();
if(cljs.core.truth_(inst_34908)){
var statearr_34955_35031 = state_34921__$1;
(statearr_34955_35031[(1)] = (44));

} else {
var statearr_34956_35032 = state_34921__$1;
(statearr_34956_35032[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (29))){
var inst_34837 = (state_34921[(23)]);
var inst_34840 = (state_34921[(26)]);
var inst_34874 = (state_34921[(16)]);
var inst_34834 = (state_34921[(19)]);
var inst_34838 = (state_34921[(24)]);
var inst_34842 = (state_34921[(25)]);
var inst_34870 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34873 = (function (){var all_files = inst_34834;
var res_SINGLEQUOTE_ = inst_34837;
var res = inst_34838;
var files_not_loaded = inst_34840;
var dependencies_that_loaded = inst_34842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34837,inst_34840,inst_34874,inst_34834,inst_34838,inst_34842,inst_34870,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34872){
var map__34957 = p__34872;
var map__34957__$1 = ((((!((map__34957 == null)))?(((((map__34957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34957):map__34957);
var namespace = cljs.core.get.call(null,map__34957__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34837,inst_34840,inst_34874,inst_34834,inst_34838,inst_34842,inst_34870,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34874__$1 = cljs.core.group_by.call(null,inst_34873,inst_34840);
var inst_34876 = (inst_34874__$1 == null);
var inst_34877 = cljs.core.not.call(null,inst_34876);
var state_34921__$1 = (function (){var statearr_34959 = state_34921;
(statearr_34959[(28)] = inst_34870);

(statearr_34959[(16)] = inst_34874__$1);

return statearr_34959;
})();
if(inst_34877){
var statearr_34960_35033 = state_34921__$1;
(statearr_34960_35033[(1)] = (32));

} else {
var statearr_34961_35034 = state_34921__$1;
(statearr_34961_35034[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (44))){
var inst_34897 = (state_34921[(21)]);
var inst_34910 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34897);
var inst_34911 = cljs.core.pr_str.call(null,inst_34910);
var inst_34912 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34911)].join('');
var inst_34913 = figwheel.client.utils.log.call(null,inst_34912);
var state_34921__$1 = state_34921;
var statearr_34962_35035 = state_34921__$1;
(statearr_34962_35035[(2)] = inst_34913);

(statearr_34962_35035[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (6))){
var inst_34815 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
var statearr_34963_35036 = state_34921__$1;
(statearr_34963_35036[(2)] = inst_34815);

(statearr_34963_35036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (28))){
var inst_34840 = (state_34921[(26)]);
var inst_34867 = (state_34921[(2)]);
var inst_34868 = cljs.core.not_empty.call(null,inst_34840);
var state_34921__$1 = (function (){var statearr_34964 = state_34921;
(statearr_34964[(29)] = inst_34867);

return statearr_34964;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_34965_35037 = state_34921__$1;
(statearr_34965_35037[(1)] = (29));

} else {
var statearr_34966_35038 = state_34921__$1;
(statearr_34966_35038[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (25))){
var inst_34838 = (state_34921[(24)]);
var inst_34854 = (state_34921[(2)]);
var inst_34855 = cljs.core.not_empty.call(null,inst_34838);
var state_34921__$1 = (function (){var statearr_34967 = state_34921;
(statearr_34967[(30)] = inst_34854);

return statearr_34967;
})();
if(cljs.core.truth_(inst_34855)){
var statearr_34968_35039 = state_34921__$1;
(statearr_34968_35039[(1)] = (26));

} else {
var statearr_34969_35040 = state_34921__$1;
(statearr_34969_35040[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (34))){
var inst_34890 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
if(cljs.core.truth_(inst_34890)){
var statearr_34970_35041 = state_34921__$1;
(statearr_34970_35041[(1)] = (38));

} else {
var statearr_34971_35042 = state_34921__$1;
(statearr_34971_35042[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (17))){
var state_34921__$1 = state_34921;
var statearr_34972_35043 = state_34921__$1;
(statearr_34972_35043[(2)] = recompile_dependents);

(statearr_34972_35043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (3))){
var state_34921__$1 = state_34921;
var statearr_34973_35044 = state_34921__$1;
(statearr_34973_35044[(2)] = null);

(statearr_34973_35044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (12))){
var inst_34811 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
var statearr_34974_35045 = state_34921__$1;
(statearr_34974_35045[(2)] = inst_34811);

(statearr_34974_35045[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (2))){
var inst_34773 = (state_34921[(13)]);
var inst_34780 = cljs.core.seq.call(null,inst_34773);
var inst_34781 = inst_34780;
var inst_34782 = null;
var inst_34783 = (0);
var inst_34784 = (0);
var state_34921__$1 = (function (){var statearr_34975 = state_34921;
(statearr_34975[(7)] = inst_34784);

(statearr_34975[(8)] = inst_34782);

(statearr_34975[(9)] = inst_34781);

(statearr_34975[(10)] = inst_34783);

return statearr_34975;
})();
var statearr_34976_35046 = state_34921__$1;
(statearr_34976_35046[(2)] = null);

(statearr_34976_35046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (23))){
var inst_34837 = (state_34921[(23)]);
var inst_34840 = (state_34921[(26)]);
var inst_34834 = (state_34921[(19)]);
var inst_34838 = (state_34921[(24)]);
var inst_34842 = (state_34921[(25)]);
var inst_34845 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34847 = (function (){var all_files = inst_34834;
var res_SINGLEQUOTE_ = inst_34837;
var res = inst_34838;
var files_not_loaded = inst_34840;
var dependencies_that_loaded = inst_34842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34837,inst_34840,inst_34834,inst_34838,inst_34842,inst_34845,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34846){
var map__34977 = p__34846;
var map__34977__$1 = ((((!((map__34977 == null)))?(((((map__34977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34977):map__34977);
var request_url = cljs.core.get.call(null,map__34977__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34837,inst_34840,inst_34834,inst_34838,inst_34842,inst_34845,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34848 = cljs.core.reverse.call(null,inst_34842);
var inst_34849 = cljs.core.map.call(null,inst_34847,inst_34848);
var inst_34850 = cljs.core.pr_str.call(null,inst_34849);
var inst_34851 = figwheel.client.utils.log.call(null,inst_34850);
var state_34921__$1 = (function (){var statearr_34979 = state_34921;
(statearr_34979[(31)] = inst_34845);

return statearr_34979;
})();
var statearr_34980_35047 = state_34921__$1;
(statearr_34980_35047[(2)] = inst_34851);

(statearr_34980_35047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (35))){
var state_34921__$1 = state_34921;
var statearr_34981_35048 = state_34921__$1;
(statearr_34981_35048[(2)] = true);

(statearr_34981_35048[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (19))){
var inst_34824 = (state_34921[(12)]);
var inst_34830 = figwheel.client.file_reloading.expand_files.call(null,inst_34824);
var state_34921__$1 = state_34921;
var statearr_34982_35049 = state_34921__$1;
(statearr_34982_35049[(2)] = inst_34830);

(statearr_34982_35049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (11))){
var state_34921__$1 = state_34921;
var statearr_34983_35050 = state_34921__$1;
(statearr_34983_35050[(2)] = null);

(statearr_34983_35050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (9))){
var inst_34813 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
var statearr_34984_35051 = state_34921__$1;
(statearr_34984_35051[(2)] = inst_34813);

(statearr_34984_35051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (5))){
var inst_34784 = (state_34921[(7)]);
var inst_34783 = (state_34921[(10)]);
var inst_34786 = (inst_34784 < inst_34783);
var inst_34787 = inst_34786;
var state_34921__$1 = state_34921;
if(cljs.core.truth_(inst_34787)){
var statearr_34985_35052 = state_34921__$1;
(statearr_34985_35052[(1)] = (7));

} else {
var statearr_34986_35053 = state_34921__$1;
(statearr_34986_35053[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (14))){
var inst_34794 = (state_34921[(22)]);
var inst_34803 = cljs.core.first.call(null,inst_34794);
var inst_34804 = figwheel.client.file_reloading.eval_body.call(null,inst_34803,opts);
var inst_34805 = cljs.core.next.call(null,inst_34794);
var inst_34781 = inst_34805;
var inst_34782 = null;
var inst_34783 = (0);
var inst_34784 = (0);
var state_34921__$1 = (function (){var statearr_34987 = state_34921;
(statearr_34987[(7)] = inst_34784);

(statearr_34987[(8)] = inst_34782);

(statearr_34987[(32)] = inst_34804);

(statearr_34987[(9)] = inst_34781);

(statearr_34987[(10)] = inst_34783);

return statearr_34987;
})();
var statearr_34988_35054 = state_34921__$1;
(statearr_34988_35054[(2)] = null);

(statearr_34988_35054[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (45))){
var state_34921__$1 = state_34921;
var statearr_34989_35055 = state_34921__$1;
(statearr_34989_35055[(2)] = null);

(statearr_34989_35055[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (26))){
var inst_34837 = (state_34921[(23)]);
var inst_34840 = (state_34921[(26)]);
var inst_34834 = (state_34921[(19)]);
var inst_34838 = (state_34921[(24)]);
var inst_34842 = (state_34921[(25)]);
var inst_34857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34859 = (function (){var all_files = inst_34834;
var res_SINGLEQUOTE_ = inst_34837;
var res = inst_34838;
var files_not_loaded = inst_34840;
var dependencies_that_loaded = inst_34842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34837,inst_34840,inst_34834,inst_34838,inst_34842,inst_34857,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34858){
var map__34990 = p__34858;
var map__34990__$1 = ((((!((map__34990 == null)))?(((((map__34990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34990):map__34990);
var namespace = cljs.core.get.call(null,map__34990__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34990__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34837,inst_34840,inst_34834,inst_34838,inst_34842,inst_34857,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34860 = cljs.core.map.call(null,inst_34859,inst_34838);
var inst_34861 = cljs.core.pr_str.call(null,inst_34860);
var inst_34862 = figwheel.client.utils.log.call(null,inst_34861);
var inst_34863 = (function (){var all_files = inst_34834;
var res_SINGLEQUOTE_ = inst_34837;
var res = inst_34838;
var files_not_loaded = inst_34840;
var dependencies_that_loaded = inst_34842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34837,inst_34840,inst_34834,inst_34838,inst_34842,inst_34857,inst_34859,inst_34860,inst_34861,inst_34862,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34837,inst_34840,inst_34834,inst_34838,inst_34842,inst_34857,inst_34859,inst_34860,inst_34861,inst_34862,state_val_34922,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34864 = setTimeout(inst_34863,(10));
var state_34921__$1 = (function (){var statearr_34992 = state_34921;
(statearr_34992[(33)] = inst_34857);

(statearr_34992[(34)] = inst_34862);

return statearr_34992;
})();
var statearr_34993_35056 = state_34921__$1;
(statearr_34993_35056[(2)] = inst_34864);

(statearr_34993_35056[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (16))){
var state_34921__$1 = state_34921;
var statearr_34994_35057 = state_34921__$1;
(statearr_34994_35057[(2)] = reload_dependents);

(statearr_34994_35057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (38))){
var inst_34874 = (state_34921[(16)]);
var inst_34892 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34874);
var state_34921__$1 = state_34921;
var statearr_34995_35058 = state_34921__$1;
(statearr_34995_35058[(2)] = inst_34892);

(statearr_34995_35058[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (30))){
var state_34921__$1 = state_34921;
var statearr_34996_35059 = state_34921__$1;
(statearr_34996_35059[(2)] = null);

(statearr_34996_35059[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (10))){
var inst_34794 = (state_34921[(22)]);
var inst_34796 = cljs.core.chunked_seq_QMARK_.call(null,inst_34794);
var state_34921__$1 = state_34921;
if(inst_34796){
var statearr_34997_35060 = state_34921__$1;
(statearr_34997_35060[(1)] = (13));

} else {
var statearr_34998_35061 = state_34921__$1;
(statearr_34998_35061[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (18))){
var inst_34828 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
if(cljs.core.truth_(inst_34828)){
var statearr_34999_35062 = state_34921__$1;
(statearr_34999_35062[(1)] = (19));

} else {
var statearr_35000_35063 = state_34921__$1;
(statearr_35000_35063[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (42))){
var state_34921__$1 = state_34921;
var statearr_35001_35064 = state_34921__$1;
(statearr_35001_35064[(2)] = null);

(statearr_35001_35064[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (37))){
var inst_34887 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
var statearr_35002_35065 = state_34921__$1;
(statearr_35002_35065[(2)] = inst_34887);

(statearr_35002_35065[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (8))){
var inst_34781 = (state_34921[(9)]);
var inst_34794 = (state_34921[(22)]);
var inst_34794__$1 = cljs.core.seq.call(null,inst_34781);
var state_34921__$1 = (function (){var statearr_35003 = state_34921;
(statearr_35003[(22)] = inst_34794__$1);

return statearr_35003;
})();
if(inst_34794__$1){
var statearr_35004_35066 = state_34921__$1;
(statearr_35004_35066[(1)] = (10));

} else {
var statearr_35005_35067 = state_34921__$1;
(statearr_35005_35067[(1)] = (11));

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
});})(c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33649__auto__,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33650__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33650__auto____0 = (function (){
var statearr_35006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35006[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33650__auto__);

(statearr_35006[(1)] = (1));

return statearr_35006;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33650__auto____1 = (function (state_34921){
while(true){
var ret_value__33651__auto__ = (function (){try{while(true){
var result__33652__auto__ = switch__33649__auto__.call(null,state_34921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33652__auto__;
}
break;
}
}catch (e35007){if((e35007 instanceof Object)){
var ex__33653__auto__ = e35007;
var statearr_35008_35068 = state_34921;
(statearr_35008_35068[(5)] = ex__33653__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33651__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35069 = state_34921;
state_34921 = G__35069;
continue;
} else {
return ret_value__33651__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33650__auto__ = function(state_34921){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33650__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33650__auto____1.call(this,state_34921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33650__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33650__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33650__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33650__auto__;
})()
;})(switch__33649__auto__,c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33674__auto__ = (function (){var statearr_35009 = f__33673__auto__.call(null);
(statearr_35009[(6)] = c__33672__auto__);

return statearr_35009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33674__auto__);
});})(c__33672__auto__,map__34766,map__34766__$1,opts,before_jsload,on_jsload,reload_dependents,map__34767,map__34767__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33672__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35072,link){
var map__35073 = p__35072;
var map__35073__$1 = ((((!((map__35073 == null)))?(((((map__35073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35073):map__35073);
var file = cljs.core.get.call(null,map__35073__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__35073,map__35073__$1,file){
return (function (p1__35070_SHARP_,p2__35071_SHARP_){
if(cljs.core._EQ_.call(null,p1__35070_SHARP_,p2__35071_SHARP_)){
return p1__35070_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__35073,map__35073__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35076){
var map__35077 = p__35076;
var map__35077__$1 = ((((!((map__35077 == null)))?(((((map__35077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35077):map__35077);
var match_length = cljs.core.get.call(null,map__35077__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35077__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35075_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35075_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35079_SHARP_,p2__35080_SHARP_){
return cljs.core.assoc.call(null,p1__35079_SHARP_,cljs.core.get.call(null,p2__35080_SHARP_,key),p2__35080_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35081 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35081);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35081);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35082,p__35083){
var map__35084 = p__35082;
var map__35084__$1 = ((((!((map__35084 == null)))?(((((map__35084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35084):map__35084);
var on_cssload = cljs.core.get.call(null,map__35084__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35085 = p__35083;
var map__35085__$1 = ((((!((map__35085 == null)))?(((((map__35085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35085):map__35085);
var files_msg = map__35085__$1;
var files = cljs.core.get.call(null,map__35085__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1536537369023
