// Model() :
// Propriétés :
//     - array
//     - new_array
//     - width
//     - height
//     - filling_rate

// Méthodes :
//     - getRandomInt(max)
//     - generate_matrix()
//     - count_neighbours(x, y)
//     - update_model()

function Model( width = 50, height = 50, filling_rate = 20) {
    this.array = [];
    this.new_array ;
    this.width = width;
    this.height = height;
    this.filling_rate = filling_rate;

    this.getRandomInt = function(max){
        return Math.floor(Math.random() * max);
    }

    this.generate_matrix = function(){
        for(let x = 0; x < this.width; x++){
            this.array.push([]);
            for(let y=0; y < this.height; y++){
                this.array[x].push((this.getRandomInt(100) < this.filling_rate));// genere un nb aleatoire entre  0  et 100 , si  le nb est inf a filingrate  on push true sinon on push false
            }
        }
    }

    this.count_neighbours = function(x, y){
        let nb_voisin = 0;
        let result = 0;
    
        let x_min= (x == 0)? 0 : x-1;
        let x_max = (x == width-1)? width : x+2;
        let y_min= (y == 0)? 0 : y-1;
        let y_max = (y == height-1)? height : y+2;
    
    
        for(let i = x_min ; i < x_max; i++){
            for(let j = y_min ; j < y_max; j++){
                nb_voisin++;
    
                if (this.array[i][j]) {
                    result++;
                    // console.log("+ "+ n+" voisin(s) en vie");
                }
            }
            
        }
    
        if(this.array[x][y] && result>0){
            result--;
        }
    
        // console.log("je suis la cellule array["+x+"]["+y+"] et j'ai "+(nb_voisin-1) + " voisins au total dont " + result+" voisin(s) en vie");
        return result;
    }

    this.update_model = function(){
        this.new_array = [];
        for(let i = 0 ; i < this.width; i++){
            this.new_array.push([]);
            for(let j = 0 ; j < this.height; j++){
                if (this.array[i][j]) {
                    // console.log("cell vrai");
                    if(this.count_neighbours(i,j) > 3 || this.count_neighbours(i,j) < 2) {
                        // console.log( "je suis la cellule array["+i+"]["+j+"] je suis " + this.array[i][j] + " et j'ai "+count_neighbours(i,j)+" voisins en vie ----");
                        this.new_array[i].push(false);
                        //board.fillStyle = dead_color;
                        //board.fillRect(i*cell_size,j*cell_size,cell_size,cell_size);
        
                    }else{
                        // console.log( "je suis la cellule array["+i+"]["+j+"] je suis " + array[i][j] + " et j'ai "+count_neighbours(i,j)+" voisins en vie ");
    
                        this.new_array[i].push(this.array[i][j]);
                    }
    
                }else{
                    // console.log("cell fausse");
                    if(this.count_neighbours(i,j) == 3) {
                        // console.log( "je suis la cellule array["+i+"]["+j+"] je suis " + array[i][j] + " et j'ai "+count_neighbours(i,j)+" voisins en vie +++++");
    
                        this.new_array[i].push(true);
    
                    }else{
                        // console.log( "je suis la cellule array["+i+"]["+j+"] je suis " + array[i][j] + " et j'ai "+count_neighbours(i,j)+" voisins en vie");
    
                        this.new_array[i].push(this.array[i][j]);
                    }
                }
            }
        }
        this.array = this.new_array;   
    }
}