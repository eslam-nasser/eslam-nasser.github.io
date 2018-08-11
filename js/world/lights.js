import { PointLight } from 'three-full';

// LIGHT #1
const movingPointLight = new PointLight(0xfffef0, 2, 100000);

// LIGHT #2
const staticPointLight = new PointLight(0xfffef0, 2, 100000);

export default {
    movingPointLight,
    staticPointLight,
};
