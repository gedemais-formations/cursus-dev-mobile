function Library()
{
	this.books = [];
	this.add_book = function (titre, auteur, style, nombreDePages, prix)
	{
		let book = new Book(titre, auteur, style, nombreDePages, prix)
		this.books.push(book);
	}
}

// Library
let obj = {
	books: [],
};

// Book
let Book = {
	titre: "Vingt Mille Lieues sous les mers",
	auteur: "Jules Verne",
	style: "Aventure",
	nombreDePages: 672,
	prix: 4.99,
};

function Book(titre, auteur, style, nombreDePages, prix) {
	this.titre = titre;
	this.auteur = auteur;
	this.style = style;
	this.nombreDePages = nombreDePages;
	this.prix = prix;
	this.display_title = function (auteur)
	{
		console.log(this.titre);
		if (auteur)
			console.log(this.auteur);
	}
}

var lib = new Library();

lib.add_book("Vingt Mille Lieux Sous Les Mers", "Jules Verne", "Aventure", 672, 4.99);

let book = new Book("Vingt Mille Lieux Sous Les Mers", "Jules Verne", "Aventure", 672, 4.99);

console.log(lib.books);
//var books = []

//books.push(new Book(title))
