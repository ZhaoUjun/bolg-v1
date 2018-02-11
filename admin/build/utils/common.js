(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'ramda'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('ramda'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ramda);
        global.common = mod.exports;
    }
})(this, function (exports, _ramda) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.subString = subString;
    function subString(len = 0, str) {
        if ((0, _ramda.isEmpty)(str)) {
            return '';
        }
        const { length } = str;
        if (length < len) {
            return str;
        }
        return str.substr(0, len);
    }
});