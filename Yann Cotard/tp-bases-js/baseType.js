// Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur entiere contenue dedans.

function returnInteger(chaineCaracteres){
   return (parseInt(chaineCaracteres,10))
};
returnInteger("2");
console.log(returnInteger("2"));
console.log(typeof (returnInteger("2")));


// - Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur flottante contenue dedans.
function returnFloat(string){
    return (parseFloat(string));
};
returnFloat("3");
console.log(returnFloat("3"))
console.log(typeof (returnFloat("3")));

// - Ecrire une fonction qui prend un nombre entier en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
function intToString(integer){
    return (integer.toString())
};
intToString(15);
console.log((intToString(15)));
console.log(typeof (intToString(15)));

// - Ecrire une fonction qui prend un nombre flottant en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
function floatIntoString(float){
    return (float.toString())
};
floatIntoString(3.2)
console.log(floatIntoString(3.2))
console.log(typeof (floatIntoString(3.2)));

// - Ecrire une fonction qui prend un booleen en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.

function boolToString(bool){
    return (bool.toString())
};
boolToString(true);
console.log(boolToString(true));
console.log(typeof (boolToString(true)));