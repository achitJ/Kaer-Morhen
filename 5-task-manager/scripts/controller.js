// DOM

window.addEventListener('load', bindEvents);

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

}