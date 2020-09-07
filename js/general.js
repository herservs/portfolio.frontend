'use strict';

import Navbar from '../js/navbar.js';

const nav = new Navbar();

document.addEventListener('scroll', () => {

    const winY = window.scrollY;
    const navY = nav.getHeight();

    if (winY > navY) {
        nav.darkNavbar();
    } else {
        nav.whiteNavbar();
    }
});


nav.navbarMenu.addEventListener('click', (event) => {

    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
        return;
    }

    scrollIntoView(link);
});







function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({
        behavior: 'smooth'
    });
};