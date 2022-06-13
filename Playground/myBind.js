let obj = {
  name: 'Jack',
}

let myFunc = function (id, city) {
  console.log(`${this.name}, ${id}, ${city}`)
}

Function.prototype.myBind = function (obj, ...args) {
  // console.log(this)
  return (...newArgs) => {
    // console.log(this)
    this.apply(obj, [...args, ...newArgs])
  }
}

let newFunc = myFunc.myBind(obj, 'a_random_id')
newFunc('New York') // Jack, a_random_id, New York

//Without using Apply

/*

let obj = {
  name: 'Jack',
}

let myFunc = function (id, city) {
  console.log(`${this.name}, ${id}, ${city}`)
}

Function.prototype.myBind = function (obj, ...args) {
  // console.log(this)

  obj._obj = this;
  return (...newArgs) => {
    // console.log(this)
    // this.apply(obj, [...args, ...newArgs])
    return obj._obj(...args, ...newArgs);
  }
}

let newFunc = myFunc.myBind(obj, 'a_random_id')
newFunc('New York') // Jack, a_random_id, New York

*/