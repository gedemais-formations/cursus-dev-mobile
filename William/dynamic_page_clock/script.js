/* 
    Créer un objet Clock avec une fonction constructeur prenant en paramètres 
	une heure, une minute et une seconde précise, et qui les stockera avec trois
    propriétés. L'objet doit comporter une methode "tick", permettant de faire
    s'ecouler une seconde. Les heures et les minutes doivent suivre en consequence.
    Clock doit également comporter une méthode "display", qui sera chargée d'afficher
    l'heure sous forme lisible dans le paragraphe contenant l'id "hour" à chaque
    seconde, avec le formatage de votre choix.
*/
function Clock(heure, minute, seconde){
    this.heure = heure;
    this.minute = minute;
    this.seconde = seconde;
//Méthode tick
        this.tick = function() { 

        this.seconde ++;
      if (this.seconde == 60)
    {
      this.seconde = 0;
      this.minute++;
    }

    if (this.minute == 60)
    {
       this.minute = 0;
       this.heure ++;
    }

    if (this.heure == 24)
    {
    this.heure = 0;
    }
        let chaine_seconde;

        if (this.seconde <= 9) {
          chaine_seconde = "0" + this.seconde
        }
       else{ 
        //copie les nombres de 10 à 59
        chaine_seconde = this.seconde.toString();
       
       }
        console.log(this.heure, this.minute, chaine_seconde);
    } 

    this.display = function ()
         }
     
     console.log("bonjour");

let myClock = new Clock(15, 58, 57);

for (let i = 0 ; i < 70 ; i++){
    myClock.tick()

}
console.log("au revoir")

//modify_html.js
string += (this.seconde < 10 ? "0" : "") + this.seconde + " : ";




/* setInterval est là pour permettre à la fonction tick() de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple). Vous pouvez modifier le
délai de 1000ms pour faire vos tests.*/




// let 
// function heure(i) {
//     i
// }




// function


// setInterval(async function tick()
// {
// }, 1000);

