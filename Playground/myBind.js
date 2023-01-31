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

// WITHOUT APPLY
// Function.prototype.myBind = function (newThis, ...args) {
//   newThis._this = this

//   return (...innerArgs) => {
//     return newThis._this(...args, ...innerArgs)
//   }
// }

let newFunc = myFunc.myBind(obj, 'a_random_id')
newFunc('New York') // Jack, a_random_id, New York
