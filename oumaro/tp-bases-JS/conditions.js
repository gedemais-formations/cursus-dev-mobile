function nbrPremier(nbr){


    for(let i = 2;i<nbr;i++){

        if(nbr % i == 0){

        console.log(`${nbr} n'est pas un nombre entier`);

        return false

        }
    }

  
console.log(`${nbr} est un nombre entier`);

return true

}

nbrPremier(18)

