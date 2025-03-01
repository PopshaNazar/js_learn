"use strict";

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('How many movies have you watched?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched?', '');

    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies you watched?', ''),
            b = prompt('How much you liked it?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        }
        else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('You watched few movies');
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You watched a lot of movies');
    }
    else if (personalMovieDB.count >= 30) {
        console.log('You are a cinephile');
    }
    else {
        console.log('Error');
    }

}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre ${i}`);
    }
}

writeYourGenres();