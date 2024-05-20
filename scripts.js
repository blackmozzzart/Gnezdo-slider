document.addEventListener('DOMContentLoaded', function () {
    const sliderEl = document.querySelector('.slider');
    const gridEl = document.querySelector('.slider-grid');
    const leftArrowEl = document.querySelector('.arrow-left');
    const rightArrowEl = document.querySelector('.arrow-right');
    const infoEl = document.querySelector('.slide-info');
    const SLIDE_WIDTH = parseInt(window.getComputedStyle(sliderEl).getPropertyValue('--slide-width'), 10);

    function updateArrowsState() {
        if (gridEl.scrollLeft + gridEl.clientWidth >= gridEl.scrollWidth) {
            rightArrowEl.style.display = 'none';
        } else {
            rightArrowEl.style.display = 'block';
        }

        if (gridEl.scrollLeft <= 0) {
            leftArrowEl.style.display = 'none';
        } else {
            leftArrowEl.style.display = 'block';
        }
    }

    leftArrowEl.addEventListener('click', function () {
        gridEl.scrollBy({ left: SLIDE_WIDTH * -1, behavior: 'smooth' });
    });

    rightArrowEl.addEventListener('click', function () {
        gridEl.scrollBy({ left: SLIDE_WIDTH, behavior: 'smooth' });
    });

    infoEl.addEventListener('click', function (event) {
        // чтобы по клику на info не переходить по ссылке слайда
        event.preventDefault();
    })

    gridEl.addEventListener('scroll', updateArrowsState);
});
