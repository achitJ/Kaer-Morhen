// DOM
import { taskOperations } from './models/task_operations.js'
import { showAlert } from './utils/dialog.js'
import { Task } from './models/task.js'

window.addEventListener('load', init)

function init() {
  bindEvents()
  showCounts()
  focus('id')
}

function bindEvents() {
  document.querySelector('#delete').addEventListener('click', deleteTask)
  document.querySelector('#add').addEventListener('click', addTask)
  document.querySelector('#load').addEventListener('click', loadTask)
  document.querySelector('#save').addEventListener('click', saveTask)
  document.querySelector('#clearAll').addEventListener('click', clearFields)
  document.querySelector('#search').addEventListener('click', searchTasks)
  document.querySelector('#clearSearch').addEventListener('click', clearSearch)
}

const addTask = function () {
  //read the fields
  let id = document.querySelector('#id').value
  let name = document.querySelector('#name').value
  let description = document.querySelector('#description').value
  let date = document.querySelector('#date').value
  let url = document.querySelector('#url').value

  const task = taskOperations.add(id, name, description, date, url)
  printTask(task)
  showCounts()
  clearAll()
  focus('id')
}

const deleteTask = function () {
  const tasks = taskOperations.deleteMarked()

  showCounts()
  printTasks(tasks)
}

function saveTask() {
  let tasks = taskOperations.tasks

  if (window.localStorage) {
    localStorage.tasks = JSON.stringify(tasks)
    showAlert('Record Saved SuccessFully...')
  } else {
    showAlert('Browser is Outdated not support local storage....')
  }
}

function loadTask() {
  if (localStorage) {
    let generictasks = JSON.parse(localStorage.tasks)
    let tasks = generictasks.map(
      (task) =>
        new Task(
          task.id,
          task.name,
          task.desc,
          task.date,
          task.url,
          task.isMarked
        )
    )

    taskOperations.tasks = tasks
    showCounts()
    printTasks(taskOperations.tasks)
  } else {
    showAlert('Browser is Outdated not support local storage....')
  }
}

const searchTasks = function () {
  const searchItem = document.querySelector('#searchedTask').value
  const tasks = taskOperations.searchTasks(searchItem)

  printTasks(tasks)
  showCounts()
  clearAll()
}

const clearSearch = () => {
  taskOperations.searchedTasks = []
  printTasks(taskOperations.tasks)
}

const clearFields = () => {
  clearAll()
  focus('id')
}

function showCounts() {
  document.querySelector('#total').innerText = taskOperations.tasks.length
  document.querySelector('#marked').innerText = taskOperations.countMarked()
  document.querySelector('#unmarked').innerText = taskOperations.countUnmarked()
}

function createIcon(iconType, fn, id) {
  const icon = document.createElement('i')

  icon.className = `fas fa-${iconType} me-3 hand`
  icon.addEventListener('click', fn)
  icon.setAttribute('task-id', id)

  return icon
}

function toggleDelete() {
  const icon = this
  const tr = icon.parentNode.parentNode
  const id = icon.getAttribute('task-id')

  tr.classList.toggle('alert-danger')
  taskOperations.mark(id)
  showCounts()
}

function edit() {
  console.log('edit')
}

function printTasks(tasks) {
  const tbody = document.querySelector('#tasks')

  tbody.innerHTML = ''
  tasks.forEach((task) => {
    printTask(task)
  })
}

function printTask(task) {
  const tbody = document.querySelector('#tasks')
  const tr = tbody.insertRow()
  const id = task.id

  let cellIndex = 0

  //Object traversal
  for (let key in task) {
    if (key === 'isMarked' || typeof task[key] === 'function') continue

    const value = task[key]
    const td = tr.insertCell(cellIndex)
    td.innerText = value
    cellIndex++
  }

  const td = tr.insertCell(cellIndex)
  td.appendChild(createIcon('edit', edit, id))
  td.appendChild(createIcon('trash', toggleDelete, id))
}

const clearAll = () => {
  document
    .querySelectorAll('.form-control')
    .forEach((textBox) => (textBox.value = ''))
}

const focus = (focusField) => document.querySelector('#' + focusField).focus()
