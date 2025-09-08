

const user = {
  email: "h@xyz",
  _pass: "abcd",

 
  get pass() {
    return this._pass.toUpperCase();
  },

  set pass(value) {
    if (value.length < 4) {
      console.log("Password too short!");
    } else {
      this._pass = value;
    }
  }
};

console.log(user.pass);  // "ABCD" → getter runs

user.pass = "xy";        // "Password too short!" → setter runs
user.pass = "hello123";
console.log(user.pass);  // "HELLO123"



//properties getter and setter

const user = { email: "h@xyz" };
let _pass = "abcd";

Object.defineProperty(user, "pass", {
  get: function () {
    return _pass.toUpperCase();
  },
  set: function (value) {
    if (value.length < 4) {
      console.log("Password too short!");
    } else {
      _pass = value;
    }
  }
});

console.log(user.pass);  // "ABCD"
user.pass = "123";       // "Password too short!"
user.pass = "strong";
console.log(user.pass);  // "STRONG"
