let navLink = document.querySelectorAll('.nav__link');

navLink[0].classList.add('nav__link--active', 'nav__link--active::after');

// Удаление active с ссылок меню. Перебор значений с помощью for of
function deleteActiveNav() {
    for (let item of navLink) {
        item.classList.remove('nav__link--active', 'nav__link--active::after');
    }
}

// Добавление active ссылке по клику. Перебор значений с помощью for of
for (let b of navLink) {
    b.onclick = () => {
        deleteActiveNav();
        b.classList.add('nav__link--active', 'nav__link--active::after');
    };
}


// ^^ ЛИБО ПРОСТЫМ ПЕРЕБОРОМ FOR

// function deleteActiveNav() {
//     for (let i = 0; i < navLink.length; i++) {
//         navLink[i].classList.remove('nav__link--active', 'nav__link--active::after');
//     }
// }

// for (let b = 0; b < navLink.length; b++) {
//     navLink[b].onclick = () => {
//         deleteActiveNav();
//         navLink[b].classList.add('nav__link--active', 'nav__link--active::after');
//     };
// }


// BURGER-MENU

let burger = document.querySelector('.burger');
let burgerLine = document.querySelector('.burger__line');

let windowBg = document.querySelector('.window-bg');
let windowBgMenu = document.querySelector('.window-bg-menu');

let menu = document.querySelector('.nav__list');

burger.onclick = () => {
    // Анимация бургера
    burgerLine.classList.toggle('burger__line--open');

    // Задний фон на весь экран и цветной фоновый блок меню
    windowBg.classList.toggle('window-bg--open');
    windowBgMenu.classList.toggle('window-bg-menu--open');

    // Меню
    menu.classList.toggle('nav__list--open');
}







