//fonction qui retourne un entier

let string="9658"

function stringEntier(string){


    parseInt(string)


    return string

}


console.log(nbrSring(string));


/**************************************************/
//fonction qui retourne un string

let nbr= 5698
function nbrSring(entier){


    entier.toString();


    return entier

}


console.log(nbrSring(nbr));

/**************************************************/
//fonction qui retourne un float


let chaineS = "10235";

function stringFloat(chaine){


    parseFloat(chaine);


    return chaine;
}


console.log(stringFloat(chaineS));


/**************************************************/
//fonction qui prend un float et retourne un string


let floatString = 56.23;


function convertString(string){


    return string.toString();
}


console.log(convertString(floatString));

/************************************************/
// fonction qui prend un booleen et qui  retourne un string 


let bool = true;


function boolConvert(booleen){


    return booleen.toString()
}

console.log(boolConvert(bool));

