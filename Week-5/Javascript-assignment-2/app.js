const movies = [
    {
        title: "The Dark Knight",
        genre: "Action",
        year: 2008,
        imdbRating: 9.0,
        actors: ["Christian Bale", "Heath Ledger", "Michael Caine"]
    },
    {
        title: "Inception",
        genre: "Thriller",
        year: 2010,
        imdbRating: 8.8,
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
        title: "Shawshank Redemption",
        genre: "Drama",
        year: 1994,
        imdbRating: 9.3,
        actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
        title: "Pulp Fiction",
        genre: "Crime",
        year: 1994,
        imdbRating: 8.9,
        actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
    },
    {
        title: "The Godfather",
        genre: "Drama",
        year: 1972,
        imdbRating: 9.2,
        actors: ["Marlon Brando", "Al Pacino"]
    },
    {
        title: "The Matrix",
        genre: "Action",
        year: 1999,
        imdbRating: 8.7,
        actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        title: "Forrest Gump",
        genre: "Drama",
        year: 1994,
        imdbRating: 8.8,
        actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
        title: "The Silence of the Lambs",
        genre: "Thriller",
        year: 1991,
        imdbRating: 8.6,
        actors: ["Jodie Foster", "Anthony Hopkins"]
    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        year: 1994,
        imdbRating: 9.3,
        actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
        title: "The Departed",
        genre: "Crime",
        year: 2006,
        imdbRating: 8.5,
        actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
        title: "The Prestige",
        genre: "Mystery",
        year: 2006,
        imdbRating: 8.5,
        actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
    },
    {
        title: "The Hangover",
        genre: "Comedy",
        year: 2009,
        imdbRating: 7.7,
        actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
    },
    {
        title: "Die Hard",
        genre: "Action",
        year: 1988,
        imdbRating: 8.2,
        actors: ["Bruce Willis", "Alan Rickman"]
    },
    {
        title: "Fight Club",
        genre: "Drama",
        year: 1999,
        imdbRating: 8.8,
        actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
    },
    {
        title: "Gladiator",
        genre: "Action",
        year: 2000,
        imdbRating: 8.5,
        actors: ["Russell Crowe", "Joaquin Phoenix"]
    },
    {
        title: "The Social Network",
        genre: "Biography",
        year: 2010,
        imdbRating: 7.7,
        actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
    },
    {
        title: "The Shining",
        genre: "Horror",
        year: 1980,
        imdbRating: 8.4,
        actors: ["Jack Nicholson", "Shelley Duvall"]
    },
    {
        title: "The Departed",
        genre: "Crime",
        year: 2006,
        imdbRating: 8.5,
        actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
        title: "The Revenant",
        genre: "Adventure",
        year: 2015,
        imdbRating: 8.0,
        actors: ["Leonardo DiCaprio", "Tom Hardy"]
    },
    {
        title: "The Usual Suspects",
        genre: "Crime",
        year: 1995,
        imdbRating: 8.5,
        actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio Del Toro"]
    },
    {
        title: "Interstellar",
        genre: "Sci-Fi",
        year: 2014,
        imdbRating: 8.6,
        actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    }
];

let titles = movies.map(movie => movie.title)
console.log(titles)

let titleWithRatings = movies.map(movie => ({
    title: movie.title,
    imdbRating: movie.imdbRating
}))
console.log(titleWithRatings);

//   Filter the movies to create an array of thriller movies released after the year 2000.
let moviesFilter = movies.filter(movie => movie.year > 2000).filter(movie => movie.genre == 'Thriller')
console.log(moviesFilter)

//   Filter the movies to create an array of drama movies with IMDb ratings above 8.5.
let drama = movies.filter(movie => movie.genre == 'Drama' && movie.imdbRating > 8.5)
console.log(drama);


// Filter the movies to create an array of action movies starring Leonardo DiCaprio.
let actionWithDecaprio = movies.filter(movie => movie.genre == 'Action').filter(movie => movie.actors.includes('Leonardo DiCaprio'))
console.log(actionWithDecaprio);

// Chain operations to find all drama movies featuring Christian Bale.
let dramaFeaturingChristian = movies.filter(movie => movie.genre == 'Drama').filter(movie => movie.actors.includes('Christian Bale'));
console.log(dramaFeaturingChristian);

// Chain operations to find all drama movies featuring Tim Robbins.

let dramaWithTimRobbins = movies.filter(movie => movie.genre == 'Drama').filter(movie => movie.actors.includes('Tim Robbins'));
console.log(dramaWithTimRobbins)