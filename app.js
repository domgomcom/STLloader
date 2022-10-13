//import * as THREE from "https://cdn.skypack.dev/three@0.129.0";
import * as THREE from './threejs/three.module.js';
import {STLLoader} from './threejs/STLLoader.js';
import {OrbitControls} from './threejs/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight,0.1,1000);
const light = new THREE.DirectionalLight(0xff0000, 0.5);
const render = new THREE.WebGLRenderer();

//const box = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:0x2222ff});
//const mesh = new THREE.Mesh(box, material);

var geometry=new THREE.BoxGeometry();
            //var material=new THREE.MeshBasicMaterial({color: 0X00FF00});
            var box =new THREE.Mesh(geometry,material);
            scene.add(box);

camera.position.z = 5;
light.position.set(0,0,1);
render.setSize(window.innerWidth/window.innerHeight);

document.body.appendChild(render.domElement);
//scene.add(mesh, light);
scene.add(box);

function animate(){
    requestAnimationFrame(animate);
    //mesh.rotation.y += 0.01;
    render.render(scene, camera);
}
animate();