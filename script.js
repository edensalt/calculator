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
        return divide(a, b)
    } else return "ERROR"
}

// Query selectors

const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.classList.contains('operator')) {
            a = parseInt(b);
            b = 0;
            currentOperator = button.id;
            console.log(button.classList);
            console.log(currentOperator);
            // clear screen
            while (screen.firstChild) {
                screen.removeChild(screen.firstChild);
            };
        } else if (e.target.classList.contains('number')) {
            const screenContent = document.createElement('div');
                screenContent.classList.add('screen-content');
                screenContent.textContent = button.textContent;
                screen.appendChild(screenContent);
                //Add number to variable
                b += button.textContent;
                console.log(b);
        } else if (e.target.id === 'equals') {
            b = parseInt(b);
            while (screen.firstChild) {
                screen.removeChild(screen.firstChild);
            };
            total = (operate(currentOperator, a, b));
            console.log(total);
            const screenContent = document.createElement('div');
                screenContent.classList.add('screen-content');
                screenContent.textContent = total;
                screen.appendChild(screenContent);
            b = total;
        }
        // if equals, use the defined operator to run the function
    });
});