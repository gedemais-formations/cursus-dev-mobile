// Exercice 6 :
// fichier de rendu : bases/conditions.js
// Ecrivez une fonction qui affichera tous les nombres de 1 a 100 etants premiers,
// et n'etant pas des multiples de 9.

function primeNumber(num) {
    if(num < 2) return false;

    for (var i = 2; i < num; i++) {
        if(num%i===0)
            return false;
    }
    return i
    
    }

    for (var i =0; i<100; i++){
        if(primeNumber(i)) console.log(primeNumber(i)) 
}
console.log(primeNumber(100));