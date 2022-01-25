export let calculate = function(str) {

    //remove spaces
    str = str.replace(/\s/g, '');

    //reducing the multiplication and division
    const evaluate = function(stack, prevSign, num) {

        if(prevSign === '+') {
            
            stack.push(num);
        }

        else if(prevSign === '-') {

            stack.push(-num);
        }

        else if(prevSign === '*') {

            const prevNum = stack.pop();

            stack.push(prevNum * num);
        }

        else if(prevSign === '/') {

            const prevNum = stack.pop();

            stack.push(prevNum / num);
        }
    }

    const compute = function(str, start) {

        let ans = 0;
        let currNum = '';
        let prevSign = '+';
        let stack = [];

        for(let index = start; index < str.length; index++) {

            if((str[index] >= '0' && str[index] <= '9') || str[index] === '.') {

                currNum += str[index];
            }

            else if(str[index] === '+' || str[index] === '-' || str[index] === '*' || str[index] === '/') {

                currNum = parseFloat(currNum);
                evaluate(stack, prevSign, currNum);
                
                prevSign = str[index];
                currNum = '';
            }

            else if(str[index] === '(') {

                const curr = compute(str, index + 1);

                currNum = curr.value;
                index = curr.index - 1;
            }

            else if(str[index] === ')') {
                
                currNum = parseFloat(currNum);
                evaluate(stack, prevSign, currNum);
                return { value: stack.reduce((sum, curr) => sum + curr), index: index + 1 };
            }
        }

        currNum = parseFloat(currNum);
        evaluate(stack, prevSign, currNum);

        ans = stack.reduce((sum, curr) => sum + curr);
        return { value: ans, index: str.length };
    }

    return compute(str, 0).value;
}
