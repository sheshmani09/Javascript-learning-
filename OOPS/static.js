// static keyword 

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// console.log(new Calculator().add(5,10))  -it will give error
console.log(Calculator.add(5, 10)); // 15

//another example
class User {
  static count = 0; // shared across all users

  constructor(name) {
    this.name = name;
    User.count++; // increment every time a user is created
  }
}

let u1 = new User("Rahul");
let u2 = new User("Amit");

console.log(User.count); 
console.log(u2.name);