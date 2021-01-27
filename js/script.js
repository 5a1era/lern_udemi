"use strict";
let numberOfFilms; //Answer user


function start() {
    numberOfFilms = +prompt("How many movies have you watched?", "Enter number");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you watched?", "Enter number");
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


// for(let i = 0; i < 2; i++){
//     const a = prompt("One of the last watched films?", ""),
//             b = prompt("How much would you rate it?", "");

//             if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//                 personalMovieDB.movies[a] = b;
//             } else {
//                 alert('Enter a correctly data');
//                 i--;
//             }
// }




function rememberMyFilms() {
    for (let i = 1; i <= 2;) {
        const a = prompt(i + "." + "One of the last watched films?", "");
        if (a != null && a != '' && a.length < 50) {
            const b = prompt(i + "." + "How much would you rate it?", "");
            if (b != null && b != '' && b.length < 50) {
                personalMovieDB.movies[a] = b;
                i++;
            } else {
                alert('Enter a data again');
            }
        } else {
            alert('Enter a correctly data');
        }
    }
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('You have watched very few films.');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('You are a classic spectator');
    } else if (personalMovieDB.count >= 30) {
        alert('You are a movie fan');
    } else {
        alert('An error has ocurred');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);


function writeYourGenres(){
    for(let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = 
        prompt(`Your favorite genre by number ${i+1}`, 'Enter ganre');
    }
}

writeYourGenres();

// let num = numberOfFilms;

// while(num != 0) {
//     const a = prompt("One of the last watched films?", ""),
//           b = prompt("How much would you rate it?", "");
//           if ((a != 0 & a < 50) || (b != 0 & b < 50)) {
//               num--;
//               personalMovieDB.movies[a] = b;
//           }
// }


// for (let i = 0; i < numberOfFilms; i++){
//     const a = prompt("One of the last watched films?", ""),
//           b = prompt("How much would you rate it?", "");
//     personalMovieDB.movies[a] = b;
// }

// const a = prompt("One of the last watched films?", ""),
//       b = prompt("How much would you rate it?", ""),
//       c = prompt("One of the last watched films", ""),
//       d = prompt("How much would you rate it?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);