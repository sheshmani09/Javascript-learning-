
const obj1 ={ 1: 'a', 2: 'b' };
const obj2 = { 3: 'c', 4: 'd' };
const obj3 = { 5: 'e', 6: 'f' };

// const obj4 = Object.assign(obj1, obj2, obj3); this treats obj1 as target and modifies it
const obj4 = Object.assign({}, obj1, obj2, obj3); //this is better way to merge objects without modifying the original ones

const obj5 = {...obj1, ...obj2, ...obj3}; //best way to merge objects using spread operator
// console.log(obj5);

console.log(Object.keys(obj5)); //returns keys of the object in array format
console.log(Object.values(obj5)); //returns values of the object in array format
console.log(Object.entries(obj5)); //returns key-value pairs of the object in array format

// console.log(obj5.hasOwnProperty('5')); //returns true if the object has the property '5'


const course ={
    coursename : 'JavaScript',
    price : "999",
    faculty : "John Doe"
}

// console.log(course.coursename); one way to use the values

const {price} = course
// console.log(price); better way to do it known as object destructuring using curly braces


