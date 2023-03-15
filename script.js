let a = 0;
let b = 0;

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

const screen = document.querySelector('#screen');
const numberBtn = document.querySelectorAll('.number');

// For 'a', add numbers to screen and the variable

numberBtn.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        // Log button clicked
        const userNum = numberBtn.textContent;
        console.log(userNum);
        // Add button to screen
        const screenContent = document.createElement('div');
        screenContent.classList.add('screen-content');
        screenContent.textContent = numberBtn.textContent;
        screen.appendChild(screenContent);
        //Add number to variable
        a += userNum;
        console.log(a);
    });
});

// If an operator is selected...



// Clear the screen

// Make 'a' a number

// Start collecting numbers for b

const operatorBtn = document.querySelectorAll('.operator');

const operatorArray = Array.from(operatorBtn);

operatorArray.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        console.log(operatorBtn.textContent);
    });
});