const alive_color = "black";
const dead_color = "white";
const cell_size = 8;
const width = 50;
const height = 50;
const px_width = width * cell_size;
const px_height = height * cell_size;

const filling_rate = 20; // Pourcentage de chance qu'une cellule apparaisse

const board_canvas = document.getElementById("board");
const board = board_canvas.getContext("2d");

let array = []; // model data structure

function getRandomInt(max) {
  return Math.floor(Math.random() * max); //Cette fonction génère des nombre aléatoires
}

function draw_background() {
  board_canvas.width = px_width; //largeur en pixel du canvas
  board_canvas.height = px_height; //Hauteur en pixel du canvas
  board.fillStyle = dead_color; //Definir la couleur de Flush
  board.fillRect(0, 0, px_width, px_height); // Flush le Canvas
  board.strokeStyle = "black";
  board.fillStyle = "black"; // Definir la couleur de la grille

  for (let x = 0; x < px_width; x += cell_size) {
    board.moveTo(x, 0); // poser le crayon à x, y
    board.lineTo(x, px_height); //bouger le crayon jusqu'a x, y
  }
  for (let y = 0; y < px_height; y += cell_size) {
    board.moveTo(0, y); // poser le crayon à x, y
    board.lineTo(px_width, y); //bouger le crayon jusqu'a x, y
  }

  board.stroke(); //Affiche le résultat à l'ecran
}

function generate_matrix() {
  for (let x = 0; x < width; x++) {
    //créer case vide
    array.push([]);
    for (let y = 0; y < height; y++) {
      let r = getRandomInt(100); // genere un nombre aleatoire entre 0 et 100
      if (r < filling_rate)
        // si le nombre aleatoire est inferieur a filling_rate
        array[x].push(true); //push true
      //sinon
      else array[x].push(false); // push false

      //ou
      array[x].push(getRandomInt(100) < filling_rate); // donner un valeur à la case vide
    }
  }
  console.log(array);
}

generate_matrix();
setInterval(async function tick() {
  draw_background();
}, 1000);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
