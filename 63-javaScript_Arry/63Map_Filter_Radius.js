
// Map , creating a new array used less line
let arr = [1,13,5,7,11]
//let newarr =[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
//     //in the above code push a new array in square 
// }
// console.log(newarr)


let newArray = arr.map((e)=>{
    return e**2
})
console.log(newArray)


//filter() --> it print a perticular value in case of a condition
const graterThanSeven = (e=>{
    if(e>7){
        return true
    }
    return false
})
// newArray.filter(graterThanSeven)
console.log(arr.filter(graterThanSeven))


// Reduce()
let arr2 = [1,2,3,4,5,6]
const add = ((a,b)=>{
    return a*b
})
console.log(arr2.reduce(add))


//Array.form --> it convert string,object to array
let ab = "kanha"
// Array.from("kanha")
console.log(Array.from("kanha"))