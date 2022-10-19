const alive_color = "black";
const dead_color = "white";

const cell_size = 8;
const width = 50;
const height = 50;
const px_width = width * cell_size;
const px_height = height * cell_size;

const filling_rate=20; // Pourcentage de chance qu'une cellule apparraisse  vivante .

const board_canvas = document.getElementById('board');
const board = board_canvas.getContext('2d');

let array = []; //Model data structure

//Genere et retourne un nombre aleatoire entre 0 et max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function draw_background() {
    board_canvas.width = px_width;//largeur en pixel
    board_canvas.height = px_height; // hauteur en pixel
    board.fillStyle = dead_color;//Definir la couleur
    board.fillRect(0,0,px_width,px_height); //fiilRect(x du point de depart, y du point de depart, X du point d'arrivé, y du point d'arrivé ) ; Flush le canvas

    board.strokeStyle = "aquamarine"; // Definir couleur de la grille
    //board.moveTo(0,0); // poser le crayon
    //board.lineTo(px_width, px_height);

    for(let x = 0; x < px_width; x+=cell_size){
        board.moveTo(x,0); // poser le crayon à x, y
        board.lineTo(x, px_height); //bouger le crayon à x, y

        // si le canvas est un carré
        //board.moveTo(0,x); // poser le crayon à x, y
        //board.lineTo(px_width, x); //bouger le crayon à x, y
    }

    for(let y = 0; y < px_height; y+=cell_size){
        board.moveTo(0,y); // poser le crayon à x, y
        board.lineTo(px_width, y); //bouger le crayon à x, y
    }

    board.stroke(); //Affiche le restultat a l'écran
}

function generate_matrix() {
    for(let x = 0; x < width; x++){
        array.push([]);
        for(let y=0; y < height; y++){
            array[x].push((getRandomInt(100)  < filling_rate ? true : false));
        }
    }
    console.log(array);
}

generate_matrix();

setInterval(async function tick() {
   draw_background();
}, 1000);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
