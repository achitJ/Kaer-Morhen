import inputTypes from "../constants/inputTypes.js";
import bookDetails from "../constants/bookDetails.js";
const { NUMBER, BOOLEAN, DATE, TEXT } = inputTypes;

export function createInputs() {
    return  bookDetails.map((bookDetail) => createInputDiv(bookDetail));
}

export function getTableHeaders() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const ths = bookDetails.map((value) => {
        const th = document.createElement('th');
        th.innerText = value.key;

        return th;
    });

    thead.append(...ths);
    tbody.classList.add('tableBody');
    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

function createInputDiv({id, key, type}) {
    let input = null;

    switch(type) {
        case NUMBER:
        case TEXT:
        case DATE:
            input = document.createElement("input");
            input.type = type;
            break;
        default:
            input = document.createElement("input");
            input.type = type;
    }

    const inputWrapperDiv = document.createElement("div");
    inputWrapperDiv.classList.add("input-wrapper");
    
    if (input === null) {
        return inputWrapperDiv;
    }
    
    const textLabel = document.createElement("label");
    
    textLabel.innerText = key;
    textLabel.htmlFor = type + id;

    input.id = type + id;

    inputWrapperDiv.appendChild(textLabel);
    inputWrapperDiv.appendChild(input);

    return inputWrapperDiv;
}