// CRUD

import { Task } from './task.js'

export const taskOperations = {
  tasks: [],

  searchedTasks: [],

  add(id, name, description, date) {
    const task = new Task(id, name, description, date)
    this.tasks.push(task)

    return task
  },

  deleteMarked() {
    this.tasks = this.tasks.filter((task) => !task.isMarked)

    return this.tasks
  },

  mark(id) {
    const task = this.tasks.find((task) => task.id === id)

    if (task) task.toggle()
  },

  countMarked() {
    const unmarkedArray = this.tasks.filter((task) => task.isMarked)

    return unmarkedArray.length
  },

  countUnmarked() {
    return this.tasks.length - this.countMarked()
  },

  searchTasks(searchItem) {
    this.searchedTasks = this.tasks.filter((task) =>
      task.name.toLowerCase().includes(searchItem.toLowerCase())
    )

    return this.searchedTasks
  },
}
