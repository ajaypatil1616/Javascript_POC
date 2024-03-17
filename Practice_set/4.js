//1
/*
let str = "har\"";
console.log(str.length);

//2
let word = "fox";
let output = word.includes("ox");
console.log(output);


let start = word.startsWith("f")
let end = word.endsWith("e")
console.log(start);
console.log(end);

*/
//3
/*
let str = "Time, TIde and JAVASCRIPT waits for None";
let op = str.toLowerCase()
console.log(op);
*/

//4. Exract the amount from following string
let str = "Please gave me rs 1000"

let op = str.slice(18,)
let op2 = Number.parseInt(op);
console.log(op2);


let op3 = str.replace(/a/g,"A")
console.log(op3);