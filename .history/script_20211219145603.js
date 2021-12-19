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

function test(){
    console.log(jfklsa);
}

function operate() {
    if(operator === '+') {
        return add(num1, num2);
    }
    if(operator === '-') {
        return subtract(num1, num2);
    }
    if(operator === '*'|| operator === 'x') {
        return multiply(num1, num2);
    }
    if(operator === '/'|| operator === '÷') {
        return divide(num1, num2);
    }
}

function inputNum() {
    const number = this.textContent;
    input.value += number;
}

function inputOperator() {
    operator = this.textContent;
    num1 = input.value;
    clear();
}

let num1 = '';
let num2 = '';
let operator = '';
const input = document.querySelector('input');
const nums = document.querySelectorAll('button.num'); //select all buttons representing numbers
const operators = document.querySelectorAll('button.ope');
const calcu = document.querySelector('.calcu');

calcu.addEventListener('click', operate);
nums.forEach(num => {
    num.addEventListener('click', inputNum)
})

operators.forEach(ope => {
    ope.addEventListener('click', inputOperator);
})
