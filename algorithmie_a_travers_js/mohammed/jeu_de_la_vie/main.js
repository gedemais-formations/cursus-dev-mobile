const alive_color= "black";
const dead_color = "white";

const cell_size = 8;
const width = 50;
const height = 50;
const px_width =width * cell_size;
const px_height =height *cell_size;

 const filling_rate = 20; //pourcentage de chances qu'une cellule apparaisse vivante

const board_canvas =document.getElementById('board');
const board =board_canvas.getContext('2d');

let array = []; // Model data strucure 
// Genere et retourne un nombre aleatoire entre 0 et max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function draw_background() {

board_canvas.width =px_width; //largeur en pixels du canvas
board_canvas.height = px_height; // hauteur en pixels du canvas
/*console.log(board_canvas.width, board_canvas.height);*/
board.fillStyle = dead_color; //definir la couleur de flush
board.fillRect(0, 0, px_width, px_height);// flush le canvas
//board.stroke();//

board.strokeStyle = "black"; //definir la couleur de la grille
//board.moveTo(0, 0);  //poser le crayon
//board.lineTo(px_width, px_height);

for(let x =0; x < px_width; x += cell_size) //Iterer sur le canvas de cellule en cell
{ 
    board.moveTo(x, 0);  //poser le crayon à x, y
    board.lineTo(x, px_height);// Bouger le crayon jusqu' a x, y
      
}
for(let y =0; y < px_width; y += cell_size)
//for(let y =0; y < 300; y += cell_size)
{
    board.moveTo(0, y);  //poser le crayon
    board.lineTo(px_width, y);

}

board.stroke(); //affiche le resultat a l'ecran
}
function generate_matrix()
{

    for( let x =0; x < width; x++)
    {
        array.push([]);
        for (let y =0; y < height; y++)
        {
        //let r = getRandomInt(100);
       // if ( r < filling_rate)
           // array[x].push(true);
          //  else
           // array[x].push(false);
            array[x].push(getRandomInt(100) < filling_rate);
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
