const groupBy = function (arr, fn) {
  const result = {}

  arr.forEach((element, idx) => {
    const key = fn(element)

    if (!result[key]) {
      result[key] = []
      result[key].push(element)
    } else {
      result[key].push(element)
    }
  })

  return result
}

let users = [6.5, 4.12, 6.8, 5.4]
let groupedData = groupBy(users, Math.floor)

console.log(groupedData)
