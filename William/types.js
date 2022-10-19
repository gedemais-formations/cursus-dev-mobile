/*
Exercice 3 : bases/types.js
1- Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur entiere contenue dedans.
2- Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur flottante contenue dedans.
3- Ecrire une fonction qui prend un nombre entier en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
4- Ecrire une fonction qui prend un nombre flottant en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
5- Ecrire une fonction qui prend un booleen en parametre, et qui renvoie une chaine de caracteres contenant sa valeur*/

//let entier = 189, chaine = "189", boolean = true, float = 42.42, array = [entier, chaine, boolean, float]

//Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur entiere contenue dedans
// appeler variable let = phrase (nommée phrase), "valeur de phrase" 

let phrase = "254"
function un(chaine){
    let result = parseInt()
    return parseInt(chaine, 10)

;}
console.log(un(phrase));

//Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur flottante contenue dedans.

let nombre = 42.42
function deux(chaine){
    let result = parseFloat(chaine, 42.42)
    return result

;}
console.log(deux(nombre));

//- Ecrire une fonction qui prend un nombre entier en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
//integer = nombreEntier

let table = 25
function tabouret(integer){
    let result = integer.toString()
    
    return result

;}
console.log(tabouret(25));


//4- Ecrire une fonction qui prend un nombre flottant en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.

let lion = 99.99
function ours(float){
    let result = float.toString()
    return result
;}
console.log(ours(99.99));

let lion1 = 99.99


function ours(a){
  console.log(a.toString());
  
}

ours(lion1);

//5- Ecrire une fonction qui prend un booleen en parametre, et qui renvoie une chaine de caracteres contenant sa valeur

let voiture = true

function garage(boolean){
         let result = boolean.toString();
         return result
}
console.log(garage(voiture));

