(function(t){function e(e){for(var a,r,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)r=i[l],o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-10826b73":"e143db18","chunk-2d0c1264":"8952fec7","chunk-03f4f957":"f08d5101","chunk-32b46aac":"7222dec2","chunk-2dfd826e":"488aa3ff","chunk-21531de4":"cd5de657","chunk-508c6c02":"5a2f6b91","chunk-3ef21038":"e40d2901","chunk-d8ee6d4a":"6a76d2e8"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-10826b73":1,"chunk-03f4f957":1,"chunk-32b46aac":1,"chunk-2dfd826e":1,"chunk-21531de4":1,"chunk-508c6c02":1,"chunk-3ef21038":1,"chunk-d8ee6d4a":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-10826b73":"4e2b740c","chunk-2d0c1264":"31d6cfe0","chunk-03f4f957":"59f3aeb5","chunk-32b46aac":"9b041a73","chunk-2dfd826e":"067ba8ad","chunk-21531de4":"865e0f6b","chunk-508c6c02":"567e2845","chunk-3ef21038":"7e43980c","chunk-d8ee6d4a":"5dc9fd41"}[t]+".css",r=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===a||u===r))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){i=l[c],u=i.getAttribute("data-href");if(u===a||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.request=a,n(o)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=c);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(t),u=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}o[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0273":function(t,e,n){},"04b5":function(t,e,n){"use strict";var a=n("0273"),r=n.n(a);r.a},2241:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("HeadCutout"),t._m(0),this.showTagLine?n("h2",{staticClass:"tagline"},[t._v("\n        Sharing energy data for the better\n    ")]):t._e()],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:n("5677")}})])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("img",{staticStyle:{width:"100vw !important","min-height":"60px"},attrs:{src:n("eab4")}}),a("div",{staticClass:"Navigation flex"},[t._m(0),t.isCookieSet?a("div",[a("Button",{staticClass:"login",attrs:{title:"logout"},nativeOn:{click:function(e){t.logout()}}})],1):a("div",[a("router-link",{attrs:{to:{name:"login"}}},[a("Button",{staticClass:"login",attrs:{title:"log in"}})],1)],1),a("div",{staticClass:"menu_button"},[a("div",{on:{click:function(e){t.openNav()}}})]),a("div",{ref:"menu",staticClass:"overlay"},[a("div",{staticClass:"overlay-header"},[a("img",{attrs:{src:n("91d3")},on:{click:function(e){t.closeNav()}}}),a("a",{staticClass:"closebtn",on:{click:function(e){t.closeNav()}}},[t._v("×")])]),t._m(1)])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"small-logo",attrs:{href:"/",target:"_top"}},[a("img",{attrs:{src:n("91d3")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overlay-content"},[a("nav",[a("a",{attrs:{href:"/"}},[t._v("Home")]),a("a",{attrs:{href:"/get-started"}},[t._v("Get started"),a("i",[t._v("!")])]),a("a",{attrs:{href:"/about"}},[t._v("About")]),a("a",{attrs:{href:"/faq"}},[t._v("FAQ")])]),a("div",{staticClass:"two-column-on-desktop"},[a("div",{staticClass:"heading"},[t._v("\n                        Follow us on »\n                    ")]),a("div",{staticClass:"social-icons flex center"},[a("a",{attrs:{href:"https://github.com/OEHU/",target:"_blank"}},[a("img",{attrs:{src:n("269c")}})]),a("a",{attrs:{href:"https://twitter.com/oehu_project",target:"_blank"}},[a("img",{attrs:{src:n("2544")}})]),a("a",{attrs:{href:"https://t.me/joinchat/A8b03hI61nBIbnVF18582A",target:"_blank"}},[a("img",{attrs:{src:n("5c05")}})]),a("a",{attrs:{href:"https://www.linkedin.com/company/11865484/admin/overview/",target:"_blank"}},[a("img",{attrs:{src:n("d389")}})])])])])}],i=(n("cadf"),n("551c"),n("097d"),n("90cd")),s={name:"HeadCutOUt",components:{Button:i["a"]},data:function(){return{isCookieSet:!1}},methods:{closeNav:function(){this.$refs.menu.style.display="none"},openNav:function(){this.$refs.menu.style.display="block"},logout:function(){this.$cookies.remove("devices"),"/"==this.$router.currentRoute.path?this.$router.go():this.$router.push("/")}},mounted:function(){this.$cookies.get("devices")&&(this.isCookieSet=!0)}},u=s,l=(n("4756"),n("2877")),d=Object(l["a"])(u,o,c,!1,null,"3a68cbbc",null);d.options.__file="HeadCutout.vue";var f=d.exports,h={name:"Logo",props:["showTagLine"],components:{HeadCutout:f}},p=h,m=(n("04b5"),Object(l["a"])(p,a,r,!1,null,"5f3db906",null));m.options.__file="Logo.vue";e["a"]=m.exports},2288:function(t,e,n){},2544:function(t,e,n){t.exports=n.p+"img/twitter.e4e34a3e.svg"},"269c":function(t,e,n){t.exports=n.p+"img/github.f6a3ef2d.svg"},2856:function(t,e,n){},4756:function(t,e,n){"use strict";var a=n("ea0a"),r=n.n(a);r.a},5677:function(t,e,n){t.exports=n.p+"img/Logo.02ab8cc8.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",class:{hasScrolled:this.scrolled},attrs:{id:"app"}},[n("router-view")],1)},o=[],c=n("2241"),i={data:function(){return{scrolled:!1}},methods:{handleScroll:function(){var t=document.getElementById("app").getBoundingClientRect();this.scrolled=Math.abs(t.top)>400}},components:{Logo:c["a"]},head:function(){return{title:"OEHU"}},created:function(){document.body.addEventListener("scroll",this.handleScroll)},destroyed:function(){document.body.removeEventListener("scroll",this.handleScroll)}},s=i,u=(n("5c0b"),n("2877")),l=Object(u["a"])(s,r,o,!1,null,null,null);l.options.__file="App.vue";var d=l.exports,f=n("8c4f");a["a"].use(f["a"]);var h=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-2dfd826e"),n.e("chunk-2d0c1264"),n.e("chunk-508c6c02")]).then(n.bind(null,"bb51"))}},{path:"/about",name:"about",component:function(){return Promise.all([n.e("chunk-2dfd826e"),n.e("chunk-21531de4")]).then(n.bind(null,"f820"))}},{path:"/faq",name:"faq",component:function(){return Promise.all([n.e("chunk-2dfd826e"),n.e("chunk-3ef21038")]).then(n.bind(null,"10c2"))}},{path:"/get-started",name:"get-started",component:function(){return n.e("chunk-10826b73").then(n.bind(null,"3bfc"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-d8ee6d4a").then(n.bind(null,"a55b"))}},{path:"/setup",name:"setup",component:function(){return Promise.all([n.e("chunk-2d0c1264"),n.e("chunk-03f4f957")]).then(n.bind(null,"da7d"))}},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([n.e("chunk-2d0c1264"),n.e("chunk-32b46aac")]).then(n.bind(null,"7277"))}}]}),p=n("bc3a"),m=n.n(p),v=n("a7fe"),g=n.n(v),b=n("2b27"),k=n.n(b),_=(n("9299"),n("2ee4")),y=n.n(_),w=(n("da93"),n("4309")),C=n.n(w),x=n("e11e"),E=n.n(x);n("6cc5");delete E.a.Icon.Default.prototype._getIconUrl,E.a.Icon.Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),a["a"].config.productionTip=!1,a["a"].use(y.a),a["a"].use(C.a),a["a"].use(g.a,m.a),a["a"].use(k.a),new a["a"]({router:h,render:function(t){return t(d)}}).$mount("#app")},"5c05":function(t,e,n){t.exports=n.p+"img/telegram.c171a233.svg"},"5c0b":function(t,e,n){"use strict";var a=n("2856"),r=n.n(a);r.a},"90cd":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",[t._v("\n    "+t._s(this.title)+"\n")])},r=[],o={name:"Button",props:["title"]},c=o,i=(n("e00f"),n("2877")),s=Object(i["a"])(c,a,r,!1,null,"83a35d5e",null);s.options.__file="Button.vue";e["a"]=s.exports},"91d3":function(t,e,n){t.exports=n.p+"img/oehu-logo-small.0d0171b5.svg"},9299:function(t,e,n){},d389:function(t,e,n){t.exports=n.p+"img/linkedin.c71e03e9.svg"},e00f:function(t,e,n){"use strict";var a=n("2288"),r=n.n(a);r.a},ea0a:function(t,e,n){},eab4:function(t,e,n){t.exports=n.p+"img/owl-header.5f9a1da7.svg"}});
//# sourceMappingURL=app.02c13ba3.js.map