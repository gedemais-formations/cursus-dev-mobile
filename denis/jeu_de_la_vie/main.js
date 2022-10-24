let alive_color = "#ff0066";
let dead_color = "white";

const cell_size = 8; // normalement c'est 8

const width = 50; //normalement cest 50
const height = 50; // 50 aussi

const px_width = width * cell_size;
const px_height = height * cell_size;

const filling_rate = 20; // Pourcentage de chances qu'une cellule apparaise vivante.

const board_canvas = document.getElementById("board");

const board = board_canvas.getContext("2d");

let array = []; // model data structure
/*
elle affiche les cellules vivante du tableau
*/
let is_pause_button = false;
let idintrval;
function update_view() {
  board.fillStyle = alive_color;
  for (let x = 0; x < width; x++)
    for (let y = 0; y < height; y++)
      //
      if (array[x][y] == true)
        board.fillRect(x * cell_size, y * cell_size, cell_size, cell_size);
}
function update_speed() {
  // alert("vous avez cliquer sur update_speed");

  clearInterval(idintrval);
  let htmlupdatespeed = document.getElementById("update_speed_number");

  let cycle = htmlupdatespeed.value;
  if (cycle < 1) {
    // valeur trop petite
    alert("valeur trop petite");
  } else {
    let interval = 1000 / parseInt(cycle);

    alert("la valeur de cycle " + cycle + " int=" + interval);

    idintrval = setInterval(async function tick() {
      start_game();
    }, interval);
    if (is_pause_button) {
      // je fais rien
    } else {
      start_game();
    }
  }
}

function reset() {
  // alert("vous avez cliquer sur reset");
  generate_matrix();
  console.table(array);
  draw_background();
  update_view();
}
function clear_board() {
  array = [];
  // let etat;
  for (let x = 0; x < width; x++) {
    array.push([]);
    for (let y = 0; y < height; y++) {
      array[x].push(false);
    }
  }
  console.info("je suis dans clears bord");
  console.table(array);
  draw_background();
  update_view();
}
function pause() {
  //alert("vous avez cliquer sur pause");
  let pause_button = document.getElementById("pause_button"); //chercher l'element dans l'html id="pause_button"
  //console.log(pause_button.value); // lire la valeur qui es dans pause_button.value
  // pause_button.value = "luis"; //  changer la valeur qui es dans pause_button.value
  is_pause_button = !is_pause_button;
  if (is_pause_button) {
    pause_button.value = "continuer";
  } else {
    pause_button.value = "arreter";
  }
}
function update_colors() {
  //alert("vous avec cliquer sur update_color");

  let element_alive_color = document.getElementById("alive_color_form");
  // j'ai  recoupere la couleurs vivante
  alive_color = element_alive_color.value;
  //je vais recouperer la couleurs pour les mort
  let element_dead_color = document.getElementById("dead_color_form");
  dead_color = element_dead_color.value;
  // afficher de nouveau la grille avec les couleurs
  draw_background(); // mort
  update_view(); // vivant
}

//
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*
designe le quadrillage avec la couleurs des morts
*/
function draw_background() {
  board_canvas.width = px_width; // largeur en pixels du canvas
  board_canvas.height = px_height; // Hauteur en pixel du canvas
  board.fillStyle = dead_color; // definir la couleur de flush
  board.fillRect(0, 0, px_width, px_height); // flush le canvas
  console.log(px_width);
  console.log(px_height);
  board.fillStyle = "black"; // Definir la couleur de la grille

  //board.moveTo(0, 0); //poser le crayon a x, y
  //board.lineTo(px_width,  px_height); // bouger le crayon jusqu'a x, y

  for (let x = 0; x < px_width; x += cell_size) {
    board.moveTo(x, 0);
    board.lineTo(x, px_height);
  }

  for (let y = 0; y < px_height; y += cell_size) {
    board.moveTo(0, y);
    board.lineTo(px_width, y);
  }

  board.stroke(); // affiche le resultat a l'ecran

  // generate_matrix();
}
function generate_matrix_test() {
  // alert("je suis dans generate_matrix_test");

  console.info("Tableau de jeuTest w=" + width + " h=" + height);
  array = [];
  // let etat;
  for (let x = 0; x < width; x++) {
    array.push([]);
    for (let y = 0; y < height; y++) {
      array[x].push(false);
    }
  }
  // Remplir le tableau avec les valeurs de test
  array[0][0] = true;
  array[1][1] = true;
  array[3][1] = true;
  array[3][2] = true;
  //
  console.table(array);
}
function generate_matrix() {
  console.info("tableau de jeuTest w=" + width + "h=" + height);
  array = [];
  for (let x = 0; x < width; x++) {
    array.push([false]);

    for (let y = 0; y < height; y++) {
      array[x].push(getRandomInt(100) < filling_rate);
    }
  }
  console.log(array);
}
/* count_neighbours
Compte le nombre de voisins vivants d'une cellule.
*/
function count_neighbours_joffrai(_x, _y) {
  let result = 0;

  return result;
}
/////////////////
function count_neighbours(x, y) {
  let cpt_vivant = 0;
  for (let line = 0; line < 3; line++) {
    for (let col = 0; col < 3; col++) {
      let x1 = x + col;
      let y1 = y + line;
      console.log("x= ", x, "y= ", y, "x1=", x1, "y1=", y1);
      if (x1 < array.length && y1 < array.length) {
        if (array[x1][y1] == true) {
          cpt_vivant++;
        }
      }
    }
  }
  return cpt_vivant;
}
/* update_model
Itere sur array pour appliquer les regles du jeu de la vie sur chacune des cellules du board.
(Creer la fonction count_neighbours pour compter les voisins d'une cellule)
Si une cellule vivante a moins de 2 voisins, elle meure de solitude
Si une cellule vivante a plus de 3 voisins, elle colmeure de surpopulation
Si une cellule morte a 3 voisins, elle devient vivante
Si une cellule a 2 voisins, elle conserve son etat actuel*/
function update_model() {
  let nb_voisins;
  for (let col = 0; col < 4; col++) {
    for (let line = 0; line < 3; line++) {
      console.info("col=", col, "lig=", line);

      nb_voisins = count_neighbours(col, line);
      console.log(array[col][line], nb_voisins);
    }
  }
}

function start_game() {
  let result;
  console.log();
  generate_matrix(); // provisoire
  update_model();
  draw_background();
  update_view();
  return result;
}
// generate_matrix_test();
generate_matrix();
//start_game();
idintrval = setInterval(async function tick() {
  if (is_pause_button) {
    // je fais rien
  } else {
    start_game();
  }
}, 1000);

/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
