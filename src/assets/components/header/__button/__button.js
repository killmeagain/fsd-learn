$(document).ready(function () {
    $('.header__button').on('click',function () {
        $(this).siblings('.header__content').toggleClass('header__content_active');
    })
});