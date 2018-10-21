import { WebGLRenderer } from '../../node_modules/three-full/builds/Three.es';

// RENDERER
const renderer = new WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

export default renderer;
