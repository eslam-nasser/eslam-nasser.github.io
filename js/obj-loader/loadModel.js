import { TextureLoader, Mesh, OBJLoader } from 'three-full';
import onProgress from './onProgress';
import onError from './onError';

// Load model
export default function loadModel(modelUrl, textureUrl, scene) {
    const textureLoader = new TextureLoader();
    const modelTexture = textureLoader.load(textureUrl);
    // model
    const loader = new OBJLoader();
    loader.load(
        modelUrl,
        (object) => {
            /* eslint no-param-reassign: ["error", { "props": false }] */
            object.traverse((child) => {
                if (child instanceof Mesh) {
                    child.material.map = modelTexture;
                }
            });
            // the .obj has a floor by default, so we hide it by moving it below the our floor
            object.position.y = -0.001;
            // to offset the model to the camera's center
            object.position.z = 0.5;
            window.insect = object;
            scene.add(object);
        },
        onProgress,
        onError,
    );
}
