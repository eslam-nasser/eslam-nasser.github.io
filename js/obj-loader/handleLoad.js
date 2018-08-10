import scene from '../world/scene';

export default function handleLoad(geometry) {
    // Create the model with its texture
    // const model_texture = new THREE.TextureLoader().load(`./model/texture.jpg`);
    // const model_material = new THREE.MeshPhongMaterial({ map: model_texture });

    // mesh = new THREE.Mesh(geometry, model_material);
    // objects.push(mesh);
    scene.add(geometry);
    // mesh.position.z = 0.5; // to offset the model to the camera's center
}
