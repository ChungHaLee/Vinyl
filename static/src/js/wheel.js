import { TextureLoader } from "three";
import { meydaAnalyser } from "./audio";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const scene = new THREE.Scene();

const image_radius = 200;
const number_of_images = 8;
const radius = 600;
const radian_interval = (6.0 * Math.PI) / number_of_images;
const center_of_wheel = { x: 0, y: 0 }


const groupCards = new THREE.Group();

const lavenderHaze = new Audio('static/src/audio/LavenderHaze.mp3');
const forever = new Audio('static/src/audio/Forever.mp3');

let FrameRate = 0;
let analyser, src, bufferLength, dataArray, audio_context;
let chroma, maxChroma, energy, amplitudeSpectrum;


let scrollSpeed = 0.0;
let loader = null;
let texture = null;
let material = null;
let circle = null;
let mesh = null;

let audio = '';
// let src, audio_context;



let vinylNameFirst;


let vantaCanvas = document.getElementsByClassName('vanta-canvas');

let particleCanvas = document.getElementsByClassName('particles-js-canvas-el');



for (let i = 0; i < number_of_images; i++) {
    
    // Create a texture loader so we can load our image file
    loader = new THREE.TextureLoader();
    let textureArray = ['./static/src/images/funk.jpeg', './static/src/images/gloria.jpeg', './static/src/images/inlove.jpeg', './static/src/images/mac.jpeg', './static/src/images/midnights.jpeg', './static/src/images/SOS.jpeg', './static/src/images/trolls.jpeg', './static/src/images/yessie.jpeg']
    texture = loader.load(textureArray[i]);
    texture.minFilter = THREE.LinearFilter;


    // Load an image file into a custom material
    material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 1
    });

    circle = new THREE.CircleGeometry(image_radius, 100);
    mesh = new THREE.Mesh(circle, material);

    mesh.material.side = THREE.DoubleSide;

    mesh.position.set(
        center_of_wheel.x + (Math.cos(radian_interval * i) * radius),
        center_of_wheel.y + (Math.sin(radian_interval * i) * radius),
        0);

    // set the ID for each meshes
    mesh.name = i
    // add the image to the group
    groupCards.add(mesh);
    // add group to scene
    scene.add(groupCards);
    // console.log(groupCards)
}


// Specify the portion of the scene visible at any time (in degrees)
let fieldOfView = 80;

let aspectRatio = window.innerWidth / window.innerHeight;
let nearPlane = 0.1;
let farPlane = 1000;
let camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, 
                                          nearPlane, farPlane);

camera.position.z = 1000;

let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: TextureLoader });
renderer.setSize(window.innerWidth, window.innerHeight);




// Add the canvas to the DOM
document.querySelector('#vanta-background').appendChild(renderer.domElement);

window.addEventListener('wheel', event => {
    scrollSpeed = event.deltaY * (Math.PI / 180) * 0.4;
    groupCards.rotation.z += -1.0 * scrollSpeed;
    for (let i = 0; i < groupCards.children.length; i++) {
        groupCards.children[i].rotation.z += scrollSpeed;
    }
});









function onPointerMove( event ) {
	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components
	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}


function onPointerReset( event ){
    pointer.x = 0
	pointer.y = 0
}


function raycasters() {

	// update the picking ray with the camera and pointer position
	raycaster.setFromCamera( pointer, camera );

	// calculate objects intersecting the picking ray
	let intersects = raycaster.intersectObjects( groupCards.children );


    // for 문이 아니라 내가 클릭한 바이닐로 수정
    if (intersects.length == 1){
        intersects[0].object.scale.set(1.5, 1.5, 1.5);
        vinylNameFirst = intersects[0].object.name; 
        onPointerReset(); // pointer reset
    }

    if (vinylNameFirst != undefined) {
        for (let i = 0; i < groupCards.children.length; i ++) {
            
            if (vinylNameFirst != i) {
                groupCards.children[i].material.visible = false
                groupCards.children[vinylNameFirst].material.visible = true

            } else if (i == 4){
                vantaCanvas[0].style.visibility = 'visible';
                
            } else if (i == 7){
                particleCanvas[0].style.visibility = 'visible';
                
            }
    
        }
    }
}



function gubunja() {
    if (vinylNameFirst != undefined) {
        for (let i = 0; i < groupCards.children.length; i ++) {
            
            if (vinylNameFirst != i) {
                groupCards.children[i].material.visible = false
                groupCards.children[vinylNameFirst].material.visible = true
            } else if (i == 4){
                vinylNameOrigin = 'lavenderHaze';
                audio = lavenderHaze;
                
            } else if (i == 7){
                vinylNameOrigin = 'forever';
                audio = forever;

            }
        }
        meydaAnalyser(audio)
    }
    
    // return vinylNameOrigin;
}





function render() {
    renderer.render( scene, camera );
}





function animate() {
    requestAnimationFrame(animate);
    window.addEventListener( 'click', onPointerMove );
    FrameRate = FrameRate + 1
    if (FrameRate % 300 == 0){
        raycasters();
        render();
        gubunja();
    }
}


animate();


