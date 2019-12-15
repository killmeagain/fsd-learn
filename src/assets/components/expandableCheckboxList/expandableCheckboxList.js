$('.expandable-checkbox-list').on('click', function(event) {
    console.log(this);
    let target = event.target;
    console.log(target.className);
    if(target.className == 'label-title'){
        $(this).find('.expandable-checkbox-list__list').toggleClass('expandable-checkbox-list__list_active');
        $(this).find('.expandable-checkbox-list__title').toggleClass('expandable-checkbox-list__title_arrow-up');
    }
});