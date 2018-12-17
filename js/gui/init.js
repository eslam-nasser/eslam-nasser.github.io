import { GUI } from '../libs/dat.gui.min';
import controls from '../world/controls';

export default function initGUI() {
    const API = {
        'Camera Poistion X': true,
        'Camera Poistion Y': true,
        'Camera Poistion Z': true,
        'Auto rotate camera': false,
    };
    const CameraPositon = {
        x: window.camera.position.x,
        y: window.camera.position.y,
        z: window.camera.position.z,
    };
    const gui = new GUI({
        closed: true,
        useLocalStorage: true,
    });
    gui.addFolder('Camera Position');

    gui.add(CameraPositon, 'x', 0, 10).onChange((value) => {
        window.camera.position.x = value;
    });
    gui.add(CameraPositon, 'y', 0, 10).onChange((value) => {
        window.camera.position.y = value;
    });
    gui.add(CameraPositon, 'z', 0, 10).onChange((value) => {
        window.camera.position.z = value;
    });
    gui.add(API, 'Auto rotate camera').onChange(() => {
        controls.autoRotateSpeed = API['Auto rotate camera'] ? 0.2 : 0;
    });

    gui.close();
}
