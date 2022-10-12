/* Ecrivez une fonction qui affichera tous les nombres de 1 a 100 etants premiers,
et etant superieur à 9. */

function Nbpremier() {
    let n = 9
    let div = 0 
    while (n <= 100) {
        for (let i = 1; i <= n ; i++){
            if(n%i == 0){
                div++;
            }
        }
        
        if(div == 2){

            console.log(n + " est un nombre premier");
        }

        div = 0;
        n++;
    }
}

Nbpremier();