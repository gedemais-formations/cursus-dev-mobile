// Exercice 5 :
// fichier de rendu : bases/tables.js
// Ecrivez une fonction table() qui prend un chiffre en parametres, et qui affiche sa
// table de multiplication  avec un calcul par ligne.. Ecrivez ensuite une fonction display_table(),
// qui affichera a l'aide de table() les tables de multiplication de 1 a 10.


function table(chiffre) {
    for (let i = 0; i < 10; i++) {
        var result = chiffre * i;


        // console.log(chiffre, "x", i, "=" ,result);

         console.log(chiffre +  " x "+ i+  " = " +result);
    
    }
}
    function display_table() {
        let c;
        // var valeurs =[ 6,5,3,2,4,5,1,7,8,9,10];
        var valeurs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (let i = 0; i < valeurs.length; i++) {
            // j'appel la fonction table
            c = valeurs[i];
            table(c);

        }

    }
    
 display_table();
 
