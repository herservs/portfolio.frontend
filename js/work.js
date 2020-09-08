'use strict';

export default class Work {

    constructor() {
        this.workCategories = document.querySelector('.work__categories');
        this.workProjects = document.querySelectorAll('.project');
        this.workProjectsContainer = document.querySelector('.work__project');
    }

    getFilter(e) {
        const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
        return filter;
    }

    removeActiveBtn() {

        this.categoryBtnSelected = document.querySelector('.work__categories__btn.selected');
        this.categoryBtnSelected.classList.remove('selected');

    }
    addActiveBtn(e) {

        const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
        target.classList.add('selected');
    }

    changeProject(e) {

        const filter = this.getFilter(e);
        this.workProjectsContainer.classList.add('anim-out');
        setTimeout(() => {

            this.workProjects.forEach(project => {

                if (filter === '*' || filter === project.dataset.type) {
                    project.classList.remove('invisible');
                } else {
                    project.classList.add('invisible');
                }

            });

            this.workProjectsContainer.classList.remove('anim-out');
        }, 300);
    }
}