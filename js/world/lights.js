import { PointLight } from '../../node_modules/three-full/builds/Three.es';

// LIGHT #1
const movingPointLight = new PointLight(0xfffef0, 2, 100000);

// LIGHT #2
const staticPointLight = new PointLight(0xfffef0, 2, 100000);

export default {
    movingPointLight,
    staticPointLight,
};
