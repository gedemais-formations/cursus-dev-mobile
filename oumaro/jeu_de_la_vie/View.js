

export function View(alive_color, dead_color, cell_size, px_width , px_height, board , board_canvas){

        this.alive_color = alive_color;
        this.dead_color = dead_color;
        this.cell_size = cell_size;
        this.px_width = px_width;
        this.px_height = px_height;
        this.board = board;
        this.board_canvas = board_canvas;



        this.update_view = function(array){
            for (let a = 0; a < array.length; a++) {
              for (let i = 0; i < array[a].length; i++) {
                if (array[a][i] == true) {
                  (this.board.fillStyle = this.alive_color),
                    this.board.fillRect(a * this.cell_size, i * this.cell_size, this.cell_size, this.cell_size);
                  //point de depart,point d'arrivée, largeur,hauteur
                  this.board.stroke();
                }
              }
            }
          }




          this.draw_background = function(){
            this.board_canvas.width = this.px_width; //largeur en pixels du canvas
            this.board_canvas.height = this.px_height; //hauteur en pixels du canvas
            this.board.fillStyle = this.dead_color; //pour changer la couleur
            this.board.fillRect(0, 0, this.px_width, this.px_height); // pour créer des cases
          
            //board.strokeStyle ="red";
          
            for (let x = 0; x < this.px_width; x += this.cell_size) {
              // Iterer sur le canvas de cellule en cell
          
              this.board.moveTo(x, 0); //poser le crayon
              this.board.lineTo(x, this.px_height); //bouge le crayon jusqu'a x,y
            }
          
            for (let y = 0; y < this.px_height; y += this.cell_size) {
              // Itérer sur le canvas de cellule en cell
          
              this.board.moveTo(this.px_height, y); //poser le crayon
              this.board.lineTo(0, y); //bouge le crayon jusqu'a x,y
            }
          
            this.board.fillStyle = "black"; //definir la couleur de la grille
          
            this.board.stroke(); //affiche le resultat
          }
          
          }


          