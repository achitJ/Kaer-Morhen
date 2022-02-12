//sum(1,2,3,4,5,6,7,8,9,10,...any number of parameters)

function sum(...args) {
  try {
    if (args.length === 0) {
      return 0
    }

    let sum = args.reduce((acc, curr) => {
      return acc + parseFloat(curr)
    }, 0)

    if (isNaN(sum)) {
      throw new Error('Invalid input')
    }

    return sum
  } catch (error) {
    console.error('Cannot Parse', error)
    return NaN
  }
}
