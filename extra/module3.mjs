//modern way (ES6)
export function greet(){
    console.log("good night");
    
}

export const Ahello = (name)=>{
console.log("hello "+ name);

}

/*we named this file as .mjs to show its module type not common js

other way to do this is
 In your package.json, add:

{
  "type": "module"
} instead of .mjs 
 */