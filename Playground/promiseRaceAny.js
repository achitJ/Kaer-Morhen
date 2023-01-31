async function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((data) => resolve(data)).catch((error) => reject(error))
    })
  })
}

async function promiseAny(promises) {
  let errors = []
  let count = 0

  return new Promise((resolve, reject) => {
    promises.forEach((promise, idx) => {
      promise
        .then((data) => {
          resolve(data)
        })
        .catch((error) => {
          errors.push(error)
          count++

          if (count === promises.length) {
            reject(errors)
          }
        })
    })
  })
}

let promises = []

for (let idx = 1; idx <= 10; idx++) {
  promises.push(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (idx % 2 !== 0) resolve(idx)
        // resolve(idx)
        reject(idx)
      }, idx * 100)
    })
  )
}

promiseAny(promises)
  .then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.log(err)
  })
