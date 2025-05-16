let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

let popup = document.getElementById('popup');
let closePopup = document.getElementById('closePopup');

let slideCounter = 0;
let maxSlides = 4; // Number of unique slides

nextDom.onclick = function () {
    showSlider('next');
};
prevDom.onclick = function () {
    showSlider('prev');
};

let timeRunning = 2000;
let timeAutoNext = 3000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    slideCounter++;
    if (slideCounter === maxSlides) {
        clearTimeout(runAutoRun);
        setTimeout(() => {
            popup.style.display = 'flex';
        }, timeRunning); // delay to wait for animation finish
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    if (slideCounter < maxSlides) {
        clearTimeout(runAutoRun);
        runAutoRun = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
    }
}

// CLOSE POPUP
closePopup.onclick = function () {
    popup.style.display = 'none';
};
