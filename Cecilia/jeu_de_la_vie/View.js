// View() :
// Propriétés :
//     - alive_color
//     - dead_color
//     - cell_size
//     - px_width
//     - px_height
//     - board
//     - board_canvas

// Méthodes :
//     - update_view()
//     - draw_background()


function View(alive_color = "black", dead_color = "white") {
    this.alive_color = alive_color;
    this.dead_color = dead_color;
    this.cell_size = 8;
    this.px_width =  model.width * this.cell_size;
    this.px_height = model.height * this.cell_size;
    this.board_canvas = document.getElementById('board');
    this.board = this.board_canvas.getContext('2d');


    this.update_view = function(){
        for(let x = 0; x < model.width; x++){
            for(let y = 0; y < model.height; y++){
                if(model.array[x][y]){
                    let x2 = x*this.cell_size;
                    let y2 = y*this.cell_size;
    
                    this.board.fillStyle = this.alive_color;
                    this.board.fillRect(x2,y2,this.cell_size,this.cell_size);
                }
            }
        }
    }

    this.draw_background = function() {
        this.board_canvas.width = this.px_width;//largeur en pixel
        this.board_canvas.height = this.px_height; // hauteur en pixel
        this.board.fillStyle = dead_color;//Definir la couleur
        this.board.fillRect(0,0,this.px_width,this.px_height); //fiilRect(x du point de depart, y du point de depart, X du point d'arrivé, y du point d'arrivé ) ; Flush le canvas
    
        this.board.strokeStyle = "black"; // Definir couleur de la grille
        //board.moveTo(0,0); // poser le crayon
        //board.lineTo(px_width, px_height);
    
        for(let x = 0; x < this.px_width; x+=this.cell_size){
            this.board.moveTo(x,0); // poser le crayon à x, y
            this.board.lineTo(x, this.px_height); //bouger le crayon à x, y
    
            // si le canvas est un carré
            //board.moveTo(0,x); // poser le crayon à x, y
            //board.lineTo(px_width, x); //bouger le crayon à x, y
        }
    
        for(let y = 0; y < this.px_height; y+=this.cell_size){
            this.board.moveTo(0,y); // poser le crayon à x, y
            this.board.lineTo(this.px_width, y); //bouger le crayon à x, y
        }
    
        this.board.stroke(); //Affiche le restultat a l'écran
    }
}