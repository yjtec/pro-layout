"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getLanguage = void 0;

var _utils = require("../utils/utils");

var locales = {
  'zh-CN': {}
};

var getLanguage = function getLanguage() {
  // support ssr
  var lang = undefined;

  if ((0, _utils.isBrowser)()) {
    window.localStorage.getItem('umi_locale');
  }

  return lang || window.g_locale || navigator.language;
};

exports.getLanguage = getLanguage;

var _default = function _default(locale) {
  if (locale) {
    return locales[locale];
  }

  var gLocale = getLanguage();

  if (locales[gLocale]) {
    return locales[gLocale];
  }

  return locales['zh-CN'];
};

exports.default = _default;