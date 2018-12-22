/* eslint no-param-reassign: ["error", { "props": false }] */

import onProgress from './onProgress';
import onError from './onError';
import hexToRGB from '../utils/hexToRGB';

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
                const defaultColor = model.name === 'Spors' ? '#574b90' : '#303952';
                // Append color to model
                object.traverse((child) => {
                    if (child instanceof window.THREE.Mesh) {
                        child.material.flatShading = true;
                        if (model.color) {
                            const { r, g, b } = hexToRGB(model.color);
                            child.material.color.setRGB(r / 255, g / 255, b / 255);
                        } else {
                            const { r, g, b } = hexToRGB(defaultColor);
                            child.material.color.setRGB(r / 255, g / 255, b / 255);
                        }
                    }
                });

                // the .obj files has a floor by default,
                // so we hide it by moving it below the our floor
                object.position.y = -0.001;
                // to offset the model to the camera's center
                // object.position.z = 0.5;

                // Add name to the object so we can query it
                object.name = model.name;

                window.LoadedObjectInScreen = object;
                // window.insect = object;
                scene.add(object);
            },
            onProgress,
            onError,
        );
    });
}
