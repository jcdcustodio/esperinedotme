// Navbar hamburger
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const navMenu = document.querySelector('#nav-menu');

function viewMenu() {
    navMenu.classList.toggle('view-menu');
}

menuOpen.addEventListener('click', viewMenu);
menuClose.addEventListener('click', viewMenu);
