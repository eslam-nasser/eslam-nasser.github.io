// REF: https://threejs.org/examples/canvas_interactive_cubes.html
// https://cmichel.io/importing-blender-model-with-texture-to-threejs/
// https://www.turbosquid.com/3d-model/insect?sort_column=a5&sort_order=asc
// https://threejs.org/docs/?q=loading#api/loaders/managers/LoadingManager

var camera,
    controls,
    scene,
    floor,
    renderer,
    mesh,
    moving_pointLight,
    static_pointLight;
let objects = [];
let mouse = new THREE.Vector2(),
    INTERSECTED;
let raycaster = new THREE.Raycaster();

init();
animate();
function init() {
    // SCENE
    let fogColor = new THREE.Color(0xe3deda);
    scene = new THREE.Scene();
    scene.background = fogColor;
    scene.fog = new THREE.Fog(fogColor, 0.0025, 20);

    // RENDERER
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // CAMERA
    camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(2, 1, 3);

    // LIGHT #1
    moving_pointLight = new THREE.PointLight(0xfffef0, 2, 100000);
    scene.add(moving_pointLight);
    // LIGHT #2
    static_pointLight = new THREE.PointLight(0xfffef0, 2, 100000);
    scene.add(static_pointLight);

    // FLOOR
    var floor_texture = new THREE.TextureLoader().load('../img/floor.jpg');
    floor_texture.wrapS = floor_texture.wrapT = THREE.RepeatWrapping;
    floor_texture.offset.set(0, 0);
    floor_texture.repeat.set(30, 30);
    var geometry = new THREE.PlaneGeometry(30, 30, 1, 1);
    var material = new THREE.MeshBasicMaterial({ map: floor_texture });
    floor = new THREE.Mesh(geometry, material);
    floor.material.side = THREE.DoubleSide;
    floor.rotation.x = 1.5708;
    scene.add(floor);

    // CONTROLS
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.1;

    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI / 2.2;

    // MODEL
    const loader = new THREE.JSONLoader();
    loader.load('./model/formica-rufa-with-skin.json', handle_load);

    // CLICK
    // document.addEventListener('mousedown', onDocumentMouseDown, false);

    // HOVER
    // document.addEventListener('mousemove', onDocumentMouseMove, false);

    // RESIZE IF NEEDED
    window.addEventListener('resize', onWindowResize, false);
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function handle_load(geometry, materials) {
    // Create the model with its texture
    const model_texture = new THREE.TextureLoader().load(`./model/texture.jpg`);
    const model_material = new THREE.MeshPhongMaterial({ map: model_texture });

    mesh = new THREE.Mesh(geometry, model_material);
    objects.push(mesh);
    scene.add(mesh);
    mesh.position.z = 0.5; // to offset the model to the camera's center
}
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render();
}
function render() {
    // Update the location of moving_pointLight
    moving_pointLight.position.x = camera.position.x;
    moving_pointLight.position.y = camera.position.y;
    moving_pointLight.position.z = camera.position.z;

    // Update the location of static_pointLight
    static_pointLight.position.x = camera.position.x * -1;
    static_pointLight.position.y = camera.position.y * -1;
    static_pointLight.position.z = camera.position.z * -1;

    renderer.render(scene, camera);
}

function onDocumentMouseMove(event) {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
function onDocumentMouseDown(event) {
    // find intersections
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(objects);
    if (intersects.length > 0) {
        if (INTERSECTED != intersects[0].object) {
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
