/* Ecrivez une fonction table() qui prend un chiffre en parametres, et qui affiche sa
table de multiplication  avec un calcul par ligne.. Ecrivez ensuite une fonction display_table(),
qui affichera a l'aide de table() les tables de multiplication de 1 a 10.
*/

function table(nbr)
{
    let res;

    for (let i = 1; i <= 10; i++)
    {
        res = nbr * i;
        console.log(nbr.toString() +  ' X ' +  i.toString(), ' = ' + res.toString());
    }
    return 0;
}

function display_table()
{
    for (let i = 1; i <= 10; i++)
        table(i);
}

display_table();