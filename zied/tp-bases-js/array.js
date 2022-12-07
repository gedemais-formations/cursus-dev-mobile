
function tableau(array)
{
  let tab = [ ];
  tab[0] = array[0].toString();
  tab[1] = array[1].toString();
  tab[2] = array[2].toString();
  tab[3] = array[3].toString();
 
    return tab;
}


let v = tableau(array);
console.log(v);

console.log(tableau(array));