import scene from './world/scene';
import floor from './world/floor';
import lights from './world/lights';
import loadModels from './obj-loader/loadModels';
import onWindowResize from './events/onWindowResize';
import initGUI from './gui/init';
import loadControllers from './controllers/loadControllers';

const modelInfo = [
    {
        name: 'Spors',
        url: '../assets/phytophthora-infestans/spors.obj',
    },
    {
        name: 'Hypha',
        url: '../assets/phytophthora-infestans/hypha.obj',
    },
];

// TODO: MAKE ARROWS DYNAMIC
function makeArrow(x, y, z) {
    const dir = new window.THREE.Vector3(x, y, z);
    dir.normalize();
    const origin = new window.THREE.Vector3(0, 0, 0);
    const length = 1;
    const hex = 0x000000;
    const arrowHelper = new window.THREE.ArrowHelper(dir, origin, length, hex);
    window.ar = arrowHelper;

    scene.add(arrowHelper);
    return arrowHelper;
}
window.makeArrow = makeArrow;

export default function init() {
    // Lights
    scene.add(lights.staticPointLight);
    scene.add(lights.movingPointLight);

    // Floor
    scene.add(floor);

    // Load Model
    loadModels(modelInfo, scene);

    // Load controllers
    loadControllers(modelInfo);

    // Arrows
    // const ar = makeArrow(1, 2, 0);

    // RESIZE IF NEEDED
    window.addEventListener('resize', onWindowResize, false);

    // Init GUI
    initGUI();
}
