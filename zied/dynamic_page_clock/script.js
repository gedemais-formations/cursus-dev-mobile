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
	this.heures = heure;
	this.minutes = minute;
	this.secondes = seconde;
	this.display = function () //fonction anonyme

	{
        let text = document.getElementById("hour");
		text.innerText = this.heures.toString() + ":" + this.minutes.toString() + ":" + this.secondes.toString();
	
    /* string += (this.heure < 10 ? "0" : "")  + this.heure + ":";
       string += (this.minute < 10 ? "0" : "") + this.minute + ":";
       string += (this.seconde <10 ? "0" : "") + this.seconde ;
   
   */
    }
     
    
    this.tick = function()

    {
       this.seconde ++;
       if(this.seconde == 60)
       {
        this.seconde = 00;
        this.minute ++;
       }
         if(this.minute == 60)
         {
            this.minute = 00;
            this.heure ++;
         }
           if(this.heure== 24)
           {
            this.heure = 00
           }
        
    this.display();
    }
    
}    
let clock = new Clock(23, 50, 58);

setInterval(async function tick()
{
    clock.tick();
}, 10);

/* setInterval est là pour permettre à la fonction tick() de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple). Vous pouvez modifier le
délai de 1000ms pour faire vos tests.*/
