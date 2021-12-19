function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return +num1 - +num2;
}

function multiply(num1, num2) {
    return +num1 * +num2;
}

function divide(num1, num2) {
    return +num1 / +num2;
}

function operate() {
    num2 = input.value;
    if(operator === '+') {
        input.value = add(num1, num2);
        result = input.value;
    }
    if(operator === '-') {
        input.value = subtract(num1, num2);
        result = input.value;
    }
    if(operator === '*'|| operator === 'x') {
        input.value = multiply(num1, num2);
        result = input.value;
    }
    if(operator === '/'|| operator === '÷') {
        input.value = divide(num1, num2);
        result = input.value;
    }
}

function clear() {
    input.value = '';
}

function inputNum() {
    if(num1 !== '') {
        clear();
    }
    const number = this.textContent;
    input.value += number;
}

function inputOperator() {
    if(num1 !== '' && num2 !== '' && operator !== '') { //if user didn't press = each time.
        console.log('hello');
        operate();
        num1 = result;
        input.value = result;
        return;
    }
    operator = this.textContent;
    num1 = input.value;
}

let num1 = '';
let num2 = '';
let operator = '';
let result = '';
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