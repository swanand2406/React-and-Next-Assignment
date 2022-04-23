self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_d_React_assignments_React_Next_covid_vaccination_tracker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _mnt_d_React_assignments_React_Next_covid_vaccination_tracker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mnt_d_React_assignments_React_Next_covid_vaccination_tracker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mnt_d_React_assignments_React_Next_covid_vaccination_tracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/mnt/d/React assignments/React + Next/covid vaccination tracker/pages/index.js",
    _s = $RefreshSig$();






function Home() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      stateId = _useState[0],
      setStateId = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      districts = _useState2[0],
      setDistricts = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      districtId = _useState3[0],
      setDistrictId = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      centres = _useState4[0],
      setCentres = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      pincode = _useState5[0],
      setPincode = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      States = _useState6[0],
      setStates = _useState6[1];

  function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

    var yyyy = today.getFullYear();
    today = dd + "-" + mm + "-" + yyyy;
    return today;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    var structureState = /*#__PURE__*/function () {
      var _ref = (0,_mnt_d_React_assignments_React_Next_covid_vaccination_tracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_mnt_d_React_assignments_React_Next_covid_vaccination_tracker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var _res$data$states;

        var res, data;
        return _mnt_d_React_assignments_React_Next_covid_vaccination_tracker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://cdn-api.co-vin.in/api/v2/admin/location/states");

              case 2:
                res = _context.sent;
                console.log(res);
                _context.next = 6;
                return (_res$data$states = res.data.states) === null || _res$data$states === void 0 ? void 0 : _res$data$states.map(function (s) {
                  return {
                    key: s.state_id,
                    value: s.state_id,
                    text: s.state_name
                  };
                });

              case 6:
                data = _context.sent;
                setStates(data);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function structureState() {
        return _ref.apply(this, arguments);
      };
    }();

    structureState();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    getDate();
    axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=".concat(districtId, "&date=").concat(getDate())).then(function (res) {
      setCentres(res.data.sessions);
    });
  }, [stateId, districtId]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    function fetchDistricts() {
      return _fetchDistricts.apply(this, arguments);
    }

    function _fetchDistricts() {
      _fetchDistricts = (0,_mnt_d_React_assignments_React_Next_covid_vaccination_tracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_mnt_d_React_assignments_React_Next_covid_vaccination_tracker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        var _res$data;

        var res, data;
        return _mnt_d_React_assignments_React_Next_covid_vaccination_tracker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://cdn-api.co-vin.in/api/v2/admin/location/districts/".concat(stateId));

              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.districts.map(function (d) {
                  return {
                    key: d.district_id,
                    value: d.district_id,
                    text: d.district_name
                  };
                });

              case 5:
                data = _context2.sent;
                setDistricts(data);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _fetchDistricts.apply(this, arguments);
    }

    fetchDistricts();
  }, [stateId]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex flex-col items-center py-10 space-y-5 ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
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
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
        onChange: function onChange(e, data) {
          return setStateId(data.value);
        },
        placeholder: "State",
        selection: true,
        options: States
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
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
        lineNumber: 95,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
        onChange: function onChange(e, data) {
          return setDistrictId(data.value);
        },
        placeholder: "Districts",
        selection: true,
        options: districts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "You can also enter pincode"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "number",
      value: pincode,
      onChange: function onChange(e) {
        return setPincode(e.target.value);
      },
      className: "sm:text-base text-xs px-7 py-3 border",
      placeholder: "search by pincode"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), centres.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: "".concat(districtId && stateId ? "grid" : "hidden")
      },
      className: "sm:text-base text-xs grid-cols-2 sm:grid-cols-3",
      children: centres === null || centres === void 0 ? void 0 : centres.filter(function (c) {
        if (pincode === "") {
          return c;
        } else if (c.pincode.toString().includes(pincode)) {
          return c;
        } else {
          return 0;
        }
      }).map(function (c, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_6__.default, {
          c: c
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "",
        children: "Currently No data Available. Please select proper input"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

_s(Home, "n7g/OMU8wrc+NFsFXNaE7lPuyDQ=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwic3RhdGVJZCIsInNldFN0YXRlSWQiLCJkaXN0cmljdHMiLCJzZXREaXN0cmljdHMiLCJkaXN0cmljdElkIiwic2V0RGlzdHJpY3RJZCIsImNlbnRyZXMiLCJzZXRDZW50cmVzIiwicGluY29kZSIsInNldFBpbmNvZGUiLCJTdGF0ZXMiLCJzZXRTdGF0ZXMiLCJnZXREYXRlIiwidG9kYXkiLCJEYXRlIiwiZGQiLCJTdHJpbmciLCJwYWRTdGFydCIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJ1c2VFZmZlY3QiLCJzdHJ1Y3R1cmVTdGF0ZSIsImF4aW9zIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdGF0ZXMiLCJtYXAiLCJzIiwia2V5Iiwic3RhdGVfaWQiLCJ2YWx1ZSIsInRleHQiLCJzdGF0ZV9uYW1lIiwidGhlbiIsInNlc3Npb25zIiwiZmV0Y2hEaXN0cmljdHMiLCJkIiwiZGlzdHJpY3RfaWQiLCJkaXN0cmljdF9uYW1lIiwiZSIsInRhcmdldCIsImxlbmd0aCIsImRpc3BsYXkiLCJmaWx0ZXIiLCJjIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDQ0MsK0NBQVEsQ0FBQyxDQUFELENBRFQ7QUFBQSxNQUN0QkMsT0FEc0I7QUFBQSxNQUNiQyxVQURhOztBQUFBLG1CQUVLRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRXRCRyxTQUZzQjtBQUFBLE1BRVhDLFlBRlc7O0FBQUEsbUJBR09KLCtDQUFRLENBQUMsQ0FBRCxDQUhmO0FBQUEsTUFHdEJLLFVBSHNCO0FBQUEsTUFHVkMsYUFI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QkFBTyxDQUFQO0FBQ0Q7QUFDRixPQVRGLEVBVUVsQixHQVZGLENBVU0sVUFBQ2tCLENBQUQsRUFBSUcsS0FBSjtBQUFBLDRCQUNILDhEQUFDLHFEQUFEO0FBQWtCLFdBQUMsRUFBRUg7QUFBckIsV0FBV0csS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHO0FBQUEsT0FWTjtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxnQkFvQkM7QUFBSyxlQUFTLEVBQUMsRUFBZjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJFRDs7R0F0SXVCckQsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lODlkMzYxOGE1YTMzYTM5NDI5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3N0YXRlSWQsIHNldFN0YXRlSWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkaXN0cmljdHMsIHNldERpc3RyaWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkaXN0cmljdElkLCBzZXREaXN0cmljdElkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY2VudHJlcywgc2V0Q2VudHJlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwaW5jb2RlLCBzZXRQaW5jb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbU3RhdGVzLCBzZXRTdGF0ZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGZ1bmN0aW9uIGdldERhdGUoKSB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgdmFyIG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vSmFudWFyeSBpcyAwIVxuICAgIHZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICB0b2RheSA9IGRkICsgXCItXCIgKyBtbSArIFwiLVwiICsgeXl5eTtcbiAgICByZXR1cm4gdG9kYXk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0cnVjdHVyZVN0YXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBcImh0dHBzOi8vY2RuLWFwaS5jby12aW4uaW4vYXBpL3YyL2FkbWluL2xvY2F0aW9uL3N0YXRlc1wiXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuZGF0YS5zdGF0ZXM/Lm1hcCgocykgPT4gKHtcbiAgICAgICAga2V5OiBzLnN0YXRlX2lkLFxuICAgICAgICB2YWx1ZTogcy5zdGF0ZV9pZCxcbiAgICAgICAgdGV4dDogcy5zdGF0ZV9uYW1lLFxuICAgICAgfSkpO1xuICAgICAgc2V0U3RhdGVzKGRhdGEpO1xuICAgIH07XG4gICAgc3RydWN0dXJlU3RhdGUoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0ZSgpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly9jZG4tYXBpLmNvLXZpbi5pbi9hcGkvdjIvYXBwb2ludG1lbnQvc2Vzc2lvbnMvcHVibGljL2ZpbmRCeURpc3RyaWN0P2Rpc3RyaWN0X2lkPSR7ZGlzdHJpY3RJZH0mZGF0ZT0ke2dldERhdGUoKX1gXG4gICAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldENlbnRyZXMocmVzLmRhdGEuc2Vzc2lvbnMpO1xuICAgICAgfSk7XG4gIH0sIFtzdGF0ZUlkLCBkaXN0cmljdElkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERpc3RyaWN0cygpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYGh0dHBzOi8vY2RuLWFwaS5jby12aW4uaW4vYXBpL3YyL2FkbWluL2xvY2F0aW9uL2Rpc3RyaWN0cy8ke3N0YXRlSWR9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXM/LmRhdGE/LmRpc3RyaWN0cy5tYXAoKGQpID0+ICh7XG4gICAgICAgIGtleTogZC5kaXN0cmljdF9pZCxcbiAgICAgICAgdmFsdWU6IGQuZGlzdHJpY3RfaWQsXG4gICAgICAgIHRleHQ6IGQuZGlzdHJpY3RfbmFtZSxcbiAgICAgIH0pKTtcbiAgICAgIHNldERpc3RyaWN0cyhkYXRhKTtcbiAgICB9XG4gICAgZmV0Y2hEaXN0cmljdHMoKTtcbiAgfSwgW3N0YXRlSWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHktMTAgc3BhY2UteS01IFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db3ZpZCBDaGVja2VyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXImZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwic206dGV4dC02eGwgdGV4dC0zeGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+XG4gICAgICAgIENvdmlkIFZhY2NpbmF0aW9uIFRyYWNrZXJcbiAgICAgIDwvcD5cblxuICAgICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIFBsZWFzZSBTZWxlY3QgU3RhdGUqXG4gICAgICA8L2Rpdj5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgZGF0YSkgPT4gc2V0U3RhdGVJZChkYXRhLnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlXCJcbiAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgICBvcHRpb25zPXtTdGF0ZXN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIFBsZWFzZSBTZWxlY3QgRGlzdHJpY3QqXG4gICAgICA8L2Rpdj5cbiAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgb25DaGFuZ2U9eyhlLCBkYXRhKSA9PiBzZXREaXN0cmljdElkKGRhdGEudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlzdHJpY3RzXCJcbiAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgICBvcHRpb25zPXtkaXN0cmljdHN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgIFlvdSBjYW4gYWxzbyBlbnRlciBwaW5jb2RlXG4gICAgPC9kaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIHZhbHVlPXtwaW5jb2RlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBpbmNvZGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9XCJzbTp0ZXh0LWJhc2UgdGV4dC14cyBweC03IHB5LTMgYm9yZGVyXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggYnkgcGluY29kZVwiXG4gICAgICAvPlxuICAgICAge2NlbnRyZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGAke2Rpc3RyaWN0SWQgJiYgc3RhdGVJZCA/IFwiZ3JpZFwiIDogXCJoaWRkZW5cIn1gIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwic206dGV4dC1iYXNlIHRleHQteHMgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTNcIlxuICAgICAgICA+XG4gICAgICAgICAge2NlbnRyZXNcbiAgICAgICAgICAgID8uZmlsdGVyKChjKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwaW5jb2RlID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYy5waW5jb2RlLnRvU3RyaW5nKCkuaW5jbHVkZXMocGluY29kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKGMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IGM9e2N9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPkN1cnJlbnRseSBObyBkYXRhIEF2YWlsYWJsZS4gUGxlYXNlIHNlbGVjdCBwcm9wZXIgaW5wdXQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=