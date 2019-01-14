// CAMERA
const camera = new window.THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
camera.position.set(8, 5, 9);
// 5.5 4.4 2.3
window.camera = camera;

export default camera;
