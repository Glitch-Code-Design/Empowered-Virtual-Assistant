// HAMBURGER MENU & NO SCROLL WHILE MENU IS OPEN START //
const burger = document.querySelector('.drop-down-menu');
const wrapper = document.querySelector('.wrapper');

burger.addEventListener('click', () => {
    wrapper.classList.toggle('active')
});

burger.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll')
});
// HAMBURGER MENU & NO SCROLL WHILE MENU IS OPEN END //