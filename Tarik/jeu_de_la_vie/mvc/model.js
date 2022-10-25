class Model {
    constructor() {
        this.cellSize = 10;
        this.widthCanvas = 100;
        this.heightCanvas = 70;
        this.pxWidth = this.widthCanvas * this.cellSize;
        this.pxHeight = this.heightCanvas * this.cellSize;
        this.arrayCanvas = [];
        this.fillingRate = 20;
        this.alive = 0;
        this.dead = 0;
        this.cycleTime = 100;
    };

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    generateRandom() {
        for (let i = 0; i < this.widthCanvas; i ++) {
            this.arrayCanvas.push([]);
            for (let j = 0; j < this.heightCanvas; j ++) {
                this.arrayCanvas[i].push(this.getRandomInt(100) < this.fillingRate)
            }
        }
    };

    generateArrayEmpty() {
        this.arrayCanvas = [];
        for (let i = 0; i < this.widthCanvas; i ++) {
            this.arrayCanvas.push([]);
            for (let j = 0; j < this.heightCanvas; j ++) {
                this.arrayCanvas[i].push(false)
            }
        }
    };

    checkVoisin(index, index2, array) {
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
    };
}