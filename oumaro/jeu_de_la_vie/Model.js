function Model(array, new_array, width, height, filling_rate) {
  this.array = array;
  this.new_array = new_array;
  this.width = width;
  this.height = height;
  this.filling_rate = filling_rate;

  this.getRandomInt = function (max) {
    //génere un nombre aléatoire entre 0 et max
    return Math.floor(Math.random() * max);
  };

  this.generate_matrix = function () {
    for (let x = 0; x < this.width; x++) {
      //créer les cases vide

      this.array.push([]);

      for (let y = 0; y < this.height; y++) {
        // donner une valeur à la case vide
        this.array[x].push(getRandomInt(100) < this.filling_rate); //si inferieur a filling_rate alors push TRUE sinon push FALSE
      }
    }
  };

  this.count_neighbours = function (x, y, x_vertical, y_horizontal) {
    let result = 0;

    for (let i = 0; i < 8; i++) {
      let nx = x + x_vertical[i];
      let ny = y + y_horizontal[i];

      if (
        nx >= 0 &&
        nx < this.array.length &&
        ny >= 0 &&
        ny < this.array.length &&
        array[nx][ny]
      ) {
        result++;
      }
    }
    return result;
  };

  this.update_model = function () {
    for (let a = 0; a < this.array.length; a++) {
      this.newArray.push([]);

      for (let i = 0; i < this.array[a].length; i++) {
        let resultat = count_neighbours(a, i);

        //inferieur a 2 elle meurt
        if (resultat < 2) {
          this.newArray[a].push(false);
        }

        //égal à 3 ,elle vit (elle nait)
        if (resultat == 3) {
          this.newArray[a].push(true);
        }

        //supérieur a 3 , elle meurt

        if (resultat > 3) {
          this.newArray[a].push(false);
        }

        // egal à 2, elle reste en vie
        if (resultat == 2) {
          this.newArray[a].push(array[a][i]);
        }
      }
    }

    this.array = this.newArray;
  };
}
