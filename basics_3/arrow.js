const user = {
  username: "Rahul",
  price: 999,

  welcomeMsg: function () {
    console.log(`${this.username}, welcome to website`);
    //this function refers to the current context
  },
};
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
  return num1 + num2;
};
// console.log(add(3,4));

// const addtwo = (num1,num2) => num1+num2 //explicit return
// const addtwo = (num1,num2) => (num1+num2) //explicit return better practice coz below
// console.log(addtwo(3,4));

// const objectPrint = ()=> {username : "sam"} //gives undefined

const objectPrint = () => ({ username: "sam" });
console.log(objectPrint()); //{ username: 'sam' }output  this is why wrapping in bracket is better practice



let obj1 ={
    greetings :"Good morning",
    usernames : ["Sam","rahul", "rohan"],
    speak()
    {
        this.usernames.forEach((student)=>{
            console.log(this.greetings+ ", uthooo " + student ); //here this is referring to greeting otuside its scope in arrow function
            
        })
    }
} //later comment one of the obj1 before running
let obj1 ={
     greetings :"Good morning",
    usernames : ["Sam","rahul", "rohan"],
    speak()
    {
        // greetings :"Good morning",
        this.usernames.forEach(function s(student){
            // greetings ="Good morning",
            console.log(this.greetings+ ", uthooo " + student );  //it prints undefined because it can only access greeting inside the s function
        })
    }
}
// obj1.speak()

//*****impo****in short**** if you use this in arrow function the this refers to its parent but in normal function it refers to itself