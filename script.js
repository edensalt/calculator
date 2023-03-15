let a = 0;
let b = 0;
let currentOperator;
let total;

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
        if (b === 0) {
            return "ERROR! Can't divide by 0!"
        } else return divide(a, b)
    } else return "ERROR"
}

// Query selectors
const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');

// Action for button clicks
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'clear') {
            a = 0;
            b = 0;
            while (screen.firstChild) {
                screen.removeChild(screen.firstChild);
            };
        } else if (e.target.classList.contains('operator')) {
            a = parseInt(b);
            b = 0;
            currentOperator = button.id;
            // clear screen
            while (screen.firstChild) {
                screen.removeChild(screen.firstChild);
            };
        } else if (e.target.classList.contains('number')) {
            const screenContent = document.createElement('div');
                screenContent.classList.add('screen-content');
                screenContent.textContent = button.textContent;
                screen.appendChild(screenContent);
                b += button.textContent;
        } else if (e.target.id === 'equals') {
            b = parseInt(b);
            while (screen.firstChild) {
                screen.removeChild(screen.firstChild);
            };
            total = (operate(currentOperator, a, b));
            const screenContent = document.createElement('div');
                screenContent.classList.add('screen-content');
                screenContent.textContent = total;
                screen.appendChild(screenContent);
            b = total;
            if (typeof total === 'string') {
                b = a
            };
        }
    });
});