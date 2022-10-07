/* Pour declarer une fonction, on utilise le mot-cle function. Suite a quoi, on
 * renseigne le nom de notre fonction, puis son / ses parametres entre parentheses,
 * separes par des virgules. Finalement, on peut ecrire notre code (suite
 * d'instructions) a la ligne, entre accolades. Dans ce code, on peut se servir de l'instruction
 * return(valeur); pour retourner une valeur, et meme l'utiliser sans parametres
 * pour arreter la fonction. Dans ce cas, la fonction renverra quand meme un objet,
 * appele undefined. Quelques examples avec des fonctions basiques :
 */

/* Cette fonction retourne la longueur d'une chaine de
 * caracteres, tout comme la propriete length de l'objet String.
 * Une chaine de caracteres, comme son nom l'indique, est compose de caracteres
 * individuels. Pour delimiter la fin de la chaine, le dernier caractere est
 * toujours mis a la valeur undefined (il ne s'affiche pas). On peut donc iterer
 * sur la chaine de caracteres sans depasser la fin, et incrementer un compteur
 * a chaque iteration pour connaitre le nombre de caracteres total de la chaine.
 * On renvoie cette valeur.
 */

// On declare la fonction, en lui passant la chaine de caracteres en parametres.
function strlen(chaineDeCaracteres)
{
	var	result = 0; // On declare notre compteur en l'initialisant a 0.

	while (chaineDeCaracteres[result] != undefined) // On itere sur la chaine
	{
		result++; // En gardant le compte du nombre de caracteres
	}
	// Puis, quand la boucle se termine, on retourne la valeur de notre compteur.
	return result;
}

console.assert(strlen("Bonjour") === 7, "strlen");

/* Voici un example de fonction qui prend un parametre mais ne retourne rien.
 * Cette fonction affiche les elements d'un tableau, un par un.*/

function print_content(array)
{
	for (let i = 0; i < array.length; i++) // on itere sur le tableau
	{
		console.log(array[i]); // Et on affiche ses elements un par un
	}
}

print_content([1, 2.24, 3, 4, "Hello World this is me"]);

console.log('-----------------------------------------------')

/* Un dernier example, cette fois une fonction qui ne prend aucun parametre, et
 * ne retourne aucune valeur. Cette fonction affiche seulement la table de 
 * multiplications de 8 grace a une boucle, elle n'a donc besoin d'aucun
 * objet pour faire son travail. En revanche, cette fonction ne pourra jamais
 * afficher une autre table que celle de 8...*/

function tableDeHuit()
{
	const start = 1;
	const end = 9;

	for (let y = start; y <= end; y++){
		let result = y * 8
		console.log(`8 * ${y} = ${result}`);
	}
}

tableDeHuit()
