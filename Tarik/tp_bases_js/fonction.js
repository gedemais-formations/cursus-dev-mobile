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
let array = [189, "Hello World !", true, 42.42];

function exo2 (n1, n2, n3, n4, n5) {
    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4);
    console.log(n5);

    return 0;
}

exo2(entier, chaine, booleen, flottant, array);