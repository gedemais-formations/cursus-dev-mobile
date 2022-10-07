/* Jusqu'ici, nous avons vu comment declarer des objets avec des valeurs litterales
 * en JSON, puis comment rendre la creation d'un objet generique, a l'aide d'une
 * fonction constructeur. Une fois ces notions acquises, il est important de
 * connaitre le principe d'heritage prototypique. Derriere ce nom barbare se cache
 * une notion assez simple.
 *
 * Chaque objet en JavaScript possede un objet
 * prototype. Ce prototype est une sorte de carte d'identite de l'objet,
 * listant ses attributs et ses methodes. Le prototype d'un objet peut etre modifie a tout
 * moment afin d'ajouter des attributs ou des methodes a un objet. Rappelons nous
 * maintenant que tout est objet en js, y compris les fonctions constructeur.
 * Lorsque l'on souhaite acceder a un attribut de l'objet ou appeller l'une de
 * ses methodes, JavaScript va chercher cet element directement dans l'objet.
 * Si il ne le trouve pas, il ira le chercher dans le prototype de ce meme objet.
 * Ce prototype etant lui-meme un objet, il possede aussi un prototype, dans lequel
 * JavaScript ira chercher si il n'a toujours pas trouve ce qu'il cherche, et ainsi
 * de suite, jusqu'a arriver au prototype d'Object(), qui marque la fin de la chaine
 * de prototypage car tous les objets en JS sont derives d'Object(). A quoi cela
 * sert-il ? Premierement, a pouvoir ajouter de nouveaux attributs ou methodes a tous
 * les objets crees par un constructeur apres leur creation, si besoin est.
 * Et deuxiemement, cela peut nous permettre d'optimiser notre code, en evitant
 * au constructeur de devoir redeclarer des elements invariables (comme des
 * methodes, ou des variables constantes) a la creation de chaque objet. Finalement,
 * le fait que l'on puisse assigner un nouveau prototype cree de toutes pieces
 * a un objet nous permet de modeler les attributs et les methodes de l'objet
 * a notre guise, ce qui peut se reveler pratique dans beaucoup de situations.*/

/* Le but de cet exercice est de comprendre comment creer un constructeur en
 * repartissant au mieux les attributs et methodes de cet objet entre lui-meme
 * et son prototype. Pour cela, il faut reussir a faire la difference entre les
 * attributs dits propres a l'objet, qui prendront leurs valeurs des parametres
 * du constructeur, et les attributs et methodes a valeurs constantes, qui
 * n'ont donc pas besoin d'etre declares a chaque appel du constructeur*/

// Ici, on donne des valeurs par defaut aux parametres, au cas ou ceux-ci ne seraient pas renseignes lors de l'appel du constructeur.
Terre = function(temperatureMoyenne = 13.7, luminosite = 1.0) {
	this.diametre = 12742;
	this.gravitation = 9.81;
	this.pressionAtmospherique = 1.01325;
	this.temperatureMoyenne = 13.7;
	this.luminosite = 1.0;

	this.orage = function (){
		this.pressionAtmospherique -= 0.01;
		this.luminosite -= 0.1;
	}

	this.ereGlaciere = function (){
		this.temperatureMoyenne -= 6.0;
	}

	this.pollution = function (){
		this.temperatureMoyenne += 0.1;
	}
}

univers = [];

for (let i = 0; i < 10000; i++)
{
	univers.unshift(Terre());
}


