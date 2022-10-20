const alive_color = "black";
const dead_color = "white";

const cell_size =8;

const width = 50;
const heigth = 50;

const px_width = width * cell_size;
const px_heigth = heigth * cell_size;

const filling_rate =20; // Pourcentage de chances qu'une cellule apparaise vivante.

const board_canvas = document.getElementById('board');

const board = board_canvas.getContext('2d');

let array =[]; // model data structure

function getRandomInt(max)
 {
    return Math.floor(Math.random() * max)
  };
function draw_bakground()
{
    board_canvas.width = px_width; // largeur en pixels du canvas
    board_canvas.height = px_heigth; // Hauteur en pixel du canvas
    board.fillStyle = dead_color; // definir la couleur de flush
    board.fillRect(0, 0, px_width, px_heigth); // flush le canvas 
console.log(px_width);
console.log (px_heigth);
    board.fillStyle = "black"; // Definir la couleur de la grille
    
    
   //board.moveTo(0, 0); //poser le crayon a x, y 
   //board.lineTo(px_width,  px_heigth); // bouger le crayon jusqu'a x, y


    for (let x = 0; x < px_width; x += cell_size ){
        board.moveTo(x, 0 ); 
        board.lineTo(x, px_heigth);   
    } 
     
    for (let y = 0; y < px_heigth; y += cell_size ){
        board.moveTo(0, y ); 
        board.lineTo( px_width, y );   
    } 
     
    board.stroke(); // affiche le resultat a l'ecran
    
    function generate_matrix()
    {
        for (let x = 0; x < width; x++){

            array.push([]);

            for (let y = 0; y < heigth; y++)
            {

                array[x].push(getRandomInt(100) < filling_rate);
            } 
        }
        console.log(array);
    }
    generate_matrix();
}


setInterval(async function tick() {
   console.log("Hello");
    draw_bakground();

}, 1000);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
