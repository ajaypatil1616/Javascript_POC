let a = {
    firstName : "Ajay"
}
let p ={
    lastName :"Patil"
}

//NEVER DO THIS
a.__proto__ = p

//NEVER DO THIS
p.__proto__ = {
    age : 24    
}
console.log(a.age);