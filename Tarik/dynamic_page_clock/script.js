/* 
    Créer un objet Clock avec une fonction constructeur prenant en paramètres 
	une heure, une minute et une seconde précise, et qui les stockera avec trois
    propriétés. L'objet doit comporter une methode "tick", permettant de faire
    s'ecouler une seconde. Les heures et les minutes doivent suivre en consequence.
    Clock doit également comporter une méthode "display", qui sera chargée d'afficher
    l'heure sous forme lisible dans le paragraphe contenant l'id "hour" à chaque
    seconde, avec le formatage de votre choix.
*/
function Clock(h, min, sec) {
  (this.heures = h),
    (this.minutes = min),
    (this.secondes = sec),
    (this.tick = () => {
      this.secondes++;
      if (this.secondes == 60) {
        this.secondes = 0;
        this.minutes++;
      }
      if (this.minutes == 60) {
        this.minutes = 0;
        this.heures++;
      }
      if (this.heures == 24) {
        this.heures = 0;
      }
    }),
    (this.display = () => {
      let newHeures = this.heures < 10 ? "0" + this.heures : this.heures;
      let newMinutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
      let newSecondes =
        this.secondes < 10 ? "0" + this.secondes : this.secondes;

      document.getElementById(
        "hour"
      ).innerHTML = ` ${newHeures} : ${newMinutes} : ${newSecondes}`;
    });
}

let clock = new Clock(9, 50, 0);

setInterval(async function tick() {
  clock.tick();
  clock.display();
}, 1);
/* setInterval est là pour permettre à la fonction tick() de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple). Vous pouvez modifier le
délai de 1000ms pour faire vos tests.*/
