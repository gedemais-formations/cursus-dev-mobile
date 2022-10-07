/* Le fichier HTML appelant ce script comporte six formulaires. L'objectif est
 * d'envoyer une alerte a l'utilisateur si l'une des donnees entrees est mal
 * formatee ou manquante. Les formats sont précisés par des paragraphes avant
 * chaque input pour lequel c'est necéssaire. Petite précision : les espaces
 * doivent etre tolérés entre les chiffres du numéro de téléphone.
 * Pour parser ces donnees, vous vous servirez du constructeur RegExp(). Vous
 * pouvez aussi vous servir d'autre chose, mais vous devrez utiliser un minimum
 * d'une regex par champ a parser.*/

function check_scam_input(form)
{
	console.log(form.nom.value);
	console.log(form.prenom.value);
	console.log(form.dateDeNaissance.value);
	console.log(form.numeroDeTelephone.value);
	console.log(form.numeroDeCarteBleue.value);
	console.log(form.codeDeSecurite.value);
}
