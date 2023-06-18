(self["webpackChunkfll_tools"] = self["webpackChunkfll_tools"] || []).push([["src_app_drawplan_drawplan_module_ts"],{

/***/ 3517:
/*!*****************************************************!*\
  !*** ./src/app/drawplan/drawplan-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawplanPageRoutingModule": () => (/* binding */ DrawplanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _drawplan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawplan.page */ 4059);




const routes = [
    {
        path: '',
        component: _drawplan_page__WEBPACK_IMPORTED_MODULE_0__.DrawplanPage
    }
];
let DrawplanPageRoutingModule = class DrawplanPageRoutingModule {
};
DrawplanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DrawplanPageRoutingModule);



/***/ }),

/***/ 2133:
/*!*********************************************!*\
  !*** ./src/app/drawplan/drawplan.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawplanPageModule": () => (/* binding */ DrawplanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _drawplan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawplan-routing.module */ 3517);
/* harmony import */ var _drawplan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawplan.page */ 4059);







let DrawplanPageModule = class DrawplanPageModule {
};
DrawplanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _drawplan_routing_module__WEBPACK_IMPORTED_MODULE_0__.DrawplanPageRoutingModule
        ],
        declarations: [_drawplan_page__WEBPACK_IMPORTED_MODULE_1__.DrawplanPage]
    })
], DrawplanPageModule);



/***/ }),

/***/ 4059:
/*!*******************************************!*\
  !*** ./src/app/drawplan/drawplan.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawplanPage": () => (/* binding */ DrawplanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_drawplan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./drawplan.page.html */ 6558);
/* harmony import */ var _drawplan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawplan.page.scss */ 9001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let DrawplanPage = class DrawplanPage {
    constructor() { }
    ngOnInit() { }
    ionViewWillEnter() {
        eval(`
    initpage();
    switchLanguage();
    if (document.getElementById("loadedDP").value != "done") {
      //document.getElementById("loadedDP").value = "done"

    document.getElementById("mat").src = matimage;
    var width = window.innerWidth-20
    //height = String((width*530/944)-100)
    //height = String((width*530/944))
    var height = window.innerHeight - 200
  console.log(width)
    if (width < height * 2333 / 1166) {
        height = width * 1166 / 2333
    }
    if (height < width * 1166 / 2333) {
        width = height * 2333 / 1166
    }
    document.getElementById('wPaint').style.width=width+"px"
    document.getElementById('wPaint').style.height=height+"px"

    var dataUrl;
    var imageData = $("#wPaint").wPaint("image");

    $("#canvasImage").attr('src', imageData);
    $('#wPaint').wPaint('image', '<image_data>');

    var images = [
        'assets/images/head.jpg',
    ];

    $('#wPaint').wPaint({
      path: './',
      menuOffsetLeft: -35,
      menuOffsetTop: -50,
      saveImg: saveImg,
      loadImgBg: loadImgBg,
      loadImgFg: loadImgFg,
  });

  $(function () {
      $("#btnSave").click(function () {
          html2canvas($("#widget"), {
              onrendered: function (canvas) {
                  theCanvas = canvas;
                  document.body.appendChild(canvas);

                  // Convert and download as image
                  Canvas2Image.saveAsPNG(canvas);
                  $("#img-out").append(canvas);
                  // Clean up
                  //document.body.removeChild(canvas);
              }
          });
      });
  });



    var ppi = width / 96
    var bw = width;
    var bh = height;
    var p = 0;
    var cw = bw + (p * 2) + 1;
    var ch = bh + (p * 2) + 1;



    var flag = false;
    var    prevX = 0;
    var    currX = 0;
    var    prevY = 0;
    var    currY = 0;
    var    dot_flag = false;


    var x = "black";
    var y = 2;
    var drawmode = 'pencil';

    

    var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
        
  
    drawBoard()

    customElements.define('modal-page', class extends HTMLElement {
        connectedCallback() {
          this.innerHTML = \`
      <ion-header>
        <ion-toolbar>
          <ion-title>Saved Drawings</ion-title>
          <ion-buttons slot="primary">
            <ion-button onClick="modalElement.dismiss()">
              <ion-icon slot="icon-only" name="close"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
      <div style="width: 30em; height: 30em;" data-role="popup" id="popupMap" data-overlay-theme="b"
      data-theme="b" data-corners="false" data-tolerance="15,15">

    
      <!-- <a href="#" data-rel="back" data-role="ion-button" data-theme="b" data-icon="delete" data-iconpos="notext"
                      class="ui-btn-right">Close</a> -->
      <div style="margin:5px">
        <ion-button text-wrap class="ion-button"
          onclick="svimg(); mymaxDP = window.localStorage.canvasImage2021.split('|').length-1; alert(doneText)"
          data-inline="true" style=""><text id="saveDrawingText">Save Drawing</text></ion-button>
        <br><ion-button text-wrap
          onclick="window.localStorage.canvasImage2021 = ''; document.getElementById('saveidDP').max = 1 ; showPastDraws();alert(doneText);"
          data-inline="true"><text id="deleteSavedDrawingsText">Delete All Saved Drawings</text></ion-button>
    
        <br>
    
        <table>
          <tr>
            <td>
              <!-- <ion-button data-inline="true" onclick="
    
                 "><text id="loadSavedDrawingText">Load Saved Drawing</text></ion-button> -->
            </td>
            <td>
              <script>
                if (window.localStorage.canvasImage2021 == undefined) {
                  window.localStorage.canvasImage2021 = ''
                }
                mymaxDP = window.localStorage.canvasImage2021.split('|').length - 1;
    </script>
    <div style="max-width: 350px; " class="ui-block-b ">
      <ion-item>
    
        <ion-button style="text-align: left; " id="loadText" class="ui-shadow ui-btn ui-corner-all " type="button " onclick="loadsaveDP(window.localStorage.canvasImage2021.split('|')[parseInt(document.getElementById('saveidDP').value)]);
                      loadsaveDP(window.localStorage.canvasImage2021.split('|')[parseInt(document.getElementById('saveidDP').value)]);
                      setTimeout(function() {
                      loadsaveDP(window.localStorage.canvasImage2021.split('|')[parseInt(document.getElementById('saveidDP').value)]);
                      }, 200);
                      ionAlert(doneText);">
          Load Saved Drawing</ion-button>
        <ion-item no-lines>
    
          <!--
                        <div data-role="stepper " data-direction="vertical ">
    
                            <div style="max-width: 60px; " class="button-wrap "> -->
          <ion-button type="button" value="- "
            onclick="document.getElementById( 'saveidDP').value--; if (document.getElementById( 'saveidDP').value < 1) {document.getElementById( 'saveidDP').value=1 } ">
            <ion-icon name="remove-outline"></ion-icon>
          </ion-button>
          <!-- </div>
                        </div>
                    </div>
                    <div class="ui-block-c " style="max-width: 60px; ">
                        <div style="max-width: 60px; " class="button-wrap "> -->
          <ion-input style="height: 41px;text-align: center; " type="number " data-highlight="true " data-theme="b "
            onchange=" if (this.value> mymaxDP) {this.value = mymaxDP}" search="2" class="quantity" data-show-value="true"
            name="saveidDP" id="saveidDP" value="1" min="1" step="1"></ion-input>
          <!-- </div>
                    </div>
                    <div class="ui-block-d" style="max-width: 60px; ">
                        <div style="max-width: 60px; " class="button-wrap"> -->
          <ion-button type="button" value="+"
            onclick="document.getElementById('saveidDP').value++; if (document.getElementById('saveidDP').value > mymaxDP) {document.getElementById('saveidDP').value = mymaxDP}">
            <ion-icon name="add-outline"></ion-icon>
          </ion-button>
          <!-- </div>-->
        </ion-item>
      </ion-item>
    </div>
    <!--
                            <input id="saveidDP" type="text" data-inline="true" data-role="spinbox"
                              onchange="if (mymaxDP < this.value) {this.value = mymaxDP} " min="1" value="1"> -->
    </td>
    
    </tr>
    </table>
    
    <br>
    <br>
    <div id="drawSaveShare" class="">
      <!-- <a style="display:none; position: fixed;    bottom: -10000;   left: -100000;" id="exportDP"
                                    href="#">Export
                                    Saves</a> -->
      <ion-button text-wrap data-inline="true" class="ui-mini no-mobile" onclick="downloadSaves()"><text
          id="exportSavedDrawingsText">Share Drawings</text></ion-button>
      <script type="text/javascript">
                          // var anchor = document.getElementById('exportDP');
                          // anchor.onclick = function () {
                          //     var currentTime = new Date()
                          //     var day = currentTime.getDate()
                          //     anchor.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(window.localStorage.canvasImage2021);
                          //     anchor.download = day + 'mydrawings.DRCI';
                          //     //     setTimeout(function(){   ;  anchor.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(window.localStorage.DRAA1scorer);    anchor.download = day + 'myscores.AA1EV3';}, 50)
                          // };
    
      </script>
    <br>
      <ion-button text-wrap class="ui-mini no-mobile" data-inline="true" onclick="// alert('choose .DRCI file') ;
                            document.getElementById('fileInputDP').click() "><text id="importSavedDrawingsText">Import Shared Drawings</text></ion-button>
    <br>
      <ion-button text-wrap data-inline="true" class="" onclick="exporter();"><text id="exportPNGText">Export Drawing as PNG</text></ion-button>
      <input onchange="" style=" display:none; position: fixed;    bottom: -10000;   left: -100000; " type="file"
        id="fileInputDP" accept=".DRCI"><br>
      <!--Drawplan Scoring System Version 4.2.0 scorer<br>-->
    </div>
    
    <div id="pastDraws"> </div>
    
    </div>
    </div>
    </ion-content>\`;
    }
    });
  }
    `);
    }
};
DrawplanPage.ctorParameters = () => [];
DrawplanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-drawplan',
        template: _raw_loader_drawplan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_drawplan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DrawplanPage);



/***/ }),

/***/ 9001:
/*!*********************************************!*\
  !*** ./src/app/drawplan/drawplan.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmF3cGxhbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6558:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drawplan/drawplan.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-router-outlet id=\"menuContent\"></ion-router-outlet>\n\n\n<div class=\"ion-page\" id=\"mainContent\" main>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\" style=\"display: block !important;\">\n        <ion-menu-toggle style=\"display: block !important;\">\n          <ion-button onclick=\"document.getElementById('mainNav').open()\" style=\"display: block !important;\">\n            <ion-icon slot=\"icon-only\" name=\"menu\" style=\"display: block !important;\"></ion-icon>\n          </ion-button>\n        </ion-menu-toggle>\n      </ion-buttons>\n      <!-- </ion-buttons> -->\n      <ion-title>FLL MASTERPIECE Strategy Planner</ion-title>\n    </ion-toolbar>\n    <!-- <ion-toolbar color=\"\"> -->\n    <!-- <ion-segment scrollable>\n              <ion-segment-button value=\"0\" checked>\n                  <ion-icon name=\"call\"></ion-icon>\n                  <ion-label>Call</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"1\">\n                  <ion-icon name=\"cloud-upload\"></ion-icon>\n                  <ion-label>Publish</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"2\">\n                  <ion-icon name=\"paper\"></ion-icon>\n                  <ion-label>Topic</ion-label>\n              </ion-segment-button> -->\n    <!-- <ion-segment-button value=\"3\">\n                  <ion-icon name=\"code-working\"></ion-icon>\n                  <ion-label>Query</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"4\">\n                  <ion-icon name=\"open\"></ion-icon>\n                  <ion-label>Open</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"5\">\n                  <ion-icon name=\"search\"></ion-icon>\n                  <ion-label>Search</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"6\">\n                  <ion-icon name=\"create\"></ion-icon>\n                  <ion-label>Write</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"7\">\n                  <ion-icon name=\"book\"></ion-icon>\n                  <ion-label>Read</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"8\">\n                  <ion-icon name=\"trash\"></ion-icon>\n                  <ion-label>Trash</ion-label>\n              </ion-segment-button> -->\n    <!-- </ion-segment> -->\n    <!-- </ion-toolbar> -->\n  </ion-header>\n\n  <!-- <ion-tabs class=\"tabs-icon-top tabs-color-active-positive\" style=\"position: relative !important;\"> -->\n\n\n\n  <ion-content class=\"\">\n    <div id=\"contentload\" style=\"display: inline;\">\n      <input type=\"hidden\" id=\"loadedDP\">\n\n      <ion-slides style=\"height: 100%;\">\n\n        <!-- <ion-tab tab=\"tab-schedule\">\n                  <ion-nav> -->\n        <ion-slide class=\"slide-1 \" class=\"swiper-no-swiping\">\n          <ion-content class=\"has-tabs-top has-tabs has-header ion-padding\">\n            <!-- <div data-role=\"tabs\"> -->\n            <!-- <template id=\"tab1.html\"> -->\n\n            <!-- <ons-page> -->\n\n            <div style=\"padding-left: 0px; \" id=\"tabs-4\">\n              <div id=\"content\">\n                <img id=\"mat\" width=\"1024\" style=\"display:none;width:1024;\n                    height:auto;position: fixed;    bottom: -10000;   left: -100000\" alt=\"The Mat\">\n                <img style=\"display:none;\" id=\"tmpimgholder\">\n\n                <canvas style=\"display:none\" id=\"tmpCanvas\" width=\"778\" height=\"389\"></canvas>\n\n                <a style=\"display:none\" download=\"myPlan.png\" target=\"_blank\" href=\"\" id=\"downloadPic\">Download to\n                  myImage.jpg</a>\n\n                <div class=\"content-box\">\n                  <!-- jQuery UI -->\n                  <script type=\"text/javascript\" src=\"assets/./lib/jquery.ui.core.1.10.3.min.js\"></script>\n                  <script type=\"text/javascript\" src=\"assets/./lib/jquery.ui.widget.1.10.3.min.js\"></script>\n                  <script type=\"text/javascript\" src=\"assets/./lib/jquery.ui.mouse.1.10.3.min.js\"></script>\n                  <script type=\"text/javascript\" src=\"assets/./lib/jquery.ui.draggable.1.10.3.min.js\"></script>\n\n                  <!-- wColorPicker -->\n                  <link rel=\"Stylesheet\" type=\"text/css\" href=\"assets/./lib/wColorPicker.min.css\" />\n                  <script type=\"text/javascript\" src=\"assets/./lib/wColorPicker.min.js\"></script>\n\n                  <!-- wPaint -->\n                  <link rel=\"Stylesheet\" type=\"text/css\" href=\"assets/./wPaint.min.css\" />\n                  <script type=\"text/javascript\" src=\"assets/./wPaint.min.js\"></script>\n                  <script type=\"text/javascript\" src=\"assets/./plugins/main/wPaint.menu.main.min.js\"></script>\n                  <script type=\"text/javascript\" src=\"assets/./plugins/text/wPaint.menu.text.min.js\"></script>\n                  <script type=\"text/javascript\" src=\"assets/./plugins/shapes/wPaint.menu.main.shapes.min.js\"></script>\n                  <script type=\"text/javascript\" src=\"assets/./plugins/file/wPaint.menu.main.file.min.js\"></script>\n\n\n\n\n                </div>\n                <!-- <table>\n                          <tr>\n                            <td style=\"max-width:40px\">         -->\n                <div style=\"border-color: black; border-width: 2px;\" data-type=\"horizontal\" data-role=\"controlgroup\"\n                  style=\"position:relative;\">\n\n\n                  <ion-button disabled data-inline=\"true\" class=\"ion-button toolDraw dpTool\"\n                    onclick=\"changecolor(this);$('#wPaint').wPaint('setStrokeStyle','yellow');$('#wPaint').wPaint('setLineWidth',3);\"\n                    style=\" --background: yellow!important; \n                                                     background-size: contain; width: 50.39px; height: 36px;  background-position: center;\n                                                     background-repeat: no-repeat;\"> </ion-button>\n\n                  <ion-button data-inline=\"true\" class=\"ion-button toolDraw dpTool\"\n                    onclick=\"changecolor(this);$('#wPaint').wPaint('setStrokeStyle','green');$('#wPaint').wPaint('setLineWidth',3);\"\n                    style=\" --background: green!important; width: 50.39px; height: 36px;   background-size: contain;  background-position: center;\n                                                    background-repeat: no-repeat;\"> </ion-button>\n\n                  <ion-button class=\"ion-button toolDraw dpTool\"\n                    onclick=\"changecolor(this);$('#wPaint').wPaint('setStrokeStyle','red');$('#wPaint').wPaint('setLineWidth',3);\"\n                    style=\" --background: red!important; width: 50.39px; height: 36px;   background-size: contain;  background-position: center;\n                                                 background-repeat: no-repeat;\"> </ion-button>\n                  <ion-button class=\"ion-button toolDraw dpTool\"\n                    onclick=\"changecolor(this);$('#wPaint').wPaint('setStrokeStyle','blue');$('#wPaint').wPaint('setLineWidth',3);\"\n                    style=\" --background: blue!important; width: 50.39px; height: 36px;   background-size: contain;  background-position: center;\n                                                  background-repeat: no-repeat;\"> </ion-button>\n                  <ion-button class=\"ion-button toolDraw dpTool\"\n                    onclick=\"changecolor(this);$('#wPaint').wPaint('setStrokeStyle','orange');$('#wPaint').wPaint('setLineWidth',3);\"\n                    style=\" --background: orange!important; width: 50.39px; height: 36px;   background-size: contain;  background-position: center;\n                                              background-repeat: no-repeat;\"> </ion-button>\n                  <ion-button class=\"ion-button toolDraw dpTool\"\n                    onclick=\"changecolor(this);$('#wPaint').wPaint('setStrokeStyle','brown');$('#wPaint').wPaint('setLineWidth',3);\"\n                    style=\" --background: brown!important; width: 50.39px; height: 36px;   background-size: contain;  background-position: center;\n                                                   background-repeat: no-repeat;\"> </ion-button>\n                  <ion-button class=\"ion-button toolDraw dpTool\"\n                    onclick=\"changecolor(this);$('#wPaint').wPaint('setStrokeStyle','black');$('#wPaint').wPaint('setLineWidth',3); toolDraw\"\n                    style=\" --background: black!important; width: 50.39px; height: 36px;   background-size: contain;  background-position: center;\n                                                   background-repeat: no-repeat;\"> </ion-button>\n                  <ion-button class=\"ion-button toolDraw dpTool\"\n                    onclick=\"changecolor(this);$('#wPaint').wPaint('setStrokeStyle','white');$('#wPaint').wPaint('setLineWidth',3);\"\n                    style=\" --background: white!important; width: 50.39px; height: 36px;   background-size: contain;  background-position: center;\n                                                   background-repeat: no-repeat;\"> </ion-button>\n                  <ion-button class=\"ion-button dpTool\" onclick=\"$('#wPaint').wPaint('clear');\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                  </ion-button>\n                  <ion-button class=\"ion-button toolEdit dpTool\"\n                    onclick=\"drawmode='eraser'; changeedit(this); $('#wPaint').wPaint('setMode','eraser');$('#wPaint').wPaint('setLineWidth',10);\">\n                    <ion-icon name=\"close-circle-outline\"></ion-icon>\n                  </ion-button>\n                  <ion-button class=\"ion-button dpTool\" onclick=\"$('#wPaint').wPaint('undo');\">\n                    <ion-icon name=\"arrow-undo-outline\"></ion-icon>\n                  </ion-button>\n                  <ion-button class=\"ion-button dpTool\" onclick=\"$('#wPaint').wPaint('redo');\">\n                    <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n                  </ion-button>\n\n                  <ion-button class=\"ion-button toolEdit dpTool\"\n                    onclick=\"drawmode='pencil';changeedit(this); $('#wPaint').wPaint('setMode','pencil'); $('#wPaint').wPaint('setLineWidth',3);\"\n                    color=\"secondary\">\n                    <ion-icon name=\"pencil-outline\"></ion-icon>\n\n                  </ion-button>\n                  <ion-button class=\"ion-button toolEdit dpTool\"\n                    onclick=\"drawmode='line';changeedit(this);$('#wPaint').wPaint('setMode','line'); $('#wPaint').wPaint('setLineWidth',3);\">\n                    <ion-icon name=\"remove-outline\"></ion-icon>\n                  </ion-button>\n                  <ion-button class=\"ion-button toolEdit dpTool\"\n                    onclick=\"drawmode='rectangle';changeedit(this);$('#wPaint').wPaint('setMode','rectangle'); $('#wPaint').wPaint('setLineWidth',3);$('#wPaint').wPaint('setFillStyle','transparent');\">\n                    <ion-icon name=\"square-outline\"></ion-icon>\n                  </ion-button>\n                  <ion-button class=\"ion-button toolEdit dpTool\"\n                    onclick=\"drawmode='text';changeedit(this);$('#wPaint').wPaint('setMode','text'); $('#wPaint').wPaint('setFontSize','25');$('#wPaint').wPaint('setFillStyle','red');\">\n                    <ion-icon name=\"text-outline\"></ion-icon>\n                  </ion-button>\n                  <ion-button class=\"ion-button dpTool\" onclick=\"presentModal();\n                   setTimeout(function(){ var fileInputDP = document.getElementById('fileInputDP');\n    fileInputDP.addEventListener('change', function (e) {\n        var file = fileInputDP.files[0];\n        var textType = /text.*/;\n        if (1 == 1) {\n            var reader = new FileReader();\n            reader.onload = function (e) {\n                data = reader.result;\n                //alert(data)\n                window.localStorage.canvasImage2021 = data;\n                showPastDraws();\n                ionAlert(doneText)\n            }\n            reader.readAsText(file);\n        } else { }\n    });\n    showPastDraws()\n    switchLanguage()\n  }, 100);\n                  \">\n                    <ion-icon name=\"save-outline\"></ion-icon>\n                  </ion-button>\n                </div>\n                <!-- </td>\n                            <td>\n                              \n                    -->\n                <a style=\"display:none;\" id=\"saveMenu\" href=\"#popupMap\" data-rel=\"popup\" data-position-to=\"window\"\n                  data-role=\"ion-button\" data-theme=\"a\" data-inline=\"true\" aria-haspopup=\"true\" aria-owns=\"popupMap\"\n                  aria-expanded=\"false\" class=\"ui-link ui-btn ui-btn-a ui-btn-inline ui-shadow ui-corner-all ui-mini\"\n                  role=\"ion-button\">Open\n                  Saves</a>\n\n\n                <div id=\"wPaint\"\n                  style=\"position:relative;  top:10px;height:auto; background-color:#7a7a7a;margin-top:20px;\">\n\n                  <!-- height=\"100%\" width=\"100%\"-->\n                  <div id=\"container\">\n                    <img src=\"assets/images/head.jpg\" style=\"width: 100%;  height:auto;\">\n                    <div id=\"holder\">\n                    </div>\n                  </div>\n                </div>\n                <!-- <script type=\"text/javascript\" language=\"javascript\">\n                                  \n                    \n                                  </script> -->\n              </div>\n              <!-- </td>\n                    </tr>\n                    </table> -->\n              \n              <center>\n                <article>\n\n                  <p><input style=\"position: fixed; top:-100px;\" id=\"imageLoader\" name=\"imageLoader\" type=\"file\">\n                  </p>\n                  <i style=\"display: none;\" id=\"status\">File API &amp; FileReader API not supported</i>\n                </article>\n              </center>\n\n              <center id=\"wPaint-img\"></center>\n\n\n              <script>\n                var content = document.querySelector('ion-content');\n                content.scrollEvents = true;\n                content.addEventListener('ionScrollStart', () => console.log('scroll start'));\n                content.addEventListener('ionScroll', (ev) => console.log('scroll', ev.detail));\n                content.addEventListener('ionScrollEnd', () => console.log('scroll end'));\n              </script>\n\n            </div>\n\n\n\n            <!--                 \n                          <div class=\"no-print no-tournament\" data-role=\"navbar\">\n                              <div data-hide-during-focus=\"\" data-tap-toggle=\"false\" data-role=\"header\" data-position=\"fixed\">\n      \n                                  <ul>\n                                      <li><a id=\"scorerTitle\" class=\"ui-btn-active\" href=\"#tabs-1\">Scorer</a></li>\n                                      <li><a id=\"timersTitle\" href=\"#tabs-2\">Timers</a></li>\n                                      <li><a id=\"savesTitle\" onclick=\"drawBasic()\" href=\"#tabs-3\">Saves</a></li>\n                                  </ul>\n                              </div>\n                          </div> -->\n\n\n            <!-- </div> -->\n\n\n            <noscript>Please enable JavaScript to continue using this application.</noscript>\n            <div style=\"padding-left: 10px; display:none;\" class=\"no-print\">\n\n              <text style=\"display:none\" id=\"tournamentText\">Tournament</text><br><br>\n\n              <text id=\"revisionText\">Scorer </text> <text id=\"versionText\">v5.0.0</text>\n              <!-- Scorer v3.5.0 -->\n              <br>\n              <br><text id=\"copyrightText\">Copyright</text><br>\n              <br>\n              <text id=\"translatorCredit\">Translated</text>\n            </div>\n            <br>\n            <br>\n            <br>\n\n          </ion-content>\n\n          <!-- </ion-content> -->\n          <!-- </ion-nav>\n                   -->\n        </ion-slide>\n\n        <!--                     \n              <ion-tab tab=\"tab-about\" component=\"page-about\">\n                  <ion-nav></ion-nav>\n              </ion-tab> -->\n\n      </ion-slides>\n    </div>\n\n  </ion-content>\n\n  <!-- <ion-tab-bar slot=\"bottom\">\n          <ion-tab-button tab=\"tab-schedule\">\n              <ion-icon name=\"calendar\"></ion-icon>\n              <ion-label>Scorer</ion-label>\n              <ion-badge>6</ion-badge>\n          </ion-tab-button>\n\n          <ion-tab-button tab=\"tab-speaker\">\n              <ion-icon name=\"person-circle\"></ion-icon>\n              <ion-label>Timers</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab=\"tab-map\">\n              <ion-icon name=\"map\"></ion-icon>\n              <ion-label>Saves</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button >\n            \n              <i id=\"allpoints\" style=\"font-weight: bold; font-size: 200%;color:green\">\n                  0</i>\n                  \n              <ion-label style=\"font-weight: bold; color:green\">Points</ion-label>\n          </ion-tab-button>\n          <ion-tab-button >\n              <ion-button id=\"resetTxt\" value=\"Reset\" class=\"ui-mini no-print\"\n              onclick=\"document.getElementById('missions').reset();loadsave(blanksave);check_missions();\">\n              Reset</ion-button>\n          </ion-tab-button>\n      </ion-tab-bar>\n      \n   -->\n  <!-- </ion-tabs> -->\n\n</div>\n<!-- <img src=\"assets/images/ajax-loader.gif\" id=\"loadingGif\" style=\"background-color:white; width:50px; height: auto;position:fixed;left:50%;top:50%;margin-left: -25px;margin-top:-25px;z-index:10000000000000000000000000000000000000000;\"> -->\n<div class=\"loader\" id=\"loadingGif\"\n  style=\"position:fixed;left:50%;top:50%;margin-left: -25px;margin-top:-25px;z-index:10000000000000000000000000000000000000000;\">\n</div>\n<!-- \n<ion-content>\n\n\n</ion-content> -->\n\n<!-- </ons-page> -->\n\n\n<div style=\"display:none\" class=\"no-mobile\">\n\n  <a target=\"_blank\" class=\"no-print\"\n    href=\"https://play.google.com/store/apps/details?id=com.ev3lessons.fllcityshaperscorer\">\n    <img id=\"googleplay\" height=\"100\" src=\"assets/google-play/en_get.svg\"></a><br>\n\n  <a target=\"_blank\" class=\"no-print\" href=\"https://apps.apple.com/app/fll-city-shaper-scorer/id1473760751?ls=1\">\n    <img id=\"appstore\" height=\"68\" style=\"padding: 15px\" src=\"assets/app-store/en.svg\"></a>\n\n\n</div>\n<link rel=\"stylesheet\" href=\"assets/css/colors.css\" />\n\n<div id=\"styleBlank\"></div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_drawplan_drawplan_module_ts.js.map