/* Les fonctions flechees permettent de raccourcir la syntaxe de declaration d'une
 * fonction dans certains cas. Ces fonctions sont souvent anonymes, et ne devraient
 * pas etre utilisees pour declarer des methodes dans un souci de clarte.*/

// Une fonction classique :
function square(n)
{
	return (n * n);
}

// La meme fonction, version flechee :
square2 = (n => n * n);

console.log(square(4), square2(4));
