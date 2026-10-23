// Die Liste aller Funktionen, die bei jedem Bild aufgerufen werden.
// Am Anfang ist sie leer. Module tragen sich mit addUpdate() ein.
const updateFunctions = [];

// Der Zeitpunkt vom letzten Bild (in Millisekunden).
// null heißt: Es gab noch kein letztes Bild.
let lastTime = null;

// Die größte erlaubte deltaTime (in Sekunden).
const MAX_DELTA_TIME = 0.1;

// Meldet eine Funktion beim Loop an.
export function addUpdate(updateFunction) {
  updateFunctions.push(updateFunction);
}

// Startet den Loop. Nur einmal aufrufen!
export function startLoop() {
  requestAnimationFrame(tick);
}

// Ein "tick" ist ein Bild.
function tick(currentTime) {
  // 1. deltaTime ausrechnen: Wie viel Zeit ist seit dem letzten Bild vergangen?
  let deltaTime = 0;
  if (lastTime !== null) {
    deltaTime = (currentTime - lastTime) / 1000; // Millisekunden -> Sekunden
  }
  lastTime = currentTime;

  // deltaTime darf nicht größer als MAX_DELTA_TIME werden
  if (deltaTime > MAX_DELTA_TIME) {
    deltaTime = MAX_DELTA_TIME;
  }

  // 2. Alle angemeldeten Funktionen der Reihe nach aufrufen
  for (const updateFunction of updateFunctions) {
    updateFunction(deltaTime);
  }

  // 3. Den Browser bitten, beim nächsten Bild wieder tick() aufzurufen
  requestAnimationFrame(tick);
}
