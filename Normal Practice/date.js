// const d = new Date(2018, 11, 24, 10, 33);
// console.log(d);

// const d = new Date();
// d.toString();
// console.log(d);
// console.log(typeof d);

/*

let d1 = Date.parse("March 21, 2012");
let d2 = Date.parse("March 16, 2012");

console.log(d1> d2);

const d = new Date("2024-03-16")
let a =d.getDay();
console.log(a);

const b = new Date("2024-03-16");
let c = b.getFullYear();
console.log(c);

*/

// Set Methods 
/*
const d = new Date();
d.setFullYear(2023,0, 16);

console.log(d);

*/
/*
let a = Math.round(3.14);
console.log(a);
*/
let day;
switch(new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break ;
    case 3 :
        day = "Wednesday";
        break;
    case 4 :
        day = "Thursday";
        break;
    case 5 :
         day = "Friday";
         break;
    case 6 :
        day = "Saturday";
        break;
    default:

}
console.log("Today is ", day);



const person = {fname:"John", lname:"Doe", age:25 ,number : "+9876543210"};


for (let x in person) {
  console.log(person[x]);
}
let i = 0;
while(i <= 10){
console.log(i)
i++;
}