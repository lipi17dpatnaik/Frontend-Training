//Scope of the variable decides the answer for these 3 questions

var variable = 10;
(()=>{
   console.log(variable);
   var variable = 20;
   console.log(variable);
})();

//answer
//undefined 20
//how? - Inside the function, we are use "var variable" so it as hoisted but since it has not been declared yet it is undefined. Had this not been declared, the variable would still have a value of 10. Only the declaration will be hoisted on top and not the value, so it will give undefined. In the next console.log(variable) it will give the output 20.

var variable = 10;
(()=>{
   console.log(variable); 
   variable = 20;
   console.log(variable);
})();
var variable = 30;
console.log(variable);

//answer 2
//undefined 20 30
//how? - First and second output, in the function console.log(variable) will give undefined and 20 respectively because of the same reason as above. Outside the function, because var variable has been changed to 30, the value will get output as 30.


var variable;
variable = 10;
(()=>{
   var variable;
   console.log(variable);
   variable = 20;
   console.log(variable);
})();
console.log(variable);
variable = 30;

//answer 3
//undefined 20 10
//how? - In the function, var variable is only a declaration and not the initialisation. So first console.log(variable) output as undefined. Next, the value is initialised to 20 and that's why the second output is 20. Outside the arrow function, the variable has been declared and initialised before console.log(variable) is called 10 so third output is 10.
