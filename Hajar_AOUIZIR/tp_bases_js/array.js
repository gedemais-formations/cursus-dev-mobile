/*Exercice 4 :
fichier de rendu : bases/array.js
Copiez la declaration des cinq variables depuis variables.js vers types.js.
Ecrivez ensuite une fonction qui prend array en parametre, et qui renvoie
un tableau contenant les valeurs de array converties en chaines de caracteres.*/

let entier = 189;
let chaine = "189";
let booleen = true;
let flottant = 42.2;
let array = [entier, chaine, booleen, flottant]

function tableau(aray){
 return[
array[0].toString(),
array[1].toString(),
array[2].toString(),
array[3].toString()];
                                     
}

console.log(tableau(array));
console.log(typeof array.toString);