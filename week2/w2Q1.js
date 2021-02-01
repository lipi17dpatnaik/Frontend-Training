/*Question 1 - sumMeUp
Implement a function sumMeUp which takes a function as an argument

function sumMeUp(fn) {
}
function sum(a,b,c) {
	return a+b+c;
}

You should be able to to invoke the function like below
var currySum = sumMeUp(sum);
console.log(currySum(1,3,5));
console.log(currySum(2)(3,5));
console.log(currySum(1)(2)(3));
*/








function sumMeUp(func) {
    return function curried(...args) {
      if (args.length === func.length) {
        return func.apply(null, args);
      } else {
        return function(...args2) {
          return curried.apply(null, args.concat(args2));
        }
      }
    };
  
  }

function sum(a,b,c){
    return a+b+c;
}

let currySum = sumMeUp(sum);
console.log(currySum(1, 2, 3));
console.log(currySum(1)(2, 3));
console.log(currySum(1)(2)(3));
