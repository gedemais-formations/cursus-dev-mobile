function Model(filling_rate, width, height, )
{
    this.filling_rate = filling_rate;
    this.width = width;
    this.height = height;
    this.filling_rate = 20;
    this.array=[];
    
    this.add_Random =function (max) {
        return Math.floor(Math.random() * max);
      }
      // //fonction pour générer le tableau qui contiendra toutes les coordonnées des cellules
      this.add_Matrix = function () {
          for (let x = 0; x < this.width; x++) {
            this.array.push([]); //pour générer un tableau vide
         
            for (let y = 0; y < this.height; y++) {
              this.array[x].push(getRandomInt(100) < filling_rate);
      
            }
          }
      }

      this.add_neighbours = function (x, y) {
        let result = 0;
        //  il s'agit ici de naviguer de cellule en cellule en utilsant "x+1" ou "x-1" sur l'axe horizontal et "y+1" et "y-1" sur l'axe vertical comme si on voulait se déplacer sur un échiquier.
      
        if (x > 0 && y > 0 && this.array[x - 1][y - 1] == true) {
          result++;
        }
        if (y > 0 && this.array[x][y - 1] == true) {
          result++;
        }
      
        if (y > 0 && x < this.width - 1 && this.array[x + 1][y - 1] == true) {
          //"x<width-1" pour régler le problème quand on arrive en bordure de canvas
          result++;
        }
      
        if (x > 0 && this.array[x - 1][y] == true) {
          result++;
        }
        if (y > 0 && x < this.width - 1 && this.array[x + 1][y] == true) {
          result++;
        }
        if (x > 0 && y > 0 && y < this.height - 1 && this.array[x - 1][y + 1] == true) {
          result++;
        }
        if (y > 0 && y < this.height - 1 && this.array[x][y + 1] == true) {
          result++;
        }
        if (
          x > 0 && y > 0 && y < this.height - 1 && x < width - 1 && this.array[x + 1][y + 1] == true) {
          result++;
        }
      
        return result;
      }

this.add_model = function (){
    let nb_neighbours;
    let newTab = [];
   
    for (let x = 0; x < this.width; x++) {
      newTab.push([])
      for (let y = 0; y < this.height; y++) {
        nb_neighbours = count_neighbours(x, y); //on stocke la fonction "count_neighbours(x, y)" dans une variable pour faciliter la saisie et la lecture du code
  
  
        if (nb_neighbours == 2) {
          newTab[x].push(this.array[x][y]);
          
        }
        if (nb_neighbours >3) {
          newTab[x].push(false);
         
        }
        if (nb_neighbours < 2) {
          newTab[x].push(false);
          
        }
       
        if (nb_neighbours == 3) {
  
            newTab[x].push(true);
        }
       
  
      }
    }
    this.array=newTab;
  }
}






   
