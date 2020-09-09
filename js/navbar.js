'use strict';

export default class Navbar {

    constructor() {
        this.navbar = document.querySelector('#navbar');
        this.navbarLogo = document.querySelector('.navbar__logo');
        this.navbarMenuItems = document.querySelectorAll('.navbar__menu__item');
        this.navbarMenu = document.querySelector('.navbar__menu');
        this.navHeight = this.navbar.getBoundingClientRect().height;
        this.navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
    }

    getHeight() {
        return this.navHeight;
    }

    darkNavbar() {
        this.navbar.classList.add('navbar--dark');
        this.navbarLogo.classList.add('navbarLogo--dark');
        this.navbarMenuItems.forEach((navbar__menu__item) => {
            navbar__menu__item.classList.add('navbar__menu__item--dark');
        });
    }

    whiteNavbar() {
        this.navbar.classList.remove('navbar--dark');
        this.navbarLogo.classList.remove('navbarLogo--dark');
        this.navbarMenuItems.forEach((navbar__menu__item) => {
            navbar__menu__item.classList.remove('navbar__menu__item--dark');
        });
    }

    toggleNavbarBtn() {
        this.navbarMenu.classList.toggle('open');
        this.navbar.classList.toggle('open');
    }

    closeNavbarMenu() {
        this.navbarMenu.classList.remove('open');
    }
    closeNavbar() {
        this.navbar.classList.remove('open');
    }


}