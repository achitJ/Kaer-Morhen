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

//123456789.456789 <- input
//123,456,789.456789 <- output

// function convertToLocaleString(num) {
    
//     const str = num.toString();
//     const dec = str.split('.');
    
//     return dec[0] + '.' + dec[1];
// }

// function copyObject(obj) {

//     const ans = {};

//     for(let key in obj) {

//         if(typeof obj[key] === 'object') {

//             const temp = copyObject(obj[key]);

//             ans[key] = temp;
//         }

//         else {

//             ans[`${key}`] = obj[key];
//         }
//     }

//     return ans;
// }

// const lmao2 = {a:123, b:{c:21, d:{e:{f:4}}}};

// const lmao = copyObject(lmao2);

// lmao2.b.d.e.f = 12;

// console.log(lmao.b.d.e.f);



const myJSON = {

    addBracket(currObj, isOpening = true) {

        if(Array.isArray(currObj)) {

            if(isOpening) return '[';
            else return ']';
        } 
        
        else {
    
            if(isOpening) return '{';
            else return '}';
        }
    },

    getString(currObj) {

        if(currObj === null) return 'null';
        if(currObj instanceof Date) return `"${currObj.toISOString()}"`;
        if(typeof currObj === 'object') return currObj;
        if(currObj === NaN) return 'null';
        if(typeof currObj === 'string') return `"${currObj}"`;
        if(typeof currObj === 'number') return currObj.toString();
        if(typeof currObj === 'boolean') return currObj.toString();
        if(typeof currObj === 'function' || currObj === undefined) return undefined;
    },

    stringify(obj = null, isCurrArray = false) {

        if(obj === null) return 'null';
        if(typeof obj === 'string') return `"${obj}"`;
        if(typeof obj === 'number') return obj.toString();
        if(typeof obj === 'boolean') return obj.toString();
        if(typeof obj === 'function' || obj === undefined) return undefined;
        
        let flag = false;
        let objString = '';
        
        objString += this.addBracket(obj);
        
        if(Array.isArray(obj)) isCurrArray = true;
        
        for (const key in obj) {
            
            if(flag) objString += `,`;
            else flag = true;

            const value = this.getString(obj[key]);

            console.log(value);

            if(value === undefined /*|| typeof value === 'function'*/) continue;
            
            if(!isCurrArray) objString += `"${key}":`;
            
            // if(typeof value === 'boolean' || typeof value === 'number') {

            //     objString += `${value}`;
            // }

            if (typeof value === 'object') {

                // if(value === null ) {

                //     objString += `null`;
                // }

                if(Array.isArray(value)) {

                    objString += this.stringify(value, true);
                }

                // else if(value instanceof Date) {

                //     objString += `"${value.toISOString()}"`;
                // }

                else {

                    objString += `${this.stringify(value)}`;
                }
            } 
            
            else {

                objString += value;
            }           
                      
        }

        objString += this.addBracket(obj, false);

        return objString;
    },

    JSONparse(str) {
        
        
    }
};

const testObj = {

    a: true,
    b: {
        c: 'sparrow',
        d: {
            e: 'hahaha'
        }
    },
    f: [1,2,3,4,5,6,7,8,9,10],
    g: [
        {a:"awd"},
        {b:"ads"}
    ]
}

const testObj2 = {

    a: 'jack',
    b: {
        c: 'sparrow',
        d: {
            e: 'hahaha'
        }
    },
}

const testObj3 = [1,2,3,4,5,6,7,8,9,10];

// console.log(myJSON.stringify(testObj));

function help() {
    return 1;
}

console.log(myJSON.stringify(testObj));