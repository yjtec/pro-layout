import { isBrowser } from '../utils/utils';
var locales = {
  'zh-CN': {}
};

var getLanguage = function getLanguage() {
  // support ssr
  var lang = undefined;

  if (isBrowser()) {
    window.localStorage.getItem('umi_locale');
  }

  return lang || window.g_locale || navigator.language;
};

export { getLanguage };
export default (function (locale) {
  if (locale) {
    return locales[locale];
  }

  var gLocale = getLanguage();

  if (locales[gLocale]) {
    return locales[gLocale];
  }

  return locales['zh-CN'];
});