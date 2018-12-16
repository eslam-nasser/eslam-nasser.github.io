// CAMERA
const camera = new window.THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
camera.position.set(0, 4, 1.7);
// camera.position.set(1, 0, 0);
window.camera = camera;

export default camera;
