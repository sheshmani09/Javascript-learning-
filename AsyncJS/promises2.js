const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("this is promise 1");
        resolve()
    }, 2000);
})
promiseOne.then(()=>{
    console.log("promise 1 resolved");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("this is promise 2");
        resolve()
    }, 2000);
}).then(()=>{
    console.log("promise 2 resolved");

})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username : "sheshmani",
            email : "aa@example.com"
        })
    }, 2000);
})
promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({
                username: "rahul", password : 123
            })
        }else{
            reject("ERROR! Network slow")
        }
    }, 2000);
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("the promise is either resolved or rejected");

})

const PromiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "rahul",
        password: 123,
      });
    } else {
      reject("ERROR! Network slow");
    }
  }, 2000);
});

// async function conusmePromiseFive() {
//    const response =  await PromiseFive
//    console.log(response);

// }
async function conusmePromiseFive() {
   try {
    const response =  await PromiseFive
   console.log(response);

   } catch (error) {
    console.log(error);
   }

}
conusmePromiseFive()

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data =  await response.json();    //response.json() returns a Promise, so we use await
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getAllUsers();


fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
        return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);
})