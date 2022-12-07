// types.js

function exercice3_chaineVersEntier(message, chaineDeCaractere)
{
    let entier= parseInt(chaineDeCaractere, 10);
    console.info(message);
    return entier;
}

function exercice3_chaineVersFlottant(message, flottant)
{
    let flot= parseFloat(flottant);
    console.info(message);
    return flot;
}

function exercice3_entierVersChaine(message, enti)
{
    let chaineent= enti.toString();
    console.info(message);
    return chaineent;
}

function exercice3_flottantVersChaine(message, flo)
{
    let chaineflo= flo.toString();
    console.info(message);
    return chaineflo;
}

function exercice3_booleenVersChaine(message, boo)
{
    let chaineboo= boo.toString();
    console.info(message);
    return chaineboo;
}
