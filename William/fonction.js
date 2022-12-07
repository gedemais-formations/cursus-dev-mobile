//fonction.js

/*
Exercice 2 :
fichier de rendu : bases/fonction.js
Copiez la declaration des cinq variables depuis variables.js vers fonction.js.
Ecrivez ensuite une fonction qui prend ces cinq variables en parametres, et
qui les affiche avec console.log() avant de retourner la valeur 0.
Appelez ensuite cette fonction.
*/


let entier = 189, chaine = "189", boolean = true, float = 42.42, array = [entier, chaine, boolean, float]

/*Ecrivez ensuite une fonction qui prend ces cinq variables en parametres, et
qui les affiche avec console.log() avant de retourner la valeur 0. */
function affiche() {

    for (let i = 0; i < array.length; i++) {

        console.log(array[i])
    }
}

affiche();



let name;


/*Ecrivez ensuite une fonction qui prend ces cinq variables en parametres, et
qui les affiche avec console.log() avant de retourner la valeur 0. */
function exercice2(array) {

    for (let i = 0; i < array.lenght; i++) {

        return console.log(array[i]);
    }

}

//Appelez ensuite cette fonction
exercice2(array)