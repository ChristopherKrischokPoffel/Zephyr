// Der Spiel-Loop: ruft bei jedem Bild alle angemeldeten Funktionen mit deltaTime auf.

const updateFunctions = [];
let lastTime = null;
const MAX_DELTA_TIME = 0.1;

// Meldet eine Funktion an, die ab jetzt jedes Bild mit deltaTime aufgerufen wird.
export function addUpdate(updateFunction) {
  updateFunctions.push(updateFunction);
}

// Startet den Loop (nur einmal aufrufen).
export function startLoop() {
  requestAnimationFrame(tick);
}

// Ein Bild: deltaTime ausrechnen, alle Funktionen aufrufen, nächstes Bild anfordern.
function tick(currentTime) {
  let deltaTime = 0;
  if (lastTime !== null) {
    deltaTime = (currentTime - lastTime) / 1000;
  }
  lastTime = currentTime;

  if (deltaTime > MAX_DELTA_TIME) {
    deltaTime = MAX_DELTA_TIME;
  }

  for (const updateFunction of updateFunctions) {
    updateFunction(deltaTime);
  }

  requestAnimationFrame(tick);
}
