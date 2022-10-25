class View {
    constructor() {
        this.canvas = document.getElementById("zone");
        this.ctx = this.canvas.getContext('2d');
        this.aliveColor = "black";
        this.deadColor = "white";
        this.newTime = document.getElementById("timerNumber");
        this.cycleTime = 100;
        this.initialCycle = 0;
        this.initialTime = 0.00;
        this.timer = document.getElementById("timer");
        this.btnDeadColor = document.getElementById("colorDead");
        this.btnAliveColor = document.getElementById("colorAlive");
        this.btnStatus = true;
        this.btn = document.getElementById("startPause");
        this.count = document.getElementById("countCellule"); 
        this.newTime = document.getElementById("timerNumber");
    };

    changeTime() {
        this.cycleTime = parseInt(this.newTime.value);
    };

    setTimer(timeAdded) {
    
        this.initialTime += timeAdded/1000;
        this.initialCycle++;
        this.timer.innerHTML = ` ${this.initialTime.toFixed(2)} sec | ${this.initialCycle} cycle`;
    };

    colorChange() {
        this.deadColor = this.btnDeadColor.value;
        this.aliveColor = this.btnAliveColor.value;

    };

    btnStartPause() {
        if (this.btnStatus == true) {
            this.btn.innerHTML = "Start";
        } else if (this.btnStatus == false) {
            this.btn.innerHTML= "Pause";
        }
    };
}