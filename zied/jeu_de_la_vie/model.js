// model.js


/*  Variables
width : Largeur du board en nombre de cellules (model)
height : Hauteur du board en nombre de cellules (model)
filling_rate : Taux de remplissage du board en cellules vivantes au lancement (model)
array : Tableau de tableaux contenants les valeurs booleenes qui définissent chaque cellule 
        du board comme vivante ou morte (model)    */

       /* const width = 50; // longueur du cadre
        const height = 50; // hauteur du cadre
        const filling_rate = 20; // pourcentage de chances qu'une cellule apparaisse vivante.
        let array = []; // model data structure de tableau vide*/


        /*  
        Model() :
Propriétés :
    - array
    - new_array
    - width
    - height
    - filling_rate

Méthodes :
    - getRandomInt(max)
    - generate_matrix()
    - count_neighbours(x, y)
    - update_model() */

    function Model(width, height)
    {
        
        this.width = width;
        this.height = height;
        this.array = [];
        this.new_array = [];
        this.filling_rate = 20;
        this.getRandomInt = function(max)
        {
            return Math.floor(Math.random() * max);
        }
   
        this.generate_matrix = function()
        {
            for (let x = 0; x <this.width; x++) 
            {
                this.array.push([]);         // création d'un tableau vide dans array
                for (let y = 0; y < this.height; y++) 
                {
                     let r = this.getRandomInt(100);    // génere un nombre aléatoire entre 0 et 100
                             if (r < this.filling_rate)  // si le nombre aleatoire est inferieur o filling_rate
                                this.array[x].push(true); // push true ds array
                                else
                                    this.array[x].push(false); // on remplit les sous tableaux 
                }
            }
           console.table(this.array);             
        }
    
        this.count_neighbours = function(x, y)
        {


            let result = 0;

            for (let new_x = x - 1; new_x <= x + 1; new_x++)
            { 
              for (let new_y = y - 1; new_y <= y + 1; new_y++) 
                {
                    console.log(new_x, new_y);

                if (
                  new_x >= 0 &&
                  new_x < this.width - 1 &&
                  new_y >= 0 &&
                  new_y < this.height - 1 &&
                  (new_x != x || new_y != y)
                )
                  result += this.array[new_x][new_y] ? 1 : 0;
                }    
            } 
            return result;     
        }
    
        this.update_model = function()
        {
            this.new_array = [];
            let result;

             for (let x = 0; x < this.width; x++) 
             {
                this.new_array.push([]);
                    for (let y = 0; y < this.height; y++) 
                    {
                        let nombre = this.count_neighbours(x, y);

             if (nombre < 2 || nombre > 3) result = false;
                if (nombre === 3) result = true;
                     if (nombre === 2) result = this.array[x][y];
                         this.new_array[x].push(result);


                    }
                              
             } 

             this.array = this.new_array;               
         }
     }
 
        
    
    
    
    