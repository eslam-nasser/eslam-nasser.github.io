// SCENE
const scene = new window.THREE.Scene();

const bgFilename = '360-bg-texture-white.png';

const backgroundSphere = new window.THREE.Mesh(
    new window.THREE.SphereGeometry(100, 30, 30),
    new window.THREE.MeshBasicMaterial({
        map: new window.THREE.TextureLoader().load(
            `./assets/img/${bgFilename}`
        ),
        side: window.THREE.DoubleSide
    })
);
scene.add(backgroundSphere);

export default scene;
