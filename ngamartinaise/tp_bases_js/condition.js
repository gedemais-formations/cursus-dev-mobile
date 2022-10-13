// Exercice 6 :
// fichier de rendu : bases/conditions.js
// Ecrivez une fonction qui affichera tous les nombres de 1 a 100 etants premiers,
// et n'etant pas des multiples de 9.



function affichagenombre() {
    // je creer une fonction, je fais une boucle for pour afficher les nombre de 1 à 100 je commence à 2 car 1/1=0 or le nombre premier  est divisible par 1 et lui meme.donc la réponse est  soit 1 soit le nombre lui même.
    for (let i = 2; i <= 100; i++) {
        // on va afficher que les nombres premiers

        if (nombrespremier(i)) {
            console.log(i);
        }


    }

}
affichagenombre();

//entier ici represente le chiffre que je dois diviser et i  est le diviseur
function nombrespremier(entier) {
    for (let i = 2; i < entier; i++) {
        // si on obtient O en résultat cela veut dire  que  ce n'est pas  un nombre premeir
        if (entier % i === 0) {
            return false;
        }


    }
    return true;

}


