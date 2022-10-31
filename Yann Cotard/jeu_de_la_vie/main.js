// //définition couleur des pixels vivants ou morts
// const alive_color = "black";
// const dead_color = "white";

// //définition taille cellule (en px)
const cell_size = 8;

// //définition largeur et hauteur du canvas (en nombre de cellule)
// const width = 100;
// const height = 100;

// //defintion du canvas en pixel
// const px_width = width * cell_size;
// const px_height = height * cell_size;

// //pourcentage de chances qu'une cellule apparaisse vivante
const filling_rate = 20;

//obtention de l'élément canvas dans le html
const board_canvas = document.getElementById("board");

//définition du context dans le canvas
const board = board_canvas.getContext("2d");
let array=[];
//déclaraton du tableau qui stockera nos données
 //Model Data Structure
 function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }

/*updateView()
itérer sur array, et dessiner les pixels représentant les cellules vivantes
board.fillRect(x_start, y_start, rect_Width, rect_Height);*/

function updateView() {
  board.fillStyle = alive_color;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if(array[x][y]== true){
        board.fillRect(x * cell_size, y * cell_size, cell_size, cell_size);
      }
    }
  }
}

/* count_neighbours
Compte le nombre de voisins vivants d'une cellule.
*/
function count_neighbours(x, y) {
  let result = 0;
  //  il s'agit ici de naviguer de cellule en cellule en utilsant "x+1" ou "x-1" sur l'axe horizontal et "y+1" et "y-1" sur l'axe vertical comme si on voulait se déplacer sur un échiquier.

  if (x > 0 && y > 0 && array[x - 1][y - 1] == true) {
    result++;
  }
  if (y > 0 && array[x][y - 1] == true) {
    result++;
  }

  if (y > 0 && x < width - 1 && array[x + 1][y - 1] == true) {
    //"x<width-1" pour régler le problème quand on arrive en bordure de canvas
    result++;
  }

  if (x > 0 && array[x - 1][y] == true) {
    result++;
  }
  if (y > 0 && x < width - 1 && array[x + 1][y] == true) {
    result++;
  }
  if (x > 0 && y > 0 && y < height - 1 && array[x - 1][y + 1] == true) {
    result++;
  }
  if (y > 0 && y < height - 1 && array[x][y + 1] == true) {
    result++;
  }
  if (
    x > 0 && y > 0 && y < height - 1 && x < width - 1 && array[x + 1][y + 1] == true) {
    result++;
  }

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

  let nb_neighbours;
  let newTab=[];
 
  for (let x = 0; x < width; x++) {
    newTab.push([]);
    for (let y = 0; y < height; y++) {
      nb_neighbours = count_neighbours(x, y); //on stocke la fonction "count_neighbours(x, y)" dans une variable pour faciliter la saisie et la lecture du code


      if (nb_neighbours == 2) {
        newTab[x].push(array[x][y]);
        
      }
      if (nb_neighbours >3) {
        newTab[x].push(false);
       
      }
      if (nb_neighbours < 2) {
        newTab[x].push(false);
        
      }
     
      if (nb_neighbours == 3) {

          newTab[x].push(true);
      }
     

    }
  }
  array=newTab;
}
createNewTab();

function draw_background() {
  board_canvas.width = px_width; //largeur en pixel du canvas
  board_canvas.height = px_height; //hauteur en pixel du canvas
  board.fillStyle = dead_color; //fillStyle propriété spécifique  à Canvas qui définit la couleur de la cellule
  board.fillRect(0, 0, px_width, px_height); //flush le canvas
  board.strokeStyle = "black"; //definir la couleur de la grille
  // board.moveTo(0, 0); //poser le crayon
  // board.lineTo(px_width, px_height);

  //pour construire la grille
  for (let x = 0; x < px_width; x += cell_size) {
    //itérer sur le canvas de cellules en cellules
    board.moveTo(x, 0); //poser le crayon à 0, 0
    board.lineTo(x, px_height); //bouger le crayon jusqu
  }

  for (let y = 0; y < px_height; y += cell_size) {
    //itérer sur le canvas de cellules en cellules
    board.moveTo(0, y); //poser le crayon à 0, 0
    board.lineTo(px_width, y); //bouger le crayon jusqu
  }

  board.stroke(); //affiche le resultat à l'écran
}

function createNewTab() {
  let newTab=[];
  for (let x = 0; x < width; x++) {
   newTab.push([]); //pour générer un tableau vide
    
    for (let y = 0; y < height; y++) {
    newTab[x].push(getRandomInt(100) < this.filling_rate);

    }
  }

}

// //fonction pour générer le tableau qui contiendra toutes les coordonnées des cellules
function generate_matrix() {
 for (let x = 0; x < width; x++) {
   array.push([]); //pour générer un tableau vide

   for (let y = 0; y < height; y++) {
     array[x].push(getRandomInt(100) < filling_rate);

  /*
  revient à faire la même chose que :
  let r=getrandomInt(100);
  if(r<fillinRate)
  array[x].push(true);
  else
  array[x].push(false);

  */
   }
 }
}

//fonction pur calculer temps et nombre de tours de la fonction "tick"
//récupération du paragraphe timer
let timerElement = document.getElementById('timer');
//création variable "time" à zéro
let time = 0;

function temps(){
  //calcul du temps
  let minutes = parseInt(time / 60, 10);
  let secondes = parseInt(time % 60, 10);
  let count = parseInt(time, 10)
  
  //formatage du temps
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  //modification de l'affichage
  timerElement.innerText="Cycles :" + count  + "|" + minutes + ":" + secondes + "s";
  time++;
}

//fonction update color pour changer la couleur des cellules mortes et vivante
function update_colors() {
  
  //sélection des input type color
  let aliveColorPicker = document.getElementById('alive_color_form');
  let deadColorPicker = document.getElementById('dead_color_form');

  //application des valeur changées
  alive_color = aliveColorPicker.value;
  dead_color = deadColorPicker.value;


};

//fonction pour retourner aux couleurs initiales (blanc et noir)
function clear_board(){
  alive_color = "black";
  dead_color = "white";
}

//fonction pour changer la vitesse d'execution
function update_speed(){

let inputNumber = document.getElementById('speed_form');

let delay = 1000 / inputNumber.value;

generate_matrix();
draw_background();
updateView();

setInterval(async function tick() {
  update_model();
  draw_background();
  updateView();
  temps();
  
}, delay);


};

let is_paused_button=false;
let intervalID;
function pause(){
  let inputPause = document.getElementById('pause_button');

  intervalID = clearInterval();

};

// setInterval est la pour permettre au script de s'executer toutes les 1000ms
// apres sa premiere execution (dans l'en-tete html par exemple).


