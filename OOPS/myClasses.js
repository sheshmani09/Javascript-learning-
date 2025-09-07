class user {
  constructor(Uname, Email, pass) {
    this.Uname = Uname;
    this.Email = Email;
    this.pass = pass;
  }
  encryptPass() {
    return `${this.pass}abc`;
  }
  changeUsername() {
    return `${this.Uname.toUpperCase()}`;
  }
}

const chai = new user("ram", "abc@email", 1234);
// console.log(chai.encryptPass());
// console.log(chai.changeUsername());

// if we didnt use class how it would look

function User(Uname, Email, pass) {
  this.Uname = Uname;
  this.Email = Email;
  this.pass = pass;
}

User.prototype.encryptPass= function(){
    return `${this.pass}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.Uname.toUpperCase()}`;
}

const hero = new User("superman","superman@clark","123")

// console.log(hero.encryptPass());
// console.log(hero.changeUsername());




