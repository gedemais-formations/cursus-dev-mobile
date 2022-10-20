// choisir la couleur des celleules si vivante ou morte
const alive_color = "black";
const dead_color = "white";

// on definit une taille de cellule qui ne change pas
const cell_size = 8;
// on definit la largeur et la hauteur 
const width = 50;
const height = 50;
const px_width = width * cell_size;
const px_height = height * cell_size;


// on recupere l'id dans html
const board_canvas = document.getElementById('board');
//on dessine en 2 dimenssion dans canvas
const board = board_canvas.getContext('2d');
// model data structure
let array = [];
//pourcentage de chance pour qu'une cellule apparaisse vivante
const filling_rate = 20;
function getRandomInt(max) {

    return Math.floor(Math.random() * max)
}



        // premieer fonction du model view (fonction pour le  backgroung) pour dessiner
function draw_backgroung() {
        // pour limiter  le grow_background on fait const cell_size = 8 x const width = 50;=400,
        // const cell_size = 8 x const height = 50;=400  soit  400 , 400 sur  la console.log
    board_canvas.width = px_width;
    board_canvas.height = px_height;
        // console.log(board_canvas.width, board_canvas.height);

        // pour aller chercher la couleur qu'on veut
    board.fillStyle = dead_color;
        // on va dessiner un  rectangle
    board.fillRect(0, 0, px_width, px_height);
        // definir la couleur
    board.strokeStyle = "black";
        // iterer sur le canvas de cellule en cel
    for (let x = 0; x < px_height; x += cell_size) {

        // on va tracer des ligne verticales et horizontales moveTo(poser le rayon a l'endroit) et board.lineTo(pour tracer la ligne)
        //pour ligne vertical(x)
        board.moveTo(x, 0);
        board.lineTo(x, px_height);
    }
    for (let y = 0; y < px_width; y += cell_size) {
        // pour ligne horizontal(y)
        board.moveTo(0, y);
        board.lineTo(px_width, y)
    }
        // pour afficher le résultat à l'ecran dans ce context
    board.stroke();

}
        // pour acceder a mon tableau via des index et traiter des informations
        //  chaque case contient une cellule morte ou vivante
function generate_matrix() {
        //pour afficher la cologne des x
    for (let x = 0; x < width; x++) {
        // mettre la cologne de x dans le tableau
        array.push([]);
        for (let y = 0; y < height; y++) {
            // version 1
            //genere un nombre aletoire entre O et  100
            //let r = getRandomInt(100);
            // si le nombre aleatoire est inferieur a filling_rate
           // if(r< filling_rate)
           // array[x].push(true);
           // else
           // array[x].push(false);

             //version 2
           // prédicat(expression vrai ou fausse aleatoirement)
           array[x].push(getRandomInt(100)<filling_rate);

        }
    }

    console.log(array);
}
generate_matrix();





setInterval(async function tick() {
    // on l'appel ici pour lui dire de faire en tel et tel de min/s
    draw_backgroung();

}, 1000);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
