/* 
    Créer un objet Clock avec une fonction constructeur prenant en paramètres 
    une heure, une minute et une seconde précise, et qui les stockera avec trois
    propriétés. L'objet doit comporter une methode "tick", permettant de faire
    s'ecouler une seconde. Les heures et les minutes doivent suivre en consequence.
    Clock doit également comporter une méthode "display", qui sera chargée d'afficher
    l'heure sous forme lisible dans le paragraphe contenant l'id "hour" à chaque
    seconde, avec le formatage de votre choix.
*/
// je déclarre une fonction ou class
function Clock(heure, minute, seconde) {
    this.heure = heure;
    this.minute = minute;
    this.seconde = seconde;

    // crée une methode qui permet d'afficher ce qu'on souhaite ici heure;minute;seconde
    this.tick = function () {
        this.seconde++;
        if (this.seconde >= 60) {
            this.seconde = 0;
            this.minute++;
            if (this.minute >= 60) {
                this.minute = 0;
                this.heure++;
                if (this.heure >= 24) {
                    this.heure = 0;
                }
            }
        }
        // pour afficher le resultat
        // return this.heure + "H : " + this.minute + "M : " + this.seconde + "S";
        // ou en back tiks
        //codition ternaire pour afficher 0 devant heure quand > 10
       return ` ${this.heure<10? 0 : ""}${this.heure} H : ${this.minute<10 ? 0 :""}${this.minute } M :  ${this.seconde<10? 0: ""} ${this.seconde} S;`
    }
    this.display = function () {
        // recupérer l'élement qui a id hour dans le DOM
        const element = document.getElementById('hour');
        // affichage de l'élément selecionner ligne 35
        element.innerText = this.tick();


    }
}

// je creer  un Object
let clock = new Clock(0, 0, 0);

setInterval(async function comptage() {
    clock.tick();
    console.log(clock);
    clock.display();
}, 1000);

/* setInterval est là pour permettre à la fonction tick() de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple). Vous pouvez modifier le
délai de 1000ms pour faire vos tests.*/
