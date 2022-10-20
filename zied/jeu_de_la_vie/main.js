const alive_color = "black"; // couleur
const dead_color = "white";



const cell_size = 8; // taille pixel
const width = 50; // longueur du cadre
const height = 50; // hauteur du cadre
const px_width = width * cell_size;
const px_height = height * cell_size;

const filling_rate = 20; // pourcentage de chances qu'une cellule apparaisse vivante.

const board_canvas = document.getElementById('board'); // modifier html
const board = board_canvas.getContext('2d');


let array = []; // model data structure de tableau vide

function getRandomInt(max) // génere et retourne un nombre aléatoire entre 0 et max
 {
    return Math.floor(Math.random() * max)
  }

  /*  fonction update_view()
       iterer sur(avec une double boucle) array, et de dessiner les pixels representants les cellules vivantes;
       board. fillRect(x_start, y_start, rect_width, rect_height);
  */
function update_view() 
  {
      /*
       si la valeur est true => couleur   et  si la valeur est false => rien

     */
       board.fillStyle = alive_color;  // pour la couleur de la cellule
       for(let x = 0; x < width; x++)
       
           for(let y = 0; y < height; y++)
              
            {
                if (array[x][y] == true)
                     board.fillRect( x * cell_size, y * cell_size, cell_size, cell_size); // action de colorier la zone 
            }    
                    
  }
  
   
  /* count_neighbours 
Compte le nombre de voisins vivants d'une cellule.
*/
function count_neighbours(x, y)
{
    let result = 0;
    let  xw ;
    let  yz ;

       for( w = -1; w < 2; w++)
         for(z = -1; z < 2; z++)
         {
             xw = (x + w);
             yz = (y + z);
            if(xw >= 0 && yz < width-1 && yz >= 0 && xw < height-1)
                {
                    if (array[xw][yz])
                        result++;
                }
         console.log(result);
         }
  

    return result;
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
   
             


function draw_background()
{
     board_canvas.width = px_width; // larguer pixel
     board_canvas.height = px_height; // hauteur pixel
     board.fillStyle = dead_color; // defenir la couleur flush
     board.fillRect(0, 0, px_width, px_height); // dimension le canvas

     board.strokeStyle = "maroon"; // defenir la couleur de la grille
    // board.moveTo(0, 0); // poser le crayon coordonées suivant
    // board.lineTo(px_width, px_height); //  trace une diagonale

        for(let z = 0; z < px_width; z += cell_size) // Iterer sur le canvas de cellule en cellule
        {
            board.moveTo(z, 0); // poser le crayon à x,y
            board.lineTo(z, px_height); // glisser le crayon jusqu'à (x,y)
        }

        for(let z = 0; z < px_height; z += cell_size)
        {
            board.moveTo(0, z);
            board.lineTo(px_width, z);
        }

     board.stroke(); // demande d'affiche
}

    function generate_matrix()
    {
        for(let x = 0; x < width; x++)
        {
            array.push([]); // création d'un tableau vide dans array
             for(let y = 0; y < height; y++)
              {
              /*  let r = getRandomInt(100); // génere un nombre aléatoire entre 0 et 100
                 if (r < filling_rate)  // si le nombre aleatoire est inferieur o filling_rate
                    array[x].push(true); // push true ds array
                    else
                        array[x].push(false); // on remplit les sous tableaux */

                 array[x].push(getRandomInt(100) < filling_rate); // reliquat entre 2 valeurs       
              }
        }
        console.log(array);
    }

generate_matrix();
draw_background();
update_view();
count_neighbours();
/*
setInterval(async function tick()
 {
    
 } , 1000);
 */
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
