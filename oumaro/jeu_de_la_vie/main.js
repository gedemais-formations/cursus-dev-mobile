const cell_size = 12;
const width = 30;
const height = 30;
const px_width = width * cell_size;
const px_height = height * cell_size;
const board_canvas = document.getElementById("board");
const board = board_canvas.getContext("2d");
const alive_color = "black";
const dead_color = "white";
const filling_rate = 20; //poucentage de chances qu'une cellule apparaisse vivante
const x_vertical = [0, 0, 1, -1, -1, 1, -1, 1];
const y_horizontal = [1, -1, 0, 0, -1, 1, 1, -1];



let array = []; //mmodel de structure

function getRandomInt(max) {
  //génere un nombre aléatoire entre 0 et max
  return Math.floor(Math.random() * max);
}

function count_neighbours(x, y) {
  let result = 0;

  for (let i = 0; i < 8; i++) {
    let nx = x + x_vertical[i];
    let ny = y + y_horizontal[i];

    if (nx >= 0 && nx < array.length  && ny >= 0 && ny < array.length && array[nx][ny]) {
      result++;
    }

 
  }
  return result;
}

function update_model() {

  let newArray = [];

  for (let a = 0; a < array.length; a++) {
    newArray.push([]);

    for (let i = 0; i < array[a].length; i++) {
      let resultat = count_neighbours(a, i);

      //inferieur a 2 elle meurt
      if (resultat < 2) {
       newArray[a].push(false);

      }

      //égal à 3 ,elle vit (elle nait)
      if (resultat == 3) {
       newArray[a].push(true);

        

      }

            //supérieur a 3 , elle meurt

      if (resultat > 3) {
       newArray[a].push(false);


      }

      // egal à 2, elle reste en vie
      if (resultat == 2) {
        newArray[a].push(array[a][i]);

      }
    }
  }
  array = newArray;
}


console.log(array);


function update_view() {
  for (let a = 0; a < array.length; a++) {
    for (let i = 0; i < array[a].length; i++) {
      if (array[a][i] == true) {
        (board.fillStyle = alive_color),
          board.fillRect(a * cell_size, i * cell_size, cell_size, cell_size);
        //point de depart,point d'arrivée, largeur,hauteur
        board.stroke();
      }
    }
  }
}

function draw_background() {
  //****************************** */ on créer la grille avec canvas.*******************************************************************

  board_canvas.width = px_width; //largeur en pixels du canvas
  board_canvas.height = px_height; //hauteur en pixels du canvas
  board.fillStyle = dead_color; //pour changer la couleur
  board.fillRect(0, 0, px_width, px_height); // pour créer des cases

  //board.strokeStyle ="red";

  for (let x = 0; x < px_width; x += cell_size) {
    // Iterer sur le canvas de cellule en cell

    board.moveTo(x, 0); //poser le crayon
    board.lineTo(x, px_height); //bouge le crayon jusqu'a x,y
  }

  for (let y = 0; y < px_height; y += cell_size) {
    // Itérer sur le canvas de cellule en cell

    board.moveTo(px_height, y); //poser le crayon
    board.lineTo(0, y); //bouge le crayon jusqu'a x,y
  }

  board.fillStyle = "black"; //definir la couleur de la grille

  board.stroke(); //affiche le resultat
}



//*********************************************************** */
function generate_matrix() {
  for (let x = 0; x < width; x++) {
    //créer les cases vide

    array.push([]);

    for (let y = 0; y < height; y++) {
      // donner une valeur à la case vide
      array[x].push(getRandomInt(100) < filling_rate); //si inferieur a filling_rate alors push TRUE sinon push FALSE
    }
  }

  console.table(array);

}

/**************************************************************** */


generate_matrix();



let action = setInterval(async function tick() {
  draw_background();
  update_model();
  update_view();
}, 100);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
