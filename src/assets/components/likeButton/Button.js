class Button {
    constructor(element) {
        this.element = element;
        this._addEventListeners(this.element);
    }

    _addEventListeners(element) {
        const button = element;
        button.addEventListener('click', this._handlerButton);
    }

    _handlerButton() {
        const button = this;
        const text = button.querySelector('.js-like-button__text');
        const svg = button.querySelector('.js-like-button__image');
        let likes = Number(text.textContent);

        if (button.classList.contains('like-button_click')) {
            likes = likes - 1;
        } else {
            likes = likes + 1;
        }

        button.classList.toggle('like-button_click');
        text.classList.toggle('like-button__text_click');
        svg.classList.toggle('like-button__image_click');

        text.textContent = likes;
    }
}

export default Button;