export default (function dropdownInput() {
    let dropdownInput            = document.querySelectorAll('.dropdown__input'),
        dropdownMenu        = document.querySelectorAll('.dropdown__menu');

    dropdownInput[0].addEventListener('click', function () {
        dropdownMenu[0].classList.toggle('dropdown__menu_active-dropdown');

    });

    dropdownInput[0].addEventListener('keyup', function (event) {
        if(event.keyCode == 13){
            dropdownMenu[0].classList.toggle('dropdown__menu_active-dropdown');
        }
    });
})()