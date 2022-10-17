/* Ecrire une fonction qui prend une chaine de caractere en parametre, 
et qui renvoie la valeur entiere contenue dedans. */

let stringInt = "1585";

function returnInt(string) {
    let nbrInString = parseInt(string);

    console.log(nbrInString);
}
returnInt(stringInt);

/* Ecrire une fonction qui prend une chaine de caractere en parametre, 
    et qui renvoie la valeur flottante contenue dedans. */

let stringFloat = "15.85";

function returnFloat(string) {
    let nbrInString = parseFloat(string);

    console.log(nbrInString);
}
returnFloat(stringFloat);

/* Ecrire une fonction qui prend un nombre entier en parametre, 
    et qui renvoie une chaine de caracteres contenant sa valeur. */

let intString = 1585;

function returnString(int) {
    let stringOfInt = String(int);

    console.log(stringOfInt);
}
returnString(intString)

/* Ecrire une fonction qui prend un nombre flottant en parametre, 
    et qui renvoie une chaine de caracteres contenant sa valeur. */

let floatString = 15.85;

function returnString2(float) {
    let stringOfFloat = String(float);

    console.log(stringOfFloat);
}
returnString(floatString)

/* Ecrire une fonction qui prend un booleen en parametre, 
    et qui renvoie une chaine de caracteres contenant sa valeur. */

let booleenString = true;

function returnBooleen(booleen) {
    let stringOfBooleen = String(booleen);

    console.log(stringOfBooleen);
}
returnBooleen(booleenString);