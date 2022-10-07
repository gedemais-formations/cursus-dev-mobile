/* Example de la portee des donnees en js */
// Variable globale
var global_string = "Une chaine de caracteres accessible partout";

function nomDeLaFonction()
{
	// Variable locale
	var var_string = "Une chaine de caracteres, ma foi, plutot banale...";
	// Variable constante locale
	const const_string = "Une chaine de caracteres immuable"; // Variable constante (idem de variable classique, mais immuable apres declaration)

	if (true)
	{
		// Variable de bloc
		let x = 42;
		console.log(global_string, "\n", var_string, "\n", const_string, "\n", x);
		console.log('-----------------------------------------------------------------')
	}

	console.log(global_string, "\n", var_string, "\n", const_string);
	console.log('-----------------------------------------------------------------')
}

nomDeLaFonction()

console.log(global_string);

//console.log(global_string, var_string, const_string, x);
