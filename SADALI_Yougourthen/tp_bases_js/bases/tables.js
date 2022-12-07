// tables.js

function table(nombre) {
    console.info ("table de multiplication de " + nombre);
   
 for (let i =1; i <= 10; i++) {

   let calcul= nombre*i;
   let chaine= nombre + " * " + i + "=" + calcul;
    console.log(chaine);
 }

};

function display_table() {
   
    for (let compteur = 1 ; compteur < 11 ; compteur++) {
table(compteur);

}
  

};

/* for (let ) {

}





*/