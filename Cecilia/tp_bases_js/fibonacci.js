/* Ecrivez une fonction recursive qui prend en parametres un nombre, et qui renvoie
la valeur correspondant a cet index dans la suite de fibonacci. Ecrivez ensuite
une fonction qui affichera les 100 premieres valeurs de la suite de fibonacci.*/

function FibonnaciV1() {
    let array = [0, 1];

    for(let i = 1; i < 1000; i++){
        array.push(array[i]+ array[i-1])
    }
    return array;
}

function Fibonnaci(n){
    if( n == 0){
        return n;
    } else if ( n == 1){
        return n
    }else {
        return (Fibonnaci(n-2) + Fibonnaci(n-1)); 
    }
}

console.log(Fibonnaci(10));



function AfficheFibonnaci(n) {
    let i = 0;
    while (i <= n) {
        console.log(Fibonnaci(i));
        i++;
    }
}

AfficheFibonnaci(10);