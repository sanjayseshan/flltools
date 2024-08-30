"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_explore_explore_module_ts"],{

/***/ 8938:
/*!***************************************************!*\
  !*** ./src/app/explore/explore-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplorePageRoutingModule": () => (/* binding */ ExplorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore.page */ 6044);




const routes = [
    {
        path: '',
        component: _explore_page__WEBPACK_IMPORTED_MODULE_0__.ExplorePage
    }
];
let ExplorePageRoutingModule = class ExplorePageRoutingModule {
};
ExplorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExplorePageRoutingModule);



/***/ }),

/***/ 7868:
/*!*******************************************!*\
  !*** ./src/app/explore/explore.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplorePageModule": () => (/* binding */ ExplorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _explore_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-routing.module */ 8938);
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore.page */ 6044);







let ExplorePageModule = class ExplorePageModule {
};
ExplorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _explore_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExplorePageRoutingModule
        ],
        declarations: [_explore_page__WEBPACK_IMPORTED_MODULE_1__.ExplorePage]
    })
], ExplorePageModule);



/***/ }),

/***/ 6044:
/*!*****************************************!*\
  !*** ./src/app/explore/explore.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplorePage": () => (/* binding */ ExplorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _explore_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore.page.html?ngResource */ 2542);
/* harmony import */ var _explore_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore.page.scss?ngResource */ 4289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ExplorePage = class ExplorePage {
    constructor() { }
    ngOnInit() {
        eval(`
  
    `);
    }
    ionViewWillEnter() {
        // if (document.getElementById("cvlist").innerHTML.trim() == "") {
        eval(`
      
      if (document.getElementById("loadedEX").value != "done") {
        //document.getElementById("loadedEX").value = "done"
        rbchildren = []
      rbchildrenEX = []
      ssecct = 0  

      all_mission = []
      buffer = ""
      rbchildren = []
      rbchildrenEX = []
      ssecct = 0 
    load2020EX()

    try {
      displayRBSavesEX();
      var segment = document.getElementsByClassName("rbsegment")[0];
      var slides = document.getElementsByClassName("rbslides")[0];

      segment.addEventListener('ionChange', (ev) => onSegmentChange(ev,"rb"));
      slides.addEventListener('ionSlideDidChange', (ev) => onSlideDidChange(ev,"rb"));
    } catch { }
    var fileInputT = document.getElementById('fileInputTRBEX');

    fileInputT.addEventListener('change', function (e) {
      var file = fileInputT.files[0];
      var textType = /text.*/;
  
      var reader = new FileReader();
  
      reader.onload = function (e) {
        data = reader.result;
        //alert(data)
  
        loadScoreRBEX(data)
        loadScoreRBEX(data)
      }
  
      reader.readAsText(file);
  
    });
  

    document.getElementById('fileInputRBEX').addEventListener('change', function (e) {
        var file = document.getElementById('fileInputRBEX').files[0];
        var textType = /text.*/;

        var reader = new FileReader();

        reader.onload = function (e) {
            data = reader.result;
            //alert(data)

            window.localStorage.DRERBSscorer = data.split('__LABEL__')[0];
            window.localStorage.DRERBS2scorer = data.split('__LABEL__')[1];
            //maximumRB = window.localStorage.DRERBSscorer.split('&&&').length - 1
            displayRBSavesEX();
        }

        reader.readAsText(file);

    });

    rubricCalcEX()
  }
  initpage();switchLanguage();

    `);
        // }
    }
};
ExplorePage.ctorParameters = () => [];
ExplorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-explore',
        template: _explore_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_explore_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExplorePage);



/***/ }),

/***/ 4289:
/*!******************************************************!*\
  !*** ./src/app/explore/explore.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBsb3JlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2542:
/*!******************************************************!*\
  !*** ./src/app/explore/explore.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" style=\"display: block !important;\">\n      <ion-menu-toggle style=\"display: block !important;\">\n        <ion-button onclick=\"document.getElementById('mainNav').open()\" style=\"display: block !important;\">\n          <ion-icon slot=\"icon-only\" name=\"menu\" style=\"display: block !important;\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>FLL Explore Review Sheet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content style=\"height: 100%;\"> -->\n\n<ion-content class=\"has-tabs-top has-tabs has-header ion-padding\">\n  <div id=\"tabs-1\">\n    <input type=\"hidden\" id=\"loadedEX\">\n\n    <form>\n\n      <div id=\"exlist\" style=\"overflow-x: auto;\">\n        <script src=\"assets/rubric.js\"></script>\n\n      </div>\n      <ion-button onclick=\"resetRB('EX');setTimeout(function()\n{\n  rubricCalcEX()\n\n}, 100);\" style=\"max-width: 500px\" class=\"no-print\" type=\"reset\">Reset</ion-button><br><br><br><br>\n    </form>\n\n  </div>\n  <!-- </ion-content> -->\n\n  <!-- </ion-content> -->\n  <!-- </ion-nav>\n   -->\n\n  <!-- <ion-content class=\"has-tabs-top has-tabs has-header ion-padding\"> -->\n\n  <div id=\"tabs-4\">\n\n    <div style=\"max-width:500px\">\n      <div class=\"ui-corner-all ui-shadow-inset no-mobile\" style=\"border:1px solid black;max-width:500px\">\n\n        <div style=\"margin: 10px;\">\n          <h3>Saves</h3>\n          <ion-button type=\"ion-button\"\n            onclick=\"saverRBEX();maximumRB = window.localStorage.DRERBSscorer.split('&&&').length-1\">Save\n            Rubric</ion-button>\n\n          <br>\n          <style>\n            input[type=number]::-webkit-outer-spin-ion-button,\n            input[type=number]::-webkit-inner-spin-ion-button {\n              -webkit-appearance: none;\n              margin: 0;\n            }\n\n            input[type=number] {\n              -moz-appearance: textfield;\n            }\n          </style>\n\n          <script>\n            if (window.localStorage.DRRBSMscorer != undefined) {\n              maximumRB = window.localStorage.DRRBSMscorer.split('&&&').length - 1;\n              min = 1;\n              start = 1;\n            } else {\n              maximumRB = 0\n              min = 0\n              start = 0\n            }\n          </script>\n          <div class=\"ui-grid-b ui-responsive\">\n            <div style=\"width: 170\" class=\"ui-block-a\" align=\"left\">\n\n              <div style=\"max-width: 300px; \" class=\"ui-block-b \">\n\n                <ion-item>\n\n                  <ion-button style=\"text-align: left; \" id=\"loadText\" class=\"ui-shadow ui-btn ui-corner-all \"\n                    type=\"button \" onclick=\"loaderRBEX(document.getElementById( 'saveidRBEX').value) \">\n                    Load Rubric No.</ion-button>\n                  <ion-item no-lines>\n\n                    <!-- \n                  <div data-role=\"stepper \" data-direction=\"vertical \">\n\n                      <div style=\"max-width: 60px; \" class=\"button-wrap \"> -->\n                    <ion-button type=\"button\" value=\"- \"\n                      onclick=\"document.getElementById( 'saveidRBEX').value--; if (document.getElementById( 'saveidRBEX').value < 1) {document.getElementById( 'saveidRBEX').value=1 } \">\n                      <ion-icon name=\"remove-outline\"></ion-icon>\n                    </ion-button>\n                    <!-- </div>\n                  </div>\n              </div>\n              <div class=\"ui-block-c \" style=\"max-width: 60px; \">\n                  <div style=\"max-width: 60px; \" class=\"button-wrap \"> -->\n                    <ion-input style=\"height: 41px;text-align: center; \" type=\"number \" data-highlight=\"true \"\n                      data-theme=\"b \" onchange=\" if (this.value> maximumRBEX) {this.value = maximumRBEX}\" search=\"2\"\n                      class=\"quantity\" data-show-value=\"true\" name=\"saveidRBEX\" id=\"saveidRBEX\" value=\"1\" min=\"1\"\n                      step=\"1\">\n                    </ion-input>\n                    <!-- </div>\n              </div>\n              <div class=\"ui-block-d\" style=\"max-width: 60px; \">\n                  <div style=\"max-width: 60px; \" class=\"button-wrap\"> -->\n                    <ion-button type=\"button\" value=\"+\"\n                      onclick=\"document.getElementById('saveidRBEX').value++; if (document.getElementById('saveidRBEX').value > maximumRB) {document.getElementById('saveidRBEX').value = maximumRB}\">\n                      <ion-icon name=\"add-outline\"></ion-icon>\n                    </ion-button>\n                    <!-- </div>-->\n                  </ion-item>\n                </ion-item>\n\n              </div>\n              <!-- <div class=\"ion-button-wrap\">\n                    <ion-button style=\"text-align: left;\" id=\"loadText\" class=\"ui-shadow ui-btn ui-corner-all\"\n                      type=\"ion-button\" onclick=\"loaderRB(document.getElementById('saveidRB').value)\">Load\n                      Rubric No.</ion-button>\n                  </div> -->\n\n            </div>\n            <!--\n        <div style=\"max-width: 60px; \" class=\"ui-block-b\">\n\n          <div data-role=\"stepper\" data-direction=\"vertical\">\n\n            <div style=\"max-width: 60px; \" class=\"button-wrap\">\n              <input type=\"button\" value=\"-\"\n                onclick=\"document.getElementById('saveid').value--;  if (document.getElementById('saveid').value < 1) {document.getElementById('saveid').value = 1}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"ui-block-c\" style=\"max-width: 60px; \">\n          <div style=\"max-width: 60px;\" class=\"button-wrap\">\n            <input style=\"height: 41px\" type=\"number\" data-highlight=\"true\" data-theme=\"b\"\n              onchange=\" if (this.value > maximum) {this.value = maximum}\" search=\"2\" class=\"quantity\"\n              data-show-value=\"true\" name=\"saveid\" id=\"saveid\" value=\"1\" min=\"1\" step=\"1\">\n          </div>\n        </div>\n        <div class=\"ui-block-d\" style=\"max-width: 60px; \">\n          <div style=\"max-width: 60px; \" class=\"button-wrap\">\n            <input type=\"button\" value=\"+\"\n              onclick=\"document.getElementById('saveid').value++; if (document.getElementById('saveid').value > maximum) {document.getElementById('saveid').value = maximum}\">\n          </div>\n        </div>\n      -->\n            <!-- <input id=\"saveidRB\" type=\"text\" data-inline=\"true\" data-role=\"spinbox\"\n                  onchange=\"if (this.value > maximumRB) {this.value = maximumRB} \" min=\"1\" value=\"0\"> -->\n\n            <!--       </div>\n </div>-->\n\n          </div>\n          <ion-button text-wrap class=\"ui-ion-button ui-widget ui-corner-all\" type=\"ion-button\"\n            onclick=\"window.localStorage.DRERBSscorer = '';window.localStorage.DRERBS2scorer='';ionAlert('Deleted all Saves');displayRBSavesEX();\">\n            Delete all Saved Rubrics</ion-button>\n\n          <div>\n            <br><br>\n            <ion-button text-wrap class=\"ui-mini no-mobile\" onclick=\" document.getElementById('fileInputRBEX').click() ;\n         maximumRBEX = window.localStorage.DRERBSscorer.split('&&&').length-1;\">Import Shared Rubrics</ion-button>\n\n            <input onchange=\"setTimeout(function(){\n   document.getElementById('saveidRBEX').max = window.localStorage.DRERBSscorer.split('&&&').length-1;},300)\" style=\" position: fixed;\nbottom: -10000px;\nleft: -100000px;\" type=\"file\" accept=\".DRERB\" id=\"fileInputRBEX\">\n            <br>\n\n            <ion-button text-wrap class=\"ui-mini no-mobile\"\n              onclick=\"window.download(window.localStorage.DRERBSscorer+'__LABEL__'+window.localStorage.DRERBS2scorer, 'mysaves.DRERB','application/octet-stream')\">\n              Share Rubrics</ion-button>\n\n            <script type=\"text/javascript\">\n\n\n\n              var currentTime = new Date()\n              var day = currentTime.getDate()\n            </script>\n\n            <h3>Past Reviewing Sheets</h3>\n            <div id=\"pastRBEX\">\n\n            </div>\n          </div>\n        </div>\n        </div>\n        <br><br><br>\n        <div class=\"ui-corner-all ui-shadow-inset no-mobile\" style=\"border:1px solid black;max-width:500px;display:none;\">\n\n          <div style=\"margin: 10px;\">\n\n            <h3>Advanced</h3>\n            <table style=\"padding-left: 10px; \">\n              <tr>\n                <td>\n                  <div style=\"max-width: 100px\">\n                    <text id=\"teamText\"> Team No.</text>:\n                    <ion-input value=\"0\" id=\"team_num\" style=\"border: 1px solid black;\" type=\"number\"></ion-input>\n                  </div>\n                </td>\n                <td colspan=\"2\">\n                  <div style=\"max-width: 500px\">\n                    <text id=\"nameText\">Your Name</text>: <ion-input value=\"\" id=\"name\" style=\"border: 1px solid black;\"\n                      type=\"text\"></ion-input>\n                  </div>\n                </td>\n\n                <!-- <tr>\n                        <td colspan=\"2\">\n                            <div style=\"max-width: 500px\">\n                                <text id=\"roleText\">Role</text>: \n                                <select data-role=\"none\" id=\"role\">\n                                    <option value=\"\"></option>\n                                    <option value=\"TM\">Team</option>\n                                    <option value=\"RF\">Referee</option>\n                                    <option value=\"HR\">Head Referee</option>\n                                </select>\n                            </div>\n                        </td>\n                    </tr> -->\n            </table>\n\n            <div style=\"max-width:500px\">\n              <iframe style=\"display: none;\" id=\"saveframe\"></iframe>\n\n              <ion-button text-wrap onclick=\"downloadScoreEX('EX');\" id=\"saverTscorer\" type=\"ion-button\">Download\n                Current Review Sheet</ion-button>\n\n              <br><br>\n              <text>Load Local Rubric:</text> <input onchange=\"\" type=\"file\" accept=\".TDRERB\" id=\"fileInputTRBEX\">\n              <!-- position: fixed;\n                    bottom: -10000px;\n                    left: -100000px; -->\n              <!-- <ion-button id=\"importText\" class=\"ui-mini no-mobile\" onclick=\" document.getElementById('fileInputT').click()\">Load Score</ion-button> -->\n\n\n\n            </div>\n\n          </div>\n\n      </div>\n    </div>\n\n\n\n\n\n  </div>\n\n</ion-content>\n\n<!-- </ion-content> -->\n<!-- </ion-nav>\n   -->\n\n\n\n<!-- </ion-content> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_explore_explore_module_ts.js.map