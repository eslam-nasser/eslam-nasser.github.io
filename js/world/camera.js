import { PerspectiveCamera } from '../../node_modules/three-full/builds/Three.es';
// CAMERA
const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 4, 1.7);

export default camera;
