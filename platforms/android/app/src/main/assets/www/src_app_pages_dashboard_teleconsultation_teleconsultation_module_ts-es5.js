(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_pages_dashboard_teleconsultation_teleconsultation_module_ts"], {
    /***/
    28199:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/dashboard/teleconsultation/teleconsultation-routing.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeleconsultationPageRoutingModule": function TeleconsultationPageRoutingModule() {
          return (
            /* binding */
            _TeleconsultationPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        redirectTo: 'search' // component: TeleconsultationPage

      }, {
        path: 'search-result',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_dashboard_teleconsultation_search-result_search-result_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./search-result/search-result.module */
          8981)).then(function (m) {
            return m.SearchResultPageModule;
          });
        }
      }, {
        path: 'doctor-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_dashboard_teleconsultation_doctor-details_doctor-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./doctor-details/doctor-details.module */
          54629)).then(function (m) {
            return m.DoctorDetailsPageModule;
          });
        }
      }, {
        path: 'appointment-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_dashboard_teleconsultation_appointment-details_appointment-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./appointment-details/appointment-details.module */
          70733)).then(function (m) {
            return m.AppointmentDetailsPageModule;
          });
        }
      }, {
        path: 'appointment-confirmation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_dashboard_teleconsultation_appointment-confirmation_appointment-confirmation_mo-1b0c8e").then(__webpack_require__.bind(__webpack_require__,
          /*! ./appointment-confirmation/appointment-confirmation.module */
          22790)).then(function (m) {
            return m.AppointmentConfirmationPageModule;
          });
        }
      }, {
        path: 'search',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_dashboard_teleconsultation_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./search/search.module */
          58871)).then(function (m) {
            return m.SearchPageModule;
          });
        }
      }];

      var _TeleconsultationPageRoutingModule = function _TeleconsultationPageRoutingModule() {
        _classCallCheck(this, _TeleconsultationPageRoutingModule);
      };

      _TeleconsultationPageRoutingModule.??fac = function TeleconsultationPageRoutingModule_Factory(t) {
        return new (t || _TeleconsultationPageRoutingModule)();
      };

      _TeleconsultationPageRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: _TeleconsultationPageRoutingModule
      });
      _TeleconsultationPageRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](_TeleconsultationPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    66947:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/dashboard/teleconsultation/teleconsultation.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeleconsultationPageModule": function TeleconsultationPageModule() {
          return (
            /* binding */
            _TeleconsultationPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _teleconsultation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./teleconsultation-routing.module */
      28199);
      /* harmony import */


      var _teleconsultation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./teleconsultation.page */
      41832);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TeleconsultationPageModule = function _TeleconsultationPageModule() {
        _classCallCheck(this, _TeleconsultationPageModule);
      };

      _TeleconsultationPageModule.??fac = function TeleconsultationPageModule_Factory(t) {
        return new (t || _TeleconsultationPageModule)();
      };

      _TeleconsultationPageModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _TeleconsultationPageModule
      });
      _TeleconsultationPageModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _teleconsultation_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeleconsultationPageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_TeleconsultationPageModule, {
          declarations: [_teleconsultation_page__WEBPACK_IMPORTED_MODULE_1__.TeleconsultationPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _teleconsultation_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeleconsultationPageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    41832:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/dashboard/teleconsultation/teleconsultation.page.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeleconsultationPage": function TeleconsultationPage() {
          return (
            /* binding */
            _TeleconsultationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _TeleconsultationPage = /*#__PURE__*/function () {
        function _TeleconsultationPage() {
          _classCallCheck(this, _TeleconsultationPage);
        }

        _createClass(_TeleconsultationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TeleconsultationPage;
      }();

      _TeleconsultationPage.??fac = function TeleconsultationPage_Factory(t) {
        return new (t || _TeleconsultationPage)();
      };

      _TeleconsultationPage.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _TeleconsultationPage,
        selectors: [["app-teleconsultation"]],
        decls: 133,
        vars: 2,
        consts: [[3, "translucent"], ["slot", "start"], ["slot", "secondary"], ["defaultHref", "/dashboard/home"], [3, "fullscreen"], [1, "container-fluid", "w-100", "h-100", "p-3"], [1, "d-block"], [1, "col-12"], ["position", "floating"], [1, "d-flex", "flex-wrap", "my-4", "justify-content-between"], [1, "col-lg-6", "col-md-6", "col-12", "pe-lg-2", "pe-md-2"], [1, "form-floating"], ["id", "servicesSelect", "aria-label", "", 1, "form-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["for", "servicesSelect"], [1, "col-lg-6", "col-md-6", "col-12", "ps-lg-2", "ps-md-2", "mt-lg-0", "mt-md-0", "mt-3"], ["id", "languageSelect", "aria-label", "", 1, "form-select"], ["for", "languageSelect"], ["id", "medicalSystemSelect", "aria-label", "", 1, "form-select"], ["for", "medicalSystemSelect"], ["id", "genderSelect", "aria-label", "", 1, "form-select"], ["for", "genderSelect"], ["id", "experienceSystemSelect", "aria-label", "", 1, "form-select"], ["value", "11"], ["for", "experienceSystemSelect"], ["position", "stacked"], ["type", "date", "min", "2022-07-14", "max", "2022-07-17"], ["type", "text"], [1, "position-absolute", "bottom-0", "col-12", "mb-lg-5"], [1, "col-12", "d-flex", "justify-content-center"], ["routerLink", "/dashboard/teleconsultation/search-result"]],
        template: function TeleconsultationPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "ion-menu-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Book a Teleconsultation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "ion-back-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ion-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Find your Doctor / health care provider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "ion-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Doctor's name / HPR Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "ion-input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Select Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Mental health care");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Dental care");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Laboratory and diagnostic care");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Substance abuse treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Preventative care");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Physical and occupational therapy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Nutritional support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Pharmaceutical care");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Transportation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Prenatal care");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Select Language");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "English");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Hindi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Marathi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Language");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Select Medical System");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Internal Medicines");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "External Medicines");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Medical System");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Select Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Male");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Female");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Select Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "greater than 10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "ion-label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "From Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "ion-input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "ion-label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "To Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "ion-input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Symptoms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "ion-input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "ion-button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Find Doctor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("translucent", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("fullscreen", true);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgSelectMultipleOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWxlY29uc3VsdGF0aW9uLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dashboard_teleconsultation_teleconsultation_module_ts-es5.js.map