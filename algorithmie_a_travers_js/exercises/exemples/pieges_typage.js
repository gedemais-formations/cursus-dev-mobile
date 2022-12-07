/* Le fait que Javascript soit un langage type dynamiquement signifie que les types
 * de nos variables ne seront pas connus du programme avant l'execution. Cette fonctionnalite
 * est tres pratique par rapport a des langages bas niveau comme le C, ou chaque variable
 * doit etre typee precisement, la ou en js les mots-cles generiques 'var' et 'let' suffisent.
 * Cependant, cet avantage peut creer des problemes lorsque l'on fait des erreurs dans
 * son code. Un exemple pour mieux comprendre :*/

// On cree une fonction prenant un objet de type String en parametre
function maFonction(chaineDeCaracteres)
{
	for (let x = 0; x < chaineDeCaracteres.length; x++) {
		if (chaineDeCaracteres[x] < 'a' || chaineDeCaracteres[x] > 'z') {
			console.error('Caractere invalide.');
		}
	}
}

// Puis on l'appelle avec un objet de type number en parametre.
maFonction(42);

/* Lorsque maFonction tente d'appeler la methode length de son parametre
 * chaineDeCaracteres, elle se heurte au fait qu'il ne possede pas cette methode,
 * car il est de type number. Le script arrete alors son execution, et renvoie une erreur.
 * Il faut donc prendre des precautions par rapport aux parametres passes a ses fonctions.*/
