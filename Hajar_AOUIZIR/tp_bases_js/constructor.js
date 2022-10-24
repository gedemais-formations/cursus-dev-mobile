/*Creer une fonction constructeur Cylinder(rayon, hauteur), qui stocke ses paramètres dans des propriétés rayon et hauteur, 
et qui contient une méthode get_volume(), qui renverra le volume du cylindre (rayon, hauteur, et volume doivent etre représentés
     en mètres sous forme de nombres flottants)*/

function Cylinder(rayon, hauteur, pi) {
        this.rayon = rayon;
        this.hauteur = hauteur;
        this.pi = 3.14;
        this.pi = pi;
        
        this.display_volume = function () //création de la méthode
        {
        

            ;
        //     if (auteur)
        //         console.log(this.auteur);
        // }
    }
}

let c = new Cylinder(10, 10, 3.15);