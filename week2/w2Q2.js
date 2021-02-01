/*
Question 2 - doSum
Implement function doSum which returns the sum of all the integers passed to it as arguments. Can be invoked like

const sumVal = doSum(1)(2)(3)();
console.log(sumVal); //6
*/


function doSum(num){
  var total=num;
  return sum=(num2)=>{
    if (num2==undefined){
      return total;
    }
    else{
      total+=num2;
      return sum;
    }
  }
}

const sumVal=doSum(1)(2)(3)();
console.log(sumVal);
