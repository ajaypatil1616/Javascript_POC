// Always use addEventListener on priority
let btn = document.getElementById("btn");

function x (){
    alert("You entered value < 50")
}
btn.addEventListener("click",x)

function y(){
    alert("You eneterd value greater than 50")
}
btn.addEventListener("click",y)

let number = Number.parseInt(prompt("Enter the number"))

if (number < 50){
btn.removeEventListener("click",y)
}