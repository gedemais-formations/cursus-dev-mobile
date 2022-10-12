/*Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur entiere contenue dedans. */

function ChaineEnEntier(a) {
    let b = parseInt(a, 10);
    return b;   
}

console.log(ChaineEnEntier("180"));

/* Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur flottante contenue dedans.*/

function ChaineEnFloat(a) {
    let b = parseFloat(a);
    return b;   
}

console.log(ChaineEnFloat("180"));

/* Ecrire une fonction qui prend un nombre entier en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.*/

function EntierEnChaine(a) {
    let b = a.toString();
    return b;   
}

console.log(EntierEnChaine(180));

/* Ecrire une fonction qui prend un nombre flottant en parametre, et qui renvoie une chaine de caracteres contenant sa valeur. */

function FloatEnChaine(a) {
    let b = a.toString();
    return b;   
}

console.log(FloatEnChaine(180.00));


/* Ecrire une fonction qui prend un booleen en parametre, et qui renvoie une chaine de caracteres contenant sa valeur. */

function BooleanEnChaine(a) {
    let b = a.toString();
    return b;   
}

console.log(BooleanEnChaine(true));