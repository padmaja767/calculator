const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('.buttons input');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (button.value === 'AC') {
            display.value = '';
        } else if (button.value === 'C') {
            // Call the clearLastDigit function when "C" is clicked
            clearLastDigit();
        } else {
            display.value += button.value;
        }
    });
});

function clearLastDigit() {
    let currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}
