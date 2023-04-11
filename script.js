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
    function translateMainContent() {
        setTimeout(() => {
            header.classList.add('translated');
            banner.classList.add('translated');
        }, 1000)
    }
    translateMainContent()

    ymaps.ready(init);
    let myMap, 
    myPlacemark;
    function init(){ 
        myMap = new ymaps.Map("map", {
            center: [53.191681, 50.170271],
            zoom: 17,
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
})