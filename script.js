let a = 'start';
let b = '0';
let maxLength = 6;
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
        return divide(a, b)
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
        
        // CLEAR BUTTON
        if (e.target.id === 'clear') {
            a = 'start';
            b = '0';
            while (screen.firstChild) {
                screen.removeChild(screen.firstChild);
            };
            const screenContent = document.createElement('div');
            screenContent.classList.add('screen-content');
            screenContent.textContent = '0';
            screen.appendChild(screenContent);
            prepareClear = true;
      
        // DELETE BUTTON
        } if (e.target.id === 'delete') {
            // Idea: add functionality to delete one character from a total if it's a float
            bDelete = b.slice(0, -1);
            b = bDelete;
            screen.removeChild(screen.lastChild);

        // NUMBER BUTTON
        } else if (e.target.classList.contains('number')) {
            if (prepareClear === true) {
                while (screen.firstChild) {
                    screen.removeChild(screen.firstChild);
                }
            } if (b.length < 14) { // Don't add numbers beyond 14
                if (e.target.id === 'decimal' && !b.includes('.') || e.target.id !== 'decimal') {
                    const screenContent = document.createElement('div');
                    screenContent.classList.add('screen-content');
                    screenContent.textContent = button.textContent;
                    screen.appendChild(screenContent);
                    b += button.textContent;
                    prepareClear = false;
                }
            }

         // OPERATOR BUTTON
        } else if (e.target.classList.contains('operator')) {
            // if an operator is selected for the first time
            if (typeof a === 'string') {
                a = parseFloat(b);
                b = '0';
                currentOperator = button.id;
                prepareClear = true;
           
            // if an operator is selected after equals
            } else if (b === '0') {
                currentOperator = button.id;
                prepareClear = true;

            // if an operator has been previously selected
            } else {
                b = parseFloat(b);
                while (screen.firstChild) {
                    screen.removeChild(screen.firstChild);
                };
                if (b === 0 && currentOperator === 'divide') { // divide by 0 error
                    const screenContent = document.createElement('div');
                    screenContent.classList.add('screen-content');
                    screenContent.textContent = 'ERROR';
                    screen.appendChild(screenContent);
                    a = 'start';
                    b = '0';
                    currentOperator = button.id;
                    prepareClear = true;
                } else {
                    total = operate(currentOperator, a, b);
                    totalString = total.toString();
                    totalStringShortened = total.toPrecision(maxLength);
                    const screenContent = document.createElement('div');
                    screenContent.classList.add('screen-content');
                    if (totalString.length > maxLength) {
                        screenContent.textContent = totalStringShortened;
                    } else {
                        screenContent.textContent = total;
                    }
                    screen.appendChild(screenContent);
                    a = total;
                    b = '0';
                    currentOperator = button.id;
                    prepareClear = true;
                }
            }
            console.log(currentOperator);

        // EQUALS BUTTON
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
                a = 'start';
                b = '0';
                prepareClear = true;
            } else {
                total = operate(currentOperator, a, b);
                totalString = total.toString();
                totalStringShortened = total.toPrecision(maxLength);
                const screenContent = document.createElement('div');
                screenContent.classList.add('screen-content');
                if (totalString.length > maxLength) {
                    screenContent.textContent = totalStringShortened;
                } else {
                    screenContent.textContent = total;
                }
                screen.appendChild(screenContent);
                a = total;
                b = '0';
                prepareClear = true;
            }
        }
    });
});