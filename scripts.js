const firstNum = "";
const secondNum = "";
const operator = "";

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b; 
};

const operate = function () {
    if(operator === "add") {
        return add();
    } else if (operator === "subtract") {
        return subtract();
    } else if (operator === "multiply") {
        return multiply();
    } else if (operator === "divide") {
        return divide();
    }
}