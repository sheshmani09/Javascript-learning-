//1. for loop and nested for loop

//syntax
// for(intialization;condition;updation){
//     statements;
// }

for (let i = 1; i <= 10; i++) {
    // console.log(i);  
}

// nested loop
for (let i = 0; i <5; i++) {
    for (let j = 0; j <10; j++) {
        // statement;    
    }
}

//break and continue

for (let i = 1; i <=10; i++) {
    if (i==5) {
        // console.log("5 detected");
        break;
    } 
    //  console.log(`value of i is ${i}`);
}
for (let i = 1; i <=10; i++) {
    if (i==5) {
        continue   //continue skips when a conditon is met
    } 
    //  console.log(`value of i is ${i}`);
}



//2. while loop syntax

//intialize
// while (condition) {
//     statements
//      updation
// }

// diffrence between while and do while is that -  do while executes atleast once regardless of condition 

//3. do while loop syntax

//intialization
// do {
//     statement
//      updation
// } while (condition);