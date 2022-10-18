/* 
    Créer un objet Clock avec une fonction constructeur prenant en paramètres 
	une heure, une minute et une seconde précise, et qui les stockera avec trois
    propriétés. L'objet doit comporter une methode "tick", permettant de faire
    s'ecouler une seconde. Les heures et les minutes doivent suivre en consequence.
    Clock doit également comporter une méthode "display", qui sera chargée d'afficher
    l'heure sous forme lisible dans le paragraphe contenant l'id "hour" à chaque
    seconde, avec le formatage de votre choix.
*/

function Clock(heure, minute, seconde) {
  this.heure = heure;
  this.minute = minute;
  this.seconde = seconde;
  //
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
    console.log(this.heure, this.minute, this.seconde);
  };
}

let clock = new Clock(4, 59, 57);
for (let i = 0; i < 10; i++) {
  clock.tick();
}

/*
setInterval(async function tick()
{
}, 1000);
*/
/* setInterval est là pour permettre à la fonction tick() de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple). Vous pouvez modifier le
délai de 1000ms pour faire vos tests.*/
