// Setzt Himmel, Nebel, Sonne und Umgebungslicht für die Insel.
import * as THREE from "three";
import { getGridSize } from "./grid.js";

const SKY_COLOR = "#b8e1f5";

// Richtet das Licht ein und zielt mit der Sonne auf die Mitte der geladenen Map.
export function setupLighting(scene) {
  const size = getGridSize();
  const centerX = (size.width - 1) / 2;
  const centerZ = (size.depth - 1) / 2;
  const shadowRange = Math.max(size.width, size.depth) / 2 + 3;

  scene.background = new THREE.Color(SKY_COLOR);
  scene.fog = new THREE.Fog(SKY_COLOR, 20, 60);

  const hemi = new THREE.HemisphereLight("#fff8cf", "#5a7a3a", 1);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight("#daa662", 3);
  sun.position.set(centerX + 10, 15, centerZ + 5);
  sun.target.position.set(centerX, 0, centerZ);
  sun.castShadow = true;
  sun.shadow.camera.left = -shadowRange;
  sun.shadow.camera.right = shadowRange;
  sun.shadow.camera.top = shadowRange;
  sun.shadow.camera.bottom = -shadowRange;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.bias = -0.00001;
  scene.add(sun);
  scene.add(sun.target);
}
