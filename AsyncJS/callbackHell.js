
// console.log("hello");

function hello(){
    // console.log("guys")
}

// setTimeout(hello,2000)  //here hello is a call back function
// setTimeout(hello(),2000)  //but if you do it like this it wont behave same because you are not calling it you are executing it


// function getData (dataID){
//     console.log("data:", dataID);    
// }
// getData(1)
// getData(2)
// getData(3) 
// this gives all the data concurently but what if i want get data 2 after i get data 1 and data 3 after i get data 2 , in this situation we use nested callbacks

// let user = {
//     username: "sheshmani",
//     password : 123
// }  //here i want to get password only if i get username

// function getName(uname) {
//     setTimeout(()=>{
//         console.log(`username is ${user.username}`);
//         uname(user.username) //callback function
//     },1000)
// }

// function getPass(username){
//     setTimeout(()=>{
//         if (username === "sheshmani") {
//             console.log("password found!");
//             console.log(`password is ${user.password}`);

//         } else {
//             console.log("username not found!");
//         }
//     },1000)
// }

// getName((pname)=>{
//     getPass(pname)
// })


function getData(data, getNext){
    setTimeout(() => {
        console.log("data",data); 
        if (getNext) {
            getNext()
        }
    }, 2000);
}

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        })
    })
}) //this is called callback hell... this is very difficult to understand in production code
//to solve this we use promises