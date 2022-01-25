import { calculate } from "./model.js";

window.addEventListener('load', bindEvents);

const valid = function(input) {

    if(input == '') {

        return false;
    }

    let stack = [];

    for(let index = 0; index < input.length; index++) {

        if(input[index] === '(') {

            stack.push(input[index]);
        }

        else if(input[index] === ')') {

            stack.pop();
        }
    }

    if(stack.length === 0) return true;
    else return false;
}

const compute = function() {

    const inputDiv = document.querySelector('input');
    const input = inputDiv.value;

    inputDiv.value = '';

    if(!valid(input)) {

        return alert("Please enter a valid expression");
    }

    const calculatedAns = calculate(input);

    if(isNaN(calculatedAns)) {

        return alert("Please enter a valid expression");
    }

    const output = document.querySelector('#output > span');

    output.innerText = calculatedAns;
}

const input = function(event) {

    const inputDiv = document.querySelector('input');
    const key = event.target.innerText;

    const isOperator = function(key) {

        return key === '+' || key === '-' || key === '*' || key === '/';
    } 

    if(key === 'Back') {

        inputDiv.value = inputDiv.value.substring(0, inputDiv.value.length - 1);
    }

    else {

        const input = inputDiv.value;

        if(isOperator(key) && input[input.length - 1] === key) {

            return;
        }

        inputDiv.value += key;
    }
}

function bindEvents() {

    document.querySelector('#calculate').addEventListener('click', compute);
    document.querySelector('#virtualKey').addEventListener('click', input);
}