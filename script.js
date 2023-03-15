let a = 0;
let b = 0;
let currentOperator

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
// const addBtn = document.querySelector('#add');
// const subtractBtn = document.querySelector('#subtract');
// const multiplyBtn = document.querySelector('#multiply');
// const divideBtn = document.querySelector('#divide');



// For 'a', add numbers to screen and the variable

// NEED TO NEST THIS IN ANOTHER FUNCTION SO WHEN B IS STARTED, A ISN'T IMPACTED || IMMEDIATELY DEFINE A AS A DIFF THING WITH NUM (i.e. this is stringA not a)

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
        }
        // if equals, use the defined operator to run the function
    });
});