class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.interval = null;
    };

    drawBackground() {
        this.view.canvas.width = this.model.pxWidth;
        this.view.canvas.height = this.model.pxHeight;
    
        this.view.ctx.fillStyle = this.view.deadColor;
        this.view.ctx.fillRect(0, 0, this.model.pxWidth, this.model.pxHeight);
        
        this.view.ctx.strokeStyle = "black";
        for (let i = 0; i < this.model.pxWidth;
             i += this.model.cellSize) {
            this.view.ctx.moveTo(i, 0);
            this.view.ctx.lineTo(i, this.model.pxHeight);
        }
        for (let i = 0; i < this.model.pxHeight;
             i += this.model.cellSize) {
            this.view.ctx.moveTo(0, i);
            this.view.ctx.lineTo(this.model.pxWidth, i);
        }
        this.view.ctx.stroke();
    };

    setPixel() {
        for (let i = 0; i < this.model.arrayCanvas.length; i++) {
            for (let j = 0; j <this.model.arrayCanvas[i].length; j++) {
                if (this.model.arrayCanvas[i][j] == true) {
                    this.view.ctx.fillStyle= this.view.aliveColor;
                    this.view.ctx.fillRect(i*this.model.cellSize,j*this.model.cellSize
                        ,this.model.cellSize,this.model.cellSize);
                }
            }
        }
    };

    propagePixel(){
        let newArrayCanvas = [];
        for (let i = 0; i < this.model.arrayCanvas.length; i++) {
            newArrayCanvas.push([]);
            for (let j = 0; j <this.model.arrayCanvas[i].length; j++) {
                let positifPixel = this.model.checkVoisin(i, j, this.model.arrayCanvas);
                if (this.model.arrayCanvas[i][j] == true) {
                    positifPixel--
                    if (positifPixel < 2 || positifPixel > 3) {
                        newArrayCanvas[i].push(false);
                    } else {
                        newArrayCanvas[i].push(true);
                    }
                } else if(this.model.arrayCanvas[i][j] == false) {
                    if (positifPixel < 3 || positifPixel > 3) {
                        newArrayCanvas[i].push(false);
                    } else {
                        newArrayCanvas[i].push(true);
                    }
                }
            }
        }
        this.model.arrayCanvas = newArrayCanvas;
    };

    randomStart() {
        this.model.arrayCanvas.length = 0;
        this.model.generateRandom();
        this.drawBackground();
        this.setPixel();
        this.countAliveOrDead();
    };
    
    countAliveOrDead() {
        this.model.alive = 0;
        this.model.dead = 0;
        for (let i = 0; i < this.model.arrayCanvas.length; i++) {
            for (let j = 0; j < this.model.arrayCanvas[i].length; j++) {
                if (this.model.arrayCanvas[i][j] == true) {
                    this.model.alive++
                } else {
                    this.model.dead++
                }
            }
        }
        
        this.view.count.innerHTML = `Cellule(s) vivante(s) : ${this.model.alive} | 
        Cellule(s) morte(s) : ${this.model.dead} `
    };

    
    startPause() {
        if (this.view.btnStatus == true) {
            this.interval =  setInterval(async () => {
                this.view.setTimer(this.view.cycleTime);
                this.propagePixel();
                this.drawBackground();
                this.setPixel();
                this.countAliveOrDead();
            }, this.view.cycleTime);
            this.view.btnStatus = false;
            this.view.btnStartPause();
        } else if (this.view.btnStatus == false) {
            clearInterval(this.interval);
            this.view.btnStatus = true;
            this.view.btnStartPause()
        }
    };
    
    majTime() {
        this.view.changeTime()
        this.startPause();
        this.startPause();
    };

    reset() {
        this.view.initialCycle = 0;
        this.view.initialTime = 0.00;
        this.view.timer.innerHTML = "";
        this.view.btnStatus = false;
        this.drawBackground();
        this.model.generateArrayEmpty();
        this.countAliveOrDead();
        this.view.btnStatus = false;
        this.startPause();
    };

    getCursorPosition(event) {
        const rect = this.view.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        return [10*Math.floor(x/this.model.cellSize), 
            10*Math.floor(y/this.model.cellSize)]
    };

    placePixel() {
        this.view.canvas.addEventListener('mousedown', (e) => {
            let position = this.getCursorPosition(e);
            if (position[0] != 0) {
                position[0] = position[0]/10;
            }
            if (position[1] != 0) {
                position[1] = position[1]/10;
            }
            let newClickArrayCanvas = [];
            for (let i = 0; i < this.model.arrayCanvas.length; i++) {
                newClickArrayCanvas.push([]);
                for (let j = 0; j <this.model.arrayCanvas[i].length; j++) {
                    if (i == position[0] && j == position[1]) {
                        if (this.model.arrayCanvas[i][j] == true) {
                            newClickArrayCanvas[i].push(false)
                        } else if(this.model.arrayCanvas[i][j] == false) {
                            newClickArrayCanvas[i].push(true)
                        }
                    } else {
                        newClickArrayCanvas[i].push(this.model.arrayCanvas[i][j])
                    }
                }
            }
            this.model.arrayCanvas = newClickArrayCanvas;
            this.view.btnStatus = false;
            this.startPause();
            this.drawBackground();
            this.setPixel(this.model.arrayCanvas);
            this.countAliveOrDead();
        });
    };

    loadPage() {
        this.drawBackground();
        this.model.generateArrayEmpty();
        this.countAliveOrDead();
        this.placePixel();
    }

    colorChange() {
        this.view.colorChange();
        this.drawBackground();
        this.setPixel();
    }
}

const app = new Controller(new Model(), new View());

app.loadPage();