/* Ecrivez une fonction table() qui prend un chiffre en parametres, et qui affiche sa
table de multiplication  avec un calcul par ligne.. Ecrivez ensuite une fonction display_table(),
qui affichera a l'aide de table() les tables de multiplication de 1 a 10.*/ 

function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n +" x " + i +" = " + n*i);
    }    
}

table(2);

function display_tables() {
    for (let i = 1; i <= 10; i++) {
        table(i);
    }    
}

display_tables();