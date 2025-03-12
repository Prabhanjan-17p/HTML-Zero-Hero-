/* 
wap to calculate factorial a number using reduce and using for loop

6 =6*5*4*3*2*1
*/

let a =9
function factorial(number){
    // this is creating a array, 0 to n , where n is the a number
    // let arr = Array.from(Array(number).keys())
    // console.log(arr)

    //when u do not want 0(slice used) and want the last number
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
}
factorial(a)

// let num = [1,2,3,4,5,6]
// const red = ((a,b)=>{
//     return a*b
// })
// console.log(num.reduce(red))


// let fact = 1
// for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     fact = fact*element
// }

function facto(number) {
    let fact = 1
    for (let index = 1; index <= number; index++) {
        fact = fact * index
    }
    return fact
}
 console.log(facto(a))