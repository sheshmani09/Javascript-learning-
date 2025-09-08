
// console.log(Math.PI); 

// Object.defineProperty(Math,"PI",{value: 4})
// console.log(Math.PI);  //TypeError: Cannot redefine property: PI

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));


const chai = {
    name: "ginger tea",
    price : 20,
    avail:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    // writable: false,
    enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// for (let [key,value] of chai) {
//     console.log(`${key} : ${value}`);
    
// }  //chai is not iterable

for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
    
}

