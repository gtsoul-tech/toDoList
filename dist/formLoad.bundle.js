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
/*!*************************!*\
  !*** ./src/formLoad.js ***!
  \*************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNjO0FBQ007QUFDTjtBQUNuQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFROzs7QUFHaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMscURBQVE7QUFDakQ7QUFDQTtBQUNBLHlDQUF5Qyx3REFBVztBQUNwRDtBQUNBO0FBQ0EseUNBQXlDLHFEQUFRO0FBQ2pEO0FBQ0E7QUFDQSx5Q0FBeUMscURBQVE7QUFDakQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza0Nzcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZm9ybS5jc3M/YzJmNSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrQ3NzLmNzcz9hODIwIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbm90ZWJvb2suc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3J1YmJpc2guc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RlbGV0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZWRpdFRhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25vdGVGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0b3JhZ2VBdmFpbGFibGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrTG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtTG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cblxubGFiZWwge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW5wdXRbdHlwZT1cInJhZGlvXCJde1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrbGFiZWx7IFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbn0gXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtsYWJlbDo6YmVmb3JleyBcbiAgICBjb250ZW50OlwiLy9cIjtcbn0gXG5pbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCtsYWJlbDo6YmVmb3JlIHtcbiAgICBjb250ZW50OlwiXCI7XG59XG5mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ2FwOiAxMHB4O1xufVxuLm1vZGFsbmF2YmFye1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4udGl0bGUsIC5kZXRhaWxze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZWVuO1xufVxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLmdyZWVuUHJpb3JpdHl7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLm9yYW5nZVByaW9yaXR5e1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuLnJlZFByaW9yaXR5e1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4uZWRpdEZvcm1Qb3N0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7Ozs7QUFJQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcblxcbmxhYmVsIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkK2xhYmVseyBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbn0gXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkK2xhYmVsOjpiZWZvcmV7IFxcbiAgICBjb250ZW50OlxcXCIvL1xcXCI7XFxufSBcXG5pbnB1dFtuYW1lPVxcXCJwcmlvcml0eVxcXCJdOmNoZWNrZWQrbGFiZWw6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6XFxcIlxcXCI7XFxufVxcbmZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5tb2RhbG5hdmJhcntcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi50aXRsZSwgLmRldGFpbHN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmdyZWVuUHJpb3JpdHl7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG4ub3JhbmdlUHJpb3JpdHl7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcbi5yZWRQcmlvcml0eXtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmVkaXRGb3JtUG9zdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHksIGJvZHkgPiBkaXYge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiBhcXVhbWFyaW5lO1xufVxuLnN2Z3tcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xufVxuXG5cbi5jb250ZW50e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xufVxuXG4ubmF2YmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xuICAgIFxufVxuLm5hdmJhci1idXR0b246aG92ZXIsIC5uYXZiYXItYnV0dG9uOmFjdGl2ZXtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uYXZiYXItYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcvLyc7XG4gIH1cbiAgXG4ubmF2YmFyLWJ1dHRvbntcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5hZGQtYnV0dG9ue1xuICAgIGNvbG9yOiAjMDAwOyAvKiBGYWxsYmFjayBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxubGFiZWwge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhciBpbnB1dFt0eXBlPVwicmFkaW9cIl17XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtsYWJlbHsgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxufSBcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkK2xhYmVsOjpiZWZvcmV7IFxuICAgIGNvbnRlbnQ6XCIvL1wiO1xufSBcblxuXG5cbi5tb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gICAgXG59XG4gIC5tb2RhbC1jb250ZW50ID4gLmNvbnRlbnQgPi5uYXZiYXJ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweCAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHggMjBweDtcbiAgICBcbiAgfVxuICAvKiBNb2RhbCBDb250ZW50L0JveCAqL1xuICAubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgfVxuICBcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuICAuY2xvc2Uge1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5jbG9zZTpob3ZlcixcbiAgLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLG9DQUFvQzs7QUFFeEM7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVcsRUFBRSxnQ0FBZ0M7SUFDN0MseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOzs7O0FBSUE7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0IsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELG9DQUFvQztJQUNwQywwQkFBMEI7O0FBRTlCO0VBQ0U7SUFDRSxpQ0FBaUM7SUFDakMsb0NBQW9DOztFQUV0QztFQUNBLHNCQUFzQjtFQUN0QjtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7SUFDcEQsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVUsRUFBRSxvREFBb0Q7SUFDaEUsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUEscUJBQXFCO0VBQ3JCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBib2R5ID4gZGl2IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG4uc3Zne1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG59XFxuXFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLm5hdmJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJvcmRlci1yaWdodDogMC41cHggc29saWQgcmdiKDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XFxuICAgIFxcbn1cXG4ubmF2YmFyLWJ1dHRvbjpob3ZlciwgLm5hdmJhci1idXR0b246YWN0aXZle1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubmF2YmFyLWJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJy8vJztcXG4gIH1cXG4gIFxcbi5uYXZiYXItYnV0dG9ue1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbntcXG4gICAgY29sb3I6ICMwMDA7IC8qIEZhbGxiYWNrIGZvciBvbGRlciBicm93c2VycyAqL1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2YmFyIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl17XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCtsYWJlbHsgXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcXG59IFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCtsYWJlbDo6YmVmb3JleyBcXG4gICAgY29udGVudDpcXFwiLy9cXFwiO1xcbn0gXFxuXFxuXFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgICBcXG59XFxuICAubW9kYWwtY29udGVudCA+IC5jb250ZW50ID4ubmF2YmFye1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHggMjBweDtcXG4gICAgXFxuICB9XFxuICAvKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBibGFjaztcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgfVxcbiAgXFxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuICAuY2xvc2Uge1xcbiAgICBjb2xvcjogI2FhYTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgXFxuICAuY2xvc2U6aG92ZXIsXFxuICAuY2xvc2U6Zm9jdXMge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRhc2t7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTsgICAgXG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGdhcDogMzBweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIG9yYW5nZTtcbn1cblxuLnRhc2s6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKSBwZXJzcGVjdGl2ZSgwcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC43KTtcbn1cblxuLnRpdGxle1xuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4uY29tcGxldGV7XG4gICAgb3BhY2l0eTogMC41O1xufVxuLmRldGFpbHN7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRldGFpbHNDb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5ncmVlblByaW9yaXR5e1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogNTBweDtcbn1cbi5vcmFuZ2VQcmlvcml0eXtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogNTBweDtcbn1cbi5yZWRQcmlvcml0eXtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogNTBweDtcbn1cbi5lZGl0QnV0dG9ue1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZWxldGV7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Rhc2tDc3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLE9BQU87SUFDUCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7ICAgIFxcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGdhcDogMzBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBvcmFuZ2U7XFxufVxcblxcbi50YXNrOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpIHBlcnNwZWN0aXZlKDBweCk7XFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxMHB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC43KTtcXG59XFxuXFxuLnRpdGxle1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jb21wbGV0ZXtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG4uZGV0YWlsc3tcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmRldGFpbHNDb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmdyZWVuUHJpb3JpdHl7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG4ub3JhbmdlUHJpb3JpdHl7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcbi5yZWRQcmlvcml0eXtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuLmVkaXRCdXR0b257XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5kZWxldGV7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGhlaWdodDogMWVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza0Nzcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tDc3MuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBmaWxsPVxcXCIjMDAwMDAwXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2aWV3Qm94PVxcXCIwIDAgNTEyIDUxMlxcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PGc+PHBhdGggZD1cXFwiTTQ1Ni4zNDgsMGgtNjYuNzgzSDI3OC4yNjFINTUuNjUyYy05LjIyLDAtMTYuNjk2LDcuNDc1LTE2LjY5NiwxNi42OTZ2NDc4LjYwOWMwLDkuMjIsNy40NzUsMTYuNjk2LDE2LjY5NiwxNi42OTYgaDQwMC42OTZjOS4yMiwwLDE2LjY5Ni03LjQ3NSwxNi42OTYtMTYuNjk2VjE2LjY5NkM0NzMuMDQzLDcuNDc1LDQ2NS41NjgsMCw0NTYuMzQ4LDB6IE0yOTQuOTU3LDMzLjM5MWg3Ny45MTN2MTA0LjE0NiBsLTI2LjEzMS0zMS4zNTdjLTMuMTcxLTMuODA1LTcuODctNi4wMDctMTIuODI2LTYuMDA3cy05LjY1NSwyLjIwMi0xMi44MjYsNi4wMDdsLTI2LjEzMSwzMS4zNTdWMzMuMzkxeiBNMTA1LjczOSw0NzguNjA5SDcyLjM0OCBWMzMuMzkxaDMzLjM5MVY0NzguNjA5eiBNNDM5LjY1Myw0NzguNjA5aC0wLjAwMUgxMzkuMTNWMzMuMzkxaDEyMi40MzV2MTUwLjI2MWMwLDcuMDI5LDQuNDAyLDEzLjMwNSwxMS4wMTIsMTUuNjk4IGM2LjYxMywyLjM5NCwxNC4wMSwwLjM4OCwxOC41MS01LjAxMWw0Mi44MjUtNTEuMzlsNDIuODI3LDUxLjM5MWMzLjIzNCwzLjg4Miw3Ljk2OCw2LjAwOCwxMi44MjksNi4wMDggYzEuOTAxLDAsMy44MjMtMC4zMjYsNS42ODEtMC45OTdjNi42MDktMi4zOTMsMTEuMDEyLTguNjY5LDExLjAxMi0xNS42OThWMzMuMzkxaDMzLjM5MVY0NzguNjA5elxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cXFwiTTM1Ni4xNzQsMzExLjY1MkgyMjIuNjA5Yy05LjIyLDAtMTYuNjk2LDcuNDc1LTE2LjY5NiwxNi42OTZzNy40NzUsMTYuNjk2LDE2LjY5NiwxNi42OTZoMTMzLjU2NSBjOS4yMiwwLDE2LjY5Ni03LjQ3NSwxNi42OTYtMTYuNjk2UzM2NS4zOTQsMzExLjY1MiwzNTYuMTc0LDMxMS42NTJ6XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48Zz48cGF0aCBkPVxcXCJNMzg5LjU2NSwzNzguNDM1SDE4OS4yMTdjLTkuMjIsMC0xNi42OTYsNy40NzUtMTYuNjk2LDE2LjY5NnM3LjQ3NSwxNi42OTYsMTYuNjk2LDE2LjY5NmgyMDAuMzQ4IGM5LjIyLDAsMTYuNjk2LTcuNDc1LDE2LjY5Ni0xNi42OTZTMzk4Ljc4NiwzNzguNDM1LDM4OS41NjUsMzc4LjQzNXpcXFwiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgZmlsbD1cXFwiIzAwMDAwMFxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDA4LjQ4MyA0MDguNDgzXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48Zz48cGF0aCBkPVxcXCJNODcuNzQ4LDM4OC43ODRjMC40NjEsMTEuMDEsOS41MjEsMTkuNjk5LDIwLjUzOSwxOS42OTloMTkxLjkxMWMxMS4wMTgsMCwyMC4wNzgtOC42ODksMjAuNTM5LTE5LjY5OWwxMy43MDUtMjg5LjMxNiBINzQuMDQzTDg3Ljc0OCwzODguNzg0eiBNMjQ3LjY1NSwxNzEuMzI5YzAtNC42MSwzLjczOC04LjM0OSw4LjM1LTguMzQ5aDEzLjM1NWM0LjYwOSwwLDguMzUsMy43MzgsOC4zNSw4LjM0OXYxNjUuMjkzIGMwLDQuNjExLTMuNzM4LDguMzQ5LTguMzUsOC4zNDloLTEzLjM1NWMtNC42MSwwLTguMzUtMy43MzYtOC4zNS04LjM0OVYxNzEuMzI5eiBNMTg5LjIxNiwxNzEuMzI5IGMwLTQuNjEsMy43MzgtOC4zNDksOC4zNDktOC4zNDloMTMuMzU1YzQuNjA5LDAsOC4zNDksMy43MzgsOC4zNDksOC4zNDl2MTY1LjI5M2MwLDQuNjExLTMuNzM3LDguMzQ5LTguMzQ5LDguMzQ5aC0xMy4zNTUgYy00LjYxLDAtOC4zNDktMy43MzYtOC4zNDktOC4zNDlWMTcxLjMyOUwxODkuMjE2LDE3MS4zMjl6IE0xMzAuNzc1LDE3MS4zMjljMC00LjYxLDMuNzM4LTguMzQ5LDguMzQ5LTguMzQ5aDEzLjM1NiBjNC42MSwwLDguMzQ5LDMuNzM4LDguMzQ5LDguMzQ5djE2NS4yOTNjMCw0LjYxMS0zLjczOCw4LjM0OS04LjM0OSw4LjM0OWgtMTMuMzU2Yy00LjYxLDAtOC4zNDktMy43MzYtOC4zNDktOC4zNDlWMTcxLjMyOXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMzQzLjU2NywyMS4wNDNoLTg4LjUzNVY0LjMwNWMwLTIuMzc3LTEuOTI3LTQuMzA1LTQuMzA1LTQuMzA1aC05Mi45NzFjLTIuMzc3LDAtNC4zMDQsMS45MjgtNC4zMDQsNC4zMDV2MTYuNzM3SDY0LjkxNiBjLTcuMTI1LDAtMTIuOSw1Ljc3Ni0xMi45LDEyLjkwMVY3NC40N2gzMDQuNDUxVjMzLjk0NEMzNTYuNDY3LDI2LjgxOSwzNTAuNjkyLDIxLjA0MywzNDMuNTY3LDIxLjA0M3pcXFwiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPlwiIiwiaW1wb3J0ICcuL2Zvcm0uY3NzJztcbmltcG9ydCBzdG9yYWdlQXZhaWxhYmxlIGZyb20gJy4vc3RvcmFnZUF2YWlsYWJsZSc7XG5pbXBvcnQgaW5pdGlhbExvYWQgZnJvbSAnLi9pbml0aWFsTG9hZCc7XG5pbXBvcnQgdGFza0xvYWQgZnJvbSAnLi90YXNrTG9hZCc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL3Rhc2snO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrKXtcbiAgICBpZihzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgICAgIGxldCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykgfHwgXCJbXVwiKTtcbiAgICAgICAgbGV0IGluZGV4ID0gdGFza0xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudC50aXRsZSA9PSB0YXNrLnRpdGxlKXtcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuICAgICAgICB0b2Rvcy5xdWVyeVNlbGVjdG9yQWxsKCcqJykuZm9yRWFjaChuID0+IG4ucmVtb3ZlKCkpO1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwic3RhdGVcIl06Y2hlY2tlZCcpO1xuICAgICAgICB0YXNrLnByb2plY3Q9IHNlbGVjdGVkLnZhbHVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0YXNrTGlzdFtpXS5wcm9qZWN0ID09IHNlbGVjdGVkLnZhbHVlKXtcbiAgICAgICAgICAgICAgICBsZXQgdGFzayA9IGNyZWF0ZVRhc2sodGFza0xpc3RbaV0udGl0bGUsdGFza0xpc3RbaV0uZGV0YWlscyx0YXNrTGlzdFtpXS5kdWVEYXRlLHRhc2tMaXN0W2ldLnByaW9yaXR5LHRhc2tMaXN0W2ldLmNoZWNrbGlzdCx0YXNrTGlzdFtpXS5wcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB0b2Rvcy5hcHBlbmRDaGlsZCh0YXNrTG9hZCh0YXNrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYWwgc3RvcmFnZSBkb2VzbnQgd29ya1wiKTtcbiAgICB9XG59IiwiaW1wb3J0ICcuL2Zvcm0uY3NzJztcbmltcG9ydCBzdG9yYWdlQXZhaWxhYmxlIGZyb20gJy4vc3RvcmFnZUF2YWlsYWJsZSc7XG5pbXBvcnQgdGFza0xvYWQgZnJvbSAnLi90YXNrTG9hZCc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL3Rhc2snO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFRhc2tGb3JtKHRhc2spe1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdE15Rm9ybVRhc2tcIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZWRpdEZvcm1Qb3N0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGU6TWFrZSBiaWxsc1wiKTtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG4gICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXRhaWxzXCIpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXRhaWxzOmUuZyBwb3dlcixncm9jZXJpZXNcIik7XG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGxhYmVsRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbER1ZURhdGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJkdWVEYXRlXCIpO1xuICAgIGxhYmVsRHVlRGF0ZS5pbm5lclRleHQ9XCJEdWUgRGF0ZTpcIjtcbiAgICBcbiAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGxhYmVsRHVlRGF0ZSk7XG4gICAgZGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlRGF0ZVwiKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcIm1pblwiLCB0YXNrLmR1ZURhdGUpO1xuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiMjAzMC0wOS0wMlwiKTtcbiAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IHtcbiAgICAgICAgXCJMb3dcIjogZmFsc2UsXG4gICAgICAgIFwiTWVkaXVtXCI6IGZhbHNlLFxuICAgICAgICBcIkhpZ2hcIjogZmFsc2UsXG4gICAgfVxuICAgIGNvbnN0IHJhZGlvQnV0dG9ucz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJpb3JpdHkpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBrZXk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJyxrZXkpO1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlmKHByaW9yaXR5W2tleV0gPT0gdHJ1ZSl7XG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkPXRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgaW5wdXQubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICAgICAgXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsa2V5KTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsa2V5KTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1idXR0b25cIik7XG4gICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJMb3dcIjogXG4gICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImdyZWVuUHJpb3JpdHlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTWVkaXVtXCI6XG4gICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcIm9yYW5nZVByaW9yaXR5XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwicmVkUHJpb3JpdHlcIik7XG4gICAgICAgIH1cblxuICAgICAgICByYWRpb0J1dHRvbnMuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICByYWRpb0J1dHRvbnMuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBcbiAgICB9XG4gICAgZm9ybS5hcHBlbmRDaGlsZChyYWRpb0J1dHRvbnMpO1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJTdWJtaXRcIik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG5cbiAgICAvL2VtZWlkYSBlZHdcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZWRpdFRhc2ssZmFsc2UpO1xuICAgIGZ1bmN0aW9uIGVkaXRUYXNrKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGxldCBuZXdUYXNrID0gdGFzaztcbiAgICAgICAgICAgIGxldCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykgfHwgXCJbXVwiKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRhc2tMaXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LnRpdGxlID09IHRhc2sudGl0bGUpe1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLHZhbHVlXSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUhPScnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFza1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdC5zcGxpY2UoaW5kZXgsMSxuZXdUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zXCIpO1xuICAgICAgICAgICAgdG9kb3MucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2gobiA9PiBuLnJlbW92ZSgpKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJzdGF0ZVwiXTpjaGVja2VkJyk7XG4gICAgICAgICAgICB0YXNrLnByb2plY3Q9IHNlbGVjdGVkLnZhbHVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHRhc2tMaXN0W2ldLnByb2plY3QgPT0gc2VsZWN0ZWQudmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFzayA9IGNyZWF0ZVRhc2sodGFza0xpc3RbaV0udGl0bGUsdGFza0xpc3RbaV0uZGV0YWlscyx0YXNrTGlzdFtpXS5kdWVEYXRlLHRhc2tMaXN0W2ldLnByaW9yaXR5LHRhc2tMaXN0W2ldLmNoZWNrbGlzdCx0YXNrTGlzdFtpXS5wcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb3MuYXBwZW5kQ2hpbGQodGFza0xvYWQodGFzaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2NhbCBzdG9yYWdlIGRvZXNudCB3b3JrXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xufSIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFN2ZyBmcm9tICcuL25vdGVib29rLnN2Zyc7XG5pbXBvcnQgdGFza0xvYWQgZnJvbSBcIi4vdGFza0xvYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxMb2FkKCl7XG4gICAgY29uc3Qgc3RhcnRWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJUby1EbyBMaXN0XCI7XG4gICAgY29uc3QgbXlTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBteVN2Zy5jbGFzc0xpc3QuYWRkKFwic3ZnXCIpO1xuICAgIG15U3ZnLmlubmVySFRNTCA9IFN2ZztcbiAgICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobXlTdmcpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICBjb25zdCBuYXZiYXIgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgXCJIb21lXCI6IHRydWUsXG4gICAgICAgIFwiVG9kYXlcIjogZmFsc2UsXG4gICAgICAgIFwiV2Vla1wiOiBmYWxzZSxcbiAgICAgICAgXCJQcm9qZWN0c1wiOiBmYWxzZSxcbiAgICB9XG5cbiAgICBsZXQgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpIHx8IFwiW11cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRhW3Byb2plY3RMaXN0W2ldLnRpdGxlXSA9IGZhbHNlO1xuICAgIH1cbiAgICBkYXRhW1wiTm90ZXNcIl09ZmFsc2U7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGtleTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGtleSk7XG4gICAgICAgIGlmKGtleSE9XCJQcm9qZWN0c1wiKXtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGlmKGRhdGFba2V5XSA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkPXRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICAgICAgaW5wdXQubmFtZSA9IFwic3RhdGVcIjtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsa2V5KTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLGtleSk7XG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcblxuXG5cblxuXG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvcy5jbGFzc0xpc3QuYWRkKFwidG9kb3NcIik7XG5cbiAgICBzdGFydFZpZXcuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIHN0YXJ0Vmlldy5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2Rvcyk7XG5cbiAgICBcblxuICAgIGNvbnN0IGFkZFRvRG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkVG9Eb1Byb2plY3QudGV4dENvbnRlbnQ9XCIrXCI7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGFkZFRvRG9Qcm9qZWN0KTtcbiAgICBhZGRUb0RvUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ1dHRvblwiKTtcblxuXG4gICAgY29uc3QgbXlNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbXlNb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJyxcIm15TW9kYWxcIik7XG4gICAgbXlNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cbiAgICBzdGFydFZpZXcuYXBwZW5kQ2hpbGQobXlNb2RhbCk7XG4gICAgXG4gICAgY29uc3QgbXlNb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG15TW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICAgIG15TW9kYWwuYXBwZW5kQ2hpbGQobXlNb2RhbENvbnRlbnQpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcbiAgICBzcGFuLmlubmVyVGV4dD1cIlhcIjtcbiAgICBteU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGNvbnN0IG15TW9kYWxkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBteU1vZGFsZGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2lkJyxcIm15TW9kYWxkZXRhaWxzXCIpO1xuICAgIG15TW9kYWxkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJtb2RhbGRldGFpbHNcIik7XG5cbiAgICBzdGFydFZpZXcuYXBwZW5kQ2hpbGQobXlNb2RhbGRldGFpbHMpO1xuICAgIFxuXG5cblxuICAgIGxldCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykgfHwgXCJbXVwiKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRhc2tMaXN0W2ldLnByb2plY3QgPT0gXCJIb21lXCIpe1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tMaXN0W2ldLnRpdGxlLHRhc2tMaXN0W2ldLmRldGFpbHMsdGFza0xpc3RbaV0uZHVlRGF0ZSx0YXNrTGlzdFtpXS5wcmlvcml0eSx0YXNrTGlzdFtpXS5jaGVja2xpc3QsdGFza0xpc3RbaV0ucHJvamVjdCk7XG4gICAgICAgICAgICB0b2Rvcy5hcHBlbmRDaGlsZCh0YXNrTG9hZCh0YXNrKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGFydFZpZXcpO1xufSIsImltcG9ydCAnLi9mb3JtLmNzcyc7XG5pbXBvcnQgc3RvcmFnZUF2YWlsYWJsZSBmcm9tICcuL3N0b3JhZ2VBdmFpbGFibGUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm90ZUZvcm0oKXtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15Rm9ybU5vdGVcIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVBvc3RcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZS5yZXF1aXJlZD10cnVlO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRpdGxlXCIpO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRldGFpbHNcIik7XG4gICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRldGFpbHM6ZS5nIHBvd2VyLGdyb2Nlcmllc1wiKTtcbiAgICBkZXRhaWxzLnJlcXVpcmVkPXRydWU7XG4gICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcbiAgICBcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJDcmVhdGUgTm90ZVwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdG9yZU5vdGUsZmFsc2UpO1xuICAgIFxuICAgIGZ1bmN0aW9uIHN0b3JlTm90ZShldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgICAgICBsZXQgbm90ZSA9e307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLHZhbHVlXSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiBub3RlW2tleV0gPSB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbm90ZUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlTGlzdCcpIHx8IFwiW11cIik7XG4gICAgICAgICAgICBub3RlTGlzdC5wdXNoKG5vdGUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVMaXN0JywgSlNPTi5zdHJpbmdpZnkobm90ZUxpc3QpKTtcbiAgICAgICAgICAgIGluaXRpYWxMb2FkKCk7XG4gICAgICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYWwgc3RvcmFnZSBkb2VzbnQgd29ya1wiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm9ybTtcbn0iLCJpbXBvcnQgJy4vZm9ybS5jc3MnO1xuaW1wb3J0IHN0b3JhZ2VBdmFpbGFibGUgZnJvbSAnLi9zdG9yYWdlQXZhaWxhYmxlJztcbmltcG9ydCBpbml0aWFsTG9hZCBmcm9tICcuL2luaXRpYWxMb2FkJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RGb3JtKCl7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteUZvcm1Qcm9qZWN0XCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1Qb3N0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGUucmVxdWlyZWQ9dHJ1ZTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZTpFbGVjdHJpY2FsIERlc2lnblwiKTtcbiAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJDcmVhdGUgUHJvamVjdFwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgLy9lbWVpZGEgZWR3XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN0b3JlUHJvamVjdCxmYWxzZSk7XG4gICAgXG4gICAgZnVuY3Rpb24gc3RvcmVQcm9qZWN0KGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID17fTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW25hbWUsdmFsdWVdIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHByb2plY3Rba2V5XSA9IHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykgfHwgXCJbXVwiKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgaW5pdGlhbExvYWQoKTtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2NhbCBzdG9yYWdlIGRvZXNudCB3b3JrXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtO1xufVxuICAgICAgICBcbiAgICIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgKTtcbiAgICB9XG4gIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLGRldGFpbHMsZHVlRGF0ZSxwcmlvcml0eSxjaGVja2xpc3QscHJvamVjdCl7XG4gICAgcmV0dXJuIHt0aXRsZSxkZXRhaWxzLGR1ZURhdGUscHJpb3JpdHksY2hlY2tsaXN0LHByb2plY3R9O1xufVxuIiwiaW1wb3J0ICcuL2Zvcm0uY3NzJztcbmltcG9ydCBzdG9yYWdlQXZhaWxhYmxlIGZyb20gJy4vc3RvcmFnZUF2YWlsYWJsZSc7XG5pbXBvcnQgdGFza0xvYWQgZnJvbSAnLi90YXNrTG9hZCc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL3Rhc2snO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0Zvcm0oKXtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15Rm9ybVRhc2tcIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVBvc3RcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGUucmVxdWlyZWQ9dHJ1ZTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZTpNYWtlIGJpbGxzXCIpO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRldGFpbHNcIik7XG4gICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRldGFpbHM6ZS5nIHBvd2VyLGdyb2Nlcmllc1wiKTtcbiAgICBkZXRhaWxzLnJlcXVpcmVkPXRydWU7XG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGxhYmVsRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbER1ZURhdGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJkdWVEYXRlXCIpO1xuICAgIGxhYmVsRHVlRGF0ZS5pbm5lclRleHQ9XCJEdWUgRGF0ZTpcIjtcbiAgICBcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZURhdGVcIik7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZURhdGVcIik7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIjIwMjMtMTAtMDJcIik7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIyMDIzLTA5LTAyXCIpO1xuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiMjAyNC0wOS0wMlwiKTtcbiAgICBcbiAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGxhYmVsRHVlRGF0ZSk7XG4gICAgZGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZURpdik7XG4gICAgXG5cbiAgICBjb25zdCBwcmlvcml0eSA9IHtcbiAgICAgICAgXCJMb3dcIjogdHJ1ZSxcbiAgICAgICAgXCJNZWRpdW1cIjogZmFsc2UsXG4gICAgICAgIFwiSGlnaFwiOiBmYWxzZSxcbiAgICB9XG4gICAgY29uc3QgcmFkaW9CdXR0b25zPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvciAobGV0IGtleSBpbiBwcmlvcml0eSkge1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGtleTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGtleSk7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaWYocHJpb3JpdHlba2V5XSA9PSB0cnVlKXtcbiAgICAgICAgICAgIGlucHV0LmNoZWNrZWQ9dHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICBpbnB1dC5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLGtleSk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLGtleSk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItYnV0dG9uXCIpO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoKGtleSkge1xuICAgICAgICAgICAgY2FzZSBcIkxvd1wiOiBcbiAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5Qcmlvcml0eVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJNZWRpdW1cIjpcbiAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwib3JhbmdlUHJpb3JpdHlcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJyZWRQcmlvcml0eVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJhZGlvQnV0dG9ucy5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIHJhZGlvQnV0dG9ucy5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgfVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9CdXR0b25zKTtcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU3VibWl0XCIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuXG4gICAgLy9lbWVpZGEgZWR3XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN0b3JlVGFzayxmYWxzZSk7XG4gICAgZnVuY3Rpb24gc3RvcmVUYXNrKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGxldCB0YXNrID17fTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW25hbWUsdmFsdWVdIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhc2tba2V5XSA9IHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJzdGF0ZVwiXTpjaGVja2VkJyk7XG4gICAgICAgICAgICB0YXNrLnByb2plY3Q9IHNlbGVjdGVkLnZhbHVlO1xuICAgICAgICAgICAgdGFzay5jaGVja2xpc3Q9IFwibm9cIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSB8fCBcIltdXCIpO1xuICAgICAgICAgICAgdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG4gICAgICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvc1wiKTtcbiAgICAgICAgICAgIHRvZG9zLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKG4gPT4gbi5yZW1vdmUoKSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZih0YXNrTGlzdFtpXS5wcm9qZWN0ID09IHNlbGVjdGVkLnZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tMaXN0W2ldLnRpdGxlLHRhc2tMaXN0W2ldLmRldGFpbHMsdGFza0xpc3RbaV0uZHVlRGF0ZSx0YXNrTGlzdFtpXS5wcmlvcml0eSx0YXNrTGlzdFtpXS5jaGVja2xpc3QsdGFza0xpc3RbaV0ucHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9zLmFwcGVuZENoaWxkKHRhc2tMb2FkKHRhc2spKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9jYWwgc3RvcmFnZSBkb2VzbnQgd29ya1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIGZvcm07XG59IiwiaW1wb3J0ICcuL3Rhc2tDc3MuY3NzJztcbmltcG9ydCBTdmcgZnJvbSAnLi9ydWJiaXNoLnN2Zyc7XG5pbXBvcnQgZWRpdFRhc2tGb3JtIGZyb20gJy4vZWRpdFRhc2tGb3JtJztcbmltcG9ydCBkZWxldGVUYXNrIGZyb20gJy4vZGVsZXRlVGFzayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tMb2FkKHRhc2spe1xuICAgIGNvbnN0IHRhc2tET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRE9NLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblxuICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBcbiAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGlucHV0Lm5hbWUgPSB0YXNrLm5hbWU7XG4gICAgXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIix0YXNrLmNoZWNrbGlzdCk7XG4gICAgLy9pbnB1dC5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWJ1dHRvblwiKTtcbiAgICBcbiAgICBjaGVja2xpc3QuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGlmKHRhc2suY2hlY2tsaXN0ID09IFwieWVzXCIpe1xuICAgICAgICB0YXNrRE9NLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHMudGV4dENvbnRlbnQgPSBcIkRldGFpbHNeXCI7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcbiAgICBjb25zdCBkZXRhaWxzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzQ29udGVudFwiKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGFzaykge1xuICAgICAgICBpZihrZXkhPSBcImNoZWNrbGlzdFwiKXtcbiAgICAgICAgICAgIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGluZm8uaW5uZXJUZXh0ID0ga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpICsgXCI6XCIgKyB0YXNrW2tleV07XG4gICAgICAgICAgICBkZXRhaWxzQ29udGVudC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHtcbiAgICAgICAgY29uc3QgbW9kYWxfY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgbW9kYWw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gICAgICAgIG1vZGFsX2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2gobiA9PiBuLnJlbW92ZSgpKTtcbiAgICAgICAgbW9kYWxfY29udGVudC5hcHBlbmRDaGlsZChkZXRhaWxzQ29udGVudCk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG4gICAgXG4gICAgXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlOlwiICsgdGFzay5kdWVEYXRlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgIHN3aXRjaCh0YXNrLnByaW9yaXR5KSB7XG4gICAgICAgIGNhc2UgXCJMb3dcIjogXG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5Qcmlvcml0eVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTWVkaXVtXCI6XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwib3JhbmdlUHJpb3JpdHlcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJyZWRQcmlvcml0eVwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdEJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgXG5cbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsX2NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IG1vZGFsPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICAgICAgICBtb2RhbF9jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKG4gPT4gbi5yZW1vdmUoKSk7XG4gICAgICAgIFxuICAgICAgICBtb2RhbF9jb250ZW50LmFwcGVuZENoaWxkKGVkaXRUYXNrRm9ybSh0YXNrKSk7XG4gICAgICAgIFxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBTdmc7XG4gICAgXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiB7XG4gICAgICAgIGRlbGV0ZVRhc2sodGFzayk7XG4gICAgfSk7XG4gICAgdGFza0RPTS5hcHBlbmRDaGlsZChjaGVja2xpc3QpO1xuICAgIHRhc2tET00uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRhc2tET00uYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG4gICAgdGFza0RPTS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICB0YXNrRE9NLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICB0YXNrRE9NLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIHRhc2tET00uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICBcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcbiAgICAgICAgbGV0IHRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSB8fCBcIltdXCIpO1xuICAgICAgICBsZXQgaW5kZXggPSB0YXNrTGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICBpZihlbGVtZW50LnRpdGxlID09IHRhc2sudGl0bGUpe1xuICAgICAgICAgICAgICAgIGlmKGlucHV0LmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tET00uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmNoZWNrbGlzdCA9IFwieWVzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdC5zcGxpY2UoaW5kZXgsMSx0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0YXNrRE9NLmNsYXNzTGlzdC5yZW1vdmUoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5jaGVja2xpc3QgPSBcIm5vXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdC5zcGxpY2UoaW5kZXgsMSx0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhc2tET007XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2Zvcm0uY3NzJztcbmltcG9ydCB0YXNrRm9ybSBmcm9tICcuL3Rhc2tGb3JtJztcbmltcG9ydCBwcm9qZWN0Rm9ybSBmcm9tICcuL3Byb2plY3RGb3JtJztcbmltcG9ydCBub3RlRm9ybSBmcm9tICcuL25vdGVGb3JtJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1Mb2FkKCl7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrRm9ybSgpKTtcblxuXG4gICAgXG4gICAgY29uc3QgbW9kYWxOYXYgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVxcXCJmb3JtS2luZFxcXCJdXCIpO1xuICAgIG1vZGFsTmF2LmZvckVhY2goKGN1cnJlbnRWYWx1ZSwgY3VycmVudEluZGV4LCBsaXN0T2JqKT0+IHtcbiAgICAgICAgY3VycmVudFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xuICAgICAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3JtUG9zdFwiKVswXTtcbiAgICAgICAgICAgICAgICAvL21vZGFsX2NvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2gobiA9PiBuLnJlbW92ZSgpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzd2l0Y2goZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJUb0RvXCI6IFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBsYWNlV2l0aCh0YXNrRm9ybSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUHJvamVjdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBsYWNlV2l0aChwcm9qZWN0Rm9ybSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTm90ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBsYWNlV2l0aChub3RlRm9ybSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBsYWNlV2l0aCh0YXNrRm9ybSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpe1xuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICAgIFxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIFwiVG9Eb1wiOiB0cnVlLFxuICAgICAgICBcIlByb2plY3RcIjogZmFsc2UsXG4gICAgICAgIFwiTm90ZVwiOiBmYWxzZSxcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGtleTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGtleSk7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaWYoZGF0YVtrZXldID09IHRydWUpe1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZD10cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBcImZvcm1LaW5kXCI7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsa2V5KTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsa2V5KTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1idXR0b25cIik7XG4gICAgICAgIFxuICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIH1cbiAgICByZXR1cm4gbmF2YmFyO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==