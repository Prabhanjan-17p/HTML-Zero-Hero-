// it is used to store 1 container into multiple data type 
// Array are mutuable but string are immutetable 
console.log("Array video");

let arr = [1,2,4,5,7]
 //index = 0,1,2,3,4
console.log(arr)
console.log(typeof arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])
// console.log(arr[6]) it give undefinde

// mutable example
arr[0] = 566
console.log(arr[0])

// convert array to string 
console.log(arr.toString())

// join method 
console.log(arr.join(" and "))

//pop()- it remove a number from the array
let a  = [1,2,3,4,5,6]
console.log(a.pop())
console.log(a)

//push()
let b = [1,2,3,4,5,6]
console.log(b.push(100))
console.log(b)
console.log(b.push("kanha"))
console.log(b)

//shift() --> it remove the 1st element of the index(pop)
console.log(a.shift())
console.log(a)

//unshift -->it adding the 1st element of the index(push)
console.log(b.unshift(0))
console.log(b.unshift("jacky"))
console.log(b)


//delet() -->in this case delete the given index but this space is blank 
delete a[1]
console.log(a)
console.log(a[1])
// in this case delete the given index but this space is blank 

//concat()
// let a1 =["heelo"]
let a1 =[]
console.log(a1.concat(a,b))

//sort() -- > it sort the element like compaire style
// let sort = [1,7,3,5,8]
let sort = [5,1,7,3,5,8]
console.log(sort.sort())

//splice() --> it work a perticular position to insert and delet 
let num = [1,2,3,4,5,6]
//it remove
console.log(num.splice(1,2))
console.log(num)
//in add
console.log(num.splice(1,2,222,333))
console.log(num)

//slice()
let sc = [1,2,3,4,5]
console.log(sc.slice(2)) // it pass the starting value only and print to last of the array
console.log(sc.slice(1,4)) //it give a range like 1 to 4