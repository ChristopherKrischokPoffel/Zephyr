// Das schwarze Brett: Module melden Events und hören auf Events, ohne sich gegenseitig zu kennen.

const listeners = {};

// Hört ab jetzt auf ein Event.
export function on(eventName, listener) {
  if (listeners[eventName] === undefined) {
    listeners[eventName] = [];
  }
  listeners[eventName].push(listener);
}

// Hört wieder auf, auf ein Event zu hören (gleiche Funktion wie bei on() übergeben).
export function off(eventName, listener) {
  const list = listeners[eventName];
  if (list === undefined) {
    return;
  }

  const position = list.indexOf(listener);
  if (position !== -1) {
    list.splice(position, 1);
  }
}

// Meldet ein Event an alle Zuhörer und gibt ihnen die Daten mit.
export function emit(eventName, data) {
  const list = listeners[eventName];
  if (list === undefined) {
    return;
  }

  for (const listener of [...list]) {
    listener(data);
  }
}
