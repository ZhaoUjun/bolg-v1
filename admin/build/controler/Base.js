(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../db/connect', '../utils/decorator', '../service/ArticleService', 'ramda'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../db/connect'), require('../utils/decorator'), require('../service/ArticleService'), require('ramda'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.connect, global.decorator, global.ArticleService, global.ramda);
        global.Base = mod.exports;
    }
})(this, function (exports, _connect, _decorator, _ArticleService, _ramda) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _ArticleService2 = _interopRequireDefault(_ArticleService);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    var _desc, _value, _class;

    function objValNotEmpty(obj) {
        return (0, _ramda.values)(obj).every(v => (0, _ramda.isEmpty)(v));
    }
    let BaseController = (_class = class BaseController {

        constructor() {
            this.articleService = new _ArticleService2.default();
        }

        /**
         * 检查请求Body的值是否空
         * @param body
         */
        bodyIsNotEmpty(body) {
            return (0, _ramda.values)(body).every(v => !(0, _ramda.isEmpty)(v));
        }

        query$(sql) {
            return (0, _connect.query$)(sql);
        }

        query(sql) {
            return (0, _connect.query$)(sql).toPromise();
        }

        splitStrToAry(propName, data) {
            console.log(data);
            return data.map(item => {
                return _extends({}, item, { [propName]: item[propName] ? item[propName].split(',') : null });
            });
        }

        handleSuccess(res, data, code = 0, msg = '成功') {
            res.send({
                data,
                code,
                msg
            });
        }

        handleReqError(res, payload = {}) {
            res.send(payload);
        }

        handleError(req, res, next, err) {
            res.status(500);
            console.log(err);
            next({
                msg: '服务器斜壁了',
                code: 10
            });
        }

    }, (_applyDecoratedDescriptor(_class.prototype, 'splitStrToAry', [_decorator.withCurry], Object.getOwnPropertyDescriptor(_class.prototype, 'splitStrToAry'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleSuccess', [_decorator.withCurry], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSuccess'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleError', [_decorator.withCurry], Object.getOwnPropertyDescriptor(_class.prototype, 'handleError'), _class.prototype)), _class);
    exports.default = BaseController;
});