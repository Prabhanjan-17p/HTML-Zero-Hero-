/* make a faulty calculator usins js

this faulty calculator does following :

1.it take two number form user as input
2.it perform wrong operation as follows
+ --> -
* --> +
- --> /
/ --> **

it perform wrong operation 10% of the times
*/

const num1 = prompt("Enter first number")
const num2 = prompt("Enter second number")
const userch = prompt("which operation you have to perform")
let res 
// console.log(num1)
// console.log(num2)

const ran = Math.random()
randomm = ran*100
if (randomm > 10){

    if(userch === "+"){
        res = num1 - num2
    }
    else if(userch === "-"){
        res = num1 / num2
    }
    else if(userch === "*"){
        res = num1 + num2
    }
    else{
        res = num1 ** num2
    }
}else{
    if(userch === "+"){
        res = num1 + num2
    }
    else if(userch === "-"){
        res = num1 - num2
    }
    else if(userch === "*"){
        res = num1 * num2
    }
    else{
        res = num1 / num2
    }
}
console.log("Your Ans is = ")
console.log(res)
// alert(`The Ans is ${res}`)