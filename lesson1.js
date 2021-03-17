'use strict';
let numberOfFilms;
let countMovies = function () {
    numberOfFilms = +prompt('Скільки фільмів ви подивилися?','');

}
countMovies();
let personalMovieDB ={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
let listOffilms = function () {
    for (let i = 0; i <2; i++) {
        let lastMovie = prompt(`Один із останіх побаченних фільмів? ${i}`,'');
        let point = +prompt('На скільки оціните?','');
        if (lastMovie != null && point != null  && lastMovie !== '' && point !== '' && lastMovie.length<50){
            personalMovieDB.movies[lastMovie] = point;
        }else{
            i--
        }

    }
}
listOffilms();
// i=0;
// while (i<2){
//     let lastMovie = prompt(`Один із останіх побаченних фільмів? ${i}`,'');
//     let point = +prompt('На скільки оціните?','');
//     if (lastMovie != null && point != null  && lastMovie != '' && point != '' && lastMovie.length<50){
//         personalMovieDB.movies[lastMovie] = point;
//     }else{
//         i--
//     }
// i++
// }
// do {
//     let lastMovie = prompt(`Один із останіх побаченних фільмів? ${i}`,'');
//     let point = +prompt('На скільки оціните?','');
//     if (lastMovie != null && point != null  && lastMovie !== '' && point !== '' && lastMovie.length<50){
//         personalMovieDB.movies[lastMovie] = point;
//     }else{
//         i--
//     }
//     i++
// } while (i<2);
let checkCount = function () {
    if (personalMovieDB.count < 10){
        console.log('переглянуто мало фільмів')
    }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log('ви класичний глядач')
    }else if (personalMovieDB.count > 30){
        console.log('кіноман')
    }else {
        console.log('произошла ошибка')
    }
}
checkCount();

let showMyDB = function (){
    if (personalMovieDB.privat === false){
       return  console.log(personalMovieDB);
    }
}
showMyDB()

let writeYourGenres = function (){
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] =  prompt(`Ваш любимый жанр под номером ${i}`,'');
    }

    console.log(personalMovieDB);
}
writeYourGenres()



