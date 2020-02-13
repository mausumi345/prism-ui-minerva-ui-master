//
// Copyright (c) 2019 Nutanix Inc. All rights reserved.
//
// The i18n utils - Its a singleton.
//
import NtnxI18n from 'ntnx-i18n';
import en from './locales/en-us.json';

class I18n {

  /**
   * Constructor
   * @param {Object} i18nMap - map to use for the current locale
   */
  constructor() {
    // TODO: now only English is supported, later the locale passed in from Prism UI
    const locale = ['en', en];
    NtnxI18n.locale(locale[0], locale[1]);
  }

  /**
   * Given key to the i18nMap return the value.
   * @param {string} moduleName - the module name this key is under.
   * @param {string} key - lookup key.
   * @param {string} defaultValue - value to return if translation not found
   * @param {object} replaceValue - key-value pairs of the variable
   * @return {string} - translated string if found else return the original key
   */
  t(moduleName, key, defaultValue, replaceValue = {}) {
    return NtnxI18n.tPrism(moduleName, key, replaceValue, defaultValue);
  }

}

// Singleton
let _instance = null;
export default {
  getInstance() {
    if (_instance === null) {
      _instance = new I18n();
    }

    return _instance;
  }
};
