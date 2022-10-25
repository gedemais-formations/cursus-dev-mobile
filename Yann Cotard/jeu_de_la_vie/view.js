function View(alive_color, dead_color, cell_size, width, height, px_width, px_height, board_canvas, board)
{
        this.alive_color=alive_color;
        this.dead_color= dead_color;
        this.cell_size = cell_size;
        this.width = width;
        this.height = height;
        this.px_width = px_width;
        this.px_height = px_height
        this.board_canvas = board_canvas;
        this.board = board;

        this.add_drawBackground = function draw_background() {
            this.board_canvas.width = px_width; //largeur en pixel du canvas
            this.board_canvas.height = px_height; //hauteur en pixel du canvas
            this.board.fillStyle = dead_color; //fillStyle propriété spécifique  à Canvas qui définit la couleur de la cellule
            this.board.fillRect(0, 0, px_width, px_height); //flush le canvas
            this.board.strokeStyle = "black"; //definir la couleur de la grille
            // board.moveTo(0, 0); //poser le crayon
            // board.lineTo(px_width, px_height);
          
            //pour construire la grille
            for (let x = 0; x < px_width; x += cell_size) {
              //itérer sur le canvas de cellules en cellules
              this.board.moveTo(x, 0); //poser le crayon à 0, 0
              this.board.lineTo(x, px_height); //bouger le crayon jusqu
            }
          
            for (let y = 0; y < px_height; y += cell_size) {
              //itérer sur le canvas de cellules en cellules
              this.board.moveTo(0, y); //poser le crayon à 0, 0
              this.board.lineTo(px_width, y); //bouger le crayon jusqu
            }
          
            this.board.stroke(); //affiche le resultat à l'écran
          }
             draw_background();

            
    thii.add_updateView = function updateView() {
        this.board.fillStyle = alive_color;
         for (let x = 0; x < width; x++) {
           for (let y = 0; y < height; y++) {
             if(this.array[x][y]== true){
               this.board.fillRect(x * cell_size, y * cell_size, cell_size, cell_size);
             }
           }
         }
       }
     
       updateView();
}
 
//définition couleur des pixels vivants ou morts
this.alive_color = "black";
this.dead_color = "white";

//définition taille cellule (en px)
this.cell_size = 8;

//définition largeur et hauteur du canvas (en nombre de cellule)
this.width = 180;
this.height = 80;

//defintion du canvas en pixel
this.px_width = width * cell_size;
this.px_height = height * cell_size;


//obtention de l'élément canvas dans le html
this.board_canvas = document.getElementById("board");

//définition du context dans le canvas
this.board = board_canvas.getContext("2d");

/*updateView()
itérer sur array, et dessiner les pixels représentant les cellules vivantes
board.fillRect(x_start, y_start, rect_Width, rect_Height);*/




