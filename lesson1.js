let numberOfFilms = +prompt('Скільки фільмів ви подивилися?','');

let personalMovieDB ={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};
console.log(personalMovieDB);
let lastMovie = prompt('Один із останіх побаченних фільмів?','');
let point = +prompt('На скільки оціните?','');
let lastMovie1 = prompt('Один із останіх побаченних фільмів?','');
let point1 = +prompt('На скільки оціните?','');
// personalMovieDB.movies[0] = `${lastMovie} : ${point}`
personalMovieDB.movies[lastMovie] = point;
personalMovieDB.movies[lastMovie1] = point1;



