(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.index = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    const signalWhiteList = exports.signalWhiteList = ['/home'];

    const serverConfig = exports.serverConfig = {
        port: 3030,
        host: 'localhost'
    };

    const QUERY_CONFIG = exports.QUERY_CONFIG = {
        PAGE_SIZE: 10
    };

    const SESSION_CONFIG = exports.SESSION_CONFIG = {
        secret: 'blog',
        key: 'sid',
        // store:
        cookie: ('name', 'value', { path: '/login', httpOnly: true, secure: false, maxAge: 60000 }),
        //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
        resave: true,
        //强制“未初始化”的会话保存到存储。
        saveUninitialized: false
    };

    const TOKEN_CONFIG = exports.TOKEN_CONFIG = {
        APP_KEY: "ASDA43454asd545",
        SALT: "xiaoru"
    };
});