/* eslint no-param-reassign: ["error", { "props": false }] */

import { GUI } from '../libs/dat.gui.min';
import controls from '../world/controls';
import scene from '../world/scene';
import hexToRGB from '../utils/hexToRGB';

export default function initGUI(modelParts) {
    const API = {
        'Camera Poistion X': true,
        'Camera Poistion Y': true,
        'Camera Poistion Z': true,
        'Auto rotate camera': false,
    };

    // const CameraPositon = {
    //     x: window.camera.position.x,
    //     y: window.camera.position.y,
    //     z: window.camera.position.z,
    // };
    const gui = new GUI({
        closed: true,
        useLocalStorage: true,
    });
    gui.addFolder('Camera Position');
    // gui.add(CameraPositon, 'x', 0, 10).onChange((value) => {
    //     window.camera.position.x = value;
    // });
    // gui.add(CameraPositon, 'y', 0, 10).onChange((value) => {
    //     window.camera.position.y = value;
    // });
    // gui.add(CameraPositon, 'z', 0, 10).onChange((value) => {
    //     window.camera.position.z = value;
    // });

    const colors = {};
    modelParts.forEach(({ name, color }) => {
        colors[name] = color || '#000';
    });

    Object.keys(colors).forEach((key) => {
        gui.addColor(colors, key).onChange((e) => {
            const object = scene.getObjectByName(key, true);
            object.traverse((node) => {
                if (node instanceof window.THREE.Mesh) {
                    const { r, g, b } = hexToRGB(e);
                    node.material.color.setRGB(r / 255, g / 255, b / 255);
                }
            });
        });
    });

    gui.add(API, 'Auto rotate camera').onChange(() => {
        controls.autoRotateSpeed = API['Auto rotate camera'] ? 0.35 : 0;
    });

    gui.close();
}
