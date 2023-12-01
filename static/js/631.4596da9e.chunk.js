"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{6631:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,o,i,c,u=t(9439),s=t(2791),p=t(7689),l=t(299),f=t(9406),h=t(4834),d=t(168),x=t(5867),m=t(1087),g=x.ZP.button(r||(r=(0,d.Z)(["\n  font-weight: bold;\n  font-size: 24px;\n  color: ",";\n  background-color: ",";\n  height: 48px;\n  width: 120px;\n  border-radius: 5px;\n  margin: 20px 0px 0px 160px;\n  border: ",";\n  transition: ",";\n\n  &:hover {\n    transform: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.bg_dark}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.transition.cubicBezier}),(function(n){return n.theme.transform.scaleThird})),v=x.ZP.div(a||(a=(0,d.Z)(["\n  display: flex;\n  margin: 20px 160px;\n\n  img {\n    max-height: 400px;\n  }\n\n  & h2 {\n    color: ",";\n  }\n\n  & p {\n    margin: 20px 20px 20px 0px;\n    font-size: 18px;\n    text-align: justify;\n  }\n"])),(function(n){return n.theme.colors.primary})),w=x.ZP.span(o||(o=(0,d.Z)(["\n  font-weight: bold;\n"]))),b=x.ZP.ul(i||(i=(0,d.Z)(["\n  display: flex;\n\n  margin-left: 160px;\n  margin-right: 160px;\n"]))),y=(0,x.ZP)(m.rU)(c||(c=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 24px;\n  background-color: ",";\n  height: 48px;\n  width: 120px;\n  border-radius: 5px;\n  margin: 0 6px;\n  color: ",";\n  border: ",";\n  transition: ",";\n\n  &:hover {\n    transform: ",";\n  }\n"])),(function(n){return n.theme.colors.bg_dark}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.transition.cubicBezier}),(function(n){return n.theme.transform.scaleThird})),k=t(184);function j(){var n,e=(0,s.useState)(null),t=(0,u.Z)(e,2),r=t[0],a=t[1],o=(0,p.UO)().movieId,i=(0,p.s0)(),c=(null===(n=(0,p.TH)().state)||void 0===n?void 0:n.from)||"/";if((0,s.useEffect)((function(){(0,l.TP)(o).then(a).catch(f._N)}),[o]),!r)return null;var d=r.poster_path,x=r.title,m=r.vote_average,j=r.overview,Z=r.genres,_=r.release_date,P=(0,l.FB)(d);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("main",{style:{flexGrow:"1"},children:[(0,k.jsx)(g,{onClick:function(){return i(c)},children:"Go back"}),(0,k.jsxs)(v,{children:[(0,k.jsx)("img",{src:P,alt:x}),(0,k.jsxs)(h.x,{ml:"20px",children:[(0,k.jsxs)("h2",{children:[x," (",new Date(_).getFullYear(),")"]}),(0,k.jsxs)("p",{children:[(0,k.jsx)(w,{children:"Rating: "}),m.toFixed(1)]}),(0,k.jsxs)("p",{children:[(0,k.jsx)(w,{children:"Overview: "}),j]}),(0,k.jsxs)("p",{children:[(0,k.jsx)(w,{children:"Genres: "}),Z.map((function(n){return(0,k.jsxs)("span",{children:[" ",n.name]},n.id)}))]})]})]}),(0,k.jsxs)(b,{children:[(0,k.jsx)("li",{children:(0,k.jsx)(y,{state:{from:c},to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(y,{state:{from:c},to:"reviews",children:"Reviews"})})]})]}),(0,k.jsx)(p.j3,{})]})}},299:function(n,e,t){t.d(e,{FB:function(){return p},Hg:function(){return h},M1:function(){return g},TP:function(){return x},tx:function(){return w},z1:function(){return l}});var r=t(5861),a=t(7757),o=t.n(a),i=t(5294),c="560a91da1aaf90af92f6db93300e98bd",u="https://api.themoviedb.org/3",s="https://image.tmdb.org/t/p",p=function(n){return null!==n?"".concat(s,"/w400").concat(n):"https://sd.keepcalms.com/i-w400/keep-calm-poster-not-found.jpg"};function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/search/movie"),{params:{api_key:"".concat(c),language:"en-US",query:"".concat(e),include_adult:"false"}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/trending/movie/day"),{params:{api_key:"".concat(c),page:1}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(e),{params:{api_key:"".concat(c),language:"en-US"}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(e,"/credits"),{params:{api_key:"".concat(c),language:"en-US"}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/movie/").concat(e,"/reviews"),{params:{api_key:"".concat(c),language:"en-US",page:1}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9406:function(n,e,t){t.d(e,{_N:function(){return i},hK:function(){return o}});var r=t(8174),a=(t(5462),{theme:"colored"}),o=function(){return r.Am.info("It looks like you want to find nothing, please check your query",a)},i=function(){return r.Am.error("Oops, something went wrong. Please try again!",a)}}}]);
//# sourceMappingURL=631.4596da9e.chunk.js.map