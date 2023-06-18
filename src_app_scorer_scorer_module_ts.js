(self["webpackChunkfll_tools"] = self["webpackChunkfll_tools"] || []).push([["src_app_scorer_scorer_module_ts"],{

/***/ 3973:
/*!*************************************************!*\
  !*** ./src/app/scorer/scorer-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScorerPageRoutingModule": () => (/* binding */ ScorerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _scorer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scorer.page */ 568);




const routes = [
    {
        path: '',
        component: _scorer_page__WEBPACK_IMPORTED_MODULE_0__.ScorerPage
    }
];
let ScorerPageRoutingModule = class ScorerPageRoutingModule {
};
ScorerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScorerPageRoutingModule);



/***/ }),

/***/ 956:
/*!*****************************************!*\
  !*** ./src/app/scorer/scorer.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScorerPageModule": () => (/* binding */ ScorerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _scorer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scorer-routing.module */ 3973);
/* harmony import */ var _scorer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scorer.page */ 568);







let ScorerPageModule = class ScorerPageModule {
};
ScorerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scorer_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScorerPageRoutingModule
        ],
        declarations: [_scorer_page__WEBPACK_IMPORTED_MODULE_1__.ScorerPage]
    })
], ScorerPageModule);



/***/ }),

/***/ 568:
/*!***************************************!*\
  !*** ./src/app/scorer/scorer.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScorerPage": () => (/* binding */ ScorerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_scorer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./scorer.page.html */ 9336);
/* harmony import */ var _scorer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scorer.page.scss */ 6383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ScorerPage = class ScorerPage {
    constructor() { }
    ngOnInit() {
        eval(`

if (document.getElementById("loadedSC").value != "done") {
  //document.getElementById("loadedSC").value = "done"
  }
`);
    }
    ionViewWillEnter() {
        eval(`
      
      if (document.getElementById("loadedSC").value != "done") {
        //document.getElementById("loadedSC").value = "done"
  
all_mission = []
buffer = ""
rbchildren = []
rbchildrenEX = []
ssecct = 0  

load2021();
        //
      
    try {
      var segment = document.getElementsByClassName("scorersegment")[0];
      var slides = document.getElementsByClassName("scorerslides")[0];

      segment.addEventListener('ionChange', (ev) => onSegmentChange(ev, "scorer"));
      slides.addEventListener('ionSlideDidChange', (ev) => onSlideDidChange(ev, "scorer"));
    } catch { }
    loadsave(blanksave)
    drawBasic();
    displaysaves(); 
    var fileInputT = document.getElementById('fileInputT');

    fileInputT.addEventListener('change', function (e) {
        var file = fileInputT.files[0];
        var textType = /text.*/;
  
        var reader = new FileReader();
  
        reader.onload = function (e) {
            data = reader.result;
            //alert(data)
  
            loadScore(data)
            loadScore(data)
        }
  
        reader.readAsText(file);
  
    });

    var fileInput = document.getElementById('fileInput');

      fileInput.addEventListener('change', function (e) {
        var file = fileInput.files[0];
        var textType = /text.*/;

        var reader = new FileReader();

        reader.onload = function (e) {
          data = reader.result;
          //alert(data)

          window.localStorage.DRCCSscorer = data.split(';')[0];
          window.localStorage.DRCCS1scorer = data.split(';')[1];
          maximum = window.localStorage.DRCCSscorer.split('/').length - 1
        }

        reader.readAsText(file);

      });
    }
    initpage();switchLanguage();
    
    `);
    }
};
ScorerPage.ctorParameters = () => [];
ScorerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-scorer',
        template: _raw_loader_scorer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_scorer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ScorerPage);



/***/ }),

/***/ 6383:
/*!*****************************************!*\
  !*** ./src/app/scorer/scorer.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY29yZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9336:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scorer/scorer.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-router-outlet id=\"menuContent\"></ion-router-outlet>\n\n\n<div class=\"ion-page\" id=\"mainContent\" main>\n    <ion-header>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\" style=\"display: block !important;\">\n                <ion-menu-toggle style=\"display: block !important;\">\n                    <ion-button onclick=\"document.getElementById('mainNav').open()\" style=\"display: block !important;\">\n                        <ion-icon slot=\"icon-only\" name=\"menu\" style=\"display: block !important;\"></ion-icon>\n                    </ion-button>\n                </ion-menu-toggle>\n            </ion-buttons>\n            <!-- </ion-buttons> -->\n            <ion-title id=\"title\">FLL MASTERPIECE Scorer (COMING SOON)</ion-title>\n        </ion-toolbar>\n        <!-- <ion-toolbar color=\"\"> -->\n        <!-- <ion-segment scrollable>\n              <ion-segment-button value=\"0\" checked>\n                  <ion-icon name=\"call\"></ion-icon>\n                  <ion-label>Call</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"1\">\n                  <ion-icon name=\"cloud-upload\"></ion-icon>\n                  <ion-label>Publish</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"2\">\n                  <ion-icon name=\"paper\"></ion-icon>\n                  <ion-label>Topic</ion-label>\n              </ion-segment-button> -->\n        <!-- <ion-segment-button value=\"3\">\n                  <ion-icon name=\"code-working\"></ion-icon>\n                  <ion-label>Query</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"4\">\n                  <ion-icon name=\"open\"></ion-icon>\n                  <ion-label>Open</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"5\">\n                  <ion-icon name=\"search\"></ion-icon>\n                  <ion-label>Search</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"6\">\n                  <ion-icon name=\"create\"></ion-icon>\n                  <ion-label>Write</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"7\">\n                  <ion-icon name=\"book\"></ion-icon>\n                  <ion-label>Read</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"8\">\n                  <ion-icon name=\"trash\"></ion-icon>\n                  <ion-label>Trash</ion-label>\n              </ion-segment-button> -->\n        <!-- </ion-segment> -->\n        <!-- </ion-toolbar> -->\n    </ion-header>\n\n    <ion-footer>\n\n        <ion-toolbar color=\"\">\n            <ion-segment scrollable class=\"scorersegment\">\n                <ion-segment-button value=\"0\" checked>\n                    <ion-icon name=\"clipboard-outline\"></ion-icon>\n                    <ion-label>Scorer</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"1\">\n                    <ion-icon name=\"alarm-outline\"></ion-icon>\n                    <ion-label>Timers</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"2\">\n                    <ion-icon name=\"save-outline\"></ion-icon>\n                    <ion-label>Saves</ion-label>\n                </ion-segment-button>\n                <ion-segment-button>\n\n                    <i id=\"allpoints\" style=\"font-weight: bold; font-size: 150%;color:green\">\n                        0</i>\n\n                    <ion-label style=\"font-weight: bold; color:green\" id=\"pointsTxt\">Points</ion-label>\n                </ion-segment-button>\n                <ion-segment-button\n                    onclick=\"document.getElementById('missions').reset();loadsave(blanksave);check_missions();\">\n                    <ion-button id=\"resetTxt\" value=\"Reset\" class=\"ui-mini no-print\"\n                        onclick=\"document.getElementById('missions').reset();loadsave(blanksave);check_missions();\">\n                        Reset</ion-button>\n                </ion-segment-button>\n                <!-- <ion-segment-button value=\"3\">\n                  <ion-icon name=\"code-working\"></ion-icon>\n                  <ion-label>Query</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"4\">\n                  <ion-icon name=\"open\"></ion-icon>\n                  <ion-label>Open</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"5\">\n                  <ion-icon name=\"search\"></ion-icon>\n                  <ion-label>Search</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"6\">\n                  <ion-icon name=\"create\"></ion-icon>\n                  <ion-label>Write</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"7\">\n                  <ion-icon name=\"book\"></ion-icon>\n                  <ion-label>Read</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"8\">\n                  <ion-icon name=\"trash\"></ion-icon>\n                  <ion-label>Trash</ion-label>\n              </ion-segment-button> -->\n            </ion-segment>\n        </ion-toolbar>\n    </ion-footer>\n    <!-- <ion-tabs class=\"tabs-icon-top tabs-color-active-positive\" style=\"position: relative !important;\"> -->\n\n\n\n    <ion-content class=\"\">\n        <div id=\"contentload\" style=\"display: inline;\">\n            <input type=\"hidden\" id=\"loadedSC\">\n\n            <ion-slides style=\"height: 100%;\" class=\"scorerslides\">\n\n                <!-- <ion-tab tab=\"tab-schedule\">\n                  <ion-nav> -->\n                <ion-slide class=\"slide-1 \">\n                    <ion-content class=\"has-tabs-top has-tabs has-header ion-padding\">\n                        <!-- <div data-role=\"tabs\"> -->\n                        <!-- <template id=\"tab1.html\"> -->\n\n                        <!-- <ons-page> -->\n                        <div id=\"tabs-1\" class=\"swiper-no-swiping\">\n\n                            <form id=\"missions\">\n                                <div id=\"missionlist\"></div>\n\n\n                            </form>\n\n\n\n                            <div class=\"only-print\"\n                                style=\"width:100%; background-color:#35782f; color: white; text-align: center;\">\n                                <i id=\"pointsTxt2\">Points</i><i> </i><i id=\"allpoints2\"> 0</i>\n                            </div>\n\n\n\n                        </div>\n                        <script>\n                            var content = document.querySelector('ion-content');\n                            content.scrollEvents = true;\n                            content.addEventListener('ionScrollStart', () => console.log('scroll start'));\n                            content.addEventListener('ionScroll', (ev) => console.log('scroll', ev.detail));\n                            content.addEventListener('ionScrollEnd', () => console.log('scroll end'));\n                        </script>\n\n\n\n\n\n                        <!--                 \n                          <div class=\"no-print no-tournament\" data-role=\"navbar\">\n                              <div data-hide-during-focus=\"\" data-tap-toggle=\"false\" data-role=\"header\" data-position=\"fixed\">\n      \n                                  <ul>\n                                      <li><a id=\"scorerTitle\" class=\"ui-btn-active\" href=\"#tabs-1\">Scorer</a></li>\n                                      <li><a id=\"timersTitle\" href=\"#tabs-2\">Timers</a></li>\n                                      <li><a id=\"savesTitle\" onclick=\"drawBasic()\" href=\"#tabs-3\">Saves</a></li>\n                                  </ul>\n                              </div>\n                          </div> -->\n\n\n                        <!-- </div> -->\n\n\n                        <noscript>Please enable JavaScript to continue using this application.</noscript>\n                        <div style=\"padding-left: 10px; display:none;\" class=\"no-print\">\n\n                            <text style=\"display:none\" id=\"tournamentText\">Tournament</text><br><br>\n\n                            <text id=\"revisionText\">Scorer </text> <text id=\"versionText\">v5.0.0</text>\n                            <!-- Scorer v3.5.0 -->\n                            <br>\n                            <br><text id=\"copyrightText\">Copyright</text><br>\n                            <br>\n                            <text id=\"translatorCredit\">Translated</text>\n                        </div>\n                        <br>\n                        <br>\n                        <br>\n\n                    </ion-content>\n\n                    <!-- </ion-content> -->\n                    <!-- </ion-nav>\n                   -->\n                </ion-slide>\n                <!-- </ion-tab> -->\n                <!-- <ion-tab tab=\"tab-speaker\">\n                  <ion-nav> -->\n                <ion-slide class=\"slide-2\">\n                    <ion-content class=\"has-tabs-top has-tabs has-header ion-padding\">\n\n                        <div style=\"padding-left: 10px; \" id=\"tabs-2\" class=\"swiper-no-swiping\">\n                            <p>\n                                <!--\t  Timer System 1.5.0 -->\n                            <div class=\"ui-mini\" id=\"Timer\">\n                                <text id=\"timerText\"> Timer: </text>\n                                <table id=\"timerChild\" class=\"timer\"\n                                    style=\"text-align:center!important;border-collapse: collapse;width:250px;max-width:250px;\">\n                                    <tr class=\"timer\" style=\" border-collapse: collapse;\">\n                                        <td rowspan=\"3\" class=\"timer\"\n                                            style=\"  border-collapse: collapse; vertical-align:middle; font-size: 200%;\">\n                                            <p id=\"countdownTime\" style=\"margin-left: 5px;margin-right: 5px;\">\n                                                2:30\n                                            </p>\n                                        </td>\n                                        <td class=\"timer\" style=\"border-collapse: collapse;width:95px;\">\n                                            <ion-button id=\"startText\" style=\"margin:0;width:100%;\" onclick=\"CDtimer()\">\n                                                Start</ion-button>\n                                        </td>\n                                    </tr>\n                                    <tr class=\"timer\" style=\"border-collapse: collapse;\">\n                                        <td class=\"timer\" style=\"border-collapse: collapse;width:95px;\">\n                                            <ion-button id=\"resetText\" style=\"margin:0;width:100%;\"\n                                                onclick=\"document.getElementById('countdownTime').textContent = '2:30'; CDseconds = 30; CDminutes = 2; clearTimeout(CDinterval); CDinterval = null;\">\n                                                Reset</ion-button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"timer\" style=\"border-collapse: collapse;width:95px;\">\n                                            <ion-button style=\"margin:0;width:100%;\" id=\"stopText\"\n                                                onclick=\"clearTimeout(CDinterval); CDinterval = null;\">Stop\n                                            </ion-button>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </div>\n                            <br><br>\n\n                            <div class=\"ui-mini\" id=\"Stopwatch\">\n                                <text id=\"stopwatchText\"> Stopwatch: </text>\n                                <table class=\"timer\" id=\"stopwatchChild\"\n                                    style=\"text-align:center!important;border-collapse: collapse;width:250px;max-width:250px;\">\n                                    <tr class=\"timer\" style=\"border-collapse: collapse;\">\n                                        <td class=\"timer\" rowspan=\"3\"\n                                            style=\"border-collapse: collapse; vertical-align:middle; font-size: 200%\">\n                                            <p id=\"stopwatchTime\" style=\"margin-left: 5px;margin-right: 5px;\">\n                                                00:00.0\n                                            </p>\n                                        </td>\n                                        <td class=\"timer\" style=\"border-collapse: collapse;width:95px;\">\n                                            <ion-button style=\"margin:0;width:100%;\" id=\"startSW\" onclick=\"SWtimer();\">\n                                                Start\n                                            </ion-button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"timer\" style=\"border-collapse: collapse;width:95px;\">\n                                            <ion-button style=\"margin:0;width:100%;\" id=\"resetSW\"\n                                                onclick=\"document.getElementById('stopwatchTime').textContent = '00:00.0'; SWseconds = 0; SWminutes = 0; SWtenths=0; clearTimeout(SWinterval); SWinterval = null;\">\n                                                Reset</ion-button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"timer\" style=\"border-collapse: collapse;width:95px;\">\n                                            <ion-button style=\"margin:0;width:100%;\" id=\"stopSW\"\n                                                onclick=\"clearTimeout(SWinterval); SWinterval = null;\">Stop\n                                            </ion-button>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </div>\n                        </div>\n\n                    </ion-content>\n                    <!-- </ion-nav>\n              </ion-tab> -->\n                </ion-slide>\n                <ion-slide class=\"slide-3\">\n                    <!-- <ion-tab tab=\"tab-map\" >\n                  <ion-nav> -->\n                    <ion-content class=\"has-tabs-top has-tabs has-header ion-padding\">\n\n                        <div style=\"padding-left: 10px; \" id=\"tabs-3\" class=\"swiper-no-swiping\">\n\n                            <!-- <a href=\"#\" data-rel=\"back\" data-role=\"button\" data-theme=\"b\" data-icon=\"delete\" data-iconpos=\"notext\"\n              class=\"ui-btn-right\">Close</a> -->\n                            <div id=\"saveContent\" style=\"max-width: 600px;\">\n\n                                <h1 id=\"savesTitle\">Saves</h1>\n\n\n                                <br><br>\n\n                                <!--\t      Google Saving System v1.0 -->\n\n                                <!-- Legacy Local Saver -->\n                                <div id=\"legacy\" style=\"max-width:100%; \">\n\n                                    <ion-button type=\"button\" id=\"saveText\"\n                                        onclick=\"sharksave=0; saver();displaysaves(); drawBasic(); maximum=window.localStorage.DRCCSscorer.split( '/').length-1 \">\n                                        Save\n                                        Score</ion-button>\n\n                                    <br>\n\n\n                                    <!-- <div class=\"ui-grid-b ui-responsive \">\n                                      <div style=\"width: 170\" class=\"ui-block-a\" align=\"left \">\n                                          <div class=\"button-wrap\">\n                                             \n                                          </div>\n                                      </div> -->\n                                    <div style=\"max-width: 300px; \" class=\"ui-block-b \">\n                                        <ion-item>\n\n                                            <ion-button style=\"text-align: left; \" id=\"loadText\"\n                                                class=\"ui-shadow ui-btn ui-corner-all \" type=\"button \"\n                                                onclick=\"loader(document.getElementById( 'saveid').value) \">\n                                                Load Save</ion-button>\n                                            <ion-item no-lines>\n\n                                                <!-- \n                                          <div data-role=\"stepper \" data-direction=\"vertical \">\n\n                                              <div style=\"max-width: 60px; \" class=\"button-wrap \"> -->\n                                                <ion-button type=\"button\" value=\"- \"\n                                                    onclick=\"document.getElementById( 'saveid').value--; if (document.getElementById( 'saveid').value < 1) {document.getElementById( 'saveid').value=1 } \">\n                                                    <ion-icon name=\"remove-outline\"></ion-icon>\n                                                </ion-button>\n                                                <!-- </div>\n                                          </div>\n                                      </div>\n                                      <div class=\"ui-block-c \" style=\"max-width: 60px; \">\n                                          <div style=\"max-width: 60px; \" class=\"button-wrap \"> -->\n                                                <ion-input style=\"height: 41px;text-align: center; \" type=\"number \"\n                                                    data-highlight=\"true \" data-theme=\"b \"\n                                                    onchange=\" if (this.value> maximum) {this.value = maximum}\"\n                                                    search=\"2\" class=\"quantity\" data-show-value=\"true\" name=\"saveid\"\n                                                    id=\"saveid\" value=\"1\" min=\"1\" step=\"1\"></ion-input>\n                                                <!-- </div>\n                                      </div>\n                                      <div class=\"ui-block-d\" style=\"max-width: 60px; \">\n                                          <div style=\"max-width: 60px; \" class=\"button-wrap\"> -->\n                                                <ion-button type=\"button\" value=\"+\"\n                                                    onclick=\"document.getElementById('saveid').value++; if (document.getElementById('saveid').value > maximum) {document.getElementById('saveid').value = maximum}\">\n                                                    <ion-icon name=\"add-outline\"></ion-icon>\n                                                </ion-button>\n                                                <!-- </div>-->\n                                            </ion-item>\n                                        </ion-item>\n                                    </div>\n\n\n                                    <!-- <input id=\"saveid\" type=\"text\" data-inline=\"true\"\n                                              data-role=\"spinbox\"\n                                              onchange=\"if (this.value > maximum) {this.value = maximum} \"\n                                              min=\"1\" value=\"0\"> -->\n\n                                    <!--       </div>\n           </div>-->\n\n                                </div>\n                                <ion-button text-wrap id=\"deleteText\" class=\"ui-button ui-widget ui-corner-all\" type=\"button\"\n                                    onclick=\"window.localStorage.DRCCSscorer = ''; window.localStorage.DRCCS1scorer = ''; displaysaves(); drawBasic(); ionAlert(doneText)\">\n                                    Delete All Saves</ion-button>\n\n                                <div>\n                                    <div id=\"containerHC\"\n                                        style=\"height: 200px; margin: 0 auto; min-width:200px;  width:100%; max-width: 500px;\">\n                                    </div>\n                                    <div id=\"saves\"></div>\n\n                                    <ion-button id=\"importText\" class=\"ui-mini no-mobile\" onclick=\" document.getElementById('fileInput').click() ;\n                               maximum = window.localStorage.DRCCSscorer.split('/').length-1;\">Import Shared Scores</ion-button>\n\n                                    <input onchange=\"setTimeout(function(){\n             displaysaves();\n             drawBasic();\n             document.getElementById('saveid').max = window.localStorage.DRCCSscorer.split('/').length-1;},300)\" style=\" position: fixed;\n          bottom: -10000px;\n          left: -100000px;\" type=\"file\" accept=\".DRCC\" id=\"fileInput\">\n\n\n                                    <ion-button text-wrap class=\"ui-mini no-mobile\" id=\"exportText\"\n                                        onclick=\"window.download(window.localStorage.DRCCSscorer + ';' + window.localStorage.DRCCS1scorer, day+'myscores.DRCC','application/octet-stream')\">\n                                        Share Saves</ion-button>\n\n                                    <script type=\"text/javascript\">\n\n\n\n                                        var currentTime = new Date()\n                                        var day = currentTime.getDate()\n                                    </script>\n\n\n\n                                </div>\n\n                            </div>\n                            <br><br><br>\n                            <div class=\"ui-corner-all ui-shadow-inset no-mobile\"\n                                style=\"border:1px solid black;max-width:500px;display:none;\">\n\n                                <div style=\"margin: 10px;\">\n\n                                    <h3>Advanced</h3>\n                                    <table style=\"padding-left: 10px; \">\n                                        <tr>\n                                            <td>\n                                                <div style=\"max-width: 100px\">\n                                                    <text id=\"teamText\"> Team No.</text>:\n                                                    <ion-input value=\"0\" id=\"team_num\" style=\"border: 1px solid black;\"\n                                                        type=\"number\"></ion-input>\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <div style=\"max-width: 100px\">\n                                                    <text id=\"roundText\"> Round No.</text>: <ion-input value=\"0\"\n                                                        id=\"round_num\" style=\"border: 1px solid black;\" type=\"number\">\n                                                    </ion-input>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td colspan=\"2\">\n                                                <div style=\"max-width: 500px\">\n                                                    <text id=\"nameText\">Your Name</text>: <ion-input id=\"name\"\n                                                        type=\"text\" style=\"border: 1px solid black;\"></ion-input>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                        <!-- <tr>\n                      <td colspan=\"2\">\n                          <div style=\"max-width: 500px\">\n                              <text id=\"roleText\">Role</text>: \n                              <select data-role=\"none\" id=\"role\">\n                                  <option value=\"\"></option>\n                                  <option value=\"TM\">Team</option>\n                                  <option value=\"RF\">Referee</option>\n                                  <option value=\"HR\">Head Referee</option>\n                              </select>\n                          </div>\n                      </td>\n                  </tr> -->\n                                    </table>\n\n                                    <div style=\"max-width:300px\">\n                                        <iframe style=\"display: none;\" id=\"saveframe\"></iframe>\n\n                                        <ion-button onclick=\"downloadScore();\" id=\"saverTscorer\" type=\"button\">Download\n                                            Current\n                                            Score</ion-button>\n\n                                        <br><text>Load local score:</text> <input onchange=\"\" type=\"file\"\n                                            accept=\".TDRCC\" id=\"fileInputT\">\n                                        <!-- position: fixed;\n                  bottom: -10000px;\n                  left: -100000px; -->\n                                        <!-- <button id=\"importText\" class=\"ui-mini no-mobile\" onclick=\" document.getElementById('fileInputT').click()\">Load Score</button> -->\n\n                                       \n\n                                    </div>\n\n                                </div>\n\n                            </div>\n                        </div>\n\n\n                        <!-- </div> -->\n                    </ion-content>\n                    <!-- </ion-nav>\n              </ion-tab> -->\n                </ion-slide>\n                <!--                     \n              <ion-tab tab=\"tab-about\" component=\"page-about\">\n                  <ion-nav></ion-nav>\n              </ion-tab> -->\n\n            </ion-slides>\n        </div>\n\n    </ion-content>\n\n    <!-- <ion-tab-bar slot=\"bottom\">\n          <ion-tab-button tab=\"tab-schedule\">\n              <ion-icon name=\"calendar\"></ion-icon>\n              <ion-label>Scorer</ion-label>\n              <ion-badge>6</ion-badge>\n          </ion-tab-button>\n\n          <ion-tab-button tab=\"tab-speaker\">\n              <ion-icon name=\"person-circle\"></ion-icon>\n              <ion-label>Timers</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab=\"tab-map\">\n              <ion-icon name=\"map\"></ion-icon>\n              <ion-label>Saves</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button >\n            \n              <i id=\"allpoints\" style=\"font-weight: bold; font-size: 200%;color:green\">\n                  0</i>\n                  \n              <ion-label style=\"font-weight: bold; color:green\">Points</ion-label>\n          </ion-tab-button>\n          <ion-tab-button >\n              <ion-button id=\"resetTxt\" value=\"Reset\" class=\"ui-mini no-print\"\n              onclick=\"document.getElementById('missions').reset();loadsave(blanksave);check_missions();\">\n              Reset</ion-button>\n          </ion-tab-button>\n      </ion-tab-bar>\n      \n   -->\n    <!-- </ion-tabs> -->\n\n</div>\n<!-- <img src=\"assets/images/ajax-loader.gif\" id=\"loadingGif\" style=\"background-color:white; width:50px; height: auto;position:fixed;left:50%;top:50%;margin-left: -25px;margin-top:-25px;z-index:10000000000000000000000000000000000000000;\"> -->\n<div class=\"loader\" id=\"loadingGif\"\n    style=\"position:fixed;left:50%;top:50%;margin-left: -25px;margin-top:-25px;z-index:10000000000000000000000000000000000000000;\">\n</div>\n<!-- \n<ion-content>\n\n\n</ion-content> -->\n\n<!-- </ons-page> -->\n\n\n<div style=\"display:none\" class=\"no-mobile\">\n\n    <a target=\"_blank\" class=\"no-print\"\n        href=\"https://play.google.com/store/apps/details?id=com.ev3lessons.fllcityshaperscorer\">\n        <img id=\"googleplay\" height=\"100\" src=\"assets/google-play/en_get.svg\"></a><br>\n\n    <a target=\"_blank\" class=\"no-print\" href=\"https://apps.apple.com/app/fll-city-shaper-scorer/id1473760751?ls=1\">\n        <img id=\"appstore\" height=\"68\" style=\"padding: 15px\" src=\"assets/app-store/en.svg\"></a>\n\n\n</div>\n<link rel=\"stylesheet\" href=\"assets/css/colors.css\" />\n\n<div id=\"styleBlank\"></div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_scorer_scorer_module_ts.js.map