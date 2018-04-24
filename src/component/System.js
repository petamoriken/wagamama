var System=function(){"use strict";function a(){return{current:0,items:K,contents:L}}function b(){this.updateCurrentByLocationHash(),window.addEventListener("popstate",()=>this.updateCurrentByLocationHash()),baguetteBox.run(".gallery",{captions:!1,async:!0}),this.observe("current",this.updateGallery,{init:!1,defer:!0})}function c(){baguetteBox.destroy()}function d(a){t(a,"svelte-125126062","")}function e(a,b){for(var c,e,h,j,k,l,m,o,q,r,s,t,A,B,C=a.items,D=[],E=0;E<C.length;E+=1)D[E]=f(a,C,C[E],E,b);for(var i=a.contents[a.items[a.current].id],F=[],E=0;E<i.length;E+=1)F[E]=g(a,i,i[E],E,b);for(var G=a.contents.field,H=[],E=0;E<G.length;E+=1)H[E]=n(a,G,G[E],E,b);for(var I=a.contents.battle,J=[],E=0;E<I.length;E+=1)J[E]=p(a,I,I[E],E,b);return{c:function(){c=u("main"),e=u("div"),h=u("h1"),h.innerHTML="<img src=\"img/heading/system.png\" srcset=\"img/heading/system@2x.png 2x\" alt=\"\u30B2\u30FC\u30E0\u30B7\u30B9\u30C6\u30E0\">",j=v("\n        "),k=u("nav"),l=u("menu");for(var a=0;a<D.length;a+=1)D[a].c();m=v("\n        "),o=u("hr"),q=v("\n        "),r=u("div");for(var a=0;a<F.length;a+=1)F[a].c();t=v("\n    "),A=u("div");for(var a=0;a<H.length;a+=1)H[a].c();B=v("\n            ");for(var a=0;a<J.length;a+=1)J[a].c();this.h()},h:function(){d(c),l.type="toolbar",r.className=s="gallery "+a.items[a.current].id,e.className="wrapper",A.className="cache"},m:function(a,b){w(c,a,b),x(e,c),x(h,e),x(j,e),x(k,e),x(l,k);for(var d=0;d<D.length;d+=1)D[d].m(l,null);x(m,e),x(o,e),x(q,e),x(r,e);for(var d=0;d<F.length;d+=1)F[d].m(r,null);x(t,c),x(A,c);for(var d=0;d<H.length;d+=1)H[d].m(A,null);x(B,A);for(var d=0;d<J.length;d+=1)J[d].m(A,null)},p:function(a,c){var d=c.items;if(a.current||a.items){for(var e=0;e<d.length;e+=1)D[e]?D[e].p(a,c,d,d[e],e):(D[e]=f(c,d,d[e],e,b),D[e].c(),D[e].m(l,null));for(;e<D.length;e+=1)D[e].u(),D[e].d();D.length=d.length}var h=c.contents[c.items[c.current].id];if(a.contents||a.items||a.current){for(var e=0;e<h.length;e+=1)F[e]?F[e].p(a,c,h,h[e],e):(F[e]=g(c,h,h[e],e,b),F[e].c(),F[e].m(r,null));for(;e<F.length;e+=1)F[e].u(),F[e].d();F.length=h.length}(a.items||a.current)&&s!==(s="gallery "+c.items[c.current].id)&&(r.className=s);var i=c.contents.field;if(a.contents){for(var e=0;e<i.length;e+=1)H[e]?H[e].p(a,c,i,i[e],e):(H[e]=n(c,i,i[e],e,b),H[e].c(),H[e].m(A,B));for(;e<H.length;e+=1)H[e].u(),H[e].d();H.length=i.length}var j=c.contents.battle;if(a.contents){for(var e=0;e<j.length;e+=1)J[e]?J[e].p(a,c,j,j[e],e):(J[e]=p(c,j,j[e],e,b),J[e].c(),J[e].m(A,null));for(;e<J.length;e+=1)J[e].u(),J[e].d();J.length=j.length}},u:function(){y(c);for(var a=0;a<D.length;a+=1)D[a].u();for(var a=0;a<F.length;a+=1)F[a].u();for(var a=0;a<H.length;a+=1)H[a].u();for(var a=0;a<J.length;a+=1)J[a].u()},d:function(){z(D),z(F),z(H),z(J)}}}function f(b,c,d,e){var f,g,a,h,j,k,l,m;return{c:function(){f=u("li"),g=u("a"),a=u("img"),this.h()},h:function(){a.src=h=d.image.src,a.srcset=j=d.image.srcset,a.alt=k=d.image.alt,g.href=l="#"+d.id,t(f,"aria-current",m=b.current===e?"page":"")},m:function(b,c){w(f,b,c),x(g,f),x(a,g)},p:function(b,c,d,e,n){b.items&&h!==(h=e.image.src)&&(a.src=h),b.items&&j!==(j=e.image.srcset)&&(a.srcset=j),b.items&&k!==(k=e.image.alt)&&(a.alt=k),b.items&&l!==(l="#"+e.id)&&(g.href=l),b.current&&m!==(m=c.current===n?"page":"")&&t(f,"aria-current",m)},u:function(){y(f)},d:A}}function g(a,b,c,d,e){for(var f,g,h,l,m,n,o,p,q,r=null!==c.texts&&j(a,b,c,d,e),s=c.images,t=[],A=0;A<s.length;A+=1)t[A]=k(a,b,c,d,s,s[A],A,e);return{c:function(){f=u("section"),g=u("h2"),h=u("img"),o=v("\n                    "),r&&r.c(),p=v("\n                    "),q=u("div");for(var a=0;a<t.length;a+=1)t[a].c();this.h()},h:function(){h.src=l=c.heading.src,h.srcset=m=c.heading.srcset,h.alt=n=c.heading.alt,q.className="thumbnail"},m:function(a,b){w(f,a,b),x(g,f),x(h,g),x(o,f),r&&r.m(f,null),x(p,f),x(q,f);for(var c=0;c<t.length;c+=1)t[c].m(q,null)},p:function(a,b,c,d,g){(a.contents||a.items||a.current)&&l!==(l=d.heading.src)&&(h.src=l),(a.contents||a.items||a.current)&&m!==(m=d.heading.srcset)&&(h.srcset=m),(a.contents||a.items||a.current)&&n!==(n=d.heading.alt)&&(h.alt=n),null===d.texts?r&&(r.u(),r.d(),r=null):r?r.p(a,b,c,d,g):(r=j(b,c,d,g,e),r.c(),r.m(f,p));var o=d.images;if(a.contents||a.items||a.current){for(var s=0;s<o.length;s+=1)t[s]?t[s].p(a,b,c,d,g,o,o[s],s):(t[s]=k(b,c,d,g,o,o[s],s,e),t[s].c(),t[s].m(q,null));for(;s<t.length;s+=1)t[s].u(),t[s].d();t.length=o.length}},u:function(){y(f),r&&r.u();for(var a=0;a<t.length;a+=1)t[a].u()},d:function(){r&&r.d(),z(t)}}}function h(a,b,c,d,e,f){var g,h,i=f;return{c:function(){g=v(i),h=u("br")},m:function(a,b){w(g,a,b),w(h,a,b)},p:function(a,b,c,d,e,f,h){(a.contents||a.items||a.current)&&i!==(i=h)&&(g.data=i)},u:function(){y(g),y(h)},d:A}}function j(a,b,c,d,e){for(var f,g=c.texts,j=[],k=0;k<g.length;k+=1)j[k]=h(a,b,c,d,g,g[k],k,e);return{c:function(){f=u("p");for(var a=0;a<j.length;a+=1)j[a].c()},m:function(a,b){w(f,a,b);for(var c=0;c<j.length;c+=1)j[c].m(f,null)},p:function(a,b,c,d,g){var k=d.texts;if(a.contents||a.items||a.current){for(var l=0;l<k.length;l+=1)j[l]?j[l].p(a,b,c,d,g,k,k[l],l):(j[l]=h(b,c,d,g,k,k[l],l,e),j[l].c(),j[l].m(f,null));for(;l<j.length;l+=1)j[l].u(),j[l].d();j.length=k.length}},u:function(){y(f);for(var a=0;a<j.length;a+=1)j[a].u()},d:function(){z(j)}}}function k(a,b,c,d,e,f,g,h){var i,j,k=r(a,b,c,d,e,f,g),l=k(a,b,c,d,e,f,g,h),n=f.sub&&m(a,b,c,d,e,f,g,h);return{c:function(){i=u("div"),l.c(),j=v("\n                                "),n&&n.c()},m:function(a,b){w(i,a,b),l.m(i,null),x(j,i),n&&n.m(i,null)},p:function(a,b,c,d,e,f,g,o){k===(k=r(b,c,d,e,f,g,o))&&l?l.p(a,b,c,d,e,f,g,o):(l.u(),l.d(),l=k(b,c,d,e,f,g,o,h),l.c(),l.m(i,j)),g.sub?n?n.p(a,b,c,d,e,f,g,o):(n=m(b,c,d,e,f,g,o,h),n.c(),n.m(i,null)):n&&(n.u(),n.d(),n=null)},u:function(){y(i),l.u(),n&&n.u()},d:function(){l.d(),n&&n.d()}}}function i(b,c,d,e,f,g){var h,a,i,j,k,l;return{c:function(){h=u("a"),a=u("img"),this.h()},h:function(){a.src=i=g.src,a.srcset=j=g.srcset,a.alt=k=g.alt,h.href=l=g.href},m:function(b,c){w(h,b,c),x(a,h)},p:function(b,c,d,e,f,g,m){(b.contents||b.items||b.current)&&i!==(i=m.src)&&(a.src=i),(b.contents||b.items||b.current)&&j!==(j=m.srcset)&&(a.srcset=j),(b.contents||b.items||b.current)&&k!==(k=m.alt)&&(a.alt=k),(b.contents||b.items||b.current)&&l!==(l=m.href)&&(h.href=l)},u:function(){y(h)},d:A}}function l(a,b,c,d,e,f){var g,h,i,j;return{c:function(){g=u("img"),this.h()},h:function(){g.src=h=f.src,g.srcset=i=f.srcset,g.alt=j=f.alt},m:function(a,b){w(g,a,b)},p:function(a,b,c,d,e,f,k){(a.contents||a.items||a.current)&&h!==(h=k.src)&&(g.src=h),(a.contents||a.items||a.current)&&i!==(i=k.srcset)&&(g.srcset=i),(a.contents||a.items||a.current)&&j!==(j=k.alt)&&(g.alt=j)},u:function(){y(g)},d:A}}function m(a,b,c,d,e,f){var g,h,i,j;return{c:function(){g=u("img"),this.h()},h:function(){g.className="sub",g.src=h=f.sub.src,g.srcset=i=f.sub.srcset,g.alt=j=f.sub.alt},m:function(a,b){w(g,a,b)},p:function(a,b,c,d,e,f,k){(a.contents||a.items||a.current)&&h!==(h=k.sub.src)&&(g.src=h),(a.contents||a.items||a.current)&&i!==(i=k.sub.srcset)&&(g.srcset=i),(a.contents||a.items||a.current)&&j!==(j=k.sub.alt)&&(g.alt=j)},u:function(){y(g)},d:A}}function n(a,b,c,d,e){for(var f,g=c.texts,h=[],j=0;j<g.length;j+=1)h[j]=o(a,b,c,d,g,g[j],j,e);return{c:function(){for(var a=0;a<h.length;a+=1)h[a].c();f=B()},m:function(a,b){for(var c=0;c<h.length;c+=1)h[c].m(a,b);w(f,a,b)},p:function(a,b,c,d,g){var j=d.texts;if(a.contents){for(var k=0;k<j.length;k+=1)h[k]?h[k].p(a,b,c,d,g,j,j[k],k):(h[k]=o(b,c,d,g,j,j[k],k,e),h[k].c(),h[k].m(f.parentNode,f));for(;k<h.length;k+=1)h[k].u(),h[k].d();h.length=j.length}},u:function(){for(var a=0;a<h.length;a+=1)h[a].u();y(f)},d:function(){z(h)}}}function o(a,b,c,d,e,f){var g,h=f;return{c:function(){g=v(h)},m:function(a,b){w(g,a,b)},p:function(a,b,c,d,e,f,i){a.contents&&h!==(h=i)&&(g.data=h)},u:function(){y(g)},d:A}}function p(a,b,c,d,e){for(var f,g=c.texts,h=[],j=0;j<g.length;j+=1)h[j]=q(a,b,c,d,g,g[j],j,e);return{c:function(){for(var a=0;a<h.length;a+=1)h[a].c();f=B()},m:function(a,b){for(var c=0;c<h.length;c+=1)h[c].m(a,b);w(f,a,b)},p:function(a,b,c,d,g){var j=d.texts;if(a.contents){for(var k=0;k<j.length;k+=1)h[k]?h[k].p(a,b,c,d,g,j,j[k],k):(h[k]=q(b,c,d,g,j,j[k],k,e),h[k].c(),h[k].m(f.parentNode,f));for(;k<h.length;k+=1)h[k].u(),h[k].d();h.length=j.length}},u:function(){for(var a=0;a<h.length;a+=1)h[a].u();y(f)},d:function(){z(h)}}}function q(a,b,c,d,e,f){var g,h=f;return{c:function(){g=v(h)},m:function(a,b){w(g,a,b)},p:function(a,b,c,d,e,f,i){a.contents&&h!==(h=i)&&(g.data=h)},u:function(){y(g)},d:A}}function r(a,b,c,d,e,f){return f.href?i:l}function s(d){C(this,d),this._state=D(a(),d.data),this._handlers.destroy=[c];var f=b.bind(this);d.root||(this._oncreate=[]),this._fragment=e(this._state,this),this.root._oncreate.push(f),d.target&&(this._fragment.c(),this._fragment.m(d.target,d.anchor||null),E(this._oncreate))}function t(a,b,c){a.setAttribute(b,c)}function u(a){return document.createElement(a)}function v(a){return document.createTextNode(a)}function w(a,b,c){b.insertBefore(a,c)}function x(a,b){b.appendChild(a)}function y(a){a.parentNode.removeChild(a)}function z(a){for(var b=0;b<a.length;b+=1)a[b]&&a[b].d()}function A(){}function B(){return document.createComment("")}function C(a,b){a._observers={pre:H(),post:H()},a._handlers=H(),a._bind=b._bind,a.options=b,a.root=b.root||a,a.store=a.root.store||b.store}function D(a){for(var b,c,d=1,e=arguments.length;d<e;d++)for(b in c=arguments[d],c)a[b]=c[b];return a}function E(a){for(;a&&a.length;)a.shift()()}function F(a){this.destroy=A,this.fire("destroy"),this.set=this.get=A,!1!==a&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function G(a,b){var c=a in this._handlers&&this._handlers[a].slice();if(c)for(var d=0;d<c.length;d+=1)c[d].call(this,b)}function H(){return Object.create(null)}function I(c,d){return c!==d||c&&"object"==typeof c||"function"==typeof c}function J(a,b,c,d,e){for(var f in b)if(c[f]){var g=d[f],h=e[f],j=b[f];if(j)for(var k,l=0;l<j.length;l+=1)k=j[l],k.__calling||(k.__calling=!0,k.call(a,g,h),k.__calling=!1)}}const K=Object.freeze([{id:"field",image:{src:"img/button/field.png",srcset:"img/button/field@2x.png 2x",alt:"\u30D5\u30A3\u30FC\u30EB\u30C9"}},{id:"battle",image:{src:"img/button/battle.png",srcset:"img/button/battle@2x.png 2x",alt:"\u30D0\u30C8\u30EB"}},{id:"drama",image:{src:"img/button/drama.png",srcset:"img/button/drama@2x.png 2x",alt:"\u30C9\u30E9\u30DE\u30B7\u30FC\u30F3"}}]),L=Object.freeze({field:[{heading:{src:"img/text/system_field01.png",srcset:"img/text/system_field01@2x.png 2x",alt:"\u5E83\u5927\u306A\u4E16\u754C\u3092\u8E42\u8E99\u305B\u3088"},texts:["104\u306E\u9818\u5730\u304B\u3089\u306A\u308B\u5E83\u5927\u306A\u4E16\u754C\u3092\u4FB5\u7565\u3057\u3066\u3044\u304F\u306E\u304C\u3053\u306E\u30B2\u30FC\u30E0\u306E\u76EE\u7684\u3067\u3059\u3002","\u5175\u6570\u3092\u3075\u3084\u3057\u305F\u308A\u3001\u88C5\u5099\u3092\u8CB7\u3063\u305F\u308A\u3057\u3066\u30E6\u30CB\u30C3\u30C8\u3092\u935B\u3048\u3001\u5727\u5012\u7684\u306A\u529B\u3067\u6575\u3092\u4FB5\u7565\u3057\u3088\u3046\u3002"],images:[{href:"img/system/field01.png",src:"img/thumbnail/system_field01.png",srcset:"img/thumbnail/system_field01@2x.png 2x",alt:"\u30DE\u30C3\u30D7\u753B\u97621"},{href:"img/system/field02.png",src:"img/thumbnail/system_field02.png",srcset:"img/thumbnail/system_field02@2x.png 2x",alt:"\u30DE\u30C3\u30D7\u753B\u97622"},{href:"img/system/field03.png",src:"img/thumbnail/system_field03.png",srcset:"img/thumbnail/system_field03@2x.png 2x",alt:"\u30DE\u30C3\u30D7\u753B\u97623"}]},{heading:{src:"img/text/system_field02.png",srcset:"img/text/system_field02@2x.png 2x",alt:"\u8ECD\u56E3\u3092\u5F37\u5316\u3057\u3088\u3046"},texts:["\u6575\u306E\u9818\u5730\u3092\u4FB5\u7565\u3059\u308B\u305F\u3081\u306B\u81EA\u5206\u306E\u8ECD\u56E3\u3092\u5F37\u304F\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002","\u7D4C\u9A13\u5024\u3092\u305F\u3081\u3066\u30EC\u30D9\u30EB\u3092\u4E0A\u3052\u305F\u308A\u3001\u5175\u58EB\u306E\u6570\u3092\u5897\u3084\u3057\u305F\u308A\u3001","\u88C5\u5099\u3092\u5909\u3048\u305F\u308A\u3068\u30E6\u30CB\u30C3\u30C8\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3057\u3066\u8ECD\u56E3\u3092\u5F37\u304F\u3057\u3088\u3046\u3002"],images:[{href:"img/system/field04.png",src:"img/thumbnail/system_field04.png",srcset:"img/thumbnail/system_field04@2x.png 2x",alt:"\u8ECD\u56E3\u62E1\u5F35\u753B\u97621"},{href:"img/system/field05.png",src:"img/thumbnail/system_field05.png",srcset:"img/thumbnail/system_field05@2x.png 2x",alt:"\u8ECD\u56E3\u62E1\u5F35\u753B\u97622"}]},{heading:{src:"img/text/system_field03.png",srcset:"img/text/system_field03@2x.png 2x",alt:"\u8ECD\u56E3\u3092\u5F37\u5316\u3057\u3088\u3046"},texts:["\u30E1\u30CB\u30E5\u30FC\u753B\u9762\u304B\u3089\u753A\u3078\u7E70\u308A\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002","\u753A\u3067\u306F\u88C5\u5099\u3084\u6226\u95D8\u306E\u5F79\u306B\u7ACB\u3064\u30AB\u30FC\u30C9\u3092\u8CFC\u5165\u3067\u304D\u305F\u308A\u3001","\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u305F\u3061\u306E\u30B7\u30E7\u30FC\u30C8\u30A8\u30D4\u30BD\u30FC\u30C9\u3092\u697D\u3057\u3080\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002"],images:[{href:"img/system/field06.png",src:"img/thumbnail/system_field06.png",srcset:"img/thumbnail/system_field06@2x.png 2x",alt:"\u753A\u3078\u884C\u304F1"},{href:"img/system/field07.png",src:"img/thumbnail/system_field07.png",srcset:"img/thumbnail/system_field07@2x.png 2x",alt:"\u753A\u3078\u884C\u304F2"},{href:"img/system/field08.png",src:"img/thumbnail/system_field08.png",srcset:"img/thumbnail/system_field08@2x.png 2x",alt:"\u753A\u3078\u884C\u304F3"}]}],battle:[{heading:{src:"img/text/system_battle01.png",srcset:"img/text/system_battle01@2x.png 2x",alt:"3\u968AVS3\u968A\u306E\u30B3\u30DE\u30F3\u30C9\u30D0\u30C8\u30EB"},texts:["\u6226\u95D8\u306F\u30B7\u30F3\u30D7\u30EB\u306A\u30B3\u30DE\u30F3\u30C9\u30D0\u30C8\u30EB\uFF01","\u300C\u653B\u6483\u30B9\u30AD\u30EB\u300D\u3068\u300C\u9632\u5FA1\u30B9\u30AD\u30EB\u300D\u3092\u4F7F\u3044\u5206\u3051\u3066\u6575\u3092\u6483\u9000\u3057\u3088\u3046\u3002","\u6575\u3092\u6355\u7372\u3057\u3066\u307F\u304B\u305F\u306B\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u308B\u305E\uFF01"],images:[{href:"img/system/battle01.png",src:"img/thumbnail/system_battle01.png",srcset:"img/thumbnail/system_battle01@2x.png 2x",alt:"\u6226\u95D8\u753B\u97621"},{href:"img/system/battle02.png",src:"img/thumbnail/system_battle02.png",srcset:"img/thumbnail/system_battle02@2x.png 2x",alt:"\u6226\u95D8\u753B\u97622"},{href:"img/system/battle03.png",src:"img/thumbnail/system_battle03.png",srcset:"img/thumbnail/system_battle03@2x.png 2x",alt:"\u6226\u95D8\u753B\u97623"}]},{heading:{src:"img/text/system_battle02.png",srcset:"img/text/system_battle02@2x.png 2x",alt:"\u3055\u307E\u3056\u307E\u306A\u30B9\u30AD\u30EB"},texts:["\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3054\u3068\u306B\u500B\u6027\u7684\u306A\u30B9\u30AD\u30EB\u304C\u4F7F\u3048\u308B\uFF01"],images:[{href:"img/system/battle04.png",src:"img/thumbnail/system_battle04.png",srcset:"img/thumbnail/system_battle04@2x.png 2x",alt:"\u6226\u95D8\u753B\u97621",sub:{src:"img/text/system_battle_sub01.png",srcset:"img/text/system_battle_sub01@2x.png 2x",alt:"\u30BF\u30FC\u30F3\u30A2\u30F3\u30C7\u30C3\u30C9\uFF01"}},{href:"img/system/battle05.png",src:"img/thumbnail/system_battle05.png",srcset:"img/thumbnail/system_battle05@2x.png 2x",alt:"\u6226\u95D8\u753B\u97622",sub:{src:"img/text/system_battle_sub02.png",srcset:"img/text/system_battle_sub02@2x.png 2x",alt:"\u7834\u58CA\u5149\u7DDA\uFF01\uFF01"}},{href:"img/system/battle06.png",src:"img/thumbnail/system_battle06.png",srcset:"img/thumbnail/system_battle06@2x.png 2x",alt:"\u6226\u95D8\u753B\u97623",sub:{src:"img/text/system_battle_sub03.png",srcset:"img/text/system_battle_sub03@2x.png 2x",alt:"\u30B4\u30C3\u30C9\u30EC\u30A4\uFF01\uFF01\uFF01"}}]},{heading:{src:"img/text/system_battle03.png",srcset:"img/text/system_battle03@2x.png 2x",alt:"\u6B7B\u3093\u3060\u3089\u6700\u5F8C\u306E\u7DCA\u5F35\u611F"},texts:["\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306F\u6226\u95D8\u3067\u6B7B\u3093\u3060\u3089\u6700\u5F8C\u3001\u7269\u8A9E\u306B\u767B\u5834\u3057\u306A\u304F\u306A\u308A\u307E\u3059\u3002","\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u751F\u6B7B\u3067\u30B9\u30C8\u30FC\u30EA\u30FC\u304C\u5909\u5316\u3059\u308B\u304B\u3082\uFF01\uFF1F"],images:[{src:"img/thumbnail/gameover.png",srcset:"img/thumbnail/gameover@2x.png 2x",alt:"\u30B2\u30FC\u30E0\u30AA\u30FC\u30D0\u30FC"}]}],drama:[{heading:{src:"img/text/system_drama01.png",srcset:"img/text/system_drama01@2x.png 2x",alt:"\u4E16\u754C\u3092\u5F69\u308B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u305F\u3061\u306E\u30C9\u30E9\u30DE"},texts:null,images:[{href:"img/system/drama01.png",src:"img/thumbnail/system_drama01.png",srcset:"img/thumbnail/system_drama01@2x.png 2x",alt:"\u30B9\u30C8\u30FC\u30EA\u30FC\u30D1\u30FC\u30C81",sub:{src:"img/text/system_drama_sub01.png",srcset:"img/text/system_drama_sub01@2x.png 2x",alt:"\u3053\u306E\u9818\u5730\u3001\u5168\u90E8\u79C1\u306B\u304F\u308C\u3088\uFF01"}},{href:"img/system/drama02.png",src:"img/thumbnail/system_drama02.png",srcset:"img/thumbnail/system_drama02@2x.png 2x",alt:"\u30B9\u30C8\u30FC\u30EA\u30FC\u30D1\u30FC\u30C82"},{href:"img/system/drama03.png",src:"img/thumbnail/system_drama03.png",srcset:"img/thumbnail/system_drama03@2x.png 2x",alt:"\u30B9\u30C8\u30FC\u30EA\u30FC\u30D1\u30FC\u30C83"},{href:"img/system/drama04.png",src:"img/thumbnail/system_drama04.png",srcset:"img/thumbnail/system_drama04@2x.png 2x",alt:"\u30B9\u30C8\u30FC\u30EA\u30FC\u30D1\u30FC\u30C84",sub:{src:"img/text/system_drama_sub02.png",srcset:"img/text/system_drama_sub02@2x.png 2x",alt:"\u3042\u3063\uFF01 \u3053\u3089\uFF01! \u30EF\u30FC\u30CA\u30FC\u3060\u30FC\u30C3\uFF01\uFF01"}},{href:"img/system/drama05.png",src:"img/thumbnail/system_drama05.png",srcset:"img/thumbnail/system_drama05@2x.png 2x",alt:"\u30B9\u30C8\u30FC\u30EA\u30FC\u30D1\u30FC\u30C85",sub:{src:"img/text/system_drama_sub03.png",srcset:"img/text/system_drama_sub03@2x.png 2x",alt:"\u5165\u3063\u305F\u3089\u3076\u3063\u6BBA\u3059\u305E\uFF01\uFF01"}},{href:"img/system/drama06.png",src:"img/thumbnail/system_drama06.png",srcset:"img/thumbnail/system_drama06@2x.png 2x",alt:"\u30B9\u30C8\u30FC\u30EA\u30FC\u30D1\u30FC\u30C86"},{href:"img/system/drama07.png",src:"img/thumbnail/system_drama07.png",srcset:"img/thumbnail/system_drama07@2x.png 2x",alt:"\u30B9\u30C8\u30FC\u30EA\u30FC\u30D1\u30FC\u30C87"},{href:"img/system/drama08.png",src:"img/thumbnail/system_drama08.png",srcset:"img/thumbnail/system_drama08@2x.png 2x",alt:"\u30B9\u30C8\u30FC\u30EA\u30FC\u30D1\u30FC\u30C88",sub:{src:"img/text/system_drama_sub04.png",srcset:"img/text/system_drama_sub04@2x.png 2x",alt:"\u30AA\u30A4\u304A\u524D\u3001\u79C1\u306B\u3064\u3044\u3066\u3053\u3044\u3088\uFF01"}}]}]});var M={updateGallery(){baguetteBox.destroy(),baguetteBox.run(".gallery",{captions:!1,async:!0})},updateCurrentByLocationHash(){const a=location.hash,b=a?K.findIndex((b)=>`#${b.id}`===a):0;-1!==b&&this.set({current:b})}};return D(s.prototype,M,{destroy:F,get:function(a){return a?this._state[a]:this._state},fire:G,observe:function(a,b,c){var d=c&&c.defer?this._observers.post:this._observers.pre;return(d[a]||(d[a]=[])).push(b),c&&!1===c.init||(b.__calling=!0,b.call(this,this._state[a]),b.__calling=!1),{cancel:function(){var c=d[a].indexOf(b);~c&&d[a].splice(c,1)}}},on:function(a,b){if("teardown"===a)return this.on("destroy",b);var c=this._handlers[a]||(this._handlers[a]=[]);return c.push(b),{cancel:function(){var a=c.indexOf(b);~a&&c.splice(a,1)}}},set:function(a){this._set(D({},a)),this.root._lock||(this.root._lock=!0,E(this.root._beforecreate),E(this.root._oncreate),E(this.root._aftercreate),this.root._lock=!1)},teardown:F,_set:function(a){var b=this._state,c={},d=!1;for(var e in a)I(a[e],b[e])&&(c[e]=d=!0);d&&(this._state=D({},b,a),this._recompute(c,this._state),this._bind&&this._bind(c,this._state),this._fragment&&(J(this,this._observers.pre,c,this._state,b),this._fragment.p(c,this._state),J(this,this._observers.post,c,this._state,b)))},_mount:function(a,b){this._fragment.m(a,b)},_unmount:function(){this._fragment&&this._fragment.u()}}),s.prototype._recompute=A,s}();