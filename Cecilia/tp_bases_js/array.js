/*Copiez la declaration des cinq variables depuis variables.js vers types.js.*/

let entier = 189;
let chaine = "189";
let booleen = true;
let flottant = 42.42;
let array = [entier, chaine, booleen, flottant];

/*Ecrivez ensuite une fonction qui prend array en parametre, et qui renvoie un tableau contenant les valeurs de array converties en chaines de caracteres.*/

function ArrayEnStringArray(a) {
    for (let i = 0; i < a.length; i++) {
        a[i]= a[i].toString();
    }
    return a;
}

console.log(ArrayEnStringArray(array));