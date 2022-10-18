// index.js révisions Javascript 2022/10/18

/*
langages de programmation avec syntaxe similaire
C --> pas objet


JS
PHP
C#
JAVA
----
C++
----
mais pas Python qui a une syntaxe totalement différente
*/

function addition(a, b) {
  return a + b;
}

function addition3(a, b, c) {
  return a + b + c;
}

function xyz(p1, p2) {
  let result;
  result = addition(p1, p2);
  // result = p1 + p2;
  return result;
}

function abcd(pa3, pa4) {
  let re;
  // faire le calcul
  re = addition(pa3, pa4);
  return re;
}

function nom_de_fonction(par1, par2, par3, par4) {
  let resultat;
  /*
  le code de l'exercice
  */
  // resultat = par1 + par2 + par3 + par4;
  // resultat = addition(par1, par2);
  let resultat1 = addition(par1 + par2, par3 + par4); // OK
  //
  let resultat3 = addition(par1 + par2, 0);
  let resultat4 = addition(par3 + par4, 0);
  let resultat2 = resultat3 + resultat4;
  //
  let resultat5 = addition(par1, par2) + addition(par3, par4);
  //
  let resultat6 = addition(xyz(par1, par2) + abcd(par3, par4), 0); // pas terrible
  //
  let resultat7 = addition(xyz(par1, par2), abcd(par3, par4)); // tres bien
  //
  let resultat8 = addition(addition(par1, par2), addition(par3, par4)); // tres compliqué mais ca fonctionne
  resultat = resultat8;
  return resultat;
}

//// Révision LES FONCTIONS
let mon_resultat;
mon_resultat = nom_de_fonction(4, -1, 2, 6);

console.log(mon_resultat);

/**********************************************************
 * POO = Programmation Orientée Objet
 * voir https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_objet
 * et aussi https://fr.wikipedia.org/wiki/Paradigme_(programmation)
 *
 * pour javascript voir la page "presque officielle"
 *  https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Basics
 *
 *
 * en anglais on dit:
 * OOP = Object Oriented Programming
 *
 *********************************************************/

let objet_pour_donnees = {
  nom: "Deresmes",
  prenom: "Pierre",
  adresse: "mon adresse",
};

/*
let xxx= ?????;
let yyy;
yyy= ??????????????;
*/

function Vehicule(par_nom) {
  /// Constructeur d'objet de ma classe générale représentant n'importe quel véhicule
  // let res;
  // res= ?????
  // return res;
  this.nom_du_vehicule = par_nom; /// propriété ou attribut
  this.nom = function () {
    let res;
    res = this.nom_du_vehicule;
    return res;
  };

  this.nom2 = function () {
    return this.nom_du_vehicule;
  };
}

let voiture = new Vehicule("Renault 2008");
console.log(voiture.nom(), voiture.nom2()); // envoie le nom de ma voiture
/// dans voiture il y a un objet qui est une 'instance' de Vehicule
let velo = new Vehicule("Decathlon");
/// dans velo il y a un objet qui est une 'instance' de Vehicule
let bus = new Vehicule("Bus Man");
/// dans bus il y a un objet qui est une 'instance' de Vehicule
let ratp_bus_ligne156 = [
  bus, // indice = 0
  new Vehicule("Marque1"), // indice = 1
  new Vehicule("Bus anglais"), // indice = 2
  new Vehicule("Bus rouge"), // indice = 3
];
// let truc= Vehicule(); // pas de POO car il n'y a pas l'opérateur "new"
let un_tableau = [];
let tableau_entier = [11, 5, -5, 4];
/* 
tableau_entier[0]== 11 
tableau_entier[1]== 5 
tableau_entier[2]== -5 
tableau_entier[3]== 4
tableau_entier[4]== inconnu ( undefined )
tableau_entier[-1]== interdit
*/
let tableau_chaine = ["bon", "jour", "Geoffrey"]; //  tableau_chaine[1]=> "jour"
let tour_de_france = [
  new Vehicule("Velo de monsieur X"), // indice = 0
  new Vehicule("Bernard Hinault"), // indice = 1
  new Vehicule("Froome"), // indice = 2
];

let plein_de_vehicules = [
  bus, // indice = 0
  velo, // indice = 1
  voiture, // indice = 2
  tour_de_france[1], // indice = 3
  new Vehicule("Ce véhicule"), // indice = 4
  ratp_bus_ligne156[3], // indice = 5
];

console.info("une voiture");
console.log(plein_de_vehicules[2]); // indice = 2
console.info("exactement la meme voiture");
console.log(voiture);
console.info("en dehors du tableau donc 'undefined'");
console.log(tour_de_france[3]); // pas bon, en dehors du tableau donc affichage 'undefined' dans la console
console.info("le 3eme coureur du tour de france");
console.log(tour_de_france[2]); // pour Froome

console.log(plein_de_vehicules); ////

console.info("maintenant on affiche tout le contenu du tableau d'objets");
for (let i = 0; i < plein_de_vehicules.length; i++) {
  console.log(i, plein_de_vehicules[i].nom());
}

/*****
for (A; B; C) {
    //
    // ici j'utilise l'indice de ma boucle for
    //
}

 A : initialisation de l'indice boucle
 let i=0;
 
 B : condition de continuation : boolean 
 i < plein_de_vehicules.length

 C : incrémentation de l'indice de boucle
 i++
 */
