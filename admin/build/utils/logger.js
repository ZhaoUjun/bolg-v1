(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'log4js', 'path', 'moment'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('log4js'), require('path'), require('moment'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.log4js, global.path, global.moment);
        global.logger = mod.exports;
    }
})(this, function (exports, _log4js, _path, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.logger = undefined;

    var _log4js2 = _interopRequireDefault(_log4js);

    var _path2 = _interopRequireDefault(_path);

    var _moment2 = _interopRequireDefault(_moment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    _log4js2.default.configure({
        appenders: {
            file: {
                type: 'file',
                filename: _path2.default.resolve(__dirname, `../../logs/${(0, _moment2.default)().format('YYYY-MM-DD')}.log`), //文件目录，当目录文件或文件夹不存在时，会自动创建
                maxLogSize: 10000, //文件最大存储空间，当文件内容超过文件存储空间会自动生成一个文件test.log.1的序列自增长的文件
                backups: 3, //当文件内容超过文件存储空间时，备份文件的数量
                encoding: 'utf-8', //default "utf-8"，文件的编码
                category: 'log_file',
                numBackups: 5, // keep five backup files
                compress: true // compress the backups
            },
            // dateFile: {
            //     type: 'dateFile',
            //     filename: 'more-important-things.log',
            //     pattern: 'yyyy-MM-dd-hh',
            //     compress: true
            // },
            out: { type: 'stdout' }
        },
        categories: {
            default: { appenders: ['file', 'out'], level: 'trace' }
        }
    });

    const logger = exports.logger = _log4js2.default.getLogger('log_file');
});