/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/fungi-data.json":
/*!******************************!*\
  !*** ./data/fungi-data.json ***!
  \******************************/
/*! exports provided: phytophthora-infestans, penicillium, default */
/***/ (function(module) {

eval("module.exports = {\"phytophthora-infestans\":{\"name\":\"Phytophthora infestans\",\"parts\":[{\"name\":\"Spors\",\"url\":\"../assets/phytophthora-infestans/spors.obj\",\"color\":\"#574b90\"},{\"name\":\"Hypha\",\"url\":\"../assets/phytophthora-infestans/hypha.obj\",\"color\":\"#303952\"}],\"info\":{\"body\":\"<p>The asexual life cycle of <em>Phytophthora infestans</em> is characterized by alternating phases of <a href=\\\"https://en.wikipedia.org/wiki/Hypha\\\" target=\\\"_blank\\\">hyphal</a> growth, sporulation, sporangia germination (either through <a href=\\\"https://en.wikipedia.org/wiki/Zoospore\\\" target=\\\"_blank\\\">zoospore</a> release or direct germination, i.e. germ tube emergence from the <a href=\\\"https://en.wikipedia.org/wiki/Sporangium\\\" target=\\\"_blank\\\">sporangium</a>), and the re-establishment of hyphal growth.<a href=\\\"https://en.wikipedia.org/wiki/Phytophthora_infestans#cite_note-VCRB2012b-5\\\" target=\\\"_blank\\\"><sup>[5]</sup></a> There is also a sexual cycle, which occurs when isolates of opposite <a href=\\\"https://en.wikipedia.org/wiki/Mating_type\\\" target=\\\"_blank\\\">mating type</a> (A1 and A2) meet. Hormonal communication triggers the formation of the sexual <a href=\\\"https://en.wikipedia.org/wiki/Spore\\\" target=\\\"_blank\\\">spores</a>, called <a href=\\\"https://en.wikipedia.org/wiki/Oospore\\\" target=\\\"_blank\\\">oospores</a>.<a href=\\\"https://en.wikipedia.org/wiki/Phytophthora_infestans#cite_note-6\\\" target=\\\"_blank\\\"><sup>[6]</sup></a>&nbsp;</p>\\r\\n\\r\\n<p>\\r\\n\\t<br>\\r\\n</p>\\r\\n\\r\\n<p>The different types of spores play major roles in the dissemination and survival of <em>P. infestans.</em> Sporangia are spread by wind or water and enable the movement of <em>P. infestans</em> between different <a href=\\\"https://en.wikipedia.org/wiki/Host_(biology)\\\" target=\\\"_blank\\\">host</a> plants. The zoospores released from sporangia are <a href=\\\"https://en.wikipedia.org/wiki/Biflagellate\\\" target=\\\"_blank\\\">biflagellated</a> and <a href=\\\"https://en.wikipedia.org/wiki/Chemotactic\\\" target=\\\"_blank\\\">chemotactic</a>, allowing further movement of <em>P. infestans</em> on water films found on leaves or soils. Both sporangia and zoospores are short-lived, in contrast to oospores which can persist in a viable form for many years.</p>\\r\\n\",\"source\":\"https://en.wikipedia.org/wiki/Phytophthora_infestans\"}},\"penicillium\":{\"name\":\"Penicillium\",\"parts\":[{\"name\":\"Spors\",\"url\":\"../assets/penicillium/spors.obj\"},{\"name\":\"Hypha\",\"url\":\"../assets/penicillium/hypha.obj\"}]}};\n\n//# sourceURL=webpack:///./data/fungi-data.json?");

/***/ }),

/***/ "./js/animate.js":
/*!***********************!*\
  !*** ./js/animate.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return animate; });\n/* harmony import */ var _world_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world/controls */ \"./js/world/controls.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./js/render.js\");\n\r\n\r\n\r\nfunction animate() {\r\n    requestAnimationFrame(animate);\r\n    _world_controls__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update();\r\n    Object(_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\n\n\n//# sourceURL=webpack:///./js/animate.js?");

/***/ }),

/***/ "./js/controllers/loadControllers.js":
/*!*******************************************!*\
  !*** ./js/controllers/loadControllers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _world_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../world/scene */ \"./js/world/scene.js\");\n/* eslint no-param-reassign: [\"error\", { \"props\": false }] */\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (modelInfo) {\r\n    const controllersDiv = document.querySelector('#controllers');\r\n    modelInfo.forEach((part) => {\r\n        controllersDiv.innerHTML += `\r\n            <label>\r\n                <input checked type=\"checkbox\" onchange=\"toggleShowPart('${part.name}', event)\"/>\r\n                <span>${part.name}</span>\r\n            </label>\r\n        `;\r\n    });\r\n});\r\n\r\nwindow.toggleShowPart = (name, e) => {\r\n    // const label = e.target.parentNode;\r\n    // const allInputs = Array.from(label.parentNode.querySelectorAll('input'));\r\n    // const isAllChecked = allInputs.every(el => el.checked === true);\r\n    // console.log(isAllChecked);\r\n    // if (isAllChecked) {\r\n    //     allInputs.forEach((el) => {\r\n    //         el.checked = false;\r\n    //     });\r\n    //     e.target.checked = true;\r\n    // }\r\n\r\n    // query the object by its name\r\n    const object = _world_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getObjectByName(name, true);\r\n    // toggle its opacity\r\n    if (e.target.checked === false) {\r\n        object.traverse((node) => {\r\n            if (node.material) {\r\n                node.material.opacity = 0.1;\r\n                node.material.transparent = true;\r\n            }\r\n        });\r\n    } else {\r\n        object.traverse((node) => {\r\n            if (node.material) {\r\n                node.material.opacity = 1;\r\n                node.material.transparent = true;\r\n            }\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./js/controllers/loadControllers.js?");

/***/ }),

/***/ "./js/events/onWindowResize.js":
/*!*************************************!*\
  !*** ./js/events/onWindowResize.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return onWindowResize; });\n/* harmony import */ var _world_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../world/renderer */ \"./js/world/renderer.js\");\n/* harmony import */ var _world_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../world/camera */ \"./js/world/camera.js\");\n\r\n\r\n\r\nfunction onWindowResize() {\r\n    _world_camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aspect = window.innerWidth / window.innerHeight;\r\n    _world_camera__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateProjectionMatrix();\r\n    _world_renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setSize(window.innerWidth, window.innerHeight);\r\n}\r\n\n\n//# sourceURL=webpack:///./js/events/onWindowResize.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./js/init.js\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate */ \"./js/animate.js\");\n\r\n\r\n\r\nObject(_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nObject(_animate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/init.js":
/*!********************!*\
  !*** ./js/init.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return init; });\n/* harmony import */ var _world_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world/scene */ \"./js/world/scene.js\");\n/* harmony import */ var _world_floor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world/floor */ \"./js/world/floor.js\");\n/* harmony import */ var _world_lights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world/lights */ \"./js/world/lights.js\");\n/* harmony import */ var _obj_loader_loadModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./obj-loader/loadModels */ \"./js/obj-loader/loadModels.js\");\n/* harmony import */ var _events_onWindowResize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/onWindowResize */ \"./js/events/onWindowResize.js\");\n/* harmony import */ var _controllers_loadControllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/loadControllers */ \"./js/controllers/loadControllers.js\");\n/* harmony import */ var _data_fungi_data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/fungi-data.json */ \"./data/fungi-data.json\");\nvar _data_fungi_data_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/fungi-data.json */ \"./data/fungi-data.json\", 1);\n/* harmony import */ var _loadModal_loadModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadModal/loadModal */ \"./js/loadModal/loadModal.js\");\n\r\n\r\n\r\n\r\n\r\n// import initGUI from './gui/init';\r\n\r\n\r\n\r\n\r\n// Get model name from url query\r\nconst params = new URL(document.location).searchParams;\r\nconst modelName = params.get('name');\r\nconst model = _data_fungi_data_json__WEBPACK_IMPORTED_MODULE_6__[modelName];\r\n\r\nfunction init() {\r\n    // If we don't have data for this fungus name, we will show error message!\r\n    if (!model) {\r\n        document.querySelector('.spinner-wrapper').style.display = 'none';\r\n        const noData = document.querySelector('.no-data-found');\r\n        if (modelName) {\r\n            noData.querySelector('b').innerText = modelName.replace('-', ' ');\r\n        } else {\r\n            noData.querySelector('h3').innerText = 'You have to choose fungus from fungi tree';\r\n        }\r\n        noData.style.display = 'block';\r\n        return; // no need for init() to continue\r\n    }\r\n\r\n    // Lights\r\n    _world_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(_world_lights__WEBPACK_IMPORTED_MODULE_2__[\"default\"].staticPointLight);\r\n    _world_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(_world_lights__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movingPointLight);\r\n\r\n    // Floor\r\n    _world_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(_world_floor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\r\n    // Load Model\r\n    Object(_obj_loader_loadModels__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(model.parts, _world_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n    // Load controllers\r\n    Object(_controllers_loadControllers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(model.parts);\r\n\r\n    // Load model modal\r\n    Object(_loadModal_loadModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({ ...model.info, name: model.name });\r\n\r\n    // Load model name\r\n    const loader = new window.THREE.FontLoader();\r\n    loader.load('../assets/fonts/helvetiker_regular.typeface.json', (font) => {\r\n        const geometry = new window.THREE.TextGeometry(model.name.split(' ').join('\\n'), {\r\n            font,\r\n            size: 1 / 3.1,\r\n            height: 0.01,\r\n        });\r\n        const materials = [\r\n            new window.THREE.MeshBasicMaterial({\r\n                color: 0x2206669,\r\n            }),\r\n            new window.THREE.MeshBasicMaterial({ color: 0x2206669 }),\r\n        ];\r\n        const name = new window.THREE.Mesh(geometry, materials);\r\n        name.rotation.x = Math.PI / -2;\r\n        name.position.x = -1.3;\r\n        name.position.y = 0;\r\n        name.position.z = -3.85;\r\n        window.f_name = name;\r\n\r\n        _world_scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(name);\r\n    });\r\n\r\n    // Arrows\r\n    // const ar = makeArrow(1, 2, 0);\r\n\r\n    // RESIZE IF NEEDED\r\n    window.addEventListener('resize', _events_onWindowResize__WEBPACK_IMPORTED_MODULE_4__[\"default\"], false);\r\n\r\n    // Init GUI\r\n    // initGUI();\r\n}\r\n\n\n//# sourceURL=webpack:///./js/init.js?");

/***/ }),

/***/ "./js/loadModal/loadModal.js":
/*!***********************************!*\
  !*** ./js/loadModal/loadModal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint prefer-destructuring: [\"error\", {VariableDeclarator: {object: true}}] */\r\n\r\nfunction extractHostname(url) {\r\n    let hostname;\r\n    if (url.indexOf('//') > -1) {\r\n        hostname = url.split('/')[2];\r\n    } else {\r\n        hostname = url.split('/')[0];\r\n    }\r\n\r\n    // find & remove port number\r\n    hostname = hostname.split(':')[0];\r\n    // find & remove \"?\"\r\n    hostname = hostname.split('?')[0];\r\n\r\n    return hostname;\r\n}\r\nfunction extractRootDomain(url) {\r\n    let domain = extractHostname(url);\r\n    const splitArr = domain.split('.');\r\n    const arrLen = splitArr.length;\r\n    if (arrLen > 2) {\r\n        domain = `${splitArr[arrLen - 2]}.${splitArr[arrLen - 1]}`;\r\n        if (splitArr[arrLen - 2].length === 2 && splitArr[arrLen - 1].length === 2) {\r\n            domain = `${splitArr[arrLen - 3]}.${domain}`;\r\n        }\r\n    }\r\n    return domain;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (info) {\r\n    const modalWrapper = document.querySelector('.modal');\r\n    modalWrapper.querySelector('h3').innerText = info.name || 'Fungs';\r\n    modalWrapper.querySelector('.body').innerHTML = info.body || '';\r\n\r\n    const sourceLink = modalWrapper.querySelector('a.source');\r\n    if (!info.source) {\r\n        sourceLink.style.display = 'none';\r\n    } else {\r\n        sourceLink.href = info.source;\r\n        sourceLink.innerText = `Source (${extractRootDomain(info.source)})`;\r\n    }\r\n});\r\n\r\n// Global modal handling\r\nwindow.openModal = () => {\r\n    const modal = document.querySelector('.modal');\r\n    const modalLayer = document.querySelector('.modal-overlay');\r\n    modal.style.display = 'block';\r\n    modalLayer.style.display = 'block';\r\n\r\n    modalLayer.style.opacity = 1;\r\n    setTimeout(() => {\r\n        modal.style.opacity = 1;\r\n    }, 250);\r\n};\r\nwindow.closeModal = () => {\r\n    const modal = document.querySelector('.modal');\r\n    const modalLayer = document.querySelector('.modal-overlay');\r\n    modal.style.display = 'none';\r\n    modalLayer.style.display = 'none';\r\n\r\n    modalLayer.style.opacity = 0;\r\n    modal.style.opacity = 0;\r\n};\r\n\n\n//# sourceURL=webpack:///./js/loadModal/loadModal.js?");

/***/ }),

/***/ "./js/obj-loader/loadModels.js":
/*!*************************************!*\
  !*** ./js/obj-loader/loadModels.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return loadModels; });\n/* harmony import */ var _onProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onProgress */ \"./js/obj-loader/onProgress.js\");\n/* harmony import */ var _onError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onError */ \"./js/obj-loader/onError.js\");\n/* harmony import */ var _utils_hexToRGB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hexToRGB */ \"./js/utils/hexToRGB.js\");\n/* eslint no-param-reassign: [\"error\", { \"props\": false }] */\r\n\r\n\r\n\r\n\r\n\r\n// Load model\r\nfunction loadModels(modelsArray, scene) {\r\n    // Hide spinner and show progress bar\r\n    document.querySelector('.spinner').style.display = 'none';\r\n    document.querySelector('.spinner + h3').style.display = 'none';\r\n    document.querySelector('.bar-wrapper').style.display = 'block';\r\n\r\n    // Loop the models\r\n    modelsArray.forEach((model) => {\r\n        // model\r\n        const loader = new window.THREE.OBJLoader();\r\n        loader.load(\r\n            model.url,\r\n            (object) => {\r\n                const defaultColor = model.name === 'Spors' ? '#574b90' : '#303952';\r\n                // Append color to model\r\n                object.traverse((child) => {\r\n                    if (child instanceof window.THREE.Mesh) {\r\n                        child.material.flatShading = true;\r\n                        if (model.color) {\r\n                            const { r, g, b } = Object(_utils_hexToRGB__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(model.color);\r\n                            child.material.color.setRGB(r / 255, g / 255, b / 255);\r\n                        } else {\r\n                            const { r, g, b } = Object(_utils_hexToRGB__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(defaultColor);\r\n                            child.material.color.setRGB(r / 255, g / 255, b / 255);\r\n                        }\r\n                    }\r\n                });\r\n\r\n                // the .obj files has a floor by default,\r\n                // so we hide it by moving it below the our floor\r\n                object.position.y = -0.001;\r\n                // to offset the model to the camera's center\r\n                // object.position.z = 0.5;\r\n\r\n                // Add name to the object so we can query it\r\n                object.name = model.name;\r\n\r\n                window.LoadedObjectInScreen = object;\r\n                // window.insect = object;\r\n                scene.add(object);\r\n            },\r\n            _onProgress__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n            _onError__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n        );\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/obj-loader/loadModels.js?");

/***/ }),

/***/ "./js/obj-loader/onError.js":
/*!**********************************!*\
  !*** ./js/obj-loader/onError.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return onError; });\nfunction onError(xhr) {\r\n    throw xhr;\r\n}\r\n\n\n//# sourceURL=webpack:///./js/obj-loader/onError.js?");

/***/ }),

/***/ "./js/obj-loader/onProgress.js":
/*!*************************************!*\
  !*** ./js/obj-loader/onProgress.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return onProgress; });\n/* harmony import */ var _utils_setProgressBarPercentage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setProgressBarPercentage */ \"./js/utils/setProgressBarPercentage.js\");\n\r\n\r\nfunction onProgress(xhr) {\r\n    if (xhr.lengthComputable) {\r\n        const percentComplete = (xhr.loaded / xhr.total) * 100;\r\n        Object(_utils_setProgressBarPercentage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Math.round(percentComplete, 2));\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/obj-loader/onProgress.js?");

/***/ }),

/***/ "./js/render.js":
/*!**********************!*\
  !*** ./js/render.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return render; });\n/* harmony import */ var _world_lights__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world/lights */ \"./js/world/lights.js\");\n/* harmony import */ var _world_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world/renderer */ \"./js/world/renderer.js\");\n/* harmony import */ var _world_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world/camera */ \"./js/world/camera.js\");\n/* harmony import */ var _world_scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./world/scene */ \"./js/world/scene.js\");\n\r\n\r\n\r\n\r\n\r\nfunction render() {\r\n    // Update the location of movingPointLight\r\n    _world_lights__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movingPointLight.position.x = _world_camera__WEBPACK_IMPORTED_MODULE_2__[\"default\"].position.x;\r\n    _world_lights__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movingPointLight.position.y = _world_camera__WEBPACK_IMPORTED_MODULE_2__[\"default\"].position.y;\r\n    _world_lights__WEBPACK_IMPORTED_MODULE_0__[\"default\"].movingPointLight.position.z = _world_camera__WEBPACK_IMPORTED_MODULE_2__[\"default\"].position.z;\r\n\r\n    // Update the location of staticPointLight\r\n    _world_lights__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticPointLight.position.x = _world_camera__WEBPACK_IMPORTED_MODULE_2__[\"default\"].position.x * -1;\r\n    _world_lights__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticPointLight.position.y = _world_camera__WEBPACK_IMPORTED_MODULE_2__[\"default\"].position.y * -1;\r\n    _world_lights__WEBPACK_IMPORTED_MODULE_0__[\"default\"].staticPointLight.position.z = _world_camera__WEBPACK_IMPORTED_MODULE_2__[\"default\"].position.z * -1;\r\n\r\n    _world_renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(_world_scene__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _world_camera__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n}\r\n\n\n//# sourceURL=webpack:///./js/render.js?");

/***/ }),

/***/ "./js/utils/hexToRGB.js":
/*!******************************!*\
  !*** ./js/utils/hexToRGB.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (hex) {\r\n    let c;\r\n    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {\r\n        c = hex.substring(1).split('');\r\n        if (c.length === 3) {\r\n            c = [c[0], c[0], c[1], c[1], c[2], c[2]];\r\n        }\r\n        c = `0x${c.join('')}`;\r\n        return {\r\n            r: (c >> 16) & 255,\r\n            g: (c >> 8) & 255,\r\n            b: c & 255,\r\n        };\r\n        // return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},1)`;\r\n    }\r\n    throw new Error('Bad Hex');\r\n});\r\n\n\n//# sourceURL=webpack:///./js/utils/hexToRGB.js?");

/***/ }),

/***/ "./js/utils/setProgressBarPercentage.js":
/*!**********************************************!*\
  !*** ./js/utils/setProgressBarPercentage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setProgressBarPercentage; });\nfunction setProgressBarPercentage(percent) {\r\n    document.querySelector('.progress-bar-wrapper .bar').style.width = `${percent}%`;\r\n    document.querySelector('.progress-bar-wrapper .number').innerHTML = `${percent}%`;\r\n    if (percent === 100) {\r\n        document.querySelector('.progress-bar-wrapper').style.opacity = 0;\r\n        setTimeout(() => {\r\n            document.querySelector('.progress-bar-wrapper').style.display = 'none';\r\n        }, 500);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/utils/setProgressBarPercentage.js?");

/***/ }),

/***/ "./js/world/camera.js":
/*!****************************!*\
  !*** ./js/world/camera.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// CAMERA\r\nconst camera = new window.THREE.PerspectiveCamera(\r\n    60,\r\n    window.innerWidth / window.innerHeight,\r\n    0.1,\r\n    1000,\r\n);\r\ncamera.position.set(8, 5, 9);\r\nwindow.camera = camera;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (camera);\r\n\n\n//# sourceURL=webpack:///./js/world/camera.js?");

/***/ }),

/***/ "./js/world/controls.js":
/*!******************************!*\
  !*** ./js/world/controls.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera */ \"./js/world/camera.js\");\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ \"./js/world/renderer.js\");\n\r\n\r\n\r\n// CONTROLS\r\nconst controls = new window.THREE.OrbitControls(_camera__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].domElement);\r\ncontrols.autoRotate = true;\r\ncontrols.autoRotateSpeed = 0;\r\ncontrols.enablePan = true;\r\ncontrols.enableDamping = true;\r\ncontrols.dampingFactor = 0.25;\r\ncontrols.screenSpacePanning = true;\r\n// controls.enableZoom = false;\r\n// controls.minDistance = 2;\r\n// controls.maxDistance = 10;\r\n// controls.maxPolarAngle = Math.PI / 2.2;\r\n\r\ncontrols.minPolarAngle = Math.PI / 4;\r\ncontrols.maxPolarAngle = Math.PI / 1.5;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (controls);\r\n\n\n//# sourceURL=webpack:///./js/world/controls.js?");

/***/ }),

/***/ "./js/world/floor.js":
/*!***************************!*\
  !*** ./js/world/floor.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// FLOOR\r\nconst floorWidth = 3;\r\nconst floorHeight = floorWidth * 2;\r\nconst floorThickness = 0.1;\r\nconst floorOffset = -1.5;\r\n\r\nconst planeGeometry = new window.THREE.PlaneGeometry(floorWidth, floorHeight / 4, 1, 1);\r\nconst planeMaterial = new window.THREE.MeshBasicMaterial({ color: 0xffffff });\r\nconst planeMesh = new window.THREE.Mesh(planeGeometry, planeMaterial);\r\nplaneMesh.material.side = window.THREE.DoubleSide;\r\nplaneMesh.rotation.x = Math.PI / 2;\r\nplaneMesh.position.y = -0.01;\r\nplaneMesh.position.z = -(floorHeight / 4) * 1.5 + floorOffset;\r\n\r\nconst galssGeometry = new window.THREE.BoxGeometry(floorWidth, floorHeight, floorThickness);\r\nconst material = new window.THREE.MeshLambertMaterial({\r\n    color: 0xffffff,\r\n    opacity: 0.3,\r\n    transparent: true,\r\n});\r\nconst floor = new window.THREE.Mesh(galssGeometry, material);\r\nfloor.material.side = window.THREE.DoubleSide;\r\nfloor.rotation.x = Math.PI / 2;\r\nfloor.position.y = -0.05;\r\nfloor.position.z = floorOffset;\r\n\r\nconst group = new window.THREE.Group();\r\ngroup.add(floor);\r\ngroup.add(planeMesh);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (group);\r\n\n\n//# sourceURL=webpack:///./js/world/floor.js?");

/***/ }),

/***/ "./js/world/lights.js":
/*!****************************!*\
  !*** ./js/world/lights.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// LIGHT #1 //0xfffef0\r\nconst movingPointLight = new window.THREE.PointLight(0xfffef0, 1.5, 0);\r\n\r\n// LIGHT #2\r\nconst staticPointLight = new window.THREE.PointLight(0xfffef0, 1.5, 0);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    movingPointLight,\r\n    staticPointLight,\r\n});\r\n\n\n//# sourceURL=webpack:///./js/world/lights.js?");

/***/ }),

/***/ "./js/world/renderer.js":
/*!******************************!*\
  !*** ./js/world/renderer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// RENDERER\r\nconst renderer = new window.THREE.WebGLRenderer({ antialias: true });\r\nrenderer.setPixelRatio(window.devicePixelRatio);\r\nrenderer.setSize(window.innerWidth, window.innerHeight);\r\ndocument.body.appendChild(renderer.domElement);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderer);\r\n\n\n//# sourceURL=webpack:///./js/world/renderer.js?");

/***/ }),

/***/ "./js/world/scene.js":
/*!***************************!*\
  !*** ./js/world/scene.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// SCENE\r\nconst scene = new window.THREE.Scene();\r\n\r\nconst bgFilename = '360-bg-texture-white.png';\r\n\r\nconst backgroundSphere = new window.THREE.Mesh(\r\n    new window.THREE.SphereGeometry(100, 30, 30),\r\n    new window.THREE.MeshBasicMaterial({\r\n        map: new window.THREE.TextureLoader().load(`../assets/img/${bgFilename}`),\r\n        side: window.THREE.DoubleSide,\r\n    }),\r\n);\r\nscene.add(backgroundSphere);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (scene);\r\n\n\n//# sourceURL=webpack:///./js/world/scene.js?");

/***/ })

/******/ });