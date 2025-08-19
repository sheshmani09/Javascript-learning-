
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

// console.log(loginUserMsg()); //this will print default value
// console.log(loginUserMsg("Rahul"));

// function calculateCartTotal(num1){
//     return num1
// }
// console.log(calculateCartTotal(200,300,500)); returns only first value

function calculateCartTotal(...num){  //rest operator (spread operator)
    return num
}

// console.log(calculateCartTotal(200,300,500));  //[ 200, 300, 500 ] output

const product = {
    productName : "Shampoo",
    price: 999
}

function handleObject(anyobject) {  
    console.log(`product name is ${anyobject.productName} and price is Rs. ${anyobject.price}`);
}
handleObject(product) //one way to pass object in argument

handleObject({
    productName: "soap",
    price: 299
})

//similarly we can pass array as well

let myArray = [200, 100, 400]

function handleArray(getArray){
    console.log(getArray[2]); 
}
handleArray(myArray)