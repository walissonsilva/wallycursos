(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
r("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.N=b.prototype}
function oa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.u=this.h=null}
function pa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
oa.prototype.B=function(a){this.g=a};
function qa(a,b){a.h={Da:b,qa:!0};a.f=a.l||a.j}
oa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function w(a,b,c){a.f=c;return{value:b}}
oa.prototype.F=function(a){this.f=a};
function ra(a){a.l=2;a.j=3}
function sa(a){a.l=0;a.h=null}
function ta(a){a.u=[a.h];a.l=0;a.j=0}
function ua(a){var b=a.u.splice(0)[0];(b=a.h=a.h||b)?b.qa?a.f=a.l||a.j:void 0!=b.F&&a.j<b.F?(a.f=b.F,a.h=null):a.f=a.j:a.f=0}
function va(a){this.f=new oa;this.g=a}
function wa(a,b){pa(a.f);var c=a.f.i;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,qa(a.f,g),ya(a)}a.f.i=null;d.call(a.f,f);return ya(a)}
function ya(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,qa(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.qa)throw b.Da;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.f);a.f.i?b=xa(a,a.f.i.next,b,a.f.B):(a.f.B(b),b=ya(a));return b};
this["throw"]=function(b){pa(a.f);a.f.i?b=xa(a,a.f.i["throw"],b,a.f.B):(qa(a.f,b),b=ya(a));return b};
this["return"]=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){var c=new za(new va(b));na&&a.prototype&&na(c,a.prototype);return c}
r("Reflect",function(a){return a?a:{}});
r("Reflect.construct",function(){return ia});
r("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Ba(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
r("Array.prototype.keys",function(a){return a?a:function(){return Ba(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ba(this,function(b,c){return c})}});
function Ca(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ca(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||Da});
r("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.C),reject:g(this.j)}};
b.prototype.C=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.G(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.u(g):this.l(g)}};
b.prototype.u=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.H(h,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.B()};
b.prototype.B=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.G=function(g){var h=this.i();g.ca(h.resolve,h.reject)};
b.prototype.H=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(u,q){return"function"==typeof u?function(B){try{l(u(B))}catch(E){m(E)}}:q}
var l,m,p=new b(function(u,q){l=u;m=q});
this.ca(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.ca=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).ca(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(B){return function(E){u[B]=E;q--;0==q&&l(u)}}
var u=[],q=0;do u.push(void 0),q++,d(k.value).ca(p(u.length-1),m),k=h.next();while(!k.done)})};
return b});
r("Object.setPrototypeOf",function(a){return a||na});
r("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ca(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ca(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&Ca(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.f)?delete k[g][this.f]:!1};
return b});
r("Array.prototype.entries",function(a){return a?a:function(){return Ba(this,function(b,c){return[b,c]})}});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&Ca(h.g,l))for(var p=0;p<m.length;p++){var u=m[p];if(k!==k&&u.key!==u.key||k===u.key)return{id:l,list:m,index:p,A:u}}return{id:l,list:m,index:-1,A:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.A?l.A.value=k:(l.A={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.A),this.f.previous.next=l.A,this.f.previous=l.A,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.A&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.A.previous.next=h.A.next,h.A.next.previous=h.A.previous,h.A.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).A};
e.prototype.get=function(h){return(h=d(this,h).A)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push([d,b[d]]);return c}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Aa(this,b,"includes").indexOf(b,c||0)}});
r("Set",function(a){function b(c){this.f=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var Ea=/^[\w+/_-]+[=]{0,2}$/,Fa=null;function Ga(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ea.test(a)?a:""}
function A(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ha(){}
function Ia(a){a.ka=void 0;a.getInstance=function(){return a.ka?a.ka:a.ka=new a}}
function Ja(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ka(a){var b=Ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function La(a){return"function"==Ja(a)}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Qa:C=Ra;return C.apply(null,arguments)}
function Ta(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var D=Date.now;function Ua(a,b){z(a,b,void 0)}
function F(a,b){function c(){}
c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Va(a){return a}
;function G(a){if(Error.captureStackTrace)Error.captureStackTrace(this,G);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(G,Error);G.prototype.name="CustomError";function Wa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.i=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;function Xa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},$a=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ab=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function bb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function cb(a,b){var c=Ya(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function fb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function gb(a,b){var c=Ka(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a){for(var b in a)return!1;return!0}
function kb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function nb(a){var b=Ja(a);if("object"==b||"array"==b){if(La(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=nb(a[c]);return b}return a}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){if(void 0===qb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Va,createScript:Va,createScriptURL:Va})}catch(c){y.console&&y.console.error(c.message)}qb=a}else qb=a}return qb}
;function sb(a,b){this.f=a===tb&&b||"";this.g=ub}
sb.prototype.M=!0;sb.prototype.L=function(){return this.f.toString()};
sb.prototype.ja=!0;sb.prototype.ga=function(){return 1};
function vb(a){if(a instanceof sb&&a.constructor===sb&&a.g===ub)return a.f;Ja(a);return"type_error:TrustedResourceUrl"}
var ub={},tb={};var wb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function xb(a,b){if(b)a=a.replace(yb,"&amp;").replace(zb,"&lt;").replace(Ab,"&gt;").replace(Bb,"&quot;").replace(Cb,"&#39;").replace(Db,"&#0;");else{if(!Eb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(yb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(zb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ab,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Bb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Cb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Db,"&#0;"))}return a}
var yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;function I(a,b){this.f=a===Fb&&b||"";this.g=Gb}
I.prototype.M=!0;I.prototype.L=function(){return this.f.toString()};
I.prototype.ja=!0;I.prototype.ga=function(){return 1};
function Hb(a){if(a instanceof I&&a.constructor===I&&a.g===Gb)return a.f;Ja(a);return"type_error:SafeUrl"}
var Ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Jb(a){if(a instanceof I)return a;a="object"==typeof a&&a.M?a.L():String(a);Ib.test(a)||(a="about:invalid#zClosurez");return new I(Fb,a)}
var Gb={},Kb=new I(Fb,"about:invalid#zClosurez"),Fb={};var Lb;a:{var Mb=y.navigator;if(Mb){var Nb=Mb.userAgent;if(Nb){Lb=Nb;break a}}Lb=""}function J(a){return-1!=Lb.indexOf(a)}
;function Ob(){this.f="";this.h=Pb;this.g=null}
Ob.prototype.ja=!0;Ob.prototype.ga=function(){return this.g};
Ob.prototype.M=!0;Ob.prototype.L=function(){return this.f.toString()};
var Pb={};function Qb(a,b){var c=new Ob,d=rb();c.f=d?d.createHTML(a):a;c.g=b;return c}
;function Rb(a,b){var c=b instanceof I?b:Jb(b);a.href=Hb(c)}
function Sb(a,b){a.src=vb(b);var c;(c=a.ownerDocument&&a.ownerDocument.defaultView)&&c!=y?c=Ga(c.document):(null===Fa&&(Fa=Ga(y.document)),c=Fa);c&&a.setAttribute("nonce",c)}
;function Ub(a){return a=xb(a,void 0)}
function Vb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Wb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xb(a){return a?decodeURI(a):a}
function K(a){return Xb(a.match(Wb)[3]||null)}
function Yb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Yb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Zb(a){var b=[],c;for(c in a)Yb(c,a[c],b);return b.join("&")}
function $b(a,b){var c=Zb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var ac=/#|$/;function bc(a,b){var c=a.search(ac);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;var cc=J("Opera"),dc=J("Trident")||J("MSIE"),ec=J("Edge"),fc=J("Gecko")&&!(-1!=Lb.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),gc=-1!=Lb.toLowerCase().indexOf("webkit")&&!J("Edge");function hc(){var a=y.document;return a?a.documentMode:void 0}
var ic;a:{var jc="",kc=function(){var a=Lb;if(fc)return/rv:([^\);]+)(\)|;)/.exec(a);if(ec)return/Edge\/([\d\.]+)/.exec(a);if(dc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(gc)return/WebKit\/(\S+)/.exec(a);if(cc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
kc&&(jc=kc?kc[1]:"");if(dc){var lc=hc();if(null!=lc&&lc>parseFloat(jc)){ic=String(lc);break a}}ic=jc}var mc=ic,nc;if(y.document&&dc){var oc=hc();nc=oc?oc:parseInt(mc,10)||void 0}else nc=void 0;var pc=nc;var qc=J("iPhone")&&!J("iPod")&&!J("iPad")||J("iPod"),rc=J("iPad");var sc={},tc=null;var L=window;function uc(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=vc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,wc[c])c=wc[c];else{c=String(c);if(!wc[c]){var f=/function\s+([^\(]+)/m.exec(c);wc[c]=f?f[1]:"[Anonymous]"}c=wc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function vc(a,b){b||(b={});b[xc(a)]=!0;var c=a.stack||"",d=a.vb;d&&!b[xc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=vc(d,b));return c}
function xc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var wc={};function yc(a){this.f=a||{cookie:""}}
n=yc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Bb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ra}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=wb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ra:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=wb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var zc=new yc("undefined"==typeof document?null:document);var Ac=!dc||9<=Number(pc);function Bc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Bc.prototype;n.clone=function(){return new Bc(this.x,this.y)};
n.equals=function(a){return a instanceof Bc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Cc(a,b){this.width=a;this.height=b}
n=Cc.prototype;n.clone=function(){return new Cc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Dc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Ec(a,b){fb(b,function(c,d){c&&"object"==typeof c&&c.M&&(c=c.L());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Fc.hasOwnProperty(d)?a.setAttribute(Fc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Fc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Gc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Ac&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ub(g.name),'"');if(g.type){f.push(' type="',Ub(g.type),'"');var h={};pb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Hc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Ec(f,g));2<d.length&&Ic(e,f,d);return f}
function Ic(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Ka(f)||Ma(f)&&0<f.nodeType?d(f):H(Jc(f)?db(f):f,d)}}
function Hc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Jc(a){if(a&&"number"==typeof a.length){if(Ma(a))return"function"==typeof a.item||"string"==typeof a.item;if(La(a))return"function"==typeof a.item}return!1}
function Kc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Lc(a){Mc();var b=rb();a=b?b.createScriptURL(a):a;return new sb(tb,a)}
var Mc=Ha;function Nc(a){var b=Oc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Pc(){var a=[];Nc(function(b){a.push(b)});
return a}
var Oc={hb:"allow-forms",ib:"allow-modals",jb:"allow-orientation-lock",kb:"allow-pointer-lock",lb:"allow-popups",mb:"allow-popups-to-escape-sandbox",nb:"allow-presentation",ob:"allow-same-origin",pb:"allow-scripts",qb:"allow-top-navigation",rb:"allow-top-navigation-by-user-activation"},Qc=Xa(function(){return Pc()});
function Rc(){var a=Hc(document,"IFRAME"),b={};H(Qc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function M(){this.g=this.g;this.B=this.B}
M.prototype.g=!1;M.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function Sc(a,b){a.g?b():(a.B||(a.B=[]),a.B.push(b))}
M.prototype.o=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function Tc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Uc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ka(d)?Uc.apply(null,d):Tc(d)}}
;function N(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Vc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Wc=(new Date).getTime();function Xc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Yc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var u=g,q=0;64>q;q+=4)u[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=u[q-3]^u[q-8]^u[q-14]^u[q-16],u[q]=(p<<1|p>>>31)&4294967295;p=e[0];var B=e[1],E=e[2],U=e[3],gd=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Sa=U^B&(E^U);var Tb=1518500249}else Sa=B^E^U,Tb=1859775393;else 60>q?(Sa=B&E|U&(B|E),Tb=2400959708):(Sa=B^E^U,Tb=3395469782);Sa=((p<<5|p>>>27)&4294967295)+Sa+gd+Tb+u[q]&4294967295;gd=U;U=E;E=(B<<30|B>>>2)&4294967295;B=p;p=Sa}e[0]=e[0]+p&4294967295;e[1]=e[1]+
B&4294967295;e[2]=e[2]+E&4294967295;e[3]=e[3]+U&4294967295;e[4]=e[4]+gd&4294967295}
function c(p,u){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],B=0,E=p.length;B<E;++B)q.push(p.charCodeAt(B));p=q}u||(u=p.length);q=0;if(0==l)for(;q+64<u;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<u;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<u;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],u=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=u&255,u>>>=8;b(f);for(q=u=0;5>q;q++)for(var B=24;0<=B;B-=8)p[u++]=e[q]>>B&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ca:function(){for(var p=d(),u="",q=0;q<p.length;q++)u+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return u}}}
;function Zc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),$c(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=$c(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function $c(a){var b=Yc();b.update(a);return b.Ca().toLowerCase()}
;function ad(a){var b=Xc(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new yc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?y.__SAPISID:y.__APISID,c||(c=new yc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,Zc(Xc(d),c,a||null)].join(" "):null}return null}
;function bd(){this.g=[];this.f=-1}
bd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
bd.prototype.get=function(a){return!!this.g[a]};
function cd(a){-1==a.f&&(a.f=ab(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function dd(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
dd.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function ed(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function fd(a){y.setTimeout(function(){throw a;},0)}
var hd;
function id(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Hc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.oa;c.oa=null;e()}};
return function(e){d.next={oa:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function jd(){this.g=this.f=null}
var ld=new dd(function(){return new kd},function(a){a.reset()});
jd.prototype.add=function(a,b){var c=ld.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
jd.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function kd(){this.next=this.scope=this.f=null}
kd.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
kd.prototype.reset=function(){this.next=this.scope=this.f=null};function md(a,b){nd||od();pd||(nd(),pd=!0);qd.add(a,b)}
var nd;function od(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);nd=function(){a.then(rd)}}else nd=function(){var b=rd;
!La(y.setImmediate)||y.Window&&y.Window.prototype&&!J("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(hd||(hd=id()),hd(b)):y.setImmediate(b)}}
var pd=!1,qd=new jd;function rd(){for(var a;a=qd.remove();){try{a.f.call(a.scope)}catch(b){fd(b)}ed(ld,a)}pd=!1}
;function sd(){this.g=-1}
;function td(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
F(td,sd);td.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function ud(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
td.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)ud(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){ud(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){ud(this,e);f=0;break}}this.h=f;this.j+=b}};
td.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;ud(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var vd="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function wd(){}
wd.prototype.next=function(){throw vd;};
wd.prototype.I=function(){return this};
function xd(a){if(a instanceof wd)return a;if("function"==typeof a.I)return a.I(!1);if(Ka(a)){var b=0,c=new wd;c.next=function(){for(;;){if(b>=a.length)throw vd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function yd(a,b){if(Ka(a))try{H(a,b,void 0)}catch(c){if(c!==vd)throw c;}else{a=xd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==vd)throw c;}}}
function zd(a){if(Ka(a))return db(a);a=xd(a);var b=[];yd(a,function(c){b.push(c)});
return b}
;function Ad(a,b){this.h={};this.f=[];this.J=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ad)for(c=Bd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Bd(a){Cd(a);return a.f.concat()}
n=Ad.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Dd;Cd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Dd(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.J=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.J++,this.f.length>2*this.g&&Cd(this),!0):!1};
function Cd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.J++);this.h[a]=b};
n.forEach=function(a,b){for(var c=Bd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Ad(this)};
n.I=function(a){Cd(this);var b=0,c=this.J,d=this,e=new wd;e.next=function(){if(c!=d.J)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw vd;var f=d.f[b++];return a?f:d.h[f]};
return e};function Ed(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Fd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Gd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Ed(a).match(/\S+/g)||[],c=0<=Ya(c,b);return c}
function Hd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Gd(a,"inverted-hdpi")&&Fd(a,Za(a.classList?a.classList:Ed(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Id(a){var b=[];Jd(new Kd,a,b);return b.join("")}
function Kd(){}
function Jd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Jd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ld(d,c),c.push(":"),Jd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ld(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Md={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Nd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ld(a,b){b.push('"',a.replace(Nd,function(c){var d=Md[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Md[c]=d);return d}),'"')}
;function Od(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function O(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Ha)try{var b=this;a.call(void 0,function(c){Pd(b,2,c)},function(c){Pd(b,3,c)})}catch(c){Pd(this,3,c)}}
function Qd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Qd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Rd=new dd(function(){return new Qd},function(a){a.reset()});
function Sd(a,b,c){var d=Rd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Td(a){if(a instanceof O)return a;var b=new O(Ha);Pd(b,2,a);return b}
function Ud(a){return new O(function(b,c){c(a)})}
O.prototype.then=function(a,b,c){return Vd(this,La(a)?a:null,La(b)?b:null,c)};
O.prototype.$goog_Thenable=!0;function Wd(a,b){return Vd(a,null,b,void 0)}
O.prototype.cancel=function(a){if(0==this.f){var b=new Xd(a);md(function(){Yd(this,b)},this)}};
function Yd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Yd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Zd(c),$d(c,e,3,b)))}a.h=null}else Pd(a,3,b)}
function ae(a,b){a.g||2!=a.f&&3!=a.f||be(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Vd(a,b,c,d){var e=Sd(null,null,null);e.f=new O(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Xd?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;ae(a,e);return e.f}
O.prototype.u=function(a){this.f=0;Pd(this,2,a)};
O.prototype.C=function(a){this.f=0;Pd(this,3,a)};
function Pd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.u,f=a.C;if(d instanceof O){ae(d,Sd(e||Ha,f||null,a));var g=!0}else if(Od(d))d.then(e,f,a),g=!0;else{if(Ma(d))try{var h=d.then;if(La(h)){ce(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.m=c,a.f=b,a.h=null,be(a),3!=b||c instanceof Xd||de(a,c))}}
function ce(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function be(a){a.l||(a.l=!0,md(a.B,a))}
function Zd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
O.prototype.B=function(){for(var a;a=Zd(this);)$d(this,a,this.f,this.m);this.l=!1};
function $d(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,ee(b,c,d);else try{b.h?b.g.call(b.context):ee(b,c,d)}catch(e){fe.call(null,e)}ed(Rd,b)}
function ee(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function de(a,b){a.j=!0;md(function(){a.j&&fe.call(null,b)})}
var fe=fd;function Xd(a){G.call(this,a)}
F(Xd,G);Xd.prototype.name="cancel";function P(a){M.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
F(P,M);n=P.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function ge(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=bb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.P(b)}}
n.P=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=Ha):(c&&cb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.O=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];he(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.P(c)}}return 0!=e}return!1};
function he(a,b,c){md(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(H(b,this.P,this),delete this.h[a])}else this.f.length=0,this.h={}};
n.o=function(){P.N.o.call(this);this.clear();this.i.length=0};function ie(a){this.f=a}
ie.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Id(b))};
ie.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ie.prototype.remove=function(a){this.f.remove(a)};function je(a){this.f=a}
F(je,ie);function ke(a){this.data=a}
function le(a){return void 0===a||a instanceof ke?a:new ke(a)}
je.prototype.set=function(a,b){je.N.set.call(this,a,le(b))};
je.prototype.g=function(a){a=je.N.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
je.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function me(a){this.f=a}
F(me,je);me.prototype.set=function(a,b,c){if(b=le(b)){if(c){if(c<D()){me.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}me.N.set.call(this,a,b)};
me.prototype.g=function(a){var b=me.N.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())me.prototype.remove.call(this,a);else return b}};function ne(){}
;function oe(){}
F(oe,ne);oe.prototype.clear=function(){var a=zd(this.I(!0)),b=this;H(a,function(c){b.remove(c)})};function pe(a){this.f=a}
F(pe,oe);n=pe.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.I=function(a){var b=0,c=this.f,d=new wd;d.next=function(){if(b>=c.length)throw vd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function qe(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
F(qe,pe);function re(a,b){this.g=a;this.f=null;if(dc&&!(9<=Number(pc))){se||(se=new Ad);this.f=se.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),se.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
F(re,oe);var te={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},se=null;function ue(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return te[b]})}
n=re.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(ue(a),b);ve(this)};
n.get=function(a){a=this.f.getAttribute(ue(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(ue(a));ve(this)};
n.I=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new wd;d.next=function(){if(b>=c.length)throw vd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ve(this)};
function ve(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function we(a,b){this.g=a;this.f=b+"::"}
F(we,oe);we.prototype.set=function(a,b){this.g.set(this.f+a,b)};
we.prototype.get=function(a){return this.g.get(this.f+a)};
we.prototype.remove=function(a){this.g.remove(this.f+a)};
we.prototype.I=function(a){var b=this.g.I(!0),c=this,d=new wd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function xe(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var ye=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",ye,void 0);function Q(a){xe(ye,arguments)}
function R(a,b){return a in ye?ye[a]:b}
function ze(){return R("PLAYER_CONFIG",{})}
function Ae(a){var b=ye.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function Be(){var a=Ce;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function De(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var Ee=[];function Fe(a){Ee.forEach(function(b){return b(a)})}
function Ge(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b),Fe(b)}}:a}
function S(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Q("ERRORS",b))}
function He(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Q("ERRORS",b))}
;function Ie(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?eb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};S(h)}}}return b}
function Je(a){var b=[];fb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ke(a){"?"==a.charAt(0)&&(a=a.substr(1));return Ie(a)}
function Le(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ke(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return $b(a,e)+d}
;function Me(a){var b=Ne;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Oe(b),Pe(b));b.ca_type="image";a&&(b.bid=a);return b}
function Oe(a){var b={};b.dt=Wc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function Pe(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new Cc(l.clientWidth,l.clientHeight)).round()}catch(p){m=new Cc(-12245933,-12245933)}k=m;m={};l=new bd;y.SVGElement&&
y.document.createElementNS&&l.set(0);c=Rc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);y.crypto&&y.crypto.subtle&&l.set(3);y.TextDecoder&&y.TextEncoder&&l.set(4);l=cd(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var Ne=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Je(Me(a))},void 0);D();function T(a){a=Qe(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Re(a,b){var c=Qe(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Qe(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
;var Se="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Te(){if(!Se)return null;var a=Se();return"open"in a?a:null}
function Ue(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function V(a,b){"function"===typeof a&&(a=Ge(a));return window.setTimeout(a,b)}
function Ve(a){window.clearTimeout(a)}
;var We={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Xe="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ye=!1;
function Ze(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Wb)[1]||null,e=K(a);d&&e?(d=c,c=a.match(Wb),d=d.match(Wb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?K(c)==e&&(Number(c.match(Wb)[4]||null)||null)==(Number(a.match(Wb)[4]||null)||null):!0;d=T("web_ajax_ignore_global_headers_if_set");for(var f in We)e=R(We[f]),!e||!c&&K(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!K(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!K(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!K(a))b["X-YouTube-Ad-Signals"]=Je(Me(void 0));return b}
function $e(a){var b=window.location.search,c=K(a),d=Xb(a.match(Wb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ke(b),f={};H(Xe,function(g){e[g]&&(f[g]=e[g])});
return Le(a,f||{},!1)}
function af(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=bf(a,b);var d=cf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Ve(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||y;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.la&&b.la.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.va&&0<b.timeout&&(f=V(function(){e||(e=!0,Ve(f),b.va.call(b.context||y))},b.timeout))}else df(a,b)}
function df(a,b){var c=b.format||"JSON";a=bf(a,b);var d=cf(a,b),e=!1,f=ef(a,function(k){if(!e){e=!0;h&&Ve(h);var l=Ue(k),m=null,p=400<=k.status&&500>k.status,u=500<=k.status&&600>k.status;if(l||p||u)m=ff(a,c,k,b.wb);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.la&&b.la.call(p,k,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.R&&0<b.timeout){var g=b.R;var h=V(function(){e||(e=!0,f.abort(),Ve(h),g.call(b.context||y,f))},b.timeout)}return f}
function bf(a,b){b.zb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.gb;d&&(d[c]&&delete d[c],a=Le(a,d||{},!0));return a}
function cf(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.D,g=R("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.yb||K(a)&&!b.withCredentials&&K(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.D&&b.D[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ke(e),pb(e,f),e=b.wa&&"JSON"==b.wa?JSON.stringify(e):Zb(e));f=e||f&&!jb(f);!Ye&&f&&"POST"!=b.method&&(Ye=!0,S(Error("AJAX request with postData should use POST")));
return e}
function ff(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,He(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?gf(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=hf(g)})}d&&jf(e);
return e}
function jf(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b],null);a[c]=d}else jf(a[b])}}
function gf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function hf(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ef(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Ge(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Te();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;T("debug_forward_web_query_parameters")&&(a=$e(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ze(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var kf=qc||rc;function lf(){var a=/WebKit\/([0-9]+)/.exec(Lb);return!!(a&&600<=parseInt(a[1],10))}
function mf(){var a=/WebKit\/([0-9]+)/.exec(Lb);return!!(a&&602<=parseInt(a[1],10))}
;var nf={},of=0;
function pf(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Lb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof I||(a="object"==typeof a&&a.M?a.L():String(a),a=Ib.test(a)?new I(Fb,a):null),b=Hb(a||Kb),"about:invalid#zClosurez"===b?a="":(b instanceof Ob?a=b:(d="object"==typeof b,a=null,d&&b.ja&&(a=b.ga()),b=xb(d&&b.M?b.L():String(b)),a=Qb(b,a)),a instanceof Ob&&a.constructor===Ob&&a.h===Pb?a=a.f:(Ja(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(Id(a.toString())))),/^[\s\xa0]*$/.test(a)||(a=
Gc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?ef(a,b,"POST",e,d):R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?ef(a,b,"GET","",d):qf(a,b)||rf(a,b))}
function qf(a,b){if(!Ae("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(Ae("use_sonic_js_library_for_v4_support")){a:{try{var c=new Wa({url:a});if(c.h&&c.g||c.i){var d=Xb(a.match(Wb)[5]||null);var e=!(!d||!d.endsWith("/aclk")||"1"!==bc(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=Xb(a.match(Wb)[5]||null),!e||-1==e.indexOf("/aclk")||"1"!==bc(a,"ae")||"1"!==bc(a,"act"))return!1;return sf(a)?(b&&b(),!0):!1}
function sf(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function rf(a,b){var c=new Image,d=""+of++;nf[d]=c;c.onload=c.onerror=function(){b&&nf[d]&&b();delete nf[d]};
c.src=a}
;var tf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",tf,void 0);function uf(a){xe(tf,arguments)}
;function vf(a,b,c,d){zc.set(""+a,b,{ra:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function wf(a){a&&(a.dataset?a.dataset[xf("loaded")]="true":a.setAttribute("data-loaded","true"))}
function yf(a,b){return a?a.dataset?a.dataset[xf(b)]:a.getAttribute("data-"+b):null}
var zf={};function xf(a){return zf[a]||(zf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Af=y.ytPubsubPubsubInstance||new P,Bf=y.ytPubsubPubsubSubscribedKeys||{},Cf=y.ytPubsubPubsubTopicToKeys||{},Df=y.ytPubsubPubsubIsSynchronous||{};function Ef(a,b){var c=Ff();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Bf[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Df[a]?f():V(f,0)}catch(g){S(g)}},void 0);
Bf[d]=!0;Cf[a]||(Cf[a]=[]);Cf[a].push(d);return d}return 0}
function Gf(a){var b=Ff();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),H(a,function(c){b.unsubscribeByKey(c);delete Bf[c]}))}
function Hf(a,b){var c=Ff();c&&c.publish.apply(c,arguments)}
function If(a){var b=Ff();if(b)if(b.clear(a),a)Jf(a);else for(var c in Cf)Jf(c)}
function Ff(){return y.ytPubsubPubsubInstance}
function Jf(a){Cf[a]&&(a=Cf[a],H(a,function(b){Bf[b]&&delete Bf[b]}),a.length=0)}
P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.P;P.prototype.publish=P.prototype.O;P.prototype.clear=P.prototype.clear;z("ytPubsubPubsubInstance",Af,void 0);z("ytPubsubPubsubTopicToKeys",Cf,void 0);z("ytPubsubPubsubIsSynchronous",Df,void 0);z("ytPubsubPubsubSubscribedKeys",Bf,void 0);var Kf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Lf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Mf(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Kf,""),c=c.replace(Lf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Nf(a,b,c)}
function Nf(a,b,c){c=void 0===c?null:c;var d=Of(a),e=document.getElementById(d),f=e&&yf(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Ef(d,b),b=""+Na(b),Pf[b]=f),g||(e=Qf(a,d,function(){yf(e,"loaded")||(wf(e),Hf(d),V(Ta(If,d),0))},c)))}
function Qf(a,b,c,d){d=void 0===d?null:d;var e=Hc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Sb(e,Lc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Rf(a){a=Of(a);var b=document.getElementById(a);b&&(If(a),b.parentNode.removeChild(b))}
function Sf(a,b){if(a&&b){var c=""+Na(b);(c=Pf[c])&&Gf(c)}}
function Of(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Vb(a)}
var Pf={};function Tf(){}
function Uf(a,b){return Vf(a,0,b)}
function Wf(a,b){return Vf(a,1,b)}
;function Xf(){}
v(Xf,Tf);function Vf(a,b,c){isNaN(c)&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):V(a,c||0)}
function Yf(a){if(!isNaN(a)){var b=A("yt.scheduler.instance.cancelJob");b?b(a):Ve(a)}}
Xf.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Xf.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};
Ia(Xf);Xf.getInstance();var Zf=[],$f=!1;function ag(){if(!T("disable_ad_status_on_html5_clients")&&(!T("condition_ad_status_fetch_on_consent_cookie_html5_clients")||zc.get("CONSENT","").startsWith("YES+"))&&"1"!=gb(ze(),"args","privembed")){var a=function(){$f=!0;"google_ad_status"in window?Q("DCLKSTAT",1):Q("DCLKSTAT",2)};
Mf("//static.doubleclick.net/instream/ad_status.js",a);Zf.push(Wf(function(){$f||"google_ad_status"in window||(Sf("//static.doubleclick.net/instream/ad_status.js",a),$f=!0,Q("DCLKSTAT",3))},5E3))}}
function bg(){return parseInt(R("DCLKSTAT",0),10)}
;var cg=0;z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++cg},void 0);var dg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function eg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in dg||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function fg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
eg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
eg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
eg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",ib,void 0);var gg=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",gg,void 0);
function hg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var ig=Xa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function jg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=hg(a,b,c,d);if(e)return e;e=++gg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new eg(h);if(!Kc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new eg(h);
h.currentTarget=a;return c.call(a,h)};
g=Ge(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ig()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d];return e}
function kg(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ig()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
;var lg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function mg(a){this.u=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.G=jg(window,"mousemove",C(this.H,this));a=C(this.C,this);"function"===typeof a&&(a=Ge(a));this.K=window.setInterval(a,25)}
F(mg,M);mg.prototype.H=function(a){void 0===a.f&&fg(a);var b=a.f;void 0===a.g&&fg(a);this.f=new Bc(b,a.g)};
mg.prototype.C=function(){if(this.f){var a=lg();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.u();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
mg.prototype.o=function(){window.clearInterval(this.K);kg(this.G)};var ng={};
function og(a){var b=void 0===a?{}:a;a=void 0===b.Ia?!0:b.Ia;b=void 0===b.Ua?!1:b.Ua;if(null==A("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?D()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&pg();jg(document,"keydown",pg);jg(document,"keyup",pg);jg(document,"mousedown",pg);jg(document,"mouseup",pg);a&&(b?jg(window,"touchmove",function(){qg("touchmove",200)},{passive:!0}):(jg(window,"resize",function(){qg("resize",200)}),jg(window,"scroll",function(){qg("scroll",200)})));
new mg(function(){qg("mouse",100)});
jg(document,"touchstart",pg,{passive:!0});jg(document,"touchend",pg,{passive:!0})}}
function qg(a,b){ng[a]||(ng[a]=!0,Wf(function(){pg();ng[a]=!1},b))}
function pg(){null==A("_lact",window)&&og();var a=D();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function rg(){var a=A("_lact",window),b;null==a?b=-1:b=Math.max(D()-a,0);return b}
;var sg=window,W=sg.ytcsi&&sg.ytcsi.now?sg.ytcsi.now:sg.performance&&sg.performance.timing&&sg.performance.now&&sg.performance.timing.navigationStart?function(){return sg.performance.timing.navigationStart+sg.performance.now()}:function(){return(new Date).getTime()};var tg=Re("initial_gel_batch_timeout",1E3),ug=Math.pow(2,16)-1,vg=null,wg=0,xg=void 0,yg=0,zg=0,Ag=0,Bg=!0,Cg=y.ytLoggingTransportLogPayloadsQueue_||{};z("ytLoggingTransportLogPayloadsQueue_",Cg,void 0);var Dg=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Dg,void 0);var Eg=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Eg,void 0);
function Fg(){Ve(yg);Ve(zg);zg=0;xg&&xg.isReady()?(Gg(Dg),"log_event"in Cg&&Gg(Object.entries(Cg.log_event)),Dg.clear(),delete Cg.log_event):Hg()}
function Hg(){T("web_gel_timeout_cap")&&!zg&&(zg=V(Fg,6E4));Ve(yg);var a=R("LOGGING_BATCH_TIMEOUT",Re("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Bg&&(a=tg);yg=V(Fg,a)}
function Gg(a){var b=xg,c=Math.round(W());a=t(a);for(var d=a.next();!d.done;d=a.next()){var e=t(d.value);d=e.next().value;var f=e.next().value;e=nb({context:Ig(b.f||Jg())});e.events=f;(f=Eg[d])&&Kg(e,d,f);delete Eg[d];Lg(e,c);Mg(b,"log_event",e,{retry:!0,onSuccess:function(){wg=Math.round(W()-c)}});
Bg=!1}}
function Lg(a,b){a.requestTimeMs=String(b);T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=R("EVENT_ID",void 0);if(c){var d=R("BATCH_CLIENT_COUNTER",void 0)||0;!d&&T("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*ug/2));d++;d>ug&&(d=1);Q("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;vg&&wg&&T("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:vg,roundtripMs:String(wg)});vg=c;wg=0}}
function Kg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Ng=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Ng,void 0);
function Og(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||W());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:rg())};T("log_sequence_info_on_gel_web")&&d.S&&(a=e.context,b=d.S,Ng[b]=b in Ng?Ng[b]+1:0,a.sequence={index:Ng[b],groupKey:b},d.xb&&delete Ng[d.S]);d=d.fa;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Eg[d.token]=a,a=d.token);d=Dg.get(a)||[];Dg.set(a,d);d.push(e);c&&(xg=new c);c=Re("web_logging_max_batch")||100;e=
W();d.length>=c?Fg():10<=e-Ag&&(Hg(),Ag=e)}
;function Pg(){for(var a={},b=t(Object.entries(Ke(R("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=t(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Qg(){return"INNERTUBE_API_KEY"in ye&&"INNERTUBE_API_VERSION"in ye}
function Jg(){return{innertubeApiKey:R("INNERTUBE_API_KEY",void 0),innertubeApiVersion:R("INNERTUBE_API_VERSION",void 0),Ja:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ka:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ma:R("INNERTUBE_CONTEXT_HL",void 0),La:R("INNERTUBE_CONTEXT_GL",void 0),Na:R("INNERTUBE_HOST_OVERRIDE",void 0)||"",Pa:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Oa:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1)}}
function Ig(a){a={client:{hl:a.Ma,gl:a.La,clientName:a.Ka,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ja}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=R("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=R("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=R("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
R("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(a.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,Pg());return a}
function Rg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.tb||R("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().sb:b=ad([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),T("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
;function Sg(a){a=Object.assign({},a);delete a.Authorization;var b=ad();if(b){var c=new td;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ka(b);void 0===c&&(c=0);if(!tc){tc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));sc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===tc[k]&&(tc[k]=h)}}}c=sc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
function Tg(a){a=Sg(a);var b=new td;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function Ug(){var a=new qe;(a=a.isAvailable()?new we(a,"yt.innertube"):null)||(a=new re("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new me(a):null;this.g=document.domain||window.location.hostname}
Ug.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Id(b))}catch(f){return}else e=escape(b);vf(a,e,c,this.g)};
Ug.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=zc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ug.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;zc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Vg;function Wg(){Vg||(Vg=new Ug);return Vg}
function Xg(a,b,c,d){if(d)return null;d=Wg().get("nextId",!0)||1;var e=Wg().get("requests",!0)||{};e[d]={method:a,request:b,authState:Sg(c),requestTime:Math.round(W())};Wg().set("nextId",d+1,86400,!0);Wg().set("requests",e,86400,!0);return d}
function Yg(a){var b=Wg().get("requests",!0)||{};delete b[a];Wg().set("requests",b,86400,!0)}
function Zg(a){var b=Wg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Sg(Rg(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),Mg(a,d.method,e,{}));delete b[c]}}Wg().set("requests",b,86400,!0)}}
;function $g(){}
;function ah(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,ah.prototype)}
v(ah,Error);function bh(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
;function X(a){return new O(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
;function ch(a){this.f=a}
n=ch.prototype;n.add=function(a,b,c){return dh(eh(this,[a],"readwrite"),a).add(b,c)};
n.clear=function(a){return dh(eh(this,[a],"readwrite"),a).clear()};
n.close=function(){this.f.close()};
n.count=function(a,b){return dh(eh(this,[a]),a).count(b)};
function fh(a,b,c){a=a.f.createObjectStore(b,c);return new gh(a)}
n["delete"]=function(a,b){return dh(eh(this,[a],"readwrite"),a)["delete"](b)};
n.get=function(a,b){return dh(eh(this,[a]),a).get(b)};
function eh(a,b,c){a=a.f.transaction(b,void 0===c?"readonly":c);return new hh(a,b)}
function gh(a){this.f=a}
n=gh.prototype;n.add=function(a,b){var c=b?this.f.add(a,b):this.f.add(a);return X(c)};
n.clear=function(){return X(this.f.clear()).then(function(){})};
n.count=function(a){a=a?this.f.count(a):this.f.count();return X(a)};
n["delete"]=function(a){return X(this.f["delete"](a))};
n.get=function(a){return X(this.f.get(a))};
n.index=function(a){return new ih(this.f.index(a))};
n.getName=function(){return this.f.name};
function jh(a,b,c){a=c?a.f.put(b,c):a.f.put(b);return X(a)}
function hh(a){var b=this;this.f=a;this.g=new Map;this.done=new O(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(){d(b.f.error)});
b.f.addEventListener("abort",function(){d(new ah)})})}
hh.prototype.abort=function(){this.f.abort();return this.done};
function dh(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new gh(c),a.g.set(c,d));return d}
function ih(a){this.f=a}
ih.prototype.count=function(a){a=a?this.f.count(a):this.f.count();return X(a)};
ih.prototype.get=function(a){return X(this.f.get(a))};
function kh(a,b){this.request=a;this.f=b}
function lh(a){return X(a).then(function(b){return null===b?null:new kh(a,b)})}
kh.prototype["delete"]=function(){return X(this.f["delete"]()).then(function(){})};
kh.prototype.getValue=function(){return this.f.value};
kh.prototype.update=function(a){return X(this.f.update(a))};function mh(a,b,c){function d(){m||(m=new ch(f.result));return m}
var e=hh;var f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var g=c.blocked,h=c.blocking,k=c.f,l=c.upgrade,m;l&&f.addEventListener("upgradeneeded",function(p){if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var u=d(),q=new e(f.transaction);l(u,p.oldVersion,p.newVersion,q)});
g&&f.addEventListener("blocked",function(){g()});
return X(f).then(function(p){h&&p.addEventListener("versionchange",function(){h(d())});
k&&p.addEventListener("close",function(){k()});
return d()})}
function nh(a,b,c){c=void 0===c?{}:c;return mh(a,b,c)}
;var oh,ph,qh=["getAll","getAllKeys","getKey","openKeyCursor"],rh=["getAll","getAllKeys","getKey","openKeyCursor"];function sh(){return new Promise(function(a){setTimeout(a,50)})}
function th(){return N(this,function b(){var c,d,e;return x(b,function(f){switch(f.f){case 1:if(kf&&lf()&&!mf()&&!T("ytidb_allow_on_ios_safari_v8_and_v9")||!self.indexedDB)return f["return"](!1);ra(f);d=!1;return w(f,nh("yt-idb-test-do-not-use",void 0,{blocking:function(){d=!0;c&&(c.close(),c=void 0)}}),5);
case 5:return c=f.g,e=nh("yt-idb-test-do-not-use",c.f.version+1).then(function(g){try{g.close()}catch(h){}}),w(f,Promise.race([e,
sh()]),6);case 6:return f["return"](d);case 3:ta(f);if(c)try{c.close()}catch(g){}ua(f);break;case 2:return sa(f),f["return"](!1)}})})}
function uh(){return void 0!==oh?Td(oh):new O(function(a){th().then(function(b){oh=b;a(b)})})}
function vh(){return void 0!==ph?Td(ph):uh().then(function(a){if(!a)return!1;var b=t(qh);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=t(rh);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return ph=a})}
;var wh;function xh(){function a(b){b.close();wh=void 0}
wh||(wh=Wd(nh("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&fh(b,"databases",{keyPath:"actualName"})}}),function(b){return bh(b)?nh("YtIdbMeta",void 0,{blocking:a}):Ud(b)}));
return wh}
function yh(a){return xh().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return jh(dh(eh(b,["databases"],"readwrite"),"databases"),a,void 0)})})}
function zh(a){return xh().then(function(b){return b["delete"]("databases",a)})}
;function Ah(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return Ud(c)}return Wd(yh(b).then(function(){return a(b)}),function(c){return Wd(zh(b.actualName),function(){}).then(function(){return Ud(c)})})}
function Bh(a,b){b=void 0===b?{}:b;return Ah(function(c){return nh(c.actualName,a,b)})}
;var Ch;function Dh(){return N(this,function b(){return x(b,function(c){if(!Ch)try{Ch=Bh(1,{upgrade:function(d,e){1>e&&(fh(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),fh(d,"sapisid"))}})}catch(d){if(!bh(d))return S(d),c["return"](Promise.reject(d));
Ch=Bh()}return c["return"](Ch)})})}
function Eh(a){return N(this,function c(){var d,e,f,g,h;return x(c,function(k){switch(k.f){case 1:return w(k,Dh(),2);case 2:return d=k.g,e=dh(eh(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(k,Fh(),3);case 3:return f=k.g,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:f}),w(k,e.add(g),4);case 4:return h=k.g,k["return"](h)}})})}
function Gh(){return N(this,function b(){var c,d,e,f,g,h,k,l;return x(b,function(m){switch(m.f){case 1:return w(m,Fh(),2);case 2:return c=m.g,d=["NEW",c,0],e=["NEW",c,W()],f=IDBKeyRange.bound(d,e),w(m,Dh(),3);case 3:g=m.g;h=eh(g,["LogsRequestsStore"],"readwrite");var p=dh(h,"LogsRequestsStore").index("newRequest");p=f?p.f.openCursor(f,"prev"):f?p.f.openCursor(f):p.f.openCursor();p=lh(p);return w(m,p,4);case 4:k=m.g;l=void 0;if(null===k||void 0===k||!k.getValue()){m.F(5);break}l=k.getValue();l.status=
"QUEUED";return w(m,k.update(l),5);case 5:return m["return"](l)}})})}
function Hh(a){return N(this,function c(){var d,e,f;return x(c,function(g){switch(g.f){case 1:return w(g,Dh(),2);case 2:return d=g.g,e=dh(eh(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(g,e.get(a),3);case 3:return f=g.g,f.status="QUEUED",w(g,jh(e,f),4);case 4:return g["return"](f)}})})}
function Ih(a){return N(this,function c(){var d,e,f;return x(c,function(g){switch(g.f){case 1:return w(g,Dh(),2);case 2:return d=g.g,e=dh(eh(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(g,e.get(a),3);case 3:f=g.g;if(!f){g.F(4);break}f.status="NEW";f.sendCount+=1;return w(g,jh(e,f),4);case 4:return g["return"](f)}})})}
function Jh(){return N(this,function b(){var c,d;return x(b,function(e){if(1==e.f)return w(e,Dh(),2);if(3!=e.f)return c=e.g,w(e,c.count("LogsRequestsStore"),3);d=e.g;return e["return"](!d)})})}
function Kh(a){return N(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,Dh(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function Fh(){return N(this,function b(){var c;return x(b,function(d){if(1==d.f){$g.f||($g.f=new $g);var e={};var f=ad([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=R("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in ye||(e["X-Origin"]=window.location.origin),T("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in ye&&(e["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));e=Td(e);return w(d,e,2)}c=d.g;return d["return"](Tg(c))})})}
;var Lh=Re("network_polling_interval",3E4);function Mh(){this.i=0;this.f=window.navigator.onLine;Nh(this);Oh(this)}
function Ph(){Mh.f||(Mh.f=new Mh);return Mh.f}
function Qh(a){var b=Rh,c=Sh;Th(a);(new O(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)})}
function Oh(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function Nh(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function Th(a){a.i||(Uh(a),window.navigator.onLine&&a.g&&a.g())}
function Uh(a){a.i=Uf(function(){window.navigator.onLine?(!1===a.f&&S(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&S(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());Uh(a)},Lh)}
;var Vh=Re("networkless_throttle_timeout")||100,Wh=Re("networkless_retry_attempts")||1,Xh=0;function Yh(a,b){b=void 0===b?{}:b;Zh().then(function(c){if(c&&!T("networkless_bypass_write")){var d={url:a,options:b,timestamp:W(),status:"NEW",sendCount:0};Eh(d).then(function(e){d.id=e;e=Ph();e.f?$h(d):Qh(e)})["catch"](function(e){$h(d);
S(e)})}else df(a,b)})}
function Rh(){Xh||(Xh=Wf(function(){$h();Xh=0;Rh()},Vh))}
function Sh(){Yf(Xh);Xh=0}
function $h(a){N(this,function c(){var d=this,e,f,g,h;return x(c,function(k){switch(k.f){case 1:e=d;if(!a)return w(k,Gh(),6);if(!a.id){k.F(3);break}return w(k,Hh(a.id),5);case 5:a=k.g;k.F(3);break;case 6:if(a=k.g){k.F(3);break}return w(k,Jh(),8);case 8:return(f=k.g)&&Sh(),k["return"]();case 3:if(ai(a))g=a.options.onError?a.options.onError:function(){},h=a.options.onSuccess?a.options.onSuccess:function(){},a.options.onError=function(l,m){return N(e,function u(){return x(u,function(q){if(1==q.f)return a&&
a.id?a.sendCount<Wh?w(q,Ih(a.id),6):w(q,Kh(a.id),2):q.F(2);
2!=q.f&&(Xh||Qh(Ph()),g(l,m));g(l,m);q.f=0})})},a.options.onSuccess=function(l,m){return N(e,function u(){return x(u,function(q){if(1==q.f)return a&&a.id?w(q,Kh(a.id),2):q.F(2);
h(l,m);q.f=0})})},df(a.url,a.options);
else if(He(Error("Networkless Logging: Stored logs request expired age limit")),a.id)return w(k,Kh(a.id),0);k.F(0)}})})}
function ai(a){a=a.timestamp;return 2592E6<=W()-a?!1:!0}
function Zh(){return T("networkless_logging")?2===Re("networkless_ytidb_version")?vh():uh():Td(!1)}
;function bi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(t(c)))}
v(bi,Error);function ci(a){var b=this;this.f=null;a?this.f=a:Qg()&&(this.f=Jg());Uf(function(){Zg(b)},5E3)}
ci.prototype.isReady=function(){!this.f&&Qg()&&(this.f=Jg());return!!this.f};
function Mg(a,b,c,d){!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&He(new bi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new bi("innertube xhrclient not ready",b,c,d);S(e);e.f=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",D:c,wa:"JSON",R:function(){d.R()},
va:d.R,onSuccess:function(p,u){if(d.onSuccess)d.onSuccess(u)},
ua:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,u){if(d.onError)d.onError(u)},
Ab:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.Na)&&(g=e);var h=a.f.Pa||!1,k=Rg(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.Oa&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=Le(""+g+e,l||{},!0);Zh().then(function(p){if(d.retry&&T("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(T("networkless_gel")&&!p||!T("networkless_gel"))var u=Xg(b,
c,k,h);if(u){var q=f.onSuccess,B=f.ua;f.onSuccess=function(E,U){Yg(u);q(E,U)};
c.ua=function(E,U){Yg(u);B(E,U)}}}try{T("use_fetch_for_op_xhr")?af(m,f):T("networkless_gel")&&d.retry?(f.method="POST",Yh(m,f)):(f.method="POST",f.D||(f.D={}),df(m,f))}catch(E){if("InvalidAccessError"==E.name)u&&(Yg(u),u=0),He(Error("An extension is blocking network request."));
else throw E;}u&&Uf(function(){Zg(a)},5E3)})}
;function di(a,b,c){c=void 0===c?{}:c;var d=ci;R("ytLoggingEventsDefaultDisabled",!1)&&ci==ci&&(d=null);Og(a,b,d,c)}
;var ei=[{sa:function(a){return"Cannot read property '"+a.key+"'"},
ma:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{sa:function(a){return"Cannot call '"+a.key+"'"},
ma:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var fi=new Set,gi=0;function hi(a){ii(a,"WARNING")}
function ii(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var g=void 0===g?!1:g;if(a&&(T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),
(window&&window.yterr||g)&&!(5<=gi)&&0!==a.f)){var h=uc(a);g=h.message||"Unknown Error";d=h.name||"UnknownError";e=h.lineNumber||"Not available";f=h.fileName||"Not available";h=h.stack||a.g||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],p="params."+l;k+=p.length;if(m)if(Array.isArray(m))for(var u=c,q=0;q<m.length&&!(m[q]&&(k+=ji(q,m[q],p,u),500<k));q++);else if("object"===typeof m)for(u in u=void 0,q=c,m){if(m[u]&&(k+=ji(u,
m[u],p,q),500<k))break}else c[p]=String(JSON.stringify(m)).substring(0,500),k+=c[p].length;else c[p]=String(JSON.stringify(m)).substring(0,500),k+=c[p].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in p=0,m){if(m[l]&&(k="params."+l,u=String(JSON.stringify(m[l])).substr(0,500),c[k]=u,p+=k.length+u.length,500<p))break}else c.params=String(JSON.stringify(m)).substr(0,500);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=navigator.vendor);
c={message:g,name:d,lineNumber:e,fileName:f,stack:h,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=t(ei);for(g=a.next();!g.done;g=a.next())if(g=g.value,g.ma[c.name])for(e=t(g.ma[c.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=c.message.match(f.regexp)){c.params["error.original"]=d[0];e=f.groups;f={};for(h=0;h<e.length;h++)f[e[h]]=d[h+1],c.params["error."+e[h]]=d[h+1];c.message=g.sa(f);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(fi.has(c.message)||
0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){if(T("kevlar_gel_error_routing")){g=b;d={stackTrace:c.stack};c.fileName&&(d.filename=c.fileName);a=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(d.lineNumber=Number(a[0]),d.columnNumber=Number(a[1])):d.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:c.message};"ERROR"===g?a.level="ERROR_LEVEL_ERROR":
"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");g={isObfuscated:!0,browserStackInfo:d};d={pageUrl:window.location.href,kvPairs:[]};if(e=c.params)for(f=t(Object.keys(e)),h=f.next();!h.done;h=f.next())h=h.value,d.kvPairs.push({key:"client."+h,value:String(e[h])});di("clientError",{errorMetadata:d,stackTrace:g,logMessage:a});Fg()}a=c.params||{};b={gb:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},D:{url:R("PAGE_NAME",window.location.href),
file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.D){c.stack&&(b.D.stack=c.stack);g=t(Object.keys(a));for(d=g.next();!d.done;d=g.next())d=d.value,b.D["client."+d]=a[d];if(a=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(g=t(Object.keys(a)),d=g.next();!d.done;d=g.next())d=d.value,b.D[d]=a[d];a=R("SERVER_NAME",void 0);g=R("SERVER_VERSION",void 0);a&&g&&(b.D["server.name"]=a,b.D["server.version"]=g)}df(R("ECATCHER_REPORT_HOST","")+"/error_204",b);fi.add(c.message);
gi++}}}
function ji(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function ki(){this.g=!1;this.f=null}
ki.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,Mf(b,function(){g.g=!1;window.botguard?li(g,c,d,f):(Rf(b),hi(new bi("Unable to load Botguard","from "+b)))},e)):a&&(eval(a),window.botguard?li(this,c,d,f):hi(Error("Unable to load Botguard from JS")))};
function li(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:Ha)}catch(e){hi(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){hi(e)}c&&c(b)}}
ki.prototype.dispose=function(){this.f=null};var mi=new ki;function ni(){return!!mi.f}
function oi(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return mi.f?mi.f.invoke(void 0,void 0,a):null}
;var pi=D().toString();
function qi(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=D();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(pi)for(a=1,b=0;b<pi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^pi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ri=y.ytLoggingDocDocumentNonce_||qi();z("ytLoggingDocDocumentNonce_",ri,void 0);var si=1;function ti(a){this.f=a}
ti.prototype.getAsJson=function(){var a={};void 0!==this.f.trackingParams?a.trackingParams=this.f.trackingParams:(a.veType=this.f.veType,void 0!==this.f.veCounter&&(a.veCounter=this.f.veCounter),void 0!==this.f.elementIndex&&(a.elementIndex=this.f.elementIndex));void 0!==this.f.dataElement&&(a.dataElement=this.f.dataElement.getAsJson());void 0!==this.f.youtubeData&&(a.youtubeData=this.f.youtubeData);return a};
ti.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
ti.prototype.isClientVe=function(){return!this.f.trackingParams&&!!this.f.veType};function ui(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function vi(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function wi(a){return R(vi(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",wi,void 0);function xi(){var a=wi(0),b;a?b=new ti({veType:a,youtubeData:void 0}):b=null;return b}
function yi(){var a=R("csn-to-ctt-auth-info");a||(a={},Q("csn-to-ctt-auth-info",a));return a}
function zi(a){a=void 0===a?0:a;var b=R(ui(a));if(!b&&!R("USE_CSN_FALLBACK",!0))return null;b||0!=a||(T("kevlar_client_side_screens")||T("c3_client_side_screens")?b="UNDEFINED_CSN":b=R("EVENT_ID"));return b?b:null}
z("yt_logging_screen.getCurrentCsn",zi,void 0);function Ai(a,b,c){var d=yi();(c=zi(c))&&delete d[c];b&&(d[a]=b)}
function Bi(a){return yi()[a]}
z("yt_logging_screen.getCttAuthInfo",Bi,void 0);function Ci(a,b,c,d){c=void 0===c?0:c;if(a!==R(ui(c))||b!==R(vi(c)))if(Ai(a,d,c),Q(ui(c),a),Q(vi(c),b),0==c||T("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&Og("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ri,clientScreenNonce:a},ci)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",Ci,void 0);function Di(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=K(window.location.href);g&&f.push(g);g=K(d);if(0<=Ya(f,g)||!g&&0==d.lastIndexOf("/",0))if(T("autoescape_tempdata_url")&&(f=document.createElement("a"),Rb(f,d),d=f.href),d){g=d.match(Wb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:zi()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Vb(d).toString(36),e=e?Zb(e):"",vf(b,e,k||5))}else k=b,e="ST-"+Vb(d).toString(36),k=k?Zb(k):"",vf(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=$b(a,l)+m;a=a instanceof I?a:Jb(a);c.href=Hb(a)}return!0}
;function Ei(a,b){this.version=a;this.args=b}
;function Fi(a,b){this.topic=a;this.f=b}
Fi.prototype.toString=function(){return this.topic};var Gi=A("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.P;P.prototype.publish=P.prototype.O;P.prototype.clear=P.prototype.clear;z("ytPubsub2Pubsub2Instance",Gi,void 0);var Hi=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Hi,void 0);var Ii=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Ii,void 0);var Ji=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Ji,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Ki(a,b){var c=Li();c&&c.publish.call(c,a.toString(),a,b)}
function Mi(a){var b=Ni,c=Li();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Hi[d])try{if(f&&b instanceof Fi&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.J){var l=new h;h.J=l.version}var m=h.J}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
db(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){S(p)}},Ji[b.toString()]?A("yt.scheduler.instance")?Wf(g):V(g,0):g())});
Hi[d]=!0;Ii[b.toString()]||(Ii[b.toString()]=[]);Ii[b.toString()].push(d);return d}
function Oi(){var a=Pi,b=Mi(function(c){a.apply(void 0,arguments);Qi(b)});
return b}
function Qi(a){var b=Li();b&&("number"===typeof a&&(a=[a]),H(a,function(c){b.unsubscribeByKey(c);delete Hi[c]}))}
function Li(){return A("ytPubsub2Pubsub2Instance")}
;function Ri(a){Ei.call(this,1,arguments);this.csn=a}
v(Ri,Ei);var Ni=new Fi("screen-created",Ri),Si=[],Ti=0;function Ui(a,b,c){var d=T("use_default_events_client")?void 0:ci;b={csn:a,parentVe:b.getAsJson(),childVes:$a(c,function(f){return f.getAsJson()})};
c=t(c);for(var e=c.next();!e.done;e=c.next())e=e.value.getAsJson(),(jb(e)||!e.trackingParams&&!e.veType)&&hi(Error("Child VE logged with no data"));c={fa:Bi(a),S:a};"UNDEFINED_CSN"==a?Vi("visualElementAttached",b,c):d?Og("visualElementAttached",b,d,c):di("visualElementAttached",b,c)}
function Vi(a,b,c){Si.push({payloadName:a,payload:b,options:c});Ti||(Ti=Oi())}
function Pi(a){if(Si){for(var b=t(Si),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Og(c.payloadName,c.payload,null,c.options));Si.length=0}Ti=0}
;function Wi(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||mb(b);this.assets=a.assets||{};this.attrs=a.attrs||mb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Wi.prototype.clone=function(){var a=new Wi,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ja(c)?a[b]=mb(c):a[b]=c}return a};function Xi(){M.call(this);this.f=[]}
v(Xi,M);Xi.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.ub)}M.prototype.o.call(this)};var Yi=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Zi(a){a=a||"";if(window.spf){var b=a.match(Yi);spf.style.load(a,b?b[1]:"",void 0)}else $i(a)}
function $i(a){var b=aj(a),c=document.getElementById(b),d=c&&yf(c,"loaded");d||c&&!d||(c=bj(a,b,function(){yf(c,"loaded")||(wf(c),Hf(b),V(Ta(If,b),0))}))}
function bj(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Lc(a);d.rel="stylesheet";d.href=vb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function aj(a){var b=Hc(document,"A");Rb(b,new I(Fb,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Vb(a)}
;function cj(a,b,c,d){M.call(this);var e=this;this.m=this.Z=a;this.W=b;this.u=!1;this.api={};this.X=this.G=null;this.H=new P;Sc(this,Ta(Tc,this.H));this.j={};this.T=this.Y=this.h=this.ea=this.f=null;this.K=!1;this.l=this.C=null;this.aa={};this.za=["onReady"];this.da=null;this.na=NaN;this.U={};this.i=d;dj(this);this.ba("WATCH_LATER_VIDEO_ADDED",this.Ra.bind(this));this.ba("WATCH_LATER_VIDEO_REMOVED",this.Sa.bind(this));this.ba("onAdAnnounce",this.Ba.bind(this));this.Aa=new Xi(this);Sc(this,Ta(Tc,this.Aa));
this.V=0;c?this.V=V(function(){e.loadNewVideoConfig(c)},0):d&&(ej(this),fj(this))}
v(cj,M);n=cj.prototype;n.getId=function(){return this.W};
n.loadNewVideoConfig=function(a){if(!this.g){this.V&&(Ve(this.V),this.V=0);a instanceof Wi||(a=new Wi(a));this.ea=a;this.f=a.clone();ej(this);this.Y||(this.Y=gj(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=Vc(Number(a)||a);if(a=this.f.attrs.height)this.m.style.height=Vc(Number(a)||a);fj(this);this.u&&hj(this)}};
function ej(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.W,a.f.attrs.id=a.W);a.m.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
n.Fa=function(){return this.ea};
function hj(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function ij(a){var b=!0,c=jj(a);c&&a.f&&(a=kj(a),b=yf(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function fj(a){if(!a.g&&!a.K){var b=ij(a);if(b&&"html5"==(jj(a)?"html5":null))a.T="html5",a.u||lj(a);else if(mj(a),a.T="html5",b&&a.l)a.Z.appendChild(a.l),lj(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.C=function(){c=!0;var d=nj(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.Z,e,a.i);lj(a)};
a.K=!0;b?a.C():(Mf(kj(a),a.C),(b=a.i?a.i.cssUrl:a.f.assets.css)&&Zi(b),oj(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function jj(a){var b=Dc(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
function lj(a){if(!a.g){var b=jj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,!nj(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||pj(a)):a.na=V(function(){lj(a)},50)}}
function pj(a){dj(a);a.u=!0;var b=jj(a);b.addEventListener&&(a.G=qj(a,b,"addEventListener"));b.removeEventListener&&(a.X=qj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=qj(a,b,e))}for(var f in a.j)a.G(f,a.j[f]);hj(a);a.Y&&a.Y(a.api);a.H.O("onReady",a.api)}
function qj(a,b,c){var d=b[c];return function(){try{return a.da=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.da=e,He(e))}}}
function dj(a){a.u=!1;if(a.X)for(var b in a.j)a.X(b,a.j[b]);for(var c in a.U)Ve(parseInt(c,10));a.U={};a.G=null;a.X=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ba.bind(a);a.api.removeEventListener=a.Wa.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ga.bind(a);a.api.getPlayerType=a.Ha.bind(a);a.api.getCurrentVideoConfig=a.Fa.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Qa.bind(a)}
n.Qa=function(){return this.u};
n.ba=function(a,b){var c=this,d=gj(this,b);if(d){if(!(0<=Ya(this.za,a)||this.j[a])){var e=rj(this,a);this.G&&this.G(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.u&&V(function(){d(c.api)},0)}};
n.Wa=function(a,b){if(!this.g){var c=gj(this,b);c&&ge(this.H,a,c)}};
function gj(a,b){var c=b;if("string"==typeof b){if(a.aa[b])return a.aa[b];c=function(){var d=A(b);d&&d.apply(y,arguments)};
a.aa[b]=c}return c?c:null}
function rj(a,b){var c="ytPlayer"+b+a.W;a.j[b]=c;y[c]=function(d){var e=V(function(){if(!a.g){a.H.O(b,d);var f=a.U,g=String(e);g in f&&delete f[g]}},0);
kb(a.U,String(e))};
return c}
n.Ba=function(a){Hf("a11y-announce",a)};
n.Ra=function(a){Hf("WATCH_LATER_VIDEO_ADDED",a)};
n.Sa=function(a){Hf("WATCH_LATER_VIDEO_REMOVED",a)};
n.Ha=function(){return this.T||(jj(this)?"html5":null)};
n.Ga=function(){return this.da};
function mj(a){a.cancel();dj(a);a.T=null;a.f&&(a.f.loaded=!1);var b=jj(a);b&&(ij(a)||!oj(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.Z;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.C){var a=kj(this);Sf(a,this.C)}Ve(this.na);this.K=!1};
n.o=function(){mj(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){S(b)}this.aa=null;for(var a in this.j)y[this.j[a]]=null;this.ea=this.f=this.api=null;delete this.Z;delete this.m;M.prototype.o.call(this)};
function oj(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function kj(a){return a.i?a.i.jsUrl:a.f.assets.js}
function nj(a,b){if(a.i)var c=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(c=a.f.args.fflags);return"true"==Ie(c||"")[b]}
;var sj={},tj="player_uid_"+(1E9*Math.random()>>>0);
function uj(a,b,c){var d="player";c=void 0===c?!0:c;var e;"string"===typeof d?e=Dc(d):e=d;d=e;e=tj+"_"+Na(d);var f=sj[e];if(f&&c)return(b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true"))?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new cj(d,e,a,b);sj[e]=f;Hf("player-added",f.api);Sc(f,Ta(vj,f));return f.api}
function vj(a){delete sj[a.getId()]}
;function wj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function xj(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return yj(a)}
function yj(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function zj(a,b,c,d){if(Ma(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Aj(a){a=void 0===a?!1:a;M.call(this);this.f=new P(a);Sc(this,Ta(Tc,this.f))}
F(Aj,M);Aj.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
Aj.prototype.j=function(a,b){this.g||this.f.O.apply(this.f,arguments)};function Bj(a,b,c){Aj.call(this);this.h=a;this.i=b;this.l=c}
v(Bj,Aj);function Cj(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(Id(a),d.i))}}
Bj.prototype.o=function(){this.i=this.h=null;Aj.prototype.o.call(this)};function Dj(a){M.call(this);this.f=a;this.f.subscribe("command",this.xa,this);this.h={};this.j=!1}
v(Dj,M);n=Dj.prototype;n.start=function(){this.j||this.g||(this.j=!0,Cj(this.f,"RECEIVING"))};
n.xa=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=C(this.Ya,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&Ej(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=Fj(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=Gj(a,c))&&this.j&&!this.g&&Cj(this.f,a,c))}}};
n.Ya=function(a,b){this.j&&!this.g&&Cj(this.f,a,this.ha(a,b))};
n.ha=function(a,b){if(null!=b)return{value:b}};
function Ej(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
n.o=function(){var a=this.f;a.g||ge(a.f,"command",this.xa,this);this.f=null;for(var b in this.h)Ej(this,b);M.prototype.o.call(this)};function Hj(a,b){Dj.call(this,b);this.i=a;this.start()}
v(Hj,Dj);Hj.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
Hj.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function Fj(a,b){switch(a){case "loadVideoById":return b=yj(b),[b];case "cueVideoById":return b=yj(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=zj(b),[b];case "cuePlaylist":return b=zj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Gj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Hj.prototype.ha=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Dj.prototype.ha.call(this,a,b)};
Hj.prototype.o=function(){Dj.prototype.o.call(this);delete this.i};function Ij(a,b,c){M.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.u="*";this.i=c;this.sessionId=null;this.channel="widget";this.C=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.C&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.u=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Ya(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
v(Ij,M);Ij.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.u)}catch(e){He(e)}}};
Ij.prototype.o=function(){window.removeEventListener("message",this.m);M.prototype.o.call(this)};function Jj(){var a=this.g=new Ij(!!R("WIDGET_ID_ENFORCE")),b=C(this.Va,this);a.j=b;a.l=null;this.g.channel="widget";if(a=R("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
n=Jj.prototype;n.Va=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,Kj(this,a)),this.j[a]=!0)):this.ta(a,b,c)};
n.ta=function(){};
function Kj(a,b){return C(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Ea=function(){this.l=!0;this.sendMessage("initialDelivery",this.ia());this.sendMessage("onReady");H(this.i,this.ya,this);this.i=[]};
n.ia=function(){return null};
function Lj(a,b){a.sendMessage("infoDelivery",b)}
n.ya=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.ya({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.g=null};function Mj(a){Jj.call(this);this.f=a;this.h=[];this.addEventListener("onReady",C(this.Ta,this));this.addEventListener("onVideoProgress",C(this.cb,this));this.addEventListener("onVolumeChange",C(this.eb,this));this.addEventListener("onApiChange",C(this.Xa,this));this.addEventListener("onPlaybackQualityChange",C(this.Za,this));this.addEventListener("onPlaybackRateChange",C(this.ab,this));this.addEventListener("onStateChange",C(this.bb,this));this.addEventListener("onWebglSettingsChanged",C(this.fb,
this))}
v(Mj,Jj);n=Mj.prototype;n.ta=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&wj(a)){var d=b;if(Ma(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=yj.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=xj.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=zj.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);wj(a)&&Lj(this,this.ia())}};
n.Ta=function(){var a=C(this.Ea,this);this.g.f=a};
n.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.ia=function(){if(!this.f)return null;var a=this.f.getApiInterface();cb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=D()/1E3;return b};
n.bb=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Lj(this,a)};
n.Za=function(a){Lj(this,{playbackQuality:a})};
n.ab=function(a){Lj(this,{playbackRate:a})};
n.Xa=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.eb=function(){Lj(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.cb=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Lj(this,a)};
n.fb=function(){var a={sphericalProperties:this.f.getSphericalProperties()};Lj(this,a)};
n.dispose=function(){Jj.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function Nj(a,b,c){M.call(this);this.f=a;this.i=c;this.j=jg(window,"message",C(this.l,this));this.h=new Bj(this,a,b);Sc(this,Ta(Tc,this.h))}
v(Nj,M);Nj.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
Nj.prototype.o=function(){kg(this.j);this.f=null;M.prototype.o.call(this)};function Oj(){var a=mb(Pj),b;return Wd(new O(function(c,d){a.onSuccess=function(e){Ue(e)?c(e):d(new Qj("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Qj("Unknown request error","net.unknown",e))};
a.R=function(e){d(new Qj("Request timed out","net.timeout",e))};
b=df("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Xd&&b.abort();
return Ud(c)})}
function Qj(a,b){G.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
v(Qj,G);function Rj(){this.g=0;this.f=null}
Rj.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),Od(a)?a:Sj(a)):2===this.g&&b?(a=b.call(c,this.f),Od(a)?a:Tj(a)):this};
Rj.prototype.getValue=function(){return this.f};
Rj.prototype.$goog_Thenable=!0;function Tj(a){var b=new Rj;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function Sj(a){var b=new Rj;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function Uj(a){G.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Vj;this.isTimeout=a instanceof Qj&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Xd}
v(Uj,G);Uj.prototype.name="BiscottiError";function Vj(){G.call(this,"Biscotti ID is missing from server")}
v(Vj,G);Vj.prototype.name="BiscottiMissingError";var Pj={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Wj=null;
function Ce(){if(T("disable_biscotti_fetch_on_html5_clients"))return Ud(Error("Fetching biscotti ID is disabled."));if(T("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!zc.get("CONSENT","").startsWith("YES+"))return Ud(Error("User has not consented - not fetching biscotti id."));if("1"===gb(ze(),"args","privembed"))return Ud(Error("Biscotti ID is not available in private embed mode"));Wj||(Wj=Wd(Oj().then(Xj),function(a){return Yj(2,a)}));
return Wj}
function Xj(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Vj;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Vj;a=a.id;De(a);Wj=Sj(a);Zj(18E5,2);return a}
function Yj(a,b){var c=new Uj(b);De("");Wj=Tj(c);0<a&&Zj(12E4,a-1);throw c;}
function Zj(a,b){V(function(){Wd(Oj().then(Xj,function(c){return Yj(b,c)}),Ha)},a)}
function ak(){try{var a=A("yt.ads.biscotti.getId_");return a?a():Ce()}catch(b){return Ud(b)}}
;function bk(a){if("1"!==gb(ze(),"args","privembed")){a&&Be();try{ak().then(function(){},function(){}),V(bk,18E5)}catch(b){S(b)}}}
;var Y=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function ck(){this.f=R("ALT_PREF_COOKIE_NAME","PREF");var a=zc.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
n=ck.prototype;n.get=function(a,b){dk(a);ek(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){dk(a);ek(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
n.remove=function(a){dk(a);ek(a);delete Y[a]};
n.save=function(){vf(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in Y)delete Y[a]};
n.dump=function(){var a=[],b;for(b in Y)a.push(b+"="+encodeURIComponent(String(Y[b])));return a.join("&")};
function ek(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function dk(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function fk(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ia(ck);function gk(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!hk(a)||c.some(function(e){return!hk(e)}))throw Error("Only objects may be merged.");
c=t(c);for(d=c.next();!d.done;d=c.next())ik(a,d.value);return a}
function ik(a,b){for(var c in b)if(hk(b[c])){if(c in a&&!hk(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});ik(a[c],b[c])}else if(jk(b[c])){if(c in a&&!jk(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);kk(a[c],b[c])}else a[c]=b[c];return a}
function kk(a,b){for(var c=t(b),d=c.next();!d.done;d=c.next())d=d.value,hk(d)?a.push(ik({},d)):jk(d)?a.push(kk([],d)):a.push(d);return a}
function hk(a){return"object"===typeof a&&!Array.isArray(a)}
function jk(a){return"object"===typeof a&&Array.isArray(a)}
;function lk(a,b){Ei.call(this,1,arguments)}
v(lk,Ei);function mk(a,b){Ei.call(this,1,arguments)}
v(mk,Ei);var nk=new Fi("aft-recorded",lk),ok=new Fi("timing-sent",mk);var pk=window;function qk(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var rk=pk.performance||pk.mozPerformance||pk.msPerformance||pk.webkitPerformance||new qk;var sk=!1;C(rk.clearResourceTimings||rk.webkitClearResourceTimings||rk.mozClearResourceTimings||rk.msClearResourceTimings||rk.oClearResourceTimings||Ha,rk);function tk(a){var b=uk(a);if(b.aft)return b.aft;a=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function vk(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ua("ytcsi."+(a||"")+"data_",b));return b}
function wk(a){a=vk(a);a.info||(a.info={});return a.info}
function uk(a){a=vk(a);a.tick||(a.tick={});return a.tick}
function xk(a){var b=vk(a).nonce;b||(b=qi(),vk(a).nonce=b);return b}
function yk(a){var b=uk(a||""),c=tk(a);c&&!sk&&(Ki(nk,new lk(Math.round(c-b._start),a)),sk=!0)}
;function zk(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function Ak(a){a=a||"";var b=A("ytcsi.reference");b||(zk(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=zk(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Bk=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",Bk,void 0);function Ck(){this.f=0}
function Dk(){Ck.f||(Ck.f=new Ck);return Ck.f}
Ck.prototype.tick=function(a,b,c){Ek(this,"tick_"+a+"_"+b)||di("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Ck.prototype.info=function(a,b){var c=Object.keys(a).join("");Ek(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,di("latencyActionInfo",c))};
Ck.prototype.span=function(a,b){var c=Object.keys(a).join("");Ek(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,di("latencyActionSpan",a))};
function Ek(a,b){Bk[b]=Bk[b]||{count:0};var c=Bk[b];c.count++;c.time=W();a.f||(a.f=Uf(function(){var d=W(),e;for(e in Bk)Bk[e]&&6E4<d-Bk[e].time&&delete Bk[e];a&&(a.f=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new bi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||hi(c)),!0):!1}
;var Z={},Fk=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid="requestIds",Z.GetBrowse_rid=
"requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",Z.ncnp="webInfo.nonPreloadedNodeCount",
Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",Z.ssdm="shellStartupDurationMs",Z.aq=
"tvInfo.appQuality",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",
Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),Gk="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Hk={},Ik=(Hk.ccs="CANARY_STATE_",
Hk.mver="MEASUREMENT_VERSION_",Hk.pis="PLAYER_INITIALIZED_STATE_",Hk.yt_pt="LATENCY_PLAYER_",Hk.pa="LATENCY_ACTION_",Hk.yt_vst="VIDEO_STREAM_TYPE_",Hk),Jk="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Kk(a){return!!R("FORCE_CSI_ON_GEL",!1)||T("csi_on_gel")||!!vk(a).useGel}
function Lk(a){a=vk(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Mk(a,b,c){if(null!==b)if(wk(c)[a]=b,Kk(c)){var d=b;b=Lk(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in Fk){b=Fk[a];0<=Ya(Gk,b)&&(d=!!d);a in Ik&&"string"===typeof d&&(d=Ik[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=gk({},e)}else 0<=Ya(Jk,a)||hi(new bi("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Kk(c)&&(b=Ak(c||""),gk(b.info,f),b=Lk(c),"gelInfos"in b||(b.gelInfos={}),gk(b.gelInfos,f),c=xk(c),Dk().info(f,c))}else Ak(c||"").info[a]=b}
function Nk(a,b,c){var d=uk(c);if(T("use_first_tick")&&Ok(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;rk.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),rk.mark(e))}e=b||W();d[a]=e;e=Lk(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||W();if(Kk(c)){Ak(c||"").tick[a]=b||W();e=xk(c);if("_start"===a){var f=Dk();Ek(f,"baseline_"+e)||di("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Dk().tick(a,e,b);yk(c);e=!0}else e=!1;if(!e){if(!A("yt.timing."+(c||"")+"pingSent_")&&
(f=R((c||"")+"TIMING_ACTION",void 0),e=uk(c),A("ytglobal.timing"+(c||"")+"ready_")&&f&&Ok("_start")&&tk(c)))if(yk(c),c)Pk(c);else{f=!0;var g=R("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&Pk(c)}Ak(c||"").tick[a]=b||W()}return d[a]}
function Ok(a,b){var c=uk(b);return a in c}
function Pk(a){if(!Kk(a)){var b=uk(a),c=wk(a),d=b._start,e=R("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:R((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=tk(a);var h=uk(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&wk(a).yt_pvis&&"youtube"===e&&(Mk("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=W();m={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),m[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;T("debug_csi_data")&&(c=A("yt.timing.csiData"),c||(c=[],Ua("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var u in f)f.hasOwnProperty(u)&&(c+="&"+u+"="+f[u]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var q=void 0===q?"":q;sf(f,q)||pf(f,void 0,void 0,void 0,q)}else pf(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);Ki(ok,new mk(m.aft+(Number(g)||0),a))}}
if(T("overwrite_polyfill_on_logging_lib_loaded")){var Qk=window;Qk.ytcsi&&(Qk.ytcsi.info=Mk,Qk.ytcsi.tick=Nk)};var Rk=null,Sk=null,Tk=null,Uk={};function Vk(a){var b=a.id;a=a.ve_type;var c=si++;a=new ti({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Uk[b]=a;b=zi();c=xi();b&&c&&Ui(b,c,[a])}
function Wk(){var a=Rk.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Xk(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Ci(b,a),a=xi()))for(var c in Uk){var d=Uk[c];d&&Ui(b,a,[d])}}
function Yk(a){Uk[a.id]=new ti({trackingParams:a.tracking_params})}
function Zk(a){var b=zi(),c=Uk[a.id];if(b&&c){a=T("use_default_events_client")?void 0:ci;var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={fa:Bi(b),S:b};"UNDEFINED_CSN"==b?Vi("visualElementGestured",c,d):a?Og("visualElementGestured",c,a,d):di("visualElementGestured",c,d)}}
function $k(a){a=a.ids;var b=zi();if(b)for(var c=0;c<a.length;c++){var d=Uk[a[c]];if(d){var e=b,f=T("use_default_events_client")?void 0:ci;d={csn:e,ve:d.getAsJson(),eventType:1};var g={fa:Bi(e),S:e};"UNDEFINED_CSN"==e?Vi("visualElementShown",d,g):f?Og("visualElementShown",d,f,g):di("visualElementShown",d,g)}}}
;z("yt.setConfig",Q,void 0);z("yt.config.set",Q,void 0);z("yt.setMsg",uf,void 0);z("yt.msgs.set",uf,void 0);z("yt.logging.errors.log",ii,void 0);
z("writeEmbed",function(){var a=R("PLAYER_CONFIG",void 0);bk(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=R("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);R("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");Rk=a=(b=R("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in b?uj(a,b.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1):uj(a);a.addEventListener("onScreenChanged",Xk);a.addEventListener("onLogClientVeCreated",
Vk);a.addEventListener("onLogServerVeCreated",Yk);a.addEventListener("onLogVeClicked",Zk);a.addEventListener("onLogVesShown",$k);a.addEventListener("onVideoDataChange",Wk);b=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Tk=new Mj(a):R("ENABLE_POST_API")&&"string"===typeof b&&"string"===typeof c&&(Sk=new Nj(window.parent,b,c),Tk=new Hj(a,Sk.h));ag()},void 0);
z("yt.www.watch.ads.restrictioncookie.spr",function(a){pf(a+"mac_204?action_fcts=1");return!0},void 0);
var al=Ge(function(){Nk("ol");var a=ck.getInstance(),b=!!((fk("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Gd(document.body,"exp-invert-logo"))if(c&&!Gd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Gd(d,"inverted-hdpi")){var e=Ed(d);Fd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Gd(document.body,"inverted-hdpi")&&Hd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=fk(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete Y[b]:(c=d.toString(16),Y[b]=c.toString()),a.save())}),bl=Ge(function(){var a=Rk;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();R("PL_ATT")&&mi.dispose();a=0;for(var b=Zf.length;a<b;a++)Yf(Zf[a]);Zf.length=0;Rf("//static.doubleclick.net/instream/ad_status.js");$f=!1;Q("DCLKSTAT",0);Uc(Tk,Sk);if(a=Rk)a.removeEventListener("onScreenChanged",Xk),a.removeEventListener("onLogClientVeCreated",Vk),a.removeEventListener("onLogServerVeCreated",Yk),a.removeEventListener("onLogVeClicked",Zk),a.removeEventListener("onLogVesShown",$k),a.removeEventListener("onVideoDataChange",Wk),a.destroy();
Uk={}});
window.addEventListener?(window.addEventListener("load",al),window.addEventListener("unload",bl)):window.attachEvent&&(window.attachEvent("onload",al),window.attachEvent("onunload",bl));Ua("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||ni);Ua("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||oi);Ua("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||bg);
Ua("yt.player.exports.navigate",A("yt.player.exports.navigate")||Di);Ua("yt.util.activity.init",A("yt.util.activity.init")||og);Ua("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||rg);Ua("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||pg);}).call(this);
