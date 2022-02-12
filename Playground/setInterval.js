function createSetIntervalPolyfillTask() {
  let intervalIdIncre = 0
  const intervalIdMap = {}

  function polyfilledSetInterval(callback, delay, ...args) {
    const uniqueId = intervalIdIncre++

    function repeatThisFn() {
      intervalIdMap[uniqueId] = setTimeout(() => {
        callback(...args)

        if (intervalIdMap[uniqueId]) {
          repeatThisFn()
        }
      }, delay)
    }

    repeatThisFn()

    return uniqueId
  }

  function polyfilledClearInterval(uniqueId) {
    clearTimeout(intervalIdMap[uniqueId])

    delete intervalIdMap[uniqueId]
  }

  return {
    polyfilledSetInterval,
    polyfilledClearInterval,
  }
}

const { polyfilledSetInterval, polyfilledClearInterval } =
  createSetIntervalPolyfillTask()

let counter = 0

const uniqueId = polyfilledSetInterval(() => {
  console.log('lol')

  counter++

  if (counter > 4) {
    polyfilledClearInterval(uniqueId)
  }
}, 1000)
