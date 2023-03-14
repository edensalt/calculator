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

//Button functionality - use map??

const numberBtn = document.querySelectorAll('.number');

const numberArray = Array.from(numberBtn);

numberArray.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        console.log(parseInt(numberBtn.textContent));
    });
});