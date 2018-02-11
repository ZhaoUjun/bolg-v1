(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './Base', 'core-decorators', 'ramda', '../utils/common', 'joi'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./Base'), require('core-decorators'), require('ramda'), require('../utils/common'), require('joi'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Base, global.coreDecorators, global.ramda, global.common, global.joi);
        global.Home = mod.exports;
    }
})(this, function (exports, _Base, _coreDecorators, _ramda, _common, _joi) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _Base2 = _interopRequireDefault(_Base);

    var _joi2 = _interopRequireDefault(_joi);

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

    function _asyncIterator(iterable) {
        if (typeof Symbol === "function") {
            if (Symbol.asyncIterator) {
                var method = iterable[Symbol.asyncIterator];
                if (method != null) return method.call(iterable);
            }

            if (Symbol.iterator) {
                return iterable[Symbol.iterator]();
            }
        }

        throw new TypeError("Object is not async iterable");
    }

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

    function excludeProps(propName) {
        return (0, _ramda.pickBy)((v, k) => k !== propName);
    }

    function fixContent(article) {
        return (0, _ramda.merge)({ preview: (0, _common.subString)(150, article.content) }, article);
    }

    function takeProps(props, obj) {
        let newObj = {};
        let i = 0;
        while (i < props.length) {
            newObj[props[i]] = obj[props[i]];
            i++;
        }
        return newObj;
    }

    function dropProps(propName, arr) {
        return arr.map(item => {
            return (0, _ramda.compose)((0, _ramda.curry)(takeProps), (0, _ramda.filter)(key => key !== propName), _ramda.keys)(item)(item);
        });
    }

    function dropDetail(articles) {
        return dropProps('content', articles);
    }

    function log(data) {
        console.log(data);
        return data;
    }

    let HomeController = (_class = class HomeController extends _Base2.default {
        getTagName(tagId) {
            return this.query(`select id,name from tag where id="${tagId}" `);
        }

        getArticles(req, res, next) {
            var _this = this;

            return _asyncToGenerator(function* () {
                let articles;
                if (req.query.tagId) {
                    articles = yield _this.getArticlesByTagId(req.query.tagId, req.query.pageNo).then(_this.splitStrToAry('tagIds'));
                } else {
                    articles = yield _this.articleService.getArticles(req.query.pageNo).then(_this.splitStrToAry('tagIds'));
                }
                const result = articles.map((() => {
                    var _ref = _asyncToGenerator(function* (article) {
                        let tags = [];
                        if (article.tagIds) {
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = _asyncIterator(article.tagIds.map(function (id) {
                                    return _this.getTagName(id);
                                })), _step, _value2; _step = yield _iterator.next(), _iteratorNormalCompletion = _step.done, _value2 = yield _step.value, !_iteratorNormalCompletion; _iteratorNormalCompletion = true) {
                                    const result = _value2;

                                    tags.push(result[0] ? result[0] : []);
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        yield _iterator.return();
                                    }
                                } finally {
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                        }
                        return (0, _ramda.compose)(excludeProps('tagIds'), fixContent)(_extends({}, article, { tags }));
                    });

                    return function (_x) {
                        return _ref.apply(this, arguments);
                    };
                })());
                _this.handleSuccess(res)((yield Promise.all(result)));
            })();
        }

        getArticlesByTagId(id) {
            var _this2 = this;

            return _asyncToGenerator(function* () {
                return _this2.articleService.getArticlesByTagId(id);
            })();
        }

        addViewTimes(req, res) {
            var _this3 = this;

            return _asyncToGenerator(function* () {
                try {
                    const paramSchema = _joi2.default.object().keys({
                        articleId: _joi2.default.string().required()
                    });
                    const { error, value } = _joi2.default.validate(req.query, paramSchema);
                    if (error) throw '参数错误';
                    yield _this3.articleService.addViewTime(value.articleId);
                    _this3.handleSuccess(res)(true);
                } catch (err) {
                    _this3.handleReqError(res, {
                        msg: err,
                        code: 20,
                        data: null
                    });
                }
            })();
        }

    }, (_applyDecoratedDescriptor(_class.prototype, 'getTagName', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'getTagName'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getArticles', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'getArticles'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addViewTimes', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'addViewTimes'), _class.prototype)), _class);
    exports.default = HomeController;
});