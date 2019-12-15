
$('document').ready( function() {
    $('.iqdropdown-selection').text('Сколько гостей');
    $('.iqdropdown').iqDropdown({
            // max total items
            maxItems: Infinity,
            // min total items
            minItems: 0,
            // text to show on the dropdown
            selectionText: '',
            // text to show for multiple items
            textPlural: '',
            selection: 'Сколько гостей',
            // buttons to increment/decrement
            controls: {
              position: 'right',
              displayCls: 'iqdropdown-item-display',
              controlsCls: 'iqdropdown-item-controls',
              counterCls: 'counter'
            },
            onChange: (id, count, totalItems) => {
                console.log(id, ' ', count, ' ', totalItems)
                if ((totalItems >= 5) || (totalItems === 0)) {
                  textPlural = 'гостей';
                } else if ((totalItems > 1) && (totalItems < 5)) {
                  textPlural = 'гостя';
                } else if (totalItems == 1) {
                  textPlural = 'гость';
                }
                document.querySelector('.iqdropdown-selection').innerHTML = totalItems + ' ' + textPlural;
            }
    });
    $('.iqdropdown-selection').text('Сколько гостей');
});