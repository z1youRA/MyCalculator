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
        result = add(num1, num2);
    }
    if(operator === '-') {
        result = subtract(num1, num2);
    }
    if(operator === '*'|| operator === 'x') {
        result = multiply(num1, num2);
    }
    if(operator === '/'|| operator === '÷') {
        if(num2 == 0) {
            clear()
            input.value = 'ERROR';
            return;
        }
        result = divide(num1, num2);
    }
    input.value = Math.round(result * 100000) / 100000;

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

function back() {
    if(flag === 0 && num1.length > 0) {
        num1 = num1.slice(0, num1.length - 1);
        input.value = num1;
    }
    else if(flag === 1 && num2.length > 0){
        num2 = num2.slice(0, num2.length - 1);
        input.value = num2;
    }
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
const backspace = document.querySelector('.back');

backspace.addEventListener('click', back);
clr.addEventListener('click', clear);
calcu.addEventListener('click', operate);
nums.forEach(num => {
    num.addEventListener('click', inputNum)
})

operators.forEach(ope => {
    ope.addEventListener('click', inputOperator);
})

