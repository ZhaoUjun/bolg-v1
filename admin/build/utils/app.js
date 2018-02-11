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
        global.app = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.applyRoute = applyRoute;
    exports.startServer = startServer;
    exports.applyMiddleWares = applyMiddleWares;
    function applyRoute(routes, app) {
        return Object.keys(routes).map(key => {
            app.use('/' + key, routes[key]);
        });
    }

    function startServer(config, app) {
        const server = app.listen(config, function () {
            const host = server.address().address;
            const port = server.address().port;
            console.log('Example app listening at http://%s:%s', host, port);
        });
        return server;
    }

    function applyMiddleWares(...args) {
        const [app, ...middleWares] = args;
        app.use.apply(app, middleWares);
    }
});