let numberOfFilms = +prompt('Скільки фільмів ви подивилися?','');

let personalMovieDB ={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat:false
};
console.log(personalMovieDB);
// for (let i = 0; i <2; i++) {
//     let lastMovie = prompt(`Один із останіх побаченних фільмів? ${i}`,'');
//     let point = +prompt('На скільки оціните?','');
//     if (lastMovie != null && point != null  && lastMovie != '' && point != '' && lastMovie.length<50){
// personalMovieDB.movies[lastMovie] = point;
//     }else{
//         i--
//     }
//
// }
i=0;
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
do {
    let lastMovie = prompt(`Один із останіх побаченних фільмів? ${i}`,'');
    let point = +prompt('На скільки оціните?','');
    if (lastMovie != null && point != null  && lastMovie !== '' && point !== '' && lastMovie.length<50){
        personalMovieDB.movies[lastMovie] = point;
    }else{
        i--
    }
    i++
} while (i<2);

if (personalMovieDB.count < 10){
    console.log('переглянуто мало фільмів')
}else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log('ви класичний глядач')
}else if (personalMovieDB.count > 30){
    console.log('кіноман')
}else {
    console.log('произошла ошибка')
}







