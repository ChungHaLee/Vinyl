import { TextureLoader } from "three";
import { sparkling, startFauxClicking, fauxClick } from './sparkle.js'
import { rectangle } from './rectangle.js'
import { energy } from './audio.js'
import { gubunja_chaosSizeBig } from './vanta.js'

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

const lavenderHazeButton = document.getElementById('lavenderHaze');
const foreverButton = document.getElementById('forever');
const goodDaysButton = document.getElementById('goodDays');
const obsessedButton = document.getElementById('obsessed');
const theothersideButton = document.getElementById('theotherside');
const dreamsButton = document.getElementById('dreams');




let width, height;

let scrollSpeed = 0.0;
let loader = null;
let texture = null;
let material = null;
let circle = null;
let mesh = null;

let FrameRate = 0;



var vinylNameFirst;


let vantaCanvas = document.getElementsByClassName('vanta-canvas');
let particleCanvas = document.getElementsByClassName('particles-js-canvas-el');
let ptCanvas = document.getElementById('pt_canvas');



for (let i = 0; i < number_of_images; i++) {
    
    // Create a texture loader so we can load our image file
    loader = new THREE.TextureLoader();
    let textureArray = ['./static/src/images/funk.jpeg', './static/src/images/gloria.jpeg', './static/src/images/inlove.jpeg', './static/src/images/mac.jpeg', './static/src/images/midnights.jpeg', './static/src/images/gooddays.jpeg', './static/src/images/trolls.jpeg', './static/src/images/yessie.jpeg']
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

            } else if (i == 0){
                vantaCanvas[0].style.visibility = 'visible';
                obsessedButton.play();
            

            } else if (i == 3){
                vantaCanvas[1].style.visibility = 'visible';
                dreamsButton.play();
            

            } else if (i == 4){
                vantaCanvas[0].style.visibility = 'visible';
                lavenderHazeButton.play();
            

            }  else if (i == 5){
                vantaCanvas[0].style.visibility = 'visible';
                goodDaysButton.play();
                
            }  else if (i == 6){
                ptCanvas.style.visibility = 'visible';
                theothersideButton.play();
                

            }  else if (i == 7){
                particleCanvas[0].style.visibility = 'visible';
                foreverButton.play();
                
            }
    
        }
    }
}

  
export async function allSettledPromises () {
    const promises = Array(1).fill(0).map(() => waiting())
    const result = []
    try {
        const promiseResult = await Promise.allSettled(promises)
        result.push(...promiseResult)
        // console.log(promiseResult)
    } catch (e) {
        console.error(`error on ${e}`)
    }

}
  



// function waiting(){
//     if (vinylNameFirst != undefined) {
//         for (let i = 0; i < groupCards.children.length; i ++) {
//             if (vinylNameFirst != i) {
//                 groupCards.children[i].material.visible = false
//                 groupCards.children[vinylNameFirst].material.visible = true
//             } else if (i == 4){
//                 vinylNameOrigin = 'lavenderHaze'
//                 audio = lavenderHaze

//             } else if (i == 7){
//                 vinylNameOrigin = 'forever'
//                 audio = forever

//             }
//         }
//     } 
//     return vinylNameOrigin;
// }







function render() {
    renderer.render( scene, camera );
}




function animate() {
    requestAnimationFrame(animate);
    window.addEventListener( 'click', onPointerMove );
    raycasters();
    render();
    sparkling();

    // the other side
    FrameRate = FrameRate + 1
    // 이 부분을 pitch 랑 매핑
    if (FrameRate % 8 == 0){
        width = window.innerWidth/2
        height = (energy * 2)
        // console.log(height);
        rectangle(width, height);
    
    }

    // obsessed
    if (energy > 20) {
       startFauxClicking();
    //    gubunja_chaosSizeBig();
    }
    // console.log(energy)
}


// waiting();
animate();


