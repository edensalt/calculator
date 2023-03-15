let a = 'start';
let b = 0;
let prepareClear = false;
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
        
        // Clear button
        if (e.target.id === 'clear') {
            a = 'start';
            b = 0;
            while (screen.firstChild) {
                screen.removeChild(screen.firstChild);
            };
            let prepareClear = false;
      
        // Number button - if string is 12 characters, stop collecting
        } else if (e.target.classList.contains('number')) {
            if (prepareClear === true) {
                while (screen.firstChild) {
                    screen.removeChild(screen.firstChild);
                }
            }
            const screenContent = document.createElement('div');
            screenContent.classList.add('screen-content');
            screenContent.textContent = button.textContent;
            screen.appendChild(screenContent);
            b += button.textContent;
            prepareClear = false;

         // Operator button
        } else if (e.target.classList.contains('operator')) {
            // if an operator is selected for the first time
            if (typeof a === 'string') {
                a = parseFloat(b);
                b = 0;
                currentOperator = button.id;
                prepareClear = true;
            // if an operator has been previously selected
            } else {
                console.log('lets total');
                b = parseFloat(b);
                while (screen.firstChild) {
                    screen.removeChild(screen.firstChild);
                };
                if (b === 0 && currentOperator === 'divide') { // divide by 0 error
                    const screenContent = document.createElement('div');
                    screenContent.classList.add('screen-content');
                    screenContent.textContent = 'ERROR';
                    screen.appendChild(screenContent);
                    a = b;
                    b = 0;
                    currentOperator = button.id;
                    prepareClear = true;
                } else {
                    total = parseFloat(operate(currentOperator, a, b).toFixed(8));
                    const screenContent = document.createElement('div');
                    screenContent.classList.add('screen-content');
                    screenContent.textContent = total;
                    screen.appendChild(screenContent);
                    a = total;
                    b = 0;
                    currentOperator = button.id;
                    prepareClear = true;
                }
            }
        // Equals button
        } else if (e.target.id === 'equals' && typeof a !== 'string') {
            b = parseFloat(b);
            while (screen.firstChild) {
                screen.removeChild(screen.firstChild);
            };
            if (b === 0 && currentOperator === 'divide') { // divide by 0 error
                const screenContent = document.createElement('div');
                screenContent.classList.add('screen-content');
                screenContent.textContent = 'ERROR';
                screen.appendChild(screenContent);
                a = b;
                b = 0;
            } else {
                total = parseFloat(operate(currentOperator, a, b).toFixed(8));
                const screenContent = document.createElement('div');
                screenContent.classList.add('screen-content');
                screenContent.textContent = total;
                screen.appendChild(screenContent);
                a = total;
                b = 0;
            }
        }
    });
});