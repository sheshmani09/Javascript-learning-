let score= "46"

console.log(typeof score);

let toNumber = Number(score)
console.log(typeof toNumber);

let score2 = "3abc" //this also will be converted to number but value will be NaN, true will be converted to 1 , false will be converted to 0 

//during boolean conversion true, 1 or any other value will be 1 , false,0 and epmty value will be 0
