function calculatrice(form) {
  form = document.forms[form];
  let valueOp = document.getElementById("operation").value;
  let resultat = document.getElementById("result");
  let tabOp;
  let op;
  let result;

  resultat.innerHTML=" ";

  function searchSymbol(val) {
    // recherche le +
    if (val.includes("+")) {
      op = "+";
      tabOp = val.split("+");
    }

    // recherche le -
    else if (val.includes("-")) {
      op = "-";
      tabOp = val.split("-");
    }

    // recherche le x
    else if (val.includes("x") || val.includes("X")) {
      op = "x";

      if (val.includes("X")) {
        tabOp = val.split("X");

        
      }else tabOp = val.split("x");
    }

    // recherche le %
    else if (val.includes("%")) {
      op = "%";
      tabOp = val.split("%");
    }
  }

  searchSymbol(valueOp);
  console.log(tabOp);



  if(tabOp.length > 2){
    switch (op) {
        case "+":
          result = Number(tabOp[0]) + Number(tabOp[1]) + Number(tabOp[2]) ;
          break;
    
        case "-":
            result = Number(tabOp[0]) - Number(tabOp[1]) - Number(tabOp[2]) ;
          break;
    
        case "x":
            result = (Number(tabOp[0]) * Number(tabOp[1]))* Number(tabOp[2]) ;
          break;
    
        case "%":
            result = Number(tabOp[0]) / Number(tabOp[1]) / Number(tabOp[2]);
            if(result == Infinity){
                return resultat.innerHTML = `<p>0 = operation impossible </p>`;
            }
          break;
    
        default:
          console.log("je n'ai pas trouvé d'operation ");
      }

  }else


    switch (op) {
    case "+":
      result = Number(tabOp[0]) + Number(tabOp[1]);
      break;

    case "-":
      result = tabOp[0] - tabOp[1];
      break;

    case "x":
      result = tabOp[0] * tabOp[1];
      break;

    case "%":
      result = tabOp[0] / tabOp[1];
      if(result == Infinity){
        return resultat.innerHTML = `<p> 0 = opération impossible </p>`;
    }
      break;

    default:
      console.log("je n'ai pas trouvé d'operation ");
  }


  resultat.innerHTML = `<p> ${result} </p>`;
}
