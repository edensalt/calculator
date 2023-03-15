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
const buttons = document.querySelectorAll('button');
const numberBtn = document.querySelectorAll('.number');

// For 'a', add numbers to screen and the variable

// NEED TO NEST THIS IN ANOTHER FUNCTION SO WHEN B IS STARTED, A ISN'T IMPACTED || IMMEDIATELY DEFINE A AS A DIFF THING WITH NUM (i.e. this is stringA not a)

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (!e.target.classList.contains('number')) {
            a = parseInt(b);
            b = 0;
            console.log(button.classList);
        } else {
            const screenContent = document.createElement('div');
                screenContent.classList.add('screen-content');
                screenContent.textContent = button.textContent;
                screen.appendChild(screenContent);
                //Add number to variable
                b += button.textContent;
                console.log(b);
        }
    });
});

// If an operator is selected...

const operatorBtn = document.querySelectorAll('.operator');

operatorBtn.forEach(operator => {
    operator.addEventListener('click', () => {
        // console.log(operator.textContent);
    });
});
// Clear the screen