"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{1806:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,u=e(1413),c=e(5861),o=e(9439),i=e(7757),s=e.n(i),p=e(2791),f=e(7689),l=e(8881),h=e(1345),d=e(9406),m=e(299),v=e(3303),x=e(168),g=e(5867),y=g.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  margin: 10px 160px;\n\n  div {\n    margin: 10px 0px;\n  }\n\n  span {\n    color: ",";\n  }\n\n  p {\n    text-align: justify;\n  }\n"])),(function(n){return n.theme.colors.primary})),w=g.ZP.p(a||(a=(0,x.Z)(["\n  margin: 20px 0px;\n  text-align: center;\n  font-size: ",";\n"])),(function(n){return n.theme.fontSizes.m})),k=e(184);function Z(){var n=(0,p.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,p.useState)(!1),i=(0,o.Z)(a,2),x=i[0],g=i[1],Z=(0,f.UO)().movieId;return(0,p.useEffect)((function(){function n(){return(n=(0,c.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,m.tx)(Z);case 3:t=n.sent,r(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),(0,d._N)();case 10:return n.prev=10,setTimeout((function(){return g(!1)}),300),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))).apply(this,arguments)}return g(!0),function(){n.apply(this,arguments)}(),function(){clearTimeout(undefined)}}),[Z]),(0,k.jsxs)(k.Fragment,{children:[x&&(0,k.jsx)(l.s5,(0,u.Z)({},h.E)),e&&e.length>0?(0,k.jsx)(y,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,k.jsxs)("div",{children:[(0,k.jsxs)("h3",{children:["Author: ",(0,k.jsx)("span",{children:e})]}),(0,k.jsx)("p",{children:r})]},t)}))}):(0,k.jsx)(v.U,{delay:300,children:(0,k.jsx)(w,{children:"Sorry, we don't have any reviews for this movie..."})})]})}},3303:function(n,t,e){e.d(t,{U:function(){return u}});var r=e(9439),a=e(2791),u=function(n){var t=n.children,e=n.delay,u=(0,a.useState)(!1),c=(0,r.Z)(u,2),o=c[0],i=c[1];return(0,a.useEffect)((function(){var n=setTimeout((function(){i(!0)}),e);return function(){clearTimeout(n)}}),[e]),o?t:null}},299:function(n,t,e){e.d(t,{FB:function(){return p},Hg:function(){return h},M1:function(){return x},TP:function(){return m},tx:function(){return y},z1:function(){return f}});var r=e(5861),a=e(7757),u=e.n(a),c=e(5294),o="560a91da1aaf90af92f6db93300e98bd",i="https://api.themoviedb.org/3",s="https://image.tmdb.org/t/p",p=function(n){return null!==n?"".concat(s,"/w400").concat(n):"https://sd.keepcalms.com/i-w400/keep-calm-poster-not-found.jpg"};function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/search/movie"),{params:{api_key:"".concat(o),language:"en-US",query:"".concat(t),include_adult:"false"}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/trending/movie/day"),{params:{api_key:"".concat(o),page:1}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/movie/").concat(t),{params:{api_key:"".concat(o),language:"en-US"}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"/credits"),{params:{api_key:"".concat(o),language:"en-US"}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"/reviews"),{params:{api_key:"".concat(o),language:"en-US",page:1}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9406:function(n,t,e){e.d(t,{_N:function(){return o},hK:function(){return c},x9:function(){return u}});var r=e(8174),a=(e(5462),{theme:"colored"}),u=function(){return r.Am.success("Yay! We found what you were looking for!",a)},c=function(){return r.Am.info("It looks like you want to find nothing, please check your query",a)},o=function(){return r.Am.error("Oops, something went wrong. Please try again!",a)}}}]);
//# sourceMappingURL=806.2769bbda.chunk.js.map