
// if-else statement
let num = 2;
if(num%2==0){
    console.log("even");
    
}
else{
    console.log("odd");
    
}
// falsy values 
// false, 0 , -0, BigInt 0n, NaN ,"", undefined, null

// truthy values 
true, 1, "0", "false", " ",[], {}, function() {}

// switch case 
switch (2) {
    case 1:
        console.log("one");
        
        break;
    case 2:
        console.log("two");
        
        break;

    default:
        console.log("neither");
        
        break;
}

let emptyobj = {}
if(Object.keys(emptyobj).length===0)
{
    console.log("empty");
    
}

//nullish coalescing operator  - if the left expression is null or undefined returns the right expression

let n = null ; let b = 20
const c = b??10 
const a = null??5
console.log(c);// output 20
console.log(a); //output 5

let any = null??undefined??10 //you can use as many times you want
console.log(any);
