
function greet()
{
    console.log("this is a function");
    
}

// greet(); //function calling

// function sum (a,b) {
//     console.log(a+b);
    
// }

function sum(a,b) {
    return a+b
}
let result  = sum(5,3)
// console.log( "result:", result);

// function loginUserMsg(user){
//     return `${user} logged in`
// }

function loginUserMsg(user = "Sam"){   //here we gave default value to user in case the argument is empty
    return `${user} logged in`
}

console.log(loginUserMsg()); //this will print default value
console.log(loginUserMsg("Rahul"));
