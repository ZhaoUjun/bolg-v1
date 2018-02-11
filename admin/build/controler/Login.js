(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './Base', 'core-decorators', 'captchapng', 'ramda'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./Base'), require('core-decorators'), require('captchapng'), require('ramda'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Base, global.coreDecorators, global.captchapng, global.ramda);
        global.Login = mod.exports;
    }
})(this, function (exports, _Base, _coreDecorators, _captchapng, _ramda) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _Base2 = _interopRequireDefault(_Base);

    var _captchapng2 = _interopRequireDefault(_captchapng);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
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

    function objValNotEmpty(obj) {
        return (0, _ramda.values)(obj).every(v => (0, _ramda.isEmpty)(v));
    }

    let Login = (_class = class Login extends _Base2.default {
        handleLogin(req, res) {
            const { body, session } = req;
            const { account, password } = body;
            if (!this.bodyIsNotEmpty(body)) {
                return this.handleSuccess(res, false, 10, '账号、密码或者验证码不能为空!');
            }
            if (!session.code || body.captcha != session.code) {
                return this.handleSuccess(res, false, 10, '验证码错误');
            }
            this.query(`select * from author where account="${account}" and password="${password}"`).then(result => {
                if (result && result.length > 0) {
                    session.destroy();
                    this.handleSuccess(res, {
                        authorId: result[0].id,
                        authorName: result[0].name
                    });
                } else {
                    return this.handleSuccess(res, false, 10, '账号或者密码错误');
                }
            });
        }

        getCaptcha(req, res) {
            const code = parseInt(Math.random() * 9000 + 1000);
            req.session.code = code;
            req.session.save(function (err) {
                const p = new _captchapng2.default(80, 30, code); // width,height,numeric captcha 
                p.color(0, 0, 0, 0); // First color: background (red, green, blue, alpha) 
                p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha) 

                const img = p.getBase64();
                const imgbase64 = new Buffer(img, 'base64');
                res.header('Content-Type', 'image/png');
                res.send(imgbase64);
            });
        }
    }, (_applyDecoratedDescriptor(_class.prototype, 'handleLogin', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'handleLogin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getCaptcha', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'getCaptcha'), _class.prototype)), _class);
    exports.default = Login;
});