let dessin = document.getElementById('dessin'); //  pour <canvas id="dessin"></canvas>
let ctx = dessin.getContext('2d'); //ctx variable nommée  au pif, ctx pour context
ctx.fillStyle= "black";
ctx.fillRect(10,10,10,5); // fillRect pour un rectangle


// Instruction  24/10/222

// Variables :
// alive_color : Couleur des cellules vivantes (view)
// dead_color : Couleur des cellules mortes (view)
// cell_size : Largeur et hauteur en pixels des carrés représentants les cellules (view)
// width : Largeur du board en nombre de cellules (model)
// height : Hauteur du board en nombre de cellules (model)
// px_width : Largeur du board en pixels (view)
// px_height : Largeur du board en pixels (view)
// filling_rate : Taux de remplissage du board en cellules vivantes au lancement (model)
// board_canvas : Element HTML de type canvas (view)
// board : Contexte de dessin dans le canvas (2D dans notre cas) (view)
// array : Tableau de tableaux contenants les valeurs booleenes qui définissent chaque cellule du board comme vivante ou morte (model)
// new_array : Tableau similaire a array, permettant le stockage temporaire des modifications apportées au board par les regles du jeu de la vie.

// Fonctions :
// getRandomInt(max) : Retourne un nombre entier entre 0 et max
// update_view() : Actualise la page HTML en affichant la nouvelle version du board calculé dans update_model()
// count_neighbours(x, y) : Compte les voisins vivants d'une cellule située en [x][y] sur le board
// update_model() : Calcule la nouvelle version du board en appelant count_neighbours sur chaque cellule, et en appliquant la règle correspondant à son nombre de voisins vivants
// draw_background() : Dessine une grille noire sur un board de la couleur des cellules mortes dans le canvas.
// generate_matrix() : Créé array, et le remplit de valeur aleatoires en prenant filling_rate en compte comme un pourcentage de chances pour chaque cellule d'apparaitre vivante au debut de la simulation.
// Model() :
// Propriétés :
//     - array
//     - new_array
//     - width
//     - height
//     - filling_rate

// Méthodes :
//     - getRandomInt(max)
//     - generate_matrix()
//     - count_neighbours(x, y)
//     - update_model()


// View() :
// Propriétés :
//     - alive_color
//     - dead_color
//     - cell_size
//     - px_width
//     - px_height
//     - board
//     - board_canvas

// Méthodes :
//     - update_view()
//     - draw_background()
