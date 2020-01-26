import "./__button/__button";
import "./__index/__index.js";

(function () {
        $('.dropdown').on('click', function (event) {
        let target = event.target;

        if (target && $(target).parent().hasClass('dropdown__input')) {
            $(this).find('.dropdown__list').toggleClass('dropdown__list_active');
            $(this).find('.input').toggleClass('input_hover_and_focus');
        }
    });

    $('.buttons').on('click', function () {

        if ($(this).parents().hasClass('dropdown__button-clear')) {
            $(this).parents('.dropdown').find('.dropdown__index').val('0');
            $(this).parents('.dropdown').find('.input').val('');
            $(this).parents('.dropdown').find('.dropdown__index').trigger('input');
        } else {
            $(this).parents('.dropdown').find('.dropdown__list').removeClass('dropdown__list_active');
        }
    });
}())
