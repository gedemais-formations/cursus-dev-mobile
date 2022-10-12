/* Exercice 6 :
fichier de rendu : bases/conditions.js
Ecrivez une fonction qui affichera tous les nombres de 1 a 100 etants premiers,
et n'etant pas inférieur à 9. */


function intPremiers() {
    for (let nbr = 2 ; nbr <101; nbr++) {
        let valid;
        for (let i = 2; i < nbr; i++) {
            if (nbr%i === 0 && i != nbr) {
                valid = false;
                break;
            }else if(nbr < 9) {
                break;
            }
            else {
                valid = true;
            }
        }
        if (valid) {
            console.log(nbr);
        }
    }
}

intPremiers();