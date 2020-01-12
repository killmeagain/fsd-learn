$(document).ready(function () {
    $('.like-button').on('click', function(event) {
        
        let text = $(this).find('.like-button__text').html(),
            enteredText;
        
        $(this).find('.like-button__image').toggleClass('like-button__image_click');
        $(this).toggleClass('like-button_click');
        $(this).find('.like-button__text').toggleClass('like-button__text_click');

        if ($(this).hasClass('like-button_click')) {
            enteredText = +text + 1;
            $(this).find('.like-button__text').html(enteredText);
        } else {
            enteredText = +text - 1;
            $(this).find('.like-button__text').html(enteredText);
        }
    })
})