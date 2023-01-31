document
  .querySelector('#debounce')
  .addEventListener('keyup', debounceFn(printIndex))

document
  .querySelector('#throttle')
  .addEventListener('keyup', throttleFn(printIndex))

let index = 0

function printIndex(e) {
  console.log(e)
  console.log(index++)
}

// What is Debouncing? Where used?
// And how to implement.

// API call
// Listener kamm call honge
// Performance Increase.
// API call, Advantages ?
// re rendering kamm ho gyii
// server load kamm hogya.
// user convenience. UX better hogya.
// load time kamm hogya ?
// Thread blockage => re rendering kamm ho gyii

function debounceFn(callingFn, delay = 1000) {
  const myThis = this
  let timerId = 0
  return function (...args) {
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      callingFn.apply(myThis, args)
    }, delay)
  }
}

//this above function will always have a bug that everytime
//we call it, it will clear the timer and set a new timer. So if someone performs
//the action fast enough, api will never be called. This is called starvation stage

function throttleFn(callingFn, delay = 1000) {
  const myThis = this
  let isWaiting = false

  return function (...args) {
    if (!isWaiting) {
      callingFn.apply(myThis, args)
      isWaiting = true

      setTimeout(() => {
        isWaiting = false
      }, delay)
    }
  }
}

//this above function uses throttling, in this there will never be starvation as
//it will wait for the delay to complete before calling the api and not clear the timeout.
