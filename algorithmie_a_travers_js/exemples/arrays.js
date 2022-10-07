let array = ['array', 'of', 'strings'];

console.log(array);
console.log('--------------------------------------------');

/* Pour acceder a un element du tableau, on indexe ce tableau avec un nombre n,
 * permettant d'acceder a (n + 1)eme element du tableau (+ 1 car le premier
 * element est toujours a 0). */

// Pour afficher le premier element du tableau, on peut donc proceder de la sorte :
console.log(array[0]);

// Et pour afficher le dernier element :
console.log(array[array.length - 1]);
console.log('--------------------------------------------');
/* .length est une propriete contenant la longueur du tableau. On soustrait 1 a
 * cette valeur car l'indexage du tableau commence a 0.*/

// On peut egalement affecter des valeurs a partir d'un tableau par decomposition :

array = [1, 2];

array = [array[1], array[0]];

let a;
let b;
let c;

[a, b, c] = array;

console.log(a); console.log(b); console.log(c);
console.log('--------------------------------------------');

// Pour ajouter ou enlever des elements d'un tableau, on peut utiliser quatre methodes distinctes:

// La methode push, qui permet d'ajouter un element a la fin du tableau.
array.push(42); console.log(array);

// La methode push, qui permet de supprimer un element a la fin du tableau.
array.pop(); console.log(array);

// La methode shift, qui permet d'ajouter un element au debut du tableau.
array.unshift(42); console.log(array);

// La methode unshift, qui permet de supprimer un element au debut du tableau.
array.shift(); console.log(array);

// Inserer
array.insert(1, 'bonjour');

// Delete
delete(array[1]);
