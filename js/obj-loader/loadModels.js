/* eslint no-param-reassign: ["error", { "props": false }] */

import onProgress from './onProgress';
import onError from './onError';

// Load model
export default function loadModels(modelsArray, scene) {
    // Hide spinner and show progress bar
    document.querySelector('.spinner').style.display = 'none';
    document.querySelector('.spinner + h3').style.display = 'none';
    document.querySelector('.bar-wrapper').style.display = 'block';

    // Loop the models
    modelsArray.forEach((model) => {
        // model
        const loader = new window.THREE.OBJLoader();
        loader.load(
            model.url,
            (object) => {
                // Load texture if the model has one
                // if (model.texture) {
                // Load the texture
                const textureLoader = new window.THREE.TextureLoader();
                const modelTexture = textureLoader.load(
                    model.texture ? model.texture : '../assets/img/1.jpg',
                );
                // Append texture to its model
                object.traverse((child) => {
                    if (child instanceof window.THREE.Mesh) {
                        child.material.map = modelTexture;
                    }
                });
                // } else {
                //     // TODO: add a default texture
                //     // console.log('default material');
                //     const material = new window.THREE.MeshStandardMaterial({
                //         metalness: 0.2,
                //         roughness: 0,
                //     });
                //     // Append texture to its model
                //     object.traverse((child) => {
                //         if (child instanceof window.THREE.Mesh) {
                //             child.material = material;
                //         }
                //     });
                // }
                // the .obj files has a floor by default,
                // so we hide it by moving it below the our floor
                object.position.y = -0.001;
                // to offset the model to the camera's center
                // object.position.z = 0.5;
                window.LoadedObjectInScreen = object;
                // window.insect = object;
                scene.add(object);
            },
            onProgress,
            onError,
        );
    });
}
