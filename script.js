const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
buttons.forEach(button => { // Select all buttons with the class 'btn'
    button.addEventListener('click', () => {   // Add click event listener to each button
        const value = button.textContent;   // Get the text content of the button
        
        if (value === 'C') {  // If the button is 'C', clear the display
            currentInput = '';      // Reset current input
            display.value = '';     // Clear the display
        } else if (value === 'DEL') {   // If the button is 'DEL', remove the last character
            currentInput = currentInput.slice(0, -1); // Remove the last character from current input
            display.value = currentInput;   // Update the display with the current input
        } else if (value === '=') { // If the button is '=', evaluate the expression
            try {   // Try to evaluate the current input
                display.value = eval(currentInput); //
                currentInput = display.value;
            } catch (e) { // If there's an error in evaluation, catch it
                display.value = 'Error';
                currentInput = '';
            }
        } else { // For all other buttons, append the button's value to the current input
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

