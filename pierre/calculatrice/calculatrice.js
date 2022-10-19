// calculatrice.js

function division(a, b) {
  if (b == 0) {
    alert("Interdit de diviser par 0");
    return undefined;
  }

  return a / b;
}

function multiplication(a, b) {
  return a * b;
}

function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

function modulo(a, b) {
  return a % b;
}

function executer_calcul(operation, a, b) {
  let resultat;
  switch (operation) {
    case "/":
      resultat = division(a, b);
      break;
    case "*":
      resultat = multiplication(a, b);
      break;
    case "+":
      resultat = addition(a, b);
      break;
    case "-":
      resultat = soustraction(a, b);
      break;
    case "%":
      resultat = modulo(a, b);
      break;
    default:
      resultat = "opération non gérée " + operation;
      break;
  }
  return resultat;
}

function chercher_nombre(a, i) {
  let j = i;
  let tmp = "";
  while (!isNaN(a[j])) {
    tmp = tmp + a[j];
    a.splice(j, 1);
  }
  tmp = parseFloat(tmp);
  a.splice(i, 0, tmp);
  return a;
}

function separer_saisies(a) {
  a = a.replace(/ /g, "");
  a = a.split("");
  let i = 0;
  while (i < a.length) {
    if (!isNaN(a[i])) {
      a[i] = parseFloat(a[i]);
    }
    if (!isNaN(a[i]) && !isNaN(a[i + 1])) {
      a = chercher_nombre(a, i);
    }
    i++;
  }
  return a;
}

function calculatrice(form) {
  let saisie = form.elements[0].value;
  console.log("données saisies ", saisie);
  let donnees = separer_saisies(saisie);
  console.log("données séparées ", donnees);
  let result_temporaire;
  while (donnees.length > 1) {
    let oper = donnees[1];
    let a = donnees[0];
    let b = donnees[2];
    result_temporaire = executer_calcul(oper, a, b);
    donnees.shift();
    donnees.shift();
    donnees.shift();
    donnees.unshift(result_temporaire);
  }

  let paragraph_result = document.getElementById("result");
  let chaine_resultat;
  if (result_temporaire === undefined) {
    chaine_resultat = "Erreur, le calcul n'a pu être executé";
  } else {
    chaine_resultat = "Le résultat est " + result_temporaire;
  }
  paragraph_result.textContent = chaine_resultat;
}
