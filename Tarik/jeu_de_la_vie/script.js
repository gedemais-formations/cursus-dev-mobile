//Définir la taille du canvas
const canvas = document.getElementById("zone");
canvas.width = window.innerWidth - (window.innerWidth % 100);
canvas.height = window.innerHeight - (window.innerHeight % 100);

let ctx = canvas.getContext('2d');

ctx.fillStyle = "black"
ctx.fillRect(10,10,5,5)