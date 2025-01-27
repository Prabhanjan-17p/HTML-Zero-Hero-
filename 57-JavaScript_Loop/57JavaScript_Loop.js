console.log("loop video")

// let a =1 
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// there are 5 types of loop
// 1-For loop
// 2- forin loop
// 3-forof loop
// 4-while loop
// 5-dowhile loop 

// 1-for loop 
let i =1
for (let i = 0; i < 100; i++) {
    console.log(i+1)
}
// 2- forin loop(this is used in object concept)
let obj = {
    name:"kanha",
    role:"coder",
    "id no ": 6000
}
for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
}
for (const key in obj) {
        const element = obj[key];
        console.log(element)
}
for (const key in obj) {
        console.log(key)
}

// 3-forof loop(this used on arry concept)
// for (const iterator of "kanha") {
//     console.log(c)
// }

// 4-while loop
// let a = 0
// while(a < 6){
//     console.log(a)
//     a++
// }

// 5-dowhile loop 
let a = 10
do {
    console.log(a)
    a++
    
} while (a<6);