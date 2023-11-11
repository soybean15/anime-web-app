(function(){"use strict";var e={2022:function(e,t,n){var o=n(9242),i=n(3396),l=n(7139);function s(e,t,n,o,s,a){const r=(0,i.up)("HeaderView"),A=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",{class:(0,l.C_)(o.darkModeClass)},[(0,i.Wm)(r,{onToggleDarkMode:o.toggleDarkMode,darkMode:o.darkMode},null,8,["onToggleDarkMode","darkMode"]),(0,i.Wm)(A)],2)}var a=n(4870);const r={class:"flex items-center justify-between flex-wrap bg-gray-800 p-6"},A={class:"flex items-center flex-shrink-0 text-white mr-6"},d={class:"mr-4"},c=(0,i._)("span",{class:"font-semibold text-xl tracking-tight"},"AniMING",-1),u=(0,i._)("svg",{class:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("title",null,"Menu"),(0,i._)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})],-1),g=[u],m={class:"block text-center mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"};function v(e,t,n,o,s,a){const u=(0,i.up)("DarkmodeToggle"),v=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("nav",r,[(0,i._)("div",A,[(0,i._)("div",d,[(0,i.Wm)(u,{onClick:t[0]||(t[0]=t=>e.$emit("toggleDarkMode")),darkMode:n.darkMode},null,8,["darkMode"])]),c]),(0,i._)("div",{class:(0,l.C_)(["block",{hidden:!o.isMobile}])},[(0,i._)("button",{onClick:t[1]||(t[1]=(...e)=>o.hideShowNav&&o.hideShowNav(...e)),class:"flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"},g)],2),(0,i._)("div",{class:(0,l.C_)(["w-full block flex-grow lg:flex lg:items-center lg:w-auto",{hideNav:o.navHidden,showNav:!o.navHidden}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.navItems,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"text-sm lg:flex-grow",key:e.name},[(0,i.Wm)(v,{to:{name:e.route}},{default:(0,i.w5)((()=>[(0,i._)("li",m,(0,l.zw)(e.name),1)])),_:2},1032,["to"])])))),128))],2)])}var p="data:image/png;base64,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",f="data:image/png;base64,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";const h={class:"dark-mode-toggle h-5 w-5 pl-0.5"},w={key:0},x=(0,i._)("img",{class:"dark-mode-sun darkmode-img",src:p,title:"Dark Mode"},null,-1),b=[x],C={key:1},B=(0,i._)("img",{class:"dark-mode-moon darkmode-img",src:f,title:"Light Mode"},null,-1),H=[B];function D(e,t,n,o,l,s){return(0,i.wg)(),(0,i.iD)("div",h,[n.darkMode?((0,i.wg)(),(0,i.iD)("div",C,H)):((0,i.wg)(),(0,i.iD)("div",w,b))])}var k={props:["darkMode"]},P=n(89);const Q=(0,P.Z)(k,[["render",D]]);var N=Q,S={components:{DarkmodeToggle:N},props:["darkMode"],setup(){const e=(0,a.iH)(window.innerWidth<1024),t=(0,a.iH)(!0),n=(0,a.iH)([{name:"Home",route:"home",icon:null},{name:"Anime",route:"list",icon:null},{name:"Genre",route:"genre",icon:null},{name:"Favorites",route:"genre",icon:null}]);window.addEventListener("resize",(function(){e.value=window.innerWidth<1024,t.value=!0,console.log("Opneing")}));const o=()=>{t.value=!t.value};return{navItems:n,isMobile:e,hideShowNav:o,navHidden:t}}};const I=(0,P.Z)(S,[["render",v]]);var U=I;const y={components:{HeaderView:U},setup(){const e=localStorage.getItem("darkMode"),t=(0,a.iH)("true"==e);console.log(e),console.log(t.value);const n=(0,a.iH)(1==t.value?"dark-mode":"light-mode"),o=(0,a.iH)("rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"),i=()=>{t.value=!t.value,localStorage.setItem("darkMode",t.value),t.value?(n.value="dark-mode",o.value=""):(n.value="light-mode",o.value="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px")};return{darkMode:t,toggleDarkMode:i,darkModeClass:n,boxShadowColor:o}}},O=()=>{(0,o.sj)((e=>({"493ab3ad":e.boxShadowColor})))},W=y.setup;y.setup=W?(e,t)=>(O(),W(e,t)):O;var z=y;const F=(0,P.Z)(z,[["render",s]]);var M=F,V=n(2483);function j(e,t,n,o,l,s){const a=(0,i.up)("RecommendationView"),r=(0,i.up)("PopularView"),A=(0,i.up)("ScheduleView");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(a),(0,i.Wm)(r),(0,i.Wm)(A)],64)}const E=(0,i._)("div",{class:"title"},"Anime recommendations",-1),Y={class:"list-container"};function q(e,t,n,o,l,s){const a=(0,i.up)("AnimeCard"),r=(0,i.Q2)("dragscroll");return(0,i.wg)(),(0,i.iD)(i.HY,null,[E,(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",Y,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.animeList,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"item md:container md:mx-auto",key:e.mal_id},[(0,i.Wm)(a,{anime:e},null,8,["anime"])])))),128))])),[[r,void 0,"nochilddrag"]])],64)}const L={class:"relative h-40 w-32 max-w-sm rounded-2xl","data-dragscroll":""},J=["src"],K={class:"absolute h-16 bottom-0 left-0 right-0 px-4 py-2 rounded-b-2xl bg-gradient-to-t from-gray-800 to-bg-transparent"},Z={class:"absolute text-slate-50 text-xs bottom-1 left-0 right-0 p-1.5"};function T(e,t,n,o,s,a){return(0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("img",{style:{"pointer-events":"none"},class:"h-40 w-32 object-cover rounded-2xl shadow-xl",src:n.anime.images.image_url,alt:"Sunset in the mountains"},null,8,J),(0,i._)("div",K,[(0,i._)("div",Z,(0,l.zw)(o.snippet),1)])])}var R=n(6951),G={directives:{dragscroll:R.m},props:["anime"],setup(e){const t=(0,i.Fl)((()=>e.anime.title.length<30?e.anime.title:e.anime.title.substring(0,30)+"..."));return{snippet:t}}};const X=(0,P.Z)(G,[["render",T]]);var _=X;n(7658);const $=async e=>{const t=(0,a.iH)(null);try{let t=await fetch(e);if(!t.ok)throw Error("no Data available");return await t.json()}catch(n){t.value=n.message}};var ee=$;const te=()=>{const e="https://api.jikan.moe/v4/recommendations/anime",t=(0,a.iH)([]);ee(e).then((function(e){n(e)}));const n=e=>{e.data.forEach((e=>{const n={mal_id:e.mal_id,title:e.entry[0].title,description:e.content,images:{image_url:e.entry[0].images.jpg.image_url,small_image_url:e.entry[0].images.jpg.small_image_url,large_image_url:e.entry[0].images.jpg.large_image_url}};t.value.push(n)}))};return t};var ne=te,oe={name:"HomeView",components:{AnimeCard:_},directives:{dragscroll:R.m},setup(){const e=ne();return{animeList:e}}};const ie=(0,P.Z)(oe,[["render",q]]);var le=ie;const se={class:"flex title"},ae=(0,i._)("div",{class:"flex-none"}," Popular ",-1),re=(0,i._)("div",{class:"grow"},null,-1),Ae={class:"flex-none"},de=(0,i._)("div",null,"Anime",-1),ce=[de],ue=(0,i._)("div",null,"Manga",-1),ge=[ue],me={class:"place-content-center"};function ve(e,t,n,o,s,a){const r=(0,i.up)("PopularCard"),A=(0,i.up)("swiper-slide"),d=(0,i.up)("swiper-container");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",se,[ae,re,(0,i._)("div",Ae,[(0,i._)("button",{class:(0,l.C_)({"active-button":o.isAnimeActive}),onClick:t[0]||(t[0]=(...e)=>o.onAnime&&o.onAnime(...e))},ce,2),(0,i.Uk)(" | "),(0,i._)("button",{class:(0,l.C_)({"active-button":!o.isAnimeActive}),onClick:t[1]||(t[1]=(...e)=>o.onManga&&o.onManga(...e))},ge,2)])]),(0,i._)("div",me,[(0,i.Wm)(d,{class:"flex h-40 sm:h-96 mx-1.5 overflow-visible",ref:"{swiperRef}",slidesPerView:3,initialSlide:1,centeredSlides:!0,rewind:!0,spaceBetween:10,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{900:{initialSlide:2,slidesPerView:4,spaceBetween:10},1190:{slidesPerView:5,spaceBetween:10},1300:{initialSlide:3,slidesPerView:5,spaceBetween:10}},onProgress:o.onProgress,effect:e.fade,slideToClickedSlide:!0,loading:e.lazy},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.state.items,(e=>((0,i.wg)(),(0,i.j4)(A,{key:e.mal_id,class:"slider"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["onProgress","effect","loading"])])],64)}var pe=n(8100);const fe={class:"relative h-full shadow-lg rounded-2xl scale-100 hover:scale-105"},he=["src"],we={class:"absolute h-1/4 w-full top-0 right-0 px-4 py-2 rounded-t-2xl bg-gradient-to-b from-zinc-900 to-bg-transparent"},xe={class:"absolute text-slate-50 top-1 left-0 p-1.5 text-[10px] md:text-base"},be={class:"absolute text-slate-50 top-6 left-0 p-1.5 text-[10px] md:text-base"},Ce=(0,i._)("div",{class:"absolute h-2/6 w-full bottom-0 right-0 px-4 py-2 rounded-b-2xl bg-gradient-to-t from-zinc-900 to-bg-transparent"},null,-1),Be={class:"absolute h-1/6 bottom-0 right-0 px-4 py-2"},He={class:"flex flex-col bottom-0"},De={class:"text-white font-semibold bottom-1 right-2 text-[14px] sm:text-base text-right"},ke={class:"text-white font-semibold bottom-1 right-2 text-[14px] md:text-base text-right"};function Pe(e,t,n,o,s,a){return(0,i.wg)(),(0,i.iD)("div",fe,[(0,i._)("img",{style:{"pointer-events":"none"},class:"h-full w-full popular-image object-cover rounded-2xl box-shadow",src:n.item.images.image_url,alt:"Sunset in the mountains"},null,8,he),(0,i._)("div",we,[(0,i._)("div",xe,(0,l.zw)(n.item.title),1),(0,i._)("div",be,(0,l.zw)(n.item.year),1)]),Ce,(0,i._)("div",Be,[(0,i._)("div",He,[(0,i._)("div",De,(0,l.zw)(n.item.type),1),(0,i._)("div",ke,(0,l.zw)(n.item.details.info_type)+": "+(0,l.zw)(n.item.details.info_content),1)])])])}var Qe={props:["item"],setup(e){}};const Ne=(0,P.Z)(Qe,[["render",Pe]]);var Se=Ne;const Ie=()=>{const e="https://api.jikan.moe/v4/top/anime",t=(0,a.iH)([]);ee(e).then((e=>{n(e)}));const n=e=>{e.data.forEach((e=>{const n={mal_id:e.mal_id,title:e.title,description:"",images:{image_url:e.images.jpg.image_url,small_image_url:e.images.jpg.small_image_url,large_image_url:e.images.jpg.large_image_url},type:e.type,details:{info_content:e.episodes,info_type:"Episode"},year:e.year};t.value.push(n)}))};return t};var Ue=Ie;const ye=()=>{const e="https://api.jikan.moe/v4/top/manga",t=(0,a.iH)([]);ee(e).then((e=>{n(e)}));const n=e=>{e.data.forEach((e=>{const n={mal_id:e.mal_id,title:e.title,description:"",images:{image_url:e.images.jpg.image_url,small_image_url:e.images.jpg.small_image_url,large_image_url:e.images.jpg.large_image_url},type:e.type,details:{info_content:e.chapters,info_type:"Chapters"},year:e.published.prop.from.year+"-"+e.published.prop.to.year};t.value.push(n)}))};return t};var Oe=ye;(0,pe.z2)();var We={components:{PopularCard:Se},setup(){let e=(0,a.qj)({items:Ue()});const t=(0,a.iH)(null),n=0,o=(0,a.iH)(!0),l=()=>{e.items=Oe(),o.value=!1},s=()=>{e.items=Ue(),o.value=!0},r=e=>{const[n,o]=e.detail;t.value=n.activeIndex},A=e=>{const[t,n]=e.detail;console.log(t.activeIndex)};return(0,i.ic)((()=>{})),{spaceBetween:n,onProgress:r,onSlideChange:A,activeIndex:t,onAnime:s,onManga:l,isAnimeActive:o,state:e}}};const ze=(0,P.Z)(We,[["render",ve]]);var Fe=ze;const Me=(0,i._)("div",{class:"title"},"Schedules",-1),Ve={class:"grid grid-cols-1 md:grid-cols-2 h-96 overflow-auto"};function je(e,t,n,o,l,s){const a=(0,i.up)("ScheduleCard");return(0,i.wg)(),(0,i.iD)(i.HY,null,[Me,(0,i._)("div",Ve,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.schedules,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.mal_id},[(0,i.Wm)(a,{schedule:e},null,8,["schedule"])])))),128))])],64)}const Ee=()=>{const e="https://api.jikan.moe/v4/schedules",t=(0,a.iH)([]);return ee(e).then((e=>t.value=e.data)),console.log(t),t};var Ye=Ee,qe="data:image/png;base64,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",Le="data:image/png;base64,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";const Je={class:"flex h-40 m-1.5 border-solid on-surface box-shadow rounded-lg"},Ke={class:"relative w-2/5"},Ze=["src"],Te={class:"absolute bottom-0 left-0"},Re={class:"flex bg-stone-700 opacity-80 p-0.5 m-0.5 rounded-lg h-6 text-color"},Ge=(0,i._)("div",{class:""},[(0,i._)("img",{src:qe,class:"h-5",title:"Popularity"})],-1),Xe={class:"text-xs p-0.5 mt-0.5 mr-4"},_e=(0,i._)("div",{class:""},[(0,i._)("img",{src:Le,class:"h-5",title:"Score"})],-1),$e={class:"text-xs p-0.5 mt-0.5 mr-0.5"},et={class:"w-9/12"},tt={class:"flex"},nt={class:"flex flex-col p-1.5 w-11/12"},ot={class:"text-left text-xs font-semibold"},it={class:"flex text-left text-xs text-slate-500"},lt=(0,i._)("div",{class:"font-bold mr-1"},"Schedule:",-1),st={class:"flex text-left text-xs text-slate-500"},at=(0,i._)("div",{class:"font-bold mr-1"},"Duration: ",-1),rt={class:"flex text-left text-xs text-slate-500"},At=(0,i._)("div",{class:"font-bold mr-1"},"Status: ",-1),dt={class:"text-green-600"},ct={class:"flex text-left text-xs text-slate-500"},ut=(0,i._)("div",{class:"font-bold mr-1"},"Rating: ",-1),gt={class:"text-left p-1.5 text-xs font-semibold"},mt={class:"text-left pl-1.5 text-xs"},vt=(0,i._)("div",{class:"sypnosis font-semibold"},"Syponosis",-1);function pt(e,t,n,o,s,a){return(0,i.wg)(),(0,i.iD)("div",Je,[(0,i._)("div",Ke,[(0,i._)("img",{class:"rounded-l-lg h-full w-full sched-img",src:n.schedule.images.jpg.image_url},null,8,Ze),(0,i._)("div",Te,[(0,i._)("div",Re,[Ge,(0,i._)("div",Xe,(0,l.zw)(n.schedule.popularity),1),_e,(0,i._)("div",$e,(0,l.zw)(o.score),1)])])]),(0,i._)("div",et,[(0,i._)("div",tt,[(0,i._)("div",nt,[(0,i._)("div",ot,(0,l.zw)(n.schedule.title),1),(0,i._)("div",it,[lt,(0,i.Uk)(" "+(0,l.zw)(o.broadcast),1)]),(0,i._)("div",st,[at,(0,i.Uk)((0,l.zw)(n.schedule.duration),1)]),(0,i._)("div",rt,[At,(0,i._)("div",dt,(0,l.zw)(n.schedule.status),1)]),(0,i._)("div",ct,[ut,(0,i.Uk)((0,l.zw)(n.schedule.rating),1)])]),(0,i._)("div",gt,(0,l.zw)(n.schedule.type),1)]),(0,i._)("div",mt,[vt,(0,i.Uk)(" "+(0,l.zw)(o.descriptionSnippet),1)])])])}var ft={props:["schedule"],setup(e){const t=(0,i.Fl)((()=>e.schedule.synopsis?e.schedule.synopsis.length<100?e.schedule.synopsis:e.schedule.synopsis.substring(0,100)+"...":"No Details")),n=(0,i.Fl)((()=>e.schedule.score?e.schedule.score:"N/A")),o=(0,i.Fl)((()=>e.schedule.broadcast.day?e.schedule.broadcast.day+" "+e.schedule.broadcast.time:"N/A"));return{descriptionSnippet:t,score:n,broadcast:o}}};const ht=(0,P.Z)(ft,[["render",pt]]);var wt=ht,xt={components:{ScheduleCard:wt},setup(){const e=(0,a.iH)(Ye());return console.log(e),{schedules:e}}};const bt=(0,P.Z)(xt,[["render",je]]);var Ct=bt,Bt={name:"HomeView",components:{RecommendationView:le,PopularView:Fe,ScheduleView:Ct}};const Ht=(0,P.Z)(Bt,[["render",j]]);var Dt=Ht;function kt(e,t,n,o,l,s){return(0,i.wg)(),(0,i.iD)("h1",null,"this is genre")}var Pt={};const Qt=(0,P.Z)(Pt,[["render",kt]]);var Nt=Qt;function St(e,t,n,o,l,s){return(0,i.wg)(),(0,i.iD)("h1",null,"this is list")}const It=()=>{const e="https://api.jikan.moe/v4/anime",t=(0,a.iH)([]);return ee(e).then((e=>t.value=e.data)),console.log(t),t};var Ut=It,yt={setup(){const e=(0,a.iH)(Ut());console.log(e),console.log("animeList")}};const Ot=(0,P.Z)(yt,[["render",St]]);var Wt=Ot;const zt=[{path:"/",name:"home",component:Dt},{path:"/genre",name:"genre",component:Nt},{path:"/list",name:"list",component:Wt},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],Ft=(0,V.p7)({history:(0,V.PO)("/anime-web-app/"),routes:zt});var Mt=Ft;(0,o.ri)(M).use(Mt).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,l){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],l=e[d][2];for(var a=!0,r=0;r<o.length;r++)(!1&l||s>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(a=!1,l<s&&(s=l));if(a){e.splice(d--,1);var A=i();void 0!==A&&(t=A)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[o,i,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.8c3e9ab6.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="animing:";n.l=function(o,i,l,s){if(e[o])e[o].push(i);else{var a,r;if(void 0!==l)for(var A=document.getElementsByTagName("script"),d=0;d<A.length;d++){var c=A[d];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+l){a=c;break}}a||(r=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+l),a.src=o),e[o]=[i];var u=function(t,n){a.onerror=a.onload=null,clearTimeout(g);var i=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),r&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/anime-web-app/"}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var l=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=l);var s=n.p+n.u(t),a=new Error,r=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var l=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+l+": "+s+")",a.name="ChunkLoadError",a.type=l,a.request=s,i[1](a)}};n.l(s,r,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,l,s=o[0],a=o[1],r=o[2],A=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(r)var d=r(n)}for(t&&t(o);A<s.length;A++)l=s[A],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(d)},o=self["webpackChunkaniming"]=self["webpackChunkaniming"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2022)}));o=n.O(o)})();
//# sourceMappingURL=app.88562087.js.map