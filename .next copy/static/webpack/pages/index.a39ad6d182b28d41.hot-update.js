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

/***/ "./components/hook/useKeyMoviment/UseKeyMoviment.js":
/*!**********************************************************!*\
  !*** ./components/hook/useKeyMoviment/UseKeyMoviment.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _use_it_event_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @use-it/event-listener */ \"./node_modules/@use-it/event-listener/dist/event-listener.m.js\");\n/* harmony import */ var _use_it_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @use-it/interval */ \"./node_modules/@use-it/interval/dist/index.js\");\n/* harmony import */ var _use_it_interval__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_use_it_interval__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _settings_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../settings/constants */ \"./settings/constants.ts\");\n/* harmony import */ var _canvas_canvasContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../canvas/canvasContext */ \"./components/canvas/canvasContext.js\");\n/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../canvas/canvas */ \"./components/canvas/canvas.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction UseKeyMoviment(initialPosition, canvasValue) {\n    _s();\n    const canvasContext = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_canvas_canvasContext__WEBPACK_IMPORTED_MODULE_4__.CanvasContext);\n    const [positionState, updatePositionState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(initialPosition);\n    const [direction, updateDirectionState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(\"RIGHT\");\n    //npm install --save @use-it/interval\n    const enumMoviment = {\n        0: \"LEFT\",\n        1: \"RIGHT\",\n        2: \"UP\",\n        3: \"DOWN\"\n    };\n    _use_it_interval__WEBPACK_IMPORTED_MODULE_2___default()(function move() {\n        // Verifica se a posicao atual possui valor diferente das chaves\n        const moviment = canvasContext.updateCanvas(\"nothing\", positionState, _settings_constants__WEBPACK_IMPORTED_MODULE_3__.Ewalker.KEY, direction, canvasValue);\n        if (moviment === null) {\n            console.log(\"O objeto \\xe9 nulo. Foi encontrado neste ponto do c\\xf3digo: \" + walker);\n            console.log(new Error().stack);\n        }\n        // verifica se foi obtido, se for joga a posicao para 0,0. Significando pra animação sair do mapa\n        if (moviment.nextMove.key1 && canvasValue == _canvas_canvas__WEBPACK_IMPORTED_MODULE_5__.Ecanvas.KEY1) {\n            updatePositionState({\n                x: 0,\n                y: 0\n            });\n        } else if (moviment.nextMove.key2 && canvasValue == _canvas_canvas__WEBPACK_IMPORTED_MODULE_5__.Ecanvas.KEY2) {\n            updatePositionState({\n                x: 0,\n                y: 0\n            });\n        }\n    }, 100);\n    return {\n        position: positionState,\n        direction: direction\n    };\n}\n_s(UseKeyMoviment, \"r5YtXyREKLcuPgPP4v5Z1U2o6Mk=\", false, function() {\n    return [\n        (_use_it_interval__WEBPACK_IMPORTED_MODULE_2___default())\n    ];\n});\n_c = UseKeyMoviment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UseKeyMoviment);\nvar _c;\n$RefreshReg$(_c, \"UseKeyMoviment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvb2svdXNlS2V5TW92aW1lbnQvVXNlS2V5TW92aW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUM0QjtBQUNaO0FBQ1U7QUFDSztBQUNkO0FBRTNDLFNBQVNNLGVBQWVDLGVBQWUsRUFBRUMsV0FBVzs7SUFDaEQsTUFBTUMsZ0JBQWdCVCx1REFBZ0IsQ0FBQ0ksZ0VBQWFBO0lBQ3BELE1BQU0sQ0FBQ08sZUFBZUMsb0JBQW9CLEdBQUdaLHFEQUFjLENBQUNPO0lBQzVELE1BQU0sQ0FBQ08sV0FBV0MscUJBQXFCLEdBQUdmLHFEQUFjLENBQUM7SUFHekQscUNBQXFDO0lBQ3JDLE1BQU1nQixlQUFlO1FBQ2pCLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7SUFDUDtJQUNBZCx1REFBV0EsQ0FBQyxTQUFTZTtRQUNqQixnRUFBZ0U7UUFFaEUsTUFBTUMsV0FBV1QsY0FBY1UsWUFBWSxDQUFDLFdBQVdSLGVBQWVSLHdEQUFPQSxDQUFDaUIsR0FBRyxFQUFFTixXQUFXTjtRQUM5RixJQUFJVSxhQUFhLE1BQU07WUFDbkJHLFFBQVFDLEdBQUcsQ0FBQyxrRUFBNERDO1lBQ3hFRixRQUFRQyxHQUFHLENBQUMsSUFBSUUsUUFBUUMsS0FBSztRQUMvQjtRQUNGLGlHQUFpRztRQUNqRyxJQUFJUCxTQUFTUSxRQUFRLENBQUNDLElBQUksSUFBSW5CLGVBQWVILG1EQUFPQSxDQUFDdUIsSUFBSSxFQUFDO1lBQ3REaEIsb0JBQW9CO2dCQUFDaUIsR0FBRztnQkFBR0MsR0FBRztZQUFDO1FBQ25DLE9BQ0ssSUFBSVosU0FBU1EsUUFBUSxDQUFDSyxJQUFJLElBQUl2QixlQUFlSCxtREFBT0EsQ0FBQzJCLElBQUksRUFBQztZQUMzRHBCLG9CQUFvQjtnQkFBQ2lCLEdBQUc7Z0JBQUdDLEdBQUc7WUFBQztRQUNuQztJQUVKLEdBQUc7SUFFSCxPQUFPO1FBQ0hHLFVBQVV0QjtRQUNWRyxXQUFXQTtJQUNmO0FBQ0o7R0FuQ1NSOztRQWFMSix5REFBV0E7OztLQWJOSTtBQXFDVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvb2svdXNlS2V5TW92aW1lbnQvVXNlS2V5TW92aW1lbnQuanM/YTZlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUV2ZW50TGlzdGVuZXIgZnJvbSAnQHVzZS1pdC9ldmVudC1saXN0ZW5lcic7XG5pbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnQHVzZS1pdC9pbnRlcnZhbCdcbmltcG9ydCB7RXdhbGtlcn0gZnJvbSAnLi4vLi4vLi4vc2V0dGluZ3MvY29uc3RhbnRzJztcbmltcG9ydCB7Q2FudmFzQ29udGV4dH0gZnJvbSAnLi4vLi4vY2FudmFzL2NhbnZhc0NvbnRleHQnO1xuaW1wb3J0IHtFY2FudmFzfSBmcm9tICcuLi8uLi9jYW52YXMvY2FudmFzJ1xuXG5mdW5jdGlvbiBVc2VLZXlNb3ZpbWVudChpbml0aWFsUG9zaXRpb24sIGNhbnZhc1ZhbHVlKXtcbiAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDYW52YXNDb250ZXh0KTtcbiAgICBjb25zdCBbcG9zaXRpb25TdGF0ZSwgdXBkYXRlUG9zaXRpb25TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsUG9zaXRpb24pO1xuICAgIGNvbnN0IFtkaXJlY3Rpb24sIHVwZGF0ZURpcmVjdGlvblN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKCdSSUdIVCcpO1xuICAgIFxuXG4gICAgLy9ucG0gaW5zdGFsbCAtLXNhdmUgQHVzZS1pdC9pbnRlcnZhbFxuICAgIGNvbnN0IGVudW1Nb3ZpbWVudCA9IHtcbiAgICAgICAgMDogXCJMRUZUXCIsXG4gICAgICAgIDE6IFwiUklHSFRcIixcbiAgICAgICAgMjogXCJVUFwiLFxuICAgICAgICAzOiBcIkRPV05cIixcbiAgICB9XG4gICAgdXNlSW50ZXJ2YWwoZnVuY3Rpb24gbW92ZSgpe1xuICAgICAgICAvLyBWZXJpZmljYSBzZSBhIHBvc2ljYW8gYXR1YWwgcG9zc3VpIHZhbG9yIGRpZmVyZW50ZSBkYXMgY2hhdmVzXG5cbiAgICAgICAgY29uc3QgbW92aW1lbnQgPSBjYW52YXNDb250ZXh0LnVwZGF0ZUNhbnZhcygnbm90aGluZycsIHBvc2l0aW9uU3RhdGUsIEV3YWxrZXIuS0VZLCBkaXJlY3Rpb24sIGNhbnZhc1ZhbHVlKTtcbiAgICAgICAgaWYgKG1vdmltZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk8gb2JqZXRvIMOpIG51bG8uIEZvaSBlbmNvbnRyYWRvIG5lc3RlIHBvbnRvIGRvIGPDs2RpZ286IFwiICsgd2Fsa2VyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIC8vIHZlcmlmaWNhIHNlIGZvaSBvYnRpZG8sIHNlIGZvciBqb2dhIGEgcG9zaWNhbyBwYXJhIDAsMC4gU2lnbmlmaWNhbmRvIHByYSBhbmltYcOnw6NvIHNhaXIgZG8gbWFwYVxuICAgICAgICBpZiAobW92aW1lbnQubmV4dE1vdmUua2V5MSAmJiBjYW52YXNWYWx1ZSA9PSBFY2FudmFzLktFWTEpe1xuICAgICAgICAgICAgdXBkYXRlUG9zaXRpb25TdGF0ZSh7eDogMCwgeTogMH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vdmltZW50Lm5leHRNb3ZlLmtleTIgJiYgY2FudmFzVmFsdWUgPT0gRWNhbnZhcy5LRVkyKXtcbiAgICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uU3RhdGUoe3g6IDAsIHk6IDB9KTtcbiAgICAgICAgfVxuXG4gICAgfSwgMTAwKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblN0YXRlLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZUtleU1vdmltZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUV2ZW50TGlzdGVuZXIiLCJ1c2VJbnRlcnZhbCIsIkV3YWxrZXIiLCJDYW52YXNDb250ZXh0IiwiRWNhbnZhcyIsIlVzZUtleU1vdmltZW50IiwiaW5pdGlhbFBvc2l0aW9uIiwiY2FudmFzVmFsdWUiLCJjYW52YXNDb250ZXh0IiwidXNlQ29udGV4dCIsInBvc2l0aW9uU3RhdGUiLCJ1cGRhdGVQb3NpdGlvblN0YXRlIiwidXNlU3RhdGUiLCJkaXJlY3Rpb24iLCJ1cGRhdGVEaXJlY3Rpb25TdGF0ZSIsImVudW1Nb3ZpbWVudCIsIm1vdmUiLCJtb3ZpbWVudCIsInVwZGF0ZUNhbnZhcyIsIktFWSIsImNvbnNvbGUiLCJsb2ciLCJ3YWxrZXIiLCJFcnJvciIsInN0YWNrIiwibmV4dE1vdmUiLCJrZXkxIiwiS0VZMSIsIngiLCJ5Iiwia2V5MiIsIktFWTIiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hook/useKeyMoviment/UseKeyMoviment.js\n"));

/***/ })

});