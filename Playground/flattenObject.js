const data = {
  a: 'jack',
  b: {
    c: 'sparrow',
    d: {
      e: 'hahaha',
    },
  },
}

const ans = {
  a: 'jack',
  'b.c': 'sparrow',
  'b.d.e': 'hahaha',
}

function unNestObject(obj) {
  const ans = {}

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      const temp = unNestObject(obj[key])

      for (let key2 in temp) {
        ans[key + '.' + key2] = temp[key2]
      }
    } else {
      ans[`${key}`] = obj[key]
    }
  }

  return ans
}

console.log(unNestObject(data))

console.log(JSON.parse(JSON.stringify(ans)))
