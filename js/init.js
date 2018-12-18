import scene from './world/scene';
import floor from './world/floor';
import lights from './world/lights';
import loadModels from './obj-loader/loadModels';
import onWindowResize from './events/onWindowResize';
import initGUI from './gui/init';
import loadControllers from './controllers/loadControllers';

const model1Info = {
    name: 'Phytophthora infestans',
    parts: [
        {
            name: 'Spors',
            url: '../assets/phytophthora-infestans/spors.obj',
        },
        {
            name: 'Hypha',
            url: '../assets/phytophthora-infestans/hypha.obj',
        },
    ],
};
const model2Info = {
    name: 'Penicillium',
    parts: [
        {
            name: 'Spors',
            url: '../assets/penicillium/spors.obj',
        },
        {
            name: 'Hypha',
            url: '../assets/penicillium/hypha.obj',
        },
    ],
};

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
    loadModels(model1Info.parts, scene);

    // Load controllers
    loadControllers(model1Info.parts);

    // Load model name

    // TEXT
    const loader = new window.THREE.FontLoader();

    loader.load('../assets/fonts/helvetiker_regular.typeface.json', (font) => {
        const geometry = new window.THREE.TextGeometry(model1Info.name.split(' ').join('\n'), {
            font,
            size: 1 / 2.2,
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
        name.position.x = -1.85;
        name.position.y = 0;
        name.position.z = -4.7;
        window.f_name = name;

        scene.add(name);
    });

    // Arrows
    // const ar = makeArrow(1, 2, 0);

    // RESIZE IF NEEDED
    window.addEventListener('resize', onWindowResize, false);

    // Init GUI
    initGUI();
}
