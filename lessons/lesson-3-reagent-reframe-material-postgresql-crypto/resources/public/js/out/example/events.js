// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.events');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('example.utils.http_fx');
goog.require('goog.object');
goog.require('ajax.core');
goog.require('example.db');
goog.require('example.utils.js');
goog.require('reagent.impl.template');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return example.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("example.events","set-active-demo","example.events/set-active-demo",-1754613640),(function (db,p__34007){
var vec__34008 = p__34007;
var _ = cljs.core.nth.call(null,vec__34008,(0),null);
var active_demo = cljs.core.nth.call(null,vec__34008,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),(function (db,p__34011){
var vec__34012 = p__34011;
var _ = cljs.core.nth.call(null,vec__34012,(0),null);
var active_demo = cljs.core.nth.call(null,vec__34012,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-demo","active-demo",1389927874),active_demo);
}));

//# sourceMappingURL=events.js.map?rel=1538314527791
