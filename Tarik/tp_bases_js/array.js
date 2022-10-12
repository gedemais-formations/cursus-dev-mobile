/* Exercice 4 :
fichier de rendu : bases/array.js
Copiez la declaration des cinq variables depuis variables.js vers types.js.
Ecrivez ensuite une fonction qui prend array en parametre, et qui renvoie
un tableau contenant les valeurs de array converties en chaines de caracteres. */

let array = [189, "Hello World !", true, 42.42];

function arrayToStringArray(array) {
    let newArrayOfString = [];
    for (let elem of array) {
        newArrayOfString.push(String(elem))
    }
    console.log(newArrayOfString);
}

arrayToStringArray(array);