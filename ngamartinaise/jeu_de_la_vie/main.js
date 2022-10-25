
const cycle = document.getElementById("cycle");
// console.log("comptage de cycle", cycle.value);
const btncontinuer = document.getElementById("continuer");
const vivantspan = document.getElementById("vivant");
const mortspan = document.getElementById("mort");
// console.log(vivant);
//recupère le bouton
const changecolor =document.getElementById("changecolor");


btncontinuer.addEventListener("click",function(e){  

});

// choisir la couleur des celleules si vivante ou morte qui ne change pas  (const)
let alive_color = "black";
let dead_color = "white";
vivantspan.style.backgroundColor= alive_color;
mortspan.style.backgroundColor=dead_color;
//  on met l'évement click sur le  bouton 
changecolor.addEventListener("click",function(e){
const {vivant,mort} = couleuraleatoire();
// console.log(alive_color,dead_color);
alive_color=`#${vivant}`
dead_color=`#${mort}`
vivantspan.style.backgroundColor= alive_color;
mortspan.style.backgroundColor= dead_color;


});


// on definit une taille de cellule qui ne change pas (const)
const cell_size = 8; // ici c'est 8  mais j'ai zooomeé à   20
// on definit la largeur et la hauteur  de la longueur et la largeur
const width = 50; //  ici c'est 50  pour les deux mais mis a 10 pour avoir 1 cellule
const height = 50;
const px_width = width * cell_size;
const px_height = height * cell_size;

// on recupère l'id  de canvas dans html
const board_canvas = document.getElementById('board');
//on dessine en 2 dimenssion dans canvas (rectangle)
const board = board_canvas.getContext('2d');
// model data structure ( on crée un tablea vide pour mettre les cellules dédans plus tard)
let array = [];
//pourcentage de chance pour qu'une cellule apparaisse vivante
const filling_rate = 20;
function getRandomInt(max) {

    return Math.floor(Math.random() * max);
}
// pour faire apparaitre une des cellules morte ou vivante dans le tableau selon leur couleur
function update_view() {
    // mettre la couleur qu'on va definir
    board.fillStyle = alive_color;
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            // cellules vivantes et morte contenus dans array
            if (array[x][y] == true) {
                //pour afficher le cadriage et la couleur des cellules.
                board.fillRect(x * cell_size, y * cell_size, cell_size, cell_size);


            } else {

            }

        }
    }
}
/* fonction pour compter le nombre  de cellule vivante autoure d'une cellule choisit on prends 1 cellule et on compte les cases autour diagonal y compris ici on en a 8 cellules autour.
 puis on  delimite l'intervalle dans lequel nous devons compter x(0 à width)  et y (0 à height) */

function count_neighbours(x, y) {
    let result = 0;
    if (y < height - 1 && array[x][y + 1] == true) {
        result++;
    }
    // console.log("sud");
    // console.log(array[x][y + 1]);
    // console.log(result);



    if (y > 0 && array[x][y - 1] == true) {
        result++;
    }
    // console.log("nord");
    // console.log(array[x][y - 1]);
    // console.log(result);

    if (x > 0 && array[x - 1][y] == true) {
        result++
    }

    // console.log("oeust");
    // console.log(array[x- 1][y]);
    // console.log(x- 1, y );
    // console.log(result);

    if (x < width - 1 && array[x + 1][y] == true) {
        result++;
    }
    // console.log("est");
    // console.log(array[x+ 1][y ]);
    // console.log(x+ 1, y );
    // console.log(result);


    if (x > 0 && y > 0 && array[x - 1][y - 1] == true) {
        result++;
    }
    // console.log("nord oeust");
    // console.log(array[x- 1][y - 1]);
    // console.log(x- 1, y - 1);
    // console.log(result);


    if (x < width - 1 && y > 0 && array[x + 1][y - 1] == true) {
        result++;
    }
    //  console.log("nord est");
    // console.log(array[x+1][y - 1]);
    // console.log(x+1, y - 1);
    // console.log(result);

    if (x > 0 && y < height - 1 && array[x - 1][y + 1] == true) {
        result++;
    }
    //   console.log("sud oeust");
    // console.log(array[x- 1][y + 1]);
    // console.log(x- 1, y + 1);
    // console.log(result);

    if (x < width - 1 && y < height - 1 && array[x + 1][y + 1] == true) {
        result++;
    }
    //   console.log("sud est");
    // console.log(array[x+1][y + 1]);
    // console.log(x+1, y + 1);
    // console.log(result);


    return result;
}
//rend des combinaissons(chiffre et lettres) et retourne deux combinaisson de couleur

function couleuraleatoire(){
    const vivant = Math.floor(Math.random()*16777215).toString(16);
    const mort = Math.floor(Math.random()*16777215).toString(16);
return {vivant,mort};

}

/* fonction qui definit les règles du jeu
 Si une cellule vivante a moins de 2 voisins, elle meure de solitude

Si une cellule vivante a plus de 3 voisins, elle meure de surpopulation

Si une cellule morte a 3 voisins, elle devient vivante

Si une cellule a 2 voisins, elle conserve son etat actuel*/
function update_model() {
    // je met le résultat du retour de la fonction de remplir_new_array dans new_array 
    let new_array = remplir_new_array();
    // on definit une variable pour mettre le nombre de cellules vivantes voisine
    let comptagecells;
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

            comptagecells = count_neighbours(x, y);

            if (comptagecells < 2) {
                new_array[x][y] = false;
                // "cellulle vivante meurt"

            } if (comptagecells > 3) {
                new_array[x][y] = false;
                // " celle vivante meurt"

            } if (comptagecells == 3) {
                new_array[x][y] = true;
                // "cellule morte devient vivante"

            } if (comptagecells == 2 && array[x][y] == true) {
                new_array[x][y] = true;
                // " la cellule concerve son état"
            }


        }

        // console.table(new_array);


    }
    // on remplace l'ancien tableau par le nouveau creer
    array = new_array;
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
    // iterer sur le canvas de cellule 
    for (let x = 0; x < px_height; x += cell_size) {

        // on va tracer des ligne verticales et horizontales moveTo(poser le rayon a l'endroit) et board.lineTo(pour tracer la ligne)
        //pour ligne vertical(x)
        board.moveTo(x, 0);
        board.lineTo(x, px_height);
    }// on affiche les cellules
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
            array[x].push(getRandomInt(100) < filling_rate);

        }
    }

    console.log(array);
}
function remplir_new_array() {
    let new_array = [];
    console.log("new_array");
    // pour que le tableau new_array ne soit pas vide on met false pour avoir un valeur dans le tableau par défaut
    for (let x = 0; x < width; x++) {
        new_array.push([]);
        for (let y = 0; y < height; y++) {
            // console.log(x, y)
            new_array[x].push(false);

        }

    }

    // console.log(new_array);
    return new_array;
}

generate_matrix();
//array = remplir_new_array();
// on fait un test avec cette valeur sur le tableau new_array avec 4 valeurs test mais on fait qu' avec des true car le tableau est remplit avec false par defaut.
array[2][2] = true;
array[1][4] = true;
array[9][7] = true;

//console.log(array);
// onsole.log(count_neighbours(1,2 ));
// console.log(count_neighbours(1,3 ));
// console.log(count_neighbours(1,4 ));

// console.log(count_neighbours(9,7 ));
// console.log(count_neighbours(9,6 ));
// console.log(count_neighbours(9,5 ));


// console.log(count_neighbours( 1,1 ));
// console.log(count_neighbours(1,2 ));
// console.log(count_neighbours(1,3 ));
// console.log(count_neighbours(2,1 ));
// console.log(count_neighbours(3,1 ));
// console.log(count_neighbours(3,2 ));
// console.log(count_neighbours(3,3 ));
// console.log(count_neighbours(2,3 ));

// test des cellules vivantes et morte

array[1][4] = true;
array[1][5] = true;
array[1][6] = true;
array[2][5] = true;
array[0][5] = true;




//update_model();
// draw_backgroung();
// update_view();

setInterval(async function tick() {
    // on l'appel ici pour lui dire de faire en tel et tel de min/s
    update_model();
    draw_backgroung();
    update_view();


}, 1000);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/



