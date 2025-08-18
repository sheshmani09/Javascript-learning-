
const myArr=[1,2,3,4,8]

const myArr2=[1,"batman",3.5, "shaktimaan"]
console.log(myArr2)
console.log(myArr2[1])

// //array methods

myArr.push(6)  //adds element or other array at last index

myArr.pop() //removes elemnt or other array from last

myArr.unshift(0) //adds element at the start but not widely used for larger arrays as it shifts all values which can be time consuming
myArr.shift() //removes element from start


myArr.includes(9) //gives result in boolean true if present otherwise false

myArr.indexOf(4)//return index of elemnt if present if not returns -1
const newArr = myArr.join(0) //returns string and uses the passed value as separator


console.log(myArr.reverse()) //to reverse the array
console.log(newArr) 
