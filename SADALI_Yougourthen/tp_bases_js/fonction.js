var entier = 189;
var chaine = "189";
let miam= "150";
let character = 189;
var booleen = true;
var flottant = 42.42;
var tab=new Array(entier, chaine, booleen, flottant);

function tableau(entier, chaine, booleen, flottant, tab) {
    console.log(entier);
    console.log(chaine);
    console.log(booleen);
    console.log(flottant);
    console.log(tab);
   return 0;
}

console.log (tableau(entier, chaine, booleen, flottant, tab));

function string(chaine) {
    console.log (typeof(chaine));
    chaine=parseInt(chaine);
    console.log (typeof(chaine));
    return chaine;
}

console.log (string(chaine));



function lettre(miam) {
    console.log (typeof(miam));
    miam=parseFloat(miam);
     console.log (typeof(miam));
    return miam;
}

console.log (lettre(miam));



function caractere(character) {

    resultat = string(character);
    return character;
    }
    
    console.log (caractere(character));