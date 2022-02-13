// instanceOf(a,A) => true

class A {}

const a = new A()

class B {}

const b = new B()

function instanceOf(obj = null, Construct = null) {
  if (typeof Construct != 'function') {
    return false
  }

  if (typeof obj != 'object') {
    return false
  }

  if (Object.getPrototypeOf(obj) === null) return false

  if (Object.getPrototypeOf(obj) === Construct.prototype) return true

  return instanceOf(Object.getPrototypeOf(obj), Construct)
}

console.log(instanceOf(a, A)) // true
console.log(instanceOf(b, A)) // false
console.log(instanceOf(b, Object)) // true
