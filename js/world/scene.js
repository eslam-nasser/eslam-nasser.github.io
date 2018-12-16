// SCENE
const fogColor = new window.THREE.Color(0xe3deda);
const scene = new window.THREE.Scene();
scene.background = fogColor;
scene.fog = new window.THREE.Fog(fogColor, 0.0025, 20);

export default scene;
