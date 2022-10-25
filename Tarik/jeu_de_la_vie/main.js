let aliveColor = "black";
let deadColor = "white";

const cellSize = 10;
const widthCanvas =100;
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


//Time
let cycleTime = 100;
function changeTime() {
    let newTime = document.getElementById("timerNumber");
    cycleTime = parseInt(newTime.value);
    startPause();
    startPause();
};

let initialCycle = 0;
let initialTime = 0.00;
let timer = document.getElementById("timer");
function setTimer(timeAdded) {
    
    initialTime += timeAdded/1000;
    initialCycle++;
    timer.innerHTML = ` ${initialTime.toFixed(2)} sec | ${initialCycle} cycle`;
};

// Change de couleur
function colorChange() {
    let btnDeadColor = document.getElementById("colorDead");
    let btnAliveColor = document.getElementById("colorAlive");

    deadColor = btnDeadColor.value;
    aliveColor = btnAliveColor.value;
    drawBackground();
    setPixel(arrayCanvas);
};

//Button random Start
function randomStart() {
    arrayCanvas.length = 0;
    generateMatrix()
    drawBackground()
    setPixel(arrayCanvas)
    countAliveOrDead();
};

//Button Start
let btnStatus = true;
let interval = null;
function startPause() {
    let btn = document.getElementById("startPause");
    if (btnStatus == true) {
        interval = setInterval(async function tick() {
            setTimer(cycleTime)
            propagePixel();
            drawBackground();
            setPixel(arrayCanvas);
            countAliveOrDead();
        },cycleTime);
        btn.innerHTML = "Pause";
        btnStatus = false;
    } else if(btnStatus == false) {
        clearInterval(interval);
        btn.innerHTML= "Start";
        btnStatus = true;
    }
};

//button reset 
function reset() {
    let resetArray = [];
    for (let i = 0; i < widthCanvas; i ++) {
        resetArray.push([]);
        for (let j = 0; j < heightCanvas; j ++) {
            resetArray[i].push(false)
        }
    }
    arrayCanvas = resetArray;
    initialCycle = 0;
    initialTime = 0.00;
    timer.innerHTML =""
    btnStatus = false;
    startPause();
    drawBackground();
    countAliveOrDead();
}

// cellule clickable 
// recupérer la position de la souris par rapport au canvas
function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return [10*Math.floor(x/cellSize), 10*Math.floor(y/cellSize)]
};

// génére une matrix vide de cellule
function generateNewMatrix() {
    if (arrayCanvas.length == widthCanvas) {
        return arrayCanvas;
    } else {
        reset()
    }
}

canvas.addEventListener('mousedown', (e) => {
    let position = getCursorPosition(canvas, e);
    if (position[0] != 0) {
        position[0] = position[0]/10;
    }
    if (position[1] != 0) {
        position[1] = position[1]/10;
    }
    generateNewMatrix();
    let newClickArrayCanvas = [];
    for (let i = 0; i < arrayCanvas.length; i++) {
        newClickArrayCanvas.push([]);
        for (let j = 0; j <arrayCanvas[i].length; j++) {
            if (i == position[0] && j == position[1]) {
                if (arrayCanvas[i][j] == true) {
                    newClickArrayCanvas[i].push(false)
                } else if(arrayCanvas[i][j] == false) {
                    newClickArrayCanvas[i].push(true)
                }
            } else {
                newClickArrayCanvas[i].push(arrayCanvas[i][j])
            }
        }
    }
    arrayCanvas = newClickArrayCanvas;
    btnStatus = false;
    startPause();
    drawBackground();
    setPixel(arrayCanvas);
    countAliveOrDead();
});

// Compte des cellules Alive et Dead
function countAliveOrDead() {
    let count = document.getElementById("countCellule");
    let alive = 0;
    let dead = 0;

    for (let i = 0; i < arrayCanvas.length; i++) {
        for (let j = 0; j <arrayCanvas[i].length; j++) {
            if (arrayCanvas[i][j] == true) {
                alive++
            } else {
                dead++
            }
        }
    }

    count.innerHTML = `Cellule(s) vivante(s) : ${alive} | 
        Cellule(s) morte(s) : ${dead} `
}


// Lancement au chargement de la page
drawBackground();
countAliveOrDead();