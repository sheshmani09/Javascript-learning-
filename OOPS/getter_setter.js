// getter and setter 

//getter and setter are a pair i.e both should be defined
//used to validate or modify a value when reading/wrting a property


class User {
  constructor(email, pass) {
    this.email = email
    this._pass = pass              //this._pass (the underscore is used to convey that its priavte)
  }

  // Getter → controls how we *read* the value
  get pass() {
    return this._pass.toUpperCase()   // for example, always return in uppercase
  }

  // Setter → controls how we *set* the value
  set pass(value) {
    if (value.length < 4) {
      console.log("Password too short!")
    } else {
      this._pass = value
    }
  }
}

const u1 = new User("h@xyz", "abcd")

console.log(u1.pass)   // "ABCD" (getter modifies the output)

u1.pass = "xyz"        // "Password too short!" (setter blocks invalid value)
u1.pass = "strongpass" 
console.log(u1.pass)   // "STRONGPASS"




//without getter setter  you cannot change how they behave kind of hardCoded
class User {
  constructor(email, pass) {
    this.email = email
    this.pass = pass  
  }
  
}

const u1 = new User("h@xyz", "abc")
console.log(u1.pass)   // "abc"