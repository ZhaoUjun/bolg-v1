(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'express', '../controler/Login'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('express'), require('../controler/Login'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.express, global.Login);
        global.login = mod.exports;
    }
})(this, function (exports, _express, _Login) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _express2 = _interopRequireDefault(_express);

    var _Login2 = _interopRequireDefault(_Login);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    const router = _express2.default.Router();

    const {
        handleLogin,
        getCaptcha
    } = new _Login2.default();

    // 该路由使用的中间件
    router.use(function (req, res, next) {

        next();
    });

    //登陆
    router.post('/', handleLogin);

    router.get('/captcha.png', getCaptcha);

    exports.default = router;
});