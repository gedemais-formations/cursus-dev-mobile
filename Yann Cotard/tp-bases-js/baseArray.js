// Exercice 4 :
// fichier de rendu : bases/array.js
// Copiez la declaration des cinq variables depuis variables.js vers types.js.
// Ecrivez ensuite une fonction qui prend array en parametre, et qui renvoie
// un tableau contenant les valeurs de array converties en chaines de caracteres.

function convertVariableToString(array){
    
    let entier = 189;

    let chaine = "189";
    
    let booleen = true;
    
    let flottant = 42.42;
    
    var array = [entier, chaine, booleen, flottant];
    return (array = [entier, chaine, booleen, flottant].toString())

}
convertVariableToString();
console.log(convertVariableToString());
console.log(typeof convertVariableToString());