import { GUI } from '../libs/dat.gui.min';

export default function initGUI() {
    const API = {
        'Show insect': true,
        'Show insect name': true,
        'Auto rotate camera': false,
    };
    const gui = new GUI();
    // gui.add(API, 'Show insect').onChange(() => {
    //     mesh.visible = API['Show insect'];
    // });
    // gui.add(API, 'Show insect name').onChange(() => {
    //     model_name.visible = API['Show insect name'];
    // });
    // gui.add(API, 'Auto rotate camera').onChange(() => {
    //     controls.autoRotateSpeed = API['Auto rotate camera'] ? 0.2 : 0;
    // });
}
