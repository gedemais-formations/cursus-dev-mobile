function writeInput(formulaire)
{
/* On commence par recuperer l'objet de type 'paragraphe' dans
 * lequel on souhaite ecrire, en renseignant son id en parametre
 * de la methode getElementById de l'objet document.*/

	let paragraph = document.getElementById('texte');

// On recupere le texte ecrit dans le formulaire
	input = document.formulaire.input.value;

/* On peut maintenant reecrire le contenu du paragraphe,
 * grace a la methode innerText de l'element paragraphe.*/

	paragraph.innerText = input;

/* Le but de cet exercice est de montrer comment integrer
 * un script js dans une page html, et de montrer que les
 * elements de la page en question peuvent etre modifies
 * par le script, pour donner un cas concret d'utilisation
 * du js.*/
}
