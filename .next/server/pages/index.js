module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header/header.js":
/*!*************************************!*\
  !*** ./components/Header/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\carugatti\\Desktop\\code\\portal-emp\\portal-nextjs\\components\\Header\\header.js";



function Title() {
  return (
    /*#__PURE__*/
    //TODO DEIXAR O CSS DO HEADER RESPONSIVO AO TAMANHO DA TELA
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header-right",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          style: {
            color: "#124eb4"
          },
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaInfoCircle"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 50
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          style: {
            color: "#e2e2e2"
          },
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCog"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 50
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          style: {
            color: "#f4b888"
          },
          children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaUser"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 51
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "header-label",
        children: "Ol\xE1, Guilherme Pimenta"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, this)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./components/Table/jobs.json":
/*!************************************!*\
  !*** ./components/Table/jobs.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"job\":\"Desenvolvedor(a) RPA Pleno\",\"link\":\"https://www.vagas.com.br/vagas/v2185053/desenvolvedor-a-rpa-pleno\",\"employer\":\"Banco Carrefour\",\"description\":\"Analista Desenvolvimento TI Pleno |  Desenvolvedor (a)  RPA \\r\\nDesafios dessa posição:\\r\\n\\r\\nAtuar na criação\",\"local\":\"São Paulo\",\"date\":\"25/03/2021\"},{\"job\":\"9285 - Analista Desenvolvedor - RPA\",\"link\":\"https://www.vagas.com.br/vagas/v2189472/9285-analista-desenvolvedor-rpa\",\"employer\":\"Talent Group\",\"description\":\"Conhecimentos técnicos:\\r\\n Desenvolvedor   RPA  que preferencialmente que conheça da ferramenta BluePrism;\",\"local\":\"São Paulo\",\"date\":\"Há 5 dias\"},{\"job\":\"Desenvolvedor Python \",\"link\":\"https://www.vagas.com.br/vagas/v2186505/desenvolvedor-python\",\"employer\":\"Omie\",\"description\":\"+ API+REST + SQL;\\r\\nExperiência com ferramenta de versionamento de código (GitHub);\\r\\nExperiência em  RPA\",\"local\":\"São Paulo\",\"date\":\"30/03/2021\"},{\"job\":\"Desenvolvedor Fullstack\",\"link\":\"https://www.vagas.com.br/vagas/v2187949/desenvolvedor-fullstack\",\"employer\":\"BRQ Digital Solutions\",\"description\":\"Descrição: Ei programador  RPA , vem ser um #fera BRQ e se apaixonar pelo seu trabalho! ? \\r\\n  Um  desenvolvedor  Fullstack Sênior, com foco em .Net core e Vuejs, para atuar 100% remoto em projetos\",\"local\":\"Curitiba\",\"date\":\"01/04/2021\"},{\"job\":\"Desenvolvedor Full Stack (Cód 7980)\",\"link\":\"https://www.vagas.com.br/vagas/v2190209/desenvolvedor-full-stack-cod-7980\",\"employer\":\"BRQ Digital Solutions\",\"description\":\"Descrição: Ei,  Desenvolvedor  FullStack, vem ser um #fera BRQ! \\r\\n \\r\\nO que procuramos? Um  desenvolvedor  FullStack para trabalhar em projetos de Inovação.\\r\\n \\r\\nO que você deve ter? AngularJS, SQL,  RPA  - Robotic Process Automation, .Net Core\\r\\n\\r\\n \\r\\nO que mais seria interessante?\",\"local\":\"Brasil\",\"date\":\"Há 4 dias\"}]");

/***/ }),

/***/ "./components/Table/table.js":
/*!***********************************!*\
  !*** ./components/Table/table.js ***!
  \***********************************/
/*! exports provided: FilteringTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteringTable", function() { return FilteringTable; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners/ClipLoader */ "react-spinners/ClipLoader");
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\carugatti\\Desktop\\code\\portal-emp\\portal-nextjs\\components\\Table\\table.js";



const FilteringTable = ({
  data
}) => {
  // console.log("data",data)
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "loading-screen",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_2___default.a, {
        size: 150,
        color: '#fff',
        loading: loading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: "label-search",
        children: "RESULTADO DA BUSCA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 6
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "div-table",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
          className: "table-fixed",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: ["Vaga", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 10
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: ["Empresa", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 10
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: ["Local", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 10
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: ["Data", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 10
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: ["Link", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 10
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 8
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: data.map((row, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "label-info",
                children: row.job
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "label-info",
                children: row.employer
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "label-info",
                children: row.local
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "label-info",
                children: row.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: row.link,
                  target: "_blank",
                  title: row.description,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "td-button",
                    children: "VISUALIZAR VAGA"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 13
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 12
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 11
              }, undefined)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 10
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 6
      }, undefined)]
    }, void 0, true)
  }, void 0, false);
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/header */ "./components/Header/header.js");
/* harmony import */ var _components_Table_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Table/table */ "./components/Table/table.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Table_jobs_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Table/jobs.json */ "./components/Table/jobs.json");
var _components_Table_jobs_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../components/Table/jobs.json */ "./components/Table/jobs.json", 1);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/mongodb */ "./util/mongodb.js");
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spinners/ClipLoader */ "react-spinners/ClipLoader");
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\carugatti\\Desktop\\code\\portal-emp\\portal-nextjs\\pages\\index.js";







function Search(props) {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // useEffect(() => {
  // 	setTimeout(() => {
  // 		setLoading(false);
  // 	}, 1000);
  // }, []);

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();

  function goBack() {
    history.push("./home");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "loading-screen",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_7___default.a, {
        size: 150,
        color: "#fff",
        loading: loading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Table_table__WEBPACK_IMPORTED_MODULE_3__["FilteringTable"], {
        data: props.data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
async function getStaticProps(context) {
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  // const data = MOCK_DATA;
  const {
    db
  } = await Object(_util_mongodb__WEBPACK_IMPORTED_MODULE_6__["connectToDatabase"])();
  const data = await db.collection("jobs_tb").find({}).toArray();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data: JSON.parse(JSON.stringify(data))
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 2 * 60 * 60 // In seconds

  };
}

/***/ }),

/***/ "./util/mongodb.js":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToDatabase", function() { return connectToDatabase; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const {
  MONGODB_URI,
  MONGODB_DB
} = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */


let cached = global.mongo;

if (!cached) {
  cached = global.mongo = {
    conn: null,
    promise: null
  };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect(MONGODB_URI, opts).then(client => {
      return {
        client,
        db: client.db(MONGODB_DB)
      };
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-spinners/ClipLoader":
/*!********************************************!*\
  !*** external "react-spinners/ClipLoader" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners/ClipLoader");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFibGUvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9tb25nb2RiLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJUaXRsZSIsImNvbG9yIiwiRmlsdGVyaW5nVGFibGUiLCJkYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsIm1hcCIsInJvdyIsImkiLCJqb2IiLCJlbXBsb3llciIsImxvY2FsIiwiZGF0ZSIsImxpbmsiLCJkZXNjcmlwdGlvbiIsIlNlYXJjaCIsInByb3BzIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJnb0JhY2siLCJwdXNoIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiZGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsIm5vdEZvdW5kIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwicmV2YWxpZGF0ZSIsIk1PTkdPREJfVVJJIiwiTU9OR09EQl9EQiIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsIm1vbmdvIiwiY29ubiIsInByb21pc2UiLCJvcHRzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwidGhlbiIsImNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsR0FBaUI7QUFDZjtBQUFBO0FBR0U7QUFFQTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBRUU7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDTTtBQUFRLGVBQUssRUFBRTtBQUFDQyxpQkFBSyxFQUFFO0FBQVIsV0FBZjtBQUFBLHVDQUFxQyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JB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QUFDWEEsUUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQVAsR0FBZTtBQUFFQyxRQUFJLEVBQUUsSUFBUjtBQUFjQyxXQUFPLEVBQUU7QUFBdkIsR0FBeEI7QUFDRDs7QUFFTSxlQUFlbEIsaUJBQWYsR0FBbUM7QUFDeEMsTUFBSWMsTUFBTSxDQUFDRyxJQUFYLEVBQWlCO0FBQ2YsV0FBT0gsTUFBTSxDQUFDRyxJQUFkO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDSCxNQUFNLENBQUNJLE9BQVosRUFBcUI7QUFDbkIsVUFBTUMsSUFBSSxHQUFHO0FBQ1hDLHFCQUFlLEVBQUUsSUFETjtBQUVYQyx3QkFBa0IsRUFBRTtBQUZULEtBQWI7QUFLQVAsVUFBTSxDQUFDSSxPQUFQLEdBQWlCSSxtREFBVyxDQUFDQyxPQUFaLENBQW9CZCxXQUFwQixFQUFpQ1UsSUFBakMsRUFBdUNLLElBQXZDLENBQTZDQyxNQUFELElBQVk7QUFDdkUsYUFBTztBQUNMQSxjQURLO0FBRUwxQixVQUFFLEVBQUUwQixNQUFNLENBQUMxQixFQUFQLENBQVVXLFVBQVY7QUFGQyxPQUFQO0FBSUQsS0FMZ0IsQ0FBakI7QUFNRDs7QUFDREksUUFBTSxDQUFDRyxJQUFQLEdBQWMsTUFBTUgsTUFBTSxDQUFDSSxPQUEzQjtBQUNBLFNBQU9KLE1BQU0sQ0FBQ0csSUFBZDtBQUNELEM7Ozs7Ozs7Ozs7O0FDL0NELG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFJbmZvQ2lyY2xlLEZhQ29nLEZhVXNlciB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcblxyXG5mdW5jdGlvbiBUaXRsZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgXHJcblxyXG4gICAgLy9UT0RPIERFSVhBUiBPIENTUyBETyBIRUFERVIgUkVTUE9OU0lWTyBBTyBUQU1BTkhPIERBIFRFTEFcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e2NvbG9yOiBcIiMxMjRlYjRcIiB9fT4gPEZhSW5mb0NpcmNsZS8+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tjb2xvcjogXCIjZTJlMmUyXCIgfX0+IDxGYUNvZy8+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tjb2xvcjogXCIjZjRiODg4XCIgfX0+ICA8RmFVc2VyLz48L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhlYWRlci1sYWJlbFwiPk9sw6EsIEd1aWxoZXJtZSBQaW1lbnRhPC9sYWJlbD5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDbGlwTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXInO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZpbHRlcmluZ1RhYmxlID0gKHtkYXRhfSkgPT4ge1xyXG5cdC8vIGNvbnNvbGUubG9nKFwiZGF0YVwiLGRhdGEpXHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgPyAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2xvYWRpbmctc2NyZWVuJz5cclxuXHRcdFx0XHRcdDxDbGlwTG9hZGVyIHNpemU9ezE1MH0gY29sb3I9eycjZmZmJ30gbG9hZGluZz17bG9hZGluZ30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwtc2VhcmNoJz5SRVNVTFRBRE8gREEgQlVTQ0E8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Rpdi10YWJsZSc+XHJcblx0XHRcdFx0XHRcdDxUYWJsZSBjbGFzc05hbWU9J3RhYmxlLWZpeGVkJz5cclxuXHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRWYWdhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRFbXByZXNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb2NhbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0RGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHRcdHtkYXRhLm1hcCgocm93LCBpKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2l9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J2xhYmVsLWluZm8nPntyb3cuam9ifTwvdGQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9J2xhYmVsLWluZm8nPntyb3cuZW1wbG95ZXJ9PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0nbGFiZWwtaW5mbyc+e3Jvdy5sb2NhbH08L3RkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSdsYWJlbC1pbmZvJz57cm93LmRhdGV9PC90ZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17cm93Lmxpbmt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldD0nX2JsYW5rJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17cm93LmRlc2NyaXB0aW9ufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J3RkLWJ1dHRvbic+VklTVUFMSVpBUiBWQUdBPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0XHRcdDwvVGFibGU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJpbmdUYWJsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RhYmxlL3RhYmxlXCI7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTU9DS19EQVRBIGZyb20gXCIuLi9jb21wb25lbnRzL1RhYmxlL2pvYnMuanNvblwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi91dGlsL21vbmdvZGJcIjtcclxuaW1wb3J0IENsaXBMb2FkZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaChwcm9wcykge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyBcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIC8vIFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAvLyBcdH0sIDEwMDApO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xyXG4gICAgaGlzdG9yeS5wdXNoKFwiLi9ob21lXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zY3JlZW5cIj5cclxuICAgICAgICAgIDxDbGlwTG9hZGVyIHNpemU9ezE1MH0gY29sb3I9e1wiI2ZmZlwifSBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9J2JhY2stYnV0dG9uJyBvbkNsaWNrPXtnb0JhY2t9PlxyXG5cdFx0XHRcdFx0XHQ8RmFBbmdsZURvdWJsZUxlZnQgc2l6ZT17MjV9IC8+XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICA8RmlsdGVyaW5nVGFibGUgZGF0YT17cHJvcHMuZGF0YX0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vLi4uL2RhdGFgKVxyXG4gIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgLy8gY29uc3QgZGF0YSA9IE1PQ0tfREFUQTtcclxuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgIC5jb2xsZWN0aW9uKFwiam9ic190YlwiKVxyXG5cdFx0LmZpbmQoe30pXHJcbiAgICAudG9BcnJheSgpO1xyXG5cclxuICBpZiAoIWRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKSxcclxuICAgIH0sXHJcbiAgICAvLyBOZXh0LmpzIHdpbGwgYXR0ZW1wdCB0byByZS1nZW5lcmF0ZSB0aGUgcGFnZTpcclxuICAgIC8vIC0gV2hlbiBhIHJlcXVlc3QgY29tZXMgaW5cclxuICAgIC8vIC0gQXQgbW9zdCBvbmNlIGV2ZXJ5IHNlY29uZFxyXG4gICAgcmV2YWxpZGF0ZTogMiAqIDYwICogNjAsIC8vIEluIHNlY29uZHNcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcblxuY29uc3QgeyBNT05HT0RCX1VSSSwgTU9OR09EQl9EQiB9ID0gcHJvY2Vzcy5lbnZcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xuICApXG59XG5cbmlmICghTU9OR09EQl9EQikge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gIClcbn1cblxuLyoqXG4gKiBHbG9iYWwgaXMgdXNlZCBoZXJlIHRvIG1haW50YWluIGEgY2FjaGVkIGNvbm5lY3Rpb24gYWNyb3NzIGhvdCByZWxvYWRzXG4gKiBpbiBkZXZlbG9wbWVudC4gVGhpcyBwcmV2ZW50cyBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWFsbHlcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXG4gKi9cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29cblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm5cbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH1cblxuICAgIGNhY2hlZC5wcm9taXNlID0gTW9uZ29DbGllbnQuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigoY2xpZW50KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGllbnQsXG4gICAgICAgIGRiOiBjbGllbnQuZGIoTU9OR09EQl9EQiksXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlXG4gIHJldHVybiBjYWNoZWQuY29ublxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcGlubmVycy9DbGlwTG9hZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9