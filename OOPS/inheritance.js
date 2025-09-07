
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



 

