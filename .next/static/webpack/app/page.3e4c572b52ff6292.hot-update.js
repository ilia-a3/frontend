"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/API/APIRequest.ts":
/*!*******************************!*\
  !*** ./app/API/APIRequest.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getArticleOfType: function() { return /* binding */ getArticleOfType; }\n/* harmony export */ });\n// TEMPORARY\nconst articles = [\n    {\n        id: 0,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja1\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"popular-destinations\"\n    },\n    {\n        id: 1,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja2\",\n        category: \"popular-destinations\"\n    },\n    {\n        id: 2,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja3\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"popular-destinations\"\n    },\n    {\n        id: 3,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja4\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"popular-destinations\"\n    },\n    {\n        id: 4,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja5\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"popular-destinations\"\n    },\n    {\n        id: 5,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja1\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"attractions\"\n    },\n    {\n        id: 6,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja2\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"attractions\"\n    },\n    {\n        id: 7,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja3\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"attractions\"\n    },\n    {\n        id: 8,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja4\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"attractions\"\n    },\n    {\n        id: 9,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja5\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"attractions\"\n    },\n    {\n        id: 10,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja1\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"things-to-do\"\n    },\n    {\n        id: 11,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja2\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"things-to-do\"\n    },\n    {\n        id: 12,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja3\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"things-to-do\"\n    },\n    {\n        id: 13,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja4\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"things-to-do\"\n    },\n    {\n        id: 14,\n        imgUrl: \"images/toraja-cover.jpg\",\n        title: \"Toraja5\",\n        paragraphs: [\n            \"lorem impsum\",\n            \"lorem impsum\"\n        ],\n        category: \"things-to-do\"\n    }\n];\nasync function getArticleOfType(type) {\n    console.log(\"j\");\n    return articles.filter((v)=>type == v.category);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL0FQSS9BUElSZXF1ZXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxZQUFZO0FBRVosTUFBTUEsV0FLQTtJQUNKO1FBQ0VDLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFlBQVk7WUFBQztZQUFnQjtTQUFlO1FBQzVDQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztRQUNQRSxVQUFVO0lBQ1o7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxZQUFZO1lBQUM7WUFBZ0I7U0FBZTtRQUM1Q0MsVUFBVTtJQUNaO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsWUFBWTtZQUFDO1lBQWdCO1NBQWU7UUFDNUNDLFVBQVU7SUFDWjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFlBQVk7WUFBQztZQUFnQjtTQUFlO1FBQzVDQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxZQUFZO1lBQUM7WUFBZ0I7U0FBZTtRQUM1Q0MsVUFBVTtJQUNaO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsWUFBWTtZQUFDO1lBQWdCO1NBQWU7UUFDNUNDLFVBQVU7SUFDWjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFlBQVk7WUFBQztZQUFnQjtTQUFlO1FBQzVDQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxZQUFZO1lBQUM7WUFBZ0I7U0FBZTtRQUM1Q0MsVUFBVTtJQUNaO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsWUFBWTtZQUFDO1lBQWdCO1NBQWU7UUFDNUNDLFVBQVU7SUFDWjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFlBQVk7WUFBQztZQUFnQjtTQUFlO1FBQzVDQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxZQUFZO1lBQUM7WUFBZ0I7U0FBZTtRQUM1Q0MsVUFBVTtJQUNaO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsWUFBWTtZQUFDO1lBQWdCO1NBQWU7UUFDNUNDLFVBQVU7SUFDWjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFlBQVk7WUFBQztZQUFnQjtTQUFlO1FBQzVDQyxVQUFVO0lBQ1o7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxZQUFZO1lBQUM7WUFBZ0I7U0FBZTtRQUM1Q0MsVUFBVTtJQUNaO0NBQ0Q7QUFFTSxlQUFlQyxpQkFBaUJDLElBQVk7SUFDakRDLFFBQVFDLElBQUk7SUFDWixPQUFPVCxTQUFTVSxPQUFPLENBQUNDLElBQU1KLFFBQVFJLEVBQUVOO0FBQzFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9BUEkvQVBJUmVxdWVzdC50cz9mMWRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRFTVBPUkFSWVxyXG5cclxuY29uc3QgYXJ0aWNsZXM6IHtcclxuICBpbWdVcmw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgY2F0ZWdvcnk6IHN0cmluZztcclxufVtdID0gW1xyXG4gIHtcclxuICAgIGlkOiAwLFxyXG4gICAgaW1nVXJsOiBcImltYWdlcy90b3JhamEtY292ZXIuanBnXCIsXHJcbiAgICB0aXRsZTogXCJUb3JhamExXCIsXHJcbiAgICBwYXJhZ3JhcGhzOiBbXCJsb3JlbSBpbXBzdW1cIiwgXCJsb3JlbSBpbXBzdW1cIl0sXHJcbiAgICBjYXRlZ29yeTogXCJwb3B1bGFyLWRlc3RpbmF0aW9uc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdVcmw6IFwiaW1hZ2VzL3RvcmFqYS1jb3Zlci5qcGdcIixcclxuICAgIHRpdGxlOiBcIlRvcmFqYTJcIixcclxuICAgIGNhdGVnb3J5OiBcInBvcHVsYXItZGVzdGluYXRpb25zXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltZ1VybDogXCJpbWFnZXMvdG9yYWphLWNvdmVyLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiVG9yYWphM1wiLFxyXG4gICAgcGFyYWdyYXBoczogW1wibG9yZW0gaW1wc3VtXCIsIFwibG9yZW0gaW1wc3VtXCJdLFxyXG4gICAgY2F0ZWdvcnk6IFwicG9wdWxhci1kZXN0aW5hdGlvbnNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1nVXJsOiBcImltYWdlcy90b3JhamEtY292ZXIuanBnXCIsXHJcbiAgICB0aXRsZTogXCJUb3JhamE0XCIsXHJcbiAgICBwYXJhZ3JhcGhzOiBbXCJsb3JlbSBpbXBzdW1cIiwgXCJsb3JlbSBpbXBzdW1cIl0sXHJcbiAgICBjYXRlZ29yeTogXCJwb3B1bGFyLWRlc3RpbmF0aW9uc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWdVcmw6IFwiaW1hZ2VzL3RvcmFqYS1jb3Zlci5qcGdcIixcclxuICAgIHRpdGxlOiBcIlRvcmFqYTVcIixcclxuICAgIHBhcmFncmFwaHM6IFtcImxvcmVtIGltcHN1bVwiLCBcImxvcmVtIGltcHN1bVwiXSxcclxuICAgIGNhdGVnb3J5OiBcInBvcHVsYXItZGVzdGluYXRpb25zXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGltZ1VybDogXCJpbWFnZXMvdG9yYWphLWNvdmVyLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiVG9yYWphMVwiLFxyXG4gICAgcGFyYWdyYXBoczogW1wibG9yZW0gaW1wc3VtXCIsIFwibG9yZW0gaW1wc3VtXCJdLFxyXG4gICAgY2F0ZWdvcnk6IFwiYXR0cmFjdGlvbnNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgaW1nVXJsOiBcImltYWdlcy90b3JhamEtY292ZXIuanBnXCIsXHJcbiAgICB0aXRsZTogXCJUb3JhamEyXCIsXHJcbiAgICBwYXJhZ3JhcGhzOiBbXCJsb3JlbSBpbXBzdW1cIiwgXCJsb3JlbSBpbXBzdW1cIl0sXHJcbiAgICBjYXRlZ29yeTogXCJhdHRyYWN0aW9uc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDcsXHJcbiAgICBpbWdVcmw6IFwiaW1hZ2VzL3RvcmFqYS1jb3Zlci5qcGdcIixcclxuICAgIHRpdGxlOiBcIlRvcmFqYTNcIixcclxuICAgIHBhcmFncmFwaHM6IFtcImxvcmVtIGltcHN1bVwiLCBcImxvcmVtIGltcHN1bVwiXSxcclxuICAgIGNhdGVnb3J5OiBcImF0dHJhY3Rpb25zXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOCxcclxuICAgIGltZ1VybDogXCJpbWFnZXMvdG9yYWphLWNvdmVyLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiVG9yYWphNFwiLFxyXG4gICAgcGFyYWdyYXBoczogW1wibG9yZW0gaW1wc3VtXCIsIFwibG9yZW0gaW1wc3VtXCJdLFxyXG4gICAgY2F0ZWdvcnk6IFwiYXR0cmFjdGlvbnNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA5LFxyXG4gICAgaW1nVXJsOiBcImltYWdlcy90b3JhamEtY292ZXIuanBnXCIsXHJcbiAgICB0aXRsZTogXCJUb3JhamE1XCIsXHJcbiAgICBwYXJhZ3JhcGhzOiBbXCJsb3JlbSBpbXBzdW1cIiwgXCJsb3JlbSBpbXBzdW1cIl0sXHJcbiAgICBjYXRlZ29yeTogXCJhdHRyYWN0aW9uc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEwLFxyXG4gICAgaW1nVXJsOiBcImltYWdlcy90b3JhamEtY292ZXIuanBnXCIsXHJcbiAgICB0aXRsZTogXCJUb3JhamExXCIsXHJcbiAgICBwYXJhZ3JhcGhzOiBbXCJsb3JlbSBpbXBzdW1cIiwgXCJsb3JlbSBpbXBzdW1cIl0sXHJcbiAgICBjYXRlZ29yeTogXCJ0aGluZ3MtdG8tZG9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMSxcclxuICAgIGltZ1VybDogXCJpbWFnZXMvdG9yYWphLWNvdmVyLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiVG9yYWphMlwiLFxyXG4gICAgcGFyYWdyYXBoczogW1wibG9yZW0gaW1wc3VtXCIsIFwibG9yZW0gaW1wc3VtXCJdLFxyXG4gICAgY2F0ZWdvcnk6IFwidGhpbmdzLXRvLWRvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTIsXHJcbiAgICBpbWdVcmw6IFwiaW1hZ2VzL3RvcmFqYS1jb3Zlci5qcGdcIixcclxuICAgIHRpdGxlOiBcIlRvcmFqYTNcIixcclxuICAgIHBhcmFncmFwaHM6IFtcImxvcmVtIGltcHN1bVwiLCBcImxvcmVtIGltcHN1bVwiXSxcclxuICAgIGNhdGVnb3J5OiBcInRoaW5ncy10by1kb1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEzLFxyXG4gICAgaW1nVXJsOiBcImltYWdlcy90b3JhamEtY292ZXIuanBnXCIsXHJcbiAgICB0aXRsZTogXCJUb3JhamE0XCIsXHJcbiAgICBwYXJhZ3JhcGhzOiBbXCJsb3JlbSBpbXBzdW1cIiwgXCJsb3JlbSBpbXBzdW1cIl0sXHJcbiAgICBjYXRlZ29yeTogXCJ0aGluZ3MtdG8tZG9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxNCxcclxuICAgIGltZ1VybDogXCJpbWFnZXMvdG9yYWphLWNvdmVyLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiVG9yYWphNVwiLFxyXG4gICAgcGFyYWdyYXBoczogW1wibG9yZW0gaW1wc3VtXCIsIFwibG9yZW0gaW1wc3VtXCJdLFxyXG4gICAgY2F0ZWdvcnk6IFwidGhpbmdzLXRvLWRvXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcnRpY2xlT2ZUeXBlKHR5cGU6IHN0cmluZykge1xyXG4gIGNvbnNvbGUubG9nKFwialwiKTtcclxuICByZXR1cm4gYXJ0aWNsZXMuZmlsdGVyKCh2KSA9PiB0eXBlID09IHYuY2F0ZWdvcnkpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJhcnRpY2xlcyIsImlkIiwiaW1nVXJsIiwidGl0bGUiLCJwYXJhZ3JhcGhzIiwiY2F0ZWdvcnkiLCJnZXRBcnRpY2xlT2ZUeXBlIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJ2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/API/APIRequest.ts\n"));

/***/ })

});