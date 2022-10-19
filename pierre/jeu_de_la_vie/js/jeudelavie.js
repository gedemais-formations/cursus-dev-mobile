// jeudelavie.js

function JeuDeLaVie(config, id_canvas, filling_rate) {
  // Fonction constructeur
  // Définitions de propriété/attibuts
  this.config = config; // Sauvegarde la configuration
  this.array = []; // Tableau du jeu de la vie ( contient des tableaux de booleens )
  this.filling_rate = filling_rate; // Hypothèse d'etre en vie : 0= tous morts 100= tous vivants

  this.canvas = document.getElementById(id_canvas); // Chercher le canvas dans le DOM
  this.board_canvas = this.canvas.getContext("2d");
  this.px_width = config.cell_size * config.width; // Calculer la largeur du canvas
  this.px_height = config.cell_size * config.height; // Calculer la hauteur du canvas

  // Vérification dans la console
  console.info(
    "idcanvas=" + id_canvas,
    ", largeur=" + this.px_width + " pixels",
    ", hauteur=" + this.px_height + " pixels"
  );
  //
  // Ajout des méthodes
  this.draw_cell = function (col, line, color) {
    let x = col * this.config.cell_size;
    let y = line * this.config.cell_size;
    this.board_canvas.strokeStyle = color;
    if (true) {
      this.board_canvas.strokeRect(
        x,
        y,
        this.config.cell_size,
        this.config.cell_size
      );
    }
  };
  /*
   * Affichage d'une grille sur le fond du canvas HTML
   */
  this.draw_background = function (dead_color, alive_color) {
    this.board_canvas.width = this.px_width;
    this.board_canvas.height = this.px_height;
    //
    console.info(this.board_canvas.width, this.board_canvas.height);
    //
    this.board_canvas.fillStyle = dead_color; // Changer la couleur de remplissage du fond d'écran
    this.board_canvas.fillRect(0, 0, this.px_width, this.px_height); // Dessiner un rectangle dans la couleur de fonc
    //
    if (false) {
      this.board_canvas.strokeStyle = alive_color; // Changer la couleur de remplissage du fond d'écran
      this.board_canvas.moveTo(0, 0);
      // this.board_canvas.lineTo(this.px_width, 200);
      this.board_canvas.lineTo(this.px_width, this.px_height);
      this.board_canvas.stroke(); // Valider l'affichage
    }
    /*
    this.draw_cell(0, 0, alive_color);
    this.draw_cell(1, 1, alive_color);
    this.draw_cell(2, 2, alive_color);
    this.draw_cell(3, 3, alive_color);
    this.draw_cell(4, 4, alive_color);
    this.draw_cell(5, 5, alive_color);
    this.draw_cell(6, 6, alive_color);
    */
    //
    array = this.generate_matrix(alive_color, true);
    if (this.array.length < 100) {
      console.log(array);
    } else {
      console.log("Tableau trop gros");
    }
  };

  this.generate_matrix = function (color, visible) {
    //
    let flipflop = true;
    let tab = [];
    for (let x = 0; x < this.config.width; x++) {
      tab.push([]);
      for (let y = 0; y < this.config.height; y++) {
        flipflop = this.getRandomInt(100) < this.filling_rate;
        if (visible && flipflop) {
          this.draw_cell(x, y, color);
        }
        //flipflop = !flipflop;
      }
    }
    return tab;
  };

  this.getRandomInt = function (max) {
    return Math.floor(Math.random() * max);
  };
}
//
