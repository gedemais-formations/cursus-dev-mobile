/* Example de conversions de types en js */
let chaineDeCaractere = "false"; // Variable de type string (character string)
let nombreAVirgule = 14.68; // Variable de type float (floating point number)
let nombreEntier = 42; // Variable de type int (integer)
let booleen = false; // Variable de type bool (boolean)

///////////////////////// String conversions /////////////////////////

// String -> Integer : parseInt(String, base); renvoie un nombre, ou NaN (not a number) si string n'est pas interprétable comme un nombre.
console.log(parseInt(chaineDeCaractere, 10));

// String -> Floating point number : parseFloat(string); renvoie un float, ou NaN si string n'est pas interprétable comme un nombre flottant.
console.log(parseFloat(chaineDeCaractere));

console.log('--------------------------------');

///////////////////////// Integer conversions /////////////////////////

// Integer -> String; Integer.toString(); Accepte plusieurs types en entree. Renvoie une chaine de caracteres issue de la transformation du parametre.
console.log(nombreEntier.toString());

/* Integer -> Floating point number; toFixed passe un nombre entier en decimal, sous la forme d'une chaine
 * de caracteres. Son seul parametre est la precision (nombre de chiffres apres la virgule). Apres une conversion
 * de String a Float (vue plus haut), on obtient le float en question. */
console.log(parseFloat(nombreEntier.toFixed(2)));

console.log('--------------------------------');

///////////////////////// Float conversions /////////////////////////

// Floating point number -> String; float.toString().
console.log(nombreAVirgule.toString());

// Floating point number -> Integer; Math.round(float)
console.log(Math.round(nombreAVirgule));

console.log('--------------------------------');

///////////////////////// Boolean conversions /////////////////////////

// Boolean -> String; bool.toString()
console.log(booleen.toString());

// Boolean -> Integer
console.log(booleen === true ? 1 : 0);
