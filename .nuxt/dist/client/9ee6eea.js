(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3],{347:function(t,e,r){"use strict";r.r(e);var n={name:"NotifiCation",propos:["message"]},o=r(57),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"notification is-danger"},[t._v("\n    "+t._s(t.message)+"\n")])}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,r){"use strict";r.r(e);var n=r(21),o=(r(58),{components:{Notification:r(347).default},data:function(){return{username:"",email:"",password:"",error:null}},methods:{register:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("register",{username:t.username,email:t.email,password:t.password});case 3:return e.next=5,t.$auth.loginWith("local",{data:{email:t.email,password:t.password}});case 5:t.$router.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.error=e.t0.response.data.message;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}}),l=r(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h2",{staticClass:"title has-text-centered"},[t._v("Register!")]),t._v(" "),t.error?e("Notification",{attrs:{message:t.error}}):t._e(),t._v(" "),e("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Username")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text",name:"username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",name:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",name:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"has-text-centered",staticStyle:{"margin-top":"20px"}},[t._v("\n          Already got an account? "),e("nuxt-link",{attrs:{to:"/login"}},[t._v("Login")])],1)],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"control"},[t("button",{staticClass:"button is-dark is-fullwidth",attrs:{type:"submit"}},[this._v("Register")])])}],!1,null,null,null);e.default=component.exports}}]);