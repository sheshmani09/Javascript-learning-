// let promise =  new Promise((resolve, reject) => {
//   console.log("i am a promise");
//       resolve("succesfully printed")               //Promise { 'succesfully printed' }
//     // reject("did not print due to error")         Promise { <rejected> 'did not print due to error' }
// })

// console.log(promise);

// function getData(data, getNext){
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("data",data);
//         resolve("succeeded!")
//         // reject("error 202")                      the promise rejected with the reason "error 202".
//         if (getNext) {
//             getNext()
//         }
//     }, 2000);
//     })
// }

//  let result  = getData(123)
//  console.log(result); //this will give pending then fulfilled after 5 sec (after printing data)

// const getPromise = ()=>{
//   return  new Promise((resolve, reject) => {
//   console.log("i am a promise");
//   // resolve("success")
//   reject("error occured")
// })
// }

// let result = getPromise()
//    // .then() in promise
// result.then((res)=>{
//   console.log("promise completed:", res);              //  promise completed: success
// })

// // .catch()  in promise
// result.catch((err)=>{
//   console.log("rejected promise: ",err);                  //  rejected promise:  error occured

// })

function dataFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1 returned");
      resolve("success");
    }, 5000);
  });
}

function dataFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2 returned");
      resolve("success");
    }, 5000);
  });
}

//parallel running
console.log("getting data 1");
let p1 = dataFunc1()
p1.then((res)=>{
  console.log(res);

})
console.log("getting data 2");
let p2 = dataFunc2()
p2.then((res)=>{
  console.log(res);

})


//this is chaining this will run one after another i.e it will get data 2 after success of data 1 
console.log("getting data 1");
dataFunc1().then((res) => {
  console.log("getting data 2");
  dataFunc2().then((res) => {});
});
