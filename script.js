const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            display.value = '';
        } else if (value === '⌫') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (value === '=') {
            try {
                display.value = eval(currentInput);
                currentInput = display.value;
            } catch (e) {
                display.value = 'Error';
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === 'Escape') {
        currentInput = '';
        display.value = '';
    } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    } else if (key === 'Enter') {
        try {
            display.value = eval(currentInput);
            currentInput = display.value;
        } catch (e) {
            display.value = 'Error';
            currentInput = '';
        }
    } else if (/^[0-9+\-*/.()]+$/.test(key)) {
        currentInput += key;
        display.value = currentInput;
    }
});

