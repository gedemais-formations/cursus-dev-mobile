// let fromage = "camembert"
// let boisson = "vin"
// let dessert = "tarte"

// function repas(ingrediant) {
//          console.log(ingrediant);

// };

// repas(fromage)

// // Exercice 2 :
// // fichier de rendu : bases/fonction.js
// // Copiez la declaration des cinq variables depuis variables.js vers fonction.js.
// // Ecrivez ensuite une fonction qui prend ces cinq variables en parametres, et
// // qui les affiche avec console.log() avant de retourner la valeur 0.
// // Appelez ensuite cette fonction.

// let entier = 189, chaine = "189", boolean = true, float = 42.42, array = [entier, chaine, boolean, float]

// function exercice2(stylo){
//     for (let i=0; i <stylo.length; i++) {
//         console.log(stylo[i]);

//     }

// };
// exercice2(array)

// Exercice 3 : bases/types.js
// 1- Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur entiere contenue dedans.
// 2- Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur flottante contenue dedans.
// 3- Ecrire une fonction qui prend un nombre entier en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
// 4- Ecrire une fonction qui prend un nombre flottant en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
// 5- Ecrire une fonction qui prend un booleen en parametre, et qui renvoie une chaine de caracteres contenant sa valeur*/

//let entier = 189, chaine = "189", boolean = true, float = 42.42, array = [entier, chaine, boolean, float]

//1.Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur entiere contenue dedans
// appeler variable let = phrase (nommée phrase), "valeur de phrase" 

let table = 189, 
souris = "18,9", 
pc = true, 
stylo = 42.42, 

matériel = [table, souris, pc, stylo]

function exercice3(equipement) {
     

     return parseInt(equipement)

;}

console.log(exercice3(souris));


//2- Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur flottante contenue dedans.

function formation(travail) {
      return parseFloat(travail)


;}
console.log(formation(stylo));

//   3- Ecrire une fonction qui prend un nombre entier en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.

function apprentissage(cours) {
              
    return (cours.toString())
    
    ;}

    console.log(apprentissage(table));

// 4- Ecrire une fonction qui prend un nombre flottant en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.

function apprentissage1(cours1) {

    return (cours1.toString())

    ;}
    console.log(apprentissage1(stylo));
    
// 5- Ecrire une fonction qui prend un booleen en parametre, et qui renvoie une chaine de caracteres contenant sa valeur

function apprentissage2(cours2) {
         return (cours2.toString())       
;}

console.log(apprentissage2(pc));