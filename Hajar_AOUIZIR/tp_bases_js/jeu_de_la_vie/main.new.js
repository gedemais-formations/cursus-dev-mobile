

function Model(width,height,filling_rate)
{
    this.array = [];
    this.width = width;
    this.height = height;
    this.filling_rate = filling_rate;
    console.log(this);

    this.getRandomInt= function (max) 
        {
            return Math.floor(Math.random() * max);
        }
    
    this.generate_matrix = function()
    {
            for(let x = 0; x< width; x++)
        {
            this.array.push([]);
             for(let y = 0; y <height; y++)
              {
                this.array[x].push(getRandomInt(100)<filling_rate); 
               }
        }
    }
        


    this.count_neighbours = function(x,y)
        {
            let result = 0;
           
            if(x<width - 1 && y<height - 1 && array[x+1][y+1]==true)
                result++;
        
            if(x < width - 1 && array[x+1][y]==true)
                result++;
                        
            if(y<height - 1 && array[x][y+1]==true)
                result++;
                        
            if(x>0 && y>0 && array[x-1][y-1]==true)
                result++;
        
            if(x>0 && array[x-1][y]==true)
                result++;
                    
            if(x<width - 1 && y>0 && array[x+1][y-1]==true)
                result++;
        
            if(x>0 && y<height - 1 && array[x-1][y+1]==true)
                result++;
        
            if(y>0 && array[x][y-1]==true)
                result++;
        
        return result;
        }
        
    this.update= function()
        {
            let newArray = [];
            for(let x=0 ; x < width; x++)
            {
                newArray.push([]);
                for(let y=0 ; y < height ; y++)
                {
                    let neighbours = count_neighbours(x,y);
                    let cell;
                    if (neighbours < 2)
                        cell = false;
        
                    if (neighbours==2 && array[x][y]==true)0
                        cell=true;
        
                    if(neighbours==3)
                        cell=true;
        
                    if(neighbours>3)
                        cell=false;
        
                    newArray[x].push(cell);
                }
            }
            this.array = newArray;
        }
    }

let model = new Model(50, 50, 20);
console.log(model);
let view = new View("black", "white", model.width, model.height);

view.update_view(model);

function View(alive_color,dead_color,width,height)
{
this.alive_color = alive_color;
this.dead_color = dead_color;
this.cell_size = 8;
this.px_width = width * this.cell_size;
this.px_height = height * this.cell_size;
this.board_canvas = document.getElementById("board");
this.board = this.board_canvas.getContext("2d");

this.update_view = function(model)
{
    board.fillStyle = this.alive_color;
    for(let x = 0 ; x < model.width; x++)
    {
            for(let y = 0 ; y < model.height ; y++)
            {
                console.log(array);
                 if (model.array[x][y]==true)
                     board.fillRect(x*this.cell_size, y*this.cell_size, this.cell_size, this.cell_size);
            }
    }
}

this.draw_background = function()
{
        this.board_canvas.width = this.px_width; // largeur en px du canvas
        this.board_canvas.height = this.px_height;
        this.board.fillStyle = this.dead_color; //Definir la couleur de flush
        this.board.fillRect(0, 0, this.px_width, this.px_height); // flush le canvas
      
        this.board.strokeStyle = "black"; // Definir la couleur de la grille
      
        for (let x = 0;x < px_width;x += this.cell_size) // iterer sur le canvas de cellule en cellule
         {
            this.board.moveTo(x, 0); //poser le crayon à x y
            this.board.lineTo(x, this.px_height); //bouger le crayon jusqu'à x,y
        }
      
        for (let y = 0;y < this.px_height;y += this.cell_size) // iterer sur le canvas de cellule en cellule
      {
        this.board.moveTo(0, y); //poser le crayon à x y
        this.board.lineTo(this.px_width, y); //bouger le crayon jusqu'à x,y
        }
      
        this.board.stroke(); // Affiche le résultat à l'écran
}
}
model.generate_matrix();
      
setInterval(async function tick() 
{
    update_model();
    draw_background();
    update_view();
}, 100);

/* setInterval est la pour permettre au script de s'executer toutes les 1000ms
apres sa premiere execution (dans l'en-tete html par exemple).*/