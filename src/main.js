import { addUpdate, startLoop } from "./core/loop.js";
import { renderWorld, updateWorld } from "./world/scene.js";
import "./core/input.js";
import "./style.css";

addUpdate(updateWorld);
addUpdate(renderWorld);

startLoop();
