
const Sym = Symbol("sym-key")

const obj = {
  name: 'John',
  // Sym : "mykey", not a good practice to use symbol as key
  [Sym]: "mykey",
  // using symbol as key in bracket is a good practice
  age: 30,
  city: 'New York',
  hobbies: ['reading', 'gaming', 'hiking'],
  address: {
    street: '123 Main St',
    zip: '10001'
  }
};

// console.log(obj.name)
console.log(obj['name']); //this is better way to access properties
// console.log(obj.Sym); //gives error
console.log(obj[Sym]); 

Object.freeze(obj); // Freezes the object, making it immutable now if we try to change the object it will not change

console.log(obj);