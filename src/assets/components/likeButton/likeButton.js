import Button from './Button';

const likeButton = document.querySelectorAll('.js-like-button');

likeButton.forEach(element => new Button(element));