// SCENE
const scene = new window.THREE.Scene();

const bgFilename = '360-bg-texture-orange.png';

const backgroundSphere = new window.THREE.Mesh(
    new window.THREE.SphereGeometry(100, 30, 30),
    new window.THREE.MeshBasicMaterial({
        map: new window.THREE.TextureLoader().load(`../assets/img/${bgFilename}`),
        side: window.THREE.DoubleSide,
    }),
);
scene.add(backgroundSphere);

// TEXT
const loader = new window.THREE.FontLoader();

loader.load('../assets/fonts/helvetiker_regular.typeface.json', (font) => {
    const geometry = new window.THREE.TextGeometry('Phytophthora \ninfestans', {
        font,
        size: 1 / 2.2,
        height: 0.01,
    });
    // geometry.computeBoundingBox();
    // const centerOffset = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

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

export default scene;
