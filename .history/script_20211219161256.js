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
        if(num2 == 0) {
            clear()
            input.value = 'ERROR';
            return;
        }
        input.value = divide(num1, num2);
        result = input.value;
    }
}

function clear() { 
    input.value = '';
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    flag = 0;
    pointFlag = 0;
}

function inputNum() {
    if(flag === 1 && num2 === '') { //clear the screen when input the second operand.
        input.value = '';
    }
    const number = this.textContent;
    if(number === '.') {
        if(pointFlag === 1) {
            return;   
        }
        pointFlag = 1;
    }
    input.value += number;
    if(flag === 0) {
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
    flag = 1;
    pointFlag = 0;
}

let flag = 0; //if num1 exists flag == 1
let num1 = '';
let num2 = '';
let operator = '';
let result = '';
let pointFlag = 0;
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

