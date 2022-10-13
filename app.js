import * as THREE from "https://cdn.skypack.dev/three@0.129.0";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight,0.1,1000);
const light = new THREE.DirectionalLight(0xff0000, 0.5);
const render = new THREE.WebGLRenderer();

const box = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:0x2222ff});
const mesh = new THREE.Mesh(box, material);

camera.position.z = 5;
light.position.set(0,0,1);
render.setSize(window.innerWidth/window.innerHeight);

document.body.appendChild(render.domElement);
scene.add(mesh, light);

function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.01;
    render.render(scene, camera);
}
