let letterIn = /[a-zA-Z]/

function majArray(form) { // tranforme la value en array de nombre et d'opérateur
    let calcul = form.operation.value.replace(/\s+/g, '')
    
    if ((letterIn.test(calcul)) == true) {
        result.innerHTML = "On calcul pas des lettres ici !"
    } else {
        let calculArray = calcul.split('')
        console.log(calculArray);

        for (let i = 0; i < calculArray.length; i++) {
            // je suis un chiffre ou un .
            if(!isNaN(calculArray[i]) === true | calculArray[i] == ".") {
                // Le suivant est un chiffre ou un .
                if (!isNaN(calculArray[i + 1]) === true | calculArray[i + 1] == "."){
                    calculArray[i] += calculArray[i + 1];
                    calculArray.splice(i + 1,1);
                    i--
                }
            }
        }
        console.log(calculArray);
        return calculArray;
    } 
}

function stringToFloat(array) { //transforme les types des nombres de string à float
    let arrayOfFloatAndInt = majArray(array)

    for (let i = 0; i < arrayOfFloatAndInt.length; i++) {
        if(!isNaN(arrayOfFloatAndInt[i])) {
            arrayOfFloatAndInt.splice(i, 1,parseFloat(arrayOfFloatAndInt[i]))  
        }
    }
    console.log(arrayOfFloatAndInt);
    return arrayOfFloatAndInt;
}

function calculatrice(form) {
    let operation = stringToFloat(form);

    for (let i = 1; i < operation.length; i++) {
        if(operation[i] == "*") { // je suis un signe *
            operation.splice(i-1,3, operation[i - 1] * operation[i + 1])
            console.log(operation);
            i = 0;
            
        } else if(operation[i] == "/") { // je suis un signe /
            operation.splice(i-1,3, operation[i - 1] / operation[i + 1])
            console.log(operation);
            i = 0
        }
    }
    for (let i = 1; i < operation.length; i++) {
        if(operation[i] == "+") { // je suis un signe +
            operation.splice(i-1, 3, operation[i - 1] + operation[i + 1] )
            console.log(operation);
            i--
    
        } else if(operation[i] == "-") { // je suis un signe -
            operation.splice(i-1, 3, operation[i - 1] - operation[i + 1] )
            console.log(operation);
            i--
            
        } else {
            console.log("une erreur est survenue ! unluck 🤡");
    
        }
    }
    result.innerHTML = operation[0];

}