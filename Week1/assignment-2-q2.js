function vowelCount(str){
  let splitString=str.split('');
  let obj={};
  let vowels ="aeiou";
  splitString.forEach((letter)=>{
    if(vowels.indexOf(letter.toLowerCase())!==-1){
      letter=letter.toLowerCase();
      if(letter in obj){
        obj[letter]++;
      }else{
        obj[letter]=1;
      }
     }
    });
  return obj;
}


console.log(vowelCount('Elie'));
console.log(vowelCount('Tim'));
console.log(vowelCount('Matt'));
console.log(vowelCount('hmm'));
console.log(vowelCount('I Am awesome and so are you'));
