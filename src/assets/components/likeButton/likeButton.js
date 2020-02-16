import Button from './Button';

const likeButton = document.querySelectorAll('.like-button');

likeButton.forEach(element => new Button(element));