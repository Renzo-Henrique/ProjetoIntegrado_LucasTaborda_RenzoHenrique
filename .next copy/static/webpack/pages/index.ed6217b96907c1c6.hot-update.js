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

/***/ "./components/board/key.js":
/*!*********************************!*\
  !*** ./components/board/key.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _calcularVariaveis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calcularVariaveis */ \"./components/calcularVariaveis.js\");\n/* harmony import */ var _hook_useKeyMoviment_UseKeyMoviment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useKeyMoviment/UseKeyMoviment */ \"./components/hook/useKeyMoviment/UseKeyMoviment.js\");\n/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas/canvas */ \"./components/canvas/canvas.js\");\n\n\n\n\n\nfunction MyKey(props) {\n    const initialPositionKey = {\n        x: props.position.x,\n        y: props.position.y,\n        key: props.key\n    };\n    const variaveis = (0,_calcularVariaveis__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    let TILE_CENTER = variaveis.TILE_CENTER_EGG;\n    let KEY_SIZE = variaveis.TILE_SIZE_EGG;\n    const moviment_key = (0,_hook_useKeyMoviment_UseKeyMoviment__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(initialPositionKey, initialPositionKey.key);\n    if (moviment_key.x == 0 && moviment_key.y == 0) {\n        moviment_key.x = -2;\n        moviment_key.y = -2;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"absolute\",\n            width: KEY_SIZE,\n            height: KEY_SIZE,\n            backgroundImage: 'url(\"assets/objects/key.png\")',\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            /*Animacoes*/ animation: \"egg-animation-moviment 1s steps(4) infinite\",\n            /*animation: DEMON-animation-stand-by 1s steps(3) infinite;*/ /*animation: DEMON-animation-hurt 1s steps(3) infinite;*/ top: +TILE_CENTER + KEY_SIZE * moviment_key.y,\n            left: +TILE_CENTER + KEY_SIZE * moviment_key.x\n        }\n    }, void 0, false, {\n        fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/key.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_c = MyKey;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyKey);\nvar _c;\n$RefreshReg$(_c, \"MyKey\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkL2tleS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDVztBQUNjO0FBQzFCO0FBR3hDLFNBQVNLLE1BQU1DLEtBQUs7SUFDaEIsTUFBTUMscUJBQXFCO1FBQ3ZCQyxHQUFHRixNQUFNRyxRQUFRLENBQUNELENBQUM7UUFDbkJFLEdBQUdKLE1BQU1HLFFBQVEsQ0FBQ0MsQ0FBQztRQUNuQkMsS0FBS0wsTUFBTUssR0FBRztJQUNsQjtJQUVELE1BQU1DLFlBQVlWLDhEQUFpQkE7SUFFbkMsSUFBSVcsY0FBY0QsVUFBVUUsZUFBZTtJQUUzQyxJQUFJQyxXQUFXSCxVQUFVSSxhQUFhO0lBRXRDLE1BQU1DLGVBQWVkLCtFQUFjQSxDQUFDSSxvQkFBb0JBLG1CQUFtQkksR0FBRztJQUU5RSxJQUFHTSxhQUFhVCxDQUFDLElBQUksS0FBS1MsYUFBYVAsQ0FBQyxJQUFJLEdBQUU7UUFDekNPLGFBQWFULENBQUMsR0FBRyxDQUFDO1FBQ2xCUyxhQUFhUCxDQUFDLEdBQUcsQ0FBQztJQUN2QjtJQUNBLHFCQUNLLDhEQUFDUTtRQUNEQyxPQUFPO1lBQ0hWLFVBQVU7WUFDVlcsT0FBT0w7WUFDUE0sUUFBUU47WUFDUk8saUJBQWlCO1lBQ2pCQyxrQkFBa0I7WUFDbEJDLGdCQUFnQjtZQUNoQixXQUFXLEdBQ1hDLFdBQVk7WUFDWiwyREFBMkQsR0FDM0QsdURBQXVELEdBQ3ZEQyxLQUFLLENBQUNiLGNBQWNFLFdBQWFFLGFBQWFQLENBQUM7WUFDL0NpQixNQUFNLENBQUNkLGNBQWNFLFdBQWFFLGFBQWFULENBQUM7UUFFcEQ7Ozs7OztBQVNSO0tBNUNTSDtBQTZDVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JvYXJkL2tleS5qcz84NzBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2FsY3VsYXJWYXJpYXZlaXMgZnJvbSAnLi4vY2FsY3VsYXJWYXJpYXZlaXMnXG5pbXBvcnQgVXNlS2V5TW92aW1lbnQgZnJvbSAnLi4vaG9vay91c2VLZXlNb3ZpbWVudC9Vc2VLZXlNb3ZpbWVudCdcbmltcG9ydCB7RWNhbnZhc30gZnJvbSAnLi4vY2FudmFzL2NhbnZhcydcblxuXG5mdW5jdGlvbiBNeUtleShwcm9wcyl7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9uS2V5ID0ge1xuICAgICAgICB4OiBwcm9wcy5wb3NpdGlvbi54LFxuICAgICAgICB5OiBwcm9wcy5wb3NpdGlvbi55LFxuICAgICAgICBrZXk6IHByb3BzLmtleSxcbiAgICB9O1xuXG4gICBjb25zdCB2YXJpYXZlaXMgPSBjYWxjdWxhclZhcmlhdmVpcygpO1xuXG4gICBsZXQgVElMRV9DRU5URVIgPSB2YXJpYXZlaXMuVElMRV9DRU5URVJfRUdHO1xuXG4gICBsZXQgS0VZX1NJWkUgPSB2YXJpYXZlaXMuVElMRV9TSVpFX0VHRztcblxuICAgY29uc3QgbW92aW1lbnRfa2V5ID0gVXNlS2V5TW92aW1lbnQoaW5pdGlhbFBvc2l0aW9uS2V5LCBpbml0aWFsUG9zaXRpb25LZXkua2V5KTtcblxuICAgaWYobW92aW1lbnRfa2V5LnggPT0gMCAmJiBtb3ZpbWVudF9rZXkueSA9PSAwKXtcbiAgICAgICAgbW92aW1lbnRfa2V5LnggPSAtMjtcbiAgICAgICAgbW92aW1lbnRfa2V5LnkgPSAtMjtcbiAgIH1cbiAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHdpZHRoOiBLRVlfU0laRSAsXG4gICAgICAgICAgICBoZWlnaHQ6IEtFWV9TSVpFICxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzc2V0cy9vYmplY3RzL2tleS5wbmdcIiknLFxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgLypBbmltYWNvZXMqL1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBgZWdnLWFuaW1hdGlvbi1tb3ZpbWVudCAxcyBzdGVwcyg0KSBpbmZpbml0ZWAsXG4gICAgICAgICAgICAvKmFuaW1hdGlvbjogREVNT04tYW5pbWF0aW9uLXN0YW5kLWJ5IDFzIHN0ZXBzKDMpIGluZmluaXRlOyovXG4gICAgICAgICAgICAvKmFuaW1hdGlvbjogREVNT04tYW5pbWF0aW9uLWh1cnQgMXMgc3RlcHMoMykgaW5maW5pdGU7Ki9cbiAgICAgICAgICAgIHRvcDogK1RJTEVfQ0VOVEVSICsgS0VZX1NJWkUgICogKG1vdmltZW50X2tleS55KSxcbiAgICAgICAgICAgIGxlZnQ6ICtUSUxFX0NFTlRFUiArIEtFWV9TSVpFICAqIChtb3ZpbWVudF9rZXkueCksXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06IGBzY2FsZVgoJHttb3ZpbWVudF9zbGltZS5kaXJlY3Rpb24gPT09ICdSSUdIVCcgPyAxIDogLTF9KWAsXG4gICAgICAgIH19PlxuICAgICAgIDwvZGl2PlxuICAgICAgICAvLyBUSUxFX0NFTlRFUiBkZXZlIGNlbnRyYWxpemFyIG8gREVNT04gbm8gbWVpbyBkZSB1bSB0aWxlXG4gICAgICAgIC8vIHBvc2l0aW9uU3RhdGUgeCBlIHkgZmF6ZW0gYSBtb3ZpbWVudGHDp8OjbyBkZSAxIHRpbGVcbiAgICAgICAgLy8gdHJhbnNmb3JtIGVzcGVsaGEgYSBpbWFnZW0gcGFyYSBtdWRhciBkZSBkaXJlw6fDo29cbiAgICAgICAgLy8gU1RZTEUgREVWRSBGSUNBUiBBUVVJLCBwcm8gamF2YXNjcmlwdCBuIHByZWNpc2FyIHBlZ2FyIG8gSUQgbmEgcXVlcnlcbiAgICAgICAgLy8gQ29tIGlzc28gY29uc2VndWltb3MgbW9kaWZpY2FyIG8gY3NzIG5vIGphdmFzY3JpcHQgcHVyb1xuICAgICk7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IE15S2V5OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImNhbGN1bGFyVmFyaWF2ZWlzIiwiVXNlS2V5TW92aW1lbnQiLCJFY2FudmFzIiwiTXlLZXkiLCJwcm9wcyIsImluaXRpYWxQb3NpdGlvbktleSIsIngiLCJwb3NpdGlvbiIsInkiLCJrZXkiLCJ2YXJpYXZlaXMiLCJUSUxFX0NFTlRFUiIsIlRJTEVfQ0VOVEVSX0VHRyIsIktFWV9TSVpFIiwiVElMRV9TSVpFX0VHRyIsIm1vdmltZW50X2tleSIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJhbmltYXRpb24iLCJ0b3AiLCJsZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/board/key.js\n"));

/***/ }),

/***/ "./components/hook/useKeyMoviment/UseKeyMoviment.js":
/*!**********************************************************!*\
  !*** ./components/hook/useKeyMoviment/UseKeyMoviment.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _use_it_event_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @use-it/event-listener */ \"./node_modules/@use-it/event-listener/dist/event-listener.m.js\");\n/* harmony import */ var _use_it_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @use-it/interval */ \"./node_modules/@use-it/interval/dist/index.js\");\n/* harmony import */ var _use_it_interval__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_use_it_interval__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _settings_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../settings/constants */ \"./settings/constants.ts\");\n/* harmony import */ var _canvas_canvasContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../canvas/canvasContext */ \"./components/canvas/canvasContext.js\");\n/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../canvas/canvas */ \"./components/canvas/canvas.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction UseKeyMoviment(initialPosition, canvasValue) {\n    _s();\n    const canvasContext = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_canvas_canvasContext__WEBPACK_IMPORTED_MODULE_4__.CanvasContext);\n    const [positionState, updatePositionState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(initialPosition);\n    const [direction, updateDirectionState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(\"RIGHT\");\n    //npm install --save @use-it/interval\n    const enumMoviment = {\n        0: \"LEFT\",\n        1: \"RIGHT\",\n        2: \"UP\",\n        3: \"DOWN\"\n    };\n    _use_it_interval__WEBPACK_IMPORTED_MODULE_2___default()(function move() {\n        // Verifica se a posicao atual possui valor diferente das chaves\n        const moviment = canvasContext.updateCanvas(\"nothing\", positionState, _settings_constants__WEBPACK_IMPORTED_MODULE_3__.Ewalker.KEY, direction, canvasValue);\n        // verifica se foi obtido, se for joga a posicao para 0,0. Significando pra animação sair do mapa\n        if (moviment.nextMove.key1 || moviment.nextMove.key2) {\n            updatePositionState({\n                x: 0,\n                y: 0\n            });\n        }\n    }, 100);\n    return {\n        position: positionState,\n        direction: direction\n    };\n}\n_s(UseKeyMoviment, \"r5YtXyREKLcuPgPP4v5Z1U2o6Mk=\", false, function() {\n    return [\n        (_use_it_interval__WEBPACK_IMPORTED_MODULE_2___default())\n    ];\n});\n_c = UseKeyMoviment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UseKeyMoviment);\nvar _c;\n$RefreshReg$(_c, \"UseKeyMoviment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvb2svdXNlS2V5TW92aW1lbnQvVXNlS2V5TW92aW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUM0QjtBQUNaO0FBQ1U7QUFDSztBQUNkO0FBRTNDLFNBQVNNLGVBQWVDLGVBQWUsRUFBRUMsV0FBVzs7SUFDaEQsTUFBTUMsZ0JBQWdCVCx1REFBZ0IsQ0FBQ0ksZ0VBQWFBO0lBQ3BELE1BQU0sQ0FBQ08sZUFBZUMsb0JBQW9CLEdBQUdaLHFEQUFjLENBQUNPO0lBQzVELE1BQU0sQ0FBQ08sV0FBV0MscUJBQXFCLEdBQUdmLHFEQUFjLENBQUM7SUFHekQscUNBQXFDO0lBQ3JDLE1BQU1nQixlQUFlO1FBQ2pCLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7SUFDUDtJQUNBZCx1REFBV0EsQ0FBQyxTQUFTZTtRQUNqQixnRUFBZ0U7UUFFaEUsTUFBTUMsV0FBV1QsY0FBY1UsWUFBWSxDQUFDLFdBQVdSLGVBQWVSLHdEQUFPQSxDQUFDaUIsR0FBRyxFQUFFTixXQUFXTjtRQUU5RixpR0FBaUc7UUFDakcsSUFBSVUsU0FBU0csUUFBUSxDQUFDQyxJQUFJLElBQUlKLFNBQVNHLFFBQVEsQ0FBQ0UsSUFBSSxFQUFDO1lBQ2pEWCxvQkFBb0I7Z0JBQUNZLEdBQUc7Z0JBQUdDLEdBQUc7WUFBQztRQUNuQztJQUVKLEdBQUc7SUFFSCxPQUFPO1FBQ0hDLFVBQVVmO1FBQ1ZHLFdBQVdBO0lBQ2Y7QUFDSjtHQTdCU1I7O1FBYUxKLHlEQUFXQTs7O0tBYk5JO0FBK0JULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9vay91c2VLZXlNb3ZpbWVudC9Vc2VLZXlNb3ZpbWVudC5qcz9hNmUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRXZlbnRMaXN0ZW5lciBmcm9tICdAdXNlLWl0L2V2ZW50LWxpc3RlbmVyJztcbmltcG9ydCB1c2VJbnRlcnZhbCBmcm9tICdAdXNlLWl0L2ludGVydmFsJ1xuaW1wb3J0IHtFd2Fsa2VyfSBmcm9tICcuLi8uLi8uLi9zZXR0aW5ncy9jb25zdGFudHMnO1xuaW1wb3J0IHtDYW52YXNDb250ZXh0fSBmcm9tICcuLi8uLi9jYW52YXMvY2FudmFzQ29udGV4dCc7XG5pbXBvcnQge0VjYW52YXN9IGZyb20gJy4uLy4uL2NhbnZhcy9jYW52YXMnXG5cbmZ1bmN0aW9uIFVzZUtleU1vdmltZW50KGluaXRpYWxQb3NpdGlvbiwgY2FudmFzVmFsdWUpe1xuICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENhbnZhc0NvbnRleHQpO1xuICAgIGNvbnN0IFtwb3NpdGlvblN0YXRlLCB1cGRhdGVQb3NpdGlvblN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxQb3NpdGlvbik7XG4gICAgY29uc3QgW2RpcmVjdGlvbiwgdXBkYXRlRGlyZWN0aW9uU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoJ1JJR0hUJyk7XG4gICAgXG5cbiAgICAvL25wbSBpbnN0YWxsIC0tc2F2ZSBAdXNlLWl0L2ludGVydmFsXG4gICAgY29uc3QgZW51bU1vdmltZW50ID0ge1xuICAgICAgICAwOiBcIkxFRlRcIixcbiAgICAgICAgMTogXCJSSUdIVFwiLFxuICAgICAgICAyOiBcIlVQXCIsXG4gICAgICAgIDM6IFwiRE9XTlwiLFxuICAgIH1cbiAgICB1c2VJbnRlcnZhbChmdW5jdGlvbiBtb3ZlKCl7XG4gICAgICAgIC8vIFZlcmlmaWNhIHNlIGEgcG9zaWNhbyBhdHVhbCBwb3NzdWkgdmFsb3IgZGlmZXJlbnRlIGRhcyBjaGF2ZXNcblxuICAgICAgICBjb25zdCBtb3ZpbWVudCA9IGNhbnZhc0NvbnRleHQudXBkYXRlQ2FudmFzKCdub3RoaW5nJywgcG9zaXRpb25TdGF0ZSwgRXdhbGtlci5LRVksIGRpcmVjdGlvbiwgY2FudmFzVmFsdWUpO1xuXG4gICAgICAgIC8vIHZlcmlmaWNhIHNlIGZvaSBvYnRpZG8sIHNlIGZvciBqb2dhIGEgcG9zaWNhbyBwYXJhIDAsMC4gU2lnbmlmaWNhbmRvIHByYSBhbmltYcOnw6NvIHNhaXIgZG8gbWFwYVxuICAgICAgICBpZiAobW92aW1lbnQubmV4dE1vdmUua2V5MSB8fCBtb3ZpbWVudC5uZXh0TW92ZS5rZXkyKXtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uU3RhdGUoe3g6IDAsIHk6IDB9KTtcbiAgICAgICAgfVxuXG4gICAgfSwgMTAwKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblN0YXRlLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZUtleU1vdmltZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUV2ZW50TGlzdGVuZXIiLCJ1c2VJbnRlcnZhbCIsIkV3YWxrZXIiLCJDYW52YXNDb250ZXh0IiwiRWNhbnZhcyIsIlVzZUtleU1vdmltZW50IiwiaW5pdGlhbFBvc2l0aW9uIiwiY2FudmFzVmFsdWUiLCJjYW52YXNDb250ZXh0IiwidXNlQ29udGV4dCIsInBvc2l0aW9uU3RhdGUiLCJ1cGRhdGVQb3NpdGlvblN0YXRlIiwidXNlU3RhdGUiLCJkaXJlY3Rpb24iLCJ1cGRhdGVEaXJlY3Rpb25TdGF0ZSIsImVudW1Nb3ZpbWVudCIsIm1vdmUiLCJtb3ZpbWVudCIsInVwZGF0ZUNhbnZhcyIsIktFWSIsIm5leHRNb3ZlIiwia2V5MSIsImtleTIiLCJ4IiwieSIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hook/useKeyMoviment/UseKeyMoviment.js\n"));

/***/ })

});