function Controller() {


    this.alive;
    this.dead;
    this.speed;

    this.update_speed = function(){
        this.speed = document.getElementsByTagName('input')[0].value;
        console.log(this.speed);
    }

    this.clear_board = function(){
        model.array.fill(false);
    }

    
    this.update_colors = function() {
        this.alive = document.getElementById('alive_color_form').value;
        this.dead = document.getElementById('dead_color_form').value;
    }
    
    
}