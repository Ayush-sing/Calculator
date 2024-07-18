// 

document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'AC') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.value = '';
                return;
            }

            if (value === '=') {
                if (currentInput !== '' && previousInput !== '' && operator !== '') {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.value = currentInput;
                    previousInput = '';
                    operator = '';
                }
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    display.value = value;
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
                return;
            }
            if (value === 'DEL'){
                if (currentInput !== ''){
                    currentInput = currentInput / 10 | 0;
                    display.value = currentInput;
                }
                return;
            }

            currentInput += value;
            display.value = currentInput;
        });
    });

    function calculate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);

        switch (operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return (a / b).toString();
            default:
                return '';
        }
    }
});
