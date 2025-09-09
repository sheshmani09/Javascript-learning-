// CommonJS WAY



// const hello = require("./modules1")

// // hello() as there was only 1 function

// hello.greet()
// hello.Ahello("rahul")
// hello.Ahello("ram")
// hello.Ahello("kite")


//if we have more function we can use object desturcting as well

const {greet, Ahello} = require("./module1")
greet()
Ahello("shyam")
Ahello("john")



