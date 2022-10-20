const aliveColor = "black";
const deadColor = "white";

const cellSize = 10;
const widthCanvas = 10;
const heightCanvas = 7;
const pxWidth = widthCanvas * cellSize;
const pxHeight = heightCanvas * cellSize;

const arrayCanvas = [];
const fillingRate = 20;

//génére un % aléatoire
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Définir le canvas
const canvas = document.getElementById("zone");
let ctx = canvas.getContext('2d');

// defini le cadrillage 
function drawBackground() {
    canvas.width = pxWidth;
    canvas.height = pxHeight;
    console.log(`height : ${pxHeight} , width: ${pxWidth}`);

    ctx.fillStyle = deadColor;
    ctx.fillRect(0, 0, pxWidth, pxHeight);
    
    ctx.strokeStyle = "black";
    for (let i = 0; i < pxWidth; i += cellSize) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, pxHeight);
    }
    for (let i = 0; i < pxHeight; i += cellSize) {
        ctx.moveTo(0, i);
        ctx.lineTo(pxWidth, i);
    }
    ctx.stroke();
}

// genére le tableau des colonnes de cellules true/false
function generateMatrix() {
    for (let i = 0; i < widthCanvas; i ++) {
        arrayCanvas.push([]);
        for (let j = 0; j < heightCanvas; j ++) {
            arrayCanvas[i].push(getRandomInt(100) < fillingRate)
        }
    }
}
generateMatrix()

console.log(arrayCanvas);

setInterval(async function tick() {
    drawBackground();
}, 1000);
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
