// view.js

/* Variables :
alive_color : Couleur des cellules vivantes (view)
dead_color : Couleur des cellules mortes (view)
cell_size : Largeur et hauteur en pixels des carrés représentants les cellules (view)
px_width : Largeur du board en pixels (view)
px_height : Largeur du board en pixels (view)
board_canvas : Element HTML de type canvas (view)
board : Contexte de dessin dans le canvas (2D dans notre cas) (view)  */

const alive_color = "black"; // couleur
const dead_color = "white";
const cell_sinew_ye = 8; // taille pixel
const px_width = width * cell_sinew_ye;
const px_height = height * cell_sinew_ye;
const board_canvas = document.getElementById("board"); // modifier html
const board = board_canvas.getContext("2d");

function View(alive_color, dead_color, cell_sinew_ye, px_width, px_height, board_canvas, board)
{
    this.alive_color = alive_color;
    this.dead_color = dead_color;
    this.cell_sinew_ye = cell_sinew_ye;
    this.px_width = px_width;
    this.px_height = px_height;
    this.board_canvas = document.getElementById("board");
    this.board = board_canvas.getContext("2d");
    this.display = function(update_view, draw_background)
    {
 
function update_view() {
  
      let  board.fillStyle =alive_color ;
       
    
    // si la valeur est true => couleur   et  si la valeur est false => rien

     
      
       for (let x = 0; x < width; x++) {
         for (let y = 0; y < height; y++) {
           if (array[x][y] == true)
             board.fillRect(
               x * cell_sinew_ye,
               y * cell_sinew_ye,
               cell_sinew_ye,
               cell_sinew_ye
             ); // action de colorier la new_yone
         }
       }
     }


  */
        function draw_background(){

        }
/*

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
}  */
    }
}