import {createInputs, getTableHeaders} from "./assets/utils/helpers/bookDetails.js";
import bookDetails from "./assets/utils/constants/bookDetails.js";
const tableData = [];

window.addEventListener('load', () => {
    document.querySelector("#save").addEventListener('click', getAndStoreInputData);
    document.querySelector("#input-container").append(...createInputs());
    document.querySelector("#table-container").appendChild(getTableHeaders());
});

function getAndStoreInputData() {
    const inputArray = bookDetails;
    const tr = document.createElement('tr');

    for (let inputObject of inputArray) {
        const { id, type } = inputObject;
        const getInput = document.querySelector(`#${type}${id}`);
        const inputValue = getInput.value;
        const td = document.createElement('td');

        td.innerText = inputValue;
        tr.appendChild(td);
    }

    const tbody = document.querySelector('.tableBody');
    tbody.appendChild(tr);

    clearInputData();
}

function clearInputData() {
    const inputArray = bookDetails;

    for (let inputObject of inputArray) {
        const { id, type } = inputObject;
        const keyName = type + id;

        const getInput = document.querySelector(`#${keyName}`);

        getInput.value = '';
    }
}