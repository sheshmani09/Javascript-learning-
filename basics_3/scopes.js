
let a = 300  //global scope

if (true) {
  let a = 20; //local scope
  var b = 30;
  const c = 50;
}

// console.log(a) not defined error
// console.log(c);  not defined error
// console.log(b); this executes thats why we use let and const instead of var due to its coping issue


addone(5) //you can call the function anywhere in code
function addone(num) { //this is function 
  return num+1
}
addone(5) //you can call the function anywhere in code both will run



addtwo(5) //but in case of expression this will give error
const addtwo = function (num) { //this is function but also called expression
  return num+2
}
addtwo(5) //only this will run