(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_pages_dashboard_home_home_module_ts"], {
    /***/
    32242:
    /*!*************************************************************!*\
      !*** ./src/app/pages/dashboard/home/home-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      49226);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }];

      var _HomePageRoutingModule = function _HomePageRoutingModule() {
        _classCallCheck(this, _HomePageRoutingModule);
      };

      _HomePageRoutingModule.??fac = function HomePageRoutingModule_Factory(t) {
        return new (t || _HomePageRoutingModule)();
      };

      _HomePageRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _HomePageRoutingModule
      });
      _HomePageRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_HomePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    9871:
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/home/home.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home-routing.module */
      32242);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page */
      49226);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HomePageModule = function _HomePageModule() {
        _classCallCheck(this, _HomePageModule);
      };

      _HomePageModule.??fac = function HomePageModule_Factory(t) {
        return new (t || _HomePageModule)();
      };

      _HomePageModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _HomePageModule
      });
      _HomePageModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_HomePageModule, {
          declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    49226:
    /*!***************************************************!*\
      !*** ./src/app/pages/dashboard/home/home.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/api/api.service */
      45146);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function HomePage_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "ion-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "ion-label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "ion-input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "ion-item", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "ion-label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "ion-input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function HomePage_div_10_Template_ion_input_change_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r1.onStartDateChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "ion-item", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "ion-label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "End Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "ion-input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "ion-button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomePage_div_10_Template_ion_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r3.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "ion-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "hr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      } // import { NgxTypeaheadModule } from 'ngx-typeahead';
      // import { typeahead } from 'src/assets/typeahead/typeahead.bundle.js';
      // declare function typeahead(): any;


      var _HomePage = /*#__PURE__*/function () {
        function _HomePage(_router, _api, _commonService) {
          _classCallCheck(this, _HomePage);

          this._router = _router;
          this._api = _api;
          this._commonService = _commonService; // name = "";
          // title = "";
          // public url = "//suggestqueries.google.com/complete/search";
          // public params = {
          //   hl: "en",
          //   ds: "yt",
          //   xhr: "t",
          //   client: "youtube"
          // };
          // public query = "test";

          this.isSearchOpen = false;
          this.homeOption = [{
            title: 'Teleconsultation',
            url: '/dashboard/teleconsultation',
            icon: './assets/teleconsultation-blue.png'
          }, {
            title: 'Physical Consultation',
            url: '/dashboard/physical-consultation',
            icon: './assets/doctor-blue.png'
          }, {
            title: 'Ambulance',
            url: '/dashboard/ambulance',
            icon: './assets/ambulance-blue.png'
          }, {
            title: 'Lab Test',
            url: '/dashboard/lab-test',
            icon: './assets/lab-report-blue.png'
          }, {
            title: 'Blood Bank',
            url: '/dashboard/blood-bank',
            icon: './assets/blood-bank-blue.png'
          }];
        }

        _createClass(_HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {//     var app = angular.module('home', ['ui.bootstrap']);
            // app.controller('SearchController', function ($scope){                     
            // 	$scope.selected="";
            //     //  Set your object 
            // 	$scope.objects = [
            // 		{id:1, name : 'Dilip', type :{ title : 'a'}},
            // 		{id:2, name : 'Devendra', type :{ title : 'b'}},
            // 		{id:3, name : 'Jayesh', type :{ title : 'a'}},
            // 		{id:4, name : 'Jekin', type :{ title : 'c'}},
            // 		{id:5, name : 'Gaurang', type :{ title : 'a'}},
            // 		{id:6, name : 'Bhavin', type :{ title : 'e'}},
            // 	];
            // }); 
            // $('#the-basics .typeahead').typeahead({
            //   hint: true,
            //   highlight: true,
            //   minLength: 1
            // },
            // {
            //   name: 'states'
            // });

            /*var typeahead = jQuery.fn.typeahead.noConflict();
            jQuery.fn._typeahead = typeahead;
            
            $('.typeahead').typeahead({
              hint: true,
              highlight: true,
              minLength: 1
            },
            {
              name: 'cars'
            });
            $.typeahead({
              input: '.js-typeahead-country_v1',
              order: "desc",
              source: {
                data: [
                  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
                  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
                  "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
                  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma",
                  "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad",
                  "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the",
                  "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
                  "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
                  "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
                  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea",
                  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
                  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
                  "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos",
                  "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
                  "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
                  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco",
                  "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
                  "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
                  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
                  "Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone",
                  "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
                  "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
                  "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
                  "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
                  "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                ]
              },
              callback: {
                onInit: function (node) {
                  console.log('Typeahead Initiated on ' + node.selector);
                }
              }
            });*/
          } // handleResultSelected(result) {
          //   this.query = result;
          // }

        }, {
          key: "toggleSearchOption",
          value: function toggleSearchOption() {
            this.isSearchOpen = !this.isSearchOpen;
            setTimeout(function () {
              $("#start_date").attr("min", new Date().toISOString().split("T")[0] + "");
            }, 250);
          }
        }, {
          key: "search",
          value: function search() {
            var _this = this;

            var searchvalue = $("#searchInput").val();
            var start_date = $("#start_date").val();
            var end_date = $("#end_date").val();

            if (searchvalue == "") {
              this._commonService.presentToast("Enter Search Keywords");

              return;
            } else if (start_date == "") {
              this._commonService.presentToast("Select Start Date");

              return;
            } else if (end_date == "") {
              this._commonService.presentToast("Select End Date");

              return;
            }

            this._commonService.presentLoading();

            var param = {
              searchvalue: searchvalue,
              start_date: start_date,
              end_date: end_date,
              type: "Teleconsultation"
            };
            console.log(param);

            this._api.search(param).subscribe(function (res) {
              console.log("search response");
              console.log(res);

              if (res.success && res.body.message.ack.status == "ACK") {
                _this._commonService.transaction_id = res.transaction_id;

                _this._router.navigate(["/dashboard/search-results"]);
              }
            }, function (err) {
              if (err) {
                console.log(err);
              }
            });
          }
        }, {
          key: "onStartDateChange",
          value: function onStartDateChange() {
            var start_date = $("#start_date").val();
            $("#end_date").attr("min", start_date + "");
          }
        }]);

        return _HomePage;
      }();

      _HomePage.??fac = function HomePage_Factory(t) {
        return new (t || _HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService));
      };

      _HomePage.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _HomePage,
        selectors: [["app-home"]],
        decls: 59,
        vars: 3,
        consts: [[3, "translucent"], ["slot", "start"], ["slot", "end"], ["color", "primary", "slot", "start", "name", "search", 3, "click"], [3, "fullscreen"], [1, "container-fluid", "w-100", "h-100", "p-3"], ["class", "container-fluid d-block col-12 p-0 m-0 mb-3", 4, "ngIf"], [1, "d-block"], [1, "mb-3", "fs-16"], [1, "m-0", "p-0"], [1, "fs-12"], ["src", "assets/download.jpeg", "alt", "", 2, "width", "60px", "margin", "5px 10px 5px 0px", "border-radius", "100%"], [1, "d-flex", "flex-wrap", "justify-content-between"], ["fill", "", 2, "color", "#3880ff", "font-size", "12px"], ["color", "primary", "slot", "start", "name", "close"], ["color", "primary", "slot", "start", "name", "calendar"], ["color", "primary", "slot", "start", "name", "chatbubble-ellipses"], [1, "mt-4", 2, "background-color", "#adadad"], [1, "m-0", "p-0", "mb-4"], ["src", "assets/male-doctor.png", "alt", "", 2, "width", "60px", "margin", "5px 10px 5px 0px", "border-radius", "100%"], [1, "container-fluid", "d-block", "col-12", "p-0", "m-0", "mb-3"], ["position", "stacked"], ["id", "searchInput", "autocorrect", "on", "spellcheck", "true", "autocomplete", "on", "placeholder", "Eg. Cadiologist with 5Yr experience", "value", ""], [1, "d-flex"], [1, "col-6", "fs-12"], ["position", "floating"], ["id", "start_date", "type", "date", "min", "", "placeholder", "Start Date", "value", "", 3, "change"], ["id", "end_date", "type", "date", "min", "2022-07-17", "placeholder", "End Date", "value", ""], ["expand", "full", 1, "mt-2", "fs-12", 3, "click"], ["slot", "start", "name", "search"]],
        template: function HomePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "ion-menu-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomePage_Template_ion_icon_click_7_listener() {
              return ctx.toggleSearchOption();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "ion-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, HomePage_div_10_Template, 18, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Upcoming Appointments");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "ion-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](16, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23, "Tommorrow at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "ion-card-content", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "ion-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](27, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "ion-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](30, "ion-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "Reschedule");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "ion-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](33, "ion-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "Chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "hr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, "Appointment History");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](41, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](46, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](51, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](53, " Dr. Vijay Dandekar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](54, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](55, " 15 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](56, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](58, "15 Jul, 2022 at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("translucent", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("fullscreen", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.isSearchOpen);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dashboard_home_home_module_ts-es5.js.map