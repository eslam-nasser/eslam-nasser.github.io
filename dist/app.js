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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./js/world/scene.js
// SCENE
const scene_scene = new window.THREE.Scene();

const bgFilename = '360-bg-texture-white.png';

const backgroundSphere = new window.THREE.Mesh(
    new window.THREE.SphereGeometry(100, 30, 30),
    new window.THREE.MeshBasicMaterial({
        map: new window.THREE.TextureLoader().load(`../assets/img/${bgFilename}`),
        side: window.THREE.DoubleSide,
    }),
);
scene_scene.add(backgroundSphere);

/* harmony default export */ var world_scene = (scene_scene);

// CONCATENATED MODULE: ./js/world/floor.js
// FLOOR
const floorWidth = 3;
const floorHeight = floorWidth * 2;
const floorThickness = 0.1;
const floorOffset = -1.5;
const floorYOffset = -1.5;

const planeGeometry = new window.THREE.PlaneGeometry(floorWidth, floorHeight / 4, 1, 1);
const planeMaterial = new window.THREE.MeshBasicMaterial({ color: 0xffffff });
const planeMesh = new window.THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.material.side = window.THREE.DoubleSide;
planeMesh.rotation.x = Math.PI / 2;
planeMesh.position.y = -0.01 + floorYOffset;
planeMesh.position.z = -(floorHeight / 4) * 1.5 + floorOffset;

const galssGeometry = new window.THREE.BoxGeometry(floorWidth, floorHeight, floorThickness);
const material = new window.THREE.MeshLambertMaterial({
    color: 0xffffff,
    opacity: 0.3,
    transparent: true,
});
const floor = new window.THREE.Mesh(galssGeometry, material);
floor.material.side = window.THREE.DoubleSide;
floor.rotation.x = Math.PI / 2;
floor.position.y = -0.05 + floorYOffset;
floor.position.z = floorOffset;

const group = new window.THREE.Group();
group.add(floor);
group.add(planeMesh);

/* harmony default export */ var world_floor = (group);

// CONCATENATED MODULE: ./js/world/lights.js
// LIGHT #1 //0xfffef0
const movingPointLight = new window.THREE.PointLight(0xfffef0, 1.5, 0);

// LIGHT #2
const staticPointLight = new window.THREE.PointLight(0xfffef0, 1.5, 0);

/* harmony default export */ var lights = ({
    movingPointLight,
    staticPointLight,
});

// CONCATENATED MODULE: ./js/utils/setProgressBarPercentage.js
function setProgressBarPercentage(percent) {
    document.querySelector('.progress-bar-wrapper .bar').style.width = `${percent}%`;
    document.querySelector('.progress-bar-wrapper .number').innerHTML = `${percent}%`;
    if (percent === 100) {
        document.querySelector('.progress-bar-wrapper').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('.progress-bar-wrapper').style.display = 'none';
        }, 500);
    }
}

// CONCATENATED MODULE: ./js/obj-loader/onProgress.js


function onProgress(xhr) {
    if (xhr.lengthComputable) {
        const percentComplete = (xhr.loaded / xhr.total) * 100;
        setProgressBarPercentage(Math.round(percentComplete, 2));
    }
}

// CONCATENATED MODULE: ./js/obj-loader/onError.js
function onError(xhr) {
    throw xhr;
}

// CONCATENATED MODULE: ./js/utils/hexToRGB.js
/* harmony default export */ var hexToRGB = (function (hex) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = `0x${c.join('')}`;
        return {
            r: (c >> 16) & 255,
            g: (c >> 8) & 255,
            b: c & 255,
        };
        // return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},1)`;
    }
    throw new Error('Bad Hex');
});

// CONCATENATED MODULE: ./js/obj-loader/loadModels.js
/* eslint no-param-reassign: ["error", { "props": false }] */





// Load model
function loadModels(modelsArray, scene) {
    // Hide spinner and show progress bar
    document.querySelector('.spinner').style.display = 'none';
    document.querySelector('.spinner + h3').style.display = 'none';
    document.querySelector('.bar-wrapper').style.display = 'block';

    // Loop the models
    modelsArray.forEach((model) => {
        // model
        const loader = new window.THREE.OBJLoader();
        loader.load(
            model.url,
            (object) => {
                const defaultColor = model.name === 'Spors' ? '#574b90' : '#303952';
                // Append color to model
                object.traverse((child) => {
                    if (child instanceof window.THREE.Mesh) {
                        child.material.flatShading = true;
                        if (model.color) {
                            const { r, g, b } = hexToRGB(model.color);
                            child.material.color.setRGB(r / 255, g / 255, b / 255);
                        } else {
                            const { r, g, b } = hexToRGB(defaultColor);
                            child.material.color.setRGB(r / 255, g / 255, b / 255);
                        }
                    }
                });

                // the .obj files has a floor by default,
                // so we hide it by moving it below the our floor
                // const box = new window.THREE.Box3().setFromObject(object);
                // console.log(box.min, box.max, box.getSize());

                object.position.y = -1.5;

                // Add name to the object so we can query it
                object.name = model.name;

                window.LoadedObjectInScreen = object;
                // window.insect = object;
                scene.add(object);
            },
            onProgress,
            onError,
        );
    });
}

// CONCATENATED MODULE: ./js/world/renderer.js
// RENDERER
const renderer = new window.THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* harmony default export */ var world_renderer = (renderer);

// CONCATENATED MODULE: ./js/world/camera.js
// CAMERA
const camera = new window.THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
camera.position.set(8, 5, 9);
window.camera = camera;

/* harmony default export */ var world_camera = (camera);

// CONCATENATED MODULE: ./js/events/onWindowResize.js



function onWindowResize() {
    world_camera.aspect = window.innerWidth / window.innerHeight;
    world_camera.updateProjectionMatrix();
    world_renderer.setSize(window.innerWidth, window.innerHeight);
}

// CONCATENATED MODULE: ./js/controllers/loadControllers.js
/* eslint no-param-reassign: ["error", { "props": false }] */


/* harmony default export */ var loadControllers = (function (modelInfo) {
    const controllersDiv = document.querySelector('#controllers');
    modelInfo.forEach((part) => {
        controllersDiv.innerHTML += `
            <label>
                <input checked type="checkbox" onchange="toggleShowPart('${part.name}', event)"/>
                <span>${part.name}</span>
            </label>
        `;
    });
});

window.toggleShowPart = (name, e) => {
    // const label = e.target.parentNode;
    // const allInputs = Array.from(label.parentNode.querySelectorAll('input'));
    // const isAllChecked = allInputs.every(el => el.checked === true);
    // console.log(isAllChecked);
    // if (isAllChecked) {
    //     allInputs.forEach((el) => {
    //         el.checked = false;
    //     });
    //     e.target.checked = true;
    // }

    // query the object by its name
    const object = world_scene.getObjectByName(name, true);
    // toggle its opacity
    if (e.target.checked === false) {
        object.traverse((node) => {
            if (node.material) {
                node.material.opacity = 0.1;
                node.material.transparent = true;
            }
        });
    } else {
        object.traverse((node) => {
            if (node.material) {
                node.material.opacity = 1;
                node.material.transparent = true;
            }
        });
    }
};

// EXTERNAL MODULE: ./data/fungi-data.json
var fungi_data = __webpack_require__(2);

// CONCATENATED MODULE: ./js/loadModal/loadModal.js
/* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */

function extractHostname(url) {
    let hostname;
    if (url.indexOf('//') > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }

    // find & remove port number
    hostname = hostname.split(':')[0];
    // find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}
function extractRootDomain(url) {
    let domain = extractHostname(url);
    const splitArr = domain.split('.');
    const arrLen = splitArr.length;
    if (arrLen > 2) {
        domain = `${splitArr[arrLen - 2]}.${splitArr[arrLen - 1]}`;
        if (splitArr[arrLen - 2].length === 2 && splitArr[arrLen - 1].length === 2) {
            domain = `${splitArr[arrLen - 3]}.${domain}`;
        }
    }
    return domain;
}

/* harmony default export */ var loadModal = (function (info) {
    const modalWrapper = document.querySelector('.modal');
    modalWrapper.querySelector('h3').innerText = info.name || 'Fungs';
    modalWrapper.querySelector('.body').innerHTML = info.body || '';

    const sourceLink = modalWrapper.querySelector('a.source');
    if (!info.source) {
        sourceLink.style.display = 'none';
    } else {
        sourceLink.href = info.source;
        sourceLink.innerText = `Source (${extractRootDomain(info.source)})`;
    }
});

// Global modal handling
window.openModal = () => {
    const modal = document.querySelector('.modal');
    const modalLayer = document.querySelector('.modal-overlay');
    modal.style.display = 'block';
    modalLayer.style.display = 'block';

    modalLayer.style.opacity = 1;
    setTimeout(() => {
        modal.style.opacity = 1;
    }, 250);
};
window.closeModal = () => {
    const modal = document.querySelector('.modal');
    const modalLayer = document.querySelector('.modal-overlay');
    modal.style.display = 'none';
    modalLayer.style.display = 'none';

    modalLayer.style.opacity = 0;
    modal.style.opacity = 0;
};

// CONCATENATED MODULE: ./js/init.js





// import initGUI from './gui/init';




// Get model name from url query
const params = new URL(document.location).searchParams;
const modelName = params.get('name');
const init_model = fungi_data[modelName];

function init() {
    // If we don't have data for this fungus name, we will show error message!
    if (!init_model) {
        document.querySelector('.spinner-wrapper').style.display = 'none';
        const noData = document.querySelector('.no-data-found');
        if (modelName) {
            noData.querySelector('b').innerText = modelName.replace('-', ' ');
        } else {
            noData.querySelector('h3').innerText = 'You have to choose fungus from fungi tree';
        }
        noData.style.display = 'block';
        return; // no need for init() to continue
    }

    // Lights
    world_scene.add(lights.staticPointLight);
    world_scene.add(lights.movingPointLight);

    // Floor
    world_scene.add(world_floor);

    // Load Model
    loadModels(init_model.parts, world_scene);

    // Load controllers
    loadControllers(init_model.parts);

    // Load model modal
    loadModal({ ...init_model.info, name: init_model.name });

    // Load model name
    document.title = document.title.replace('Fungs', init_model.name);
    const loader = new window.THREE.FontLoader();
    loader.load('../assets/fonts/helvetiker_regular.typeface.json', (font) => {
        const geometry = new window.THREE.TextGeometry(init_model.name.split(' ').join('\n'), {
            font,
            size: 1 / 3.1,
            height: 0.01,
        });
        const materials = [
            new window.THREE.MeshBasicMaterial({
                color: 0x2206669,
            }),
            new window.THREE.MeshBasicMaterial({ color: 0x2206669 }),
        ];
        const name = new window.THREE.Mesh(geometry, materials);
        name.rotation.x = Math.PI / -2;
        name.position.x = -1.3;
        name.position.y = 0 + -1.5; // camera offset
        name.position.z = -3.85;

        world_scene.add(name);
    });

    // RESIZE IF NEEDED
    window.addEventListener('resize', onWindowResize, false);

    // Init GUI
    // initGUI();
}

// CONCATENATED MODULE: ./js/world/controls.js



// CONTROLS
const controls = new window.THREE.OrbitControls(world_camera, world_renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 0;
controls.enablePan = true;
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = true;
// controls.enableZoom = false;
// controls.minDistance = 2;
// controls.maxDistance = 10;
// controls.maxPolarAngle = Math.PI / 2.2;

controls.minPolarAngle = Math.PI / 4;
controls.maxPolarAngle = Math.PI / 1.5;

/* harmony default export */ var world_controls = (controls);

// CONCATENATED MODULE: ./js/render.js





function render() {
    // Update the location of movingPointLight
    lights.movingPointLight.position.x = world_camera.position.x;
    lights.movingPointLight.position.y = world_camera.position.y;
    lights.movingPointLight.position.z = world_camera.position.z;

    // Update the location of staticPointLight
    lights.staticPointLight.position.x = world_camera.position.x * -1;
    lights.staticPointLight.position.y = world_camera.position.y * -1;
    lights.staticPointLight.position.z = world_camera.position.z * -1;

    world_renderer.render(world_scene, world_camera);
}

// CONCATENATED MODULE: ./js/animate.js



function animate() {
    requestAnimationFrame(animate);
    world_controls.update();
    render();
}

// CONCATENATED MODULE: ./js/index.js



init();
animate();


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module) {

module.exports = {"phytophthora-infestans":{"name":"Phytophthora infestans","parts":[{"name":"Spors","url":"../assets/phytophthora-infestans/spors.obj","color":"#574b90"},{"name":"Hypha","url":"../assets/phytophthora-infestans/hypha.obj","color":"#303952"}],"info":{"body":"<p>The asexual life cycle of <em>Phytophthora infestans</em> is characterized by alternating phases of <a href=\"https://en.wikipedia.org/wiki/Hypha\" target=\"_blank\">hyphal</a> growth, sporulation, sporangia germination (either through <a href=\"https://en.wikipedia.org/wiki/Zoospore\" target=\"_blank\">zoospore</a> release or direct germination, i.e. germ tube emergence from the <a href=\"https://en.wikipedia.org/wiki/Sporangium\" target=\"_blank\">sporangium</a>), and the re-establishment of hyphal growth.<a href=\"https://en.wikipedia.org/wiki/Phytophthora_infestans#cite_note-VCRB2012b-5\" target=\"_blank\"><sup>[5]</sup></a> There is also a sexual cycle, which occurs when isolates of opposite <a href=\"https://en.wikipedia.org/wiki/Mating_type\" target=\"_blank\">mating type</a> (A1 and A2) meet. Hormonal communication triggers the formation of the sexual <a href=\"https://en.wikipedia.org/wiki/Spore\" target=\"_blank\">spores</a>, called <a href=\"https://en.wikipedia.org/wiki/Oospore\" target=\"_blank\">oospores</a>.<a href=\"https://en.wikipedia.org/wiki/Phytophthora_infestans#cite_note-6\" target=\"_blank\"><sup>[6]</sup></a>&nbsp;</p>\r\n\r\n<p>\r\n\t<br>\r\n</p>\r\n\r\n<p>The different types of spores play major roles in the dissemination and survival of <em>P. infestans.</em> Sporangia are spread by wind or water and enable the movement of <em>P. infestans</em> between different <a href=\"https://en.wikipedia.org/wiki/Host_(biology)\" target=\"_blank\">host</a> plants. The zoospores released from sporangia are <a href=\"https://en.wikipedia.org/wiki/Biflagellate\" target=\"_blank\">biflagellated</a> and <a href=\"https://en.wikipedia.org/wiki/Chemotactic\" target=\"_blank\">chemotactic</a>, allowing further movement of <em>P. infestans</em> on water films found on leaves or soils. Both sporangia and zoospores are short-lived, in contrast to oospores which can persist in a viable form for many years.</p>\r\n","source":"https://en.wikipedia.org/wiki/Phytophthora_infestans"}},"penicillium":{"name":"Penicillium","parts":[{"name":"Spors","url":"../assets/penicillium/spors.obj"},{"name":"Hypha","url":"../assets/penicillium/hypha.obj"}]},"ustilago":{"name":"Ustilago","parts":[{"name":"Spors","url":"../assets/ustilago/spors.obj"}]}};

/***/ })
/******/ ]);