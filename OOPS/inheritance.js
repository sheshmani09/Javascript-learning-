
// inheritence and super keyword


// 1st use case - calling parent constructor

class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

class Toyota extends Car {
  constructor(brand, model) {
    super(brand); // ✅ call parent constructor
    this.model = model;
  }
}

let fortuner = new Toyota("Toyota", "Fortuner");
console.log(fortuner.brand, fortuner.model); 


// 2nd use case - calling parent method

class Car {
  start() {
    console.log("Car starting...");
  }
}

class Toyota extends Car {
  start() {
    super.start();  // ✅ call parent method
    console.log("Toyota engine start!");
  }
}

let supra = new Toyota();
supra.start();



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

