// import * as Three from '../libs/three.min';
// import * as OBJLoader from '../libs/OBJLoader';
import onProgress from './onProgress';
import onError from './onError';
import { TextureLoader, Mesh, OBJLoader } from '../libs/three.min';

// Load model
export default function loadModel(modelUrl, textureUrl, scene) {
    const textureLoader = new TextureLoader();
    const modelTexture = textureLoader.load(textureUrl);
    console.log(modelTexture);

    // model
    const loader = new OBJLoader();
    loader.load(
        modelUrl,
        (object) => {
            const objCopy = Object.assign({}, object);
            objCopy.traverse((child) => {
                if (child instanceof Mesh) {
                    // child.material.map = modelTexture;
                }
            });
            // the .obj has a floor by default, so we hide it by moving it below the our floor
            objCopy.position.y = -0.001;
            scene.add(object);
        },
        onProgress,
        onError,
    );
}
