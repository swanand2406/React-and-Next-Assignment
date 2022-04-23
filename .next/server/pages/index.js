(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/mnt/d/React assignments/React + Next/covid vaccination tracker/components/Card.js";

function Card({
  c
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    initial: {
      opacity: 0,
      y: 40
    },
    animate: {
      opacity: 1,
      y: 1
    },
    transition: {
      duration: 0.5
    },
    className: "sm:m-5 m-1 bg-gray-100 p-3",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "font-semibold",
        children: "Center:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), " ", c.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "font-semibold",
        children: "Date:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), " ", c.date]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "font-semibold",
        children: "Pincode:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), " ", c.pincode]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [c.slots.length, " ", c.slots.length === 1 ? "slot" : "slots", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "text-gray-500",
        children: "available"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "font-bold text-lg",
      children: c.vaccine
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["dose 1:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: `${c.available_capacity_dose1 > 1 ? "text-green-500 font-bold text-lg" : "text-black"}`,
        children: c.available_capacity_dose1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["dose 2:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: `${c.available_capacity_dose2 > 1 ? "text-green-500 font-bold text-lg" : "text-black"}`,
        children: c.available_capacity_dose2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Fee type: ", c.fee_type]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");

var _jsxFileName = "/mnt/d/React assignments/React + Next/covid vaccination tracker/pages/index.js";





function Home() {
  const {
    0: stateId,
    1: setStateId
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const {
    0: districts,
    1: setDistricts
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: districtId,
    1: setDistrictId
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const {
    0: centres,
    1: setCentres
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: pincode,
    1: setPincode
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const {
    0: States,
    1: setStates
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);

  function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

    var yyyy = today.getFullYear();
    today = dd + "-" + mm + "-" + yyyy;
    return today;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const structureState = async () => {
      var _res$data$states;

      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://cdn-api.co-vin.in/api/v2/admin/location/states");
      console.log(res);
      const data = await ((_res$data$states = res.data.states) === null || _res$data$states === void 0 ? void 0 : _res$data$states.map(s => ({
        key: s.state_id,
        value: s.state_id,
        text: s.state_name
      })));
      setStates(data);
    };

    structureState();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    getDate();
    axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${getDate()}`).then(res => {
      setCentres(res.data.sessions);
    });
  }, [stateId, districtId]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    async function fetchDistricts() {
      var _res$data;

      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`);
      const data = await (res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.districts.map(d => ({
        key: d.district_id,
        value: d.district_id,
        text: d.district_name
      })));
      setDistricts(data);
    }

    fetchDistricts();
  }, [stateId]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col items-center py-10 space-y-5 ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Covid Checker"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "sm:text-6xl text-3xl text-center font-bold",
      children: "Covid Vaccination Tracker"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: "Please Select State*"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
        onChange: (e, data) => setStateId(data.value),
        placeholder: "State",
        selection: true,
        options: States
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: "Please Select District*"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
        onChange: (e, data) => setDistrictId(data.value),
        placeholder: "Districts",
        selection: true,
        options: districts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "You can also enter pincode"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "number",
      value: pincode,
      onChange: e => setPincode(e.target.value),
      className: "sm:text-base text-xs px-7 py-3 border",
      placeholder: "search by pincode"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), centres.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: `${districtId && stateId ? "grid" : "hidden"}`
      },
      className: "sm:text-base text-xs grid-cols-2 sm:grid-cols-3",
      children: centres === null || centres === void 0 ? void 0 : centres.filter(c => {
        if (pincode === "") {
          return c;
        } else if (c.pincode.toString().includes(pincode)) {
          return c;
        } else {
          return 0;
        }
      }).map((c, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_5__.default, {
        c: c
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "",
        children: "Currently No data Available. Please select proper input"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkNhcmQiLCJjIiwib3BhY2l0eSIsInkiLCJkdXJhdGlvbiIsIm5hbWUiLCJkYXRlIiwicGluY29kZSIsInNsb3RzIiwibGVuZ3RoIiwidmFjY2luZSIsImF2YWlsYWJsZV9jYXBhY2l0eV9kb3NlMSIsImF2YWlsYWJsZV9jYXBhY2l0eV9kb3NlMiIsImZlZV90eXBlIiwiSG9tZSIsInN0YXRlSWQiLCJzZXRTdGF0ZUlkIiwidXNlU3RhdGUiLCJkaXN0cmljdHMiLCJzZXREaXN0cmljdHMiLCJkaXN0cmljdElkIiwic2V0RGlzdHJpY3RJZCIsImNlbnRyZXMiLCJzZXRDZW50cmVzIiwic2V0UGluY29kZSIsIlN0YXRlcyIsInNldFN0YXRlcyIsImdldERhdGUiLCJ0b2RheSIsIkRhdGUiLCJkZCIsIlN0cmluZyIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInVzZUVmZmVjdCIsInN0cnVjdHVyZVN0YXRlIiwicmVzIiwiYXhpb3MiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN0YXRlcyIsIm1hcCIsInMiLCJrZXkiLCJzdGF0ZV9pZCIsInZhbHVlIiwidGV4dCIsInN0YXRlX25hbWUiLCJ0aGVuIiwic2Vzc2lvbnMiLCJmZXRjaERpc3RyaWN0cyIsImQiLCJkaXN0cmljdF9pZCIsImRpc3RyaWN0X25hbWUiLCJlIiwidGFyZ2V0IiwiZGlzcGxheSIsImZpbHRlciIsInRvU3RyaW5nIiwiaW5jbHVkZXMiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBcUI7QUFDbEMsc0JBQ0UsOERBQUMscURBQUQ7QUFDRSxXQUFPLEVBQUU7QUFBRUMsYUFBTyxFQUFFLENBQVg7QUFBY0MsT0FBQyxFQUFFO0FBQWpCLEtBRFg7QUFFRSxXQUFPLEVBQUU7QUFBRUQsYUFBTyxFQUFFLENBQVg7QUFBY0MsT0FBQyxFQUFFO0FBQWpCLEtBRlg7QUFHRSxjQUFVLEVBQUU7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FIZDtBQUlFLGFBQVMsRUFBQyw0QkFKWjtBQUFBLDRCQU1FO0FBQUEsOEJBQ0U7QUFBTSxpQkFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsT0FDa0RILENBQUMsQ0FBQ0ksSUFEcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFTRTtBQUFBLDhCQUNFO0FBQU0saUJBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLE9BQ2dESixDQUFDLENBQUNLLElBRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBWUU7QUFBQSw4QkFDRTtBQUFNLGlCQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixPQUNtREwsQ0FBQyxDQUFDTSxPQURyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQWVFO0FBQUEsaUJBQ0dOLENBQUMsQ0FBQ08sS0FBRixDQUFRQyxNQURYLE9BQ29CUixDQUFDLENBQUNPLEtBQUYsQ0FBUUMsTUFBUixLQUFtQixDQUFuQixHQUF1QixNQUF2QixHQUFnQyxPQURwRCxFQUM2RCxHQUQ3RCxlQUVFO0FBQU0saUJBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGLGVBbUJFO0FBQUcsZUFBUyxFQUFDLG1CQUFiO0FBQUEsZ0JBQWtDUixDQUFDLENBQUNTO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkYsZUFvQkU7QUFBQSw0QkFDVSxHQURWLGVBRUU7QUFDRSxpQkFBUyxFQUFHLEdBQ1ZULENBQUMsQ0FBQ1Usd0JBQUYsR0FBNkIsQ0FBN0IsR0FDSSxrQ0FESixHQUVJLFlBQ0wsRUFMSDtBQUFBLGtCQU9HVixDQUFDLENBQUNVO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixlQWdDRTtBQUFBLDRCQUNVLEdBRFYsZUFFRTtBQUNFLGlCQUFTLEVBQUcsR0FDVlYsQ0FBQyxDQUFDVyx3QkFBRixHQUE2QixDQUE3QixHQUNJLGtDQURKLEdBRUksWUFDTCxFQUxIO0FBQUEsa0JBT0dYLENBQUMsQ0FBQ1c7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFVVSxHQVZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRixlQTRDRTtBQUFBLCtCQUFjWCxDQUFDLENBQUNZLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdERCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxDQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJKLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDSyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qk4sK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNWLE9BQUQ7QUFBQSxPQUFVaUI7QUFBVixNQUF3QlAsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNRLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7O0FBRUEsV0FBU1UsT0FBVCxHQUFtQjtBQUNqQixRQUFJQyxLQUFLLEdBQUcsSUFBSUMsSUFBSixFQUFaO0FBQ0EsUUFBSUMsRUFBRSxHQUFHQyxNQUFNLENBQUNILEtBQUssQ0FBQ0QsT0FBTixFQUFELENBQU4sQ0FBd0JLLFFBQXhCLENBQWlDLENBQWpDLEVBQW9DLEdBQXBDLENBQVQ7QUFDQSxRQUFJQyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDTSxRQUFOLEtBQW1CLENBQXBCLENBQU4sQ0FBNkJGLFFBQTdCLENBQXNDLENBQXRDLEVBQXlDLEdBQXpDLENBQVQsQ0FIaUIsQ0FHdUM7O0FBQ3hELFFBQUlHLElBQUksR0FBR1AsS0FBSyxDQUFDUSxXQUFOLEVBQVg7QUFDQVIsU0FBSyxHQUFHRSxFQUFFLEdBQUcsR0FBTCxHQUFXRyxFQUFYLEdBQWdCLEdBQWhCLEdBQXNCRSxJQUE5QjtBQUNBLFdBQU9QLEtBQVA7QUFDRDs7QUFFRFMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFBQTs7QUFDakMsWUFBTUMsR0FBRyxHQUFHLE1BQU1DLGdEQUFBLENBQ2hCLHdEQURnQixDQUFsQjtBQUdBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLFlBQU1JLElBQUksR0FBRywyQkFBTUosR0FBRyxDQUFDSSxJQUFKLENBQVNDLE1BQWYscURBQU0saUJBQWlCQyxHQUFqQixDQUFzQkMsQ0FBRCxLQUFRO0FBQzlDQyxXQUFHLEVBQUVELENBQUMsQ0FBQ0UsUUFEdUM7QUFFOUNDLGFBQUssRUFBRUgsQ0FBQyxDQUFDRSxRQUZxQztBQUc5Q0UsWUFBSSxFQUFFSixDQUFDLENBQUNLO0FBSHNDLE9BQVIsQ0FBckIsQ0FBTixDQUFiO0FBS0F6QixlQUFTLENBQUNpQixJQUFELENBQVQ7QUFDRCxLQVhEOztBQVlBTCxrQkFBYztBQUNmLEdBZFEsRUFjTixFQWRNLENBQVQ7QUFnQkFELGtEQUFTLENBQUMsTUFBTTtBQUNkVixXQUFPO0FBQ1BhLG9EQUFBLENBRUssMkZBQTBGcEIsVUFBVyxTQUFRTyxPQUFPLEVBQUcsRUFGNUgsRUFJR3lCLElBSkgsQ0FJU2IsR0FBRCxJQUFTO0FBQ2JoQixnQkFBVSxDQUFDZ0IsR0FBRyxDQUFDSSxJQUFKLENBQVNVLFFBQVYsQ0FBVjtBQUNELEtBTkg7QUFPRCxHQVRRLEVBU04sQ0FBQ3RDLE9BQUQsRUFBVUssVUFBVixDQVRNLENBQVQ7QUFXQWlCLGtEQUFTLENBQUMsTUFBTTtBQUNkLG1CQUFlaUIsY0FBZixHQUFnQztBQUFBOztBQUM5QixZQUFNZixHQUFHLEdBQUcsTUFBTUMsZ0RBQUEsQ0FDZiw2REFBNER6QixPQUFRLEVBRHJELENBQWxCO0FBR0EsWUFBTTRCLElBQUksR0FBRyxPQUFNSixHQUFOLGFBQU1BLEdBQU4sb0NBQU1BLEdBQUcsQ0FBRUksSUFBWCw4Q0FBTSxVQUFXekIsU0FBWCxDQUFxQjJCLEdBQXJCLENBQTBCVSxDQUFELEtBQVE7QUFDbERSLFdBQUcsRUFBRVEsQ0FBQyxDQUFDQyxXQUQyQztBQUVsRFAsYUFBSyxFQUFFTSxDQUFDLENBQUNDLFdBRnlDO0FBR2xETixZQUFJLEVBQUVLLENBQUMsQ0FBQ0U7QUFIMEMsT0FBUixDQUF6QixDQUFOLENBQWI7QUFLQXRDLGtCQUFZLENBQUN3QixJQUFELENBQVo7QUFDRDs7QUFDRFcsa0JBQWM7QUFDZixHQWJRLEVBYU4sQ0FBQ3ZDLE9BQUQsQ0FiTSxDQUFUO0FBZUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsNkNBQWY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUNFLFlBQUksRUFBQyw2REFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQUcsZUFBUyxFQUFDLDRDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFlRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyx1REFBRDtBQUNFLGdCQUFRLEVBQUUsQ0FBQzJDLENBQUQsRUFBSWYsSUFBSixLQUFhM0IsVUFBVSxDQUFDMkIsSUFBSSxDQUFDTSxLQUFOLENBRG5DO0FBRUUsbUJBQVcsRUFBQyxPQUZkO0FBR0UsaUJBQVMsTUFIWDtBQUlFLGVBQU8sRUFBRXhCO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGLGVBeUJFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLHVEQUFEO0FBQ0UsZ0JBQVEsRUFBRSxDQUFDaUMsQ0FBRCxFQUFJZixJQUFKLEtBQWF0QixhQUFhLENBQUNzQixJQUFJLENBQUNNLEtBQU4sQ0FEdEM7QUFFRSxtQkFBVyxFQUFDLFdBRmQ7QUFHRSxpQkFBUyxNQUhYO0FBSUUsZUFBTyxFQUFFL0I7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGLGVBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENGLGVBbUNFO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxXQUFLLEVBQUVYLE9BRlQ7QUFHRSxjQUFRLEVBQUdtRCxDQUFELElBQU9sQyxVQUFVLENBQUNrQyxDQUFDLENBQUNDLE1BQUYsQ0FBU1YsS0FBVixDQUg3QjtBQUlFLGVBQVMsRUFBQyx1Q0FKWjtBQUtFLGlCQUFXLEVBQUM7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNGLEVBMENHM0IsT0FBTyxDQUFDYixNQUFSLEdBQWlCLENBQWpCLGdCQUNDO0FBQ0UsV0FBSyxFQUFFO0FBQUVtRCxlQUFPLEVBQUcsR0FBRXhDLFVBQVUsSUFBSUwsT0FBZCxHQUF3QixNQUF4QixHQUFpQyxRQUFTO0FBQXhELE9BRFQ7QUFFRSxlQUFTLEVBQUMsaURBRlo7QUFBQSxnQkFJR08sT0FKSCxhQUlHQSxPQUpILHVCQUlHQSxPQUFPLENBQ0p1QyxNQURILENBQ1c1RCxDQUFELElBQU87QUFDZCxZQUFJTSxPQUFPLEtBQUssRUFBaEIsRUFBb0I7QUFDbEIsaUJBQU9OLENBQVA7QUFDRCxTQUZELE1BRU8sSUFBSUEsQ0FBQyxDQUFDTSxPQUFGLENBQVV1RCxRQUFWLEdBQXFCQyxRQUFyQixDQUE4QnhELE9BQTlCLENBQUosRUFBNEM7QUFDakQsaUJBQU9OLENBQVA7QUFDRCxTQUZNLE1BRUE7QUFDTCxpQkFBTyxDQUFQO0FBQ0Q7QUFDRixPQVRGLEVBVUU0QyxHQVZGLENBVU0sQ0FBQzVDLENBQUQsRUFBSStELEtBQUosa0JBQ0gsOERBQUMscURBQUQ7QUFBa0IsU0FBQyxFQUFFL0Q7QUFBckIsU0FBVytELEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhIO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGdCQW9CQztBQUFLLGVBQVMsRUFBQyxFQUFmO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUVELEM7Ozs7Ozs7Ozs7O0FDeElELG1DOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IGMgfSkge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDQwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDEgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgY2xhc3NOYW1lPVwic206bS01IG0tMSBiZy1ncmF5LTEwMCBwLTNcIlxuICAgID5cbiAgICAgIDxwPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Q2VudGVyOjwvc3Bhbj4ge2MubmFtZX1cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+RGF0ZTo8L3NwYW4+IHtjLmRhdGV9XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlBpbmNvZGU6PC9zcGFuPiB7Yy5waW5jb2RlfVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIHtjLnNsb3RzLmxlbmd0aH0ge2Muc2xvdHMubGVuZ3RoID09PSAxID8gXCJzbG90XCIgOiBcInNsb3RzXCJ9e1wiIFwifVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+YXZhaWxhYmxlPC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGdcIj57Yy52YWNjaW5lfTwvcD5cbiAgICAgIDxwPlxuICAgICAgICBkb3NlIDE6e1wiIFwifVxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICBjLmF2YWlsYWJsZV9jYXBhY2l0eV9kb3NlMSA+IDFcbiAgICAgICAgICAgICAgPyBcInRleHQtZ3JlZW4tNTAwIGZvbnQtYm9sZCB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgOiBcInRleHQtYmxhY2tcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAge2MuYXZhaWxhYmxlX2NhcGFjaXR5X2Rvc2UxfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgZG9zZSAyOntcIiBcIn1cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgYy5hdmFpbGFibGVfY2FwYWNpdHlfZG9zZTIgPiAxXG4gICAgICAgICAgICAgID8gXCJ0ZXh0LWdyZWVuLTUwMCBmb250LWJvbGQgdGV4dC1sZ1wiXG4gICAgICAgICAgICAgIDogXCJ0ZXh0LWJsYWNrXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjLmF2YWlsYWJsZV9jYXBhY2l0eV9kb3NlMn1cbiAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgIDwvcD5cbiAgICAgIDxwPkZlZSB0eXBlOiB7Yy5mZWVfdHlwZX08L3A+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3N0YXRlSWQsIHNldFN0YXRlSWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkaXN0cmljdHMsIHNldERpc3RyaWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkaXN0cmljdElkLCBzZXREaXN0cmljdElkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY2VudHJlcywgc2V0Q2VudHJlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwaW5jb2RlLCBzZXRQaW5jb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbU3RhdGVzLCBzZXRTdGF0ZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGZ1bmN0aW9uIGdldERhdGUoKSB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgdmFyIG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vSmFudWFyeSBpcyAwIVxuICAgIHZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICB0b2RheSA9IGRkICsgXCItXCIgKyBtbSArIFwiLVwiICsgeXl5eTtcbiAgICByZXR1cm4gdG9kYXk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0cnVjdHVyZVN0YXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBcImh0dHBzOi8vY2RuLWFwaS5jby12aW4uaW4vYXBpL3YyL2FkbWluL2xvY2F0aW9uL3N0YXRlc1wiXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuZGF0YS5zdGF0ZXM/Lm1hcCgocykgPT4gKHtcbiAgICAgICAga2V5OiBzLnN0YXRlX2lkLFxuICAgICAgICB2YWx1ZTogcy5zdGF0ZV9pZCxcbiAgICAgICAgdGV4dDogcy5zdGF0ZV9uYW1lLFxuICAgICAgfSkpO1xuICAgICAgc2V0U3RhdGVzKGRhdGEpO1xuICAgIH07XG4gICAgc3RydWN0dXJlU3RhdGUoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0ZSgpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly9jZG4tYXBpLmNvLXZpbi5pbi9hcGkvdjIvYXBwb2ludG1lbnQvc2Vzc2lvbnMvcHVibGljL2ZpbmRCeURpc3RyaWN0P2Rpc3RyaWN0X2lkPSR7ZGlzdHJpY3RJZH0mZGF0ZT0ke2dldERhdGUoKX1gXG4gICAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldENlbnRyZXMocmVzLmRhdGEuc2Vzc2lvbnMpO1xuICAgICAgfSk7XG4gIH0sIFtzdGF0ZUlkLCBkaXN0cmljdElkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERpc3RyaWN0cygpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYGh0dHBzOi8vY2RuLWFwaS5jby12aW4uaW4vYXBpL3YyL2FkbWluL2xvY2F0aW9uL2Rpc3RyaWN0cy8ke3N0YXRlSWR9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXM/LmRhdGE/LmRpc3RyaWN0cy5tYXAoKGQpID0+ICh7XG4gICAgICAgIGtleTogZC5kaXN0cmljdF9pZCxcbiAgICAgICAgdmFsdWU6IGQuZGlzdHJpY3RfaWQsXG4gICAgICAgIHRleHQ6IGQuZGlzdHJpY3RfbmFtZSxcbiAgICAgIH0pKTtcbiAgICAgIHNldERpc3RyaWN0cyhkYXRhKTtcbiAgICB9XG4gICAgZmV0Y2hEaXN0cmljdHMoKTtcbiAgfSwgW3N0YXRlSWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHktMTAgc3BhY2UteS01IFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db3ZpZCBDaGVja2VyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXImZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwic206dGV4dC02eGwgdGV4dC0zeGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+XG4gICAgICAgIENvdmlkIFZhY2NpbmF0aW9uIFRyYWNrZXJcbiAgICAgIDwvcD5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5QbGVhc2UgU2VsZWN0IFN0YXRlKjwvZGl2PlxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICBvbkNoYW5nZT17KGUsIGRhdGEpID0+IHNldFN0YXRlSWQoZGF0YS52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiXG4gICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgICAgb3B0aW9ucz17U3RhdGVzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+UGxlYXNlIFNlbGVjdCBEaXN0cmljdCo8L2Rpdj5cbiAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgb25DaGFuZ2U9eyhlLCBkYXRhKSA9PiBzZXREaXN0cmljdElkKGRhdGEudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlzdHJpY3RzXCJcbiAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgICBvcHRpb25zPXtkaXN0cmljdHN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+WW91IGNhbiBhbHNvIGVudGVyIHBpbmNvZGU8L2Rpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgdmFsdWU9e3BpbmNvZGV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGluY29kZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cInNtOnRleHQtYmFzZSB0ZXh0LXhzIHB4LTcgcHktMyBib3JkZXJcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCBieSBwaW5jb2RlXCJcbiAgICAgIC8+XG4gICAgICB7Y2VudHJlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogYCR7ZGlzdHJpY3RJZCAmJiBzdGF0ZUlkID8gXCJncmlkXCIgOiBcImhpZGRlblwifWAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzbTp0ZXh0LWJhc2UgdGV4dC14cyBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtM1wiXG4gICAgICAgID5cbiAgICAgICAgICB7Y2VudHJlc1xuICAgICAgICAgICAgPy5maWx0ZXIoKGMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHBpbmNvZGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjLnBpbmNvZGUudG9TdHJpbmcoKS5pbmNsdWRlcyhwaW5jb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcCgoYywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPENhcmQga2V5PXtpbmRleH0gYz17Y30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICBDdXJyZW50bHkgTm8gZGF0YSBBdmFpbGFibGUuIFBsZWFzZSBzZWxlY3QgcHJvcGVyIGlucHV0XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==