function calculator(initVal = 0) {
  let ans = parseFloat(initVal)

  try {
    if (isNaN(ans)) {
      throw new Error('Enter a number only')
    }

    this.add = function (val = 0) {
      ans += val

      return this
    }

    this.sub = function (val = 0) {
      ans -= val

      return this
    }

    this.mult = function (val = 0) {
      ans *= val

      return this
    }

    this.divide = function (val = 0) {
      ans /= val

      return this
    }

    this.val = () => ans

    return this
  } catch (error) {
    return console.error(error)
  }
}

console.log(calculator(10).add(15).sub(10).mult(4).divide(10).val())
