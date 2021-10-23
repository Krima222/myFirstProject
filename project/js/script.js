/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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

const advertisement = document.querySelectorAll('.promo__adv'),
      genre = document.querySelector('.promo__genre'),
      newBacground = document.querySelector('.promo__bg'),
      films = document.querySelectorAll('.promo__interactive-item'),
      newFilms = document.querySelector('button'),
      clickNewFilms = document.querySelector('.adding__input'),
      inputNewFilm = clickNewFilms.value;
     

advertisement[0].remove();

genre.textContent = "Драма";

newBacground.style.backgroundImage = 'url("img/bg.jpg")';

newFilms.onclick = function () {
    movieDB.movies.push(inputNewFilm);
};

movieDB.movies.sort();
movieDB.movies.forEach (function(item, i) {
    films[i].textContent = `${++i} ${ item}`
});




