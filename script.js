document.addEventListener('DOMContentLoaded', () => {
    const workStepsButtons = document.querySelectorAll('.workstep-button');
    const workStepsItems = document.querySelectorAll('.item');
    const workStepsImages = document.querySelectorAll('.image');

    function showItem(i) {
        setTimeout(() => workStepsItems[i].classList.add('step-active'), 500);
        setTimeout(() => workStepsImages[i].classList.add('image-active'), 900);
        workStepsButtons[i].classList.add('button-active');
    };
    function hideAll() {
        workStepsItems.forEach(item => item.classList.remove('step-active'));
        workStepsImages.forEach(item => item.classList.remove('image-active'));
        workStepsButtons.forEach(item => item.classList.remove('button-active'));
    };
    workStepsButtons.forEach((item, index) => {
        item.addEventListener('click', () => {
            hideAll();
            showItem(index);
        })
    });
    showItem(0);

    const header = document.querySelector('.header')
    const banner = document.querySelector('.banner')

    ymaps.ready(init);
    let myMap, 
    myPlacemark;
    function init(){ 
        myMap = new ymaps.Map("map", {
            center: [53.191681, 50.170271],
            zoom: 17
        });
        myPlacemark = new ymaps.Placemark([53.191681, 50.170271], {
            hintContent: 'Партизанская улица, 82А',
            balloonContent: 'улица Мира, 30',
        }, 
        {
            iconLayout: 'default#image',
            iconImageHref: './assets/point.png',
            iconImageSize: [70, 75],
            iconImageOffset: [0, 0]
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('RouteButton');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('typeSelector');
    };

    const modals = document.querySelectorAll('.modal-layout');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.cross');
    const body = document.querySelector('body');

    function showModal(i) {
        modals[i].classList.add('modal-active')
    }
    function closeModal(i) {
        modals[i].classList.remove('modal-active');
    }
    openModalButtons.forEach((item, index) => {
        item.addEventListener('click', () => {
            showModal(index);
            body.style.overflow = 'hidden'
        })
    });
    closeModalButtons.forEach((item, index) => {
        item.addEventListener('click', () => {
            closeModal(index);
            body.style.overflow = 'scroll'
        })
    });
    const container = document.querySelector('.container')
    const nav = document.querySelectorAll('.nav');
    const navHeight = banner.offsetHeight;
    if (document.documentElement.clientWidth < 992) {
        const menuButton = document.createElement('div');
        menuButton.classList.add('menu');
        menuButton.innerHTML = `
            <div class="line"><img src="./assets/newline.svg"></div>
            <div class="line"><img src="./assets/newline.svg"></div>
            <div class="line"><img src="./assets/newline.svg"></div>
        `;
        container.append(menuButton);

        menuButton.addEventListener('click', () => {
            const lines = document.querySelectorAll('.line');
            lines[0].classList.toggle('line1');
            lines[1].classList.toggle('line2');
            lines[2].classList.toggle('line3');
            nav[0].classList.toggle('nav-active');
            nav[0].style.height = `${navHeight}px`
            
        })
    }
    const stepBox = document.querySelector('.steps-box');
    const items = document.querySelectorAll('.item');
    const count = document.querySelector('.count');

    function calculateHeight () {
        const countHeight = count.offsetHeight;
        const itemHeight = items[0].offsetHeight;
        const boxHeight = countHeight + itemHeight;
        stepBox.style.height = `${boxHeight}px`
    }
    if (document.documentElement.clientWidth < 768) {
        calculateHeight();
    }
})