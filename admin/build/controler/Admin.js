(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './Base', './Home', 'core-decorators'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./Base'), require('./Home'), require('core-decorators'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Base, global.Home, global.coreDecorators);
        global.Admin = mod.exports;
    }
})(this, function (exports, _Base, _Home, _coreDecorators) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _Base2 = _interopRequireDefault(_Base);

    var _Home2 = _interopRequireDefault(_Home);

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

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

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

    const home = new _Home2.default();
    let AdminController = (_class = class AdminController extends _Base2.default {
        getTagName(tagId) {
            return this.query(`select id,name from tag where id="${tagId}" `);
        }

        getArticles(req, res, next) {
            return _asyncToGenerator(function* () {
                return home.getArticles(req, res, next);
            })();
        }

        addArticle(req, res, next) {
            var _this = this,
                _arguments = arguments;

            return _asyncToGenerator(function* () {
                try {
                    const { body: { tagIds } } = req;
                    const data = _extends({}, req.body, { tagIds: tagIds.toString() });
                    const result = yield _this.articleService.addArticle(data);
                    _this.handleSuccess(res)(result);
                } catch (err) {
                    console.log(err);
                    _this.handleError.apply(_this, [..._arguments, err]);
                }
            })();
        }

    }, (_applyDecoratedDescriptor(_class.prototype, 'getTagName', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'getTagName'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getArticles', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'getArticles'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addArticle', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'addArticle'), _class.prototype)), _class);
    exports.default = AdminController;
});