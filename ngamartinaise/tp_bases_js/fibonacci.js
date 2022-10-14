// Exercie 7 :
// fichier de rendu : bases/fibonacci.js
// Ecrivez une fonction recursive qui prend en parametres un nombre, et qui renvoie
// la valeur correspondant a cet index dans la suite de fibonacci. Ecrivez ensuite
// une fonction qui affichera les 100 premieres valeurs de la suite de fibonacci.

//                  index  f0  f1  f2  f3  f4  f5  f6  f7  f8 f9  f10  f11  f12  fn
// a suite de fibonacci   0	  1   1   2	  3	  5	  8	 13	 21	 34	 55	  89   144  fn-1 + fn+1
// pour voir le code directement dans le terminal avec js on met node nom du fisier entrer

function fibonacci(n){
    if(n<=1) return n;

    return fibonacci(n-1) + fibonacci(n-2);
};

for(i=1; i<=5; i++)
{
    console.log(fibonacci(i)); 
}