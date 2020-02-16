import CheckboxList from './CheckboxList';

const checkboxList = document.querySelectorAll('.js-expandable-checkbox-list');

checkboxList.forEach(element => {
    new CheckboxList(element);
});
