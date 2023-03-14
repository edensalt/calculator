// Define math operations
const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

// Define operator
const operate = function (operator, a, b) {
    if (operator === "add") {
        return add(a, b)
    } else if (operator === "subtract") {
        return subtract(a, b)
    } else if (operator === "multiply") {
        return multiply(a, b)
    } else if (operator == "divide") {
        return divide(a, b)
    } else return "ERROR"
}

// Add clicked numbers to screen

const screen = document.querySelector('#screen');

// Listen to buttons

const numberBtn = document.querySelectorAll('.number');

const numberArray = Array.from(numberBtn);

numberArray.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        // Log button clicked
        console.log(parseInt(numberBtn.textContent));
        // Add number to variable

        // Add button to screen
        const screenContent = document.createElement('div');
        screenContent.classList.add('screen-content');
        screenContent.textContent = parseInt(numberBtn.textContent);
        screen.appendChild(screenContent);
    });
});

const operatorBtn = document.querySelectorAll('.operator');

const operatorArray = Array.from(operatorBtn);

operatorArray.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        console.log(operatorBtn.textContent);
    });
});