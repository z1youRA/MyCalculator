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

function clear() {
    input.value = '';
}

function inputNum() {
    if(num1 !== '') { //clear the screen when input the second operand.
        clear();
    }
    const number = this.textContent;
    input.value += number;
    if(num1 !== '') {
        num1 += number;
    }
    else 
        num2 += number;
}

function inputOperator() {
    console.log(num1);
    console.log(num2);
    console.log(operator);
    if(num1 !== '' && num2 !== '' && operator !== '') { //if user didn't press = each time.
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
