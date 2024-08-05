"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/editorjs-html";
exports.ids = ["vendor-chunks/editorjs-html"];
exports.modules = {

/***/ "(ssr)/./node_modules/editorjs-html/build/edjsHTML.node.js":
/*!***********************************************************!*\
  !*** ./node_modules/editorjs-html/build/edjsHTML.node.js ***!
  \***********************************************************/
/***/ ((module) => {

eval("\n\nvar transforms = {\n  delimiter: () => {\n    return `<br/>`;\n  },\n  header: data => {\n    return `<h${data.level}> ${data.text} </h${data.level}>`;\n  },\n  paragraph: data => {\n    return `<p> ${data.text} </p>`;\n  },\n  list: data => {\n    let style = data.style === 'unordered' ? 'ul' : 'ol';\n    let list = data.items.map(i => `<li> ${i} </li>`).reduce((a, c) => a + c, '');\n    return `<${style}> ${list} </${style}`;\n  },\n  image: data => {\n    let caption = data.caption ? data.caption : 'Image';\n    return `<img src=\"${data.file.url}\" alt=\"${caption}\"`;\n  }\n};\n\nvar app = ((plugins = {}) => {\n  Object.assign(transforms, plugins);\n  return {\n    parse: ({\n      blocks\n    }) => {\n      return blocks.map(b => transforms[b.type](b.data));\n    },\n    parseBlock: block => {\n      return transforms[block.type](block.data);\n    }\n  };\n});\n\nmodule.exports = app;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZWRpdG9yanMtaHRtbC9idWlsZC9lZGpzSFRNTC5ub2RlLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGdCQUFnQixXQUFXLElBQUksV0FBVyxLQUFLLFdBQVc7QUFDMUQsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLFdBQVc7QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQSwyQ0FBMkMsR0FBRztBQUM5QyxlQUFlLE1BQU0sSUFBSSxNQUFNLElBQUksTUFBTTtBQUN6QyxHQUFHO0FBQ0g7QUFDQTtBQUNBLHdCQUF3QixjQUFjLFNBQVMsUUFBUTtBQUN2RDtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvZWRpdG9yanMtaHRtbC9idWlsZC9lZGpzSFRNTC5ub2RlLmpzP2JjNjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHJhbnNmb3JtcyA9IHtcbiAgZGVsaW1pdGVyOiAoKSA9PiB7XG4gICAgcmV0dXJuIGA8YnIvPmA7XG4gIH0sXG4gIGhlYWRlcjogZGF0YSA9PiB7XG4gICAgcmV0dXJuIGA8aCR7ZGF0YS5sZXZlbH0+ICR7ZGF0YS50ZXh0fSA8L2gke2RhdGEubGV2ZWx9PmA7XG4gIH0sXG4gIHBhcmFncmFwaDogZGF0YSA9PiB7XG4gICAgcmV0dXJuIGA8cD4gJHtkYXRhLnRleHR9IDwvcD5gO1xuICB9LFxuICBsaXN0OiBkYXRhID0+IHtcbiAgICBsZXQgc3R5bGUgPSBkYXRhLnN0eWxlID09PSAndW5vcmRlcmVkJyA/ICd1bCcgOiAnb2wnO1xuICAgIGxldCBsaXN0ID0gZGF0YS5pdGVtcy5tYXAoaSA9PiBgPGxpPiAke2l9IDwvbGk+YCkucmVkdWNlKChhLCBjKSA9PiBhICsgYywgJycpO1xuICAgIHJldHVybiBgPCR7c3R5bGV9PiAke2xpc3R9IDwvJHtzdHlsZX1gO1xuICB9LFxuICBpbWFnZTogZGF0YSA9PiB7XG4gICAgbGV0IGNhcHRpb24gPSBkYXRhLmNhcHRpb24gPyBkYXRhLmNhcHRpb24gOiAnSW1hZ2UnO1xuICAgIHJldHVybiBgPGltZyBzcmM9XCIke2RhdGEuZmlsZS51cmx9XCIgYWx0PVwiJHtjYXB0aW9ufVwiYDtcbiAgfVxufTtcblxudmFyIGFwcCA9ICgocGx1Z2lucyA9IHt9KSA9PiB7XG4gIE9iamVjdC5hc3NpZ24odHJhbnNmb3JtcywgcGx1Z2lucyk7XG4gIHJldHVybiB7XG4gICAgcGFyc2U6ICh7XG4gICAgICBibG9ja3NcbiAgICB9KSA9PiB7XG4gICAgICByZXR1cm4gYmxvY2tzLm1hcChiID0+IHRyYW5zZm9ybXNbYi50eXBlXShiLmRhdGEpKTtcbiAgICB9LFxuICAgIHBhcnNlQmxvY2s6IGJsb2NrID0+IHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm1zW2Jsb2NrLnR5cGVdKGJsb2NrLmRhdGEpO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/editorjs-html/build/edjsHTML.node.js\n");

/***/ })

};
;