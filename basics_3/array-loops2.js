

//filter function
const nums = [1,2,3,4,5,6,7,8,9]

// let filtered = nums.filter((num)=> (num>4))
let filtered = nums.filter((num) => num>4) //returns array of elements that met a condition
// let filtered = nums.filter((num) => {
//     num>4  //this return empty array
// })


// console.log(filtered);

newnums = []

nums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})
// console.log(newnums);


//map function
const mynumerics = [1,2,3,4,5,6,7,8,9]

const newnumerics = mynumerics.map((num)=> num+10 )
// console.log(newnumerics);


const newnum = mynumerics.map((num)=> num*10).map((num)=> num+1).filter((num)=> num>=40)
// const newnums = mynumerics
//                  .map((num)=> num*10)
//                  .map((num)=> num+1)
//                  .filter((num)=> num>=40)  this is called chaining

// console.log(newnum);


