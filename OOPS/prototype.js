
// let myName = "sheshmani  "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman : "web",

    getSpiderPower: function(){
        console.log(`spiderman power is ${this.spiderman}`);
        
    }
}

Object.prototype.rahul = function(){
    console.log("rahul is present in all objects");
    
} //object is the main boss in js so if we inject a prototype fucntion here it will be with all (array, strings , objects , function etc. but we if we inject to any partricular  like Array it will only be with array not others)

// heroPower.rahul()
// myHeros.rahul()





//inheritence

const user ={
    name: "ram",
    email: "google@gmail"
}

const teacher = {
    makevideo : true
}
const TeachingSupport = {
    isAvail : false 
}
const TAsupport = {
    makeAssignment : "js assigment",
    __proto__ : TeachingSupport
}
teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(TeachingSupport,teacher)


let anotherUsername = "shyam   "

String.prototype.truelength = function(){
    
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
    
}

anotherUsername.truelength()

"hitesh".truelength()
