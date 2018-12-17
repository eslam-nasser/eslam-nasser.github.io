// CAMERA
const camera = new window.THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
camera.position.set(8, 5, 9);
window.camera = camera;

export default camera;
