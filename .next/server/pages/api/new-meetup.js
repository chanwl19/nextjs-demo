"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 7643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup.jsx

// /api/new-meetup
//Only post
async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        //const {title, image, address, desription } = data;
        //Store in DB
        const connectedClient = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://dbuser:PAss!23456789@cluster0.zuqxwi9.mongodb.net/meetups");
        const db = connectedClient.db();
        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne({
            data
        });
        console.log(result);
        connectedClient.close();
        res.status(201).json({
            message: "Meetup inserted!"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7643));
module.exports = __webpack_exports__;

})();