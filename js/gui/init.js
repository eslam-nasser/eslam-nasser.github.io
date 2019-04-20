/* eslint no-param-reassign: ["error", { "props": false }] */

import { GUI } from '../libs/dat.gui.min';
import controls from '../world/controls';
import scene from '../world/scene';
import hexToRGB from '../utils/hexToRGB';
// import ArNames from '../../data/fungi-parts-ar-names';

export default function initGUI(modelParts) {
    const API = {
        'Camera Poistion X': true,
        'Camera Poistion Y': true,
        'Camera Poistion Z': true,
        'Auto rotate camera': false,
        'Show glass slide': true,
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

    gui.add(API, 'Show glass slide').onChange((state) => {
        // query the object by its name
        const floor = scene.getObjectByName('floor', true);
        const modelName = scene.getObjectByName('model-name', true);
        const whitePaper = scene.getObjectByName('white-paper', true);

        // toggle its opacity
        if (state === false) {
            floor.traverse((node) => {
                if (node.material) {
                    node.material.opacity = 0;
                    node.material.transparent = true;
                }
            });
            modelName.traverse((node) => {
                if (node.material) {
                    node.position.y = -100;
                }
            });
            whitePaper.traverse((node) => {
                if (node.material) {
                    node.material.opacity = 0;
                    node.material.transparent = true;
                }
            });
        } else {
            floor.traverse((node) => {
                if (node.material) {
                    node.material.opacity = 0.3;
                    node.material.transparent = true;
                }
            });
            modelName.traverse((node) => {
                if (node.material) {
                    node.position.y = -1.5;
                }
            });
            whitePaper.traverse((node) => {
                if (node.material) {
                    node.material.opacity = 1;
                    node.material.transparent = true;
                }
            });
        }
    });

    gui.add(API, 'Auto rotate camera').onChange(() => {
        controls.autoRotateSpeed = API['Auto rotate camera'] ? 0.7 : 0;
    });

    // gui.add(CameraPositon, 'x', 0, 10).onChange((value) => {
    //     window.camera.position.x = value;
    // });
    // gui.add(CameraPositon, 'y', 0, 10).onChange((value) => {
    //     window.camera.position.y = value;
    // });
    // gui.add(CameraPositon, 'z', 0, 10).onChange((value) => {
    //     window.camera.position.z = value;
    // });

    const coloredParts = {};
    modelParts.forEach(({ name, color }) => {
        coloredParts[name] = color || '#000';
    });

    Object.keys(coloredParts).forEach((key) => {
        gui.addColor(coloredParts, key).onChange((e) => {
            const object = scene.getObjectByName(key, true);
            object.traverse((node) => {
                if (node instanceof window.THREE.Mesh) {
                    const { r, g, b } = hexToRGB(e);
                    node.material.color.setRGB(r / 255, g / 255, b / 255);
                }
            });
        });
    });

    setTimeout(() => {
        // gui.close();
    }, 3000);
}
