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

/* update_view(
    Iterer sur array, et de dessiner les pixels representants les cellules vivantes;
    board.fillRect(strat, rect_width_, height_end)
)
*/

function update_view(){
    for(let x = 0; x < width; x++){
        for(let y=0; y < height; y++){
            if(array[x][y]){
                let x2 = x*cell_size;
                let y2 = y*cell_size;

                board.fillStyle = alive_color;
                board.fillRect(x2,y2,cell_size,cell_size);
            }
        }
    }
}

function draw_background() {
    board_canvas.width = px_width;//largeur en pixel
    board_canvas.height = px_height; // hauteur en pixel
    board.fillStyle = dead_color;//Definir la couleur
    board.fillRect(0,0,px_width,px_height); //fiilRect(x du point de depart, y du point de depart, X du point d'arrivé, y du point d'arrivé ) ; Flush le canvas

    board.strokeStyle = "black"; // Definir couleur de la grille
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
            array[x].push((getRandomInt(100) < filling_rate));// genere un nb aleatoire entre  0  et 100 , si  le nb est inf a filingrate  on push true sinon on push false
        }
    }
    console.table(array);
}

function count_neighbours(x,y) {
    let nb_voisin = 0;
    let result = 0;

    let x_min= (x == 0)? 0 : x-1;
    let x_max = (x == width-1)? width : x+2;
    let y_min= (y == 0)? 0 : y-1;
    let y_max = (y == height-1)? height : y+2;


    for(let i = x_min ; i < x_max; i++){
        for(let j = y_min ; j < y_max; j++){
            nb_voisin++;

            if (array[i][j]) {
                result++;
                // console.log("+ "+ n+" voisin(s) en vie");
            }
        }
        
    }

    if(array[x][y] && result>0){
        result--;
    }

    // console.log("je suis la cellule array["+x+"]["+y+"] et j'ai "+(nb_voisin-1) + " voisins au total dont " + result+" voisin(s) en vie");
    return result;
}

function test(){
    let new_array =[];
    for(let i = 0 ; i < width; i++){
        new_array.push([]);
        for(let j = 0 ; j < height; j++){
            if (array[i][j]) {
                console.log("cell vrai");
                if(count_neighbours(i,j) > 3 || count_neighbours(i,j) < 2) {
                    console.log( "je suis la cellule array["+i+"]["+j+"] je suis " + array[i][j] + " et j'ai "+count_neighbours(i,j)+" voisins en vie ----");
                    new_array[i].push(false);
                    board.fillStyle = dead_color;
                    board.fillRect(i*cell_size,j*cell_size,cell_size,cell_size);
    
                }else{
                    console.log( "je suis la cellule array["+i+"]["+j+"] je suis " + array[i][j] + " et j'ai "+count_neighbours(i,j)+" voisins en vie ");

                    new_array[i].push(array[i][j]);
                }

            }else{
                console.log("cell fausse");
                if(count_neighbours(i,j) == 3) {
                    console.log( "je suis la cellule array["+i+"]["+j+"] je suis " + array[i][j] + " et j'ai "+count_neighbours(i,j)+" voisins en vie +++++");

                    new_array[i].push(true);

                }else{
                    console.log( "je suis la cellule array["+i+"]["+j+"] je suis " + array[i][j] + " et j'ai "+count_neighbours(i,j)+" voisins en vie");

                    new_array[i].push(array[i][j]);
                }
            }
        }
    }
    array = new_array;
    console.table(array);
    update_view();
}


//draw_background();
generate_matrix();
update_view();

 test();
// test();
//update_view()


setInterval(async function tick() {
    draw_background();
    test();
    update_view();
}, 100);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/

