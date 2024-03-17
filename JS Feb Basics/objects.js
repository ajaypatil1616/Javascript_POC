// let person = {
//   fName: "ajay",
//   lName: "patil",
//   age: 27,
//   eyeColor: "Black",
//   fullName: function () {
//     //function expression or Object Method
//     return this.fName + " " + this.lName;
//   },
// };
// person.age = 25;
// console.log(person.age);
// let ajay = person.fullName();
// console.log(ajay);

// person.fullName();

// console.log(Boolean("ajay"));

// A primitive value is a value which  has no properties/methods
//primitive values are immutable
/*Examples :JavaScript defines 7 types of primitive data types:
string
number
boolean
null
undefined
symbol
bigint*/

//JS Objects is collection of named values like Dictionaries in Python
//let object = {property : "value"}  IMP

//There are four methods to create object
/*
//1.Object literal
const person = {};
person.fullName = "Ajay Patil";
person.age = 25;
person.color = "Brown";

//2.Using the new Keyword
const obj = new Object();
obj.number = 16;
obj.state = "null"
//onsole.log(obj["number"])

//3. Define an object constructor, and then create objects of the constructed type.
//4. Create an object using Object.create().
*/

//for in
/*
const person = {
  fname:" John",
  lname:" Doe",
  age: 25,
  age1: 25
};
for(let x in person){
  txt = person[x]
  console.log(txt);
}//You must use person[x] in the loop.ṇṇ
//person.x will not work (Because x is a variable).
*/

// Nested Objects
/*
myObj = {
  name : "ajay",
  age : 16,
  cars :{
    car1: "Baleno",
    car2 : "Vista",
    car3 :"SUV 700(Coming soon)"
  }
}
console.log(myObj.cars.car3);
*/

//JSON Stringfy :converts it into string

myObj = {
  name : "ajay",
  age : 16,
  cars :{
    car1: "Baleno",
    car2 : "Vista",
    car3 :"SUV 700(Coming soon)"
  }
}
let myStr = JSON.stringify(myObj)
console.log(myStr);

let d =new Date()
console.log(JSON.stringify(d))



//Sets
/*
//Set is Collection of unique values, 
//each value can occur at once 
//and can contain any data type

let mySet = new Set([152,"dsf","sdf",45,45]);
mySet.add(true)
mySet.add(152)

console.log(mySet);
*/

//Map :can store key-value pairs
/*
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
*/
