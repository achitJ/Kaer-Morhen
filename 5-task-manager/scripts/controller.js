// DOM
import taskOperations from './models/task_operations.js';

window.addEventListener('load', init);

function init() {

    bindEvents();
    showCounts();
}

function bindEvents() {

    document.querySelector('#add').addEventListener('click', addTask);
}

const addTask = function() {

    //read the fields
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let description = document.querySelector('#description').value;
    let date = document.querySelector('#date').value;
    let url = document.querySelector('#url').value;

    //Store in object and object goes in array
    const task = taskOperations.add(id, name, description, date, url);
    printTask(task);
    showCounts();
}

function showCounts() {

    document.querySelector("#total").innerText = taskOperations.tasks.length;
    document.querySelector("#marked").innerText = taskOperations.countMarked();
    document.querySelector("#unmarked").innerText = taskOperations.countUnmarked();
}

function createIcon(iconType, fn, id) {

    const icon = document.createElement('i');

    icon.className = `fas fa-${iconType} me-3 hand`;
    icon.addEventListener('click', fn);
    icon.setAttribute('task-id', id);

    return icon;
}

function toggleDelete() {

    const icon = this;
    const tr = icon.parentNode.parentNode;
    const id = icon.getAttribute('task-id');

    tr.classList.toggle('alert-danger');
    taskOperations.mark(id);
    console.log(taskOperations.tasks);
    showCounts();
}

function edit() {

    console.log('edit');
}

function printTask(task) {

    const tbody = document.querySelector('#tasks');
    const tr = tbody.insertRow();
    const id = task.id;

    let cellIndex = 0;

    //Object traversal
    for(let key in task) {    

        const value = task[key];
        const td = tr.insertCell(cellIndex);
        td.innerText = value;
        cellIndex++;
    }

    const td = tr.insertCell(cellIndex);
    td.appendChild(createIcon('edit', edit, id));
    td.appendChild(createIcon('trash', toggleDelete, id));
}