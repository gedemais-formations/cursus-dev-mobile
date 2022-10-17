
// Exercice 3 : bases/types.js
// - 1 Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur entiere contenue dedans.
// -2  Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur flottante contenue dedans.
// -3  Ecrire une fonction qui prend un nombre entier en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
// -4  Ecrire une fonction qui prend un nombre flottant en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
// - 5 Ecrire une fonction qui prend un booleen en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.

// 1)
function chainedecaractere(nombreEntier) {
  console.log(parseInt(nombreEntier));
}
chainedecaractere("12");

//  -2)
function nombreAVirgule(flottante) {
  console.log(parseFloat(flottante));
}
nombreAVirgule("13.2");

// -3)
// je declare une fonction
function valeur(nombreEntier) {
  // tostring permet de retourner un nombre entier et d'autre comme  inter...
  return nombreEntier.toString();
}
// j'appel ma fonction avec la valeur du paramettre
valeur(2);
//  j'affiche ma fonction
console.log(valeur(2));
// je verifie que ma fonction prend bien un autre type en paramettre
console.log(typeof valeur(8));

//  - 4 Ecrire une fonction qui prend un nombre flottant en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
function nombre(nombreFlotant){
return (nombreFlotant.toString());
}
nombre(19.8);
console.log(nombre(19.8));

//  -5 Ecrire une fonction qui prend un booleen en parametre, et qui renvoie
//  une chaine de caracteres contenant sa valeur.

function booleen(trueFalse){
    return (trueFalse.toString());
    }
    booleen(false);
    console.log(booleen(false));
    