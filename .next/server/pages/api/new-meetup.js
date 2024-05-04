"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.jsx":
/*!**********************************!*\
  !*** ./pages/api/new-meetup.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// /api/new-meetup\n//Only post\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        //const {title, image, address, desription } = data;\n        //Store in DB\n        const connectedClient = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://dbuser:PAss!23456789@cluster0.zuqxwi9.mongodb.net/meetups\");\n        const db = connectedClient.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne({\n            data\n        });\n        console.log(result);\n        connectedClient.close();\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLGtCQUFrQjtBQUVsQixXQUFXO0FBQ0ksZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUMxQyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUM7UUFDdEIsTUFBTUMsSUFBSSxHQUFFSCxHQUFHLENBQUNJLElBQUk7UUFDcEIsb0RBQW9EO1FBRXBELGFBQWE7UUFDYixNQUFNQyxlQUFlLEdBQUcsTUFBTVAsd0RBQW1CLENBQUMseUVBQXlFLENBQUM7UUFDNUgsTUFBTVMsRUFBRSxHQUFHRixlQUFlLENBQUNFLEVBQUUsRUFBRTtRQUUvQixNQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ2xELE1BQU1DLE1BQU0sR0FBRyxNQUFNRixpQkFBaUIsQ0FBQ0csU0FBUyxDQUFDO1lBQzdDUixJQUFJO1NBQ1AsQ0FBQztRQUNGUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7UUFDcEJMLGVBQWUsQ0FBQ1MsS0FBSyxFQUFFLENBQUM7UUFFeEJiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFFLGtCQUFrQjtTQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qc3g/YTcxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXHJcblxyXG4vLyAvYXBpL25ldy1tZWV0dXBcclxuXHJcbi8vT25seSBwb3N0XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLHJlcyl7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcclxuICAgICAgICBjb25zdCBkYXRhID1yZXEuYm9keTtcclxuICAgICAgICAvL2NvbnN0IHt0aXRsZSwgaW1hZ2UsIGFkZHJlc3MsIGRlc3JpcHRpb24gfSA9IGRhdGE7XHJcblxyXG4gICAgICAgIC8vU3RvcmUgaW4gREJcclxuICAgICAgICBjb25zdCBjb25uZWN0ZWRDbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2RidXNlcjpQQXNzITIzNDU2Nzg5QGNsdXN0ZXIwLnp1cXh3aTkubW9uZ29kYi5uZXQvbWVldHVwcycpO1xyXG4gICAgICAgIGNvbnN0IGRiID0gY29ubmVjdGVkQ2xpZW50LmRiKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZSh7XHJcbiAgICAgICAgICAgIGRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGNvbm5lY3RlZENsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTogJ01lZXR1cCBpbnNlcnRlZCEnfSk7ICAgICAgXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjb25uZWN0ZWRDbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.jsx"));
module.exports = __webpack_exports__;

})();