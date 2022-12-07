// conditions.js pour exercice 6
/*
* voir https://fr.wikipedia.org/wiki/Nombre_premier
* Les 25 nombres premiers inférieurs à 100: 
* 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
*
* voir https://waytolearnx.com/2019/09/fonction-pour-verifier-si-un-nombre-est-premier-en-javascript.html 
*/

function nombrePremier(nbr) {
    for(var i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
  }

function conditions()
{
    console.info("Liste des nombres premiers");
    console.info("2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97");
    let result="";
    let resul="";
    for(let i=1; i<100; i++)
    {
        if(i%9!= 0)
          {
            if(nombrePremier(i))
            {
                resul+=  i + ", ";
                result+= i +"est premier=";
            }
            else
            {
                //result+=i +"n'est pas premier=";
            }
            
          }
          else
          {
            result+= "ignoré="+i;
          }
        result+='\n';
    }
    console.log(resul);
    // console.log("debug\n" + result);
    return resul;
}