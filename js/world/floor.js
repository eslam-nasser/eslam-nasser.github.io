import {
    TextureLoader,
    PlaneGeometry,
    MeshBasicMaterial,
    Mesh,
    DoubleSide,
    RepeatWrapping,
} from '../libs/three.min';

// FLOOR
const floorTexture = new TextureLoader().load('../img/floor.jpg');
floorTexture.wrapS = RepeatWrapping;
floorTexture.wrapT = RepeatWrapping;
floorTexture.offset.set(0, 0);
floorTexture.repeat.set(60, 60);
const geometry = new PlaneGeometry(60, 60, 1, 1);
const material = new MeshBasicMaterial({ map: floorTexture });
const floor = new Mesh(geometry, material);
floor.material.side = DoubleSide;
floor.rotation.x = 1.5708;

export default floor;
