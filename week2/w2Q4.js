Array.prototype.newMap=function(func){
  const outputArray=[];
  for(let index=0;index<this.length;index++){
    outputArray.push(func(this[index],index,this));
  }
  return outputArray;
}

Array.prototype.newForEach=function(func){
  for(let index=0;index<this.length;index++){
  func(this[index],index,this);
  }
}
Function.prototype.newBind= function(inArgs){
  const args=Array.from(arguments).slice(1);
  const self=this;
  return function(){
    return self.apply(inArgs,args);
  }
}

function add(a,b){
  return a+b;
}

console.log(add.newBind(null,5,10)());
const sampleValues=[1,2,3];
const mapOutputValues=sampleValues.newMap(function(value,index,array){
  return value*5;
})

console.log(mapOutputValues);
sampleValues.newForEach(function(value,index,array){
  return value*5;
})
