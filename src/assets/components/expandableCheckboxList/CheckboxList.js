class CheckboxList {
    constructor(checkboxList) {
        this.checkboxList = checkboxList;

        this._addEventListeners(this.checkboxList);
    }

    _addEventListeners(element) {
        element.addEventListener('click', this._handleCheckboxList);
    }

    _handleCheckboxList({ target }) {
        const checkboxList = this;

        if(target.className == 'label-title') {
            checkboxList.querySelector('.js-expandable-checkbox-list__list').classList.toggle('expandable-checkbox-list__list_active');
            checkboxList.querySelector('.js-expandable-checkbox-list__title').classList.toggle('expandable-checkbox-list__title_arrow-up');
        }
    }
}

export default CheckboxList;