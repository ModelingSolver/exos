export {};

// ========================================================================
// Données de Départ
// ========================================================================

const Data = {
  books: [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
  ],
  movies: [
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
    },
    {
      title: "Parasite",
      director: "Bong Joon-ho",
      year: 2019,
    },
  ],
  albums: [
    {
      title: "Thriller",
      artist: "Michael Jackson",
      year: 1982,
    },
    {
      title: "Back in Black",
      artist: "AC/DC",
      year: 1980,
    },
  ],
};


interface Data {
    books: string | number ;
    movies: string | number ;
    albums: string | number ;
}




// 1) Typage de Constantes Simples:

const appName: string = "superapp"


const isOnline: boolean = true


const maxItems: number = 10



// 2) Interface des Objets:

interface Book {
    titre: string ;
    auteur: string ;
    nbrepages: number ;
}

interface Movie {
    titre: string ;
    realisateur: string ;
    datesortie: undefined ;
}

interface Album {
    titre: string ;
    auteur: string ;
    nbrchansons: number ;
}


// 3) interface de l'objet global:

interface Mediadata {
    books: Book [];
    movies: Movie [];
    albums: Album [];
}




// 4) Fonction d’Affichage Contextuel
// 1. Créez une fonction "displayItemDetails" qui accepte un objet de type
//    Book, Movie ou Album (vous pouvez utiliser un type union).
// 2. La fonction doit afficher un message personnalisé selon le type d'objet.
//    Exemples :
//     - "Livre : The Hobbit par J.R.R. Tolkien (1937)"
//     - "Film : Inception réalisé par Christopher Nolan (2010)"
//     - "Album : Thriller par Michael Jackson (1982)


function displayItemDetails(caca: Book | Movie | Album) {
   if ("nbrepages" in caca) {
     console.log(`${caca.titre}, est un livre ecrit par ${caca.auteur} et a ${caca.nbrepages}`) ;
   };
   if ("realisateur" in caca) {
     console.log(`${caca.titre}, est un film realisé par ${caca.realisateur} en ${caca.datesortie}`)
   };
   if ("nbrechansons" in caca) {
     console.log(`${caca.titre}, est un album composé par ${caca.auteur} et a  ${caca.nbrchansons}`)
   };
}

// Exercice 5 : Boucle sur Tous les Éléments
// ========================================================================
// Objectif : Utiliser la fonction "displayItemDetails" avec tous les tableaux.
//
// 1. Parcourez tous les tableaux de "data" avec des boucles forEach.
// 2. Appelez "displayItemDetails" pour chaque élément rencontré

Data.books.forEach(i => {
    displayItemDetails(i) }
);
Data.albums.forEach(i => {
    displayItemDetails(i) }
);
Data.movies.forEach(i => {
    displayItemDetails(i) }
);