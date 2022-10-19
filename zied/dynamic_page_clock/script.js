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
        let string = "";
        let text = document.getElementById("hour");
		
        
        //this.heures.toString() + ":" + this.minutes.toString() + ":" + this.secondes.toString();
	
       string += (this.heures < 10 ? "0" : "")  + this.heures + ":";
       string += (this.minutes < 10 ? "0" : "") + this.minutes + ":";
       string += (this.secondes <10 ? "0" : "") + this.secondes ;
   
       text.innerText = string ;
     console.log(this.secondes);
    }
     
    
    this.tick = function()

    {
       this.secondes ++;
       if(this.secondes == 60)
       {
        this.secondes = 00;
        this.minutes ++;
       }
         if(this.minutes == 60)
         {
            this.minutes = 00;
            this.heures ++;
         }
           if(this.heures== 24)
           {
            this.heures = 00
           }
        
    this.display();
    }
    
}    
let clock = new Clock(09, 09, 05);

setInterval(async function tick()
{
    clock.tick();
}, 10);

/* setInterval est là pour permettre à la fonction tick() de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple). Vous pouvez modifier le
délai de 1000ms pour faire vos tests.*/
