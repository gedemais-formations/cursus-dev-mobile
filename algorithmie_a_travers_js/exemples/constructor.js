function Library()
{
	this.books = []
	this.add_book = function (titre, auteur, style, nombreDePages, prix)
	{
		this.books.push(new Book(titre, auteur, style, nombreDePages, prix));
	}
}

function Book(titre, auteur, style, nombreDePages, prix) {
	this.titre = titre;
	this.auteur = auteur;
	this.style = style;
	this.nombreDePages = nombreDePages;
	this.prix = prix;
	this.display_title = function ()
	{
		console.log(this.titre);
	}
}

var lib = new Library();

lib.add_book("Vingt Mille Lieux Sous Les Mers", "Jules Verne", "Aventure", 672, 4.99);

console.log(lib.books);
//var books = []

//books.push(new Book(title))
