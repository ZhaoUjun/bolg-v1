(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'express', '../controler/Home'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('express'), require('../controler/Home'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.express, global.Home);
        global.home = mod.exports;
    }
})(this, function (exports, _express, _Home) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _express2 = _interopRequireDefault(_express);

    var _Home2 = _interopRequireDefault(_Home);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    const router = _express2.default.Router();

    const {
        getArticles,
        addViewTimes
    } = new _Home2.default();

    // 该路由使用的中间件
    router.use(function timeLog(req, res, next) {
        next();
    });

    //获取文章列表
    router.get('/', getArticles);

    //增加文章阅读数
    router.get('/add-view-times', addViewTimes);

    exports.default = router;
});