/* 
    Créer un objet Clock avec une fonction constructeur prenant en paramètres 
	une heure, une minute et une seconde précise, et qui les stockera avec trois
    propriétés. L'objet doit comporter une methode "tick", permettant de faire
    s'ecouler une seconde. Les heures et les minutes doivent suivre en consequence.
    Clock doit également comporter une méthode "display", qui sera chargée d'afficher
    l'heure sous forme lisible dans le paragraphe contenant l'id "hour" à chaque
    seconde, avec le formatage de votre choix.
*/

function Clock (heure, minute, seconde){
    this.heure = heure;
    this.minute = minute;
    this.seconde = seconde;
    this.add_display = function ()
    {
       //Gérer l'affichage
       //sélection du DIV pour afficher
        let display = document.getElementById('hour');
       
        //dans le cas ou un seul zéro s'affiche
        let h= this.heure;
        if(this.heure < 10 ){
         h= "0" + this.heure;
        }
        let m =  this.minute;
        if(this.minute < 10 ){
        m= "0" +this.minute;
        }
        let s = this.seconde;
        if(this.seconde < 10 ){
            s= "0" + this.seconde
        }
        //affichage de l'heure à l'écran
        display.innerText = h + " : " + m +  " : " + s;
        console.log(display.innerText);
   
    };
    //fonction tick qui va gérer les changements de secondes, minutes, et heures.
   this.add_tick = function(){
        this.seconde ++; 
        if (this.seconde >= 60)
         {
         this.minute++;
         this.seconde= 0;
         }
       
        if (this.minute >= 60)
         {
         this.heure++;
         this.minute = 0;
         }
       
       if (this.heure >= 24)
         {
         this.heure = 0;
         }
      
    }
       

};

let clockYann = new Clock(23, 59, 55);



setInterval(async function tick()
{
    clockYann.add_tick();
   clockYann.add_display();
  
}, 1000);



/* setInterval est là pour permettre à la fonction tick() de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple). Vous pouvez modifier le
délai de 1000ms pour faire vos tests.*/
