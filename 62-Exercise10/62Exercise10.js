// make a bussines name ganerators by combaine list of Adjective and shop name another word
/*
Adjective
crazy
Amazing
Fire

shop name 
Engine
Foods
Garments

Another Words
Bros
Limited
Hub
*/

// let Adjective = [
//     "crazy",
//     "Amazing",
//     "Fire"
// ]
// let shopName  = [
//     "Engine",
//     "Foods",
//     "Garments"
// ]
// let AnotherWords = [
//     "Bros",
//     "Limited",
//     "Hub"
// ]

// let ad =Adjective[Math.floor(Math.random()*Adjective.length)]
// let sh =shopName[Math.floor(Math.random()*shopName.length)]
// let aw =AnotherWords[Math.floor(Math.random()*AnotherWords.length)]
// // console.log(ad.concat(sh),concat(aw))
// console.log(ad.concat(sh,aw))



let r = Math.random()
let ran = r * 100
let first, second, third
//this is for Adjective
if (ran < 33.33) {
    first = "crazy"
}
else if (ran >= 33.33 && ran > 66.66) {
    first = "Amazing"
}
else {
    first = "Fire"
}

//this is for Shope NAme
let rr = Math.random()
let rann = r * 100
if (rann < 33.33) {
    second = "Engine"
}
else if (rann >= 33.33 && rann > 66.66) {
    second = "Food"
}
else {
    second = "Garments"
}
//this is for Another word
let rrr = Math.random()
let rannn = r * 100
if (rannn < 33.33) {
    third = "Bros"
}
else if (rannn >= 33.33 && rannn > 66.66) {
    third = "Limited"
}
else {
    third = "HUb"
}
console.log(first,second,third)
// console.log(second)
// console.log(third)