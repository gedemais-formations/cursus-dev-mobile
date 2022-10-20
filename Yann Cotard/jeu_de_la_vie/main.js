//définition couleur des pixels vivants ou morts
const alive_color = "black";
const dead_color = "white";

//définition taille cellule (en px)
const cell_size = 8;

//définition largeur et hauteur du canvas (en nombre de cellule)
const width = 50;
const height = 50;

//defintion du canvas en pixel
const px_width = width * cell_size;
const px_height = height * cell_size;

//pourcentage de chances qu'une cellule apparaisse vivante
const filling_rate = 20;

//obtention de l'élément canvas dans le html
const board_canvas = document.getElementById("board");

//définition du context dans le canvas
const board = board_canvas.getContext("2d");


//déclaraton du tableau qui stockera nos données
let array = [];//Model Data Structure

function getRandomInt(max) 
{
  return Math.floor(Math.random() * max)
};

/*updateView()
itérer sur array, et dessiner les pixels représentant les cellules vivantes
board.fillRect(x_start, y_start, rect_Width, rect_Height);*/

function updateView(){
  board.fillStyle=alive_color;
  for(let x = 0; x<width; x++){
    for(let y =0; y<height; y++){
 
      if(array[x][y]){
        board.fillRect(x*cell_size, y*cell_size, cell_size, cell_size);
      }
   
    }
  }
};

/* count_neighbours
Compte le nombre de voisins vivants d'une cellule.
*/
function count_neighbours(x, y)
{
    let result = 0;
//  console.log(x-1, y-1);
   
      if(x>0 && y>0 && array[x-1][y-1]==true){
        result++
      }
      if(x>0 && y>0 && array[x][y-1]==true){
        result++
      }
      if(x>0 && y>0 && array[x+1][y-1]==true){
        result++
      }
      if(x>0 && y>0 && array[x-1][y]==true){
        result++
      }
      if(x>0 && y>0 && array[x+1][y]==true){
        result++
      }
      if(x>0 && y>0 && array[x-1][y+1]==true){
        result++
      }
      if(x>0 && y>0 && array[x][y+1]==true){
        result++
      }
      if(x>0 && y>0 && array[x+1][y+1]==true){
        result++
      }
    


  return result;
    
}
// count_neighbours()


/* update_model
Itere sur array pour appliquer les regles du jeu de la vie sur chacune des cellules du board.
(Creer la fonction count_neighbours pour compter les voisins d'une cellule)
Si une cellule vivante a moins de 2 voisins, elle meure de solitude
Si une cellule vivante a plus de 3 voisins, elle meure de surpopulation
Si une cellule morte a 3 voisins, elle devient vivante
Si une cellule a 2 voisins, elle conserve son etat actuel*/

function update_model()
{
  for(let x=0; x<width; x++){
    for(let y=0; y<height; y++){
      console.log(count_neighbours(x, y));
    }
  }
}

function draw_background() {
  board_canvas.width = px_width; //largeur en pixel du canvas
  board_canvas.height = px_height; //hauteur en pixel du canvas
  board.fillStyle = dead_color; //fillStyle propriété spécifique  à Canvas qui définit la couleur de la cellule
  board.fillRect(0, 0, px_width, px_height); //flush le canvas
  board.strokeStyle = "black"; //definir la couleur de la grille
  // board.moveTo(0, 0); //poser le crayon
  // board.lineTo(px_width, px_height);

  //pour construire la grille
  for (let x = 0; x < px_width; x += cell_size) {
    //itérer sur le canvas de cellules en cellules
    board.moveTo(x, 0); //poser le crayon à 0, 0
    board.lineTo(x, px_height); //bouger le crayon jusqu
  }

  for (let y = 0; y < px_height; y += cell_size) {
    //itérer sur le canvas de cellules en cellules
    board.moveTo(0, y); //poser le crayon à 0, 0
    board.lineTo(px_width, y); //bouger le crayon jusqu

  }

  board.stroke(); //affiche le resultat à l'écran
}

//fonction pour générer le tableau qui contiendra toutes les coordonnées des cellules
  function generate_matrix(){
    for(let x = 0; x<width; x++){
      
      array.push([]);//pour générer un tableau vide
      for(let y=0; y<height; y++){
       array[x].push(getRandomInt(100) < filling_rate);
       /*
       revient à faire la même chose que :
       let r=getrandomInt(100);
       if(r<fillinRate)
        array[x].push(true);
      else
      array[x].push(false);

       */ 
      }
    }
    console.log(array);
  }


generate_matrix();
draw_background();
updateView();
update_model();

setInterval(async function tick() {
}, 1000);

// setInterval est la pour permettre au script de s'executer toutes les 1000ms
// apres sa premiere execution (dans l'en-tete html par exemple).
