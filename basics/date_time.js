let myDate = new Date()
console.log(myDate)
console.log(myDate.toString()) //return the whole value as string 
// // e.g Fri Jul 18 2025 11:54:21 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()) //returns date string only no time ex- Fri Jul 18 2025
console.log(myDate.toLocaleDateString()) //returns date only wihtout day ex-7/18/2025
console.log(myDate.toLocaleString()) //return date and time in this format-  7/18/2025, 11:57:25 AM
console.log(myDate.toISOString()) //return in iso format
console.log(myDate.toJSON())
console.log(myDate.toLocaleTimeString()) //gives only time
console.log(myDate.toTimeString()) //utc format time
console.log(myDate.toUTCString()) //day date  and time 

// let createDate = new Date(2025,8,21)
let createDate = new Date("sept 21, 2025")
console.log(createDate.toLocaleDateString("hi-IN"));//to convert to indian format hindi


let newDate = new Date()
console.log(
    // newDate.toLocaleDateString("en-IN",     //indian format english
    {
        weekday : "narrow",
        day: "2-digit",
        month: "long",
        year: "numeric"
    }
)
)
