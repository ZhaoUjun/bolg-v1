(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'optimist'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('optimist'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.optimist);
        global.MysqlConfig = mod.exports;
    }
})(this, function (exports, _optimist) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _optimist2 = _interopRequireDefault(_optimist);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    const { u, p } = _optimist2.default.argv; // const argv = require('optimist').argv;
    exports.default = {
        mysql: {
            host: '119.23.255.133',
            user: u.toString(),
            password: p.toString(),
            database: 'blog',
            port: '3306',
            dateStrings: true
        }
    };
});