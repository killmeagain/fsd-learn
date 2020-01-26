(function () {
    let valueBed = '',
        valueBedRoom = '',
        valueBathRoom = '',
        valueMainInput = '',
        valueGuest = '',
        valueBaby = '',
        indexChildren = 0,
        indexAdults = 0;

    $('.dropdown__index').on('input', function () {
        let titleItem = $(this).parent().siblings().find('.label-title').text(),
            index = parseInt($(this).val()),
            visuallyClearButton = false;

        if ((index) == 0) {
            $(this).siblings('.js-dropdown__decrement-button').prop("disabled", true);
            $(this).siblings('.js-dropdown__decrement-button').addClass('dropdown__button_disabled');
        }

        if (index > 0) {
            $(this).siblings('.js-dropdown__decrement-button').removeClass('dropdown__button_disabled');
            $(this).siblings('.js-dropdown__decrement-button').prop('disabled', false);
        }

        for (let i = 0; i < $(this).parents('.dropdown').find('.dropdown__index').length; i++) {
            if ($(this).parents('.dropdown').find('.dropdown__index').eq(i).val() !== '0') {
                visuallyClearButton = true;
            }
        }

        if (visuallyClearButton) {
            $(this).parents('.dropdown').find('.dropdown__button-clear').children('.buttons').removeClass('buttons_not-active');
        } else {
            $(this).parents('.dropdown').find('.dropdown__button-clear').children('.buttons').addClass('buttons_not-active');
        }

        if (titleItem === 'Дети') {
            indexChildren = parseInt($(this).val());
        } else if (titleItem === 'Взрослые') {
            indexAdults = parseInt($(this).val());
        }

        if (titleItem === "Спальни" || titleItem === "Кровати" || titleItem === "Ванные комнаты") {
            valueGuest = '';
            valueBaby = '';
        } else if (titleItem === "Взрослые" || titleItem === "Дети" || titleItem === "Младенцы") {
            valueBathRoom = '';
            valueBedRoom = '';
            valueBed = '';
        }

        if (titleItem === "Спальни") {
            valueBedRoom = `${index} ${words(titleItem, index)}`;
            if (index === 0) valueBedRoom = '';
        } else if (titleItem === "Кровати") {
            valueBed = `${index} ${words(titleItem, index)}`;
            if (index === 0) valueBed = '';
        } else if (titleItem === "Ванные комнаты") {
            valueBathRoom = `${index} ${words(titleItem, index)}`;
            if (index === 0) valueBathRoom = '';
        } else if (titleItem === "Взрослые") {
            valueGuest = `${indexChildren + index} ${words(titleItem, indexChildren + index)}`;
        } else if (titleItem === "Дети") {
            valueGuest = `${indexAdults + index} ${words(titleItem, indexAdults + index)}`;
        } else if (titleItem === "Младенцы") {
            valueBaby = `${index} ${words(titleItem, index)}`;
            if (index === 0) valueBaby = '';
        }

        if (valueBedRoom || valueBed || valueBathRoom) {
            valueMainInput = mainValueInput(valueBedRoom, valueBed, valueBathRoom);
        } else if (valueBaby === '') {
            valueMainInput = valueGuest;
        } else {
            valueMainInput = valueGuest + ', ' + valueBaby;
        }


        $(this).parents('.dropdown').find('.input').val(valueMainInput);

        valueMainInput = '';
    });

    function mainValueInput(valueBedRoom, valueBed, valueBathRoom) {
        if (valueBed === '' && valueBathRoom === '') {
            return valueBedRoom;
        } else if (valueBedRoom === '' && valueBathRoom === '') {
            return valueBed;
        } else if (valueBedRoom === '' && valueBed === '') {
            return valueBathRoom;
        } else if (valueBathRoom === '') {
            return valueBedRoom + ', ' + valueBed;
        } else if (valueBedRoom === '') {
            return valueBed + ', ' + valueBathRoom;
        } else if (valueBed === '') {
            return valueBedRoom + ', ' + valueBathRoom;
        } else {
            return valueBedRoom + ', ' + valueBed + ', ' + valueBathRoom;
        }
    }


    function words(word, index) {
        if (word === "Спальни") {
            if (index === 0 || (index > 4 && index < 21) || (index > 20 && ((index % 10) > 4 && (index % 10) <= 9)) || (index % 10) === 0) {
                return 'спален';
            } else if ((index > 1 && index <= 4) || (index > 20 && ((index % 10) > 1 && (index % 10) <= 4))) {
                return 'спальни';
            } else {
                return 'спальня';
            }
        } else if (word === "Кровати") {
            if (index === 0 || (index > 4 && index < 21) || (index > 20 && ((index % 10) > 4 && (index % 10) <= 9)) || (index % 10) === 0) {
                return 'кроватей';
            } else if ((index > 1 && index <= 4) || (index > 20 && ((index % 10) > 1 && (index % 10) <= 4))) {
                return 'кровати';
            } else {
                return 'кровать';
            }
        } else if (word === "Ванные комнаты") {
            if (index === 0 || (index > 4 && index < 21) || (index > 20 && ((index % 10) > 4 && (index % 10) <= 9)) || (index % 10) === 0) {
                return ('ванных комнат');
            } else if ((index > 1 && index <= 4) || (index > 20 && ((index % 10) > 1 && (index % 10) <= 4))) {
                return ('ванные комнаты');
            } else {
                return ('ванная комната');
            }
        } else if (word === "Взрослые" || word === "Дети") {
            if (index === 0 || (index > 4 && index < 21) || (index > 20 && ((index % 10) > 4 && (index % 10) <= 9)) || (index % 10) === 0) {
                return ('гостей');
            } else if ((index > 1 && index <= 4) || (index > 20 && ((index % 10) > 1 && (index % 10) <= 4))) {
                return ('гостя');
            } else {
                return ('гость');
            }
        } else if (word === "Младенцы") {
            if (index === 0 || (index > 4 && index < 21) || (index > 20 && ((index % 10) > 4 && (index % 10) <= 9)) || (index % 10) === 0) {
                return ('младенцев');
            } else if ((index > 1 && index <= 4) || (index > 20 && ((index % 10) > 1 && (index % 10) <= 4))) {
                return ('младенца');
            } else {
                return ('младенец');
            }
        }
    }
}());