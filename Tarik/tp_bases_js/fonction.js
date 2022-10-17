/* Exercice 2 :
fichier de rendu : bases/fonction.js
Copiez la declaration des cinq variables depuis variables.js vers fonction.js.
Ecrivez ensuite une fonction qui prend ces cinq variables en parametres, et
qui les affiche avec console.log() avant de retourner la valeur 0.
Appelez ensuite cette fonction. */

let entier = 189;
let chaine = "Hello World !";
let booleen = true;
let flottant = 42.42;
let array = [entier, chaine, booleen, flottant];

function exo2() {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

exo2();
