(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../constant'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../constant'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constant);
        global.appMiddlewares = mod.exports;
    }
})(this, function (exports, _constant) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.logError = logError;
    exports.test1 = test1;
    exports.checkSignature = checkSignature;
    exports.allowCORS = allowCORS;
    exports.sessionCheck = sessionCheck;


    function isInWhiteList(white, req) {
        return _constant.signalWhiteList.filter(item => item === req.url).length > 0;
    }

    function logError(err, req, res, next) {
        res.status(err.status || 500); // 状态码默认为500（服务器内部错误）
        res.send({
            data: null,
            msg: err.msg || err || '服务器斜壁了',
            code: err.code || 10
        });
    }

    function test1(req, res, next) {
        next();
    }

    function checkSignature(req, res, next) {
        if (isInWhiteList(_constant.signalWhiteList, req)) {
            return next();
        }
        //check here
        next();
    }

    function allowCORS(req, res, next) {
        res.header("Access-Control-Allow-Credentials", true);
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With,Authorization,Sign,Time,Content-Type,APPId,AppKey");
        next();
    }

    function sessionCheck(req, res, next) {}
});