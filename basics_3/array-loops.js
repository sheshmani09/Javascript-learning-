// for of

const { jsx } = require("react/jsx-runtime");

let arr = [1, 2, 3, 4, 5];

for (const i of arr) {
  // console.log(i);
}
let greeting = "hello people";
for (const alpha of greeting) {
  // console.log(alpha);
}

const map = new Map();
map.set("in", "india");
map.set("usa", "united states of america");
map.set("fr", "france");
map.set("hi", "india");

for (const [key, values] of map) {
  // console.log(key,":",values);
}

//forof cannot iterate objects
//similary forin cannot iterate maps we'll learn more on why so
//they both can iterate arrays but forof gives values forin gives indexes but prefer forof

//forin loop

let myobject = {
  in: "india",
  usa: "united states of america",
  fr: "france",
  hi: "india",
};

for (const key in myobject) {
  // console.log(key,myobject[key]);
}

// foreach loop   - most used for arrays

let coding = ["js", "ruby", "flutter", "python"];
// coding.forEach(index => console.log(index))
// console.log("************");
//(value, index, array) format of parameters
coding.forEach((index, num, arr) => {
  // console.log(index,num,arr)
});

//output
// js 0 [ 'js', 'ruby', 'flutter', 'python' ]
// ruby 1 [ 'js', 'ruby', 'flutter', 'python' ]
// flutter 2 [ 'js', 'ruby', 'flutter', 'python' ]
// python 3 [ 'js', 'ruby', 'flutter', 'python' ]

const mycoding = [
  { "name": "js", "use": "web dev" },
  { "name": "flutter", "use": "app dev" },
  { "name": "python", "use": "both" }
]

mycoding.forEach((item) => 
{
    console.log(item.name);    
}   
)
