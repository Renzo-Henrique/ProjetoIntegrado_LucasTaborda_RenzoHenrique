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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _calcularVariaveis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calcularVariaveis */ \"./components/calcularVariaveis.js\");\n/* harmony import */ var _hook_useKeyMoviment_UseKeyMoviment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useKeyMoviment/UseKeyMoviment */ \"./components/hook/useKeyMoviment/UseKeyMoviment.js\");\n/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas/canvas */ \"./components/canvas/canvas.js\");\n\n\n\n\n\nfunction MyKey(props) {\n    const initialPositionKey = {\n        x: props.position.x,\n        y: props.position.y\n    };\n    const variaveis = (0,_calcularVariaveis__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    let TILE_CENTER = variaveis.TILE_CENTER_EGG;\n    let KEY_SIZE = variaveis.TILE_SIZE_EGG;\n    const moviment_key = (0,_hook_useKeyMoviment_UseKeyMoviment__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(initialPositionDemon, _canvas_canvas__WEBPACK_IMPORTED_MODULE_4__.Ecanvas.DEMON);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"absolute\",\n            width: KEY_SIZE,\n            height: KEY_SIZE,\n            backgroundImage: 'url(\"assets/objects/key.png\")',\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            /*Animacoes*/ animation: \"egg-animation-moviment 1s steps(4) infinite\",\n            /*animation: DEMON-animation-stand-by 1s steps(3) infinite;*/ /*animation: DEMON-animation-hurt 1s steps(3) infinite;*/ top: +TILE_CENTER + KEY_SIZE * moviment.y,\n            left: +TILE_CENTER + KEY_SIZE * moviment.x\n        }\n    }, void 0, false, {\n        fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/key.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_c = MyKey;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyKey);\nvar _c;\n$RefreshReg$(_c, \"MyKey\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkL2tleS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDVztBQUNjO0FBQ3pCO0FBR3pDLFNBQVNLLE1BQU1DLEtBQUs7SUFDaEIsTUFBTUMscUJBQXFCO1FBQ3ZCQyxHQUFHRixNQUFNRyxRQUFRLENBQUNELENBQUM7UUFDbkJFLEdBQUdKLE1BQU1HLFFBQVEsQ0FBQ0MsQ0FBQztJQUN2QjtJQUVELE1BQU1DLFlBQVlULDhEQUFpQkE7SUFFbkMsSUFBSVUsY0FBY0QsVUFBVUUsZUFBZTtJQUUzQyxJQUFJQyxXQUFXSCxVQUFVSSxhQUFhO0lBRXRDLE1BQU1DLGVBQWViLCtFQUFjQSxDQUFDYyxzQkFBc0JiLG1EQUFPQSxDQUFDYyxLQUFLO0lBRXZFLHFCQUNLLDhEQUFDQztRQUNEQyxPQUFPO1lBQ0hYLFVBQVU7WUFDVlksT0FBT1A7WUFDUFEsUUFBUVI7WUFDUlMsaUJBQWlCO1lBQ2pCQyxrQkFBa0I7WUFDbEJDLGdCQUFnQjtZQUNoQixXQUFXLEdBQ1hDLFdBQVk7WUFDWiwyREFBMkQsR0FDM0QsdURBQXVELEdBQ3ZEQyxLQUFLLENBQUNmLGNBQWNFLFdBQWFjLFNBQVNsQixDQUFDO1lBQzNDbUIsTUFBTSxDQUFDakIsY0FBY0UsV0FBYWMsU0FBU3BCLENBQUM7UUFFaEQ7Ozs7OztBQVNSO0tBdkNTSDtBQXdDVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JvYXJkL2tleS5qcz84NzBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2FsY3VsYXJWYXJpYXZlaXMgZnJvbSAnLi4vY2FsY3VsYXJWYXJpYXZlaXMnXG5pbXBvcnQgVXNlS2V5TW92aW1lbnQgZnJvbSAnLi4vaG9vay91c2VLZXlNb3ZpbWVudC9Vc2VLZXlNb3ZpbWVudCdcbiBpbXBvcnQge0VjYW52YXN9IGZyb20gJy4uL2NhbnZhcy9jYW52YXMnXG5cblxuZnVuY3Rpb24gTXlLZXkocHJvcHMpe1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbktleSA9IHtcbiAgICAgICAgeDogcHJvcHMucG9zaXRpb24ueCxcbiAgICAgICAgeTogcHJvcHMucG9zaXRpb24ueVxuICAgIH07XG5cbiAgIGNvbnN0IHZhcmlhdmVpcyA9IGNhbGN1bGFyVmFyaWF2ZWlzKCk7XG5cbiAgIGxldCBUSUxFX0NFTlRFUiA9IHZhcmlhdmVpcy5USUxFX0NFTlRFUl9FR0c7XG5cbiAgIGxldCBLRVlfU0laRSA9IHZhcmlhdmVpcy5USUxFX1NJWkVfRUdHO1xuXG4gICBjb25zdCBtb3ZpbWVudF9rZXkgPSBVc2VLZXlNb3ZpbWVudChpbml0aWFsUG9zaXRpb25EZW1vbiwgRWNhbnZhcy5ERU1PTik7XG5cbiAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHdpZHRoOiBLRVlfU0laRSAsXG4gICAgICAgICAgICBoZWlnaHQ6IEtFWV9TSVpFICxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzc2V0cy9vYmplY3RzL2tleS5wbmdcIiknLFxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgLypBbmltYWNvZXMqL1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBgZWdnLWFuaW1hdGlvbi1tb3ZpbWVudCAxcyBzdGVwcyg0KSBpbmZpbml0ZWAsXG4gICAgICAgICAgICAvKmFuaW1hdGlvbjogREVNT04tYW5pbWF0aW9uLXN0YW5kLWJ5IDFzIHN0ZXBzKDMpIGluZmluaXRlOyovXG4gICAgICAgICAgICAvKmFuaW1hdGlvbjogREVNT04tYW5pbWF0aW9uLWh1cnQgMXMgc3RlcHMoMykgaW5maW5pdGU7Ki9cbiAgICAgICAgICAgIHRvcDogK1RJTEVfQ0VOVEVSICsgS0VZX1NJWkUgICogKG1vdmltZW50LnkpLFxuICAgICAgICAgICAgbGVmdDogK1RJTEVfQ0VOVEVSICsgS0VZX1NJWkUgICogKG1vdmltZW50LngpLFxuICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiBgc2NhbGVYKCR7bW92aW1lbnRfc2xpbWUuZGlyZWN0aW9uID09PSAnUklHSFQnID8gMSA6IC0xfSlgLFxuICAgICAgICB9fT5cbiAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gVElMRV9DRU5URVIgZGV2ZSBjZW50cmFsaXphciBvIERFTU9OIG5vIG1laW8gZGUgdW0gdGlsZVxuICAgICAgICAvLyBwb3NpdGlvblN0YXRlIHggZSB5IGZhemVtIGEgbW92aW1lbnRhw6fDo28gZGUgMSB0aWxlXG4gICAgICAgIC8vIHRyYW5zZm9ybSBlc3BlbGhhIGEgaW1hZ2VtIHBhcmEgbXVkYXIgZGUgZGlyZcOnw6NvXG4gICAgICAgIC8vIFNUWUxFIERFVkUgRklDQVIgQVFVSSwgcHJvIGphdmFzY3JpcHQgbiBwcmVjaXNhciBwZWdhciBvIElEIG5hIHF1ZXJ5XG4gICAgICAgIC8vIENvbSBpc3NvIGNvbnNlZ3VpbW9zIG1vZGlmaWNhciBvIGNzcyBubyBqYXZhc2NyaXB0IHB1cm9cbiAgICApO1xuXG59XG5leHBvcnQgZGVmYXVsdCBNeUtleTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjYWxjdWxhclZhcmlhdmVpcyIsIlVzZUtleU1vdmltZW50IiwiRWNhbnZhcyIsIk15S2V5IiwicHJvcHMiLCJpbml0aWFsUG9zaXRpb25LZXkiLCJ4IiwicG9zaXRpb24iLCJ5IiwidmFyaWF2ZWlzIiwiVElMRV9DRU5URVIiLCJUSUxFX0NFTlRFUl9FR0ciLCJLRVlfU0laRSIsIlRJTEVfU0laRV9FR0ciLCJtb3ZpbWVudF9rZXkiLCJpbml0aWFsUG9zaXRpb25EZW1vbiIsIkRFTU9OIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImFuaW1hdGlvbiIsInRvcCIsIm1vdmltZW50IiwibGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/board/key.js\n"));

/***/ })

});