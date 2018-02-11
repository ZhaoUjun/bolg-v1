(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./Home'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./Home'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.Home);
    global.HomeTest = mod.exports;
  }
})(this, function (_Home) {
  'use strict';

  var _Home2 = _interopRequireDefault(_Home);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const home = new _Home2.default();

  home.getArticles();
});