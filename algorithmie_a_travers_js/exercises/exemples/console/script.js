/* L'objet console est un des plus utiles pour developper en JavaScript. C'est un outil
 * integre a chaque navigateur web, qui permet aux developpeurs js de debugger, comprendre
 * et maintenir leur code plus facilement. Nous avons deja vu son utilisation plus haut,
 * avec console.log(), mais cet objet comporte bien d'autres methodes. Jusqu'ici,
 * on utilisait node pour tester notre code sans avoir besoin de navigateur. Nous
 * allons maintenant integrer notre script a une page HTML, comme dans l'exercice 0,
 * pour voir la console en action.*/

/* La methode clear() : Elle permet d'effacer le texte deja present dans la
 * console, pour recommencer a ecrire depuis son debut.*/

console.clear();

/* La methode log() : Elle sert exclusivement a l'affichage de texte dans la
 * console. On peut lui donner n'importe quel type d'objet en parametre.*/

console.log('This is text');

/* La methode error() : Elle sert, comme son nom l'indique, a communiquer des
 * messages d'erreur sous forme de texte dans la console. La difference avec log()
 * se situe au niveau graphique, le texte d'erreur etant la plupart du temps
 * surligne en rouge.*/

console.error("This is an error");

/* La methode assert() : Elle permet d'afficher un message d'erreur si
 * son premier parametre est une condition fausse. Tres utile pour construire
 * et debugger un script.*/

console.assert(retour == 400, "pas content.");
