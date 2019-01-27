/* eslint no-param-reassign: ["error", { "props": false }] */
import camera from './world/camera';
import scene from './world/scene';
import controls from './world/controls';

window.resetCamera = () => {
    camera.position.set(8, 5, 9);
    controls.reset();
};

window.toggleShowPart = (name, e) => {
    // query the object by its name
    const object = scene.getObjectByName(name, true);
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

window.onmousedown = () => {
    if (controls.defaultAutoRotate) {
        controls.autoRotateSpeed = 0;
        controls.defaultAutoRotate = false;
    }
};
