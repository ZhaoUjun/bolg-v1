(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './constant', 'log4js', 'express', './route', './utils/logger', 'body-parser', 'express-session', './utils/app', './utils/appMiddlewares'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./constant'), require('log4js'), require('express'), require('./route'), require('./utils/logger'), require('body-parser'), require('express-session'), require('./utils/app'), require('./utils/appMiddlewares'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constant, global.log4js, global.express, global.route, global.logger, global.bodyParser, global.expressSession, global.app, global.appMiddlewares);
        global.app = mod.exports;
    }
})(this, function (exports, _constant, _log4js, _express, _route, _logger, _bodyParser, _expressSession, _app, _appMiddlewares) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.appServer = undefined;

    var _log4js2 = _interopRequireDefault(_log4js);

    var _express2 = _interopRequireDefault(_express);

    var _route2 = _interopRequireDefault(_route);

    var _bodyParser2 = _interopRequireDefault(_bodyParser);

    var _expressSession2 = _interopRequireDefault(_expressSession);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    const app = (0, _express2.default)();

    app.use((0, _expressSession2.default)(_constant.SESSION_CONFIG));
    app.use(_bodyParser2.default.json()); // for parsing application/json
    app.use(_bodyParser2.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    // app.use(new multer()); // for parsing multipart/form-data
    app.use(_express2.default.static('static'));
    app.use(_log4js2.default.connectLogger(_logger.logger, { level: _log4js2.default.levels.INFO }));
    app.use(function (req, res, next) {
        // req.session.id=13213;
        next();
    });

    (0, _app.applyMiddleWares)(app, _appMiddlewares.allowCORS, _appMiddlewares.test1, _appMiddlewares.logError);

    (0, _app.applyRoute)(_route2.default, app);

    const appServer = exports.appServer = (0, _app.startServer)(_constant.serverConfig, app);
});