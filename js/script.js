"use strict";

const numberOfFilms = +prompt("How many movies have you watched?", "Enter number"); //Answer user

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("One of the last watched films?", ""),
      b = prompt("How much would you rate it?", ""),
      c = prompt("One of the last watched films", ""),
      d = prompt("How much would you rate it?", "");
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);