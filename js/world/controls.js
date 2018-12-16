import camera from './camera';
import renderer from './renderer';

// CONTROLS
const controls = new window.THREE.OrbitControls(camera, renderer.domElement);
// controls.autoRotate = true;
// controls.autoRotateSpeed = 0;
controls.enablePan = true;
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = true;
controls.minDistance = 2;
controls.maxDistance = 10;
controls.maxPolarAngle = Math.PI / 2.2;

export default controls;
