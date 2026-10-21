# Zephyr

A 3D browser RPG with a party, set on floating islands.

Skills get better the more you use them, and they unlock new combat techniques. Combat is turn-based and happens right in the world, and you travel by riding magical winds.

🌬️ **Play online:** https://christopherkrischokpoffel.github.io/Zephyr/

> 🚧 Zephyr is at a very early stage. The basic setup is done, and a playable prototype is the next goal.

---

## The Idea

**The world:** Zephyr means "gentle west wind". The world is made of floating islands in the sky, and magical winds are its life essence. Wind ships carry you from island to island, while wind shoes and a wind board let you reach new places.

**Skills instead of combat levels:** Like in *Old School RuneScape* and *The Elder Scrolls*, you get better at something by doing it: woodcutting, mining, fishing, smithing … Every world skill unlocks matching combat techniques. If you chop a lot of wood, you also learn to fight with an axe.

**Turn-based combat in the world:** No separate battle screen. When a fight starts, the world freezes and everyone takes turns on the same grid, similar to *Baldur's Gate*.

**Party:** Each character can only specialize in two skills. Nobody can do everything, so you need a team.

**Style:** 3D low-poly. The whole world sits on a grid with height levels.

---

## Tech

- **JavaScript** in the browser
- **[Three.js](https://threejs.org/)** for 3D
- **[Vite](https://vite.dev/)** as the dev server
- **GitHub Pages** for publishing (automatically after every push)
- Models are made in **Blender** and loaded as glTF

---

## Run Locally

Requirement: [Node.js](https://nodejs.org/) is installed.

```bash
npm install     # install dependencies (first time only)
npm run dev     # start the dev server
```

Then open the address shown in the terminal (usually `http://localhost:5173`) in your browser.

---

## Project Structure

```
src/
├── main.js        entry point, connects everything
├── core/          game loop, event bus
├── world/         grid, islands, camera
├── player/        player, movement
├── characters/    character data (stats, levels)
├── skills/        skill system, XP
├── inventory/     inventory
├── combat/        turn-based combat
├── ui/            HUD, menus
└── data/          JSON: items, skills, enemies
```

Every system has its own folder. Content like items or enemies lives as data (JSON) in `data/`, not in the code.

---

## Progress

- [x] Phase 0: Project setup
- [ ] Prototype "A Small Piece of Zephyr": one island, one skill, one enemy
