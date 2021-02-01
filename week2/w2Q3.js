/*
Implement a function called memoize which takes a function as an input. For example - below, memoize takes the "factorialFunc" function as an input and returns the factorial value of the number passed to "factorialFunc" function as an argument.
The first time when memoizedFactorial is invoked with an argument, it will take some time to calculate and return the factorial value for that integer but when invoked the second time immediately with the same integer value, result be generated instantaneously.

const memoizedFactorial = memoize(factorial)
console.log(memoizedFactorial(17)); // slow
console.log(memoizedFactorial(17)); // faster

*/

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }

function memoize(fun){
    let cache = {}
    return function (n){
        if (cache[n] != undefined ) {
          return cache[n]
        } else {
          let result = fun(n)
          cache[n] = result
          return result
        }
    }
}

const memoizedFactorial = memoize(factorial)
console.log(memoizedFactorial(17)); // slow
console.log(memoizedFactorial(18)); // fast
