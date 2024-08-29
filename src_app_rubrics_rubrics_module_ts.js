(self["webpackChunkfll_tools"] = self["webpackChunkfll_tools"] || []).push([["src_app_rubrics_rubrics_module_ts"],{

/***/ 575:
/*!***************************************************!*\
  !*** ./src/app/rubrics/rubrics-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RubricsPageRoutingModule": () => (/* binding */ RubricsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _rubrics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rubrics.page */ 7696);




const routes = [
    {
        path: '',
        component: _rubrics_page__WEBPACK_IMPORTED_MODULE_0__.RubricsPage
    }
];
let RubricsPageRoutingModule = class RubricsPageRoutingModule {
};
RubricsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RubricsPageRoutingModule);



/***/ }),

/***/ 9933:
/*!*******************************************!*\
  !*** ./src/app/rubrics/rubrics.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RubricsPageModule": () => (/* binding */ RubricsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _rubrics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rubrics-routing.module */ 575);
/* harmony import */ var _rubrics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rubrics.page */ 7696);







let RubricsPageModule = class RubricsPageModule {
};
RubricsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rubrics_routing_module__WEBPACK_IMPORTED_MODULE_0__.RubricsPageRoutingModule
        ],
        declarations: [_rubrics_page__WEBPACK_IMPORTED_MODULE_1__.RubricsPage]
    })
], RubricsPageModule);



/***/ }),

/***/ 7696:
/*!*****************************************!*\
  !*** ./src/app/rubrics/rubrics.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RubricsPage": () => (/* binding */ RubricsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_rubrics_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rubrics.page.html */ 2462);
/* harmony import */ var _rubrics_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rubrics.page.scss */ 7249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let RubricsPage = class RubricsPage {
    constructor() { }
    ngOnInit() {
        eval(`

`);
    }
    ionViewWillEnter() {
        // if (document.getElementById("cvlist").innerHTML.trim() == "") {
        eval(`
        if (document.getElementById("loadedRB").value != "done") {
          //document.getElementById("loadedRB").value = "done"
          all_mission = []
          buffer = ""
          rbchildren = []
          rbchildrenEX = []
          ssecct = 0 
          load2020CV()
          load2020RP()
          load2020RD()

      displayRBSaves();
      try {
        var segment = document.getElementsByClassName("rbsegment")[0];
        var slides = document.getElementsByClassName("rbslides")[0];

        segment.addEventListener('ionChange', (ev) => onSegmentChange(ev,"rb"));
        slides.addEventListener('ionSlideDidChange', (ev) => onSlideDidChange(ev,"rb"));
      } catch { }
      var fileInputT = document.getElementById('fileInputTRB');

      fileInputT.addEventListener('change', function (e) {
        var file = fileInputT.files[0];
        var textType = /text.*/;
    
        var reader = new FileReader();
    
        reader.onload = function (e) {
          data = reader.result;
          //alert(data)
    
          loadScoreRB(data)
          loadScoreRB(data)
        }
    
        reader.readAsText(file);
    
      });
    
      var fileInputRB = document.getElementById('fileInputRB');

      fileInputRB.addEventListener('change', function (e) {
          var file = document.getElementById('fileInputRB').files[0];
          var textType = /text.*/;

          var reader = new FileReader();

          reader.onload = function (e) {
              data = reader.result;
              //alert(data)

              window.localStorage.DRRBSMscorer = data.split('__LABEL__')[0];
              window.localStorage.DRRBSM2scorer = data.split('__LABEL__')[1];

              maximumRB = window.localStorage.DRRBSMscorer.split('&&&').length - 1

              displayRBSaves();
          }

          reader.readAsText(file);

      });

      rubricCalc()
    }
    initpage();switchLanguage();

      `);
        // }
    }
};
RubricsPage.ctorParameters = () => [];
RubricsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-rubrics',
        template: _raw_loader_rubrics_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rubrics_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RubricsPage);



/***/ }),

/***/ 7249:
/*!*******************************************!*\
  !*** ./src/app/rubrics/rubrics.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJydWJyaWNzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2462:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rubrics/rubrics.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" style=\"display: block !important;\">\n      <ion-menu-toggle style=\"display: block !important;\">\n        <ion-button onclick=\"document.getElementById('mainNav').open()\" style=\"display: block !important;\">\n          <ion-icon slot=\"icon-only\" name=\"menu\" style=\"display: block !important;\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>FLL Judging Rubrics</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-footer>\n\n  <ion-toolbar color=\"\">\n    <ion-segment scrollable class=\"rbsegment\">\n      <ion-segment-button value=\"0\" checked>\n        <b id=\"cvpts2\" style=\"font-size:150%;color:red;display: none;\">0</b>\n        <!-- <ion-icon name=\"apps-outline\"></ion-icon> -->\n        <ion-label text-wrap>Core Values</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"1\">\n        <b id=\"ippts2\" style=\"font-size:150%;color:red\">0</b>\n\n        <!-- <ion-icon name=\"attach-outline\"></ion-icon> -->\n        <ion-label text-wrap>Innovation Project</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"2\">\n        <b id=\"rdpts2\" style=\"font-size:150%;color:red\">0</b>\n\n        <!-- <ion-icon name=\"file-tray-outline\"></ion-icon> -->\n        <ion-label text-wrap>Robot Design</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"3\">\n        <ion-icon name=\"save-outline\"></ion-icon>\n        <ion-label>Saves</ion-label>\n      </ion-segment-button>\n\n      <!-- <ion-segment-button value=\"3\">\n              <ion-icon name=\"code-working\"></ion-icon>\n              <ion-label>Query</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"4\">\n              <ion-icon name=\"open\"></ion-icon>\n              <ion-label>Open</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"5\">\n              <ion-icon name=\"search\"></ion-icon>\n              <ion-label>Search</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"6\">\n              <ion-icon name=\"create\"></ion-icon>\n              <ion-label>Write</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"7\">\n              <ion-icon name=\"book\"></ion-icon>\n              <ion-label>Read</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"8\">\n              <ion-icon name=\"trash\"></ion-icon>\n              <ion-label>Trash</ion-label>\n          </ion-segment-button> -->\n    </ion-segment>\n  </ion-toolbar>\n</ion-footer>\n<ion-content style=\"height: 100%;\">\n\n    <ion-slides style=\"height: 100%;\" class=\"rbslides\">\n      <ion-slide class=\"slide-1 \">\n        <ion-content class=\"has-tabs-top has-tabs has-header ion-padding\">\n          <div id=\"tabs-1\" class=\"swiper-no-swiping\">\n            <input type=\"hidden\" id=\"loadedRB\">\n\n            <form>\n\n              <div id=\"cvlist\" style=\"overflow-x: auto;\">\n                <script src=\"assets/corevalues.js\"></script>\n\n              </div>\n              <ion-button onclick=\"resetRB('CV');setTimeout(function()\n{\n  rubricCalc()\n\n}, 100);\" style=\"max-width: 500px\" class=\"no-print\" type=\"reset\">Reset</ion-button>\n            </form>\n\n          </div>\n        </ion-content>\n\n        <!-- </ion-content> -->\n        <!-- </ion-nav>\n   -->\n      </ion-slide>\n      <ion-slide class=\"slide-2\">\n        <ion-content class=\"has-tabs-top has-tabs has-header ion-padding\">\n\n          <div id=\"tabs-2\" class=\"swiper-no-swiping\">\n            <form>\n\n              <div id=\"projectlist\" style=\"overflow-x: auto;\">\n                <!-- style=\"max-width: 1024px;overflow-x: auto;\"> -->\n                <script src=\"assets/project.js\"></script>\n\n              </div>\n              <ion-button onclick=\"resetRB('IP');setTimeout(function()\n  {\n    rubricCalc()\n\n  }, 100);\" style=\"max-width: 500px\" class=\"no-print\" type=\"reset\">Reset</ion-button>\n            </form>\n\n          </div>\n        </ion-content>\n\n        <!-- </ion-content> -->\n        <!-- </ion-nav>\n   -->\n      </ion-slide>\n      <ion-slide class=\"slide-3\">\n        <ion-content class=\"has-tabs-top has-tabs has-header ion-padding\">\n\n          <div id=\"tabs-3\" class=\"swiper-no-swiping\">\n            <form>\n\n              <div id=\"robotlist\" style=\"overflow-x: auto;\">\n                <script src=\"assets/robot.js\"></script>\n\n              </div>\n              <ion-button onclick=\" resetRB('RD');   setTimeout(function()\n  {\n    rubricCalc()\n\n  }, 100);\" style=\"max-width: 500px\" class=\"no-print\" type=\"reset\">Reset</ion-button>\n            </form>\n\n\n          </div>\n        </ion-content>\n\n        <!-- </ion-content> -->\n        <!-- </ion-nav>\n   -->\n      </ion-slide>\n      <ion-slide class=\"slide-3\">\n        <ion-content class=\"has-tabs-top has-tabs has-header ion-padding\">\n\n          <div id=\"tabs-4\" class=\"swiper-no-swiping\">\n\n            <div style=\"max-width:500px\">\n              <h1>Saves</h1>\n\n              <ion-button type=\"ion-button\"\n                onclick=\"saverRB();maximumRB = window.localStorage.DRRBSMscorer.split('&&&').length-1\">Save\n                Rubric</ion-button>\n\n              <br>\n              <style>\n                input[type=number]::-webkit-outer-spin-ion-button,\n                input[type=number]::-webkit-inner-spin-ion-button {\n                  -webkit-appearance: none;\n                  margin: 0;\n                }\n\n                input[type=number] {\n                  -moz-appearance: textfield;\n                }\n              </style>\n\n              <script>\n                if (window.localStorage.DRRBSMscorer != undefined) {\n                  maximumRB = window.localStorage.DRRBSMscorer.split('&&&').length - 1;\n                  min = 1;\n                  start = 1;\n                } else {\n                  maximumRB = 0\n                  min = 0\n                  start = 0\n                }\n              </script>\n              <div class=\"ui-grid-b ui-responsive\">\n                <div style=\"width: 170\" class=\"ui-block-a\" align=\"left\">\n\n                  <div style=\"max-width: 300px; \" class=\"ui-block-b \">\n\n                  <ion-item>\n\n                    <ion-button style=\"text-align: left; \" id=\"loadText\"\n                        class=\"ui-shadow ui-btn ui-corner-all \" type=\"button \"\n                        onclick=\"loaderRB(document.getElementById( 'saveidRB').value) \">\n                        Load Rubric No.</ion-button>\n                    <ion-item no-lines>\n\n                        <!-- \n                  <div data-role=\"stepper \" data-direction=\"vertical \">\n\n                      <div style=\"max-width: 60px; \" class=\"button-wrap \"> -->\n                        <ion-button type=\"button\" value=\"- \"\n                            onclick=\"document.getElementById( 'saveidRB').value--; if (document.getElementById( 'saveidRB').value < 1) {document.getElementById( 'saveidRB').value=1 } \">\n                            <ion-icon name=\"remove-outline\"></ion-icon>\n                        </ion-button>\n                        <!-- </div>\n                  </div>\n              </div>\n              <div class=\"ui-block-c \" style=\"max-width: 60px; \">\n                  <div style=\"max-width: 60px; \" class=\"button-wrap \"> -->\n                        <ion-input style=\"height: 41px;text-align: center; \" type=\"number \"\n                            data-highlight=\"true \" data-theme=\"b \"\n                            onchange=\" if (this.value> maximumRB) {this.value = maximumRB}\"\n                            search=\"2\" class=\"quantity\" data-show-value=\"true\" name=\"saveidRB\"\n                            id=\"saveidRB\" value=\"1\" min=\"1\" step=\"1\"></ion-input>\n                        <!-- </div>\n              </div>\n              <div class=\"ui-block-d\" style=\"max-width: 60px; \">\n                  <div style=\"max-width: 60px; \" class=\"button-wrap\"> -->\n                        <ion-button type=\"button\" value=\"+\"\n                            onclick=\"document.getElementById('saveidRB').value++; if (document.getElementById('saveidRB').value > maximumRB) {document.getElementById('saveidRB').value = maximumRB}\">\n                            <ion-icon name=\"add-outline\"></ion-icon>\n                        </ion-button>\n                        <!-- </div>-->\n                    </ion-item>\n                </ion-item>\n\n</div>\n                  <!-- <div class=\"ion-button-wrap\">\n                    <ion-button style=\"text-align: left;\" id=\"loadText\" class=\"ui-shadow ui-btn ui-corner-all\"\n                      type=\"ion-button\" onclick=\"loaderRB(document.getElementById('saveidRB').value)\">Load\n                      Rubric No.</ion-button>\n                  </div> -->\n\n                </div>\n                <!--\n        <div style=\"max-width: 60px; \" class=\"ui-block-b\">\n\n          <div data-role=\"stepper\" data-direction=\"vertical\">\n\n            <div style=\"max-width: 60px; \" class=\"button-wrap\">\n              <input type=\"button\" value=\"-\"\n                onclick=\"document.getElementById('saveid').value--;  if (document.getElementById('saveid').value < 1) {document.getElementById('saveid').value = 1}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"ui-block-c\" style=\"max-width: 60px; \">\n          <div style=\"max-width: 60px;\" class=\"button-wrap\">\n            <input style=\"height: 41px\" type=\"number\" data-highlight=\"true\" data-theme=\"b\"\n              onchange=\" if (this.value > maximum) {this.value = maximum}\" search=\"2\" class=\"quantity\"\n              data-show-value=\"true\" name=\"saveid\" id=\"saveid\" value=\"1\" min=\"1\" step=\"1\">\n          </div>\n        </div>\n        <div class=\"ui-block-d\" style=\"max-width: 60px; \">\n          <div style=\"max-width: 60px; \" class=\"button-wrap\">\n            <input type=\"button\" value=\"+\"\n              onclick=\"document.getElementById('saveid').value++; if (document.getElementById('saveid').value > maximum) {document.getElementById('saveid').value = maximum}\">\n          </div>\n        </div>\n      -->\n                <!-- <input id=\"saveidRB\" type=\"text\" data-inline=\"true\" data-role=\"spinbox\"\n                  onchange=\"if (this.value > maximumRB) {this.value = maximumRB} \" min=\"1\" value=\"0\"> -->\n\n                <!--       </div>\n </div>-->\n\n              </div>\n              <ion-button text-wrap class=\"ui-ion-button ui-widget ui-corner-all\" type=\"ion-button\"\n                onclick=\"window.localStorage.DRRBSMscorer = '';window.localStorage.DRRBSM2scorer='';ionAlert('Deleted all Saves');displayRBSaves();\">\n                Delete all Saved Rubrics</ion-button>\n\n              <div>\n                <br><br>\n                <ion-button text-wrap class=\"ui-mini no-mobile\" onclick=\" document.getElementById('fileInputRB').click() ;\n         maximumRB = window.localStorage.DRRBSMscorer.split('&&&').length-1;\">Import Shared Rubrics</ion-button>\n\n                <input onchange=\"setTimeout(function(){\n   document.getElementById('saveidRB').max = window.localStorage.DRRBSMscorer.split('&&&').length-1;},300)\" style=\" position: fixed;\nbottom: -10000px;\nleft: -100000px;\" type=\"file\" accept=\".DRRB\" id=\"fileInputRB\">\n<br>\n\n                <ion-button text-wrap class=\"ui-mini no-mobile\"\n                  onclick=\"window.download(window.localStorage.DRRBSMscorer+'__LABEL__'+window.localStorage.DRRBSM2scorer, 'mysaves.DRRB','application/octet-stream')\">\n                  Share Rubrics</ion-button>\n\n                <script type=\"text/javascript\">\n\n\n\n                  var currentTime = new Date()\n                  var day = currentTime.getDate()\n                </script>\n\n                <h3>Past Rubrics:</h3>\n                <div id=\"pastRB\">\n\n                </div>\n                <br><br><br>\n                <div class=\"ui-corner-all ui-shadow-inset no-mobile\" style=\"border:1px solid black;max-width:500px;display:none;\">\n\n                  <div style=\"margin: 10px;\">\n\n                    <h3>Advanced</h3>\n                    <table style=\"padding-left: 10px; \">\n                      <tr>\n                        <td>\n                          <div style=\"max-width: 100px\">\n                            <text id=\"teamText\"> Team No.</text>:\n                            <ion-input value=\"0\" id=\"team_num\" style=\"border: 1px solid black;\"\n                                type=\"number\"></ion-input>\n                        </div>\n                        </td>\n                        <td colspan=\"2\">\n                          <div style=\"max-width: 500px\">\n                            <text id=\"nameText\">Your Name</text>: <ion-input value=\"\" id=\"name\" style=\"border: 1px solid black;\"\n                            type=\"text\"></ion-input>\n                          </div>\n                        </td>\n\n                        <!-- <tr>\n                        <td colspan=\"2\">\n                            <div style=\"max-width: 500px\">\n                                <text id=\"roleText\">Role</text>: \n                                <select data-role=\"none\" id=\"role\">\n                                    <option value=\"\"></option>\n                                    <option value=\"TM\">Team</option>\n                                    <option value=\"RF\">Referee</option>\n                                    <option value=\"HR\">Head Referee</option>\n                                </select>\n                            </div>\n                        </td>\n                    </tr> -->\n                    </table>\n\n                    <div style=\"max-width:500px\">\n                      <iframe style=\"display: none;\" id=\"saveframe\"></iframe>\n\n                      <ion-button text-wrap onclick=\"downloadScoreRB('CV');\" id=\"saverTscorer\" type=\"ion-button\">Download\n                        Current Core Values Rubric</ion-button>\n                      <ion-button text-wrap onclick=\"downloadScoreRB('IP');\" id=\"saverTscorer2\" type=\"ion-button\">Download\n                        Current Innovation Project Rubric</ion-button>\n                      <ion-button text-wrap onclick=\"downloadScoreRB('RD');\" id=\"saverTscorer3\" type=\"ion-button\">Download\n                        Current Robot Design Rubric</ion-button>\n<br><br>\n                      <text>Load Local Rubric:</text> <input onchange=\"\" type=\"file\" accept=\".TDRCV,.TDRIP,.TDRRD\"\n                        id=\"fileInputTRB\">\n                      <!-- position: fixed;\n                    bottom: -10000px;\n                    left: -100000px; -->\n                      <!-- <ion-button id=\"importText\" class=\"ui-mini no-mobile\" onclick=\" document.getElementById('fileInputT').click()\">Load Score</ion-button> -->\n\n                      \n\n                    </div>\n\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n\n\n\n\n          </div>\n\n        </ion-content>\n\n        <!-- </ion-content> -->\n        <!-- </ion-nav>\n   -->\n      </ion-slide>\n\n    </ion-slides>\n\n   \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_rubrics_rubrics_module_ts.js.map