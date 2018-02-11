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
        global.decorator = mod.exports;
    }
})(this, function (exports, _ramda) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.withCurry = withCurry;

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

    /**
     * 类方法curry化，详见ramda.js
     * @param target
     * @param name
     * @param descriptor
     * @returns {{value: *}}
     */
    function withCurry(target, name, descriptor) {
        let value;
        if (typeof descriptor.value === 'function') {
            value = (0, _ramda.curry)(descriptor.value);
        }
        return _extends({}, descriptor, { value });
    }
});