
let loopp  =[1,93,5,6,88]


// clasical for loop
for (let index = 0; index < loopp.length; index++) {
    const element = loopp[index];
    console.log(element)
}

//foreach loop
loopp.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})

//forin --> this loop used only object case
let obj = {
    // key:element
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        // console.log(element)
        console.log(key,element)
    }
}

//forof --> it used in array case
for (const iterator of loopp) {
    console.log(iterator)
}

