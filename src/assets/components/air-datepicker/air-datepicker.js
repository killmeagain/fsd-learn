import "air-datepicker";
require("air-datepicker/dist/js/datepicker.min.js");



let startDate = '',
    endDate = '',
    rangeDate = '';

$('.air-datepicker__picker').datepicker({
    inline: true,
    range: true,
    multipleDatesSeparator: ' - ',
    navTitles: {
        days: 'MM <i>yyyy</i>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
    },
    nextHtml: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="9" y1="-13" x2="9" y2="31" gradientUnits="userSpaceOnUse"><stop stop-color="#BC9CFF"/><stop offset="1" stop-color="#8BA4F9"/></linearGradient></defs></svg>',
    prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/></svg>',
    
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
