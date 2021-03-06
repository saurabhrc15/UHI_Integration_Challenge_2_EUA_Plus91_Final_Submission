(self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/home/home.module */ 9871)).then(m => m.HomePageModule)
    },
    {
        path: 'teleconsultation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_teleconsultation_teleconsultation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/teleconsultation/teleconsultation.module */ 66947)).then(m => m.TeleconsultationPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 71659)).then(m => m.DashboardPageModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/splash-screen */ 88592);
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/common/common.service */ 69763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);








const _c0 = function (a0) { return [a0]; };
function AppComponent_ion_menu_toggle_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "ion-menu-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](3, _c0, p_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", p_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](p_r1.title);
} }
class AppComponent {
    constructor(_router, _commonService) {
        this._router = _router;
        this._commonService = _commonService;
        this.appPages = [
            { title: 'Dashboard', url: '/dashboard/home', icon: './assets/home-blue.png' },
            { title: 'Teleconsultation', url: '/dashboard/teleconsultation', icon: './assets/teleconsultation-blue.png' },
            { title: 'Physical Consultation', url: '/dashboard/physical-consultation', icon: './assets/doctor-blue.png' },
            { title: 'Ambulance', url: '/dashboard/ambulance', icon: './assets/ambulance-blue.png' },
            { title: 'Lab Test', url: '/dashboard/lab-test', icon: './assets/lab-report-blue.png' },
            { title: 'Blood Bank', url: '/dashboard/blood-bank', icon: './assets/blood-bank-blue.png' },
            { title: 'Logout', url: '/login', icon: './assets/blood-bank-blue.png' }
        ];
        this.initializeApp();
    }
    initializeApp() {
        /* To make sure we provide the fastest app loading experience
           for our users, hide the splash screen automatically
           when the app is ready to be used:
    
            https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
        */
        _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_0__.SplashScreen.hide();
        this._commonService.SOCKET.on('on_search', (data) => {
            console.log("Socket Triggered: on_search", data);
            // this._commonService.transaction_id= data.context.transaction_id;
        });
        this._commonService.SOCKET.on('on_confirm', (data) => {
            console.log("Socket Triggered: on_confirm", data);
            this._commonService.searchResults.confirm = data;
        });
        this._commonService.SOCKET.on('on_init', (data) => {
            console.log("Socket Triggered: on_init", data);
            this._commonService.searchResults.order = data;
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 1, consts: [["contentId", "main-content"], ["id", "sidebar", "contentId", "main-content", "type", "overlay", "swipe-gesture", "false"], [1, "text-center", "p-0", "my-5"], ["src", "./assets/abdm.svg", "alt", "", 2, "width", "200px"], ["id", "inbox-list", 1, "p-0", "border-0"], ["auto-hide", "false", 4, "ngFor", "ngForOf"], [1, "text-center", "my-3"], ["src", "https://plus91.in/wp-content/uploads/2019/12/logo123.jpg", "alt", "", "width", "70px"], ["id", "main-content"], ["auto-hide", "false"], ["routerDirection", "root", "lines", "none", "detail", "false", "routerLinkActive", "selected", 3, "routerLink"], ["alt", "", "width", "20px", 1, "me-2", 3, "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "ion-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "ion-split-pane", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "ion-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "ion-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "ion-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, AppComponent_ion_menu_toggle_8_Template, 5, 5, "ion-menu-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "ion-router-outlet", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.appPages);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _interceptors_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors.service */ 9613);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/api/api.service */ 45146);
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/common/common.service */ 69763);
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/login/login.service */ 58762);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 33493);
/* harmony import */ var ngx_typeahead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-typeahead */ 46541);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);















class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ providers: [
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS, useClass: _interceptors_service__WEBPACK_IMPORTED_MODULE_0__.HttpConfigInterceptor, multi: true },
        _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService,
        _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService,
        _services_login_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService,
        _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__.Geolocation,
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__.InAppBrowser
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            ngx_typeahead__WEBPACK_IMPORTED_MODULE_13__.NgxTypeaheadModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        ngx_typeahead__WEBPACK_IMPORTED_MODULE_13__.NgxTypeaheadModule] }); })();


/***/ }),

/***/ 9613:
/*!*****************************************!*\
  !*** ./src/app/interceptors.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpConfigInterceptor": function() { return /* binding */ HttpConfigInterceptor; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



class HttpConfigInterceptor {
    intercept(request, next) {
        const token = sessionStorage.getItem('token');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
            }
            return event;
        }));
    }
}
HttpConfigInterceptor.??fac = function HttpConfigInterceptor_Factory(t) { return new (t || HttpConfigInterceptor)(); };
HttpConfigInterceptor.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: HttpConfigInterceptor, factory: HttpConfigInterceptor.??fac });


/***/ }),

/***/ 45146:
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": function() { return /* binding */ ApiService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);




class ApiService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
    }
    search(body) {
        return this.http.post(this.API + 'search', body);
    }
    get_onSearchData(body) {
        return this.http.post(this.API + 'get_onSearchData', body);
    }
    select(body) {
        return this.http.post(this.API + 'select', body);
    }
    get_onSelectData(body) {
        return this.http.post(this.API + 'get_onSelectData', body);
    }
    init(body) {
        return this.http.post(this.API + 'init', body);
    }
    get_onInitData(body) {
        return this.http.post(this.API + 'get_onInitData', body);
    }
    confirm(body) {
        return this.http.post(this.API + 'confirm', body);
    }
    get_onConfirmData(body) {
        return this.http.post(this.API + 'get_onConfirmData', body);
    }
}
ApiService.??fac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApiService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ApiService, factory: ApiService.??fac, providedIn: 'root' });


/***/ }),

/***/ 69763:
/*!***************************************************!*\
  !*** ./src/app/services/common/common.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": function() { return /* binding */ CommonService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 33493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);







class CommonService {
    constructor(_loadingController, _toastController, _geolocation) {
        // this.searchResults.fulfillments = {};
        // this.SOCKET.on('on_search', (data) => {
        //   console.log("Socket Triggered: on_search", data);
        //   this.contextData = data.context;
        //   console.log(this.contextData);
        // });
        // this.SOCKET.on('on_confirm', (data) => {
        //   this.searchResults.confirm = data;
        //   console.log("Socket Triggered: on_confirm", data);
        // });
        // this.SOCKET.on('on_init', (data) => {
        //   this.searchResults.order = data;
        //   console.log("Socket Triggered: on_init", data);
        // });
        // this.SOCKET.on('on_select', (data) => {
        //   console.log("Socket Triggered: on_select", data);
        // });
        // this.SOCKET.on('on_status', (data) => {
        //   console.log("Socket Triggered: on_status", data);
        // });
        this._loadingController = _loadingController;
        this._toastController = _toastController;
        this._geolocation = _geolocation;
        this.SOCKET = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.SOCKET;
        /* Global Variables */
        this.searchResults = {};
        // this.SOCKET.on('on_search', (data) => {
        //   console.log("Socket Triggered: on_search", data);
        //   this.transaction_id= data.context.transaction_id;
        // });
        // this.SOCKET.on('on_select', (data) => {
        //   console.log("Socket Triggered: on_select", data);
        // });
        // setInterval(()=>{
        //   this.getGeolocation();
        // },5000);
    }
    /* Loader Display Function */
    presentLoading(duration = 3000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this._loadingController.create({
                message: 'Please wait...',
                duration: duration
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    /* Toast Display Function */
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this._toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    getGeolocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this._geolocation.getCurrentPosition().then((resp) => {
                console.log("resp.coords.latitude", resp.coords.latitude);
                console.log("resp.coords.longitude", resp.coords.longitude);
            }).catch((error) => {
                console.log('Error getting location', error);
            });
        });
    }
}
CommonService.??fac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__.Geolocation)); };
CommonService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: CommonService, factory: CommonService.??fac, providedIn: 'root' });


/***/ }),

/***/ 58762:
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": function() { return /* binding */ LoginService; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class LoginService {
    constructor() {
        this.API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
    }
}
LoginService.??fac = function LoginService_Factory(t) { return new (t || LoginService)(); };
LoginService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: LoginService, factory: LoginService.??fac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ 43289);

const environment = {
    production: false,
    // API: 'https://c32f-2409-4042-4b00-ade3-b757-3bf1-ff61-d120.in.ngrok.io/api/v1/',
    API: 'http://uhi-eua-server.medixcel.in:3284/api/v1/',
    // SOCKET: io('http://uhi-eua-socket.medixcel.in:3285')
    SOCKET: (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)('https://f545-182-72-250-90.in.ngrok.io')
    // io.connect()
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 32404);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
// Call the element loader after the platform has been bootstrapped
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		79437,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		18025,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		64262,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		58206,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		24297,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map