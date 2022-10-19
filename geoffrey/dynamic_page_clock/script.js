/* 
    Créer un objet Clock avec une fonction constructeur prenant en paramètres 
	une heure, une minute et une seconde précise, et qui les stockera avec trois
    propriétés. L'objet doit comporter une methode "tick", permettant de faire
    s'ecouler une seconde. Les heures et les minutes doivent suivre en consequence.
    Clock doit également comporter une méthode "display", qui sera chargée d'afficher
    l'heure sous forme lisible dans le paragraphe contenant l'id "hour" à chaque
    seconde, avec le formatage de votre choix.
*/

function Clock(heure, minute, seconde)
{
    this.heure = heure;
    this.minute = minute;
    this.seconde = seconde;

    this.tick = function ()
    {
        this.seconde++;
        if (this.seconde == 60)
        {
            this.seconde = 0;
            this.minute++;
        }
        if (this.minute == 60)
        {
            this.heure++;
            this.minute = 0;
        }
        if (this.heure == 24)
            this.heure = 0;
    }

    this.display = function ()
    {
        let string = "";

        string += (this.heure < 10 ? "0" : "") + this.heure + " : ";
        string += (this.minute < 10 ? "0" : "") + this.minute + " : ";
        string += (this.seconde < 10 ? "0" : "") + this.seconde;

        const p = document.getElementById("hour");
        p.innerText = string;
    }
}

clock = new Clock(9, 0, 0);

setInterval(async function tick()
{
    // code
    clock.tick();
    clock.display();
}, 5);

/* setInterval est là pour permettre à la fonction tick() de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple). Vous pouvez modifier le
délai de 1000ms pour faire vos tests.*/