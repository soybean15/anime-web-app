(function(){"use strict";var n={6889:function(n,e,t){var r=t(9242),i=t(3396);function o(n,e,t,r,o,a){const u=(0,i.up)("HeaderView"),c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u),(0,i.Wm)(c)],64)}var a=t(7139);const u={key:0,class:"nav-container"},c=(0,i._)("img",{height:"100px",class:"nav-img",src:"#"},null,-1),s={class:"nav-item"},l=(0,i._)("div",{class:"nav-search"},[(0,i._)("div",{class:"nav-search-label"},"Search"),(0,i._)("div",{class:"nav-search-input"},[(0,i._)("input",{type:"",placeholder:"Search"})])],-1);function m(n,e,t,r,o,m){const d=(0,i.up)("router-link");return r.isMobile?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",u,[c,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.navItems,(n=>((0,i.wg)(),(0,i.iD)("ul",{key:n.name},[(0,i.Wm)(d,{to:{name:n.route}},{default:(0,i.w5)((()=>[(0,i._)("li",s,(0,a.zw)(n.name),1)])),_:2},1032,["to"])])))),128)),l]))}var d=t(4870),f={setup(){const n=(0,d.iH)(!1),e=(0,d.iH)([{name:"Home",route:"home",icon:null},{name:"Anime",route:"list",icon:null},{name:"Genre",route:"genre",icon:null},{name:"Favorites",route:"genre",icon:null}]);return window.addEventListener("resize",(function(){n.value=window.innerWidth<600})),{navItems:e,isMobile:n}}},v=t(89);const p=(0,v.Z)(f,[["render",m]]);var g=p,h={components:{HeaderView:g}};const w=(0,v.Z)(h,[["render",o]]);var b=w,y=t(2483);function _(n,e,t,r,o,a){const u=(0,i.up)("RecommendationView");return(0,i.wg)(),(0,i.j4)(u)}const j=(0,i._)("div",{class:"title"},"Anime recommendations",-1),k={class:"list-container"};function O(n,e,t,r,o,a){const u=(0,i.up)("AnimeCard"),c=(0,i.Q2)("dragscroll");return(0,i.wg)(),(0,i.iD)(i.HY,null,[j,(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",k,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.animeList,(n=>((0,i.wg)(),(0,i.iD)("div",{class:"item md:container md:mx-auto",key:n.ma},[(0,i.Wm)(u,{anime:n},null,8,["anime"])])))),128))])),[[c,void 0,"nochilddrag"]])],64)}t(7658);const H={class:"item-card max-w-sm rounded shadow-lg","data-dragscroll":""},D=["src"],E={class:"text-sm"};function x(n,e,t,r,o,u){return(0,i.wg)(),(0,i.iD)("div",H,[(0,i._)("img",{style:{"pointer-events":"none"},class:"object-cover h-48 w-96",src:t.anime.images.image_url,alt:"Sunset in the mountains"},null,8,D),(0,i._)("div",E,(0,a.zw)(r.snippet),1)])}var A=t(6951),C={directives:{dragscroll:A.m},props:["anime"],setup(n){const e=(0,i.Fl)((()=>n.anime.title.length<30?n.anime.title:n.anime.title.substring(0,30)+"..."));return{snippet:e}}};const S=(0,v.Z)(C,[["render",x],["__scopeId","data-v-3cf78133"]]);var P=S,T={name:"HomeView",components:{AnimeCard:P},directives:{dragscroll:A.m},setup(){const n=(0,d.iH)([]),e=(0,d.iH)([]),t=(0,d.iH)(null),r=async()=>{try{let n=await fetch("https://api.jikan.moe/v4/recommendations/anime");if(!n.ok)throw Error("no Data available");e.value=await n.json(),i(e)}catch(n){t.value=n.message}},i=e=>{console.log("size: "+e.value.data.length),e.value.data.forEach((e=>{const t={mal_id:e.mal_id,title:e.entry[0].title,description:e.content,images:{image_url:e.entry[0].images.jpg.image_url,small_image_url:e.entry[0].images.jpg.small_image_url,large_image_url:e.entry[0].images.jpg.large_image_url}};n.value.push(t)}))};return r(),{animeList:n}}};const Z=(0,v.Z)(T,[["render",O]]);var V=Z,L={name:"HomeView",components:{RecommendationView:V}};const M=(0,v.Z)(L,[["render",_]]);var W=M;function z(n,e,t,r,o,a){return(0,i.wg)(),(0,i.iD)("h1",null,"this is genre")}var F={};const Y=(0,v.Z)(F,[["render",z]]);var I=Y;function N(n,e,t,r,o,a){return(0,i.wg)(),(0,i.iD)("h1",null,"this is list")}var q={};const K=(0,v.Z)(q,[["render",N]]);var R=K;const B=[{path:"/",name:"home",component:W},{path:"/genre",name:"genre",component:I},{path:"/list",name:"list",component:R},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,7381))}],G=(0,y.p7)({history:(0,y.PO)("/animing/"),routes:B});var Q=G;(0,r.ri)(b).use(Q).mount("#app")}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,r,i,o){if(!r){var a=1/0;for(l=0;l<n.length;l++){r=n[l][0],i=n[l][1],o=n[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(u=!1,o<a&&(a=o));if(u){n.splice(l--,1);var s=i();void 0!==s&&(e=s)}}return e}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[r,i,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/about.afc48511.js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="animing:";t.l=function(r,i,o,a){if(n[r])n[r].push(i);else{var u,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var m=s[l];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==e+o){u=m;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",e+o),u.src=r),n[r]=[i];var d=function(e,t){u.onerror=u.onload=null,clearTimeout(f);var i=n[r];if(delete n[r],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(n){return n(t)})),e)return e(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/animing/"}(),function(){var n={143:0};t.f.j=function(e,r){var i=t.o(n,e)?n[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(t,r){i=n[e]=[t,r]}));r.push(i[2]=o);var a=t.p+t.u(e),u=new Error,c=function(r){if(t.o(n,e)&&(i=n[e],0!==i&&(n[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,i[1](u)}};t.l(a,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var i,o,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(e){return 0!==n[e]}))){for(i in u)t.o(u,i)&&(t.m[i]=u[i]);if(c)var l=c(t)}for(e&&e(r);s<a.length;s++)o=a[s],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(l)},r=self["webpackChunkaniming"]=self["webpackChunkaniming"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6889)}));r=t.O(r)})();
//# sourceMappingURL=app.1dbe1b97.js.map