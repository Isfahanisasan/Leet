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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AiBlockTune; }\n/* harmony export */ });\nclass AiBlockTune {\n    static get isTune() {\n        return true;\n    }\n    render() {\n        this.button = document.createElement(\"div\");\n        this.button.innerHTML = \"\\n\\n            Convert to AI block \\n\\n        \\n\\n        \";\n        // this.button.style.display = 'block';\n        // this.button.style.width = '100%';\n        // this.button.style.height = '10';\n        // this.button.style.border = 'none';\n        // this.button.style.textAlign = 'center';\n        // this.button.style.cursor = 'pointer';\n        // this.button.classList.add(this.api.styles.button);\n        // this.button.style.width = '50%';\n        this.button.classList.add(\"ce-popover-item\");\n        this.button.style.fontSize = \"14px\";\n        this.button.style.fontWeight = \"bold\";\n        // make the text to be aligned left\n        this.button.style.textAlign = \"left !important\";\n        // give the same style as its siblings \n        return this.button;\n    }\n    constructor({ api }){\n        this.api = api;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FpX2Jsb2NrX3R1bmUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BO0lBS2pCLFdBQVdDLFNBQVM7UUFDaEIsT0FBTztJQUNYO0lBRUFDLFNBQVE7UUFDSixJQUFJLENBQUNDLE1BQU0sR0FBR0MsU0FBU0MsYUFBYSxDQUFDO1FBRXJDLElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxTQUFTLEdBQUk7UUFTekIsdUNBQXVDO1FBQ3ZDLG9DQUFvQztRQUNwQyxtQ0FBbUM7UUFHbkMscUNBQXFDO1FBQ3JDLDBDQUEwQztRQUMxQyx3Q0FBd0M7UUFDeEMscURBQXFEO1FBQ3JELG1DQUFtQztRQUNuQyxJQUFJLENBQUNILE1BQU0sQ0FBQ0ksU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDTCxNQUFNLENBQUNNLEtBQUssQ0FBQ0MsUUFBUSxHQUFHO1FBQzdCLElBQUksQ0FBQ1AsTUFBTSxDQUFDTSxLQUFLLENBQUNFLFVBQVUsR0FBRztRQUMvQixtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDUixNQUFNLENBQUNNLEtBQUssQ0FBQ0csU0FBUyxHQUFHO1FBRzlCLHVDQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQ1QsTUFBTTtJQUN0QjtJQXhDQVUsWUFBWSxFQUFFQyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUNBLEdBQUcsR0FBR0E7SUFDZjtBQXVDSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FpX2Jsb2NrX3R1bmUuanM/NjUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBaUJsb2NrVHVuZSB7XG4gICAgY29uc3RydWN0b3IoeyBhcGkgfSl7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgIH0gXG5cbiAgICBzdGF0aWMgZ2V0IGlzVHVuZSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGhpcy5idXR0b24uaW5uZXJIVE1MID0gYFxuXG4gICAgICAgICAgICBDb252ZXJ0IHRvIEFJIGJsb2NrIFxuXG4gICAgICAgIFxuXG4gICAgICAgIGA7XG5cblxuICAgICAgICAvLyB0aGlzLmJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgLy8gdGhpcy5idXR0b24uc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIC8vIHRoaXMuYnV0dG9uLnN0eWxlLmhlaWdodCA9ICcxMCc7XG5cblxuICAgICAgICAvLyB0aGlzLmJ1dHRvbi5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICAgIC8vIHRoaXMuYnV0dG9uLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICAvLyB0aGlzLmJ1dHRvbi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIC8vIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5hcGkuc3R5bGVzLmJ1dHRvbik7XG4gICAgICAgIC8vIHRoaXMuYnV0dG9uLnN0eWxlLndpZHRoID0gJzUwJSc7XG4gICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjZS1wb3BvdmVyLWl0ZW1cIik7XG4gICAgICAgIHRoaXMuYnV0dG9uLnN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xuICAgICAgICB0aGlzLmJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICAvLyBtYWtlIHRoZSB0ZXh0IHRvIGJlIGFsaWduZWQgbGVmdFxuICAgICAgICB0aGlzLmJ1dHRvbi5zdHlsZS50ZXh0QWxpZ24gPSAnbGVmdCAhaW1wb3J0YW50JztcblxuXG4gICAgICAgIC8vIGdpdmUgdGhlIHNhbWUgc3R5bGUgYXMgaXRzIHNpYmxpbmdzIFxuXG4gICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbjtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkFpQmxvY2tUdW5lIiwiaXNUdW5lIiwicmVuZGVyIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJjb25zdHJ1Y3RvciIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ai_block_tune.js\n"));

/***/ })

});