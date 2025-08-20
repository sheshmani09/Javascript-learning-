
// Immediately Invoked Function Expression (IIFE)


function code() {
    console.log("hello from code");   
}
// code() normal function

(function chai(){   //this is also called named iife as it has name but arrow function one is unnamed iife
    console.log("hello from chai");
    
})();    //IIFE syntax "(function(parameter){}) (argument);" always put semi colon to end iife

(()=>{
    console.log("hello from arrow iife");
    
})();

(function greet(name) {   //example with parameter and argument will be same in arrow function
    console.log(`hello ${name}`);    
})('Rahul');
