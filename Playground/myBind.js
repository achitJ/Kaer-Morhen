let obj = {
  name: 'Jack',
}

let myFunc = function (id, city) {
  console.log(`${this.name}, ${id}, ${city}`)
}

Function.prototype.myBind = function (obj, ...args) {
  let func = this

  return function (...newArgs) {
    func.apply(obj, [...args, ...newArgs])
  }
}

let newFunc = myFunc.myBind(obj, 'a_random_id')
newFunc('New York') // Jack, a_random_id, New York
