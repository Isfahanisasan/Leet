"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_components_Editor_js",{

/***/ "(app-pages-browser)/./src/components/ai_block_tune.js":
/*!*****************************************!*\
  !*** ./src/components/ai_block_tune.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AiBlockTune; }\n/* harmony export */ });\nclass AiBlockTune {\n    static get isTune() {\n        return true;\n    }\n    render() {\n        this.button = document.createElement(\"button\");\n        this.button.type = \"button\";\n        this.button.innerHTML = '\\n            <svg>\\n\\n              <path class=\"fill\" d=\"m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z\"/>\\n            </svg> \\n            <span>\\n            Convert to AI Block\\n            </span>\\n        ';\n        // this.button.style.display = 'block';\n        // this.button.style.width = '100%';\n        // this.button.style.height = '10';\n        // this.button.style.border = 'none';\n        // this.button.style.textAlign = 'center';\n        // this.button.style.cursor = 'pointer';\n        // this.button.classList.add(this.api.styles.button);\n        // this.button.style.width = '50%';\n        // give the same style as its siblings \n        return this.button;\n    }\n    constructor({ api }){\n        this.api = api;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FpX2Jsb2NrX3R1bmUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BO0lBS2pCLFdBQVdDLFNBQVM7UUFDaEIsT0FBTztJQUNYO0lBRUFDLFNBQVE7UUFDSixJQUFJLENBQUNDLE1BQU0sR0FBR0MsU0FBU0MsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxJQUFJLEdBQUc7UUFDbkIsSUFBSSxDQUFDSCxNQUFNLENBQUNJLFNBQVMsR0FBSTtRQVd6Qix1Q0FBdUM7UUFDdkMsb0NBQW9DO1FBQ3BDLG1DQUFtQztRQUduQyxxQ0FBcUM7UUFDckMsMENBQTBDO1FBQzFDLHdDQUF3QztRQUN4QyxxREFBcUQ7UUFDckQsbUNBQW1DO1FBRW5DLHVDQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQ0osTUFBTTtJQUN0QjtJQXBDQUssWUFBWSxFQUFFQyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUNBLEdBQUcsR0FBR0E7SUFDZjtBQW1DSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FpX2Jsb2NrX3R1bmUuanM/NjUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBaUJsb2NrVHVuZSB7XG4gICAgY29uc3RydWN0b3IoeyBhcGkgfSl7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgIH0gXG5cbiAgICBzdGF0aWMgZ2V0IGlzVHVuZSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgdGhpcy5idXR0b24uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHN2Zz5cblxuICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImZpbGxcIiBkPVwibTE5IDkgMS4yNS0yLjc1TDIzIDVsLTIuNzUtMS4yNUwxOSAxbC0xLjI1IDIuNzVMMTUgNWwyLjc1IDEuMjV6bS03LjUuNUw5IDQgNi41IDkuNSAxIDEybDUuNSAyLjVMOSAyMGwyLjUtNS41TDE3IDEyek0xOSAxNWwtMS4yNSAyLjc1TDE1IDE5bDIuNzUgMS4yNUwxOSAyM2wxLjI1LTIuNzVMMjMgMTlsLTIuNzUtMS4yNXpcIi8+XG4gICAgICAgICAgICA8L3N2Zz4gXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIENvbnZlcnQgdG8gQUkgQmxvY2tcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgYDtcblxuXG4gICAgICAgIC8vIHRoaXMuYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAvLyB0aGlzLmJ1dHRvbi5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgLy8gdGhpcy5idXR0b24uc3R5bGUuaGVpZ2h0ID0gJzEwJztcblxuXG4gICAgICAgIC8vIHRoaXMuYnV0dG9uLnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICAgICAgLy8gdGhpcy5idXR0b24uc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIC8vIHRoaXMuYnV0dG9uLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgLy8gdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLmFwaS5zdHlsZXMuYnV0dG9uKTtcbiAgICAgICAgLy8gdGhpcy5idXR0b24uc3R5bGUud2lkdGggPSAnNTAlJztcblxuICAgICAgICAvLyBnaXZlIHRoZSBzYW1lIHN0eWxlIGFzIGl0cyBzaWJsaW5ncyBcblxuICAgICAgICByZXR1cm4gdGhpcy5idXR0b247XG4gICAgfVxufSJdLCJuYW1lcyI6WyJBaUJsb2NrVHVuZSIsImlzVHVuZSIsInJlbmRlciIsImJ1dHRvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJpbm5lckhUTUwiLCJjb25zdHJ1Y3RvciIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ai_block_tune.js\n"));

/***/ })

});