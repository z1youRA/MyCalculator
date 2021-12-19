function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if(operator === '+') {
        return add(num1, num2);
    }
    if(operator === '-') {
        return subtract(num1, num2);
    }
    if(operator === '*'|| operator === '×') {
        return multiply(num1, num2);
    }
    if(operator === '/'|| operator === '÷') {
        return divide(num1, num2);
    }
}

function inputNum() {
    num1 = this.textContent;
    input.value += num1;
}

let num1 = null;
let num2 = null;
const input = document.querySelector('input');
const nums = document.querySelectorAll('button.num'); //select all buttons representing numbers
const operators = document.querySelectorAll('button.ope')
nums.forEach(num => {
    num.addEventListener('click', inputNum)
})
