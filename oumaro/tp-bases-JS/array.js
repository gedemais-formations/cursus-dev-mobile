

let entier1 = 189;
let chaine1 = "189";
let booleen1 = true;
let flottant1 = 42.42;
let array1 = [entier1,chaine1,booleen1,flottant1];

let arrayNew = []


function newArray(array) {

    let arr = [];

    for(let i = 0; i< array.length ; i++){

        arr.push (array[i].toString())  
    }

    return arr
}


console.log(newArray(array1));