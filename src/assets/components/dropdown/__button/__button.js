(function () {
    if (parseInt($('.dropdown__index').val()) === 0) {
        $(".js-dropdown__decrement-button").prop("disabled", true);
        $(".js-dropdown__decrement-button").addClass('dropdown__button_disabled');
    }

    $('.dropdown__button').on('click', function (event) {
        let target = event.target,
            index = parseInt($(this).siblings('.dropdown__index').val());

        if(target && $(target).hasClass('js-dropdown__decrement-button')) {
            index--;
        } else {
            index++;
        }

        $(this).siblings('.dropdown__index').val(index);
        $(this).siblings('.dropdown__index').trigger('input');
    });
}())
