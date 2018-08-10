import { Raycaster, Vector2 } from '../libs/three.min';
import camera from '../world/camera';

const mouse = new Vector2();
const objects = [];

let INTERSECTED;
const raycaster = new Raycaster();

export default function onDocumentMouseDown() {
    // find intersections
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(objects);
    if (intersects.length > 0) {
        if (INTERSECTED !== intersects[0].object) {
            if (INTERSECTED) {
                // console.log('INTERSECTED and already got one');
                INTERSECTED.material.opacity = 1;
            }
            INTERSECTED = intersects[0].object;
            // console.log('INTERSECTED', INTERSECTED);
            INTERSECTED.currentOpacity = INTERSECTED.material.opacity;
            INTERSECTED.material.transparent = true;
            INTERSECTED.material.opacity = 0.5;
        }
    } else {
        if (INTERSECTED) {
            // console.log('NOT INTERSECTED and already got one');
            INTERSECTED.material.opacity = 1;
        }
        INTERSECTED = null;
    }
}
