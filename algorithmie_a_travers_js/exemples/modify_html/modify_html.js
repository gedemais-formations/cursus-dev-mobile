/* Exemple de modification du contenu d'une page HTML avec JavaScript*/

/*
 La premiere chose à faire lorsque l'on souhaite modifier un élément existant
 sur une page HTML en JS est de récupérer son objet via le DOM (Domain Object Model,
 structure de données qui contient tous les éléments HTML de la page web, ainsi que
 leurs propriétés CSS), afin d'en modifier les propriétés que l'on désire.

 Plusieurs méthodes de l'objet document permettent de récupérer un élément du DOM.
 Parmis elles :
 - getElementById(), qui récupère l'élément via l'attribut id de sa balise.
 - getElementByClassName(), qui récupère l'élément via l'attribut class de sa balise.
 - getElementByTagName(), qui récupère l'élément via le nom de sa balise.
 */

 /*
 A noter qu'ici on ajoute body avant d'accéder aux méthodes de requete, car on sait
déjà que l'élément recherché est présent dans le body de la page. On peut également
appeler ces méthodes directement via document :

let element = document.getElementById("id_string");

Ou bien via d'autres parties de la page afin d'accélérer la requete :

let element = document.footer.getElementById("id_string");
*/ 

 let text = document.getElementById("text");

 /* On peut maintenant se permettre de modifier le contenu de la balise <p>.
L'attribut innerText contient le texte présent dans la balise, et JavaScript
nous permet de la modifier en y accédant directement :
 */

text.innerText = "Contenu modifié !";

/*
L'attribut style contient toutes les propriétés CSS de l'élément. Comme
pour innerText, on peut modifier ces valeurs et le résultat sera visible :
*/

text.style.fontSize = "48px";
text.style.fontFamily = "Arial";
text.style.color = "black";