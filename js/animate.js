export default function animate(render, controls) {
    requestAnimationFrame(animate);
    controls.update();
    render();
}
