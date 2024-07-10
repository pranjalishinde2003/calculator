let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function appendNumber(number) {
    display.innerText += number;
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}