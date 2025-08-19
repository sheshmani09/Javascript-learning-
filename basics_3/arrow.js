
const user = {
    username : "Rahul",
    price : 999,

    welcomeMsg : function () {
        console.log(`${this.username}, welcome to website`);
        //this function refers to the current context
    }
    
}
// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this);  
//  this will give empty object in ide because there is nothing in global scope but will refer to windows in browser 
//but if it was inside a function it will diffrent details of system

// const chai = function () {
//     let username = "Rahul"
//     console.log(this.username);
    
// }
// chai()


//implicit return
const add = (num1, num2) => {
    return num1 + num2
}
// console.log(add(3,4));

// const addtwo = (num1,num2) => num1+num2 //explicit return
// const addtwo = (num1,num2) => (num1+num2) //explicit return better practice coz below
// console.log(addtwo(3,4));

// const objectPrint = ()=> {username : "sam"} //gives undefined 

const objectPrint = ()=> ({username : "sam"})
console.log(objectPrint()) //{ username: 'sam' }output  this is why wrapping in bracket is better practice









