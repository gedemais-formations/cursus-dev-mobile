/*Exercice 2 :
fichier de rendu : bases/fonction.js
Copiez la declaration des cinq variables depuis variables.js vers fonction.js.
Ecrivez ensuite une fonction qui prend ces cinq variables en parametres, et
qui les affiche avec console.log() avant de retourner la valeur 0.
Appelez ensuite cette fonction. */

let entier = 189;
let chaine = "189";
let booleen = true;
let flottant = 42.2;
let array = [entier, chaine, booleen, flottant]

function returnVar(un, deux, trois, quatre, cinq) {
console.log(un)
console.log(deux)
console.log(trois)
console.log(quatre)
console.log(cinq)
return 0
} 

returnVar(entier, chaine, booleen, flottant, array)