console.log("this is String tutorial")

// String are immutable

let names = "kanha"
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names[4])
// console.log(names[5])

//it gives the length of the string or arry
console.log(names.length)

let name ="kanha"
let friend = "tarun"
console.log("his name is "+name + "his friend name is "+friend)
// this is called template litralas and also calleed string interpalution
console.log(`his name is ${name} and his friend name is ${friend}`)

let a ="harry"
// it convert the lower case to uper case 
console.log(a.toUpperCase())

// it show the given range of latter
console.log(a.slice(2,3))

// it replace the choice latter
console.log(a.replace("ha","kai"))
console.log(a.replace("ha","11"))

// it show the concatinate the latter
let b = "taniya"
console.log(b.concat(a))
console.log(b.concat(a),"Romi")

//remove white space
let c= "     yyryr"
console.log(c.trim())