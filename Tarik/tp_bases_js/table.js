/* Exercice 5 :
fichier de rendu : bases/tables.js
Ecrivez une fonction table() qui prend un chiffre en parametres, et qui affiche sa
table de multiplication  avec un calcul par ligne.. Ecrivez ensuite une fonction display_table(),
qui affichera a l'aide de table() les tables de multiplication de 1 a 10. */

function table(nbr) {
    for (let i = 0; i < 11; i++) {
        console.log(`${nbr} x ${i} = ${nbr*i} `);
    }
}

function display_table() {
    for (let i = 1; i < 11; i++) {
        table(i);
    }
}

display_table()