export function Task(id, name, description, date, url) {
  this.id = id
  this.name = name
  this.description = description
  this.date = date
  this.url = url
  this.isMarked = false
}

Task.prototype.toggle = function () {
  this.isMarked = !this.isMarked
}
