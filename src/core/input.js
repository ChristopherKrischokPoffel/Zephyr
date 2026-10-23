import { emit } from "./eventBus.js";

addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    emit("spacePressed");
  }
});