(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{346:function(t,e,n){"use strict";n.r(e);var r={name:"NotifiCation",propos:["message"]},o=n(57),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"notification is-danger"},[t._v("\n    "+t._s(t.message)+"\n")])}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,n){"use strict";n.r(e);var r=n(22),o=(n(58),{components:{Notification:n(346).default},data:function(){return{email:"",password:"",error:null}},methods:{login:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.loginWith("local",{data:{email:t.email,password:t.password}});case 3:t.$router.push("/auth"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t.error=e.t0.response.data.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}),l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h2",{staticClass:"title has-text-centered"},[t._v("Welcome back!")]),t._v(" "),t.error?e("Notification",{attrs:{message:t.error}}):t._e(),t._v(" "),e("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",name:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"has-text-centered",staticStyle:{"margin-top":"20px"}},[e("p",[t._v("\n            Don't have an account? "),e("nuxt-link",{attrs:{to:"/register"}},[t._v("Register")])],1)])],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"control"},[t("button",{staticClass:"button is-dark is-fullwidth",attrs:{type:"submit"}},[this._v("Log In")])])}],!1,null,null,null);e.default=component.exports}}]);