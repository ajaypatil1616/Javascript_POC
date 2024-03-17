
/*   
const myFunction = function (a, b) {return a * b};

let x = myFunction(4, 3);
*/

//Self invoking functions OR IIFE
//You cannot self-invoke a function declaration.
/* (let x = ()=>{
    console.log("SDfs");
})()//this will give error;
*/
/*
(function() {
    console.log("This self Invoking Fuction");
})();
*/

//Function can be used as values
/*
let x = (a,b)=>{
    return a*b;
}

let y = x(10,10) *10
console.log(y);
*/

//Functions are also objects
//so function have also methods like toString(),argument.length()
/*
function abc (a,b,c) {
    console.log(arguments.length);
  }

  let x = abc.toString();
  console.log(x);
  */

  //Arrow Function
//Arrow function does not have thier own this keyword
//Arrow function can not be hoisted



//... Rest parameter
/*
 let x = (...args) =>{
    let sum = 0;
    for(let x of args){
        sum += x
    }
    console.log(sum);
    console.log(typeof args);
 }
 let z = x(1,2,3,552,5,5,5,56,6,56,6,56,56,5,663);
 */

//Arugments are Passed by value
// because values of arguments are passed directly and
//not the location of arguments

//Objects are passed by reference
//Because object refernces are values

//Function Invocation
//The code inside a fucntion will execute whe something will invoke it
//myFunction() and window.myFunction() is the same function:



/*
 const myObject = { //this is function
    firstName:"John",
    lastName: "Doe",
    fullName: function () { //this is method
      return this.firstName + " " + this.lastName;
    }
  }
  myObject.fullName(); //function.method

  */

//All functions are method i.e. functions === methods

//Call Method in JS
//With call an Object can call method of another object
/*
let person = {
    fullName : function(city,pinCode){
          console.log(this.firstName + " "+ this.lastName+" "+ city+ " "+ pinCode);
    }
}
let person1 = {
    firstName:"Aditya",
    lastName : "Kasar"
}

let x = person.fullName.call(person1,"kolhapur" ,416526);
console.log(x);  //undefined
*/

//Apply method in functions
//call() takes arguments separately
//apply() takes arguments in array
/*
let PERSON = {
    fullDetails : function (city, pincode){
        console.log(this.firstName + " " + this.lastName + " " + city + " "+ pincode); 
    }
}
let akshay = {
    firstName: "Akshay",
    lastName : "Patil"
}

PERSON.fullDetails.apply(akshay, ["Kolhapur", 4165263])
*/

//In Production scenario we do like this 
/*
function fullName(city, pincode) {
  console.log(
    this.firstName + " " + this.lastName + " " + city + " " + pincode
  );
}

let akshay = {
  firstName: "Akshay",
  lastName: "Patil",
};

fullName.apply(akshay, ["Kolhapur", 4165263]);
*/

//Function Bind()
//similar to call() but it returns a function which can be invoked later

/*
let PRODUCTS = {
    productsDetails : function(){
        console.log(`${this.name}, ${this.id}, ${this.price}`);
    }
}

let N95 = {
    name:"N95 Mask",
    id:16,
    price: 80
}

let bindFunction = PRODUCTS.productsDetails.bind(N95);

bindFunction();
*/

//Function closures
