"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/board/board.js":
/*!***********************************!*\
  !*** ./components/board/board.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dino__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dino */ \"./components/board/dino.js\");\n/* harmony import */ var _demon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demon */ \"./components/board/demon.js\");\n/* harmony import */ var _slime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slime */ \"./components/board/slime.js\");\n/* harmony import */ var _bush__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bush */ \"./components/board/bush.js\");\n/* harmony import */ var _egg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./egg */ \"./components/board/egg.js\");\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./key */ \"./components/board/key.js\");\n/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../canvas/canvas */ \"./components/canvas/canvas.js\");\n/* harmony import */ var _settings_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../settings/constants */ \"./settings/constants.ts\");\n/* harmony import */ var _styles_board_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/board.module.css */ \"./styles/board.module.css\");\n/* harmony import */ var _styles_board_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_board_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n// import Monster from './monster'\n\n\nfunction getCanvasMap() {\n    const array = [];\n    for(let y = 0; y < _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.CANVAS.length; y++){\n        const canvasY = _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.CANVAS[y];\n        for(let x = 0; x < canvasY.length; x++){\n            const canvasYX = canvasY[x];\n            const position = {\n                x: x,\n                y: y\n            };\n            const text = canvasY[x] || canvasYX;\n            const key = \"\".concat(x, \"-\").concat(y);\n            if (text === _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.Ecanvas.DINO) {\n                array.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dino__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    position: position,\n                    text: text\n                }, key, false, {\n                    fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/board.js\",\n                    lineNumber: 27,\n                    columnNumber: 28\n                }, this));\n            } else if (text === _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.Ecanvas.DEMON) {\n                array.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_demon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    position: position,\n                    text: text\n                }, key, false, {\n                    fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/board.js\",\n                    lineNumber: 30,\n                    columnNumber: 28\n                }, this));\n            } else if (text === _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.Ecanvas.SLIME) {\n                array.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_slime__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    position: position,\n                    text: text\n                }, key, false, {\n                    fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/board.js\",\n                    lineNumber: 33,\n                    columnNumber: 28\n                }, this));\n            } else if (text === _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.Ecanvas.BUSH) {\n                array.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bush__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    position: position,\n                    text: text\n                }, key, false, {\n                    fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/board.js\",\n                    lineNumber: 36,\n                    columnNumber: 28\n                }, this));\n            } else if (text === _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.Ecanvas.EGG) {\n                array.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_egg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    position: position,\n                    text: text\n                }, key, false, {\n                    fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/board.js\",\n                    lineNumber: 39,\n                    columnNumber: 28\n                }, this));\n            } else if (text === _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.Ecanvas.KEY1 || text === _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.Ecanvas.KEY2) {\n                array.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_key__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    position: position,\n                    text: text,\n                    key_: _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.Ecanvas.KEY1\n                }, key, false, {\n                    fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/board.js\",\n                    lineNumber: 42,\n                    columnNumber: 28\n                }, this));\n            } else if (text === _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.Ecanvas.KEY1 || text === _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.Ecanvas.KEY2) {\n                array.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_key__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    position: position,\n                    text: text,\n                    key_: _canvas_canvas__WEBPACK_IMPORTED_MODULE_8__.Ecanvas.KEY1\n                }, key, false, {\n                    fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/board.js\",\n                    lineNumber: 45,\n                    columnNumber: 28\n                }, this));\n            }\n        }\n    }\n    return array;\n}\nconst elements = getCanvasMap();\n// LIMITES do board: x = 12, y = 10\nfunction Board() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_board_module_css__WEBPACK_IMPORTED_MODULE_10___default().Board),\n        children: elements\n    }, void 0, false, {\n        fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/board.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n}\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRDtBQUNFO0FBQ0E7QUFDRjtBQUNGO0FBQ0E7QUFDeUI7QUFDaEQsa0NBQWtDO0FBQzRDO0FBQzNCO0FBR25ELFNBQVNZO0lBQ0wsTUFBTUMsUUFBUSxFQUFFO0lBQ2hCLElBQUksSUFBSUMsSUFBSSxHQUFHQSxJQUFJUCxrREFBTUEsQ0FBQ1EsTUFBTSxFQUFDRCxJQUFJO1FBQ2pDLE1BQU1FLFVBQVVULGtEQUFNLENBQUNPLEVBQUU7UUFFekIsSUFBSSxJQUFJRyxJQUFJLEdBQUdBLElBQUlELFFBQVFELE1BQU0sRUFBRUUsSUFBSTtZQUNuQyxNQUFNQyxXQUFXRixPQUFPLENBQUNDLEVBQUU7WUFFM0IsTUFBTUUsV0FBVztnQkFBRUYsR0FBR0E7Z0JBQUdILEdBQUVBO1lBQUM7WUFDNUIsTUFBTU0sT0FBT0osT0FBTyxDQUFDQyxFQUFFLElBQUlDO1lBQzNCLE1BQU1HLE1BQU0sR0FBUVAsT0FBTEcsR0FBRSxLQUFLLE9BQUZIO1lBRXBCLElBQUlNLFNBQVVaLG1EQUFPQSxDQUFDYyxJQUFJLEVBQUM7Z0JBQ3ZCVCxNQUFNVSxJQUFJLGVBQUMsOERBQUN0Qiw2Q0FBSUE7b0JBQVdrQixVQUFXQTtvQkFBVUMsTUFBUUE7bUJBQWxDQzs7Ozs7WUFDMUIsT0FDSyxJQUFJRCxTQUFVWixtREFBT0EsQ0FBQ2dCLEtBQUssRUFBQztnQkFDN0JYLE1BQU1VLElBQUksZUFBQyw4REFBQ3JCLDhDQUFLQTtvQkFBV2lCLFVBQVdBO29CQUFVQyxNQUFRQTttQkFBbENDOzs7OztZQUMzQixPQUNLLElBQUlELFNBQVVaLG1EQUFPQSxDQUFDaUIsS0FBSyxFQUFDO2dCQUM3QlosTUFBTVUsSUFBSSxlQUFDLDhEQUFDcEIsOENBQUtBO29CQUFXZ0IsVUFBV0E7b0JBQVVDLE1BQVFBO21CQUFsQ0M7Ozs7O1lBQzNCLE9BQ0ssSUFBSUQsU0FBVVosbURBQU9BLENBQUNrQixJQUFJLEVBQUM7Z0JBQzVCYixNQUFNVSxJQUFJLGVBQUMsOERBQUNuQiw2Q0FBSUE7b0JBQVdlLFVBQVdBO29CQUFVQyxNQUFRQTttQkFBbENDOzs7OztZQUMxQixPQUNLLElBQUlELFNBQVVaLG1EQUFPQSxDQUFDbUIsR0FBRyxFQUFDO2dCQUMzQmQsTUFBTVUsSUFBSSxlQUFDLDhEQUFDbEIsNENBQUdBO29CQUFXYyxVQUFXQTtvQkFBVUMsTUFBUUE7bUJBQWxDQzs7Ozs7WUFDekIsT0FDSyxJQUFJRCxTQUFVWixtREFBT0EsQ0FBQ29CLElBQUksSUFBSVIsU0FBVVosbURBQU9BLENBQUNxQixJQUFJLEVBQUM7Z0JBQ3REaEIsTUFBTVUsSUFBSSxlQUFDLDhEQUFDakIsNENBQUdBO29CQUFXYSxVQUFXQTtvQkFBVUMsTUFBUUE7b0JBQU1VLE1BQU90QixtREFBT0EsQ0FBQ29CLElBQUk7bUJBQTNEUDs7Ozs7WUFDekIsT0FDSyxJQUFJRCxTQUFVWixtREFBT0EsQ0FBQ29CLElBQUksSUFBSVIsU0FBVVosbURBQU9BLENBQUNxQixJQUFJLEVBQUM7Z0JBQ3REaEIsTUFBTVUsSUFBSSxlQUFDLDhEQUFDakIsNENBQUdBO29CQUFXYSxVQUFXQTtvQkFBVUMsTUFBUUE7b0JBQU1VLE1BQU90QixtREFBT0EsQ0FBQ29CLElBQUk7bUJBQTNEUDs7Ozs7WUFDekI7UUFDSjtJQUNKO0lBRUEsT0FBT1I7QUFDWDtBQUVBLE1BQU1rQixXQUFXbkI7QUFDakIsbUNBQW1DO0FBQ25DLFNBQVNvQjtJQUVMLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXdkIsd0VBQVk7a0JBQ3ZCb0I7Ozs7OztBQUdiO0tBUFNDO0FBU1QsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZC9ib2FyZC5qcz8wNDE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGlubyBmcm9tICcuL2Rpbm8nXG5pbXBvcnQgRGVtb24gZnJvbSAnLi9kZW1vbidcbmltcG9ydCBTbGltZSBmcm9tICcuL3NsaW1lJ1xuaW1wb3J0IEJ1c2ggZnJvbSAnLi9idXNoJ1xuaW1wb3J0IEVnZyBmcm9tICcuL2VnZydcbmltcG9ydCBLZXkgZnJvbSAnLi9rZXknXG5pbXBvcnQge0NBTlZBUywgRWNhbnZhc30gZnJvbSAnLi4vY2FudmFzL2NhbnZhcydcbi8vIGltcG9ydCBNb25zdGVyIGZyb20gJy4vbW9uc3RlcidcbmltcG9ydCB7IEJPQVJEX1NJWkVfSEVJR0hULCBCT0FSRF9TSVpFX1dJRFRIfSBmcm9tICcuLi8uLi9zZXR0aW5ncy9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvYm9hcmQubW9kdWxlLmNzcyc7XG5cblxuZnVuY3Rpb24gZ2V0Q2FudmFzTWFwKCl7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBmb3IobGV0IHkgPSAwOyB5IDwgQ0FOVkFTLmxlbmd0aDt5Kyspe1xuICAgICAgICBjb25zdCBjYW52YXNZID0gQ0FOVkFTW3ldO1xuXG4gICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCBjYW52YXNZLmxlbmd0aDsgeCsrKXtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhc1lYID0gY2FudmFzWVt4XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB7IHg6IHgsIHk6eX07XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gY2FudmFzWVt4XSB8fCBjYW52YXNZWDtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke3h9LSR7eX1gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCB0ZXh0ICA9PT0gRWNhbnZhcy5ESU5PKXtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKDxEaW5vIGtleT17a2V5fSBwb3NpdGlvbiA9e3Bvc2l0aW9ufSB0ZXh0ID0ge3RleHR9IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiggdGV4dCAgPT09IEVjYW52YXMuREVNT04pe1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goPERlbW9uIGtleT17a2V5fSBwb3NpdGlvbiA9e3Bvc2l0aW9ufSB0ZXh0ID0ge3RleHR9IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiggdGV4dCAgPT09IEVjYW52YXMuU0xJTUUpe1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goPFNsaW1lIGtleT17a2V5fSBwb3NpdGlvbiA9e3Bvc2l0aW9ufSB0ZXh0ID0ge3RleHR9IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiggdGV4dCAgPT09IEVjYW52YXMuQlVTSCl7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCg8QnVzaCBrZXk9e2tleX0gcG9zaXRpb24gPXtwb3NpdGlvbn0gdGV4dCA9IHt0ZXh0fSAvPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoIHRleHQgID09PSBFY2FudmFzLkVHRyl7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCg8RWdnIGtleT17a2V5fSBwb3NpdGlvbiA9e3Bvc2l0aW9ufSB0ZXh0ID0ge3RleHR9IC8+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiggdGV4dCAgPT09IEVjYW52YXMuS0VZMSB8fCB0ZXh0ICA9PT0gRWNhbnZhcy5LRVkyKXtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKDxLZXkga2V5PXtrZXl9IHBvc2l0aW9uID17cG9zaXRpb259IHRleHQgPSB7dGV4dH0ga2V5XyA9e0VjYW52YXMuS0VZMX0vPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoIHRleHQgID09PSBFY2FudmFzLktFWTEgfHwgdGV4dCAgPT09IEVjYW52YXMuS0VZMil7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaCg8S2V5IGtleT17a2V5fSBwb3NpdGlvbiA9e3Bvc2l0aW9ufSB0ZXh0ID0ge3RleHR9IGtleV8gPXtFY2FudmFzLktFWTF9Lz4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG59XG5cbmNvbnN0IGVsZW1lbnRzID0gZ2V0Q2FudmFzTWFwKCk7XG4vLyBMSU1JVEVTIGRvIGJvYXJkOiB4ID0gMTIsIHkgPSAxMFxuZnVuY3Rpb24gQm9hcmQoKSB7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Cb2FyZH0+XG4gICAgICAgICAgICB7ZWxlbWVudHN9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRpbm8iLCJEZW1vbiIsIlNsaW1lIiwiQnVzaCIsIkVnZyIsIktleSIsIkNBTlZBUyIsIkVjYW52YXMiLCJCT0FSRF9TSVpFX0hFSUdIVCIsIkJPQVJEX1NJWkVfV0lEVEgiLCJzdHlsZXMiLCJnZXRDYW52YXNNYXAiLCJhcnJheSIsInkiLCJsZW5ndGgiLCJjYW52YXNZIiwieCIsImNhbnZhc1lYIiwicG9zaXRpb24iLCJ0ZXh0Iiwia2V5IiwiRElOTyIsInB1c2giLCJERU1PTiIsIlNMSU1FIiwiQlVTSCIsIkVHRyIsIktFWTEiLCJLRVkyIiwia2V5XyIsImVsZW1lbnRzIiwiQm9hcmQiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/board/board.js\n"));

/***/ })

});