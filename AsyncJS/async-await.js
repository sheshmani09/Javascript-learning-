//**********************Async Await and try and catch ***************
// Async function always returns a promise
//prefer async await mostly but ewhen you need parallel execution use then and catch

// const PromiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "rahul",
//         password: 123,
//       });
//     } else {
//       reject("ERROR! Network slow");
//     }
//   }, 2000);
// });

// // async function conusmePromiseFive() {
// //    const response =  await PromiseFive
// //    console.log(response);
// // }

// async function conusmePromiseFive() {
//    try {
//     const response =  await PromiseFive
//    console.log(response);

//    } catch (error) {
//     console.log(error);
//    }

// }
// conusmePromiseFive()

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data =  await response.json();    //response.json() returns a Promise, so we use await
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getAllUsers();
(async function getAllUsers() {     //IIFE version
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();   // response.json() returns a Promise
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();


// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function weather() {
//     await api() //1st call
//     await api() //2st call
// }
// weather()
