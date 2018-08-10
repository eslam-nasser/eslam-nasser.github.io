import lights from './world/lights';
import renderer from './world/renderer';
import camera from './world/camera';
import scene from './world/scene';

export default function render() {
    // Update the location of moving_pointLight
    lights.moving_pointLight.position.x = camera.position.x;
    lights.moving_pointLight.position.y = camera.position.y;
    lights.moving_pointLight.position.z = camera.position.z;

    // Update the location of static_pointLight
    lights.static_pointLight.position.x = camera.position.x * -1;
    lights.static_pointLight.position.y = camera.position.y * -1;
    lights.static_pointLight.position.z = camera.position.z * -1;

    renderer.render(scene, camera);
}
