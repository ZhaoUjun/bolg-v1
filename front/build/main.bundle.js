webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"common",
		"admin.module"
	],
	"app/login/login.module": [
		"./src/app/login/login.module.ts",
		"common",
		"login.module"
	],
	"app/main/main.module": [
		"./src/app/main/main.module.ts",
		"common",
		"main.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/HeaderInterceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__("./src/app/constant/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderInterceptor = (function () {
    function HeaderInterceptor() {
    }
    HeaderInterceptor.prototype.intercept = function (req, next) {
        var finalReq = req.clone({
            url: __WEBPACK_IMPORTED_MODULE_1__constant__["a" /* APP_CONFIG */].BASE_API_URL + req.url,
            withCredentials: true
        });
        if (req.url.startsWith('/admin')) {
            finalReq = generateHeaders(finalReq);
        }
        return next.handle(finalReq);
    };
    HeaderInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HeaderInterceptor);
    return HeaderInterceptor;
}());

function generateHeaders(req) {
    var headers = req.headers
        .set('AppId', 'appId')
        .set('AppKey', 'appKey')
        .set('Sign', 'sign')
        .set('Time', String(Date.now()));
    return req.clone({ headers: headers });
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '',
        loadChildren: 'app/main/main.module#MainModule'
    },
    { path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]]
    },
    { path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main{\n  max-width: 900px;\n  min-height: calc(100% - 100px);\n  margin: 0 auto;\n  background-color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: " \n    <router-outlet></router-outlet>\n  ",
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HeaderInterceptor__ = __webpack_require__("./src/app/HeaderInterceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__share_auth_service__ = __webpack_require__("./src/app/share/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__share_reducers__ = __webpack_require__("./src/app/share/reducers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__share_reducers__["b" /* reducers */], { initialState: __WEBPACK_IMPORTED_MODULE_9__share_reducers__["a" /* initState */] })
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_5__HeaderInterceptor__["a" /* HeaderInterceptor */],
                    multi: true,
                },
                __WEBPACK_IMPORTED_MODULE_8__share_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_7__auth_guard_service__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_auth_service__ = __webpack_require__("./src/app/share/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canLoad = function (route) {
        return this.checkLogin('/login');
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__share_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/constant/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
var APP_CONFIG = {
    BASE_API_URL: 'http://119.23.255.113:3030',
    // BASE_API_URL: 'http://127.0.0.1:3000',
    title: 'Dependency Injection'
};


/***/ }),

/***/ "./src/app/share/actions/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MainTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FetchArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SelectTag; });
/* unused harmony export ClearTag */
var MainTypes;
(function (MainTypes) {
    MainTypes["FETCH_ARTICLES"] = "[Article] fetch";
    MainTypes["SELECT_TAG"] = "[Article] select_tag";
    MainTypes["CLEAR_TAG"] = "[Article] clear_tag";
    MainTypes["CHANGE_PAGE"] = "[Article] change_page";
})(MainTypes || (MainTypes = {}));
var FetchArticle = (function () {
    function FetchArticle(articles) {
        this.articles = articles;
        this.type = MainTypes.FETCH_ARTICLES;
        this.payload = { articles: articles };
    }
    return FetchArticle;
}());

var ChangePage = (function () {
    function ChangePage(currentPage) {
        this.currentPage = currentPage;
        this.type = MainTypes.CHANGE_PAGE;
        this.payload = { currentPage: currentPage };
    }
    return ChangePage;
}());

var SelectTag = (function () {
    function SelectTag(tag) {
        this.tag = tag;
        this.type = MainTypes.SELECT_TAG;
        this.payload = { tag: tag, currentPage: 1 };
    }
    return SelectTag;
}());

var ClearTag = (function () {
    function ClearTag() {
        this.type = MainTypes.CLEAR_TAG;
        this.payload = { tag: null };
    }
    return ClearTag;
}());



/***/ }),

/***/ "./src/app/share/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LS_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LS_KEY = {
    loginInfo: "loginInfo"
};
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (loginInfo) {
        this.loginInfo = loginInfo;
        localStorage.setItem(LS_KEY.loginInfo, JSON.stringify(loginInfo));
    };
    AuthService.prototype.getLoginInfo = function () {
        return this.loginInfo || this.getLoginInfoFromLS();
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getLoginInfo() ? true : false;
    };
    AuthService.prototype.getLoginInfoFromLS = function () {
        console.log(localStorage.getItem(LS_KEY.loginInfo));
        return JSON.parse(localStorage.getItem(LS_KEY.loginInfo));
    };
    AuthService.prototype.removeLoginInfoFromLS = function () {
        localStorage.removeItem(LS_KEY.loginInfo);
    };
    AuthService.prototype.logout = function () {
        this.removeLoginInfoFromLS();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/share/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__("./src/app/share/reducers/main.ts");

var initState = {
    main: __WEBPACK_IMPORTED_MODULE_0__main__["a" /* initialState */]
};
var reducers = {
    main: __WEBPACK_IMPORTED_MODULE_0__main__["b" /* main */]
};


/***/ }),

/***/ "./src/app/share/reducers/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_main__ = __webpack_require__("./src/app/share/actions/main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__("./src/app/utils/index.ts");


var initialState = {
    currentPage: 1,
    articles: []
};
var main = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* createReducer */])(__WEBPACK_IMPORTED_MODULE_0__actions_main__["c" /* MainTypes */]);


/***/ }),

/***/ "./src/app/utils/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = joinQueryString;
/* harmony export (immutable) */ __webpack_exports__["a"] = createReducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * 拼接查询参数
 * @param url
 * @param queryParas
 * @return {string}
 */
function joinQueryString(url, queryParas) {
    var finalUrl;
    if (!url || typeof url != "string") {
        throw 'url must be sting and not empty!';
    }
    else if (typeof queryParas != 'object') {
        throw 'queryParas must be object!';
    }
    else if (!queryParas) {
        return url;
    }
    else {
        for (var _i = 0, _a = Object.keys(queryParas); _i < _a.length; _i++) {
            var key = _a[_i];
            if (queryParas[key]) {
                url += key + '=' + queryParas[key] + '&';
            }
        }
        if (url.endsWith('&')) {
            var final = url.split('');
            final.pop();
            finalUrl = final.join('');
        }
        return finalUrl;
    }
}
/**
 *
 * @param {Object} types
 * @param {{}} initial
 * @returns {(state: {}, action) => any}
 */
function createReducer(types, initial) {
    if (initial === void 0) { initial = {}; }
    var values = Object.keys(types).map(function (key) { return types[key]; });
    return function (state, action) {
        if (state === void 0) { state = initial; }
        return values
            .map(function (type) { return action.type === type ? action.payload : {}; })
            .reduce(function (pre, next) { return (__assign({}, pre, next)); }, state);
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map