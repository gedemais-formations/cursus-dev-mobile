let entier = 189,
  chaine = "189",
  boolean = true,
  float = 187.8;

// Déclaration de la fonction
function afficher(...d) {
  d.map((el) => console.log(el));
}

// Appel de la fonction avec les parametres injectés
afficher(entier, chaine, boolean, float);
