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
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
        onChange: function onChange(e, data) {
          return setStateId(data.value);
        },
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {
        onChange: function onChange(e, data) {
          return setDistrictId(data.value);
        },
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
      onChange: function onChange(e) {
        return setPincode(e.target.value);
      },
      className: "sm:text-base text-xs px-7 py-3 border",
      placeholder: "search by pincode"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
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
          lineNumber: 125,
          columnNumber: 15
        }, _this);
      })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwic3RhdGVJZCIsInNldFN0YXRlSWQiLCJkaXN0cmljdHMiLCJzZXREaXN0cmljdHMiLCJkaXN0cmljdElkIiwic2V0RGlzdHJpY3RJZCIsImNlbnRyZXMiLCJzZXRDZW50cmVzIiwicGluY29kZSIsInNldFBpbmNvZGUiLCJTdGF0ZXMiLCJzZXRTdGF0ZXMiLCJnZXREYXRlIiwidG9kYXkiLCJEYXRlIiwiZGQiLCJTdHJpbmciLCJwYWRTdGFydCIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJ1c2VFZmZlY3QiLCJzdHJ1Y3R1cmVTdGF0ZSIsImF4aW9zIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdGF0ZXMiLCJtYXAiLCJzIiwia2V5Iiwic3RhdGVfaWQiLCJ2YWx1ZSIsInRleHQiLCJzdGF0ZV9uYW1lIiwidGhlbiIsInNlc3Npb25zIiwiZmV0Y2hEaXN0cmljdHMiLCJkIiwiZGlzdHJpY3RfaWQiLCJkaXN0cmljdF9uYW1lIiwiZSIsInRhcmdldCIsImxlbmd0aCIsImRpc3BsYXkiLCJmaWx0ZXIiLCJjIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDQ0MsK0NBQVEsQ0FBQyxDQUFELENBRFQ7QUFBQSxNQUN0QkMsT0FEc0I7QUFBQSxNQUNiQyxVQURhOztBQUFBLG1CQUVLRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRXRCRyxTQUZzQjtBQUFBLE1BRVhDLFlBRlc7O0FBQUEsbUJBR09KLCtDQUFRLENBQUMsQ0FBRCxDQUhmO0FBQUEsTUFHdEJLLFVBSHNCO0FBQUEsTUFHVkMsYUFI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QUFPLENBQVA7QUFDRDtBQUNGLE9BVEYsRUFVRWxCLEdBVkYsQ0FVTSxVQUFDa0IsQ0FBRCxFQUFJRyxLQUFKO0FBQUEsNEJBQ0gsOERBQUMscURBQUQ7QUFBa0IsV0FBQyxFQUFFSDtBQUFyQixXQUFXRyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREc7QUFBQSxPQVZOO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGdCQW9CQztBQUFLLGVBQVMsRUFBQyxFQUFmO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFDLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUVEOztHQWxJdUJyRCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjliOTdjMzUzOTgzNWE3MjdmMThmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc3RhdGVJZCwgc2V0U3RhdGVJZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2Rpc3RyaWN0cywgc2V0RGlzdHJpY3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Rpc3RyaWN0SWQsIHNldERpc3RyaWN0SWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjZW50cmVzLCBzZXRDZW50cmVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BpbmNvZGUsIHNldFBpbmNvZGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtTdGF0ZXMsIHNldFN0YXRlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB2YXIgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgdmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIHRvZGF5ID0gZGQgKyBcIi1cIiArIG1tICsgXCItXCIgKyB5eXl5O1xuICAgIHJldHVybiB0b2RheTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RydWN0dXJlU3RhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIFwiaHR0cHM6Ly9jZG4tYXBpLmNvLXZpbi5pbi9hcGkvdjIvYWRtaW4vbG9jYXRpb24vc3RhdGVzXCJcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5kYXRhLnN0YXRlcz8ubWFwKChzKSA9PiAoe1xuICAgICAgICBrZXk6IHMuc3RhdGVfaWQsXG4gICAgICAgIHZhbHVlOiBzLnN0YXRlX2lkLFxuICAgICAgICB0ZXh0OiBzLnN0YXRlX25hbWUsXG4gICAgICB9KSk7XG4gICAgICBzZXRTdGF0ZXMoZGF0YSk7XG4gICAgfTtcbiAgICBzdHJ1Y3R1cmVTdGF0ZSgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREYXRlKCk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXG4gICAgICAgIGBodHRwczovL2Nkbi1hcGkuY28tdmluLmluL2FwaS92Mi9hcHBvaW50bWVudC9zZXNzaW9ucy9wdWJsaWMvZmluZEJ5RGlzdHJpY3Q/ZGlzdHJpY3RfaWQ9JHtkaXN0cmljdElkfSZkYXRlPSR7Z2V0RGF0ZSgpfWBcbiAgICAgIClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0Q2VudHJlcyhyZXMuZGF0YS5zZXNzaW9ucyk7XG4gICAgICB9KTtcbiAgfSwgW3N0YXRlSWQsIGRpc3RyaWN0SWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGlzdHJpY3RzKCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly9jZG4tYXBpLmNvLXZpbi5pbi9hcGkvdjIvYWRtaW4vbG9jYXRpb24vZGlzdHJpY3RzLyR7c3RhdGVJZH1gXG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcz8uZGF0YT8uZGlzdHJpY3RzLm1hcCgoZCkgPT4gKHtcbiAgICAgICAga2V5OiBkLmRpc3RyaWN0X2lkLFxuICAgICAgICB2YWx1ZTogZC5kaXN0cmljdF9pZCxcbiAgICAgICAgdGV4dDogZC5kaXN0cmljdF9uYW1lLFxuICAgICAgfSkpO1xuICAgICAgc2V0RGlzdHJpY3RzKGRhdGEpO1xuICAgIH1cbiAgICBmZXRjaERpc3RyaWN0cygpO1xuICB9LCBbc3RhdGVJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBweS0xMCBzcGFjZS15LTUgXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvdmlkIENoZWNrZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlciZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICA+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJzbTp0ZXh0LTZ4bCB0ZXh0LTN4bCB0ZXh0LWNlbnRlciBmb250LWJvbGRcIj5cbiAgICAgICAgQ292aWQgVmFjY2luYXRpb24gVHJhY2tlclxuICAgICAgPC9wPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlBsZWFzZSBTZWxlY3QgU3RhdGUqPC9kaXY+XG4gICAgICAgIDxEcm9wZG93blxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgZGF0YSkgPT4gc2V0U3RhdGVJZChkYXRhLnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlXCJcbiAgICAgICAgICBzZWxlY3Rpb25cbiAgICAgICAgICBvcHRpb25zPXtTdGF0ZXN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5QbGVhc2UgU2VsZWN0IERpc3RyaWN0KjwvZGl2PlxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICBvbkNoYW5nZT17KGUsIGRhdGEpID0+IHNldERpc3RyaWN0SWQoZGF0YS52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaXN0cmljdHNcIlxuICAgICAgICAgIHNlbGVjdGlvblxuICAgICAgICAgIG9wdGlvbnM9e2Rpc3RyaWN0c31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5Zb3UgY2FuIGFsc28gZW50ZXIgcGluY29kZTwvZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICB2YWx1ZT17cGluY29kZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQaW5jb2RlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgY2xhc3NOYW1lPVwic206dGV4dC1iYXNlIHRleHQteHMgcHgtNyBweS0zIGJvcmRlclwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIGJ5IHBpbmNvZGVcIlxuICAgICAgLz5cbiAgICAgIHtjZW50cmVzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBgJHtkaXN0cmljdElkICYmIHN0YXRlSWQgPyBcImdyaWRcIiA6IFwiaGlkZGVuXCJ9YCB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNtOnRleHQtYmFzZSB0ZXh0LXhzIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtjZW50cmVzXG4gICAgICAgICAgICA/LmZpbHRlcigoYykgPT4ge1xuICAgICAgICAgICAgICBpZiAocGluY29kZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGMucGluY29kZS50b1N0cmluZygpLmluY2x1ZGVzKHBpbmNvZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKChjLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2luZGV4fSBjPXtjfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIEN1cnJlbnRseSBObyBkYXRhIEF2YWlsYWJsZS4gUGxlYXNlIHNlbGVjdCBwcm9wZXIgaW5wdXRcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=