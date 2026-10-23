
const listeners = {};


// Zuhören: Die Funktion wird ab jetzt jedes Mal aufgerufen,
// wenn jemand dieses Event meldet.
export function on(eventName, listener) {
  // Gibt es für dieses Event noch keine Liste? Dann leere Liste anlegen.
  if (listeners[eventName] === undefined) {
    listeners[eventName] = [];
  }

  // Funktion in die Liste eintragen
  listeners[eventName].push(listener);
}


// Aufhören zuzuhören: Die Funktion wird wieder aus der Liste entfernt.
// Wichtig: Man muss genau dieselbe Funktion übergeben wie bei on().
export function off(eventName, listener) {
  const list = listeners[eventName];

  // Hört niemand bei diesem Event zu? Dann gibt es nichts zu tun.
  if (list === undefined) {
    return;
  }

  // Stelle der Funktion in der Liste suchen (-1 heißt: nicht gefunden)
  const position = list.indexOf(listener);

  // Gefunden? Dann an dieser Stelle 1 Eintrag entfernen.
  if (position !== -1) {
    list.splice(position, 1);
  }
}


// Melden: Alle, die bei diesem Event zuhören, werden aufgerufen
// und bekommen die Daten mit.
export function emit(eventName, data) {
  const list = listeners[eventName];

  // Hört niemand zu? Dann passiert einfach nichts.
  if (list === undefined) {
    return;
  }

  // Alle Zuhörer der Reihe nach aufrufen.
  // [...list] macht eine Kopie der Liste. Falls sich ein Zuhörer
  // währenddessen mit off() abmeldet, kommt die Schleife nicht durcheinander.
  for (const listener of [...list]) {
    listener(data);
  }
}
