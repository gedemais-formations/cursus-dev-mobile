// index.js
/*
function addition(a,b) 
{
  return a + b;
}
*/



/*

C => pas d'objet

Chaque language a sa syntaxe pour déclarer un objet

JS
PHP
C#
JAVA

*/

/// les FONCTIONS

function nom_de_fonction(para1, para2, para3)
{
    let resultat;
    // code de l'exercice
    return resultat;
}

//exo

function addition(a,b) 
{
  return a + b;
}

function nom_de_fonction(para1, para2, para3,para4)
{
    let resultat;
    // code de l'exercice
    let resultat1 = addition(para1 + para2, para3 + para4);
    //
    let resultat2 = addition(para1,para2) + addition(para3,para4)
    //
    let resultat3 = addition(addition(para1,para2),addition(para3,para4))
    resultat = resultat1;
    return resultat;
}

let mon_resultat;
mon_resultat = nom_de_fonction(4, -1, 2, 6);

console.log(mon_resultat);

///POO
// Object Oriented Programming

// en JS declarer un objet

let objet_pour_donnees = 
{
    nom : "dupont",
    prenom : "alan",
    adresse : "nom_adresse"
};

/*
let xxxx= yyyyyy;

ou
let yyyyy;
yyyy=??????;
*/

function Vehicule()
// constructeur de ma classe generale


//en constructeur on ne retourne rien
{
   /* let res;
    return res;
    */
   this.nom_du_vehicule = "essai";   // this.nom_du_vehicule =>propiété ou bien attribt
}

let voiture = new Vehicule();
// dans voiture il y a une 'instance' de Vehicule
let velo = new Vehicule();
// dans velo il y a une 'instance' de Vehicule
let bus = new Vehicule();
// dans bus il y a une 'instance' de Vehicule
let ratp_bus_ligne_156 = [bus, new Vehicule(), new Vehicule(), new Vehicule()];
// let truc = Vehicule();
let tableau_entier = [11, 5, 8,];
let tableau_chaine = ["bon", "jour", "dd"];
let tour_de_france = [new Vehicule(), new Vehicule(), new Vehicule()];