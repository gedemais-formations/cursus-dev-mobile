// main.js pour jeu de la vie

let jeu1 = new JeuDeLaVie(CONFIG, "canvas1", 30);
let jeu2 = new JeuDeLaVie(CONFIG, "canvas2", 15);
// let jeu3 = new JeuDeLaVie(CONFIG, "canvas3", 5);

setInterval(async function tick() {
  jeu1.draw_background(CONFIG.dead_colors[0], CONFIG.alive_colors[0]);
  jeu2.draw_background(CONFIG.dead_colors[1], CONFIG.alive_colors[1]);
  //jeu3.draw_background("yellow", "black");
}, 1000);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
