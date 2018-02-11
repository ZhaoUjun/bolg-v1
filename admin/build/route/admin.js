(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'express', '../utils/appMiddlewares', '../controler/Admin'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('express'), require('../utils/appMiddlewares'), require('../controler/Admin'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.express, global.appMiddlewares, global.Admin);
        global.admin = mod.exports;
    }
})(this, function (exports, _express, _appMiddlewares, _Admin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _express2 = _interopRequireDefault(_express);

    var _Admin2 = _interopRequireDefault(_Admin);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    const { addArticle, getArticles, getCaptcha } = new _Admin2.default();

    const router = _express2.default.Router();

    // 该路由使用的中间件
    router.use(_appMiddlewares.checkSignature);

    //获取文章列表
    router.get('/article', getArticles);

    // 新增文章
    router.post('/article', addArticle);

    // 更新文章
    router.put('/article', function (req, res) {
        res.send('About birds');
    });

    exports.default = router;
});