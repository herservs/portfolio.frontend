export default class Home {

    constructor() {
        this.homeContect = document.querySelector('.home__contect');
        this.homeContainer = document.querySelector('.home__container');
        this.homeHeight = this.homeContainer.getBoundingClientRect().height;
    }

    getHeight() {
        return this.homeHeight;
    }

}