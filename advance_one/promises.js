
// const promiseOne  = new Promise((resolve, reject) => {
//     //do an async task
//     //DB calls, cryptography etc.
//     setTimeout(function () {
//         console.log("this is async");
//         resolve()
//     },1000)
    
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })

new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2");
    
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({
            "username" : "sheshmani",
            "email" : "sheshu@example.com"
        })
    },1000)
})
promiseThree.then((user)=>{
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({
            "username" : "sheshmani",
            "password" : 123
        })
        }else{
            reject("error! something went wrong")
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
})