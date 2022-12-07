// Exercice 5 :
// fichier de rendu : bases/tables.js
// Ecrivez une fonction table() qui prend un chiffre en parametres, et qui affiche sa
// table de multiplication  avec un calcul par ligne.. Ecrivez ensuite une fonction display_table(),
// qui affichera a l'aide de table() les tables de multiplication de 1 a 10.

function table(nb){

    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for(let i=1; i<number.length+1; i++){
  console.log(text = nb + "X" + [i] + "=" + nb*[i])
}
};
table(5)

function display_table(){
   var nTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   for(let j =1; j<nTable.length+1; j++){
        table([j]);
   }
}
display_table()
