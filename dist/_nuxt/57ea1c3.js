(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(21),o=n(0),c=(n(58),n(69));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var v={computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(c.b)(["isAuthenticated","loggedInUser"])),methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()}},middleware:"auth"},d=v,f=n(57),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar is-light"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand"},[e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/auth"}},[t._v("Nuxt Auth")]),t._v(" "),t._m(0)],1),t._v(" "),e("div",{staticClass:"navbar-menu"},[e("div",{staticClass:"navbar-end"},[t.isAuthenticated?e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link"},[t._v("\n                    "+t._s(t.loggedInUser.username)+"\n                   ")]),t._v(" "),e("div",{staticClass:"navbar-dropdown"},[e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/profile"}},[t._v("My Profile")]),t._v(" "),e("hr",{staticClass:"navbar-divider"}),t._v(" "),e("a",{staticClass:"navbar-item",on:{click:t.logout}},[t._v("Logout")])],1)]):[e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/register"}},[t._v("Register")]),t._v(" "),e("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/login"}},[t._v("Log In")])]],2)])])])}),[function(){var t=this,e=t._self._c;return e("button",{staticClass:"button navbar-burger"},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])}],!1,null,null,null);e.default=component.exports},249:function(t,e,n){"use strict";var r={components:{NaviBar:n(170).default}},o=n(57),component=Object(o.a)(r,(function(){var t=this._self._c;return t("div",[t("NaviBar"),this._v(" "),t("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NaviBar:n(170).default})},250:function(t,e,n){n(251),t.exports=n(252)},287:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.store,n=t.redirect;if(e.state.auth.loggedIn)return n("/auth")}},307:function(t,e,n){"use strict";n.r(e),n.d(e,"getters",(function(){return r}));var r={isAuthenticated:function(t){return t.auth.loggedIn},loggedInUser:function(t){return t.auth.user}}}},[[250,13,1,14]]]);