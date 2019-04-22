import camera from './camera';
import renderer from './renderer';

// CONTROLS
const controls = new window.THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 0;
controls.enablePan = true;
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = true;
// controls.enableZoom = false;
controls.minDistance = 2;
controls.maxDistance = 30;
controls.minPolarAngle = Math.PI / 4;
controls.maxPolarAngle = Math.PI / 1.5;
controls.autoRotateSpeed = 0.7; // rotating the camera by default
controls.defaultAutoRotate = true;

// const zoom = controls.target.distanceTo(controls.object.position);

export default controls;
