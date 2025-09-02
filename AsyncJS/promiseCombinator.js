//****************promise combinators**************

function getSqaure(n, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n % 2 == 0) resolve(n * n);
      else reject("can't calculate");
    }, delay);
  });
}
// getSqaure(3).then((res)=>{
//     console.log(res);

// }).catch((rej)=>{
//     console.log(rej);

// })

(async function getData() {
   const res =  await getSqaure(2,1000)
   console.log(res);
   const res2 =  await getSqaure(4,2000)
   console.log(res2);
   const res3 =  await getSqaure(6,3000)
   console.log(res3);
})();  //but this will take 6 sec in total even though they are not dependent on each other in such cases we use promise.all() and pass array to it look below

// ***************promise.all()***********

(async function getData() {
  try {
    let datas = [getSqaure(2,2000), getSqaure(4,3000), getSqaure(6,4000)];
    const res = await Promise.all(datas); //we passes the datas array
    console.log(res);               //output: [ 4, 16, 36 ]
  } catch (error) {
    console.log(error);
  }
})();

// the same thing in case of error
(async function getData() {
  try {
    let datas = [getSqaure(2,2000), getSqaure(7,3000), getSqaure(6,4000)];
    const res = await Promise.all(datas);
    console.log(res);
  } catch (error) {
    console.log(error);    //output: can't calculate  because if any 0ne of the promise fail it will reject directly and wont print other normal output
  }
})();

//*********************promise.allsettled(**************
(async function getData() {
  try {
    let datas = [getSqaure(2, 2000), getSqaure(7, 3000), getSqaure(6, 4000)];
    const res = await Promise.allSettled(datas); 
    console.log(res);
  } catch (error) {
    console.log(error);
  }
})();  //this will print output for normal ones unlike promise.all
// output [
//   { status: 'fulfilled', value: 4 },
//   { status: 'rejected', reason: "can't calculate" },
//   { status: 'fulfilled', value: 36 }
// ]



// ******************************promise.race() ***************************/
(async function getData() {
  try {
    let datas = [getSqaure(2, 2000), getSqaure(7, 4000), getSqaure(6, 1000)];
    const res = await Promise.race(datas); 
    console.log(res);
  } catch (error) {
    console.log(error);
  }
})();  //output : 36
// it returns whichever is the fastest or first execution be it either resolved or rejected i.e if 7,4000 one was 1000 instead of 4k it would have logged (can't calculate)




//******************************promise.any() ***************************/

(async function getData() {
  try {
    let datas = [getSqaure(2, 1000), getSqaure(7, 4000), getSqaure(6, 1000)];
    const res = await Promise.any(datas); 
    console.log(res);
  } catch (error) {
    console.log(error);
  }
})();  //output 4  
//this returns the first resolved output it never returns rejected ones like race