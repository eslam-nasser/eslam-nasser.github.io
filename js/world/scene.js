import { Color, Scene, Fog } from 'three-full';

// SCENE
const fogColor = new Color(0xe3deda);
const scene = new Scene();
scene.background = fogColor;
scene.fog = new Fog(fogColor, 0.0025, 20);

export default scene;
