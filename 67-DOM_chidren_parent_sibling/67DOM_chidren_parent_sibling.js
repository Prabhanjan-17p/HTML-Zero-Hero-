console.log("hello world!");

console.log(document.body);
console.log(document.body.childNodes);


let cont = document.body.childNodes[1]
console.log(cont);

console.log(cont.firstChild);
console.log(cont.lastChild);

console.log(cont.firstElementChild);
console.log(cont.lastElementChild);

cont.lastElementChild.style.color = "red";
cont.lastElementChild.style.backgroundColor = "blue";


console.log(cont.lastElementChild.parentElement);
// this cmd show the last element of the curent parent element

console.log(document.body.firstElementChild.childNodes);
console.log(document.body.firstElementChild.childNodes[3]);


// sibling =  sibling is called , when the element are same parent then called sibling
console.log(document.body.firstElementChild.children[3].nextElementSibling);
console.log(document.body.firstElementChild.children[3].previousElementSibling);
console.log(document.body.firstElementChild.children[3].previousSibling);
// console.log(document.body.firstElementChild.children[3])

//catch table element 
console.log(document.body.children[1]);
console.log(document.body.children[1].rows);
console.log(document.body.children[1].caption);
console.log(document.body.children[1].thead);