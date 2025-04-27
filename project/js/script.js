/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const promo_addv = document.querySelectorAll(".promo__adv");
promo_addv.forEach(item => {
    item.remove();
});

const promo_genre = document.querySelector(".promo__genre");
// const promo_genre = document.getElementsByClassName(".promo__genre");
promo_genre.textContent = "Драма";

const promo_bg = document.querySelector(".promo__bg");
// promo_bg.remove();
promo_bg.style.backgroundImage = "url('img/bg.jpg')"
// promo_bg.style.background = "url('img/bg.jpg') center center / cover no-repeat";
// promo_bg.style.background = "blue"

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML +=
        `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `
});