const cell_size = 8;
const width = 80;
const height = 80;
const px_width = width * cell_size;
const px_height = height * cell_size;
const board_canvas = document.getElementById('board');
const board = board_canvas.getContext('2d');
const alive_color = "black";
const dead_color ='white';
const filling_rate = 20; //poucentage de chances qu'une cellule apparaisse vivante

let array = []; //mmodel de structure

function getRandomInt(max) { //génere un nombre aléatoire entre 0 et max
    return Math.floor(Math.random() * max)
  }


function draw_background(){


        // on créer la grille avec canvas.

    board_canvas.width = px_width;  //largeur en pixels du canvas
    board_canvas.height = px_height; //hauteur en pixels du canvas
    board.fillStyle = dead_color; //pour changer la couleur
    board.fillRect(0, 0, px_width, px_height); // pour créer des cases

    //board.strokeStyle ="red";

    for(let x =0; x < px_width ; x += cell_size) { // Iterer sur le canvas de cellule en cell

        board.moveTo(x,0);    //poser le crayon
        board.lineTo(x,px_height); //bouge le crayon jusqu'a x,y

    }

    for(let y =0; y < px_height ; y += cell_size) { // Itérer sur le canvas de cellule en cell

        board.moveTo(px_height,y);    //poser le crayon
        board.lineTo(0,y); //bouge le crayon jusqu'a x,y

    }

    board.fillStyle = "black"; //definir la couleur de la grille
   
    
    board.stroke();  //affiche le resultat

}



function genrate_matrix(){


    for(let x= 0; x< width; x++){ //créer les cases vide

        array.push([]);
        
        for(let y =0; y < height ; y++){ // donner une valeur à la case vide
           array[x].push(getRandomInt(100) < filling_rate) //si inferieur a filling_rate alors push TRUE sinon push FALSE

        }
    }


    console.log(array);

}


genrate_matrix();



setInterval(async function tick() {
    draw_background();

}, 1000);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
