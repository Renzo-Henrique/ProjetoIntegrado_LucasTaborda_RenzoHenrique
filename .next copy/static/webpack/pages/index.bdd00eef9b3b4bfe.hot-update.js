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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _calcularVariaveis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calcularVariaveis */ \"./components/calcularVariaveis.js\");\n/* harmony import */ var _hook_useKeyMoviment_UseKeyMoviment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useKeyMoviment/UseKeyMoviment */ \"./components/hook/useKeyMoviment/UseKeyMoviment.js\");\n/* harmony import */ var _canvas_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas/canvas */ \"./components/canvas/canvas.js\");\n\n\n\n\n\nfunction MyKey(props) {\n    //Verificador de bugs\n    if (props === null) {\n        console.log(\"O objeto \\xe9 nulo. Foi encontrado neste ponto do c\\xf3digo: \" + \"keys\");\n        console.log(new Error().stack);\n    }\n    const initialPositionKey = {\n        x: props.position.x,\n        y: props.position.y\n    };\n    const key_ = props.key;\n    //console.log( 'Chaves x:'+ initialPositionKey.x + ' y:', initialPositionKey.y);\n    const variaveis = (0,_calcularVariaveis__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    let TILE_CENTER = variaveis.TILE_CENTER_EGG;\n    let KEY_SIZE = variaveis.TILE_SIZE_EGG;\n    const moviment = (0,_hook_useKeyMoviment_UseKeyMoviment__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(initialPositionKey, key_);\n    const moviment_key = moviment.positionState;\n    //Verificador de bugs\n    if (moviment.positionState === null) {\n        console.log(\"O objeto \\xe9 nulo. Foi encontrado neste ponto do c\\xf3digo: \" + \"keys\");\n        console.log(new Error().stack);\n    }\n    if (moviment_key.x == 0 && moviment_key.y == 0) {\n        moviment_key.x = -2;\n        moviment_key.y = -2;\n    }\n    console.log(\"Chaves x:\" + moviment_key.x + \" y:\", moviment_key.y);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"absolute\",\n            width: KEY_SIZE,\n            height: KEY_SIZE,\n            backgroundImage: 'url(\"assets/objects/key.png\")',\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            /*Animacoes*/ animation: \"egg-animation-moviment 1s steps(4) infinite\",\n            /*animation: DEMON-animation-stand-by 1s steps(3) infinite;*/ /*animation: DEMON-animation-hurt 1s steps(3) infinite;*/ top: +TILE_CENTER + KEY_SIZE * moviment_key.y,\n            left: +TILE_CENTER + KEY_SIZE * moviment_key.x\n        }\n    }, void 0, false, {\n        fileName: \"/mnt/d/VSCODE/PI/Trabalho/BoomBlitz/components/board/key.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_c = MyKey;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyKey);\nvar _c;\n$RefreshReg$(_c, \"MyKey\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkL2tleS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDVztBQUNjO0FBQzFCO0FBR3hDLFNBQVNLLE1BQU1DLEtBQUs7SUFFaEIscUJBQXFCO0lBQ3JCLElBQUlBLFVBQVUsTUFBTTtRQUNoQkMsUUFBUUMsR0FBRyxDQUFDLGtFQUE0RDtRQUN4RUQsUUFBUUMsR0FBRyxDQUFDLElBQUlDLFFBQVFDLEtBQUs7SUFDakM7SUFFQSxNQUFNQyxxQkFBcUI7UUFDdkJDLEdBQUdOLE1BQU1PLFFBQVEsQ0FBQ0QsQ0FBQztRQUNuQkUsR0FBR1IsTUFBTU8sUUFBUSxDQUFDQyxDQUFDO0lBQ3ZCO0lBQ0EsTUFBTUMsT0FBT1QsTUFBTVUsR0FBRztJQUV0QixnRkFBZ0Y7SUFDakYsTUFBTUMsWUFBWWYsOERBQWlCQTtJQUVuQyxJQUFJZ0IsY0FBY0QsVUFBVUUsZUFBZTtJQUUzQyxJQUFJQyxXQUFXSCxVQUFVSSxhQUFhO0lBR3RDLE1BQU1DLFdBQVduQiwrRUFBY0EsQ0FBQ1Esb0JBQW9CSTtJQUNwRCxNQUFNUSxlQUFlRCxTQUFTRSxhQUFhO0lBQzFDLHFCQUFxQjtJQUNyQixJQUFJRixTQUFTRSxhQUFhLEtBQUssTUFBTTtRQUNqQ2pCLFFBQVFDLEdBQUcsQ0FBQyxrRUFBNEQ7UUFDeEVELFFBQVFDLEdBQUcsQ0FBQyxJQUFJQyxRQUFRQyxLQUFLO0lBQ2pDO0lBR0QsSUFBR2EsYUFBYVgsQ0FBQyxJQUFJLEtBQUtXLGFBQWFULENBQUMsSUFBSSxHQUFFO1FBQ3pDUyxhQUFhWCxDQUFDLEdBQUcsQ0FBQztRQUNsQlcsYUFBYVQsQ0FBQyxHQUFHLENBQUM7SUFDdkI7SUFFQVAsUUFBUUMsR0FBRyxDQUFFLGNBQWFlLGFBQWFYLENBQUMsR0FBRyxPQUFPVyxhQUFhVCxDQUFDO0lBQ2hFLHFCQUNLLDhEQUFDVztRQUNEQyxPQUFPO1lBQ0hiLFVBQVU7WUFDVmMsT0FBT1A7WUFDUFEsUUFBUVI7WUFDUlMsaUJBQWlCO1lBQ2pCQyxrQkFBa0I7WUFDbEJDLGdCQUFnQjtZQUNoQixXQUFXLEdBQ1hDLFdBQVk7WUFDWiwyREFBMkQsR0FDM0QsdURBQXVELEdBQ3ZEQyxLQUFLLENBQUNmLGNBQWNFLFdBQWFHLGFBQWFULENBQUM7WUFDL0NvQixNQUFNLENBQUNoQixjQUFjRSxXQUFhRyxhQUFhWCxDQUFDO1FBRXBEOzs7Ozs7QUFTUjtLQTlEU1A7QUErRFQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZC9rZXkuanM/ODcwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNhbGN1bGFyVmFyaWF2ZWlzIGZyb20gJy4uL2NhbGN1bGFyVmFyaWF2ZWlzJ1xuaW1wb3J0IFVzZUtleU1vdmltZW50IGZyb20gJy4uL2hvb2svdXNlS2V5TW92aW1lbnQvVXNlS2V5TW92aW1lbnQnXG5pbXBvcnQge0VjYW52YXN9IGZyb20gJy4uL2NhbnZhcy9jYW52YXMnXG5cblxuZnVuY3Rpb24gTXlLZXkocHJvcHMpe1xuXG4gICAgLy9WZXJpZmljYWRvciBkZSBidWdzXG4gICAgaWYgKHByb3BzID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTyBvYmpldG8gw6kgbnVsby4gRm9pIGVuY29udHJhZG8gbmVzdGUgcG9udG8gZG8gY8OzZGlnbzogXCIgKyAna2V5cycpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9uS2V5ID0ge1xuICAgICAgICB4OiBwcm9wcy5wb3NpdGlvbi54LFxuICAgICAgICB5OiBwcm9wcy5wb3NpdGlvbi55LFxuICAgIH07XG4gICAgY29uc3Qga2V5XyA9IHByb3BzLmtleVxuXG4gICAgLy9jb25zb2xlLmxvZyggJ0NoYXZlcyB4OicrIGluaXRpYWxQb3NpdGlvbktleS54ICsgJyB5OicsIGluaXRpYWxQb3NpdGlvbktleS55KTtcbiAgIGNvbnN0IHZhcmlhdmVpcyA9IGNhbGN1bGFyVmFyaWF2ZWlzKCk7XG5cbiAgIGxldCBUSUxFX0NFTlRFUiA9IHZhcmlhdmVpcy5USUxFX0NFTlRFUl9FR0c7XG5cbiAgIGxldCBLRVlfU0laRSA9IHZhcmlhdmVpcy5USUxFX1NJWkVfRUdHO1xuICAgXG4gICAgXG4gICBjb25zdCBtb3ZpbWVudCA9IFVzZUtleU1vdmltZW50KGluaXRpYWxQb3NpdGlvbktleSwga2V5Xyk7XG4gICBjb25zdCBtb3ZpbWVudF9rZXkgPSBtb3ZpbWVudC5wb3NpdGlvblN0YXRlO1xuICAgIC8vVmVyaWZpY2Fkb3IgZGUgYnVnc1xuICAgIGlmIChtb3ZpbWVudC5wb3NpdGlvblN0YXRlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTyBvYmpldG8gw6kgbnVsby4gRm9pIGVuY29udHJhZG8gbmVzdGUgcG9udG8gZG8gY8OzZGlnbzogXCIgKyAna2V5cycpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG5cbiAgIGlmKG1vdmltZW50X2tleS54ID09IDAgJiYgbW92aW1lbnRfa2V5LnkgPT0gMCl7XG4gICAgICAgIG1vdmltZW50X2tleS54ID0gLTI7XG4gICAgICAgIG1vdmltZW50X2tleS55ID0gLTI7XG4gICB9XG5cbiAgIGNvbnNvbGUubG9nKCAnQ2hhdmVzIHg6JysgbW92aW1lbnRfa2V5LnggKyAnIHk6JywgbW92aW1lbnRfa2V5LnkpO1xuICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgd2lkdGg6IEtFWV9TSVpFICxcbiAgICAgICAgICAgIGhlaWdodDogS0VZX1NJWkUgLFxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiYXNzZXRzL29iamVjdHMva2V5LnBuZ1wiKScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICAvKkFuaW1hY29lcyovXG4gICAgICAgICAgICBhbmltYXRpb246IGBlZ2ctYW5pbWF0aW9uLW1vdmltZW50IDFzIHN0ZXBzKDQpIGluZmluaXRlYCxcbiAgICAgICAgICAgIC8qYW5pbWF0aW9uOiBERU1PTi1hbmltYXRpb24tc3RhbmQtYnkgMXMgc3RlcHMoMykgaW5maW5pdGU7Ki9cbiAgICAgICAgICAgIC8qYW5pbWF0aW9uOiBERU1PTi1hbmltYXRpb24taHVydCAxcyBzdGVwcygzKSBpbmZpbml0ZTsqL1xuICAgICAgICAgICAgdG9wOiArVElMRV9DRU5URVIgKyBLRVlfU0laRSAgKiAobW92aW1lbnRfa2V5LnkpLFxuICAgICAgICAgICAgbGVmdDogK1RJTEVfQ0VOVEVSICsgS0VZX1NJWkUgICogKG1vdmltZW50X2tleS54KSxcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogYHNjYWxlWCgke21vdmltZW50X3NsaW1lLmRpcmVjdGlvbiA9PT0gJ1JJR0hUJyA/IDEgOiAtMX0pYCxcbiAgICAgICAgfX0+XG4gICAgICAgPC9kaXY+XG4gICAgICAgIC8vIFRJTEVfQ0VOVEVSIGRldmUgY2VudHJhbGl6YXIgbyBERU1PTiBubyBtZWlvIGRlIHVtIHRpbGVcbiAgICAgICAgLy8gcG9zaXRpb25TdGF0ZSB4IGUgeSBmYXplbSBhIG1vdmltZW50YcOnw6NvIGRlIDEgdGlsZVxuICAgICAgICAvLyB0cmFuc2Zvcm0gZXNwZWxoYSBhIGltYWdlbSBwYXJhIG11ZGFyIGRlIGRpcmXDp8Ojb1xuICAgICAgICAvLyBTVFlMRSBERVZFIEZJQ0FSIEFRVUksIHBybyBqYXZhc2NyaXB0IG4gcHJlY2lzYXIgcGVnYXIgbyBJRCBuYSBxdWVyeVxuICAgICAgICAvLyBDb20gaXNzbyBjb25zZWd1aW1vcyBtb2RpZmljYXIgbyBjc3Mgbm8gamF2YXNjcmlwdCBwdXJvXG4gICAgKTtcblxufVxuZXhwb3J0IGRlZmF1bHQgTXlLZXk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiY2FsY3VsYXJWYXJpYXZlaXMiLCJVc2VLZXlNb3ZpbWVudCIsIkVjYW52YXMiLCJNeUtleSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwic3RhY2siLCJpbml0aWFsUG9zaXRpb25LZXkiLCJ4IiwicG9zaXRpb24iLCJ5Iiwia2V5XyIsImtleSIsInZhcmlhdmVpcyIsIlRJTEVfQ0VOVEVSIiwiVElMRV9DRU5URVJfRUdHIiwiS0VZX1NJWkUiLCJUSUxFX1NJWkVfRUdHIiwibW92aW1lbnQiLCJtb3ZpbWVudF9rZXkiLCJwb3NpdGlvblN0YXRlIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImFuaW1hdGlvbiIsInRvcCIsImxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/board/key.js\n"));

/***/ })

});