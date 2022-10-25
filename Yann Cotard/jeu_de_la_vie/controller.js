function Controller(timerElement, time, minutes, secondes, count, aliveColorPicker, deadColorPicker, alive_color, dead_color)
{
   this.timerElement=timerElement;
   this.time = time;
   this.minutes=minutes;
   this.secondes=secondes;
   this.count=count;
   this.aliveColorPicker=aliveColorPicker;
   this.deadColorPicker=deadColorPicker;
   this.alive_color=alive_color;
   this.dead_color=dead_color;
}
//fonction pur calculer temps et nombre de tours de la fonction "tick"
//récupération du paragraphe timer


this.timerElement = document.getElementById('timer');
//création variable "time" à zéro
this.time = 0;

this.add_temps = function(){
  //calcul du temps
  this.minutes = parseInt(time / 60, 10);
  this.secondes = parseInt(time % 60, 10);
  this.count = parseInt(time, 10)
  
  //formatage du temps
  this.minutes = minutes < 10 ? "0" + minutes : minutes;
  this.secondes = secondes < 10 ? "0" + secondes : secondes;

  //modification de l'affichage
  this.timerElement.innerText="Cycles :" + count  + "|" + minutes + ":" + secondes + "s";
  time++;
}


//fonction update color pour changer la couleur des cellules mortes et vivante
this.add_update_Colors =function() {
  
   //sélection des input type color
   this.aliveColorPicker = document.getElementById('alive_color_form');
   this.deadColorPicker = document.getElementById('dead_color_form');
 
   //application des valeur changées
   this.alive_color =aliveColorPicker.value;
   this.dead_color =deadColorPicker.value;
 };

 //fonction pour retourner aux couleurs initiales (blanc et noir)
this.add_clear_board=function(){
   this.alive_color = "black";
   this.dead_color = "white";
 }

 //fonction pour changer la vitesse d'execution
function update_speed(){

   let inputNumber = document.getElementById('speed_form');
   
   let delay = 1000 / inputNumber.value;
   
   generate_matrix();
   draw_background();
   updateView();
   
   let interval =setInterval(async function tick() {
     update_model();
     draw_background();
     updateView();
     temps();
     
   }, delay);
   
   
   };

