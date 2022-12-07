let entier = 189;
let chaine = "189";
let miam= "150";
let poulet = 120;
let couscous = "35";
let booleen = true;
let flottant = 42.42;
let tab=new Array(entier, chaine, booleen, flottant);

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
 

console.log();

function lettre(miam) {
    console.log (typeof(miam));
    miam=parseFloat(miam);
     console.log (typeof(miam));
    return miam;
}

console.log (lettre(miam));



function transformer(poulet) {
    let resultat = toString(poulet);
    console.log (typeof(resultat));
    return poulet;
    }
    
    console.log (transformer(poulet));

    function transformer2(couscous) {
        let resultat2 = toString(couscous);
        console.log (typeof(resultat2));
        return couscous;
        }
        
        console.log (transformer2(couscous));


        function transformer3(booleen) {
            let resultat3 = toString(booleen);
            console.log (typeof(resultat3));
            return booleen;
            }
            
            console.log (transformer3(booleen));


            
           