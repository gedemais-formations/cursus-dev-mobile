let chaine_entier = "42";
let chaine_flottante = "42.0"
let nombre_entier = 42;
let nombre_flottant = 42.0;
let valeur_booleenne = false;

// - Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur entiere contenue dedans.
function tito(chaine)
{
    let resultat; // Declaration de variable

    resultat = parseInt(chaine); // Assignation de variable par le retour d'une fonction

    return (resultat); // Faire retourner la valeur de resultat par la fonction
}

// - Ecrire une fonction qui prend une chaine de caractere en parametre, et qui renvoie la valeur flottante contenue dedans.
function tati(chaine)
{
    let resultat;

    resultat = parseFloat(chaine);

    return (resultat);
}

// - Ecrire une fonction qui prend un nombre entier en parametre, et qui renvoie une
// chaine de caracteres contenant sa valeur.
function toto(entier)
{
    let resultat;

    resultat = entier.toString();
    return (resultat);
}

// - Ecrire une fonction qui prend un nombre flottant en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
function tata(flottant)
{
    let resultat;

    resultat = flottant.toString();
    return resultat;
}

//- Ecrire une fonction qui prend un booleen en parametre, et qui renvoie une chaine de caracteres contenant sa valeur.
function titi(booleen)
{
    let resultat;

    resultat = booleen.toString();

    return resultat;
}

tito(chaine_entier);
tati(chaine_flottante);
toto(nombre_entier);
tata(nombre_flottant);
titi(valeur_booleenne);