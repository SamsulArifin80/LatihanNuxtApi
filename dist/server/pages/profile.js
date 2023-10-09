exports.ids = [10];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile.vue?vue&type=template&id=dafb055c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "section"
  }, [_vm._ssrNode("<div class=\"container\"><h2 class=\"title\">My Profile</h2> <div class=\"content\"><p><strong>Username:</strong>" + _vm._ssrEscape("\n        " + _vm._s(_vm.loggedInUser.username) + "\n      ") + "</p> <p><strong>Email:</strong>" + _vm._ssrEscape("\n        " + _vm._s(_vm.loggedInUser.email) + "\n      ") + "</p> <p><strong>Status:</strong>" + _vm._ssrEscape("\n        " + _vm._s(_vm.isAuthenticated) + "\n      ") + "</p></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/profile.vue?vue&type=template&id=dafb055c&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile.vue?vue&type=script&lang=js&

/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(['isAuthenticated', 'loggedInUser'])
  },
  middleware: 'auth'
});
// CONCATENATED MODULE: ./pages/profile.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4547d993"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=profile.js.map