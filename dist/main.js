/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `html {
    height: 100%;
}

body {
    height: 100%;
    margin: 0;
    background-color: rgb(240, 240, 240);
    color: black;

}

main{
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 15fr 3fr;
    grid-template-rows: 1fr 10fr 6fr;
    padding-left: 25px;
    padding-right: 25px;
    column-gap: 30px;
    row-gap: 30px;
}

input{
    width: 30%;
    background-color: rgb(226, 226, 226);
    outline: none;
    border-radius: 20px;
    border: 2px solid black;
    padding: 3px 10px;
    &:focus{
        box-shadow: 0px 0px 5px black;
    }
}

#logo{
    grid-column: 1;
}

.search-container{
    grid-column: 2/-2;
    display: flex;
    align-items: center;
    gap: 50px;
}
.temp-container{
    grid-column: 2/-2;
    grid-row: 2;
    display: flex;
    font-size: 2rem;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    padding-left: 100px;
}
.air-info-container{
    padding: 20px 50px;
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 20px;
    box-shadow: 0px 0px 2px black;
    margin-bottom: 25px;
    column-gap: 200px;
    row-gap: 15px;
}
.forecast-container{
    grid-column: 3;
    grid-row: 1/-1;
    display: grid;
    grid-template-rows: 50px auto;
    margin-bottom: 25px;
    font-size: 1.2rem;
    >h3{
        font-size: 2rem;
    }
}

.air-info{
    height: 100%;
    width: 100%;
    border: 2px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
}   

.icon{
    height: 90px;
    width: 90px;
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-rows: repeat(auto-fit,1fr);
    row-gap: 10px;
    margin-top: 30px;
}
li{
    padding:25px;
    &:first-of-type{
        margin-top: 30px;
    }
    border-radius: 20px;
    box-shadow: 0px 0px 2px black;
    display: flex;
    gap: 20px;
    justify-content: center;
    font-size: 1.6rem;
    align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,oCAAoC;IACpC,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mCAAmC;IACnC,gCAAgC;IAChC,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB;QACI,6BAA6B;IACjC;AACJ;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,cAAc;IACd,cAAc;IACd,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;IACjB;QACI,eAAe;IACnB;AACJ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,mJAAmJ;IACnJ,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,aAAa;IACb,wCAAwC;IACxC,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ;QACI,gBAAgB;IACpB;IACA,mBAAmB;IACnB,6BAA6B;IAC7B,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;AACvB","sourcesContent":["html {\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n    margin: 0;\n    background-color: rgb(240, 240, 240);\n    color: black;\n\n}\n\nmain{\n    display: grid;\n    height: 100%;\n    grid-template-columns: 1fr 15fr 3fr;\n    grid-template-rows: 1fr 10fr 6fr;\n    padding-left: 25px;\n    padding-right: 25px;\n    column-gap: 30px;\n    row-gap: 30px;\n}\n\ninput{\n    width: 30%;\n    background-color: rgb(226, 226, 226);\n    outline: none;\n    border-radius: 20px;\n    border: 2px solid black;\n    padding: 3px 10px;\n    &:focus{\n        box-shadow: 0px 0px 5px black;\n    }\n}\n\n#logo{\n    grid-column: 1;\n}\n\n.search-container{\n    grid-column: 2/-2;\n    display: flex;\n    align-items: center;\n    gap: 50px;\n}\n.temp-container{\n    grid-column: 2/-2;\n    grid-row: 2;\n    display: flex;\n    font-size: 2rem;\n    align-items: center;\n    justify-content: space-between;\n    padding: 50px;\n    padding-left: 100px;\n}\n.air-info-container{\n    padding: 20px 50px;\n    grid-column: 2;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border-radius: 20px;\n    box-shadow: 0px 0px 2px black;\n    margin-bottom: 25px;\n    column-gap: 200px;\n    row-gap: 15px;\n}\n.forecast-container{\n    grid-column: 3;\n    grid-row: 1/-1;\n    display: grid;\n    grid-template-rows: 50px auto;\n    margin-bottom: 25px;\n    font-size: 1.2rem;\n    >h3{\n        font-size: 2rem;\n    }\n}\n\n.air-info{\n    height: 100%;\n    width: 100%;\n    border: 2px solid black;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: bold;\n}   \n\n.icon{\n    height: 90px;\n    width: 90px;\n}\nul{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: grid;\n    grid-template-rows: repeat(auto-fit,1fr);\n    row-gap: 10px;\n    margin-top: 30px;\n}\nli{\n    padding:25px;\n    &:first-of-type{\n        margin-top: 30px;\n    }\n    border-radius: 20px;\n    box-shadow: 0px 0px 2px black;\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    font-size: 1.6rem;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setAirInfoDOM: () => (/* binding */ setAirInfoDOM),
/* harmony export */   setForecastInfoDOM: () => (/* binding */ setForecastInfoDOM),
/* harmony export */   setWeatherConditionDOM: () => (/* binding */ setWeatherConditionDOM)
/* harmony export */ });
const startTime = 3;
const endTime = 21;

function setWeatherConditionDOM(response) {
  const mainTemp = document.querySelector('.temp h1');
  const mainCond = document.querySelector('.temp h2');

  mainTemp.textContent = `${response.temp_c}° C`;
  mainCond.textContent = `${response.condition.text}`;
}

function setAirInfoDOM(response) {
  const airInfo = document.querySelectorAll('.air-info > p');

  const { humidity } = response.current;
  const windSpeed = response.current.wind_kph;
  const rainPercentage =
    response.forecast.forecastday[0].day.daily_chance_of_rain;
  const UVIndex = response.current.uv;
  airInfo[0].textContent = `Humidity: ${humidity}%`;
  airInfo[1].textContent = `Wind Speed: ${windSpeed} KMPH`;
  airInfo[2].textContent = `Rain Percentage: ${rainPercentage} %`;
  airInfo[3].textContent = `UV: ${UVIndex}`;
}

function getImageSrc(src) {
  const srcArray = src.split('/');
  return srcArray[srcArray.length - 1];
}

function setForecastImages(forecastList) {
  const images = document.querySelectorAll('.cond-img');
  let imageIndex = 0;
  for (let i = startTime; i <= endTime; i += 3) {
    const hour = forecastList[i];
    const imageSrc = getImageSrc(hour.condition.icon);
    const time = hour.is_day ? 'day' : 'night';
    const imageSource = `../src/weatherIcons/${time}/${imageSrc}`;

    try {
      images[imageIndex].setAttribute('src', imageSource);
    } catch (err) {
      console.log(err);
    }

    imageIndex += 1;
  }
}

function setForecastText(forecastList) {
  const texts = document.querySelectorAll('.cond-text');
  let textIndex = 0;
  for (let i = startTime; i <= endTime; i += 3) {
    const hour = forecastList[i];
    const conditionText = hour.condition.text;

    try {
      texts[textIndex].textContent = conditionText;
    } catch (err) {
      console.log(err);
    }

    textIndex += 1;
  }
}

function setForecastTemp(forecastList) {
  const temps = document.querySelectorAll('.cond-temp');
  let tempIndex = 0;
  for (let i = startTime; i <= endTime; i += 3) {
    const hour = forecastList[i];
    const tempText = `${hour.temp_c}°C`;

    try {
      temps[tempIndex].textContent = tempText;
    } catch (err) {
      console.log(err);
    }

    tempIndex += 1;
  }
}

function setForecastInfoDOM(response) {
  setForecastImages(response.forecastday[0].hour);
  setForecastText(response.forecastday[0].hour);
  setForecastTemp(response.forecastday[0].hour);
}




/***/ }),

/***/ "./src/WeatherAPI.js":
/*!***************************!*\
  !*** ./src/WeatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResponseJSON: () => (/* binding */ getResponseJSON),
/* harmony export */   getWeatherCondition: () => (/* binding */ getWeatherCondition),
/* harmony export */   getWeatherForecast: () => (/* binding */ getWeatherForecast),
/* harmony export */   initAPI: () => (/* binding */ initAPI)
/* harmony export */ });
const API_KEY = '435e04db29c445c59c5140315230710';
let responseJSON;

async function initAPI(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=yes`,
      { mode: 'cors' }
    );
    if (response.status !== 200) {
      throw new Error('Bad Request');
    }
    responseJSON = await response.json();
    return responseJSON;
  } catch (err) {
    console.error(`ERROR ${err}`);
    throw err;
  }
}

async function getResponseJSON(responsePromise) {
  await responsePromise;
  return responseJSON;
}

async function getWeatherCondition(responsePromise) {
  await responsePromise;
  console.log(responseJSON);
  return responseJSON.current;
}

async function getWeatherForecast(responsePromise) {
  await responsePromise;
  return responseJSON.forecast;
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _WeatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeatherAPI */ "./src/WeatherAPI.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");




function setupPageElement(place) {
  const responsePromise = (0,_WeatherAPI__WEBPACK_IMPORTED_MODULE_1__.initAPI)(place);
  const weatherCondition = (0,_WeatherAPI__WEBPACK_IMPORTED_MODULE_1__.getWeatherCondition)(responsePromise);
  const weatherForecast = (0,_WeatherAPI__WEBPACK_IMPORTED_MODULE_1__.getWeatherForecast)(responsePromise);
  const responseJSON = (0,_WeatherAPI__WEBPACK_IMPORTED_MODULE_1__.getResponseJSON)(responsePromise);

  weatherCondition.then(_DOM__WEBPACK_IMPORTED_MODULE_2__.setWeatherConditionDOM);
  weatherForecast.then(_DOM__WEBPACK_IMPORTED_MODULE_2__.setForecastInfoDOM);
  responseJSON.then(_DOM__WEBPACK_IMPORTED_MODULE_2__.setAirInfoDOM);
}

setupPageElement('Hyderabad');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsbUJBQW1CLGdCQUFnQiwyQ0FBMkMsbUJBQW1CLEtBQUssU0FBUyxvQkFBb0IsbUJBQW1CLDBDQUEwQyx1Q0FBdUMseUJBQXlCLDBCQUEwQix1QkFBdUIsb0JBQW9CLEdBQUcsVUFBVSxpQkFBaUIsMkNBQTJDLG9CQUFvQiwwQkFBMEIsOEJBQThCLHdCQUF3QixjQUFjLHdDQUF3QyxPQUFPLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxzQkFBc0Isd0JBQXdCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLEdBQUcsa0JBQWtCLHdCQUF3QixrQkFBa0Isb0JBQW9CLHNCQUFzQiwwQkFBMEIscUNBQXFDLG9CQUFvQiwwQkFBMEIsR0FBRyxzQkFBc0IseUJBQXlCLHFCQUFxQixvQkFBb0IscUNBQXFDLDBCQUEwQixvQ0FBb0MsMEJBQTBCLHdCQUF3QixvQkFBb0IsR0FBRyxzQkFBc0IscUJBQXFCLHFCQUFxQixvQkFBb0Isb0NBQW9DLDBCQUEwQix3QkFBd0IsVUFBVSwwQkFBMEIsT0FBTyxHQUFHLGNBQWMsbUJBQW1CLGtCQUFrQiw4QkFBOEIsMEJBQTBCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQix3QkFBd0IsMEpBQTBKLHdCQUF3QixNQUFNLFVBQVUsbUJBQW1CLGtCQUFrQixHQUFHLEtBQUssdUJBQXVCLGdCQUFnQixpQkFBaUIsb0JBQW9CLCtDQUErQyxvQkFBb0IsdUJBQXVCLEdBQUcsS0FBSyxtQkFBbUIsc0JBQXNCLDJCQUEyQixPQUFPLDBCQUEwQixvQ0FBb0Msb0JBQW9CLGdCQUFnQiw4QkFBOEIsd0JBQXdCLDBCQUEwQixHQUFHLG1CQUFtQjtBQUMxOUc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM1SDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLGdCQUFnQjtBQUM1Qyw0QkFBNEIsd0JBQXdCO0FBQ3BEOztBQUVBO0FBQ0E7O0FBRUEsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQsMENBQTBDLFdBQVc7QUFDckQsK0NBQStDLGdCQUFnQjtBQUMvRCxrQ0FBa0MsUUFBUTtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSyxHQUFHLFNBQVM7O0FBRWhFO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDO0FBQ0Esd0JBQXdCLFlBQVk7O0FBRXBDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGckU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsUUFBUSxLQUFLLFNBQVM7QUFDOUUsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiwyQkFBMkIsSUFBSTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkU7Ozs7Ozs7VUNwQzdFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQU1BO0FBS1A7O0FBRWY7QUFDQSwwQkFBMEIsb0RBQU87QUFDakMsMkJBQTJCLGdFQUFtQjtBQUM5QywwQkFBMEIsK0RBQWtCO0FBQzVDLHVCQUF1Qiw0REFBZTs7QUFFdEMsd0JBQXdCLHdEQUFzQjtBQUM5Qyx1QkFBdUIsb0RBQWtCO0FBQ3pDLG9CQUFvQiwrQ0FBYTtBQUNqQzs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHVwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2V0dXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3NldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2V0dXAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3NldHVwLy4vc3JjL1dlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vc2V0dXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2V0dXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2V0dXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NldHVwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2V0dXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXR1cC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc2V0dXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgY29sb3I6IGJsYWNrO1xuXG59XG5cbm1haW57XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTVmciAzZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciA2ZnI7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgY29sdW1uLWdhcDogMzBweDtcbiAgICByb3ctZ2FwOiAzMHB4O1xufVxuXG5pbnB1dHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyNiwgMjI2KTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgJjpmb2N1c3tcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XG4gICAgfVxufVxuXG4jbG9nb3tcbiAgICBncmlkLWNvbHVtbjogMTtcbn1cblxuLnNlYXJjaC1jb250YWluZXJ7XG4gICAgZ3JpZC1jb2x1bW46IDIvLTI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNTBweDtcbn1cbi50ZW1wLWNvbnRhaW5lcntcbiAgICBncmlkLWNvbHVtbjogMi8tMjtcbiAgICBncmlkLXJvdzogMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG59XG4uYWlyLWluZm8tY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgY29sdW1uLWdhcDogMjAwcHg7XG4gICAgcm93LWdhcDogMTVweDtcbn1cbi5mb3JlY2FzdC1jb250YWluZXJ7XG4gICAgZ3JpZC1jb2x1bW46IDM7XG4gICAgZ3JpZC1yb3c6IDEvLTE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgID5oM3tcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbn1cblxuLmFpci1pbmZve1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0gICBcblxuLmljb257XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiA5MHB4O1xufVxudWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LDFmcik7XG4gICAgcm93LWdhcDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxubGl7XG4gICAgcGFkZGluZzoyNXB4O1xuICAgICY6Zmlyc3Qtb2YtdHlwZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUpBQW1KO0lBQ25KLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0EsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTVmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnIgNmZyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XFxuICAgIHJvdy1nYXA6IDMwcHg7XFxufVxcblxcbmlucHV0e1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjYsIDIyNik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXG4gICAgJjpmb2N1c3tcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xcbiAgICB9XFxufVxcblxcbiNsb2dve1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAyLy0yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxufVxcbi50ZW1wLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDIvLTI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG59XFxuLmFpci1pbmZvLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMjBweCA1MHB4O1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgY29sdW1uLWdhcDogMjAwcHg7XFxuICAgIHJvdy1nYXA6IDE1cHg7XFxufVxcbi5mb3JlY2FzdC1jb250YWluZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICBncmlkLXJvdzogMS8tMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICA+aDN7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG59XFxuXFxuLmFpci1pbmZve1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gICBcXG5cXG4uaWNvbntcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbiAgICB3aWR0aDogOTBweDtcXG59XFxudWx7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsMWZyKTtcXG4gICAgcm93LWdhcDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxubGl7XFxuICAgIHBhZGRpbmc6MjVweDtcXG4gICAgJjpmaXJzdC1vZi10eXBle1xcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgfVxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHN0YXJ0VGltZSA9IDM7XG5jb25zdCBlbmRUaW1lID0gMjE7XG5cbmZ1bmN0aW9uIHNldFdlYXRoZXJDb25kaXRpb25ET00ocmVzcG9uc2UpIHtcbiAgY29uc3QgbWFpblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCBoMScpO1xuICBjb25zdCBtYWluQ29uZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wIGgyJyk7XG5cbiAgbWFpblRlbXAudGV4dENvbnRlbnQgPSBgJHtyZXNwb25zZS50ZW1wX2N9wrAgQ2A7XG4gIG1haW5Db25kLnRleHRDb250ZW50ID0gYCR7cmVzcG9uc2UuY29uZGl0aW9uLnRleHR9YDtcbn1cblxuZnVuY3Rpb24gc2V0QWlySW5mb0RPTShyZXNwb25zZSkge1xuICBjb25zdCBhaXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFpci1pbmZvID4gcCcpO1xuXG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IHJlc3BvbnNlLmN1cnJlbnQ7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IHJlc3BvbnNlLmN1cnJlbnQud2luZF9rcGg7XG4gIGNvbnN0IHJhaW5QZXJjZW50YWdlID1cbiAgICByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG4gIGNvbnN0IFVWSW5kZXggPSByZXNwb25zZS5jdXJyZW50LnV2O1xuICBhaXJJbmZvWzBdLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2h1bWlkaXR5fSVgO1xuICBhaXJJbmZvWzFdLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2luZFNwZWVkfSBLTVBIYDtcbiAgYWlySW5mb1syXS50ZXh0Q29udGVudCA9IGBSYWluIFBlcmNlbnRhZ2U6ICR7cmFpblBlcmNlbnRhZ2V9ICVgO1xuICBhaXJJbmZvWzNdLnRleHRDb250ZW50ID0gYFVWOiAke1VWSW5kZXh9YDtcbn1cblxuZnVuY3Rpb24gZ2V0SW1hZ2VTcmMoc3JjKSB7XG4gIGNvbnN0IHNyY0FycmF5ID0gc3JjLnNwbGl0KCcvJyk7XG4gIHJldHVybiBzcmNBcnJheVtzcmNBcnJheS5sZW5ndGggLSAxXTtcbn1cblxuZnVuY3Rpb24gc2V0Rm9yZWNhc3RJbWFnZXMoZm9yZWNhc3RMaXN0KSB7XG4gIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb25kLWltZycpO1xuICBsZXQgaW1hZ2VJbmRleCA9IDA7XG4gIGZvciAobGV0IGkgPSBzdGFydFRpbWU7IGkgPD0gZW5kVGltZTsgaSArPSAzKSB7XG4gICAgY29uc3QgaG91ciA9IGZvcmVjYXN0TGlzdFtpXTtcbiAgICBjb25zdCBpbWFnZVNyYyA9IGdldEltYWdlU3JjKGhvdXIuY29uZGl0aW9uLmljb24pO1xuICAgIGNvbnN0IHRpbWUgPSBob3VyLmlzX2RheSA/ICdkYXknIDogJ25pZ2h0JztcbiAgICBjb25zdCBpbWFnZVNvdXJjZSA9IGAuLi9zcmMvd2VhdGhlckljb25zLyR7dGltZX0vJHtpbWFnZVNyY31gO1xuXG4gICAgdHJ5IHtcbiAgICAgIGltYWdlc1tpbWFnZUluZGV4XS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlU291cmNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuXG4gICAgaW1hZ2VJbmRleCArPSAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEZvcmVjYXN0VGV4dChmb3JlY2FzdExpc3QpIHtcbiAgY29uc3QgdGV4dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29uZC10ZXh0Jyk7XG4gIGxldCB0ZXh0SW5kZXggPSAwO1xuICBmb3IgKGxldCBpID0gc3RhcnRUaW1lOyBpIDw9IGVuZFRpbWU7IGkgKz0gMykge1xuICAgIGNvbnN0IGhvdXIgPSBmb3JlY2FzdExpc3RbaV07XG4gICAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGhvdXIuY29uZGl0aW9uLnRleHQ7XG5cbiAgICB0cnkge1xuICAgICAgdGV4dHNbdGV4dEluZGV4XS50ZXh0Q29udGVudCA9IGNvbmRpdGlvblRleHQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cblxuICAgIHRleHRJbmRleCArPSAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEZvcmVjYXN0VGVtcChmb3JlY2FzdExpc3QpIHtcbiAgY29uc3QgdGVtcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29uZC10ZW1wJyk7XG4gIGxldCB0ZW1wSW5kZXggPSAwO1xuICBmb3IgKGxldCBpID0gc3RhcnRUaW1lOyBpIDw9IGVuZFRpbWU7IGkgKz0gMykge1xuICAgIGNvbnN0IGhvdXIgPSBmb3JlY2FzdExpc3RbaV07XG4gICAgY29uc3QgdGVtcFRleHQgPSBgJHtob3VyLnRlbXBfY33CsENgO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRlbXBzW3RlbXBJbmRleF0udGV4dENvbnRlbnQgPSB0ZW1wVGV4dDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuXG4gICAgdGVtcEluZGV4ICs9IDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Rm9yZWNhc3RJbmZvRE9NKHJlc3BvbnNlKSB7XG4gIHNldEZvcmVjYXN0SW1hZ2VzKHJlc3BvbnNlLmZvcmVjYXN0ZGF5WzBdLmhvdXIpO1xuICBzZXRGb3JlY2FzdFRleHQocmVzcG9uc2UuZm9yZWNhc3RkYXlbMF0uaG91cik7XG4gIHNldEZvcmVjYXN0VGVtcChyZXNwb25zZS5mb3JlY2FzdGRheVswXS5ob3VyKTtcbn1cblxuZXhwb3J0IHsgc2V0V2VhdGhlckNvbmRpdGlvbkRPTSwgc2V0QWlySW5mb0RPTSwgc2V0Rm9yZWNhc3RJbmZvRE9NIH07XG4iLCJjb25zdCBBUElfS0VZID0gJzQzNWUwNGRiMjljNDQ1YzU5YzUxNDAzMTUyMzA3MTAnO1xubGV0IHJlc3BvbnNlSlNPTjtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdEFQSShsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbn0mYXFpPXllc2AsXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQmFkIFJlcXVlc3QnKTtcbiAgICB9XG4gICAgcmVzcG9uc2VKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZXNwb25zZUpTT047XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVSUk9SICR7ZXJyfWApO1xuICAgIHRocm93IGVycjtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRSZXNwb25zZUpTT04ocmVzcG9uc2VQcm9taXNlKSB7XG4gIGF3YWl0IHJlc3BvbnNlUHJvbWlzZTtcbiAgcmV0dXJuIHJlc3BvbnNlSlNPTjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckNvbmRpdGlvbihyZXNwb25zZVByb21pc2UpIHtcbiAgYXdhaXQgcmVzcG9uc2VQcm9taXNlO1xuICBjb25zb2xlLmxvZyhyZXNwb25zZUpTT04pO1xuICByZXR1cm4gcmVzcG9uc2VKU09OLmN1cnJlbnQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJGb3JlY2FzdChyZXNwb25zZVByb21pc2UpIHtcbiAgYXdhaXQgcmVzcG9uc2VQcm9taXNlO1xuICByZXR1cm4gcmVzcG9uc2VKU09OLmZvcmVjYXN0O1xufVxuXG5leHBvcnQgeyBpbml0QVBJLCBnZXRXZWF0aGVyQ29uZGl0aW9uLCBnZXRXZWF0aGVyRm9yZWNhc3QsIGdldFJlc3BvbnNlSlNPTiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHtcbiAgaW5pdEFQSSxcbiAgZ2V0V2VhdGhlckNvbmRpdGlvbixcbiAgZ2V0UmVzcG9uc2VKU09OLFxuICBnZXRXZWF0aGVyRm9yZWNhc3QsXG59IGZyb20gJy4vV2VhdGhlckFQSSc7XG5pbXBvcnQge1xuICBzZXRXZWF0aGVyQ29uZGl0aW9uRE9NLFxuICBzZXRBaXJJbmZvRE9NLFxuICBzZXRGb3JlY2FzdEluZm9ET00sXG59IGZyb20gJy4vRE9NJztcblxuZnVuY3Rpb24gc2V0dXBQYWdlRWxlbWVudChwbGFjZSkge1xuICBjb25zdCByZXNwb25zZVByb21pc2UgPSBpbml0QVBJKHBsYWNlKTtcbiAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGdldFdlYXRoZXJDb25kaXRpb24ocmVzcG9uc2VQcm9taXNlKTtcbiAgY29uc3Qgd2VhdGhlckZvcmVjYXN0ID0gZ2V0V2VhdGhlckZvcmVjYXN0KHJlc3BvbnNlUHJvbWlzZSk7XG4gIGNvbnN0IHJlc3BvbnNlSlNPTiA9IGdldFJlc3BvbnNlSlNPTihyZXNwb25zZVByb21pc2UpO1xuXG4gIHdlYXRoZXJDb25kaXRpb24udGhlbihzZXRXZWF0aGVyQ29uZGl0aW9uRE9NKTtcbiAgd2VhdGhlckZvcmVjYXN0LnRoZW4oc2V0Rm9yZWNhc3RJbmZvRE9NKTtcbiAgcmVzcG9uc2VKU09OLnRoZW4oc2V0QWlySW5mb0RPTSk7XG59XG5cbnNldHVwUGFnZUVsZW1lbnQoJ0h5ZGVyYWJhZCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9