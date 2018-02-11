(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'mysql', './MysqlConfig', 'rxjs'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('mysql'), require('./MysqlConfig'), require('rxjs'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.mysql, global.MysqlConfig, global.rxjs);
        global.connect = mod.exports;
    }
})(this, function (exports, _mysql, _MysqlConfig, _rxjs) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.connection = undefined;
    exports.query$ = query$;
    exports.query = query;

    var _mysql2 = _interopRequireDefault(_mysql);

    var _MysqlConfig2 = _interopRequireDefault(_MysqlConfig);

    var _rxjs2 = _interopRequireDefault(_rxjs);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    console.log(_MysqlConfig2.default);

    const connection = exports.connection = _mysql2.default.createConnection(_MysqlConfig2.default.mysql);

    connection.connect();

    function _query(sql, values, cb) {
        return connection.query(sql, values, cb);
    }

    function query$(sql) {
        return _rxjs2.default.Observable.bindCallback(_query)(sql).map(res => {
            if (res[0]) {
                throw res[0];
            }
            return res[1];
        }).catch(err => {
            throw err;
        });
    }

    function query(sql) {
        return query$(sql).toPromise();
    }
});