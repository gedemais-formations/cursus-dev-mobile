let entier = 189;
let chaine = "189";
let booleen = true;
let flottant = 42.42;
let tab = new Array(entier, chaine, booleen, flottant);




function exercice4(tab) {
    let tab2 = toString(tab);
    console.log (typeof(tab2));
    return tab;
 }
 
 console.log (exercice4(tab));