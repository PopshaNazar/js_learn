const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the last movies you watched?', ''),
    b = prompt('How much you liked it?', ''),
    c = prompt('One of the last movies you watched?', ''),
    d = prompt('How much you liked it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);