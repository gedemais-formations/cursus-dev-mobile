const alive_color= "black";
const dead_color = "white";

const cell_size = 24;//normalement c'est 8
const width = 4; //normalement 50
const height = 3;//normalement 50
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

  /*update_view
  Iterer sur arry et de dossiner les pixels  representats les cellules vivantes;
  board.fillRect( x_start, y_start, x_end, y_end);*/

  function update_view()
     {
        board.fillStyle = alive_color;
      for (let x = 0; x <  width; x++ ) 
      
       for(  let y = 0; y < height; y++) 
       { 
        
        if (array[x][y] == true) 
       board.fillRect( x *cell_size, y *cell_size, cell_size, cell_size);
        
     }

     }

     /* count_neighbours
Compte le nombre de voisins vivants d'une cellule.
*/
function count_neighbours(x, y)
{
 let cpt_vivant = 0;
    for( let line =0; line <4 ; line++) 
    {
    
    
    for( let col =0; col < 3 ; col++)
    { 
         if (array[col][line] == true)
         {
        cpt_vivant++;
         }
 } 
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
//
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
     array = [];
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
//draw_background();
//generate_matrix();
//update_view();
setInterval(async function tick() { 
   
   draw_background();
    generate_matrix();
    update_view();
}, 1000);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
