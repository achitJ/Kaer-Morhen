//this will be used for the frontend side of the app only

import { allowances } from './model.js';

window.addEventListener('load', bindEvents); //we are not using defer in this case

function compute() {

    let basicSalary = document.getElementById('basicSalary').value;

    if(basicSalary == '') {

        return alert('Please enter your basic salary');
    }

    basicSalary = parseInt(basicSalary);

    if(isNaN(basicSalary)) {

        return alert('Please enter a valid number');
    }

    allowances.basicSalary = basicSalary;

    const output = document.querySelector('#output')

    let outputHTML = "<h2>Allowances</h2>";

    for(const key in allowances) {

        if(typeof allowances[key] === 'function') {

            outputHTML += `<b>${key.toUpperCase()}:</b> Rs. ${allowances[key]().toLocaleString('hi-IN')}<br>`;
        }
    }

    output.innerHTML = outputHTML;
}

function bindEvents() {

    document.getElementById('compute').addEventListener('click', compute);
}