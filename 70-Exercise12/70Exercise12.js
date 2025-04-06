console.log("exercises 12");

let data = document.getElementsByClassName("box")
// console.log(data)


function randomColor() {
    // let ran1 = Math.ceil(Math.random()*100) // it provide 0 to 100 round number and math.ceil() is used to round the number like 3.4 => 4
    // console.log(ran1)

    let var1 =Math.ceil(0 + Math.random()*255)
    let var2 =Math.ceil(0 + Math.random()*255)
    let var3 =Math.ceil(0 + Math.random()*255)
    // console.log(var1)
    // console.log(var2)
    // console.log(var3)
   
    return `rgb(${var1}, ${var2}, ${var3})`
}

// Array.from(data) // ih this code , it convert html collection into array
Array.from(data).forEach(e =>{
    // console.log(e)
    e.style.backgroundColor= randomColor()
    e.style.color= randomColor()
})