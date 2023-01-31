// const obj = {
//   arr: [{ a: 'a' }, { b: 'b' }],
// }

// const {
//   arr: [{ a }, { b }],
// } = obj

// console.log(a, b)

// // const [a, b] = arr

// // console.log(a.b, b.a)

// // console.log({arr:[a, b]})

// let obj = {
//   name: 'Jack',
// }

// let myFunc = function (id, city) {
//   console.log(`${this.name}, ${id}, ${city}`)
// }

// Function.prototype.myBind = function (newThis, ...args) {
//   newThis._this = this

//   return (...innerArgs) => {
//     return newThis._this(...args, ...innerArgs)
//   }
// }

// console.log(obj)
// let newFunc = myFunc.bind(obj, 'a_random_id')

// console.log(obj)
// newFunc('New York') // Jack, a_random_id, New York

// const source = {
//   mode: 'production',
//   host: 8800,
//   config: {
//     bundle: {
//       splitChunks: true,
//       splitVendor: true,
//       entry: [],
//     },

//     testMode: {
//       env: 'production',
//       unit: true,
//       integration: true,
//     },
//     xyz: 123,
//   },
// }

// let override = {
//   mode: 'development',
//   config: {
//     bundle: {
//       splitChunks: false,
//       splitVendor: false,
//       entry: [1, 2, 3],
//     },

//     testMode: {
//       env: 'development',
//       integration: true,
//     },
//     devServer: {
//       port: 9000,
//     },
//   },
// }

// const output = {
//   mode: 'development',
//   host: 8800,
//   config: {
//     bundle: {
//       splitChunks: false,
//       splitVendor: false,
//       entry: [1, 2, 3],
//     },
//     testMode: {
//       env: 'development',
//       unit: true,
//       integration: true,
//     },
//     xyz: 123,
//     devServer: {
//       port: 9000,
//     },
//   },
// }

// //deepMerge
// const mergeObj = function (source, override) {
//   const obj = {}

//   const sourceKeys = Object.keys(source)
//   const overrideKeys = Object.keys(override)

//   for (
//     let idx1 = 0, idx2 = 0;
//     idx1 < sourceKeys.length || idx2 < overrideKeys.length;

//   ) {
//     const sourceKey = sourceKeys[idx1]
//     const overrideKey = overrideKeys[idx2]

//     if (`${sourceKey}` === `${overrideKey}`) {
//       console.log(sourceKey)
//       if (typeof override[overrideKey] === 'object') {
//         obj[overrideKey] = mergeObj(source[sourceKey], override[overrideKey])
//       } else {
//         obj[overrideKey] = override[overrideKey]
//       }

//       idx1++
//       idx2++
//     } else {
//       if (source[sourceKey]) {
//         obj[sourceKey] = source[sourceKey]
//         idx1++
//       } else if (override[overrideKey]) {
//         obj[overrideKey] = override[overrideKey]
//         idx2++
//       }
//     }
//   }

//   return obj
// }

// console.log(mergeObj(source, override))

// function LinkedList() {
//   function Node(value, next) {
//     this.value = value
//     this.next = next
//   }

//   const head =
// }

function deBouncer(fn, delay) {
  let timerId = 0

  return (...args) => {
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
