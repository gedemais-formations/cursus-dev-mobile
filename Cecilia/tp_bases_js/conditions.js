/* Ecrivez une fonction qui affichera tous les nombres de 1 a 100 etants premiers,
et etant superieur à 9. */

function Nbpremier() {
    let n = 2;
    let div = 0 
    while (n <= 100) {
        for (let i = 1; i <= n ; i++){
            if(n%i == 0){
                div++;
            }
        }
        
        if(div == 2 && n > 9){

            console.log(n + " est un nombre premier");
        }

        div = 0;
        n++;
    }
}

// Nbpremier();

// ============== Correction ========

function isPremier_downup(n) {
    for (let i = 2; i < n; i++) { // On test tout les diviseurs de  2 a n puisque tout les nombres sont divisible par 1 et par eux eux même 
        if (n%i == 0) {
            return false;
        }
    }
    return true;
}

function premier() {
    for (let i = 1; i <= 100; i++) {
        if (i > 9 && isPremier_downup(i)) {
            console.log(i);
        }
    }
}

premier();