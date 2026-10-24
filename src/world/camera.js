// Kamera, die man mit rechter/mittlerer Maustaste um die Insel dreht und mit dem Mausrad zoomt.
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { getGridSize } from "./grid.js";

const MIN_ZOOM = 6;
const MAX_ZOOM = 35;
const MIN_ANGLE = 0.2;
const MAX_ANGLE = Math.PI * 0.42;

export const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

let controls = null;

// Richtet die Maus-Steuerung ein (erst nach loadGrid aufrufen); links bleibt frei fürs Laufen.
export function setupCamera(canvas) {
  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.enablePan = false;
  controls.minDistance = MIN_ZOOM;
  controls.maxDistance = MAX_ZOOM;
  controls.minPolarAngle = MIN_ANGLE;
  controls.maxPolarAngle = MAX_ANGLE;
  controls.mouseButtons = {
    LEFT: null,
    MIDDLE: THREE.MOUSE.ROTATE,
    RIGHT: THREE.MOUSE.ROTATE,
  };

  canvas.addEventListener("contextmenu", (event) => event.preventDefault());

  focusOnIsland();
}

// Richtet die Kamera schräg von oben auf die Mitte der geladenen Map aus.
export function focusOnIsland() {
  const size = getGridSize();
  const centerX = (size.width - 1) / 2;
  const centerZ = (size.depth - 1) / 2;
  const distance = Math.max(size.width, size.depth);

  controls.target.set(centerX, 0, centerZ);
  camera.position.set(centerX, distance * 0.8, centerZ + distance);
  controls.update();
}

// Aktualisiert die Steuerung jedes Bild (nötig für das weiche Nachgleiten).
export function updateCamera() {
  controls.update();
}

// Passt das Seitenverhältnis an die neue Fenstergröße an.
export function resizeCamera() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}
