(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8ee6d4a"],{"109c":function(t,a,o){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"footer_closing"},[t._v("\n    OEHU is een initiatief van "),o("a",{attrs:{href:"http://blocklab.nl/",target:"_blank"}},[t._v("BlockLab")])])}],n={name:"FooterClosing",components:{}},i=n,r=(o("685b"),o("2877")),c=Object(r["a"])(i,e,s,!1,null,"74b57870",null);c.options.__file="FooterClosing.vue";a["a"]=c.exports},1399:function(t,a,o){"use strict";var e=o("fa0c"),s=o.n(e);s.a},"4c03":function(t,a,o){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer_container"},[e("div",{staticClass:"footer_logo"},[e("img",{attrs:{src:o("8518")},on:{click:function(a){t.goHome()}}})]),t._m(0)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"flex column-wrapper"},[e("a",{staticClass:"contact",attrs:{href:"mailto:contact@oehu.org"}}),e("div",{staticClass:"social"},[e("div",{staticClass:"social-icons flex center"},[e("span",{staticClass:"social-icon"},[e("a",{attrs:{href:"https://github.com/OEHU/",target:"_blank"}},[e("img",{attrs:{src:o("269c")}})])]),e("span",{staticClass:"social-icon"},[e("a",{attrs:{href:"https://twitter.com/oehu_project",target:"_blank"}},[e("img",{attrs:{src:o("2544")}})])]),e("span",{staticClass:"social-icon"},[e("a",{attrs:{href:"https://t.me/joinchat/A8b03hI61nBIbnVF18582A",target:"_blank"}},[e("img",{attrs:{src:o("5c05")}})])]),e("span",{staticClass:"social-icon"},[e("a",{attrs:{href:"https://www.linkedin.com/company/11865484/admin/overview/",target:"_blank"}},[e("img",{attrs:{src:o("d389")}})])])])]),e("div",{staticClass:"footer_menu"},[e("ul",[e("li",[e("a",{attrs:{href:"/"}},[t._v("Home")])]),e("li",[e("a",{attrs:{href:"/get-started"}},[t._v("Get started")])]),e("li",[e("a",{attrs:{href:"/about"}},[t._v("About")])]),e("li",[e("a",{attrs:{href:"/faq"}},[t._v("FAQ")])])])])])}],n={name:"Footer",components:{},methods:{goHome:function(){document.location="/"}}},i=n,r=(o("a840"),o("2877")),c=Object(r["a"])(i,e,s,!1,null,"46aa9009",null);c.options.__file="Footer.vue";a["a"]=c.exports},"685b":function(t,a,o){"use strict";var e=o("7503"),s=o.n(e);s.a},7503:function(t,a,o){},8518:function(t,a,o){t.exports=o.p+"img/oehu_footer.b5b635b3.svg"},a55b:function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("Logo"),o("div",{staticClass:"container"},[o("div",{staticClass:"form"},[o("form",{staticClass:"login-form"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),o("button",{attrs:{type:"button"},on:{click:t.login}},[t._v("login")])])])]),o("Footer"),o("FooterClosing")],1)},s=[],n=(o("cadf"),o("551c"),o("097d"),o("2241")),i=o("4c03"),r=o("109c"),c={name:"login",components:{Logo:n["a"],Footer:i["a"],FooterClosing:r["a"]},data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;this.axios.post("https://api.oehu.org/account/login",{email:this.email,password:this.password}).then(function(a){t.$cookies.set("devices",a.devices),t.$router.push("/dashboard")}).catch(function(t){console.log(t)})}}},l=c,u=(o("1399"),o("2877")),f=Object(u["a"])(l,e,s,!1,null,"777c2785",null);f.options.__file="Login.vue";a["default"]=f.exports},a840:function(t,a,o){"use strict";var e=o("d513"),s=o.n(e);s.a},d513:function(t,a,o){},fa0c:function(t,a,o){}}]);
//# sourceMappingURL=chunk-d8ee6d4a.6a76d2e8.js.map