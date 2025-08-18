
const marvel =["ironman", "hulk", "vision"]
const dc = ["batman", "superman", "flash"]

marvel.push(dc)
// console.log(marvel);

// const both =marvel.concat(dc) //concat make changes in new array
// console.log(both);

const both = [...marvel, ...dc] //this is called spread operator
// console.log(both);

const combined = marvel.flat(Infinity)
// console.log(combined)

console.log(Array.isArray(combined));
console.log(Array.from("Coding"));


