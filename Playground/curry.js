function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b)
    }

    return a
  }
}

const ans = sum(1)(2)(3)()

console.log({ ans })
