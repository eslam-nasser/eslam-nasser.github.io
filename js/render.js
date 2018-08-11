import lights from './world/lights';
import renderer from './world/renderer';
import camera from './world/camera';
import scene from './world/scene';

export default function render() {
    // Update the location of movingPointLight
    lights.movingPointLight.position.x = camera.position.x;
    lights.movingPointLight.position.y = camera.position.y;
    lights.movingPointLight.position.z = camera.position.z;

    // Update the location of staticPointLight
    lights.staticPointLight.position.x = camera.position.x * -1;
    lights.staticPointLight.position.y = camera.position.y * -1;
    lights.staticPointLight.position.z = camera.position.z * -1;

    renderer.render(scene, camera);
}
