import { GUI } from '../libs/dat.gui.min';
import controls from '../world/controls';

export default function initGUI() {
    const API = {
        'Show insect': true,
        'Show insect name': true,
        'Auto rotate camera': false,
    };
    const gui = new GUI({
        closed: true,
        useLocalStorage: true,
    });
    // gui.addFolder('Flow Field');
    gui.add(API, 'Show insect').onChange(() => {
        window.insect.visible = API['Show insect'];
    });
    gui.add(API, 'Show insect name').onChange(() => {
        document.querySelector('.info').style.display = API['Show insect name'] ? 'block' : 'none';
    });
    gui.add(API, 'Auto rotate camera').onChange(() => {
        controls.autoRotateSpeed = API['Auto rotate camera'] ? 0.2 : 0;
    });

    gui.close();
}
