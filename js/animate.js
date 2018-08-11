import controls from './world/controls';
import render from './render';

export default function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render();
}
