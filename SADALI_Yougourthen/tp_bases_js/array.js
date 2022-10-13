let entier = 189;
let chaine = "189";
let booleen = true;
let flottant = 42.42;
let tab = new Array(entier, chaine, booleen, flottant);

function exercice4(tab) {
    
for (i=0; i<tab.length; i++)
 tab[i]=tab[i].toString();

  return tab;
}
console.log (exercice4(tab));

/*--------------------------------------------------------------------*/

// const tab2 = [1, 2, 3, 4];




// function exercice4(tab2){

//   for(i=0; i<tab2.length; i++)
//   {
//       console.log(typeof(tab2[i].toString()));
//       console.log(tab2[i].toString());
//   }

// }

// exercice4(tab2);


/*--------------------------------------------------------------------*/

// function exercice4(tab) {
    
//   tab[0]= tab[0].toString(); 
//   tab [1]= tab[1].toString(); 
//   tab [2]= tab[2].toString(); 
//   tab [3]= tab[3].toString(); 


//   return tab;
// }
// console.log (exercice4(tab));


