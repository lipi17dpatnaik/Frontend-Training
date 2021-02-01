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
