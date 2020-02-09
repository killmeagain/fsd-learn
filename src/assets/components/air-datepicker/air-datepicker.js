import "air-datepicker";
require("air-datepicker/dist/js/datepicker.min.js");



let startDate = '',
    endDate = '',
    rangeDate = '';

$('.air-datepicker__picker').datepicker({
    inline: true,
    range: true,
    multipleDatesSeparator: " - ",

    onSelect: function (fd, d, picker) {
        startDate = fd.split(" - ")[0];
        endDate = fd.split(" - ")[1];
        rangeDate = fd;
    }
});

function getStartDate() {
    return startDate;
}

function getEndDate() {
    return endDate;
}

function getRangeDate() {
    return rangeDate;
}

export {getEndDate, getStartDate, getRangeDate};
