function calculatrice(form)
{   //obtenir le résultat de la saisie dans l'input "opération"
    var resultat;
    resultat = document.getElementById('formWrited').value;
    console.log(resultat);
    console.log(typeof resultat);

    //mettre ce résultat dans un tableau grâce aux séparateur
     splitResultat = resultat.split();
     console.log(resultat.split(''));

    //Mettre les valeurs au format number
    var resultat2;
    resultat2 = parseInt(splitResultat, 10);
    console.log(parseInt(splitResultat, 10));
    console.log(typeof resultat2);

    var resultat3;
    resultat3 = parseFloat(resultat2.toFixed(2));
    console.log(resultat3); 
    console.log(typeof resultat3);  

   
}
