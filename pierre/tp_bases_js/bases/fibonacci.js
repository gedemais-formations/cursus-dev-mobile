// fibonacci.js pour exercice 7

function fibonacci_loop(nbr) {
    var n1 = 0;
    var n2 = 1;
    var somme = 0;
  
    for(let i = 2; i <= nbr; i++){
       //somme des deux derniers nombres
       somme = n1 + n2; 
       //assigner la dernière valeur à la première
       n1 = n2; 
       //attribuer la somme au dernier
       n2 = somme; 
    }
  
    return nbr ? n2 : n1;
 }
 

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

function exemple7_fibonacci()
{
    console.info("exemple7_fibonacci");
    // console.log(fibonacci(8));
    // console.log(fibonacci_loop(8));

    
    const maxi= 20; // 100
    for(let i=0;i<maxi; i++)
    {
       console.log("fib(" + i + ")=" + fibonacci(i));
    }
}
