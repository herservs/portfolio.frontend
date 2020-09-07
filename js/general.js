'use strict';

import Navbar from '../js/navbar.js';
import Home from '../js/home.js';


// navbar
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



// home
const home = new Home();

home.homeContect.addEventListener('click', () => {
    scrollIntoView('#contect');
});

/*
        homeHeight = 800, 고정
        window.scrollY = 0 ~ inf, 가변
        opacity = 0 ~ 1, 투명도

        opacity : scrollY : homeHeight
        1   : 0     : 800 -> 800 / 800 -> scrollY = homeHeight - scrollY
        0.5 : 400   : 800 -> 400 / 800 -> 
        0   : 800   : 800 ->  0  / 800 -> 
    */

/*
    home.style.opacity = 1 - (window.scrollY) / (homeHeight);
*/

document.addEventListener('scroll', () => {
    const op = ((home.getHeight()) - (window.scrollY)) / (home.getHeight());
    home.homeContainer.style.opacity = op;
});













function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({
        behavior: 'smooth'
    });
};