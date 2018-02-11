(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../db/connect', '../utils/decorator', 'ramda', '../constant', '../db/SQL', 'mysql'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../db/connect'), require('../utils/decorator'), require('ramda'), require('../constant'), require('../db/SQL'), require('mysql'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.connect, global.decorator, global.ramda, global.constant, global.SQL, global.mysql);
        global.BaseService = mod.exports;
    }
})(this, function (exports, _connect, _decorator, _ramda, _constant, _SQL, _mysql) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

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

    function splitObjToQr(obj) {
        return Object.keys(obj).reduce((acc, key) => `${acc} ${key}='${obj[key]}'`, ' where ');
    }

    let BaseService = (_class = class BaseService {
        constructor() {
            this.PAGE_SIZE = _constant.QUERY_CONFIG.PAGE_SIZE;
            this.SQL = _SQL.SQL;
        }

        query$(sql) {
            return (0, _connect.query$)(sql);
        }

        query(sql) {
            return (0, _connect.query)(sql);
        }

        getRange(pageNum, pageSize) {
            return {
                from: pageSize ? pageSize * (pageNum - 1) : this.PAGE_SIZE * (pageNum - 1),
                to: pageSize ? pageSize * pageNum : this.PAGE_SIZE * pageNum
            };
        }

        joinConditions(condition, sql) {
            if ((0, _ramda.isEmpty)(condition)) {
                return sql;
            }
            const res = /where/.exec(sql);
            return res ? sql.replace('where', splitObjToQr(condition)) : sql + splitObjToQr(condition);
        }

        insertData(table, data) {
            if ((0, _ramda.isEmpty)(data)) {
                return Promise.reject('');
            }
            const sql = new _SQL.SQL({ table, data });
            return this.query(sql.insertSql);
        }

        splitStrToAry(propName, data) {
            return data.map(item => {
                return _extends({}, item, { [propName]: item[propName].split(',') });
            });
        }

        generateQueryIdSQL(id) {
            return `^id$|^$id,|,id$|,id,`.replace(/id/g, id);
        }
    }, (_applyDecoratedDescriptor(_class.prototype, 'joinConditions', [_decorator.withCurry], Object.getOwnPropertyDescriptor(_class.prototype, 'joinConditions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'splitStrToAry', [_decorator.withCurry], Object.getOwnPropertyDescriptor(_class.prototype, 'splitStrToAry'), _class.prototype)), _class);
    exports.default = BaseService;
});