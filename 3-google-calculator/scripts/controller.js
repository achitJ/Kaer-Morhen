import { calculate } from "./model.js";

window.addEventListener('load', bindEvents);

let compute = function() {

    const inputDiv = document.querySelector('input');
    const input = inputDiv.value;

    inputDiv.value = '';

    if(input == '') {

        return alert("Please enter a valid expression");
    }

    const calculatedAns = calculate(input);
    const output = document.querySelector('#output > span');

    output.innerText = calculatedAns;
}

let input = function(event) {

    const inputDiv = document.querySelector('input');
    const key = event.target.innerText;

    if(key === 'Back') {

        inputDiv.value = inputDiv.value.substring(0, inputDiv.value.length - 1);
    }

    else {

        inputDiv.value += key;
    }
}

function bindEvents() {

    document.querySelector('#calculate').addEventListener('click', compute);
    document.querySelector('#virtualKey').addEventListener('click', input);
}