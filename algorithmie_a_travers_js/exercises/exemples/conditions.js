/* Les structures de controle permettent de diriger l'execution du code,
 * en choisissant d'executer ou non du code en fonction d'une comparaison.
 * Plusieurs operateurs existent pour mettre en place ces structures en Javascript. */

// Le premier et le plus utilise est la condition if, "si"

/* On declare notre condition avec le mot-cle if, suivi de l'expression a tester.
 * cette expression comporte toujours deux valeurs, separees par un operateur de comparaison.
 * Les operateurs de comparaison sont des symboles permettant de preciser la
 * verification a effectuer avec les deux valeurs :
 * > : strictement superieur
 * < : strictement inferieur
 * >= : superieur ou egal
 * <= : inferieur ou egal
 * != : different
 * !== : different
 * == egal
 * === egalitee renforcee (force les deux valeurs a etre du meme type, ou les considere comme differentes)
 */

let age = 5;

if (age > 18) // si
{
	console.log('Vous pouvez rentrer monsieur, bonne soiree.'); // code execute si la condition est vraie
} // Une condition if peut etre suivie de deux operateurs qui la completent :
else if (age == 18) // sinon, si
{
	console.log('Je peux voir votre carte d\'identite svp ? ... Vous pouvez rentrer monsieur, bonne soiree.'); // code execute si la condition est vraie
}
else if (age > 16) // sinon, si
{
	console.log('Je peux voir votre carte d\'identite svp ? ... Ca va pas etre possible monsieur.'); // code execute si la condition est vraie
}
else // sinon...
{
	console.log('Patientez sur le cote svp.'); // code execute si la condition est vraie
}

/* Si l'utilite du else peut paraitre evidente, celle du else if l'est souvent
 * moins. Pourquoi ne pas simplement enchainer les if ? Pour donner un exemple,
 * avec une structure de type : if - else if - else if - else if - else,
 * si la condition du premier else if est vraie, alors le script n'ira pas verifier
 * les conditions des suivants, et sortira de la struture entiere apres avoir
 * execute le code entre les accolades du premier else if, ce qui permet de prioriser
 * ses conditions, et d'optimiser son code.*/

switch (age)
{
	case (age > 18):
		console.log('Vous pouvez rentrer monsieur, bonne soiree.'); // code execute si la condition est vraie
	break;
	default:
		console.log('Patientez sur le cote svp.'); // code execute si la condition est vraie
}
