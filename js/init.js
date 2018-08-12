import scene from './world/scene';

import floor from './world/floor';
import lights from './world/lights';
import loadModel from './obj-loader/loadModel';
import onWindowResize from './events/onWindowResize';
import initGUI from './gui/init';

export default function init() {
    // Lights
    scene.add(lights.staticPointLight);
    scene.add(lights.movingPointLight);

    // Floor
    scene.add(floor);

    // Load Model
    loadModel('../assets/model/formica-rufa.obj', '../assets/model/texture.jpg', scene);

    // RESIZE IF NEEDED
    window.addEventListener('resize', onWindowResize, false);

    // Init GUI
    initGUI();
}
