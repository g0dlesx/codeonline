/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/Globalcontext.tsx":
/*!************************************!*\
  !*** ./contexts/Globalcontext.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": () => (/* binding */ GlobalContext),\n/* harmony export */   \"useGlobalContext\": () => (/* binding */ useGlobalContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    name: \"\",\n    setName: ()=>{}\n});\nconst useGlobalContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GlobalContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9HbG9iYWxjb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQytDO0FBT3hDLE1BQU1FLGFBQWEsaUJBQUdGLG9EQUFhLENBQWlCO0lBQ3ZERyxJQUFJLEVBQUUsRUFBRTtJQUNSQyxPQUFPLEVBQUUsSUFBTSxFQUFFO0NBQ3BCLENBQUM7QUFFSyxNQUFNQyxnQkFBZ0IsR0FBRyxJQUFNSixpREFBVSxDQUFDQyxhQUFhLENBQUM7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnRleHRzL0dsb2JhbGNvbnRleHQudHN4P2U4ODkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbnR5cGUgSUdsb2JhbENvbnRleHQgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBzZXROYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJR2xvYmFsQ29udGV4dD4oe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHNldE5hbWU6ICgpID0+IHt9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgdXNlR2xvYmFsQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCkiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwibmFtZSIsInNldE5hbWUiLCJ1c2VHbG9iYWxDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/Globalcontext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_Globalcontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/Globalcontext */ \"./contexts/Globalcontext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_Globalcontext__WEBPACK_IMPORTED_MODULE_3__.GlobalContext.Provider, {\n        value: {\n            name,\n            setName\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {\n                position: \"top-right\",\n                toastOptions: {\n                    success: {\n                        duration: 3000,\n                        theme: {\n                            primary: \"#4aee88\"\n                        }\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\pages\\\\_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\pages\\\\_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sarthak\\\\Documents\\\\codeonline\\\\pages\\\\_app.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFFVztBQUNnQjtBQUN6QjtBQUdqQyxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxNQUFNLEVBUlIsR0FRU0MsSUFBSSxHQVJiLEdBUWVDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDcEMscUJBRUUsOERBQUNELDJFQUFzQjtRQUFDUSxLQUFLLEVBQUU7WUFBQ0gsSUFBSTtZQUFFQyxPQUFPO1NBQUM7OzBCQUM1Qyw4REFBQ1Asb0RBQU87Z0JBQ05VLFFBQVEsRUFBQyxXQUFXO2dCQUNwQkMsWUFBWSxFQUFFO29CQUNaQyxPQUFPLEVBQUU7d0JBQ1BDLFFBQVEsRUFBRSxJQUFJO3dCQUNkQyxLQUFLLEVBQUU7NEJBQ0xDLE9BQU8sRUFBRSxTQUFTO3lCQUVuQjtxQkFDRjtpQkFDRjs7Ozs7b0JBQ0Q7MEJBQ0YsOERBQUNYLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7OztZQUNMLENBQ3pCO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0dsb2JhbGNvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtYXZhdGFyXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7bmFtZSwgc2V0TmFtZX19PlxyXG4gICAgICA8VG9hc3RlclxyXG4gICAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcclxuICAgICAgICB0b2FzdE9wdGlvbnM9e3tcclxuICAgICAgICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXHJcbiAgICAgICAgICAgIHRoZW1lOiB7XHJcbiAgICAgICAgICAgICAgcHJpbWFyeTogXCIjNGFlZTg4XCIsXHJcbiAgICAgICAgICAgICAgLy8gc2Vjb25kYXJ5OiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIlRvYXN0ZXIiLCJHbG9iYWxDb250ZXh0IiwidXNlU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm5hbWUiLCJzZXROYW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInBvc2l0aW9uIiwidG9hc3RPcHRpb25zIiwic3VjY2VzcyIsImR1cmF0aW9uIiwidGhlbWUiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();