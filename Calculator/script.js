const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('.button');

let inputString = ''; // To store the current input
let memory = 0; // Memory storage for M+ and M- functionality

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        if (buttonText === 'AC') {
            inputString = '';
            inputBox.value = '0';
        } else if (buttonText === 'DEL') {
            inputString = inputString.slice(0, -1);
            inputBox.value = inputString || '0';
        } else if (buttonText === 'M+') {
            memory += parseFloat(inputBox.value) || 0;
        } else if (buttonText === 'M-') {
            memory -= parseFloat(inputBox.value) || 0;
        } else if (buttonText === 'MR') {
            inputBox.value = memory.toString();
            inputString = memory.toString();
        } else if (buttonText === 'MC') {
            memory = 0;
        } else if (buttonText === '%') {
            inputString = (parseFloat(inputString) / 100).toString();
            inputBox.value = inputString;
        } else if (buttonText === '+/-') {
            inputString = (-parseFloat(inputBox.value)).toString();
            inputBox.value = inputString;
        } else if (buttonText === '=') {
            try {
                inputString = eval(inputString).toString();
                inputBox.value = inputString;
            } catch {
                inputBox.value = 'Error';
                inputString = '';
            }
        } else {
            inputString += buttonText;
            inputBox.value = inputString;
        }
    });
});
