import {scene, camera, renderer, cube} from "./world/scene.js";
import "./style.css";

export function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
