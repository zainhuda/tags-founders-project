(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css);", ""]);

// module
exports.push([module.i, ".App {\n  text-align: center;\n  padding: 0;\n}\n\nhtml {\n  max-height: 100vh;\n}\n\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.sidebar {\n    height: 100%;\n    width: 19vw;\n    padding: 1vw 3vw;\n  }\n\n.content {\n    border-left: 1px lightgrey solid;\n    padding: 0 30px 30px 30px;\n    min-height: 100%;\n}\n\n\n.contentHeader {\n  background-color: #16a085\n}\n\n.headerTitle {\n  margin: 0;\n  color: white;\n  padding: 4vh\n}\n\n.summaryThumbnail {\n  width: 100%;\n  border-radius: 3px;\n}\n\n.profileSummary {\n  margin: 0;\n}\n\n.profileSummary h5 {\n  font-size: 16px;\n  font-weight: bold;\n  color: #FFFFFF;\n}\n\n.profileSummary h6 {\n  font-size: 14px;\n  line-height: 0.7;\n  color: #FFFFFF;\n}\n\n.profileSummary a:after {\n    content:'\\A';\n    position:absolute;\n    width:100%; height:100%;\n    top:0; left:0;\n    background:rgba(0,0,0,0.3);\n    opacity:0;\n    transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n}\n.profileSummary a:hover:after {\n    opacity:1;\n}\n\n\n.profileSummaryDescription {\n    text-align: left;\n    padding: 15px 10px 8px;\n    bottom: 4px;\n    left: 4px;\n    right: 4px;\n    border-radius: 0 0 3px 3px;\n    position: absolute;\n    background-image: linear-gradient(-174deg, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.9) 100%);\n    /*opacity: 0;*/\n    transition: opacity 0.15s ease-in-out;\n}\n\n.searchBar {\n    float: left;\n    padding-left: 5vw\n}\n\n.profileRow {\n    margin-bottom: 10px;\n}\n\n.profileLabelTitle {\n    display: block;\n    text-transform: uppercase;\n    line-height: 21px;\n    margin-bottom: 3px;\n    font-size: 12px;\n    color: #8093A6;\n}\n\n.profileLabelValue {\n    font-weight: 300;\n    line-height: 21px;\n    color: #373739;\n    font-size: 16px;\n}\n\n.sidebarCollapse .panel-heading {\n  background-color: white;\n  padding: 0px;\n  line-height: 2.1;\n}\n\n#Panels {\n  position: relative;\n  top: 40px;\n  border-bottom: none;\n}\n\n\n.panelTitle {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.panel {\n  border: none;\n}\n\na{\n  color: black;\n}\n\n.collapseLinks:link {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 15px;\n  line-height: 2;\n  text-decoration: none;\n  position: relative;\n  left: 30px;\n}\n\n.collapseLinks:hover {\n  color: green;\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 17px;\n  text-decoration: none;\n}\n\n.ui.primary.basic.button {\n  border-radius: 2px;\n  cursor: pointer;\n  color: rgba(154,220,255,.6);\n  font-family: FaktProSoft,Helvetica Neue,helvetica,arial,sans-serif;\n  transition: all .2s cubic-bezier(.645,.045,.355,1);\n  padding: 12 27;\n}\n\n.ui.primary.button {\n  border-radius: 2px;\n  cursor: pointer;\n  color: white;\n  background-color: rgba(154,220,255,1);\n  font-family: FaktProSoft,Helvetica Neue,helvetica,arial,sans-serif;\n}\n\n.features {\n  background-color: #cccccc;\n}\n\n.headerLP {\n  position: relative;\n  display: block;\n  width: 100%;\n  background: white;\n  color: #3c4858;\n  font-weight: bold;\n  height: 40px;\n}\n\n.headerLP a {\n  color: #3c4858;\n  font-size: 12;\n}\n\n.logo {\n  position: absolute;\n  top: 50%;\n  left: 25px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  font-family: FaktProSoft,Helvetica Neue,helvetica,arial,sans-serif;\n}\n\nnav,\nnav ul,\nnav ul li {\n  margin: 0;\n  padding: 0;\n}\n\nnav {\n  position: absolute;\n  top: 50%;\n  right: 25px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\nul li {\n  list-style-type: none;\n  display: inline-block;\n  margin-left: 15px;\n  padding: 10px !important;\n}\n\n.GetStarted-table{\n  max-width: 1200px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-wrap: wrap;\n}\n\n.col {\n  flex: 25% 1;\n  padding: 10px;\n  max-width: 320px;\n  box-sizing: border-box;\n}\n\n.table{\n  background: #fff;\n  padding: 40px 20px;\n  font-family: \"montserrat\",sans-serif;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 0 10px #00000070;\n}\n.table h2{\n  text-transform: uppercase;\n}\n\n.description span{\n  display: block;\n  font-size: 14px;\n}\n\n\n.signup {\n  border: 1px solid;\n  border-color: rgba(154,220,255,.6);\n  background-color: transparent;\n  color: #3c4858;\n  border-radius: 4px;\n  padding: 2px 6px;\n  border-width: 1.5px;\n  font-weight: 505;\n  font-size: 12;\n}\n\nbutton:hover {\n  background-color: rgba(154,220,255,.6);\n  color: white;\n  font-weight: bold;\n}\n\n\n\n  \n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/signup */ "./src/components/signup.jsx");
/* harmony import */ var _components_showcase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/showcase */ "./src/components/showcase.jsx");
/* harmony import */ var _components_explore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/explore */ "./src/components/explore.jsx");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header */ "./src/components/header.jsx");
/* harmony import */ var _components_employeeDirectory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/employeeDirectory */ "./src/components/employeeDirectory.jsx");
/* harmony import */ var _components_profilePage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profilePage */ "./src/components/profilePage.jsx");





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/App.js";



 // import components


 // Page that features product







var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App(props) {
    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        exact: true,
        path: "/",
        component: _components_showcase__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/explore",
        component: _components_explore__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/my_profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/david",
        component: _components_signup__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);
/*          <Col>
            <Sidebar />
            <Col lg={9} className="content">
              <Header />
              <Route exact path="/" component={EmployeeDirectory} />
              <Route path="/profile" component={ProfilePage} />
            </Col>
          </Col>*/

/***/ }),

/***/ "./src/assets/ripped_big_img.jpeg":
/*!****************************************!*\
  !*** ./src/assets/ripped_big_img.jpeg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ripped_big_img.58829e4a.jpeg";

/***/ }),

/***/ "./src/components/button.jsx":
/*!***********************************!*\
  !*** ./src/components/button.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/button.jsx";

 //To choose button styling, go to "https://semantic-ui.com/elements/button.html" and set className to the button you want

var Button =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Button, _Component);

  function Button() {
    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Button);

    return Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Button).apply(this, arguments));
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Button, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: this.props.className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, this.props.msg));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/employeeDirectory.jsx":
/*!**********************************************!*\
  !*** ./src/components/employeeDirectory.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _profileThumbnail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profileThumbnail */ "./src/components/profileThumbnail.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/employeeDirectory.jsx";






var EmployeeDirectory =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(EmployeeDirectory, _Component);

  function EmployeeDirectory(props) {
    var _this;

    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmployeeDirectory);

    _this = Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EmployeeDirectory).call(this, props));
    _this.state = {
      isLoaded: false,
      profiles: []
    };
    return _this;
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmployeeDirectory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // make api request for profiles
      // we need to make the id dynamic based on what user is logged in currently
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('http://localhost:5000/api/profiles/t25mt190a', {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }).then(function (res) {
        _this2.setState({
          isLoaded: true,
          profiles: res.data
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoaded = _this$state.isLoaded,
          profiles = _this$state.profiles;

      if (!isLoaded) {
        // havent recieved data
        return (// loading icon goes here
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, "Loading...")
        );
      } else {
        // data is received and we ca render it
        var profilesArray = profiles.map(function (profile) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
            lg: 2,
            style: {
              padding: "4px"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_profileThumbnail__WEBPACK_IMPORTED_MODULE_8__["default"], {
            key: profile.id,
            name: profile.real_name,
            url: profile.profile.image_192,
            id: profile.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }));
        });
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          className: "listingContent",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, profilesArray));
      }
    }
  }]);

  return EmployeeDirectory;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    profiles: state.profile.profiles
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(EmployeeDirectory));

/***/ }),

/***/ "./src/components/explore.jsx":
/*!************************************!*\
  !*** ./src/components/explore.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _employeeDirectory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employeeDirectory */ "./src/components/employeeDirectory.jsx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header */ "./src/components/header.jsx");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/explore.jsx";
// this page needs to display the different profile components
// should also include the brains to sort by department or soemting
// accessed through the path: /explore





var Explore =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Explore, _Component);

  function Explore() {
    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Explore);

    return Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Explore).apply(this, arguments));
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Explore, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_employeeDirectory__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    }
  }]);

  return Explore;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Explore);

/***/ }),

/***/ "./src/components/footer.jsx":
/*!***********************************!*\
  !*** ./src/components/footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/footer.jsx";


var Footer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _Component);

  function Footer() {
    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "Footer");
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/header.jsx":
/*!***********************************!*\
  !*** ./src/components/header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/header.jsx";



var Header =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      searchValue: ""
    };
    return _this;
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        style: {
          marginTop: "2vh",
          marginBottom: "2vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        inline: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        style: {
          display: "inline",
          float: "left",
          paddingLeft: "2vw",
          margin: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "All people"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        controlId: "formInlineName",
        className: "searchBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
        type: "text",
        placeholder: "Search",
        style: {
          width: "500px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormControl"].Feedback, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Glyphicon"], {
        glyph: "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/headerLP.jsx":
/*!*************************************!*\
  !*** ./src/components/headerLP.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _button_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button.jsx */ "./src/components/button.jsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/headerLP.jsx";




var Header =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "headerLP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "PROJECT X"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "How it works")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "About us")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "FAQ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Get in touch")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Login")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Sign up")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/homePage.jsx":
/*!*************************************!*\
  !*** ./src/components/homePage.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/homePage.jsx";


var HomePage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HomePage, _Component);

  function HomePage() {
    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    return Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomePage).apply(this, arguments));
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, "Home Page Content Here");
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/components/profileLabel.jsx":
/*!*****************************************!*\
  !*** ./src/components/profileLabel.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/profileLabel.jsx";


var ProfileLabel =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProfileLabel, _Component);

  function ProfileLabel() {
    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProfileLabel);

    return Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProfileLabel).apply(this, arguments));
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProfileLabel, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "profileRow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "profileLabelTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, this.props.title.toUpperCase()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "profileLabelValue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, " ", this.props.value));
    }
  }]);

  return ProfileLabel;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProfileLabel);

/***/ }),

/***/ "./src/components/profilePage.jsx":
/*!****************************************!*\
  !*** ./src/components/profilePage.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _profileLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profileLabel */ "./src/components/profileLabel.jsx");





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/profilePage.jsx";




var ProfilePage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProfilePage, _Component);

  function ProfilePage() {
    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProfilePage);

    return Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProfilePage).apply(this, arguments));
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProfilePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        lg: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        style: {
          marginBottom: "2vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, " John Doe "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, " Designer ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_profileLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Department",
        value: "Creative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_profileLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Office",
        value: "London",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_profileLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Region",
        value: "North America",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_profileLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Mobile",
        value: "123 432 453",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_profileLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "email",
        value: "email@example.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_profileLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "birthday",
        value: "October 2nd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_profileLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Joining date",
        value: "October 5th 2018",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        lg: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: __webpack_require__(/*! ./../assets/ripped_big_img.jpeg */ "./src/assets/ripped_big_img.jpeg"),
        className: "summaryThumbnail",
        style: {
          padding: "1em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })));
    }
  }]);

  return ProfilePage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);

/***/ }),

/***/ "./src/components/profileThumbnail.jsx":
/*!*********************************************!*\
  !*** ./src/components/profileThumbnail.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/profileThumbnail.jsx";




var ProfileThumbnail =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProfileThumbnail, _Component);

  function ProfileThumbnail() {
    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProfileThumbnail);

    return Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProfileThumbnail).apply(this, arguments));
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProfileThumbnail, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"], {
        className: "profileSummary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/profile",
        style: {
          display: "block",
          position: "relative"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.url,
        className: "summaryThumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "profileSummaryDescription",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, " ", this.props.name, " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, " ", this.props.id, " ")));
    }
  }]);

  return ProfileThumbnail;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProfileThumbnail);

/***/ }),

/***/ "./src/components/showcase.jsx":
/*!*************************************!*\
  !*** ./src/components/showcase.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _button_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button.jsx */ "./src/components/button.jsx");
/* harmony import */ var _headerLP_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./headerLP.jsx */ "./src/components/headerLP.jsx");
/* harmony import */ var _footer_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer.jsx */ "./src/components/footer.jsx");
/* harmony import */ var _homePage_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homePage.jsx */ "./src/components/homePage.jsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/showcase.jsx";
// this is the landing page that shows off our product and what not
// access through the root path







var Showcase =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Showcase, _Component);

  function Showcase() {
    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Showcase);

    return Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Showcase).apply(this, arguments));
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Showcase, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_headerLP_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "landing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_homePage_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "ui primary basic button",
        msg: "VIEW DEMO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_button_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "ui primary button",
        msg: "LEARN MORE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "features",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_footer_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })));
    }
  }]);

  return Showcase;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Showcase);

/***/ }),

/***/ "./src/components/sidebar.jsx":
/*!************************************!*\
  !*** ./src/components/sidebar.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/sidebar.jsx";




var Sidebar =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Sidebar, _Component);

  function Sidebar() {
    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sidebar);

    return Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Sidebar).apply(this, arguments));
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sidebar, [{
    key: "render",
    value: function render() {
      function handleClick() {
        alert('You can now view all people');
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        lg: 3,
        className: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/",
        style: {
          color: "black",
          textDecoration: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, " Project ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, " X "), " "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PanelGroup"], {
        accordian: true,
        id: "Panels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"], {
        eventkey: "1",
        className: "sidebarCollapse",
        onClick: handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"].Heading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"].Title, {
        className: "panelTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "All people"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"], {
        eventkey: "2",
        className: "sidebarCollapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"].Heading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"].Title, {
        toggle: true,
        className: "panelTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "By Department")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"].Body, {
        collapsible: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, " Account Management "), "  "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, " Administration "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, " Creative "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, " Digital & Social "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, " DTP "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, " Finance "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, " HR "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, " IT "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, " Management "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, " Media "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, " Prodcution "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, " Strategy "), " ")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"], {
        eventkey: "3",
        className: "sidebarCollapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"].Heading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"].Title, {
        toggle: true,
        className: "panelTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "By Office")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"].Body, {
        collapsible: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, " London "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, " Calgary "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, " Toronto "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, " Vancouver "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, " Waterloo "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, " Ottawa "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, " Edmonton "), " "))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"], {
        eventkey: "4",
        className: "sidebarCollapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"].Heading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"].Title, {
        toggle: true,
        className: "panelTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "By Region")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Panel"].Body, {
        collapsible: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, " Alberta "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, " Ontario "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, " British Columbia "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, " Quebec "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, " Nova Scotia "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, " Manitoba "), " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        className: "collapseLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, " Saskatchewan "), " ")))));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/signup.jsx":
/*!***********************************!*\
  !*** ./src/components/signup.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/components/signup.jsx";



var SignUp =
/*#__PURE__*/
function (_Component) {
  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SignUp, _Component);

  function SignUp() {
    Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUp);

    return Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SignUp).apply(this, arguments));
  }

  Object(_Users_davidgeorge_Desktop_yolo_founders_project_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUp, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "MAIN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Project X"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Let's Get Started!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pricing-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, " Individual "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "spiderman.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, " Use your company provided access code to make an account:"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "GetStarted-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, " Company "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "price",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, " Register for a new company account ")))))))));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/rootReducer */ "./src/reducers/rootReducer.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
var _jsxFileName = "/Users/davidgeorge/Desktop/yolo/founders-project/client/src/index.js";









var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_7__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_8__["default"]));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/reducers/authReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/authReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/profilesReducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/profilesReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'GET_PROFILES':
      console.log("got data", action.res);
      break;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/rootReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/rootReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducer */ "./src/reducers/authReducer.js");
/* harmony import */ var _profilesReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profilesReducer */ "./src/reducers/profilesReducer.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  profile: _profilesReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/davidgeorge/Desktop/yolo/founders-project/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/davidgeorge/Desktop/yolo/founders-project/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map