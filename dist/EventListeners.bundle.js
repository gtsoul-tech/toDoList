/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/form.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/form.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.content{
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 100%;
}



label {
    margin: 5px;
    padding: 10px;
    cursor: pointer;
}
input[type="radio"]{
    position: fixed;
    opacity: 0;
    pointer-events: none;
}
input[type="radio"]:checked+label{ 
    font-weight: bold; 
} 
input[type="radio"]:checked+label::before{ 
    content:"//";
} 
input[name="priority"]:checked+label::before {
    content:"";
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 10px;
}
.modalnavbar{
    font-size: 1em;
}

.title, .details{
    outline: none;
    width: 200px;
    height: 20px;
    border-radius: 20px;
    text-align: center;
    border-color: lightgreen;
}

input[type="date"] {
    outline: none;
    border-radius: 20px;
    border-color: lightgreen;
}
input[type="submit"] {
    outline: none;
    width: 100px;
    height: 20px;
    border-radius: 20px;
    text-align: center;
    border-color: lightgreen;
}

.greenPriority{
    padding:10px;
    color: green;
    border: 1px solid green;
    border-radius: 20px;
    font-weight: bold;
    width: 50px;
}
.orangePriority{
    padding:10px;
    color: orange;
    border: 1px solid orange;
    border-radius: 20px;
    font-weight: bold;
    width: 50px;
}
.redPriority{
    padding:10px;
    color: red;
    border: 1px solid red;
    border-radius: 20px;
    font-weight: bold;
    width: 50px;
}

.editFormPost{
    display: flex;
    flex-direction: column;
    height: 100%;
}`, "",{"version":3,"sources":["webpack://./src/form.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;;;AAIA;IACI,WAAW;IACX,aAAa;IACb,eAAe;AACnB;AACA;IACI,eAAe;IACf,UAAU;IACV,oBAAoB;AACxB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,SAAS;AACb;AACA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,YAAY;IACZ,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,YAAY;IACZ,UAAU;IACV,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB","sourcesContent":[".content{\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100%;\n}\n\n\n\nlabel {\n    margin: 5px;\n    padding: 10px;\n    cursor: pointer;\n}\ninput[type=\"radio\"]{\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n}\ninput[type=\"radio\"]:checked+label{ \n    font-weight: bold; \n} \ninput[type=\"radio\"]:checked+label::before{ \n    content:\"//\";\n} \ninput[name=\"priority\"]:checked+label::before {\n    content:\"\";\n}\nform{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n    gap: 10px;\n}\n.modalnavbar{\n    font-size: 1em;\n}\n\n.title, .details{\n    outline: none;\n    width: 200px;\n    height: 20px;\n    border-radius: 20px;\n    text-align: center;\n    border-color: lightgreen;\n}\n\ninput[type=\"date\"] {\n    outline: none;\n    border-radius: 20px;\n    border-color: lightgreen;\n}\ninput[type=\"submit\"] {\n    outline: none;\n    width: 100px;\n    height: 20px;\n    border-radius: 20px;\n    text-align: center;\n    border-color: lightgreen;\n}\n\n.greenPriority{\n    padding:10px;\n    color: green;\n    border: 1px solid green;\n    border-radius: 20px;\n    font-weight: bold;\n    width: 50px;\n}\n.orangePriority{\n    padding:10px;\n    color: orange;\n    border: 1px solid orange;\n    border-radius: 20px;\n    font-weight: bold;\n    width: 50px;\n}\n.redPriority{\n    padding:10px;\n    color: red;\n    border: 1px solid red;\n    border-radius: 20px;\n    font-weight: bold;\n    width: 50px;\n}\n\n.editFormPost{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body, body > div {
    margin: 0;
    height: 100%;
}

.header{
    display: flex;
    font-size: 2em;
    background-color: aquamarine;
    justify-content: center;
    border-style: solid;
    border-color: aquamarine;
}
.svg{
    width: 1em;
    height: 1em;
}


.content{
    display: grid;
    grid-template-columns: 1fr 3fr;
}

.navbar{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    border-right: 0.5px solid rgb(0, 0, 0);
    background-color: rgb(177, 177, 177);
    
}
.navbar-button:hover, .navbar-button:active{
    font-size: 1rem;
    font-weight: bold;
}

.navbar-button:hover::before {
    content: '//';
  }
  
.navbar-button{
    width: 20px;
    height: 30px;
}

.add-button{
    color: #000; /* Fallback for older browsers */
    color: rgba(0, 0, 0, 0.5);
    font-size: 3rem;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    border-radius:50%;
    text-align: center;
    background-color: bisque;
    margin: 10px;
    align-self: flex-start;
}

label {
    margin: 5px;
    padding: 10px;
    cursor: pointer;
}
.navbar input[type="radio"]{
    position: fixed;
    opacity: 0;
    pointer-events: none;
}
input[type="radio"]:checked+label{ 
    font-weight: bold; 
} 
input[type="radio"]:checked+label::before{ 
    content:"//";
} 



.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(3px);
    
}
  .modal-content > .content >.navbar{
    border-top-left-radius: 20px 20px;
    border-bottom-left-radius: 20px 20px;
    
  }
  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    box-shadow: 5px 5px 5px black;
    border: 2px solid black;
    border-radius: 20px;
    height: 100%;
    width: 80%; /* Could be more or less, depending on screen size */
    min-width: 100px;
    min-height: 200px;
    max-height: 200px;
  }
  
  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,4BAA4B;IAC5B,uBAAuB;IACvB,mBAAmB;IACnB,wBAAwB;AAC5B;AACA;IACI,UAAU;IACV,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;IACT,sCAAsC;IACtC,oCAAoC;;AAExC;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;EACf;;AAEF;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW,EAAE,gCAAgC;IAC7C,yBAAyB;IACzB,eAAe;IACf,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,wBAAwB;IACxB,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,eAAe;AACnB;AACA;IACI,eAAe;IACf,UAAU;IACV,oBAAoB;AACxB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;;;;AAIA;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,4BAA4B,EAAE,mBAAmB;IACjD,oCAAoC;IACpC,0BAA0B;;AAE9B;EACE;IACE,iCAAiC;IACjC,oCAAoC;;EAEtC;EACA,sBAAsB;EACtB;IACE,yBAAyB;IACzB,gBAAgB,EAAE,kCAAkC;IACpD,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,UAAU,EAAE,oDAAoD;IAChE,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;EACnB;;EAEA,qBAAqB;EACrB;IACE,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;;EAEA;;IAEE,YAAY;IACZ,qBAAqB;IACrB,eAAe;EACjB","sourcesContent":["html, body, body > div {\n    margin: 0;\n    height: 100%;\n}\n\n.header{\n    display: flex;\n    font-size: 2em;\n    background-color: aquamarine;\n    justify-content: center;\n    border-style: solid;\n    border-color: aquamarine;\n}\n.svg{\n    width: 1em;\n    height: 1em;\n}\n\n\n.content{\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.navbar{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 20px;\n    border-right: 0.5px solid rgb(0, 0, 0);\n    background-color: rgb(177, 177, 177);\n    \n}\n.navbar-button:hover, .navbar-button:active{\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.navbar-button:hover::before {\n    content: '//';\n  }\n  \n.navbar-button{\n    width: 20px;\n    height: 30px;\n}\n\n.add-button{\n    color: #000; /* Fallback for older browsers */\n    color: rgba(0, 0, 0, 0.5);\n    font-size: 3rem;\n    border: 1px solid black;\n    width: 50px;\n    height: 50px;\n    border-radius:50%;\n    text-align: center;\n    background-color: bisque;\n    margin: 10px;\n    align-self: flex-start;\n}\n\nlabel {\n    margin: 5px;\n    padding: 10px;\n    cursor: pointer;\n}\n.navbar input[type=\"radio\"]{\n    position: fixed;\n    opacity: 0;\n    pointer-events: none;\n}\ninput[type=\"radio\"]:checked+label{ \n    font-weight: bold; \n} \ninput[type=\"radio\"]:checked+label::before{ \n    content:\"//\";\n} \n\n\n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(3px);\n    \n}\n  .modal-content > .content >.navbar{\n    border-top-left-radius: 20px 20px;\n    border-bottom-left-radius: 20px 20px;\n    \n  }\n  /* Modal Content/Box */\n  .modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    box-shadow: 5px 5px 5px black;\n    border: 2px solid black;\n    border-radius: 20px;\n    height: 100%;\n    width: 80%; /* Could be more or less, depending on screen size */\n    min-width: 100px;\n    min-height: 200px;\n    max-height: 200px;\n  }\n  \n  /* The Close Button */\n  .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskCss.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskCss.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.task{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(231, 231, 231);    
    padding: 10px;
    margin: 20px;
    border: 1px solid lightgreen;
    border-radius: 20px;
    gap: 30px;
    border-left: 2px solid orange;
}

.task:hover{
    transform: scale(1.02) perspective(0px);
    box-shadow: 0 10px 10px rgba(100, 100, 100, 0.7);
}

.title{
    flex: 1;
    justify-self: flex-start;
}

.complete{
    opacity: 0.5;
}
.details{
    color: black;
    font-weight: bold;
}
.detailsContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 20px;
}

.greenPriority{
    padding:10px;
    color: green;
    border: 1px solid green;
    border-radius: 20px;
    font-weight: bold;
    width: 50px;
}
.orangePriority{
    padding:10px;
    color: orange;
    border: 1px solid orange;
    border-radius: 20px;
    font-weight: bold;
    width: 50px;
}
.redPriority{
    padding:10px;
    color: red;
    border: 1px solid red;
    border-radius: 20px;
    font-weight: bold;
    width: 50px;
}
.editButton{
    color: black;
    font-weight: bold;
}
.delete{
    width: 1em;
    height: 1em;
}
`, "",{"version":3,"sources":["webpack://./src/taskCss.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,oCAAoC;IACpC,aAAa;IACb,YAAY;IACZ,4BAA4B;IAC5B,mBAAmB;IACnB,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,uCAAuC;IACvC,gDAAgD;AACpD;;AAEA;IACI,OAAO;IACP,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,YAAY;IACZ,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,YAAY;IACZ,UAAU;IACV,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,UAAU;IACV,WAAW;AACf","sourcesContent":[".task{\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgb(231, 231, 231);    \n    padding: 10px;\n    margin: 20px;\n    border: 1px solid lightgreen;\n    border-radius: 20px;\n    gap: 30px;\n    border-left: 2px solid orange;\n}\n\n.task:hover{\n    transform: scale(1.02) perspective(0px);\n    box-shadow: 0 10px 10px rgba(100, 100, 100, 0.7);\n}\n\n.title{\n    flex: 1;\n    justify-self: flex-start;\n}\n\n.complete{\n    opacity: 0.5;\n}\n.details{\n    color: black;\n    font-weight: bold;\n}\n.detailsContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    margin: 20px;\n}\n\n.greenPriority{\n    padding:10px;\n    color: green;\n    border: 1px solid green;\n    border-radius: 20px;\n    font-weight: bold;\n    width: 50px;\n}\n.orangePriority{\n    padding:10px;\n    color: orange;\n    border: 1px solid orange;\n    border-radius: 20px;\n    font-weight: bold;\n    width: 50px;\n}\n.redPriority{\n    padding:10px;\n    color: red;\n    border: 1px solid red;\n    border-radius: 20px;\n    font-weight: bold;\n    width: 50px;\n}\n.editButton{\n    color: black;\n    font-weight: bold;\n}\n.delete{\n    width: 1em;\n    height: 1em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/form.css":
/*!**********************!*\
  !*** ./src/form.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/taskCss.css":
/*!*************************!*\
  !*** ./src/taskCss.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskCss_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./taskCss.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskCss.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskCss_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskCss_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskCss_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskCss_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/notebook.svg":
/*!**************************!*\
  !*** ./src/notebook.svg ***!
  \**************************/
/***/ ((module) => {

module.exports = "<svg fill=\"#000000\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 512 512\" xml:space=\"preserve\"><g><g><path d=\"M456.348,0h-66.783H278.261H55.652c-9.22,0-16.696,7.475-16.696,16.696v478.609c0,9.22,7.475,16.696,16.696,16.696 h400.696c9.22,0,16.696-7.475,16.696-16.696V16.696C473.043,7.475,465.568,0,456.348,0z M294.957,33.391h77.913v104.146 l-26.131-31.357c-3.171-3.805-7.87-6.007-12.826-6.007s-9.655,2.202-12.826,6.007l-26.131,31.357V33.391z M105.739,478.609H72.348 V33.391h33.391V478.609z M439.653,478.609h-0.001H139.13V33.391h122.435v150.261c0,7.029,4.402,13.305,11.012,15.698 c6.613,2.394,14.01,0.388,18.51-5.011l42.825-51.39l42.827,51.391c3.234,3.882,7.968,6.008,12.829,6.008 c1.901,0,3.823-0.326,5.681-0.997c6.609-2.393,11.012-8.669,11.012-15.698V33.391h33.391V478.609z\"></path></g></g><g><g><path d=\"M356.174,311.652H222.609c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h133.565 c9.22,0,16.696-7.475,16.696-16.696S365.394,311.652,356.174,311.652z\"></path></g></g><g><g><path d=\"M389.565,378.435H189.217c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h200.348 c9.22,0,16.696-7.475,16.696-16.696S398.786,378.435,389.565,378.435z\"></path></g></g></svg>"

/***/ }),

/***/ "./src/rubbish.svg":
/*!*************************!*\
  !*** ./src/rubbish.svg ***!
  \*************************/
/***/ ((module) => {

module.exports = "<svg fill=\"#000000\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 408.483 408.483\" xml:space=\"preserve\"><g><g><path d=\"M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316 H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293 c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329 c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355 c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356 c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z\"></path><path d=\"M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916 c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z\"></path></g></g></svg>"

/***/ }),

/***/ "./src/deleteTask.js":
/*!***************************!*\
  !*** ./src/deleteTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.css */ "./src/form.css");
/* harmony import */ var _storageAvailable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageAvailable */ "./src/storageAvailable.js");
/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialLoad */ "./src/initialLoad.js");
/* harmony import */ var _taskLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskLoad */ "./src/taskLoad.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/task.js");





function deleteTask(task){
    if((0,_storageAvailable__WEBPACK_IMPORTED_MODULE_1__["default"])("localStorage")) {
        let taskList = JSON.parse(localStorage.getItem('taskList') || "[]");
        let index = taskList.map((element, index) => {
            if(element.title == task.title){
                taskList.splice(index,1);
                localStorage.setItem('taskList', JSON.stringify(taskList));
            }
            }
        );
        const todos = document.querySelector(".todos");
        todos.querySelectorAll('*').forEach(n => n.remove());
        let selected = document.querySelector('input[name="state"]:checked');
        task.project= selected.value;
        for (let i = 0; i < taskList.length; i++) {
            if(taskList[i].project == selected.value){
                let task = (0,_task__WEBPACK_IMPORTED_MODULE_4__["default"])(taskList[i].title,taskList[i].details,taskList[i].dueDate,taskList[i].priority,taskList[i].checklist,taskList[i].project);
                todos.appendChild((0,_taskLoad__WEBPACK_IMPORTED_MODULE_3__["default"])(task));
            }
        }
    }else {
        console.log("Local storage doesnt work");
    }
}

/***/ }),

/***/ "./src/editTaskForm.js":
/*!*****************************!*\
  !*** ./src/editTaskForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editTaskForm)
/* harmony export */ });
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.css */ "./src/form.css");
/* harmony import */ var _storageAvailable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageAvailable */ "./src/storageAvailable.js");
/* harmony import */ var _taskLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskLoad */ "./src/taskLoad.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");




function editTaskForm(task){

    const form = document.createElement('form');
    form.setAttribute("id", "editMyFormTask");
    form.classList.add("editFormPost");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    const title = document.createElement("input");
    title.classList.add("title");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title:Make bills");
    const details = document.createElement("input");
    details.classList.add("details");
    details.setAttribute("type", "text");
    details.setAttribute("name", "details");
    details.setAttribute("placeholder", "Details:e.g power,groceries");
    const dateDiv = document.createElement("div");

    
    const dueDate = document.createElement("input");
    const labelDueDate = document.createElement("label");
    labelDueDate.setAttribute("for","dueDate");
    labelDueDate.innerText="Due Date:";
    
    dateDiv.appendChild(labelDueDate);
    dateDiv.appendChild(dueDate);

    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("name", "dueDate");
    dueDate.setAttribute("id", "dueDate");
    dueDate.setAttribute("min", task.dueDate);
    dueDate.setAttribute("max", "2030-09-02");
    
    form.appendChild(title);
    form.appendChild(details);
    form.appendChild(dateDiv);

    const priority = {
        "Low": false,
        "Medium": false,
        "High": false,
    }
    const radioButtons=document.createElement('div');
    for (let key in priority) {
        let label = document.createElement("label");
        label.innerText = key;
        label.setAttribute('for',key);
        let input = document.createElement("input");
        if(priority[key] == true){
            input.checked=true;
        }
        input.type = "radio";
        input.name = "priority";
        
        input.setAttribute("value",key);
        input.setAttribute('id',key);
        input.classList.add("navbar-button");
        switch(key) {
            case "Low": 
                label.classList.add("greenPriority");
                break;
            case "Medium":
                label.classList.add("orangePriority");
                break;
            default:
                label.classList.add("redPriority");
        }

        radioButtons.appendChild(input);
        radioButtons.appendChild(label);
        
    }
    form.appendChild(radioButtons);
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    form.appendChild(submit);


    //emeida edw
    form.addEventListener("submit", editTask,false);
    function editTask(event){
        event.preventDefault();
        if((0,_storageAvailable__WEBPACK_IMPORTED_MODULE_1__["default"])("localStorage")) {
            const data = new FormData(form);
            let newTask = task;
            let taskList = JSON.parse(localStorage.getItem('taskList') || "[]");
            let index = taskList.map((element, index) => {
                if(element.title == task.title){
                    for (const [name,value] of data) {
                        data.forEach((value, key) => {
                            if (value!=''){
                                newTask[key] = value;
                            }
                        });
                        
                    }
                    taskList.splice(index,1,newTask);
                    localStorage.setItem('taskList', JSON.stringify(taskList));
                }
             }
            );
            let modal = document.getElementById("myModal");
            modal.style.display = "none";
            form.reset();

            const todos = document.querySelector(".todos");
            todos.querySelectorAll('*').forEach(n => n.remove());
            let selected = document.querySelector('input[name="state"]:checked');
            task.project= selected.value;
            for (let i = 0; i < taskList.length; i++) {
                if(taskList[i].project == selected.value){
                    let task = (0,_task__WEBPACK_IMPORTED_MODULE_3__["default"])(taskList[i].title,taskList[i].details,taskList[i].dueDate,taskList[i].priority,taskList[i].checklist,taskList[i].project);
                    todos.appendChild((0,_taskLoad__WEBPACK_IMPORTED_MODULE_2__["default"])(task));
                }
            }
        }else {
            console.log("Local storage doesnt work");
        }
    }
    return form;
}

/***/ }),

/***/ "./src/formLoad.js":
/*!*************************!*\
  !*** ./src/formLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formLoad)
/* harmony export */ });
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.css */ "./src/form.css");
/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskForm */ "./src/taskForm.js");
/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectForm */ "./src/projectForm.js");
/* harmony import */ var _noteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noteForm */ "./src/noteForm.js");




function formLoad(){
    
    const content = document.createElement('div');
    content.classList.add("content");
    content.appendChild(createNavBar());
    content.appendChild((0,_taskForm__WEBPACK_IMPORTED_MODULE_1__["default"])());


    
    const modalNav = content.querySelectorAll("input[name=\"formKind\"]");
    modalNav.forEach((currentValue, currentIndex, listObj)=> {
        currentValue.addEventListener("click",(e)=>{
            if(e.currentTarget.checked == true){
                const form = document.getElementsByClassName("formPost")[0];
                //modal_content.querySelectorAll('*').forEach(n => n.remove());
                
                switch(e.currentTarget.value) {
                    case "ToDo": 
                        form.replaceWith((0,_taskForm__WEBPACK_IMPORTED_MODULE_1__["default"])());
                        break;
                    case "Project":
                        form.replaceWith((0,_projectForm__WEBPACK_IMPORTED_MODULE_2__["default"])());
                        break;
                    case "Note":
                        form.replaceWith((0,_noteForm__WEBPACK_IMPORTED_MODULE_3__["default"])());
                        break;
                    default:
                        form.replaceWith((0,_taskForm__WEBPACK_IMPORTED_MODULE_1__["default"])());
                }
            }
        });
    });

    return content;
}

function createNavBar(){
    const navbar = document.createElement('div');
    navbar.classList.add("navbar");
    
    const data = {
        "ToDo": true,
        "Project": false,
        "Note": false,
    }

    for (let key in data) {
        let label = document.createElement("label");
        label.innerText = key;
        label.setAttribute('for',key);
        let input = document.createElement("input");
        if(data[key] == true){
            input.checked=true;
        }
        input.type = "radio";
        input.name = "formKind";
        input.setAttribute("value",key);
        input.setAttribute('id',key);
        input.classList.add("navbar-button");
        
        navbar.appendChild(input);
        navbar.appendChild(label);
    }
    return navbar;
}

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialLoad)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _notebook_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notebook.svg */ "./src/notebook.svg");
/* harmony import */ var _notebook_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_notebook_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _taskLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskLoad */ "./src/taskLoad.js");




function initialLoad(){
    const startView = document.createElement('div');
    const header = document.createElement('div');
    header.classList.add("header");
    header.textContent = "To-Do List";
    const mySvg = document.createElement('div');
    mySvg.classList.add("svg");
    mySvg.innerHTML = (_notebook_svg__WEBPACK_IMPORTED_MODULE_2___default());
    
    header.appendChild(mySvg);
    
    const content = document.createElement('div');
    content.classList.add("content");

    const categories = document.createElement('div');


    const navbar =document.createElement('div');
    navbar.classList.add("navbar");

    const data = {
        "Home": true,
        "Today": false,
        "Week": false,
        "Projects": false,
    }

    let projectList = JSON.parse(localStorage.getItem('projectList') || "[]");
    for (let i = 0; i < projectList.length; i++) {
        data[projectList[i].title] = false;
    }
    data["Notes"]=false;

    for (let key in data) {
        let label = document.createElement("label");
        label.innerText = key;
        label.setAttribute('for',key);
        if(key!="Projects"){
            let input = document.createElement("input");
            if(data[key] == true){
                input.checked=true;
            }
            input.type = "radio";
            input.name = "state";
            input.setAttribute("value",key);
            input.setAttribute('id',key);
            input.classList.add("navbar-button");
            
        navbar.appendChild(input);
        }
        navbar.appendChild(label);
        
    }
    





    const todos = document.createElement('div');
    todos.classList.add("todos");

    startView.appendChild(header);

    startView.appendChild(content);
    content.appendChild(navbar);
    content.appendChild(todos);

    

    const addToDoProject = document.createElement('div');
    addToDoProject.textContent="+";
    navbar.appendChild(addToDoProject);
    addToDoProject.classList.add("add-button");


    const myModal = document.createElement("div");
    myModal.setAttribute('id',"myModal");
    myModal.classList.add("modal");

    startView.appendChild(myModal);
    
    const myModalContent = document.createElement("div");
    myModalContent.classList.add("modal-content");
    myModal.appendChild(myModalContent);
    const span = document.createElement("span");
    span.classList.add("close");
    span.innerText="X";
    myModalContent.appendChild(span);

    const myModaldetails = document.createElement("div");
    myModaldetails.setAttribute('id',"myModaldetails");
    myModaldetails.classList.add("modaldetails");

    startView.appendChild(myModaldetails);
    



    let taskList = JSON.parse(localStorage.getItem('taskList') || "[]");
    
    for (let i = 0; i < taskList.length; i++) {
        if(taskList[i].project == "Home"){
            let task = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[i].title,taskList[i].details,taskList[i].dueDate,taskList[i].priority,taskList[i].checklist,taskList[i].project);
            todos.appendChild((0,_taskLoad__WEBPACK_IMPORTED_MODULE_3__["default"])(task));
        }
    }
    document.body.appendChild(startView);
}

/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNote)
/* harmony export */ });
function createNote(title,description){
    return {title,description};
}


/***/ }),

/***/ "./src/noteForm.js":
/*!*************************!*\
  !*** ./src/noteForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ noteForm)
/* harmony export */ });
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.css */ "./src/form.css");
/* harmony import */ var _storageAvailable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageAvailable */ "./src/storageAvailable.js");


function noteForm(){

    const form = document.createElement('form');
    form.setAttribute("id", "myFormNote");
    form.classList.add("formPost");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    const title = document.createElement("input");
    title.classList.add("title");
    title.setAttribute("type", "text");
    title.required=true;
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");
    const details = document.createElement("input");
    details.classList.add("details");
    details.setAttribute("type", "text");
    details.setAttribute("name", "details");
    details.setAttribute("placeholder", "Details:e.g power,groceries");
    details.required=true;
    
    form.appendChild(title);
    form.appendChild(details);
    

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Create Note");
    form.appendChild(submit);


    form.addEventListener("submit", storeNote,false);
    
    function storeNote(event){
        event.preventDefault();
        if((0,_storageAvailable__WEBPACK_IMPORTED_MODULE_1__["default"])("localStorage")) {
            const data = new FormData(form);
            let note ={};
            for (const [name,value] of data) {
                data.forEach((value, key) => note[key] = value);
            }
            let noteList = JSON.parse(localStorage.getItem('noteList') || "[]");
            noteList.push(note);
            localStorage.setItem('noteList', JSON.stringify(noteList));
            initialLoad();
            let modal = document.getElementById("myModal");
            modal.style.display = "none";
            form.reset();
        }else {
            console.log("Local storage doesnt work");
        }
    }
    return form;
}

/***/ }),

/***/ "./src/noteLoad.js":
/*!*************************!*\
  !*** ./src/noteLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ noteLoad)
/* harmony export */ });
/* harmony import */ var _taskCss_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskCss.css */ "./src/taskCss.css");


function noteLoad(note){
    const noteDOM = document.createElement('div');
    noteDOM.classList.add('task');

    const title = document.createElement('div');
    title.textContent = note.title;
    const description = document.createElement('div');
    description.textContent = note.description;
    noteDOM.appendChild(title);
    noteDOM.appendChild(description);
    return noteDOM;
}

/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectForm)
/* harmony export */ });
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.css */ "./src/form.css");
/* harmony import */ var _storageAvailable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageAvailable */ "./src/storageAvailable.js");
/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialLoad */ "./src/initialLoad.js");



function projectForm(){

    const form = document.createElement('form');
    form.setAttribute("id", "myFormProject");
    form.classList.add("formPost");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    const title = document.createElement("input");
    title.classList.add("title");
    title.setAttribute("type", "text");
    title.required=true;
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title:Electrical Design");
    
    form.appendChild(title);
    

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Create Project");
    form.appendChild(submit);
    //emeida edw
    form.addEventListener("submit", storeProject,false);
    
    function storeProject(event){
        event.preventDefault();
        if((0,_storageAvailable__WEBPACK_IMPORTED_MODULE_1__["default"])("localStorage")) {
            const data = new FormData(form);
            let project ={};
            for (const [name,value] of data) {
                data.forEach((value, key) => project[key] = value);
            }
            let projectList = JSON.parse(localStorage.getItem('projectList') || "[]");
            projectList.push(project);
            localStorage.setItem('projectList', JSON.stringify(projectList));
            (0,_initialLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();
            let modal = document.getElementById("myModal");
            modal.style.display = "none";
            form.reset();
        }else {
            console.log("Local storage doesnt work");
        }
    }
    return form;
}
        
   

/***/ }),

/***/ "./src/storageAvailable.js":
/*!*********************************!*\
  !*** ./src/storageAvailable.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storageAvailable)
/* harmony export */ });

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
function createTask(title,details,dueDate,priority,checklist,project){
    return {title,details,dueDate,priority,checklist,project};
}


/***/ }),

/***/ "./src/taskForm.js":
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.css */ "./src/form.css");
/* harmony import */ var _storageAvailable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageAvailable */ "./src/storageAvailable.js");
/* harmony import */ var _taskLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskLoad */ "./src/taskLoad.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");




function taskForm(){

    const form = document.createElement('form');
    form.setAttribute("id", "myFormTask");
    form.classList.add("formPost");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    const title = document.createElement("input");
    title.classList.add('title');
    title.setAttribute("type", "text");
    title.required=true;
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title:Make bills");
    const details = document.createElement("input");
    details.classList.add("details");
    details.setAttribute("type", "text");
    details.setAttribute("name", "details");
    details.setAttribute("placeholder", "Details:e.g power,groceries");
    details.required=true;
    const dateDiv = document.createElement("div");

    
    const dueDate = document.createElement("input");
    const labelDueDate = document.createElement("label");
    labelDueDate.setAttribute("for","dueDate");
    labelDueDate.innerText="Due Date:";
    
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("name", "dueDate");
    dueDate.setAttribute("id", "dueDate");
    dueDate.setAttribute("value", "2023-10-02");
    dueDate.setAttribute("min", "2023-09-02");
    dueDate.setAttribute("max", "2024-09-02");
    
    dateDiv.appendChild(labelDueDate);
    dateDiv.appendChild(dueDate);
    form.appendChild(title);
    form.appendChild(details);
    form.appendChild(dateDiv);
    

    const priority = {
        "Low": true,
        "Medium": false,
        "High": false,
    }
    const radioButtons= document.createElement("div");
    for (let key in priority) {
        let label = document.createElement("label");
        label.innerText = key;
        label.setAttribute('for',key);
        let input = document.createElement("input");
        if(priority[key] == true){
            input.checked=true;
        }
        input.type = "radio";
        input.name = "priority";
        input.required = true;
        
        input.setAttribute("value",key);
        input.setAttribute('id',key);
        input.classList.add("navbar-button");
        
        switch(key) {
            case "Low": 
                label.classList.add("greenPriority");
                break;
            case "Medium":
                label.classList.add("orangePriority");
                break;
            default:
                label.classList.add("redPriority");
        }

        radioButtons.appendChild(input);
        radioButtons.appendChild(label);
    }
    form.appendChild(radioButtons);
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    form.appendChild(submit);


    //emeida edw
    form.addEventListener("submit", storeTask,false);
    function storeTask(event){
        event.preventDefault();
        if((0,_storageAvailable__WEBPACK_IMPORTED_MODULE_1__["default"])("localStorage")) {
            const data = new FormData(form);
            let task ={};
            for (const [name,value] of data) {
                data.forEach((value, key) => task[key] = value);
            }
            let selected = document.querySelector('input[name="state"]:checked');
            task.project= selected.value;
            task.checklist= "no";
            
            let taskList = JSON.parse(localStorage.getItem('taskList') || "[]");
            taskList.push(task);
            localStorage.setItem('taskList', JSON.stringify(taskList));
            let modal = document.getElementById("myModal");
            modal.style.display = "none";
            form.reset();

            const todos = document.querySelector(".todos");
            todos.querySelectorAll('*').forEach(n => n.remove());

            for (let i = 0; i < taskList.length; i++) {
                if(taskList[i].project == selected.value){
                    let task = (0,_task__WEBPACK_IMPORTED_MODULE_3__["default"])(taskList[i].title,taskList[i].details,taskList[i].dueDate,taskList[i].priority,taskList[i].checklist,taskList[i].project);
                    todos.appendChild((0,_taskLoad__WEBPACK_IMPORTED_MODULE_2__["default"])(task));
                }
            }


            
        }else {
            console.log("Local storage doesnt work");
        }
    }


    return form;
}

/***/ }),

/***/ "./src/taskLoad.js":
/*!*************************!*\
  !*** ./src/taskLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskLoad)
/* harmony export */ });
/* harmony import */ var _taskCss_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskCss.css */ "./src/taskCss.css");
/* harmony import */ var _rubbish_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rubbish.svg */ "./src/rubbish.svg");
/* harmony import */ var _rubbish_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rubbish_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editTaskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTaskForm */ "./src/editTaskForm.js");
/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteTask */ "./src/deleteTask.js");





function taskLoad(task){
    const taskDOM = document.createElement('div');
    taskDOM.classList.add('task');

    const checklist = document.createElement('div');
    let input = document.createElement("input");
    
    input.type = "checkbox";
    input.name = task.name;
    
    input.setAttribute("value",task.checklist);
    //input.classList.add("navbar-button");
    
    checklist.appendChild(input);
    if(task.checklist == "yes"){
        taskDOM.classList.add("complete");
        input.checked = true;
    }

    const title = document.createElement('div');
    title.textContent = task.title;
    title.classList.add('title');


    const details = document.createElement('div');
    details.textContent = "Details^";
    details.classList.add("details");
    const detailsContent = document.createElement('div');
    detailsContent.classList.add("detailsContent");
    for (let key in task) {
        if(key!= "checklist"){
            let info = document.createElement("div");
            info.innerText = key.charAt(0).toUpperCase() + key.slice(1) + ":" + task[key];
            detailsContent.appendChild(info);
        }
    }

    details.addEventListener("click", (e)=> {
        const modal_content = document.querySelector(".modal-content");
        const modal= document.querySelector(".modal");
        modal_content.querySelectorAll('*').forEach(n => n.remove());
        modal_content.appendChild(detailsContent);
        modal.style.display = "block";
    });
    
    
    const dueDate = document.createElement('div');
    dueDate.textContent = "Due date:" + task.dueDate;
    const priority = document.createElement('div');
    priority.textContent = task.priority;
    switch(task.priority) {
        case "Low": 
            priority.classList.add("greenPriority");
            break;
        case "Medium":
            priority.classList.add("orangePriority");
            break;
        default:
            priority.classList.add("redPriority");
    }
    
    const editButton =document.createElement('div');
    editButton.classList.add("editButton");
    editButton.textContent = "Edit";
    

    editButton.addEventListener("click", (e)=> {
        const modal_content = document.querySelector(".modal-content");
        const modal= document.querySelector(".modal");
        modal_content.querySelectorAll('*').forEach(n => n.remove());
        
        modal_content.appendChild((0,_editTaskForm__WEBPACK_IMPORTED_MODULE_2__["default"])(task));
        
        modal.style.display = "block";
    });


    const deleteButton =document.createElement('div');
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = (_rubbish_svg__WEBPACK_IMPORTED_MODULE_1___default());
    
    deleteButton.addEventListener("click", (e)=> {
        (0,_deleteTask__WEBPACK_IMPORTED_MODULE_3__["default"])(task);
    });
    taskDOM.appendChild(checklist);
    taskDOM.appendChild(title);
    taskDOM.appendChild(details);
    taskDOM.appendChild(dueDate);
    taskDOM.appendChild(priority);
    taskDOM.appendChild(editButton);
    taskDOM.appendChild(deleteButton);
    
    input.addEventListener("click",(e)=>{
        let taskList = JSON.parse(localStorage.getItem('taskList') || "[]");
        let index = taskList.map((element, index) => {
               if(element.title == task.title){
                if(input.checked == true){
                    taskDOM.classList.add("complete");
                    if (index !== -1) {
                        task.checklist = "yes";
                        taskList.splice(index,1,task);
                    }
                    localStorage.setItem('taskList', JSON.stringify(taskList));
                }else{
                    taskDOM.classList.remove("complete");
                    if (index !== -1) {
                        task.checklist = "no";
                        taskList.splice(index,1,task);
                    }
                    localStorage.setItem('taskList', JSON.stringify(taskList));
                }
               }
            }
          );
    });

    return taskDOM;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./src/EventListeners.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventListeners)
/* harmony export */ });
/* harmony import */ var _formLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formLoad */ "./src/formLoad.js");
/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskForm */ "./src/taskForm.js");
/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectForm */ "./src/projectForm.js");
/* harmony import */ var _noteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noteForm */ "./src/noteForm.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _storageAvailable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storageAvailable */ "./src/storageAvailable.js");
/* harmony import */ var _taskLoad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskLoad */ "./src/taskLoad.js");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./note */ "./src/note.js");
/* harmony import */ var _noteLoad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./noteLoad */ "./src/noteLoad.js");









function EventListeners(){

    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    const add_button = document.querySelector(".add-button");
    add_button.addEventListener("click", (e)=> {
        modal_content.querySelectorAll('*').forEach(n => n.remove());
        modal_content.appendChild((0,_formLoad__WEBPACK_IMPORTED_MODULE_0__["default"])());
        modal.style.display = "block";
    });
/*
    const modalNav = document.querySelectorAll("input[name=\"formKind\"]");
    modalNav.forEach((currentValue, currentIndex, listObj)=> {
        currentValue.addEventListener("click",(e)=>{
            if(e.currentTarget.checked == true){
                const form = document.getElementsByClassName("formPost")[0];
                
                const myModal = document.createElement("div");
                myModal.setAttribute('id',"myModal");
                myModal.classList.add("modal");
                myModal.querySelectorAll('*').forEach(n => n.remove());
                startView.appendChild(myModal);
                
                const myModalContent = document.createElement("div");
                myModalContent.classList.add("modal-content");
                myModal.appendChild(myModalContent);
                const span = document.createElement("span");
                span.classList.add("close");
                span.innerText="X";
                myModalContent.appendChild(span);
                
                switch(e.currentTarget.value) {
                    case "ToDo": 
                        form.replaceWith(taskForm());
                        break;
                    case "Project":
                        form.replaceWith(projectForm());
                        break;
                    case "Note":
                        form.replaceWith(noteForm());
                        break;
                    default:
                        form.replaceWith(taskForm());
                }
            }
        })
    });*/

    const nav = document.querySelectorAll("input[name=\"state\"]");
    nav.forEach((currentValue, currentIndex, listObj)=> {
        currentValue.addEventListener("click",(e)=>{
            if(e.currentTarget.checked == true){
                const todos = document.querySelector(".todos");
                todos.querySelectorAll('*').forEach(n => n.remove());

                switch(e.currentTarget.value) {
                    case "Projects":
                        break;
                    case "Notes":
                        let noteList = JSON.parse(localStorage.getItem('noteList') || "[]");
                        for (let i = 0; i < noteList.length; i++) {
                            let note = (0,_note__WEBPACK_IMPORTED_MODULE_7__["default"])(noteList[i].title,noteList[i].details);
                            todos.appendChild((0,_noteLoad__WEBPACK_IMPORTED_MODULE_8__["default"])(note));
                        }
                        break;
                    default:
                        let taskList = JSON.parse(localStorage.getItem('taskList') || "[]");
                        for (let i = 0; i < taskList.length; i++) {
                            if(e.currentTarget.value == taskList[i].project){
                                let task = (0,_task__WEBPACK_IMPORTED_MODULE_4__["default"])(taskList[i].title,taskList[i].details,taskList[i].dueDate,taskList[i].priority,taskList[i].checklist,taskList[i].project);
                                todos.appendChild((0,_taskLoad__WEBPACK_IMPORTED_MODULE_6__["default"])(task));
                            }
                        }

                }
                
            }
        })
    });


}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFCQUFxQjtBQUM3RCx1Q0FBdUMsaURBQVU7QUFDakQsOENBQThDLHFEQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFCQUFxQjtBQUM3RDtBQUNBLDJDQUEyQyxpREFBVTtBQUNyRCxrREFBa0QscURBQVE7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7O0FBR0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza0Nzcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZm9ybS5jc3M/YzJmNSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrQ3NzLmNzcz9hODIwIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbm90ZWJvb2suc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3J1YmJpc2guc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RlbGV0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZWRpdFRhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Zvcm1Mb2FkLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25vdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbm90ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbm90ZUxvYWQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3RvcmFnZUF2YWlsYWJsZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tMb2FkLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0V2ZW50TGlzdGVuZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGVudHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuXG5sYWJlbCB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pbnB1dFt0eXBlPVwicmFkaW9cIl17XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtsYWJlbHsgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxufSBcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVsOjpiZWZvcmV7IFxuICAgIGNvbnRlbnQ6XCIvL1wiO1xufSBcbmlucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkK2xhYmVsOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6XCJcIjtcbn1cbmZvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBnYXA6IDEwcHg7XG59XG4ubW9kYWxuYXZiYXJ7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5cbi50aXRsZSwgLmRldGFpbHN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZWVuO1xufVxuXG4uZ3JlZW5Qcmlvcml0eXtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2lkdGg6IDUwcHg7XG59XG4ub3JhbmdlUHJpb3JpdHl7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2lkdGg6IDUwcHg7XG59XG4ucmVkUHJpb3JpdHl7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5lZGl0Rm9ybVBvc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7OztBQUlBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsU0FBUztBQUNiO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuXFxubGFiZWwge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJde1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQrbGFiZWx7IFxcbiAgICBmb250LXdlaWdodDogYm9sZDsgXFxufSBcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQrbGFiZWw6OmJlZm9yZXsgXFxuICAgIGNvbnRlbnQ6XFxcIi8vXFxcIjtcXG59IFxcbmlucHV0W25hbWU9XFxcInByaW9yaXR5XFxcIl06Y2hlY2tlZCtsYWJlbDo6YmVmb3JlIHtcXG4gICAgY29udGVudDpcXFwiXFxcIjtcXG59XFxuZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLm1vZGFsbmF2YmFye1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLnRpdGxlLCAuZGV0YWlsc3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uZ3JlZW5Qcmlvcml0eXtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcbi5vcmFuZ2VQcmlvcml0eXtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuLnJlZFByaW9yaXR5e1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uZWRpdEZvcm1Qb3N0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keSwgYm9keSA+IGRpdiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGFxdWFtYXJpbmU7XG59XG4uc3Zne1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiAxZW07XG59XG5cblxuLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG59XG5cbi5uYXZiYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XG4gICAgXG59XG4ubmF2YmFyLWJ1dHRvbjpob3ZlciwgLm5hdmJhci1idXR0b246YWN0aXZle1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5hdmJhci1idXR0b246aG92ZXI6OmJlZm9yZSB7XG4gICAgY29udGVudDogJy8vJztcbiAgfVxuICBcbi5uYXZiYXItYnV0dG9ue1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLmFkZC1idXR0b257XG4gICAgY29sb3I6ICMwMDA7IC8qIEZhbGxiYWNrIGZvciBvbGRlciBicm93c2VycyAqL1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG5sYWJlbCB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyIGlucHV0W3R5cGU9XCJyYWRpb1wiXXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVseyBcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG59IFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrbGFiZWw6OmJlZm9yZXsgXG4gICAgY29udGVudDpcIi8vXCI7XG59IFxuXG5cblxuLm1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICBcbn1cbiAgLm1vZGFsLWNvbnRlbnQgPiAuY29udGVudCA+Lm5hdmJhcntcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweCAyMHB4O1xuICAgIFxuICB9XG4gIC8qIE1vZGFsIENvbnRlbnQvQm94ICovXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICB9XG4gIFxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXG4gIC5jbG9zZSB7XG4gICAgY29sb3I6ICNhYWE7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLmNsb3NlOmhvdmVyLFxuICAuY2xvc2U6Zm9jdXMge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsb0NBQW9DOztBQUV4QztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7RUFDZjs7QUFFRjtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVyxFQUFFLGdDQUFnQztJQUM3Qyx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7Ozs7QUFJQTtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsb0NBQW9DO0lBQ3BDLDBCQUEwQjs7QUFFOUI7RUFDRTtJQUNFLGlDQUFpQztJQUNqQyxvQ0FBb0M7O0VBRXRDO0VBQ0Esc0JBQXNCO0VBQ3RCO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFFLGtDQUFrQztJQUNwRCw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVSxFQUFFLG9EQUFvRDtJQUNoRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGJvZHkgPiBkaXYge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbi5zdmd7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbn1cXG5cXG5cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG4ubmF2YmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcXG4gICAgXFxufVxcbi5uYXZiYXItYnV0dG9uOmhvdmVyLCAubmF2YmFyLWJ1dHRvbjphY3RpdmV7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5uYXZiYXItYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnLy8nO1xcbiAgfVxcbiAgXFxuLm5hdmJhci1idXR0b257XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5hZGQtYnV0dG9ue1xcbiAgICBjb2xvcjogIzAwMDsgLyogRmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXZiYXIgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkK2xhYmVseyBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbn0gXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkK2xhYmVsOjpiZWZvcmV7IFxcbiAgICBjb250ZW50OlxcXCIvL1xcXCI7XFxufSBcXG5cXG5cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgIFxcbn1cXG4gIC5tb2RhbC1jb250ZW50ID4gLmNvbnRlbnQgPi5uYXZiYXJ7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHggMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweCAyMHB4O1xcbiAgICBcXG4gIH1cXG4gIC8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICB9XFxuICBcXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4gIC5jbG9zZSB7XFxuICAgIGNvbG9yOiAjYWFhO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICBcXG4gIC5jbG9zZTpob3ZlcixcXG4gIC5jbG9zZTpmb2N1cyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGFza3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpOyAgICBcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZ2FwOiAzMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgb3JhbmdlO1xufVxuXG4udGFzazpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpIHBlcnNwZWN0aXZlKDBweCk7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjcpO1xufVxuXG4udGl0bGV7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5jb21wbGV0ZXtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG4uZGV0YWlsc3tcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGV0YWlsc0NvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmdyZWVuUHJpb3JpdHl7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLm9yYW5nZVByaW9yaXR5e1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLnJlZFByaW9yaXR5e1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLmVkaXRCdXR0b257XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRlbGV0ZXtcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdGFza0Nzcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksT0FBTztJQUNQLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTsgICAgXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIG9yYW5nZTtcXG59XFxuXFxuLnRhc2s6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMikgcGVyc3BlY3RpdmUoMHB4KTtcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjcpO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmNvbXBsZXRle1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcbi5kZXRhaWxze1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZGV0YWlsc0NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uZ3JlZW5Qcmlvcml0eXtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcbi5vcmFuZ2VQcmlvcml0eXtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuLnJlZFByaW9yaXR5e1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG4uZWRpdEJ1dHRvbntcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmRlbGV0ZXtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrQ3NzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza0Nzcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIGZpbGw9XFxcIiMwMDAwMDBcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48Zz48cGF0aCBkPVxcXCJNNDU2LjM0OCwwaC02Ni43ODNIMjc4LjI2MUg1NS42NTJjLTkuMjIsMC0xNi42OTYsNy40NzUtMTYuNjk2LDE2LjY5NnY0NzguNjA5YzAsOS4yMiw3LjQ3NSwxNi42OTYsMTYuNjk2LDE2LjY5NiBoNDAwLjY5NmM5LjIyLDAsMTYuNjk2LTcuNDc1LDE2LjY5Ni0xNi42OTZWMTYuNjk2QzQ3My4wNDMsNy40NzUsNDY1LjU2OCwwLDQ1Ni4zNDgsMHogTTI5NC45NTcsMzMuMzkxaDc3LjkxM3YxMDQuMTQ2IGwtMjYuMTMxLTMxLjM1N2MtMy4xNzEtMy44MDUtNy44Ny02LjAwNy0xMi44MjYtNi4wMDdzLTkuNjU1LDIuMjAyLTEyLjgyNiw2LjAwN2wtMjYuMTMxLDMxLjM1N1YzMy4zOTF6IE0xMDUuNzM5LDQ3OC42MDlINzIuMzQ4IFYzMy4zOTFoMzMuMzkxVjQ3OC42MDl6IE00MzkuNjUzLDQ3OC42MDloLTAuMDAxSDEzOS4xM1YzMy4zOTFoMTIyLjQzNXYxNTAuMjYxYzAsNy4wMjksNC40MDIsMTMuMzA1LDExLjAxMiwxNS42OTggYzYuNjEzLDIuMzk0LDE0LjAxLDAuMzg4LDE4LjUxLTUuMDExbDQyLjgyNS01MS4zOWw0Mi44MjcsNTEuMzkxYzMuMjM0LDMuODgyLDcuOTY4LDYuMDA4LDEyLjgyOSw2LjAwOCBjMS45MDEsMCwzLjgyMy0wLjMyNiw1LjY4MS0wLjk5N2M2LjYwOS0yLjM5MywxMS4wMTItOC42NjksMTEuMDEyLTE1LjY5OFYzMy4zOTFoMzMuMzkxVjQ3OC42MDl6XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNMzU2LjE3NCwzMTEuNjUySDIyMi42MDljLTkuMjIsMC0xNi42OTYsNy40NzUtMTYuNjk2LDE2LjY5NnM3LjQ3NSwxNi42OTYsMTYuNjk2LDE2LjY5NmgxMzMuNTY1IGM5LjIyLDAsMTYuNjk2LTcuNDc1LDE2LjY5Ni0xNi42OTZTMzY1LjM5NCwzMTEuNjUyLDM1Ni4xNzQsMzExLjY1MnpcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjxnPjxwYXRoIGQ9XFxcIk0zODkuNTY1LDM3OC40MzVIMTg5LjIxN2MtOS4yMiwwLTE2LjY5Niw3LjQ3NS0xNi42OTYsMTYuNjk2czcuNDc1LDE2LjY5NiwxNi42OTYsMTYuNjk2aDIwMC4zNDggYzkuMjIsMCwxNi42OTYtNy40NzUsMTYuNjk2LTE2LjY5NlMzOTguNzg2LDM3OC40MzUsMzg5LjU2NSwzNzguNDM1elxcXCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBmaWxsPVxcXCIjMDAwMDAwXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDguNDgzIDQwOC40ODNcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxnPjxwYXRoIGQ9XFxcIk04Ny43NDgsMzg4Ljc4NGMwLjQ2MSwxMS4wMSw5LjUyMSwxOS42OTksMjAuNTM5LDE5LjY5OWgxOTEuOTExYzExLjAxOCwwLDIwLjA3OC04LjY4OSwyMC41MzktMTkuNjk5bDEzLjcwNS0yODkuMzE2IEg3NC4wNDNMODcuNzQ4LDM4OC43ODR6IE0yNDcuNjU1LDE3MS4zMjljMC00LjYxLDMuNzM4LTguMzQ5LDguMzUtOC4zNDloMTMuMzU1YzQuNjA5LDAsOC4zNSwzLjczOCw4LjM1LDguMzQ5djE2NS4yOTMgYzAsNC42MTEtMy43MzgsOC4zNDktOC4zNSw4LjM0OWgtMTMuMzU1Yy00LjYxLDAtOC4zNS0zLjczNi04LjM1LTguMzQ5VjE3MS4zMjl6IE0xODkuMjE2LDE3MS4zMjkgYzAtNC42MSwzLjczOC04LjM0OSw4LjM0OS04LjM0OWgxMy4zNTVjNC42MDksMCw4LjM0OSwzLjczOCw4LjM0OSw4LjM0OXYxNjUuMjkzYzAsNC42MTEtMy43MzcsOC4zNDktOC4zNDksOC4zNDloLTEzLjM1NSBjLTQuNjEsMC04LjM0OS0zLjczNi04LjM0OS04LjM0OVYxNzEuMzI5TDE4OS4yMTYsMTcxLjMyOXogTTEzMC43NzUsMTcxLjMyOWMwLTQuNjEsMy43MzgtOC4zNDksOC4zNDktOC4zNDloMTMuMzU2IGM0LjYxLDAsOC4zNDksMy43MzgsOC4zNDksOC4zNDl2MTY1LjI5M2MwLDQuNjExLTMuNzM4LDguMzQ5LTguMzQ5LDguMzQ5aC0xMy4zNTZjLTQuNjEsMC04LjM0OS0zLjczNi04LjM0OS04LjM0OVYxNzEuMzI5elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0zNDMuNTY3LDIxLjA0M2gtODguNTM1VjQuMzA1YzAtMi4zNzctMS45MjctNC4zMDUtNC4zMDUtNC4zMDVoLTkyLjk3MWMtMi4zNzcsMC00LjMwNCwxLjkyOC00LjMwNCw0LjMwNXYxNi43MzdINjQuOTE2IGMtNy4xMjUsMC0xMi45LDUuNzc2LTEyLjksMTIuOTAxVjc0LjQ3aDMwNC40NTFWMzMuOTQ0QzM1Ni40NjcsMjYuODE5LDM1MC42OTIsMjEuMDQzLDM0My41NjcsMjEuMDQzelxcXCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+XCIiLCJpbXBvcnQgJy4vZm9ybS5jc3MnO1xuaW1wb3J0IHN0b3JhZ2VBdmFpbGFibGUgZnJvbSAnLi9zdG9yYWdlQXZhaWxhYmxlJztcbmltcG9ydCBpbml0aWFsTG9hZCBmcm9tICcuL2luaXRpYWxMb2FkJztcbmltcG9ydCB0YXNrTG9hZCBmcm9tICcuL3Rhc2tMb2FkJztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vdGFzayc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUYXNrKHRhc2spe1xuICAgIGlmKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgICAgbGV0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSB8fCBcIltdXCIpO1xuICAgICAgICBsZXQgaW5kZXggPSB0YXNrTGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50LnRpdGxlID09IHRhc2sudGl0bGUpe1xuICAgICAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIik7XG4gICAgICAgIHRvZG9zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKG4gPT4gbi5yZW1vdmUoKSk7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJzdGF0ZVwiXTpjaGVja2VkJyk7XG4gICAgICAgIHRhc2sucHJvamVjdD0gc2VsZWN0ZWQudmFsdWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRhc2tMaXN0W2ldLnByb2plY3QgPT0gc2VsZWN0ZWQudmFsdWUpe1xuICAgICAgICAgICAgICAgIGxldCB0YXNrID0gY3JlYXRlVGFzayh0YXNrTGlzdFtpXS50aXRsZSx0YXNrTGlzdFtpXS5kZXRhaWxzLHRhc2tMaXN0W2ldLmR1ZURhdGUsdGFza0xpc3RbaV0ucHJpb3JpdHksdGFza0xpc3RbaV0uY2hlY2tsaXN0LHRhc2tMaXN0W2ldLnByb2plY3QpO1xuICAgICAgICAgICAgICAgIHRvZG9zLmFwcGVuZENoaWxkKHRhc2tMb2FkKHRhc2spKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1lbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2NhbCBzdG9yYWdlIGRvZXNudCB3b3JrXCIpO1xuICAgIH1cbn0iLCJpbXBvcnQgJy4vZm9ybS5jc3MnO1xuaW1wb3J0IHN0b3JhZ2VBdmFpbGFibGUgZnJvbSAnLi9zdG9yYWdlQXZhaWxhYmxlJztcbmltcG9ydCB0YXNrTG9hZCBmcm9tICcuL3Rhc2tMb2FkJztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vdGFzayc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0VGFza0Zvcm0odGFzayl7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0TXlGb3JtVGFza1wiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJlZGl0Rm9ybVBvc3RcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZTpNYWtlIGJpbGxzXCIpO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRldGFpbHNcIik7XG4gICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRldGFpbHM6ZS5nIHBvd2VyLGdyb2Nlcmllc1wiKTtcbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIFxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImR1ZURhdGVcIik7XG4gICAgbGFiZWxEdWVEYXRlLmlubmVyVGV4dD1cIkR1ZSBEYXRlOlwiO1xuICAgIFxuICAgIGRhdGVEaXYuYXBwZW5kQ2hpbGQobGFiZWxEdWVEYXRlKTtcbiAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWVEYXRlXCIpO1xuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlXCIpO1xuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwibWluXCIsIHRhc2suZHVlRGF0ZSk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIyMDMwLTA5LTAyXCIpO1xuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlRGl2KTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0ge1xuICAgICAgICBcIkxvd1wiOiBmYWxzZSxcbiAgICAgICAgXCJNZWRpdW1cIjogZmFsc2UsXG4gICAgICAgIFwiSGlnaFwiOiBmYWxzZSxcbiAgICB9XG4gICAgY29uc3QgcmFkaW9CdXR0b25zPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGtleSBpbiBwcmlvcml0eSkge1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGtleTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGtleSk7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaWYocHJpb3JpdHlba2V5XSA9PSB0cnVlKXtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQ9dHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICBpbnB1dC5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgICAgICBcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixrZXkpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJyxrZXkpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWJ1dHRvblwiKTtcbiAgICAgICAgc3dpdGNoKGtleSkge1xuICAgICAgICAgICAgY2FzZSBcIkxvd1wiOiBcbiAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5Qcmlvcml0eVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJNZWRpdW1cIjpcbiAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwib3JhbmdlUHJpb3JpdHlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJyZWRQcmlvcml0eVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJhZGlvQnV0dG9ucy5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIHJhZGlvQnV0dG9ucy5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBmb3JtLmFwcGVuZENoaWxkKHJhZGlvQnV0dG9ucyk7XG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlN1Ym1pdFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cblxuICAgIC8vZW1laWRhIGVkd1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlZGl0VGFzayxmYWxzZSk7XG4gICAgZnVuY3Rpb24gZWRpdFRhc2soZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSB0YXNrO1xuICAgICAgICAgICAgbGV0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSB8fCBcIltdXCIpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGFza0xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudGl0bGUgPT0gdGFzay50aXRsZSl7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW25hbWUsdmFsdWVdIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSE9Jycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZShpbmRleCwxLG5ld1Rhc2spO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuXG4gICAgICAgICAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIik7XG4gICAgICAgICAgICB0b2Rvcy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChuID0+IG4ucmVtb3ZlKCkpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInN0YXRlXCJdOmNoZWNrZWQnKTtcbiAgICAgICAgICAgIHRhc2sucHJvamVjdD0gc2VsZWN0ZWQudmFsdWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYodGFza0xpc3RbaV0ucHJvamVjdCA9PSBzZWxlY3RlZC52YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrID0gY3JlYXRlVGFzayh0YXNrTGlzdFtpXS50aXRsZSx0YXNrTGlzdFtpXS5kZXRhaWxzLHRhc2tMaXN0W2ldLmR1ZURhdGUsdGFza0xpc3RbaV0ucHJpb3JpdHksdGFza0xpc3RbaV0uY2hlY2tsaXN0LHRhc2tMaXN0W2ldLnByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICB0b2Rvcy5hcHBlbmRDaGlsZCh0YXNrTG9hZCh0YXNrKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2FsIHN0b3JhZ2UgZG9lc250IHdvcmtcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvcm07XG59IiwiaW1wb3J0ICcuL2Zvcm0uY3NzJztcbmltcG9ydCB0YXNrRm9ybSBmcm9tICcuL3Rhc2tGb3JtJztcbmltcG9ydCBwcm9qZWN0Rm9ybSBmcm9tICcuL3Byb2plY3RGb3JtJztcbmltcG9ydCBub3RlRm9ybSBmcm9tICcuL25vdGVGb3JtJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1Mb2FkKCl7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrRm9ybSgpKTtcblxuXG4gICAgXG4gICAgY29uc3QgbW9kYWxOYXYgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVxcXCJmb3JtS2luZFxcXCJdXCIpO1xuICAgIG1vZGFsTmF2LmZvckVhY2goKGN1cnJlbnRWYWx1ZSwgY3VycmVudEluZGV4LCBsaXN0T2JqKT0+IHtcbiAgICAgICAgY3VycmVudFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xuICAgICAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3JtUG9zdFwiKVswXTtcbiAgICAgICAgICAgICAgICAvL21vZGFsX2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2gobiA9PiBuLnJlbW92ZSgpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzd2l0Y2goZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJUb0RvXCI6IFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBsYWNlV2l0aCh0YXNrRm9ybSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUHJvamVjdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBsYWNlV2l0aChwcm9qZWN0Rm9ybSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTm90ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBsYWNlV2l0aChub3RlRm9ybSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBsYWNlV2l0aCh0YXNrRm9ybSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpe1xuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICAgIFxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIFwiVG9Eb1wiOiB0cnVlLFxuICAgICAgICBcIlByb2plY3RcIjogZmFsc2UsXG4gICAgICAgIFwiTm90ZVwiOiBmYWxzZSxcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGtleTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGtleSk7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaWYoZGF0YVtrZXldID09IHRydWUpe1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZD10cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBcImZvcm1LaW5kXCI7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsa2V5KTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsa2V5KTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1idXR0b25cIik7XG4gICAgICAgIFxuICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIH1cbiAgICByZXR1cm4gbmF2YmFyO1xufSIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFN2ZyBmcm9tICcuL25vdGVib29rLnN2Zyc7XG5pbXBvcnQgdGFza0xvYWQgZnJvbSBcIi4vdGFza0xvYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxMb2FkKCl7XG4gICAgY29uc3Qgc3RhcnRWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJUby1EbyBMaXN0XCI7XG4gICAgY29uc3QgbXlTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBteVN2Zy5jbGFzc0xpc3QuYWRkKFwic3ZnXCIpO1xuICAgIG15U3ZnLmlubmVySFRNTCA9IFN2ZztcbiAgICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobXlTdmcpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICBjb25zdCBuYXZiYXIgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgXCJIb21lXCI6IHRydWUsXG4gICAgICAgIFwiVG9kYXlcIjogZmFsc2UsXG4gICAgICAgIFwiV2Vla1wiOiBmYWxzZSxcbiAgICAgICAgXCJQcm9qZWN0c1wiOiBmYWxzZSxcbiAgICB9XG5cbiAgICBsZXQgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpIHx8IFwiW11cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRhW3Byb2plY3RMaXN0W2ldLnRpdGxlXSA9IGZhbHNlO1xuICAgIH1cbiAgICBkYXRhW1wiTm90ZXNcIl09ZmFsc2U7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGtleTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGtleSk7XG4gICAgICAgIGlmKGtleSE9XCJQcm9qZWN0c1wiKXtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGlmKGRhdGFba2V5XSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkPXRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICAgICAgaW5wdXQubmFtZSA9IFwic3RhdGVcIjtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsa2V5KTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLGtleSk7XG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcblxuXG5cblxuXG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvcy5jbGFzc0xpc3QuYWRkKFwidG9kb3NcIik7XG5cbiAgICBzdGFydFZpZXcuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIHN0YXJ0Vmlldy5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2Rvcyk7XG5cbiAgICBcblxuICAgIGNvbnN0IGFkZFRvRG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkVG9Eb1Byb2plY3QudGV4dENvbnRlbnQ9XCIrXCI7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGFkZFRvRG9Qcm9qZWN0KTtcbiAgICBhZGRUb0RvUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ1dHRvblwiKTtcblxuXG4gICAgY29uc3QgbXlNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbXlNb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJyxcIm15TW9kYWxcIik7XG4gICAgbXlNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cbiAgICBzdGFydFZpZXcuYXBwZW5kQ2hpbGQobXlNb2RhbCk7XG4gICAgXG4gICAgY29uc3QgbXlNb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG15TW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICAgIG15TW9kYWwuYXBwZW5kQ2hpbGQobXlNb2RhbENvbnRlbnQpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcbiAgICBzcGFuLmlubmVyVGV4dD1cIlhcIjtcbiAgICBteU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGNvbnN0IG15TW9kYWxkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBteU1vZGFsZGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2lkJyxcIm15TW9kYWxkZXRhaWxzXCIpO1xuICAgIG15TW9kYWxkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJtb2RhbGRldGFpbHNcIik7XG5cbiAgICBzdGFydFZpZXcuYXBwZW5kQ2hpbGQobXlNb2RhbGRldGFpbHMpO1xuICAgIFxuXG5cblxuICAgIGxldCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykgfHwgXCJbXVwiKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRhc2tMaXN0W2ldLnByb2plY3QgPT0gXCJIb21lXCIpe1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tMaXN0W2ldLnRpdGxlLHRhc2tMaXN0W2ldLmRldGFpbHMsdGFza0xpc3RbaV0uZHVlRGF0ZSx0YXNrTGlzdFtpXS5wcmlvcml0eSx0YXNrTGlzdFtpXS5jaGVja2xpc3QsdGFza0xpc3RbaV0ucHJvamVjdCk7XG4gICAgICAgICAgICB0b2Rvcy5hcHBlbmRDaGlsZCh0YXNrTG9hZCh0YXNrKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGFydFZpZXcpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5vdGUodGl0bGUsZGVzY3JpcHRpb24pe1xuICAgIHJldHVybiB7dGl0bGUsZGVzY3JpcHRpb259O1xufVxuIiwiaW1wb3J0ICcuL2Zvcm0uY3NzJztcbmltcG9ydCBzdG9yYWdlQXZhaWxhYmxlIGZyb20gJy4vc3RvcmFnZUF2YWlsYWJsZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3RlRm9ybSgpe1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlGb3JtTm90ZVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtUG9zdFwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlLnJlcXVpcmVkPXRydWU7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGV0YWlsc1wiKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGV0YWlsczplLmcgcG93ZXIsZ3JvY2VyaWVzXCIpO1xuICAgIGRldGFpbHMucmVxdWlyZWQ9dHJ1ZTtcbiAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICAgIFxuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkNyZWF0ZSBOb3RlXCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN0b3JlTm90ZSxmYWxzZSk7XG4gICAgXG4gICAgZnVuY3Rpb24gc3RvcmVOb3RlKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGxldCBub3RlID17fTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW25hbWUsdmFsdWVdIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IG5vdGVba2V5XSA9IHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBub3RlTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVMaXN0JykgfHwgXCJbXVwiKTtcbiAgICAgICAgICAgIG5vdGVMaXN0LnB1c2gobm90ZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZUxpc3QnLCBKU09OLnN0cmluZ2lmeShub3RlTGlzdCkpO1xuICAgICAgICAgICAgaW5pdGlhbExvYWQoKTtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2NhbCBzdG9yYWdlIGRvZXNudCB3b3JrXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xufSIsImltcG9ydCAnLi90YXNrQ3NzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vdGVMb2FkKG5vdGUpe1xuICAgIGNvbnN0IG5vdGVET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RlRE9NLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBub3RlLnRpdGxlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBub3RlLmRlc2NyaXB0aW9uO1xuICAgIG5vdGVET00uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG5vdGVET00uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIHJldHVybiBub3RlRE9NO1xufSIsImltcG9ydCAnLi9mb3JtLmNzcyc7XG5pbXBvcnQgc3RvcmFnZUF2YWlsYWJsZSBmcm9tICcuL3N0b3JhZ2VBdmFpbGFibGUnO1xuaW1wb3J0IGluaXRpYWxMb2FkIGZyb20gJy4vaW5pdGlhbExvYWQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdEZvcm0oKXtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15Rm9ybVByb2plY3RcIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVBvc3RcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZS5yZXF1aXJlZD10cnVlO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlOkVsZWN0cmljYWwgRGVzaWduXCIpO1xuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIFxuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkNyZWF0ZSBQcm9qZWN0XCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAvL2VtZWlkYSBlZHdcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3RvcmVQcm9qZWN0LGZhbHNlKTtcbiAgICBcbiAgICBmdW5jdGlvbiBzdG9yZVByb2plY3QoZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPXt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBbbmFtZSx2YWx1ZV0gb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gcHJvamVjdFtrZXldID0gdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKSB8fCBcIltdXCIpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICBpbml0aWFsTG9hZCgpO1xuICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvY2FsIHN0b3JhZ2UgZG9lc250IHdvcmtcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvcm07XG59XG4gICAgICAgIFxuICAgIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICApO1xuICAgIH1cbiAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsZGV0YWlscyxkdWVEYXRlLHByaW9yaXR5LGNoZWNrbGlzdCxwcm9qZWN0KXtcbiAgICByZXR1cm4ge3RpdGxlLGRldGFpbHMsZHVlRGF0ZSxwcmlvcml0eSxjaGVja2xpc3QscHJvamVjdH07XG59XG4iLCJpbXBvcnQgJy4vZm9ybS5jc3MnO1xuaW1wb3J0IHN0b3JhZ2VBdmFpbGFibGUgZnJvbSAnLi9zdG9yYWdlQXZhaWxhYmxlJztcbmltcG9ydCB0YXNrTG9hZCBmcm9tICcuL3Rhc2tMb2FkJztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vdGFzayc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRm9ybSgpe1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXlGb3JtVGFza1wiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtUG9zdFwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCJcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZS5yZXF1aXJlZD10cnVlO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlOk1ha2UgYmlsbHNcIik7XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGV0YWlsc1wiKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGV0YWlsczplLmcgcG93ZXIsZ3JvY2VyaWVzXCIpO1xuICAgIGRldGFpbHMucmVxdWlyZWQ9dHJ1ZTtcbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIFxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgbGFiZWxEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcImR1ZURhdGVcIik7XG4gICAgbGFiZWxEdWVEYXRlLmlubmVyVGV4dD1cIkR1ZSBEYXRlOlwiO1xuICAgIFxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiMjAyMy0xMC0wMlwiKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjIwMjMtMDktMDJcIik7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIyMDI0LTA5LTAyXCIpO1xuICAgIFxuICAgIGRhdGVEaXYuYXBwZW5kQ2hpbGQobGFiZWxEdWVEYXRlKTtcbiAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgICBcblxuICAgIGNvbnN0IHByaW9yaXR5ID0ge1xuICAgICAgICBcIkxvd1wiOiB0cnVlLFxuICAgICAgICBcIk1lZGl1bVwiOiBmYWxzZSxcbiAgICAgICAgXCJIaWdoXCI6IGZhbHNlLFxuICAgIH1cbiAgICBjb25zdCByYWRpb0J1dHRvbnM9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9yIChsZXQga2V5IGluIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0ga2V5O1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2Zvcicsa2V5KTtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpZihwcmlvcml0eVtrZXldID09IHRydWUpe1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZD10cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsa2V5KTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsa2V5KTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1idXR0b25cIik7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2goa2V5KSB7XG4gICAgICAgICAgICBjYXNlIFwiTG93XCI6IFxuICAgICAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJncmVlblByaW9yaXR5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk1lZGl1bVwiOlxuICAgICAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJvcmFuZ2VQcmlvcml0eVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInJlZFByaW9yaXR5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmFkaW9CdXR0b25zLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgcmFkaW9CdXR0b25zLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICB9XG4gICAgZm9ybS5hcHBlbmRDaGlsZChyYWRpb0J1dHRvbnMpO1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG5cbiAgICAvL2VtZWlkYSBlZHdcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3RvcmVUYXNrLGZhbHNlKTtcbiAgICBmdW5jdGlvbiBzdG9yZVRhc2soZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICAgICAgbGV0IHRhc2sgPXt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBbbmFtZSx2YWx1ZV0gb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFza1trZXldID0gdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInN0YXRlXCJdOmNoZWNrZWQnKTtcbiAgICAgICAgICAgIHRhc2sucHJvamVjdD0gc2VsZWN0ZWQudmFsdWU7XG4gICAgICAgICAgICB0YXNrLmNoZWNrbGlzdD0gXCJub1wiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpIHx8IFwiW11cIik7XG4gICAgICAgICAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuICAgICAgICAgICAgdG9kb3MucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2gobiA9PiBuLnJlbW92ZSgpKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHRhc2tMaXN0W2ldLnByb2plY3QgPT0gc2VsZWN0ZWQudmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFzayA9IGNyZWF0ZVRhc2sodGFza0xpc3RbaV0udGl0bGUsdGFza0xpc3RbaV0uZGV0YWlscyx0YXNrTGlzdFtpXS5kdWVEYXRlLHRhc2tMaXN0W2ldLnByaW9yaXR5LHRhc2tMaXN0W2ldLmNoZWNrbGlzdCx0YXNrTGlzdFtpXS5wcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb3MuYXBwZW5kQ2hpbGQodGFza0xvYWQodGFzaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2NhbCBzdG9yYWdlIGRvZXNudCB3b3JrXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gZm9ybTtcbn0iLCJpbXBvcnQgJy4vdGFza0Nzcy5jc3MnO1xuaW1wb3J0IFN2ZyBmcm9tICcuL3J1YmJpc2guc3ZnJztcbmltcG9ydCBlZGl0VGFza0Zvcm0gZnJvbSAnLi9lZGl0VGFza0Zvcm0nO1xuaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSAnLi9kZWxldGVUYXNrJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0xvYWQodGFzayl7XG4gICAgY29uc3QgdGFza0RPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tET00uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIFxuICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgaW5wdXQubmFtZSA9IHRhc2submFtZTtcbiAgICBcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLHRhc2suY2hlY2tsaXN0KTtcbiAgICAvL2lucHV0LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItYnV0dG9uXCIpO1xuICAgIFxuICAgIGNoZWNrbGlzdC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgaWYodGFzay5jaGVja2xpc3QgPT0gXCJ5ZXNcIil7XG4gICAgICAgIHRhc2tET00uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG5cbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlscy50ZXh0Q29udGVudCA9IFwiRGV0YWlsc15cIjtcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuICAgIGNvbnN0IGRldGFpbHNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsc0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRldGFpbHNDb250ZW50XCIpO1xuICAgIGZvciAobGV0IGtleSBpbiB0YXNrKSB7XG4gICAgICAgIGlmKGtleSE9IFwiY2hlY2tsaXN0XCIpe1xuICAgICAgICAgICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaW5mby5pbm5lclRleHQgPSBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSkgKyBcIjpcIiArIHRhc2tba2V5XTtcbiAgICAgICAgICAgIGRldGFpbHNDb250ZW50LmFwcGVuZENoaWxkKGluZm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0YWlscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4ge1xuICAgICAgICBjb25zdCBtb2RhbF9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xuICAgICAgICBjb25zdCBtb2RhbD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgICAgICAgbW9kYWxfY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChuID0+IG4ucmVtb3ZlKCkpO1xuICAgICAgICBtb2RhbF9jb250ZW50LmFwcGVuZENoaWxkKGRldGFpbHNDb250ZW50KTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcbiAgICBcbiAgICBcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGU6XCIgKyB0YXNrLmR1ZURhdGU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgc3dpdGNoKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgICAgY2FzZSBcIkxvd1wiOiBcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJncmVlblByaW9yaXR5XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJNZWRpdW1cIjpcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJvcmFuZ2VQcmlvcml0eVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInJlZFByaW9yaXR5XCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBlZGl0QnV0dG9uID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0QnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBcblxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHtcbiAgICAgICAgY29uc3QgbW9kYWxfY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgbW9kYWw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gICAgICAgIG1vZGFsX2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2gobiA9PiBuLnJlbW92ZSgpKTtcbiAgICAgICAgXG4gICAgICAgIG1vZGFsX2NvbnRlbnQuYXBwZW5kQ2hpbGQoZWRpdFRhc2tGb3JtKHRhc2spKTtcbiAgICAgICAgXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IFN2ZztcbiAgICBcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHtcbiAgICAgICAgZGVsZXRlVGFzayh0YXNrKTtcbiAgICB9KTtcbiAgICB0YXNrRE9NLmFwcGVuZENoaWxkKGNoZWNrbGlzdCk7XG4gICAgdGFza0RPTS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGFza0RPTS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcbiAgICB0YXNrRE9NLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIHRhc2tET00uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHRhc2tET00uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgdGFza0RPTS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIFxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xuICAgICAgICBsZXQgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpIHx8IFwiW11cIik7XG4gICAgICAgIGxldCBpbmRleCA9IHRhc2tMaXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudGl0bGUgPT0gdGFzay50aXRsZSl7XG4gICAgICAgICAgICAgICAgaWYoaW5wdXQuY2hlY2tlZCA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgdGFza0RPTS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suY2hlY2tsaXN0ID0gXCJ5ZXNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZShpbmRleCwxLHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tET00uY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmNoZWNrbGlzdCA9IFwibm9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZShpbmRleCwxLHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFza0RPTTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZm9ybUxvYWQgZnJvbSBcIi4vZm9ybUxvYWRcIjtcbmltcG9ydCB0YXNrRm9ybSBmcm9tICcuL3Rhc2tGb3JtJztcbmltcG9ydCBwcm9qZWN0Rm9ybSBmcm9tICcuL3Byb2plY3RGb3JtJztcbmltcG9ydCBub3RlRm9ybSBmcm9tICcuL25vdGVGb3JtJztcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBzdG9yYWdlQXZhaWxhYmxlIGZyb20gXCIuL3N0b3JhZ2VBdmFpbGFibGVcIjtcbmltcG9ydCB0YXNrTG9hZCBmcm9tIFwiLi90YXNrTG9hZFwiO1xuaW1wb3J0IGNyZWF0ZU5vdGUgZnJvbSBcIi4vbm90ZVwiO1xuaW1wb3J0IG5vdGVMb2FkIGZyb20gXCIuL25vdGVMb2FkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudExpc3RlbmVycygpe1xuXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpO1xuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuICAgIGxldCBtb2RhbF9jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWNvbnRlbnRcIilbMF07XG4gICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgXG4gICAgXG5cbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBhZGRfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYnV0dG9uXCIpO1xuICAgIGFkZF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHtcbiAgICAgICAgbW9kYWxfY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChuID0+IG4ucmVtb3ZlKCkpO1xuICAgICAgICBtb2RhbF9jb250ZW50LmFwcGVuZENoaWxkKGZvcm1Mb2FkKCkpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuLypcbiAgICBjb25zdCBtb2RhbE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVxcXCJmb3JtS2luZFxcXCJdXCIpO1xuICAgIG1vZGFsTmF2LmZvckVhY2goKGN1cnJlbnRWYWx1ZSwgY3VycmVudEluZGV4LCBsaXN0T2JqKT0+IHtcbiAgICAgICAgY3VycmVudFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xuICAgICAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3JtUG9zdFwiKVswXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBteU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBteU1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLFwibXlNb2RhbFwiKTtcbiAgICAgICAgICAgICAgICBteU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgICAgICAgICAgICAgICBteU1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKG4gPT4gbi5yZW1vdmUoKSk7XG4gICAgICAgICAgICAgICAgc3RhcnRWaWV3LmFwcGVuZENoaWxkKG15TW9kYWwpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG15TW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBteU1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcbiAgICAgICAgICAgICAgICBteU1vZGFsLmFwcGVuZENoaWxkKG15TW9kYWxDb250ZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG4gICAgICAgICAgICAgICAgc3Bhbi5pbm5lclRleHQ9XCJYXCI7XG4gICAgICAgICAgICAgICAgbXlNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3dpdGNoKGUuY3VycmVudFRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVG9Eb1wiOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwbGFjZVdpdGgodGFza0Zvcm0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlByb2plY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwbGFjZVdpdGgocHJvamVjdEZvcm0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk5vdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwbGFjZVdpdGgobm90ZUZvcm0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwbGFjZVdpdGgodGFza0Zvcm0oKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pOyovXG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cXFwic3RhdGVcXFwiXVwiKTtcbiAgICBuYXYuZm9yRWFjaCgoY3VycmVudFZhbHVlLCBjdXJyZW50SW5kZXgsIGxpc3RPYmopPT4ge1xuICAgICAgICBjdXJyZW50VmFsdWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XG4gICAgICAgICAgICBpZihlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3NcIik7XG4gICAgICAgICAgICAgICAgdG9kb3MucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2gobiA9PiBuLnJlbW92ZSgpKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaChlLmN1cnJlbnRUYXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlByb2plY3RzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk5vdGVzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm90ZUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlTGlzdCcpIHx8IFwiW11cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vdGUgPSBjcmVhdGVOb3RlKG5vdGVMaXN0W2ldLnRpdGxlLG5vdGVMaXN0W2ldLmRldGFpbHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9zLmFwcGVuZENoaWxkKG5vdGVMb2FkKG5vdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSB8fCBcIltdXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUuY3VycmVudFRhcmdldC52YWx1ZSA9PSB0YXNrTGlzdFtpXS5wcm9qZWN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tMaXN0W2ldLnRpdGxlLHRhc2tMaXN0W2ldLmRldGFpbHMsdGFza0xpc3RbaV0uZHVlRGF0ZSx0YXNrTGlzdFtpXS5wcmlvcml0eSx0YXNrTGlzdFtpXS5jaGVja2xpc3QsdGFza0xpc3RbaV0ucHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9zLmFwcGVuZENoaWxkKHRhc2tMb2FkKHRhc2spKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cblxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9