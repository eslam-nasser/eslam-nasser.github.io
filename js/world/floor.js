// FLOOR
const floorTexture = new window.THREE.TextureLoader().load('../assets/img/floor.jpg');
floorTexture.wrapS = window.THREE.RepeatWrapping;
floorTexture.wrapT = window.THREE.RepeatWrapping;
floorTexture.offset.set(0, 0);
floorTexture.repeat.set(60, 60);
const geometry = new window.THREE.PlaneGeometry(60, 60, 1, 1);
const material = new window.THREE.MeshBasicMaterial({ map: floorTexture });
const floor = new window.THREE.Mesh(geometry, material);
floor.material.side = window.THREE.DoubleSide;
floor.rotation.x = 1.5708;

export default floor;
