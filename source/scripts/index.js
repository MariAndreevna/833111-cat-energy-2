/* в этот файл добавляет скрипты*/

/* Бургер-меню */
const navToggle = document.querySelector('.main-header__toggle');
const navList = document.querySelector('.main-header__nav-list');
const navigation = document.querySelector('.main-header__navigation');

navList.classList.remove('main-header__nav-list--no-js');
navToggle.classList.remove('main-header__toggle--no-js');
navigation.classList.remove('main-header__navigation--no-js');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('main-header__toggle--open');
  navList.classList.toggle('main-header__nav-list--open');
});
