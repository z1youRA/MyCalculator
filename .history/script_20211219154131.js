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

function clear() { //wating to be applied to AC function.
    let num1 = '';
    let num2 = '';
    let operator = '';
    let result = '';
}

function inputNum() {
    if(num1 !== '') { //clear the screen when input the second operand.
        input.value = '';
    }
    const number = this.textContent;
    input.value += number;
    if(num1 === '') {
        num1 += number;
    }
    else 
        num2 += number;
}

function inputOperator() {
    if(num1 !== '' && num2 !== '' && operator !== '') { //if user didn't press the = button each time.
        operate();
    }
    if(result != '') { //for a second successive operation
        num1 = result;
        num2 = '';
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
const clr = document.querySelector('.clear');

clr.addEventListener('click', clear);
calcu.addEventListener('click', operate);
nums.forEach(num => {
    num.addEventListener('click', inputNum)
})

operators.forEach(ope => {
    ope.addEventListener('click', inputOperator);
})
