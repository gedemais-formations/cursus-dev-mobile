let entier = 189,
  chaine = "189",
  boolean = true,
  float;

const tab = [entier, chaine, boolean, float];

tab.map((el) => {
  el !== undefined ? console.log(el) : console.log("");
});
