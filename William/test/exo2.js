
// Exercice 4 :
// fichier de rendu : bases/array.js
// Copiez la declaration des cinq variables depuis variables.js vers types.js.
// Ecrivez ensuite une fonction qui prend array en parametre, et qui renvoie
// un tableau contenant les valeurs de array converties en chaines de caracteres.

let entier = 189, chaine = "189", boolean = true, float= 42.42;
let array = [entier,chaine,boolean,float];

function apprentissage4(cours4) {
    let newArray = []
        for (let a = 0; a < cours4.length; a++) {
            newArray.push(cours4[a].toString());
        }
    return newArray;    
;}
console.log(apprentissage4(array));



// Exercice 5 :
// fichier de rendu : bases/tables.js
// Ecrivez une fonction table() qui prend un chiffre en parametres, et qui affiche sa
// table de multiplication  avec un calcul par ligne.. Ecrivez ensuite une fonction display_table(),
// qui affichera a l'aide de table() les tables de multiplication de 1 a 10.


// Exercice 6 :
// fichier de rendu : bases/conditions.js
// Ecrivez une fonction qui affichera tous les nombres de 1 a 100 etants premiers,
// et n'etant pas des multiples de 9.


// Exercie 7 :
// fichier de rendu : bases/fibonacci.js
// Ecrivez une fonction recursive qui prend en parametres un nombre, et qui renvoie
// la valeur correspondant a cet index dans la suite de fibonacci. Ecrivez ensuite
// une fonction qui affichera les 100 premieres valeurs de la suite de fibonacci.

