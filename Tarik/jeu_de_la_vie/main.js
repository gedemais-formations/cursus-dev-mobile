let aliveColor = "black";
let deadColor = "white";

const cellSize = 10;
const widthCanvas = 100;
const heightCanvas = 70;
const pxWidth = widthCanvas * cellSize;
const pxHeight = heightCanvas * cellSize;

let arrayCanvas = [];
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

// Génére tout les pixels true 
function setPixel(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j <array[i].length; j++) {
            if (array[i][j] == true) {
                ctx.fillStyle= aliveColor;
                ctx.fillRect(i*cellSize,j*cellSize,cellSize,cellSize);
            }
        }
    }
};

//check les valeur des voisin et retourne la somme des voisin en vie
function checkVoisin(index, index2, array) {
    let positifPixel = 0;
    for (let x = -1 ; x < 2; x++ ) {
        if(array[index-1] != undefined && array[index-1][index2+x] != undefined &&
             array[index-1][index2+x] === true) {
            positifPixel++;
        }
        if(array[index] != undefined && array[index][index2+x] != undefined &&
            array[index][index2+x] === true) {
            positifPixel++;
        }
        if(array[index+1] != undefined && array[index+1][index2+x] != undefined &&
            array[index+1][index2+x] === true) {
            positifPixel++;
        }
    }
    return positifPixel;
}


// Creer un nouveau tableau apres transformation et calque le premier dessus
function propagePixel(){
    let newArrayCanvas = [];
    for (let i = 0; i < arrayCanvas.length; i++) {
        newArrayCanvas.push([]);
        for (let j = 0; j <arrayCanvas[i].length; j++) {
            let positifPixel = checkVoisin(i, j, arrayCanvas);
            if (arrayCanvas[i][j] == true) {
                positifPixel--
                if (positifPixel < 2 || positifPixel > 3) {
                    newArrayCanvas[i].push(false);
                } else {
                    newArrayCanvas[i].push(true);
                }
            } else if(arrayCanvas[i][j] == false) {
                if (positifPixel < 3 || positifPixel > 3) {
                    newArrayCanvas[i].push(false);
                } else {
                    newArrayCanvas[i].push(true);
                }
            }
        }
    }

    arrayCanvas = newArrayCanvas;
}
drawBackground();

//Change de couleur
function colorChange() {
    let btnDeadColor = document.getElementById("colorDead");
    let btnAliveColor = document.getElementById("colorAlive");

    console.log(btnDeadColor.value);
    deadColor = btnDeadColor.value;
    aliveColor = btnAliveColor.value;
}

//Button random Start
function randomStart() {
    arrayCanvas.length = 0;
    generateMatrix()
    drawBackground()
    setPixel(arrayCanvas)
};

//Button Start
let btnStatus = true;
let interval = null;
function startPause() {
    let btn = document.getElementById("startPause");
    if (btnStatus == true) {
        interval = setInterval(async function tick() {
            propagePixel();
            drawBackground();
            setPixel(arrayCanvas);
        },100);
        btn.innerHTML = "Pause";
        btnStatus = false;
    } else if(btnStatus == false) {
        clearInterval(interval);
        btn.innerHTML= "Start";
        btnStatus = true;
    }
}
/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/
setInterval(async function tick() {

}, 10000);
