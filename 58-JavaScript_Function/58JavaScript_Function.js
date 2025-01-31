console.log("Function video")


// console.log("hey kanha ur good")
// console.log("hey kanha ur code are amazing")
// console.log("hey kanha good ue knwoldge")
// console.log("hey kanha ur code most")


function nice(name) {
    console.log("hey "+ name +" ur good")
    console.log("hey "+ name +" ur code are amazing")
    console.log("hey "+ name +" good ue knwoldge")
    console.log("hey "+ name +" ur code most")
}
// nice("hero")
// nice("shivam")


// function sum(a,b) {
//     // console.log(a +b)
//     return a+b
// }

//default parameter
function sum(a,b,c=6) {
    // console.log(a +b)
    // return a+b
    return a+b+c
}
// sum(2,3)
res = sum(2,3)
res2 = sum(12,3)
res3 = sum(4,3,1)
console.log("the sum of the number is ",res)
console.log("the sum of the number is ",res2)
console.log("the sum of the number is ",res3)

//Arrow Function
const func = (x) => {
    console.log("i am a Arrow function ",x)

}
func(34)
func(44)
func(333)