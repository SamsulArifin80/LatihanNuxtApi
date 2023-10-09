exports.ids = [9,2];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NotifiCation.vue?vue&type=template&id=36d5c0ed&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "notification is-danger"
  }, [_vm._ssrNode(_vm._ssrEscape("\n    " + _vm._s(_vm.message) + "\n"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NotifiCation.vue?vue&type=template&id=36d5c0ed&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NotifiCation.vue?vue&type=script&lang=js&
/* harmony default export */ var NotifiCationvue_type_script_lang_js_ = ({
  name: 'NotifiCation',
  propos: ['message']
});
// CONCATENATED MODULE: ./components/NotifiCation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NotifiCationvue_type_script_lang_js_ = (NotifiCationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NotifiCation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NotifiCationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5ac7e7b3"
  
)

/* harmony default export */ var NotifiCation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=3e28242a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "section"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"columns\">", "</div>", [_vm._ssrNode("<div class=\"column is-4 is-offset-4\">", "</div>", [_vm._ssrNode("<h2 class=\"title has-text-centered\">Welcome back!</h2> "), _vm.error ? _c('Notification', {
    attrs: {
      "message": _vm.error
    }
  }) : _vm._e(), _vm._ssrNode(" <form method=\"post\"><div class=\"field\"><label class=\"label\">Email</label> <div class=\"control\"><input type=\"email\" name=\"email\"" + _vm._ssrAttr("value", _vm.email) + " class=\"input\"></div></div> <div class=\"field\"><label class=\"label\">Password</label> <div class=\"control\"><input type=\"password\" name=\"password\"" + _vm._ssrAttr("value", _vm.password) + " class=\"input\"></div></div> <div class=\"control\"><button type=\"submit\" class=\"button is-dark is-fullwidth\">Log In</button></div></form> "), _vm._ssrNode("<div class=\"has-text-centered\" style=\"margin-top: 20px\">", "</div>", [_vm._ssrNode("<p>", "</p>", [_vm._ssrNode("\n            Don't have an account? "), _c('nuxt-link', {
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("Register")])], 2)])], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=3e28242a&

// EXTERNAL MODULE: ./components/NotifiCation.vue + 4 modules
var NotifiCation = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&

/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  components: {
    Notification: NotifiCation["default"]
  },
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        });
        this.$router.push('/auth');
      } catch (e) {
        this.error = e.response.data.message;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3516abd3"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map