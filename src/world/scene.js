// Baut die 3D-Welt zusammen: Renderer, Licht, Insel und Kamera.
import * as THREE from "three";
import islandData from "../data/maps/start-island.json";
import { loadGrid } from "./grid.js";
import { buildIsland } from "./island.js";
import { setupLighting } from "./lighting.js";
import { camera, setupCamera, resizeCamera } from "./camera.js";

export const scene = new THREE.Scene();
export const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

loadGrid(islandData);
setupLighting(scene);
buildIsland(scene);
setupCamera(renderer.domElement);

// Zeichnet ein Bild der Szene aus Sicht der Kamera.
export function renderWorld() {
  renderer.render(scene, camera);
}

// Passt Kamera und Zeichenfläche an, wenn sich die Fenstergröße ändert.
addEventListener("resize", () => {
  resizeCamera();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
