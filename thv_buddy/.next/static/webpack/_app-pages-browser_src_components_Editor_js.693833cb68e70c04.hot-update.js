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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AiBlockTune; }\n/* harmony export */ });\nclass AiBlockTune {\n    static get isTune() {\n        return true;\n    }\n    render() {\n        this.elem = document.createElement(\"div\");\n        this.elem.classList.add(\"ce-popover-item\");\n        this.elem.innerHTML = '<div class=\"ce-popover-item__icon ce-popover-item__icon--tool\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"2\" d=\"m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z\"></path></svg></div><div class=\"ce-popover-item__title\">Convert To AI Block</div>';\n        this.elem.addEventListener(\"click\", ()=>{\n            this.replaceBlock();\n        });\n        return this.elem;\n    }\n    replaceBlock() {\n        // get the contents of the block\n        const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();\n        const currentBlock = this.api.blocks.getBlockByIndex(currentBlockIndex);\n        console.log(currentBlock.holder.innerHTML.textContent);\n    }\n    constructor({ api }){\n        this.api = api;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FpX2Jsb2NrX3R1bmUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BO0lBS2pCLFdBQVdDLFNBQVM7UUFDaEIsT0FBTztJQUNYO0lBSUFDLFNBQVE7UUFFSixJQUFJLENBQUNDLElBQUksR0FBR0MsU0FBU0MsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQ0YsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUNKLElBQUksQ0FBQ0ssU0FBUyxHQUFHO1FBQ3RCLElBQUksQ0FBQ0wsSUFBSSxDQUFDTSxnQkFBZ0IsQ0FBQyxTQUFTO1lBQ2hDLElBQUksQ0FBQ0MsWUFBWTtRQUNyQjtRQUNBLE9BQU8sSUFBSSxDQUFDUCxJQUFJO0lBQ3BCO0lBR0FPLGVBQWU7UUFFWCxnQ0FBZ0M7UUFDaEMsTUFBTUMsb0JBQW9CLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLENBQUNDLG9CQUFvQjtRQUM5RCxNQUFNQyxlQUFlLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxNQUFNLENBQUNHLGVBQWUsQ0FBQ0w7UUFDckRNLFFBQVFDLEdBQUcsQ0FBQ0gsYUFBYUksTUFBTSxDQUFDWCxTQUFTLENBQUNZLFdBQVc7SUFPekQ7SUFsQ0FDLFlBQVksRUFBRVQsR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDQSxHQUFHLEdBQUdBO0lBQ2Y7QUFpQ0o7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9haV9ibG9ja190dW5lLmpzPzY1MDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWlCbG9ja1R1bmUge1xuICAgIGNvbnN0cnVjdG9yKHsgYXBpIH0pe1xuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICB9IFxuXG4gICAgc3RhdGljIGdldCBpc1R1bmUoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKXtcblxuICAgICAgICB0aGlzLmVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2NlLXBvcG92ZXItaXRlbScpO1xuICAgICAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJjZS1wb3BvdmVyLWl0ZW1fX2ljb24gY2UtcG9wb3Zlci1pdGVtX19pY29uLS10b29sXCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwibTE5IDkgMS4yNS0yLjc1TDIzIDVsLTIuNzUtMS4yNUwxOSAxbC0xLjI1IDIuNzVMMTUgNWwyLjc1IDEuMjV6bS03LjUuNUw5IDQgNi41IDkuNSAxIDEybDUuNSAyLjVMOSAyMGwyLjUtNS41TDE3IDEyek0xOSAxNWwtMS4yNSAyLjc1TDE1IDE5bDIuNzUgMS4yNUwxOSAyM2wxLjI1LTIuNzVMMjMgMTlsLTIuNzUtMS4yNXpcIj48L3BhdGg+PC9zdmc+PC9kaXY+PGRpdiBjbGFzcz1cImNlLXBvcG92ZXItaXRlbV9fdGl0bGVcIj5Db252ZXJ0IFRvIEFJIEJsb2NrPC9kaXY+JztcbiAgICAgICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlQmxvY2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW07XG4gICAgfVxuXG5cbiAgICByZXBsYWNlQmxvY2soKSB7XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBjb250ZW50cyBvZiB0aGUgYmxvY2tcbiAgICAgICAgY29uc3QgY3VycmVudEJsb2NrSW5kZXggPSB0aGlzLmFwaS5ibG9ja3MuZ2V0Q3VycmVudEJsb2NrSW5kZXgoKTtcbiAgICAgICAgY29uc3QgY3VycmVudEJsb2NrID0gdGhpcy5hcGkuYmxvY2tzLmdldEJsb2NrQnlJbmRleChjdXJyZW50QmxvY2tJbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRCbG9jay5ob2xkZXIuaW5uZXJIVE1MLnRleHRDb250ZW50KTtcblxuXG5cblxuXG5cbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJBaUJsb2NrVHVuZSIsImlzVHVuZSIsInJlbmRlciIsImVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVwbGFjZUJsb2NrIiwiY3VycmVudEJsb2NrSW5kZXgiLCJhcGkiLCJibG9ja3MiLCJnZXRDdXJyZW50QmxvY2tJbmRleCIsImN1cnJlbnRCbG9jayIsImdldEJsb2NrQnlJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJob2xkZXIiLCJ0ZXh0Q29udGVudCIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ai_block_tune.js\n"));

/***/ })

});