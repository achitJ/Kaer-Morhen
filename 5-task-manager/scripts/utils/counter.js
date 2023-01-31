// export const counter = (function () {
//   let count = 0
//   return () => ++count
// })()

export const counter = (function* autoGen() {
  let count = 0

  while (true) {
    count++
    yield count
  }
})()
