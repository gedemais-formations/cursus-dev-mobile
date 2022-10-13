function plus(a, b) {
    return(a+b);
}

function moins(a, b) {
    return (a-b);
}

function div(a, b) {
    if (b == 0) {
        prompt("on ne peut aps diviser par 0")
        return 0;
    }
    return (a/b);
}

function multi(a, b) {
    return(a*b);
}

function modulo(a, b) {
    return(a%b);
}

function calculs(op, a, b) {
    let val;
    switch (op) {
        case "+":
            val = plus(a, b);
            break;
        case "-":
            val = moins(a, b);
            break;
        case "/":
            val = div(a, b);
            break;
        case "*":
            val = multi(a, b);
            break;
        case "%":
            val = modulo(a, b);
            break;
    
        default:
            val= "demande non conforme";
            break;
    }
    return val
}


function calculatrice(form){
    let n;
    let donnees  = form.elements[0].value;
    donnees =  donnees.split(" ");

    while (donnees.length > 1){
        let op = donnees[1];
        console.log("op ="+op);

        let a = parseInt(donnees[0],10);
        console.log("a="+a);

        let b = parseInt(donnees[2], 10);
        console.log("b"+b);


        donnees.shift();
        donnees.shift();
        donnees.shift();
        console.log(donnees);
        console.log("longueur de donnes "+donnees.length);

        n = calculs (op, a, b);
        donnees.unshift(n);
    }

    let resultat = document.getElementById('result');
    resultat.textContent = n;
}
