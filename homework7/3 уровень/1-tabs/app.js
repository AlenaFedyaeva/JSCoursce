'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};


/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link,
 например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью 
    forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
// 1)
let div = document.querySelector("div.text");
let navs = document.querySelectorAll('a.nav-link');
// 2)
navs.forEach(nav => {
    nav.addEventListener("click", clickHandler);
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    alert("clicked", event, event.target.classList);

    console.dir(navs);
    navs.forEach(nav => {
        nav.classList.remove("active");
    });
    event.target.classList.toggle("active");
    console.dir(navs);
    // changeActiveClass(event);
    changeText(event);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    navs.forEach(nav => {
        nav.remove("active");
    });
    event.target.classList.toggle("active");
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    let text = event.target.textContent;
    switch (text) {
        case "Link 1":
            text = texts.text1;
            break;
        case "Link 2":
            text = texts.text2;
            break;
        case "Link 3":
            text = texts.text3;
            break;

        default:
            break;
    }
    div.textContent = text;
}