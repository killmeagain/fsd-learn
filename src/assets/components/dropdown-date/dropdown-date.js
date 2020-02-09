import {
    getEndDate,
    getStartDate
} from "../air-datepicker/air-datepicker";

(function () {
    $('.dropdown-date').on('click', function(event) {
        let target = event.target,
            picker = $(this).find('.air-datepicker__picker').datepicker().data('datepicker');

        if ($(target).hasClass('input')) {
            $(this).find('.dropdown-date__air-datepicker').toggleClass('dropdown-date__air-datepicker_active');
            $(this).find('.input').toggleClass('input_hover_and_focus');
        }

        if ($(target).parent().hasClass('air-datepicker__button-apply')) {
            let startDate = getStartDate(),
                endDate = getEndDate();

            $(this).find('.input').eq(0).val(startDate);
            $(this).find('.input').eq(1).val(endDate);

            $(this).find('.dropdown-date__air-datepicker').removeClass('dropdown-date__air-datepicker_active');
            $(this).find('.input').removeClass('input_hover_and_focus');
        }

        if($(target).parent().hasClass('air-datepicker__button-clear')) {
            $(this).find('.input').eq(0).val('ДД.ММ.ГГГГ');
            $(this).find('.input').eq(1).val('ДД.ММ.ГГГГ');

            picker.clear();
        }
    });
}())