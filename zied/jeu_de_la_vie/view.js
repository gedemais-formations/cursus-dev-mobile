// view.js

/* Variables :
alive_color : Couleur des cellules vivantes (view)
dead_color : Couleur des cellules mortes (view)
cell_size : Largeur et hauteur en pixels des carrés représentants les cellules (view)
px_width : Largeur du board en pixels (view)
px_height : Largeur du board en pixels (view)
board_canvas : Element HTML de type canvas (view)
board : Contexte de dessin dans le canvas (2D dans notre cas) (view)  

const alive_color = "black"; // couleur
const dead_color = "white";
const cell_sinew_ye = 8; // taille pixel
const px_width = width * cell_sinew_ye;
const px_height = height * cell_sinew_ye;
const board_canvas = document.getElementById("board"); // modifier html
const board = board_canvas.getContext("2d");


View() :
Propriétés :
    - alive_color
    - dead_color
    - cell_size
    - px_width
    - px_height
    - board
    - board_canvas

Méthodes :
    - update_view()
    - draw_background()*/

function View(alive_color, dead_color, cell_sinew_ye, width, height)
{
    this.alive_color = alive_color;
    this.dead_color = dead_color;
    this.cell_sinew_ye = cell_sinew_ye;
    this.px_width = width * this.cell_sinew_ye;
    this.px_height = height * this.cell_sinew_ye;
    this.board_canvas = document.getElementById("board");
    this.board = this.board_canvas.getContext("2d");
    this.update_view = function(width, height,array)
    {

    // si la valeur est true => couleur   et  si la valeur est false => rien
     this.board.fillStyle = this.alive_color ;
       for (let x = 0; x < width; x++) {
         for (let y = 0; y < height; y++) {
           if (array[x][y] == true)
             this.board.fillRect(
               x * this.cell_sinew_ye,
               y * this.cell_sinew_ye,
               this.cell_sinew_ye,
               this.cell_sinew_ye
             ) // action de colorier la new_yone
         }
       }
     }

this.draw_background = function() 
{
  this.board_canvas.width = this.px_width;                     // larguer pixel
  this.board_canvas.height = this.px_height;                  // hauteur pixel
  this.board.fillStyle = this.dead_color;                    // defenir la couleur flush
  this.board.fillRect(0, 0, this.px_width, this.px_height); // dimension le canvas

  this.board.strokeStyle = "maroon";                            // defenir la couleur de la grille
                                                          // board.moveTo(0, 0); // poser le crayon coordonées suivant
                                                         // board.lineTo(px_width, px_height); //  trace une diagonale

  for (
    let new_y = 0;
    new_y < this.px_width;
    new_y += this.cell_sinew_ye                          // Iterer sur le canvas de cellule en cellule
  ) {
    this.board.moveTo(new_y, 0);                             // poser le crayon à x,y
    this.board.lineTo(new_y, this.px_height);               // glisser le crayon jusqu'à (x,y)
  }

  for (let new_y = 0; new_y < this.px_height; new_y += this.cell_sinew_ye) {
    this.board.moveTo(0, new_y);
    this.board.lineTo(this.px_width, new_y);
  }

  this.board.stroke();                              // demande d'affiche
}  
    
}