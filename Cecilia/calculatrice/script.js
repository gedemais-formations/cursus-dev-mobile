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

function CreateNb(a,i){
    let j=i;
    let tmp = "";
    while(!isNaN(a[j])){
        tmp = tmp + a[j];
        a.splice(j,1);  
    }
    tmp = parseFloat(tmp);
    a.splice(i,0,tmp);
    return a;
}

function table(a){
    a = a.replace(/ /g,"");
    a= a.split("");
    let i=0;

    while (i<a.length){ 

        if(!isNaN(a[i])){
            a[i]= parseFloat(a[i]);
        }

        if(!isNaN(a[i]) && !isNaN(a[i+1])){
            a = CreateNb(a, i);
        }
        i++;
    }
    return a;
}

function prio(donnees) {
    
    for (let i = 0; i < donnees.length; i++) {
       
        if((donnees[i] == "*") || (donnees[i] == "/")){
            let op = donnees[i];
            let a = donnees[i-1];
            let b =donnees[i+1];
            let tmp = calculs(op, a, b);

            donnees.splice(i-1,3);
            donnees.splice(i-1,0,tmp);

            i=0;
        }
    }
        return donnees;
}




function calculatrice(form){
    let n;
    let donnees  = form.elements[0].value;
    donnees =  table(donnees);
    donnees= prio(donnees);

    while (donnees.length > 1){
        let op = donnees[1];
        let a = donnees[0];
        let b = donnees[2];
        donnees.shift();
        donnees.shift();
        donnees.shift();
        n = calculs (op, a, b);
        donnees.unshift(n);
    }

    let resultat = document.getElementById('result');
    resultat.textContent = n;
}
