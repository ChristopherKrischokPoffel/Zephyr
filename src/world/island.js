// Baut die Insel aus der geladenen Map: eine Säule pro Feld, plus Objekte obendrauf.
import * as THREE from "three";
import { getTile, getGridSize, gridToWorld, STEP_HEIGHT } from "./grid.js";
import { buildObject } from "./objects.js";
import TILE_TYPES from "../data/tileTypes.json";

// Geht durch alle Felder und fügt Säulen und Objekte zur Szene hinzu.
export function buildIsland(scene) {
  const grid = getGridSize();

  for (let zRow = 0; zRow < grid.depth; zRow++) {
    for (let xTile = 0; xTile < grid.width; xTile++) {
      const tile = getTile(xTile, zRow);
      if (tile === null) {
        continue;
      }

      const columnHeight = tile.height * STEP_HEIGHT;
      const geometry = new THREE.BoxGeometry(1, columnHeight, 1);
      const material = new THREE.MeshStandardMaterial({ color: TILE_TYPES[tile.type].color });
      const column = new THREE.Mesh(geometry, material);
      column.position.set(xTile, columnHeight / 2, zRow);
      column.castShadow = true;
      column.receiveShadow = true;
      scene.add(column);

      if (tile.object) {
        buildObject(scene, tile.object, gridToWorld(xTile, zRow));
      }
    }
  }
}
