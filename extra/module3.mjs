//modern way (ES6)
export function greet(){
    console.log("good night");
    
}

export const Ahello = (name)=>{
console.log("hello "+ name);

}
const wish = ()=>{
  console.log("have a great day!");
  
}
export default wish    //one file can have only 1 default export





/*we named this file as .mjs to show its module type not common js

other way to do this is
 In your package.json, add:

{
  "type": "module"
} instead of .mjs 
 */