import * as THREE from "three";
import { on } from "../core/eventBus.js";

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 5;

export const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0xff6600 });
export const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(2, 3, 4);
scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

export function updateWorld(deltaTime) {
  cube.rotation.x += deltaTime;
  cube.rotation.y += deltaTime;
}

export function renderWorld(deltaTime) {
  renderer.render(scene, camera);
}

on("spacePressed", (data) => {
  cube.material.color.set(Math.random() * 0xffffff);
});

addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight; // neues Seitenverhältnis
  camera.updateProjectionMatrix(); // Kamera rechnet neu
  renderer.setSize(window.innerWidth, window.innerHeight); // Zeichenfläche anpassen
});
