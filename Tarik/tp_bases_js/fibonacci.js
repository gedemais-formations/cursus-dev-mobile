
// Ecrivez une fonction recursive qui prend en parametres un nombre, et qui renvoie
// la valeur correspondant a cet index dans la suite de fibonacci. Ecrivez ensuite
// une fonction qui affichera les 100 premieres valeurs de la suite de fibonacci.


function recursiveFibonacci(nbr) {
    if(nbr < 1 ) {
        return 0;
    } else if ( nbr <= 2) {
        return 1;
    } else {
        return recursiveFibonacci(nbr - 1 ) + recursiveFibonacci(nbr - 2);
    }
}
console.log(recursiveFibonacci(5));


function hundredFibonacci() {
    let n1 = 0;
    let n2 = 1;
    let somme = 0;

    for (let i = 1; i <= 100; i++) {
        somme = n1 + n2;

        n1 = n2; 

        n2 = somme;

        console.log(somme);
    }
}
hundredFibonacci();