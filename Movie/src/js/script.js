"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = prompt('How many movies have you watched?', '').trim();
        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('How many movies have you watched?', '').trim();
        }
        personalMovieDB.count = +personalMovieDB.count; // Convert to a number after validation
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of the last movies you watched?', '').trim(),
                b = prompt('How much you liked it?', '').trim();

            if (a && b && a.length < 50) { // Ensuring a valid input
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--; // Repeat iteration
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('You watched few movies');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You watched a lot of movies');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are a cinephile');
        } else {
            console.log('Error');
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre ${i}`).trim();

            if (!genre) { // Checking for empty input
                console.log('You entered incorrect data or left it blank.');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite genre ${i + 1} is ${item}`);
        });
    }
};

// "use strict";

// let str = "some"
// let strObj = new String(str);

// // console.log(typeof (str));
// // console.log(typeof (strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log("Hello")
//     }
// };
// const john = Object.create(soldier)
// // const john = {
// //     health: 100
// // };
// // john.__proto__ = soldier;
// // Object.setPrototypeOf(john, soldier)

// console.log(john.armor);
// john.sayHello();

