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
    static_pointLight,
    model_name;
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
    camera.position.set(0, 4, 1.7);

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
    controls.enablePan = false;
    controls.autoRotateSpeed = 0;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI / 2.2;

    // MODEL
    const loader = new THREE.JSONLoader();
    loader.load('./model/formica-rufa-with-skin.json', handle_load);

    // MODEL NAME
    var fontLoader = new THREE.FontLoader();
    fontLoader.load('fonts/helvetiker_regular.typeface.json', function(font) {
        generateText('Formica Rufa', font);
    });

    // CLICK
    // document.addEventListener('mousedown', onDocumentMouseDown, false);

    // HOVER
    // document.addEventListener('mousemove', onDocumentMouseMove, false);

    // RESIZE IF NEEDED
    window.addEventListener('resize', onWindowResize, false);

    // Init GUI
    initGUI();
}

function generateText(txt, font) {
    var theText = txt;
    var hash = document.location.hash.substr(1);
    if (hash.length !== 0) {
        theText = hash;
    }
    var geometry = new THREE.TextGeometry(theText, {
        font: font,
        size: 0.5,
        height: 0.05
    });
    geometry.computeBoundingBox();
    var centerOffset =
        -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    var materials = [
        new THREE.MeshBasicMaterial({
            color: 0xc55509,
            overdraw: 0.5
        }),
        new THREE.MeshBasicMaterial({ color: 0x703208, overdraw: 0.5 })
    ];
    model_name = new THREE.Mesh(geometry, materials);
    model_name.position.x = centerOffset;
    // model_name.position.y = 1;
    model_name.position.z = 1.5;
    // model_name.rotation.x = 0;
    model_name.rotation.x = Math.PI / -2;
    scene.add(model_name);
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

function initGUI() {
    var API = {
        'Show insect': true,
        'Show insect name': true,
        'Auto rotate camera': false
    };
    var gui = new dat.GUI();
    gui.add(API, 'Show insect').onChange(function() {
        mesh.visible = API['Show insect'];
    });
    gui.add(API, 'Show insect name').onChange(function() {
        model_name.visible = API['Show insect name'];
    });
    gui.add(API, 'Auto rotate camera').onChange(function() {
        controls.autoRotateSpeed = API['Auto rotate camera'] ? 0.2 : 0;
    });
}
