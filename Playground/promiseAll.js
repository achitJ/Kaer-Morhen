async function promiseAll(promises) {
  const results = []

  for (const promise of promises) {
    try {
      const result = await promise
      results.push(result)
    } catch (err) {
      return new Promise((resolve, reject) => {
        reject(err)
      })
    }
  }

  return new Promise((resolve, reject) => {
    resolve(results)
  })
}

async function promiseAllSettled(promises) {
  const results = []

  for (let idx = 0; idx < promises.length; idx++) {
    const promise = promises[idx]

    if (!(promise instanceof Promise)) {
      results.push({ status: 'fulfilled', value: promise })
      continue
    }

    try {
      const result = await promise
      results.push({ status: 'fulfilled', data: result })
    } catch (err) {
      results.push({ status: 'Rejected', data: err })
    }
  }

  return Promise.all(results)
}

let promises = []

for (let idx = 1; idx <= 10; idx++) {
  promises.push(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (idx % 2 !== 0) resolve(idx)
        // resolve(idx)
        reject(idx)
      }, 100)
    })
  )
}

// console.log(promises)

// Promise.allSettled(promises)
//   .then((results) => {
//     console.log(results)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

promiseAllSettled(promises)
  .then((results) => {
    console.log('lmao')
    console.log(results)
  })
  .catch((err) => {
    console.log(err)
  })
