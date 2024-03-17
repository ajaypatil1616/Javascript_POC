//Method Chanining
// Consider the following array of objects 
//print only name from object in which email endswith.io

/*
const people = [
    {id : 123, name:"Ajay", email:"patilajay1616@gmail.com.io"},
    {id : 124, name:"vijay", email:"patilajay1616@gmail.com.org"},
    {id : 125, name:"Aks", email:"patilajay1616@gmail.com.info.io"},
    {id : 126, name:"sup", email:"patilajay1616@gmail.com.org"},
    {id : 127, name:"Amom", email:"patilajay1616@gmail.com.io"}
];

//this is called method chaining ajay patil
let output = people.filter((x)=> x.email.endsWith(".io")).map((x) => x.name).sort()
console.log(Array.isArray(output));
console.log(output);
*/

let numbers = [1,2,3,4,5,6,7,8,9,10]

let output =numbers.filter((n) =>  n%2!==0)
        .map((n) => n*n)
        .reduce((n,m)=> n+m,0)
console.log(output);


