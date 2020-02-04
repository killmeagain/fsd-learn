import noUiSlider from 'nouislider';
require('nouislider/distribute/nouislider.min.css');
require('nouislider/distribute/nouislider.min.js');


let slider = document.querySelectorAll('.range-slider__slider'),
    input = document.querySelectorAll('.range-slider__input');


slider.forEach((element, i) => {
    noUiSlider.create(element, {
        start: [5000, 10000],
        connect: true,
        range: {
            'min': 0,
            'max': 17000
        }
    });

    let startPrice = parseInt(element.noUiSlider.get()[0]),
        endPrice = parseInt(element.noUiSlider.get()[1]);

    element.noUiSlider.on('update', function(values, handle) {
        if(handle) {
            endPrice = parseInt(values[handle]);
        } else {
            startPrice = parseInt(values[handle]);
        }

        input[i].value = `${startPrice}₽ - ${endPrice}₽`;
    });

    element.addEventListener('input', function () { 
        element.noUiSlider.set([startPrice, endPrice]);
    });
});