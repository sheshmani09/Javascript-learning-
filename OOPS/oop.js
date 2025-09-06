
const user = {
    username : "sheshmani",
    loginCount : 5,
    signedIn : true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);


function userNew(username,loginCount, signedIn){
   this.username = username
   this.loginCount = loginCount
   this.signedIn = signedIn

    this.greetings = function(){
        console.log(`welcome ${this.username}`);
        
    }

   return this
}

// const userOne=  userNew("sheshmani",8,true)
// const userTwo=  userNew("Rahul",12,false) this overrides the previous user deatils
const userOne= new userNew("sheshmani",8,true)
const userTwo= new userNew("Rahul",12,false)
//here we use new keyword to prevents this over ride it creates a new instance ie new constructor

console.log(userOne.constructor);
// console.log(userTwo);


