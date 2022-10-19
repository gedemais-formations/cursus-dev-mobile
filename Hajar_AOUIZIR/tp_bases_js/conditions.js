/*Exercice 6 :
fichier de rendu : bases/conditions.js
Ecrivez une fonction qui affichera tous les nombres de 1 a 100 etants premiers,
et n'etant pas des multiples de 9.*/


function premier(){
    let p=1

    for (let i = 1; i < 101; i++) {
        for (p=2; p<i; p++){
           if (i%p==0){
            break ;
            }
        }
        if (i==p; i)
            console.log(i);
    }
}
premier();


