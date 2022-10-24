const width = 50; // longueur du cadre
const height = 50; // hauteur du cadre
const filling_rate = 20; // pourcentage de chances qu'une cellule apparaisse vivante.
let array = []; // model data structure de tableau vide

const alive_color = "black"; // couleur
const dead_color = "white";
const cell_sinew_ye = 8; // taille pixel
const px_width = width * cell_sinew_ye;
const px_height = height * cell_sinew_ye;
const board_canvas = document.getElementById("board"); // modifier html
const board = board_canvas.getContext("2d");


function getRandomInt(max) {
  // génere et retourne un nombre aléatoire entre 0 et max
  return Math.floor(Math.random() * max);
}

/*  fonction update_view()
       iterer sur(avec une double boucle) array, et de dessiner les pixels representants les cellules vivantes;
       board. fillRect(x_start, y_start, rect_width, rect_height);
  */
function update_view() {
  /*
       si la valeur est true => couleur   et  si la valeur est false => rien

     */
  board.fillStyle = alive_color; // pour la couleur de la cellule
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (array[x][y] == true)
        board.fillRect(
          x * cell_sinew_ye,
          y * cell_sinew_ye,
          cell_sinew_ye,
          cell_sinew_ye
        ) // action de colorier la new_yone
    }
  }
}

/* count_neighbours 
Compte le nombre de voisins vivants d'une cellule.*/

function count_neighbours(x, y) {
  let result = 0;

  for (let new_x = x - 1; new_x <= x + 1; new_x++) {
    for (let new_y = y - 1; new_y <= y + 1; new_y++) {
      if (
        new_x >= 0 &&
        new_x < width &&
        new_y >= 0 &&
        new_y < height &&
        (new_x != x || new_y != y)
      )
        result += array[new_x][new_y] ? 1 : 0;
      console.log(result);
    }
  }
  console.log("tgttyhyt");
  return result;
}

/* update_model
Itere sur array pour appliquer les regles du jeu de la vie sur chacune des cellules du board.
(Creer la fonction count_neighbours pour compter les voisins d'une cellule)
Si une cellule vivante a moins de 2 voisins, elle meure de solitude
Si une cellule vivante a plus de 3 voisins, elle meure de surpopulation
Si une cellule morte a 3 voisins, elle devient vivante
Si une cellule a 2 voisins, elle conserve son etat actuel*/

function update_model() {
  let new_array = [];
  let result;

  for (let x = 0; x < width; x++) {
    new_array.push([]);
    for (let y = 0; y < height; y++) {
      let nombre = count_neighbours(x, y);

      if (nombre < 2 || nombre > 3) result = false;
      if (nombre === 3) result = true;
      if (nombre === 2) result = array[x][y];
      new_array[x].push(result);
    }
  }
  array = new_array;
}

function draw_background() {
  board_canvas.width = px_width; // larguer pixel
  board_canvas.height = px_height; // hauteur pixel
  board.fillStyle = dead_color; // defenir la couleur flush
  board.fillRect(0, 0, px_width, px_height); // dimension le canvas

  board.strokeStyle = "maroon"; // defenir la couleur de la grille
  // board.moveTo(0, 0); // poser le crayon coordonées suivant
  // board.lineTo(px_width, px_height); //  trace une diagonale

  for (
    let new_y = 0;
    new_y < px_width;
    new_y += cell_sinew_ye // Iterer sur le canvas de cellule en cellule
  ) {
    board.moveTo(new_y, 0); // poser le crayon à x,y
    board.lineTo(new_y, px_height); // glisser le crayon jusqu'à (x,y)
  }

  for (let new_y = 0; new_y < px_height; new_y += cell_sinew_ye) {
    board.moveTo(0, new_y);
    board.lineTo(px_width, new_y);
  }

  board.stroke(); // demande d'affiche
}

function generate_matrix() {
  for (let x = 0; x < width; x++) {
    array.push([]); // création d'un tableau vide dans array
    for (let y = 0; y < height; y++) {
        let r = getRandomInt(100); // génere un nombre aléatoire entre 0 et 100
                 if (r < filling_rate)  // si le nombre aleatoire est inferieur o filling_rate
                    array[x].push(true); // push true ds array
                    else
                        array[x].push(false); // on remplit les sous tableaux 

     // array[x].push(false);  reliquat entre 2 valeurs
    }
  }
  console.log(array);
}

/*generate_matrix();
for(x = 20; x < 30; x++)
{
    array[x][20] = true;
}*/
//let model = new Model(50,50);
draw_background();
generate_matrix();
//update_view();
//update_model();

setInterval(async function tick() {
 update_model();
  draw_background();
  update_view();
}, 10);

/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).  */


