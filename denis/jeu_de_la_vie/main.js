const alive_color = "black";
const dead_color = "white";

const cell_size =20; // normalement c'est 8

const width = 4; //normalement cest 50
const heigth = 3; // 50 aussi 

const px_width = width * cell_size;
const px_heigth = heigth * cell_size;

const filling_rate =20; // Pourcentage de chances qu'une cellule apparaise vivante.

const board_canvas = document.getElementById('board');

const board = board_canvas.getContext('2d');

let array =[]; // model data structure

function udateVieuw()
 {
    board.fillStyle = alive_color;
    for (let x =0; x < width; x++)
     for ( let y = 0; y < heigth; y++)
     //
        if (array[x][y] == true)
        board.fillRect (x *cell_size, y * cell_size, cell_size, cell_size);
     }
    
 //
 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//
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
    
   
    generate_matrix();
}
function generate_matrix()
{
    array = [];
    for (let x = 0; x < width; x++){

        array.push([]);

        for (let y = 0; y < heigth; y++)
        {

            array[x].push(getRandomInt(100) < filling_rate);
        } 
    }
    console.log(array);
}
/* count_neighbours
Compte le nombre de voisins vivants d'une cellule.
*/
function count_neighbours_joffrai(x, y)
{

    let result = 0;
    
    return result;
    
}
/////////////////
function count_neighbours(x, y)
{
    let cpt_vivant = 0;
    for(let line =0; line<3; line++){
        
    for(let col =0 ; col< 3; col++){
      
        if(array [col][line]== true)
        {
           cpt_vivant++; 
    }
}
    // 
    }
    return cpt_vivant;
}

/* update_model
Itere sur array pour appliquer les regles du jeu de la vie sur chacune des cellules du board.
(Creer la fonction count_neighbours pour compter les voisins d'une cellule)
Si une cellule vivante a moins de 2 voisins, elle meure de solitude
Si une cellule vivante a plus de 3 voisins, elle meure de surpopulation
Si une cellule morte a 3 voisins, elle devient vivante
Si une cellule a 2 voisins, elle conserve son etat actuel*/

function update_model()
{
     
}
////////////////////////////////////////

setInterval(async function tick() {
   console.log();

   generate_matrix(); 
    draw_bakground();
    udateVieuw ();
    
}, 1000);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
