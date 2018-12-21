import scene from './world/scene';
import floor from './world/floor';
import lights from './world/lights';
import loadModels from './obj-loader/loadModels';
import onWindowResize from './events/onWindowResize';
// import initGUI from './gui/init';
import loadControllers from './controllers/loadControllers';
import data from '../data/fungi-data.json';
import loadModal from './loadModal/loadModal';

// Get model name from url query
const params = new URL(document.location).searchParams;
const modelName = params.get('name');
const model = data[modelName];

export default function init() {
    // If we don't have data for this fungus name, we will show error message!
    if (!model) {
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
    scene.add(lights.staticPointLight);
    scene.add(lights.movingPointLight);

    // Floor
    scene.add(floor);

    // Load Model
    loadModels(model.parts, scene);

    // Load controllers
    loadControllers(model.parts);

    // Load model modal
    loadModal({ ...model.info, name: model.name });

    // Load model name
    const loader = new window.THREE.FontLoader();
    loader.load('../assets/fonts/helvetiker_regular.typeface.json', (font) => {
        const geometry = new window.THREE.TextGeometry(model.name.split(' ').join('\n'), {
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
    // initGUI();
}
