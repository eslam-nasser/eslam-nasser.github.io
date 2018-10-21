import { OrbitControls } from '../../node_modules/three-full/builds/Three.es';

import camera from './camera';
import renderer from './renderer';

// CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.enablePan = false;
controls.autoRotateSpeed = 0;
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.minDistance = 2;
controls.maxDistance = 10;
controls.maxPolarAngle = Math.PI / 2.2;

export default controls;
