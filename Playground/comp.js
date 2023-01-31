const addFive = function (a) {
  return a + 5
}

const addTen = function (b) {
  return b + 10
}

const multiplyByTwo = function (c) {
  return c * 2
}

function composition(...funcs) {
  return function (...args) {
    return funcs.reduceRight((acc, func) => {
      return func(acc)
    }, args.pop())
  }
}

const ans = composition(multiplyByTwo, addTen, addFive)

console.log(ans(5))
