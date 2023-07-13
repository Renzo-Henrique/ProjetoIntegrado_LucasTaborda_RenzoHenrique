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

/***/ "./components/hook/useDinoMoviment/UseDinoMoviment.js":
/*!************************************************************!*\
  !*** ./components/hook/useDinoMoviment/UseDinoMoviment.js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _use_it_event_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @use-it/event-listener */ \"./node_modules/@use-it/event-listener/dist/event-listener.m.js\");\n/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../canvas/canvas */ \"./components/canvas/canvas.js\");\n/* harmony import */ var _settings_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../settings/constants */ \"./settings/constants.ts\");\n/* harmony import */ var _canvas_canvasContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../canvas/canvasContext */ \"./components/canvas/canvasContext.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction UseDinoMoviment(initialPosition) {\n    _s();\n    const canvasContext = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_canvas_canvasContext__WEBPACK_IMPORTED_MODULE_4__.CanvasContext);\n    const [positionState, updatePositionState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(initialPosition);\n    const [direction, updateDirectionState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(\"RIGHT\");\n    const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n    const handleEvent = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((event)=>{\n        const moviment = canvasContext.updateCanvas(event.key, positionState, _settings_constants__WEBPACK_IMPORTED_MODULE_3__.Ewalker.DINO, direction, _canvas_canvas__WEBPACK_IMPORTED_MODULE_2__.Ecanvas.DINO);\n        if (moviment.nextMove.valid) {\n            updatePositionState(moviment.nextPosition);\n            updateDirectionState(moviment.direction_img);\n        }\n        if (moviment.nextMove.dead) {\n            alert(\"Voc\\xea morreu\");\n            window.location.reload(true);\n        }\n    }, [\n        canvasContext,\n        positionState,\n        direction\n    ]);\n    const handleKeyDown = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((event)=>{\n        if (!timeoutRef.current) {\n            handleEvent(event);\n            timeoutRef.current = setTimeout(()=>{\n                timeoutRef.current = null;\n            }, 250);\n        }\n    }, [\n        handleEvent\n    ]);\n    (0,_use_it_event_listener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"keydown\", handleKeyDown);\n    return {\n        position: positionState,\n        direction: direction\n    };\n}\n_s(UseDinoMoviment, \"0LIXR7KBTwdvXTw6us2wRFeOzUg=\", false, function() {\n    return [\n        _use_it_event_listener__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = UseDinoMoviment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UseDinoMoviment);\nvar _c;\n$RefreshReg$(_c, \"UseDinoMoviment\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvb2svdXNlRGlub01vdmltZW50L1VzZURpbm9Nb3ZpbWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUM0QjtBQUM0QjtBQUMvQjtBQUNLO0FBRXhELFNBQVNPLGdCQUFnQkMsZUFBZTs7SUFDcEMsTUFBTUMsZ0JBQWdCVCx1REFBZ0IsQ0FBQ00sZ0VBQWFBO0lBQ3BELE1BQU0sQ0FBQ0ssZUFBZUMsb0JBQW9CLEdBQUdaLHFEQUFjLENBQUNRO0lBQzVELE1BQU0sQ0FBQ00sV0FBV0MscUJBQXFCLEdBQUdmLHFEQUFjLENBQUM7SUFDekQsTUFBTWdCLGFBQWFoQixtREFBWSxDQUFDO0lBRWhDLE1BQU1rQixjQUFjbEIsd0RBQWlCLENBQ25DLENBQUNvQjtRQUNDLE1BQU1DLFdBQVdaLGNBQWNhLFlBQVksQ0FBQ0YsTUFBTUcsR0FBRyxFQUFFWixlQUFlTix3REFBT0EsQ0FBQ21CLElBQUksRUFBRVYsV0FBV1YsbURBQU9BLENBQUNvQixJQUFJO1FBRTNHLElBQUlILFNBQVNJLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFO1lBQzNCZCxvQkFBb0JTLFNBQVNNLFlBQVk7WUFDekNaLHFCQUFxQk0sU0FBU08sYUFBYTtRQUM3QztRQUVBLElBQUlQLFNBQVNJLFFBQVEsQ0FBQ0ksSUFBSSxFQUFFO1lBQzFCQyxNQUFNO1lBQ05DLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3pCO0lBQ0YsR0FDQTtRQUFDeEI7UUFBZUU7UUFBZUc7S0FBVTtJQUczQyxNQUFNb0IsZ0JBQWdCbEMsd0RBQWlCLENBQ3JDLENBQUNvQjtRQUNDLElBQUksQ0FBQ0osV0FBV21CLE9BQU8sRUFBRTtZQUN2QmpCLFlBQVlFO1lBQ1pKLFdBQVdtQixPQUFPLEdBQUdDLFdBQVc7Z0JBQzlCcEIsV0FBV21CLE9BQU8sR0FBRztZQUN2QixHQUFHO1FBQ0w7SUFDRixHQUNBO1FBQUNqQjtLQUFZO0lBR2ZqQixrRUFBZ0JBLENBQUMsV0FBV2lDO0lBRTVCLE9BQU87UUFDTEcsVUFBVTFCO1FBQ1ZHLFdBQVdBO0lBQ2I7QUFDRjtHQXpDT1A7O1FBbUNMTiw4REFBZ0JBOzs7S0FuQ1hNO0FBMkNQLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9vay91c2VEaW5vTW92aW1lbnQvVXNlRGlub01vdmltZW50LmpzPzExODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFdmVudExpc3RlbmVyIGZyb20gJ0B1c2UtaXQvZXZlbnQtbGlzdGVuZXInO1xuaW1wb3J0IHsgQ2hlY2tWYWxpZE1vdmltZW50LCBoYW5kbGVNb3ZpbWVudCwgRWNhbnZhcyB9IGZyb20gJy4uLy4uL2NhbnZhcy9jYW52YXMnO1xuaW1wb3J0IHtFd2Fsa2VyfSBmcm9tICcuLi8uLi8uLi9zZXR0aW5ncy9jb25zdGFudHMnXG5pbXBvcnQge0NhbnZhc0NvbnRleHR9IGZyb20gJy4uLy4uL2NhbnZhcy9jYW52YXNDb250ZXh0J1xuXG5mdW5jdGlvbiBVc2VEaW5vTW92aW1lbnQoaW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgY29uc3QgY2FudmFzQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ2FudmFzQ29udGV4dCk7XG4gICAgY29uc3QgW3Bvc2l0aW9uU3RhdGUsIHVwZGF0ZVBvc2l0aW9uU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFBvc2l0aW9uKTtcbiAgICBjb25zdCBbZGlyZWN0aW9uLCB1cGRhdGVEaXJlY3Rpb25TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSgnUklHSFQnKTtcbiAgICBjb25zdCB0aW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBcbiAgICBjb25zdCBoYW5kbGVFdmVudCA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG1vdmltZW50ID0gY2FudmFzQ29udGV4dC51cGRhdGVDYW52YXMoZXZlbnQua2V5LCBwb3NpdGlvblN0YXRlLCBFd2Fsa2VyLkRJTk8sIGRpcmVjdGlvbiwgRWNhbnZhcy5ESU5PKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChtb3ZpbWVudC5uZXh0TW92ZS52YWxpZCkge1xuICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uU3RhdGUobW92aW1lbnQubmV4dFBvc2l0aW9uKTtcbiAgICAgICAgICB1cGRhdGVEaXJlY3Rpb25TdGF0ZShtb3ZpbWVudC5kaXJlY3Rpb25faW1nKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKG1vdmltZW50Lm5leHRNb3ZlLmRlYWQpIHtcbiAgICAgICAgICBhbGVydCgnVm9jw6ogbW9ycmV1Jyk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtjYW52YXNDb250ZXh0LCBwb3NpdGlvblN0YXRlLCBkaXJlY3Rpb25dXG4gICAgKTtcbiAgXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGltZW91dFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2hhbmRsZUV2ZW50XVxuICAgICk7XG4gIFxuICAgIHVzZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblN0YXRlLFxuICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgfTtcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgVXNlRGlub01vdmltZW50O1xuICBcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRXZlbnRMaXN0ZW5lciIsIkNoZWNrVmFsaWRNb3ZpbWVudCIsImhhbmRsZU1vdmltZW50IiwiRWNhbnZhcyIsIkV3YWxrZXIiLCJDYW52YXNDb250ZXh0IiwiVXNlRGlub01vdmltZW50IiwiaW5pdGlhbFBvc2l0aW9uIiwiY2FudmFzQ29udGV4dCIsInVzZUNvbnRleHQiLCJwb3NpdGlvblN0YXRlIiwidXBkYXRlUG9zaXRpb25TdGF0ZSIsInVzZVN0YXRlIiwiZGlyZWN0aW9uIiwidXBkYXRlRGlyZWN0aW9uU3RhdGUiLCJ0aW1lb3V0UmVmIiwidXNlUmVmIiwiaGFuZGxlRXZlbnQiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwibW92aW1lbnQiLCJ1cGRhdGVDYW52YXMiLCJrZXkiLCJESU5PIiwibmV4dE1vdmUiLCJ2YWxpZCIsIm5leHRQb3NpdGlvbiIsImRpcmVjdGlvbl9pbWciLCJkZWFkIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUtleURvd24iLCJjdXJyZW50Iiwic2V0VGltZW91dCIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hook/useDinoMoviment/UseDinoMoviment.js\n"));

/***/ })

});