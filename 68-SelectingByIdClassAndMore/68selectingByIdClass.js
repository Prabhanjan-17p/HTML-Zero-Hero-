console.log("kanha");

// class selector
// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";


//id selector
let bobbx = document.getElementById("redbox");
bobbx.style.backgroundColor = "red";

//query selector == it is used the first selector
document.querySelector(".box").style.backgroundColor = "green"

// in the case of query selector the first selector is used then we print the all the boxes then we used queryALL selector
// document.querySelectorAll(".box").style.backgroundColor = "green" // this cmd is not working because , we cannot used any operation in the html collection, then we used
// document.querySelectorAll(".box").forEach(e =>{
//     console.log(e);
//     e.style.backgroundColor = "green"
// })


// when we attack a perticular name selector = it show all the div elements
console.log(document.getElementsByTagName("div"));

// match selector
let ee = document.getElementsByTagName("div");
console.log(ee[3].matches("#redbox"))
console.log(ee[2].matches("#redbox"))

//closest selector
console.log(ee[3].closest("#redbox"))
console.log(ee[3].closest("html"))

//contains selector
console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log(document.querySelector("body").contains(document.querySelector(".container")));
