// FLOOR
const floorWidth = 3;
const floorHeight = floorWidth * 2;
const floorThickness = 0.1;
const floorOffset = -1.5;

const planeGeometry = new window.THREE.PlaneGeometry(floorWidth, floorHeight / 4, 1, 1);
const planeMaterial = new window.THREE.MeshBasicMaterial({ color: 0xffffff });
const planeMesh = new window.THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.material.side = window.THREE.DoubleSide;
planeMesh.rotation.x = Math.PI / 2;
planeMesh.position.y = -0.01;
planeMesh.position.z = -(floorHeight / 4) * 1.5 + floorOffset;

const galssGeometry = new window.THREE.BoxGeometry(floorWidth, floorHeight, floorThickness);
const material = new window.THREE.MeshLambertMaterial({
    color: 0xffffff,
    opacity: 0.3,
    transparent: true,
});
const floor = new window.THREE.Mesh(galssGeometry, material);
floor.material.side = window.THREE.DoubleSide;
floor.rotation.x = Math.PI / 2;
floor.position.y = -0.05;
floor.position.z = floorOffset;

const group = new window.THREE.Group();
group.add(floor);
group.add(planeMesh);

export default group;
