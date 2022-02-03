// //sum(1,2,3,4,5,6,7,8,9,10,...any number of parameters)

// function sum(...args) {

//     try {

//         if (args.length === 0) {

//             return 0;
//         }

//         let sum = args.reduce((acc, curr) => {
            


//             return acc + parseFloat(curr);
//         }, 0);

//         if(isNaN(sum)) {

//             throw new Error('Invalid input');
//         }

//         return sum;

//     } catch(error) {

//         console.error("Cannot Parse", error);
//         return NaN;
//     }
// }

// function curry(fn) {

//     return function inCurry(...args) {
  
//     //   if(args.length >= fn.length) {
        
//     //     return fn(...args);
//     //   }
  
//     //   else {
        
//         return function(...args2) {
  
//           return inCurry(...args, ...args2);
//         }
//     //   }
//     }
    
// }

// const sumCurry = curry(sum);

// console.log(sumCurry(1)(2)());

// let x = 2;

// const lmao = function lmao(y = x, x) {
    
//     // x = 10;
//     console.log(x);
// }

// lmao()

//FLATEN OBJECT
// const data = {
//     a: 'jack',
//     b: {
//         c: 'sparrow',
//         d: {
//            e: 'hahaha'
//         }
//     }
// };

// const ans = {
//     'a': 'jack',
//     'b.c': 'sparrow',
//     'b.d.e': 'hahaha'
// };

// function unNestObject(obj) {

//     const ans = {};

//     for(let key in obj) {

//         if(typeof obj[key] === 'object') {

//             const temp = unNestObject(obj[key]);

//             for(let key2 in temp) {

//                 ans[key + '.' + key2] = temp[key2];
//             }
//         }

//         else {

//             ans[`${key}`] = obj[key];
//         }
//     }

//     return ans;
// }

// console.log(JSON.stringify(data));


// function calculator(initVal = 0) {

//     let ans = parseFloat(initVal);

//     try {    


//         if(isNaN(ans)) {

//             throw new Error('Enter a number only');
//         }

//         this.add = function(val = 0) {

//             ans += val;

//             return this;
//         }

//         this.sub = function(val = 0) {

//             ans -= val;

//             return this;
//         }

//         this.mult = function(val = 0) {

//             ans *= val;

//             return this;
//         }

//         this.divide = function(val = 0) {

//             ans /= val;

//             return this;
//         }

//         this.val = () => ans;

//         return this;
//     } 
    
//     catch(error) {

//         return console.error(error);
//     }
// }

// console.log(calculator(10).add(15).sub(10).mult(4).divide(10).val());

