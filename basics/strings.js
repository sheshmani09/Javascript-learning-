let firstName = "Sheshmani"
let surname = "Sahu"
let dayCount= 8

console.log(firstName +" " + surname); //concatenation using +

//string interpolation using backticks (`) and template literal ${}
console.log(`this is ${firstName}, day ${dayCount} of learning javascript`) 

const strObj = new String("Sheshmani")
console.log(strObj)  //this returns string object [String: 'Sheshmani']

console.log(firstName.length)
console.log(firstName.charAt(4))
console.log(firstName.indexOf('m'))