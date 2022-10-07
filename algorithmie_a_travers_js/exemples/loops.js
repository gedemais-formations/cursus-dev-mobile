var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const size = numbers.length

/* Imaginons que l'on veuille augmenter la valeur de chaque element du tableau
 * numbers. Nous pourrions ajouter 1 a chacune des valeurs manuellement.
 * Cependant, les boucles nous permettent de nous rendre la tache moins fastidieuse.*/

/* Il existe beaucoup de facons d'iterer sur un tableau (c'est a dire de
 * consulter sequentiellement ses elements, un par un). Nous ne verrons
 * ici que la plus basique : la boucle for.*/

console.log(numbers);

for (let i = 0; i < size; i++)
	numbers[i] += 1; // Peut aussi s'ecrire de la facon suivante : numbers[i]++.
					 // x++ equivaut a x += 1, et x-- equivaut a x -= 1.

console.log(numbers);

/* Mais les boucles peuvent servir a bien d'autre choses qu'a iterer sur des
 * tableaux. En pratique, on peut faire tout ce que l'on veut dedans.
 * Le mot cle while permet de declarer une boucle. On place suite au while une
 * expression, qui sera evaluee a chaque iteration; si cette expression est vraie,
 * le code entre accolades qui suit la ligne de declaration du while sera execute
 * tant que cette conditon reste vraie.*/

/* Nous allons nous servir d'une boucle while pour afficher uniquement les
 * nombres paires contenus dans le tableau numbers. Il est a noter qu'une
 * boucle for serait plus adaptee, car on itere encore une fois sur un tableau */

let i = 0;

while (i < size)
{
	if (numbers[i] % 2 == 0) {
		console.log(numbers[i])
	}
	i++;
}

/* Il existe egalement deux mots-cles utiles lorsque l'on utilise les boucles en
 * JavaScript : break, et continue. Ces mots-cles s'utilisent exclusivement dans
 * des boucles, et permettent d'influer sur leurs executions. break fera
 * immediatement sortir de la boucle, la ou continue empechera seulement la suite
 * de l'iteration en cours de se produire. Pour faire simple : dans la boucle
 * while precedente, un break nous amenerait ligne 40, tandis qu'un continue
 * nous amenerait ligne 33, pour reevaluer la condition de la boucle.*/
