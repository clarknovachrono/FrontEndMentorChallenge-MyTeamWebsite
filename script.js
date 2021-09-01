let burger = document.querySelector('.burger');
let navBar = document.querySelector('.navbar');
let contactButton = document.querySelector('.contact-button');

let burgerLine1 = document.querySelector('.burger-line-1');
let burgerLine2 = document.querySelector('.burger-line-2');
let burgerLine3 = document.querySelector('.burger-line-3');

burger.addEventListener('click', () => {
    console.log('clicked');
    navBar.classList.toggle('active');
    contactButton.classList.toggle('active');

    burgerLine1.classList.toggle('toggle');
    burgerLine2.classList.toggle('toggle');
    burgerLine3.classList.toggle('toggle');
});

