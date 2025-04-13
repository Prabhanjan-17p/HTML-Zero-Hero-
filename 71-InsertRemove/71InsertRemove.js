console.log(document.querySelector(".box"))
// console.log(document.getElementsByClassName("box"))


console.log(document.querySelector(".box").innerHTML)
// it show the inner part of the box

console.log(document.querySelector(".box").outerHTML)
// it show the outer part of the box and the inner part also

console.log(document.querySelector(".box").tagName)
// it show the name of the element like div or span etc , it show only the element

console.log(document.querySelector(".box").nodeName)
// it same as tagName but all the nodes are show in this case

console.log(document.querySelector(".box").textContent)
// it show the the text we write in the inner part of the box

console.log(document.querySelector(".box").hidden)
//it show the element are hide or not, and also work to hide the element
// document.querySelector(".box").hidden = true // hide the element
// document.querySelector(".box").hidden = false // unhide the element

document.querySelector(".box").innerHTML  = "hey iam bot"
// it change the 1st innerHTML of the element 

console.log(document.querySelector(".box").hasAttribute("style"))
// it show true or flase , it check the style attribute are present in this box element

console.log(document.querySelector(".box").getAttribute("style"))
//it show the which attribute is present in this box element

console.log(document.querySelector(".box").setAttribute("style", "display: inline"))
// it change the style property of the element

console.log(document.querySelector(".box").removeAttribute("style"))
// it remove the style attribute from the element

// document.designMode = "on"
//when it on you can change the all thinking in this html temperally 

console.log(document.querySelector(".box").dataset)