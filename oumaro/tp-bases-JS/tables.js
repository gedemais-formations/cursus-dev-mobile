function table(nbr) {
  let result = [];

  for (let i = 0; i <= 10; i++) {

    result = nbr * i;

    console.log(`${nbr} x ${i} = ${result}`);

  }

  
}

console.log(table(5));

//function qui toutes les tables de multiplication
function mutiplie(){

    let maxPar = 10;


   for(let a = 0; a<= maxPar; a++ ){

    table(a)
   }
}

mutiplie()