function setUsername(username){
    //DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, pass){
    // setUsername(username)        //this wont run, we need to call it explicitly to give them context
    // setUsername.call( username) //called  but still not returning value
// createUser { email: 'abc@googgle.com', pass: 123 }

setUsername.call(this,username)
    this.email = email
    this.pass = pass
}

const chai = new createUser("rahul","abc@googgle.com",123)
console.log(chai);


// .apply() is used in same manner but the only diffrence is arguments in passed as Array
// for example setUsername.call(this,username)
//     this.email = email
//     this.pass = pass
// } instead of this we would use 
// setUsername.call(this,[username])  here username is passed as array or we can pass refrence of array
//     this.email = email
//     this.pass = pass
// }