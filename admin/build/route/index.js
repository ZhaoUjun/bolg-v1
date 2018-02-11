(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './article', './home', './admin', './login'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./article'), require('./home'), require('./admin'), require('./login'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.article, global.home, global.admin, global.login);
        global.index = mod.exports;
    }
})(this, function (exports, _article, _home, _admin, _login) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _article2 = _interopRequireDefault(_article);

    var _home2 = _interopRequireDefault(_home);

    var _admin2 = _interopRequireDefault(_admin);

    var _login2 = _interopRequireDefault(_login);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = {
        article: _article2.default,
        home: _home2.default,
        admin: _admin2.default,
        login: _login2.default
    };
});