(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'express'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('express'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.express);
        global.article = mod.exports;
    }
})(this, function (exports, _express) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _express2 = _interopRequireDefault(_express);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    const router = _express2.default.Router();

    // 该路由使用的中间件
    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now());
        next();
    });

    //获取文章详情
    router.get('/', function (req, res) {
        res.send('Birds home page');
    });

    // 新增文章
    router.post('/', function (req, res) {
        res.send('About birds');
    });

    // 更新文章
    router.put('/', function (req, res) {
        res.send('About birds');
    });

    exports.default = router;
});