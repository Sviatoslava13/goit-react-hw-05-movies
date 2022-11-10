"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var a,r,i,c,o,u=e(885),p=e(689),d=e(791),s=e(498),g=e(168),l=e(444),f=l.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n  padding: 20px 0;\n"]))),m=l.ZP.ul(r||(r=(0,g.Z)(["\n  display: grid;\n  max-width: calc(100vw - 20px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=l.ZP.li(i||(i=(0,g.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),h=l.ZP.p(c||(c=(0,g.Z)(["\nmargin-top:0;\n  margin-bottom: 5px;\n  :last-child {\n    margin-bottom: 0;\n  "]))),b=l.ZP.div(o||(o=(0,g.Z)(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),v=e(398),Z=e(184);var _=function(){var n=(0,p.UO)().movieId,t=(0,d.useState)(null),e=(0,u.Z)(t,2),a=e[0],r=e[1];return(0,d.useEffect)((function(){(0,s.yd)(n).then((function(n){return r(n)}))}),[n]),a?(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(f,{children:(0,Z.jsx)(m,{children:a.map((function(n){var t=n.id,e=n.name,a=n.character,r=n.profile_path;return(0,Z.jsxs)(x,{children:[(0,Z.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):v,alt:e}),(0,Z.jsxs)(b,{children:[" ",(0,Z.jsx)(h,{children:e}),(0,Z.jsxs)(h,{children:["Character: ",a]})]})]},t)}))})})}):null}},498:function(n,t,e){e.d(t,{HW:function(){return c},SB:function(){return d},bI:function(){return o},fS:function(){return u},yd:function(){return p}});var a=e(44),r="5222b846da18c1903ab10bf5e2597c32",i="https://api.themoviedb.org/3";function c(){return a.ZP.get("".concat(i,"/trending/movie/day?api_key=").concat(r)).then((function(n){return n.data.results}))}function o(n){return a.ZP.get("".concat(i,"/search/movie?api_key=").concat(r,"&language=en-US&query=").concat(n)).then((function(n){return n.data.results}))}function u(n){return a.ZP.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.data}))}function p(n){return a.ZP.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.data.cast}))}function d(n){return a.ZP.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.data.results}))}},398:function(n,t,e){n.exports=e.p+"static/media/noimage.0535818e0c0bf4b6048a.jpg"}}]);
//# sourceMappingURL=387.023fa2ad.chunk.js.map