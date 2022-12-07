/*Exercice 3 : bases/types.js
- Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur entiere contenue dedans.*/
function ValEnt(nbr){
    return parseInt(nbr)
}
ValEnt("10");

//- Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur flottante contenue dedans.
function valFlot(nbr){
    console.log(parseInt(nbr))
    console.log("1.2")
    return 0
}
valFlot("1.2");

//- Ecrire une fonction qui prend un nombre entier en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
function string(nbr){
    console.log(nbr.toString());
}
string("10");

//- Ecrire une fonction qui prend un nombre flottant en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
function string2(float){
    console.log(float.toString());
}
string2("1.3")

//- Ecrire une fonction qui prend un booleen en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
function string3(bool){
    console.log(bool.toString())
}
string3("true")

let entier = 189;
let chaine = "189";
let booleen = true;
let flottant = 42.2;
let array = [entier, chaine, booleen, flottant]
