"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resume",{

/***/ "./pages/resume.tsx":
/*!**************************!*\
  !*** ./pages/resume.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_Resume_Experience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Resume/Experience */ \"./src/Resume/Experience.tsx\");\n/* harmony import */ var _src_Resume_resume_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Resume/resume.json */ \"./src/Resume/resume.json\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Resume = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), experiences = ref[0], setExperiences = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setExperiences(_src_Resume_resume_json__WEBPACK_IMPORTED_MODULE_3__.experience);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                padding: 20\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Experience\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\pages\\\\resume.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, _this),\n                experiences.map(function(e) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Resume_Experience__WEBPACK_IMPORTED_MODULE_2__.Experience, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, e), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\pages\\\\resume.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 39\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\pages\\\\resume.tsx\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\pages\\\\resume.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, _this);\n};\n_s(Resume, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Resume;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resume);\nvar _c;\n$RefreshReg$(_c, \"Resume\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXN1bWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFBbUQ7QUFFRztBQUNIO0FBR25ELElBQU1LLE1BQU0sR0FBRyxXQUNmOztJQUNJLElBQXNDSCxHQUEyQixHQUEzQkEsK0NBQVEsQ0FBZ0IsRUFBRSxDQUFDLEVBQTFESSxXQUFXLEdBQW9CSixHQUEyQixHQUEvQyxFQUFFSyxjQUFjLEdBQUlMLEdBQTJCLEdBQS9CO0lBRWxDRCxnREFBUyxDQUFDLFdBQ1Y7UUFDSU0sY0FBYyxDQUFDSCwrREFBcUIsQ0FBa0IsQ0FBQztLQUMxRCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0ksOERBQUNLLEtBQUc7a0JBS0EsNEVBQUNBLEtBQUc7WUFBQ0MsS0FBSyxFQUFFO2dCQUFFQyxPQUFPLEVBQUUsRUFBRTthQUFFOzs4QkFDdkIsOERBQUNDLElBQUU7OEJBQUMsWUFBVTs7Ozs7eUJBQUs7Z0JBQ2xCTixXQUFXLENBQUNPLEdBQUcsQ0FBQ0MsU0FBQUEsQ0FBQzt5Q0FBSSw4REFBQ1gsOERBQVUscUZBQ3pCVyxDQUFDOzs7OzZCQUNQO2lCQUFBLENBQUM7Ozs7OztpQkFDRDs7Ozs7YUFDSixDQUNSO0NBQ0w7R0F2QktULE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQXlCWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Jlc3VtZS50c3g/YTEwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEp1bWJvdHJvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvSnVtYm90cm9uJztcclxuaW1wb3J0IHsgRXhwZXJpZW5jZSB9IGZyb20gJy4uL3NyYy9SZXN1bWUvRXhwZXJpZW5jZSc7XHJcbmltcG9ydCBSZXN1bWVKU09OIGZyb20gJy4uL3NyYy9SZXN1bWUvcmVzdW1lLmpzb24nO1xyXG5pbXBvcnQgeyBJRXhwZXJpZW5jZSB9IGZyb20gJy4uL3NyYy9SZXN1bWUvUmVzdW1lSW50ZXJmYWNlcyc7XHJcblxyXG5jb25zdCBSZXN1bWUgPSAoKSA9PlxyXG57XHJcbiAgICBjb25zdCBbZXhwZXJpZW5jZXMsIHNldEV4cGVyaWVuY2VzXSA9IHVzZVN0YXRlPElFeHBlcmllbmNlW10+KFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT5cclxuICAgIHtcclxuICAgICAgICBzZXRFeHBlcmllbmNlcyhSZXN1bWVKU09OLmV4cGVyaWVuY2UgYXMgSUV4cGVyaWVuY2VbXSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LyogPEp1bWJvdHJvbj5cclxuICAgICAgICAgICAgICAgIDxoMT5FbWlseSBSYWdhbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDI+SHlhdHRzdmlsbGUsIE1EIHwgPGEgaHJlZj1cIm1haWx0bzplbWlseS5seW5uLnJhZ2FuQGdtYWlsLmNvbVwiPmVtaWx5Lmx5bm4ucmFnYW5AZ21haWwuY29tPC9hPiB8IDMwMi01MjEtOTY0MTwvaDI+XHJcbiAgICAgICAgICAgIDwvSnVtYm90cm9uPiAqL31cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgIDxoMj5FeHBlcmllbmNlPC9oMj5cclxuICAgICAgICAgICAgICAgIHtleHBlcmllbmNlcy5tYXAoZSA9PiA8RXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5lfVxyXG4gICAgICAgICAgICAgICAgLz4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJFeHBlcmllbmNlIiwiUmVzdW1lSlNPTiIsIlJlc3VtZSIsImV4cGVyaWVuY2VzIiwic2V0RXhwZXJpZW5jZXMiLCJleHBlcmllbmNlIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nIiwiaDIiLCJtYXAiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/resume.tsx\n"));

/***/ }),

/***/ "./src/Resume/Experience.tsx":
/*!***********************************!*\
  !*** ./src/Resume/Experience.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Experience\": function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Experience = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: props.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\src\\\\Resume\\\\Experience.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: props.employer\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\src\\\\Resume\\\\Experience.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\src\\\\Resume\\\\Experience.tsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: props.location\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\src\\\\Resume\\\\Experience.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: props.dates\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\src\\\\Resume\\\\Experience.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\src\\\\Resume\\\\Experience.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: props.bullets.map(function(b) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: b\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\src\\\\Resume\\\\Experience.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 41\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\src\\\\Resume\\\\Experience.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\emily\\\\Documents\\\\projects\\\\personal-site\\\\src\\\\Resume\\\\Experience.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this);\n};\n_c = Experience;\nvar _c;\n$RefreshReg$(_c, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUmVzdW1lL0V4cGVyaWVuY2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBR25CLElBQU1DLFVBQVUsR0FBRyxTQUFDQyxLQUFrQixFQUM3QztJQUNJLHFCQUNJLDhEQUFDQyxLQUFHOzswQkFDQSw4REFBQ0EsS0FBRztnQkFBQ0MsS0FBSyxFQUFFO29CQUFFQyxPQUFPLEVBQUUsTUFBTTtvQkFBRUMsY0FBYyxFQUFFLGVBQWU7aUJBQUU7O2tDQUM1RCw4REFBQ0MsSUFBRTtrQ0FBRUwsS0FBSyxDQUFDTSxLQUFLOzs7Ozs2QkFBTTtrQ0FDdEIsOERBQUNDLElBQUU7a0NBQUVQLEtBQUssQ0FBQ1EsUUFBUTs7Ozs7NkJBQU07Ozs7OztxQkFDdkI7MEJBQ04sOERBQUNQLEtBQUc7Z0JBQUNDLEtBQUssRUFBRTtvQkFBRUMsT0FBTyxFQUFFLE1BQU07b0JBQUVDLGNBQWMsRUFBRSxlQUFlO2lCQUFFOztrQ0FDNUQsOERBQUNHLElBQUU7a0NBQUVQLEtBQUssQ0FBQ1MsUUFBUTs7Ozs7NkJBQU07a0NBQ3pCLDhEQUFDRixJQUFFO2tDQUFFUCxLQUFLLENBQUNVLEtBQUs7Ozs7OzZCQUFNOzs7Ozs7cUJBQ3BCOzBCQUNOLDhEQUFDQyxJQUFFOzBCQUNFWCxLQUFLLENBQUNZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFBQSxDQUFDO3lDQUFJLDhEQUFDQyxJQUFFO2tDQUFFRCxDQUFDOzs7Ozs2QkFBTTtpQkFBQSxDQUFDOzs7OztxQkFDcEM7Ozs7OzthQUNILENBQ1I7Q0FDTCxDQUFDO0FBakJXZixLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9SZXN1bWUvRXhwZXJpZW5jZS50c3g/OTE4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJRXhwZXJpZW5jZSB9IGZyb20gJy4vUmVzdW1lSW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgRXhwZXJpZW5jZSA9IChwcm9wczogSUV4cGVyaWVuY2UpID0+XHJcbntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDM+e3Byb3BzLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e3Byb3BzLmVtcGxveWVyfTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgIDxoND57cHJvcHMubG9jYXRpb259PC9oND5cclxuICAgICAgICAgICAgICAgIDxoND57cHJvcHMuZGF0ZXN9PC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5idWxsZXRzLm1hcChiID0+IDxsaT57Yn08L2xpPil9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJFeHBlcmllbmNlIiwicHJvcHMiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImgzIiwidGl0bGUiLCJoNCIsImVtcGxveWVyIiwibG9jYXRpb24iLCJkYXRlcyIsInVsIiwiYnVsbGV0cyIsIm1hcCIsImIiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Resume/Experience.tsx\n"));

/***/ }),

/***/ "./src/Resume/resume.json":
/*!********************************!*\
  !*** ./src/Resume/resume.json ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = JSON.parse('{"experience":[{"title":"Junior Software Engineer","employer":"Skyward App Company","location":"Columbia, MD","dates":"April 2019 - Present","bullets":["Develop online/offline iOS application in React Native that consumes REST APIs","Communicate with customers during demos and for requirements clarification","Work on web applications using React.js, mapbox-gl, C#, and Entity Framework","Implement REST API endpoints for web application","Internal presentation to company about front-end automated testing"]},{"title":"Software Engineer Intern at NASA Goddard Space Flight Center","employer":"MTI Systems","location":"Greenbelt, MD","dates":"May 2017 - April 2019","bullets":["Lead team of 3-6 interns for SCaN Now: delegated assignments, reviewed code, prioritized tickets","Planned, organized, and ran meetings to review features and improvements for SCaN Now","Presented products to stakeholders from NASA Headquarters for SCaN Now","Developed features for responsive web applications","Used publish and subscribe functions on a WAMP bus to communicate status for display","Collaborated with subject matter experts to design improvements and features for UI/UX","Developed map-base interactive mission tour in Angular 7 with Angular Material and Leaflet.js"]},{"title":"Math and Computer Science Tutor","employer":"University of Richmond","location":"Richmond, VA","dates":"January - April 2017","bullets":[]},{"title":"Computer Science Lab and Grading Assistant","employer":"University of Richmond","location":"Richmond, VA","dates":"August - December 2016","bullets":[]}]}');

/***/ })

});