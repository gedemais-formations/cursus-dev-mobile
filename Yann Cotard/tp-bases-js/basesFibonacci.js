// Exercie 7 :
// fichier de rendu : bases/fibonacci.js
// Ecrivez une fonction recursive qui prend en parametres un nombre, et qui renvoie
// la valeur correspondant a cet index dans la suite de fibonacci. Ecrivez ensuite
// une fonction qui affichera les 100 premieres valeurs de la suite de fibonacci.



// La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux termes qui le précèdent.


//Méthode récursive
function fibonacci(nb){
if(nb<2)
return nb;

return fibonacci(nb-1) + fibonacci(nb-2)

}

console.log(fibonacci(13))

//Afficher les 100 premiers nombres de la suite fibonacci

function firstHundred(nbr){

for (let i=0; i<nbr; i++){
    console.log(fibonacci(i))
}
    
}

firstHundred(100)