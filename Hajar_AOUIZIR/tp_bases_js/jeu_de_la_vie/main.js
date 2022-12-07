const alive_color = "black";
const dead_color = "white";

const cell_size = 8;
const width = 50;
const height = 50;
const px_width = width * cell_size;
const px_height = height * cell_size;

const filling_rate = 20; //Pourcentage de chances qu'une cellule apparaisse vivante

const board_canvas = document.getElementById("board");
const board = board_canvas.getContext("2d");

let array = [];//model data structure
 
//genere et retourne un nbr aleatoire entre 0 et max
function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

/* update_view()
Iterer sur array, et de dessiner les pixels representants les cellules vivantes;
board.fillRect(x_start, y_start, rect_width, rect_height);
*/

function update_view()
{
    board.fillStyle=alive_color;
    for(let x=0 ; x < width; x++)
    {
            for(let y=0 ; y < height ; y++)
            {
                 if (array[x][y]==true)
                     board.fillRect(x*cell_size, y*cell_size, cell_size, cell_size);
            }
    }
}

/* count_neighbours
Compte le nombre de voisins vivants d'une cellule.
*/

function count_neighbours(x, y)
{
    let result = 0;
   
    if(x<width - 1 && y<height - 1 && array[x+1][y+1]==true)
        result++;

    if(x < width - 1 && array[x+1][y]==true)
        result++;
                
    if(y<height - 1 && array[x][y+1]==true)
        result++;
                
    if(x>0 && y>0 && array[x-1][y-1]==true)
        result++;

    if(x>0 && array[x-1][y]==true)
        result++;
            
    if(x<width - 1 && y>0 && array[x+1][y-1]==true)
        result++;

    if(x>0 && y<height - 1 && array[x-1][y+1]==true)
        result++;

    if(y>0 && array[x][y-1]==true)
        result++;

return result;
}

/* update_model
Itere sur array pour appliquer les regles du jeu de la vie sur chacune des cellules du board.
(Creer la fonction count_neighbours pour compter les voisins d'une cellule)
Si une cellule vivante a moins de 2 voisins, elle meure de solitude
Si une cellule vivante a plus de 3 voisins, elle meure de surpopulation
Si une cellule morte a 3 voisins, elle devient vivante
Si une cellule a 2 voisins, elle conserve son etat actuel*/

function update_model(){
    let newArray = [];
    for(let x=0 ; x < width; x++)
    {
        newArray.push([]);
        for(let y=0 ; y < height ; y++)
        {
            let neighbours = count_neighbours(x,y);
            let cell;
            if (neighbours < 2)
                cell = false;

            if (neighbours==2 && array[x][y]==true)

            if(neighbours==3)
                cell=true;

            if(neighbours>3)
                cell=false;

            newArray[x].push(cell);
        }
    }
    array = newArray;
}

function draw_background() {
  board_canvas.width = px_width; // largeur en px du canvas
  board_canvas.height = px_height;
  board.fillStyle = dead_color; //Definir la couleur de flush
  board.fillRect(0, 0, px_width, px_height); // flush le canvas

  board.strokeStyle = "black"; // Definir la couleur de la grille

  /* board.moveTo(0, 0); //diagonale
   board.lineTo(px_width, px_height);*/


  for (let x = 0;x < px_width;x += cell_size) // iterer sur le canvas de cellule en cellule
   {
    board.moveTo(x, 0); //poser le crayon à x y
    board.lineTo(x, px_height); //bouger le crayon jusqu'à x,y
  }

  for (let y = 0;y < px_height;y += cell_size) // iterer sur le canvas de cellule en cellule
{
    board.moveTo(0, y); //poser le crayon à x y
    board.lineTo(px_width, y); //bouger le crayon jusqu'à x,y
  }

  board.stroke(); // Affiche le résultat à l'écran
}

function generete_matrix()
{
    for(let x = 0; x< width; x++)
{
    array.push([]);
     for(let y = 0; y <height; y++)
      {
        /*let r = getRandomInt(100);// genere un nbre aléatoire entre0 100
        if(r< filling_rate) // si le nbr aleatoire est inferieur a filling_rate
        array[x].push(true);// push true
        else // sinon
        array[x].push(false); //Push false*/

        array[x].push(getRandomInt(100)<filling_rate); //la même chose en 1 lignegit prédicat
       }
    
}
console.log(array);
}


generete_matrix();


setInterval(async function tick() {
    update_model();
    draw_background();
    update_view();

}, 1000);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/