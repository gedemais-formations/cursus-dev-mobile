/* Javascript permet egalement de creer ses propres objets.
 * Un objet cree en js s'utilise sous la forme d'une variable,
 * composee de proprietes (sous-variables). L'interet est de compacter les
 * informations dans une seule entite, pour permettre d'abstraire des variables
 * en objets.*/

/* Voyons ici un example de creation d'objet. Imaginons que nous voulons
 * representer un livre dans un objet js. Cet objet doit retenir plusieurs
 * caracteristiques du livre : Son titre, son auteur, son style, son nombre de
 * pages, et son prix. En JavaScript, le format JSON est utilise pour renseigner
 * ces informations.*/

// Un objet se declare comme une variable. On lui assigne une valeur encodee en JSON, entre accolades.

var book = {
	titre: "Vingt Mille Lieues sous les mers",
	auteur: "Jules Verne",
	style: "Aventure",
	nombreDePages: 672,
	prix: 4.99
};

/* Notre objet book existe. Pour acceder a ses proprietes, on peut ecrire :
 * book.nomDeLaVariable
 * ou bien :
 * book['nomDeLaVariable'], ce qui permet d'acceder a une valeur dans book grace
 * a son nom sous forme de String dans une variable entre crochets, et pas forcement
 * par un nom inscrit en dur (non modifiable pendant l'execution) dans le code.*/

var str = 'style';

console.log(book.titre);
console.log(book['auteur']);
console.log(book[str]);
console.log(book.nombreDePages);
console.log(book.prix);

console.log('--------------------------------')

console.log(book)
