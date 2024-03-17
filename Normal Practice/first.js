// console.log("ajay patil");

//Array in JS
/*
 const myArray = [ 10, 20, "Hello", true];
 console.log(myArray);
 myArray[2] = "ajay";
 console.log(myArray); 
 
 let len = myArray.length;
 */
//  console.log(len)
//  console.log(myArray[3]);

//  function myFunction (){
//     for(i = 0 ; i< len -1;  i++){
//         console.log(myArray[i]);
//     }
//  }
//  myFunction();

//Array  Methods
/*
 console.log(myArray.toString());
 console.log(myArray.at(-1)) // at introduced for giving negative indexes
 console.log(myArray.join("*"));
 myArray.pop()
 console.log(myArray);
 myArray.push(true);
 console.log(myArray);


 */
/*
const arr = [[1,4],[3,4],[5,6]];
console.log(arr);
let newArr = arr.flat();
console.log(newArr);
let newArr1 = newArr.sort()
console.log(newArr1); 

let reverseArr = newArr1.reverse();
console.log(reverseArr);

*/
// forEach
/*
const numbers = [45, 4, 9, 16, 25];
numbers.forEach( (n) =>{
    console.log(n);
});
*/
// map
// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//   return value * 2;
// }

const regex = /very/g
const text = "Harry is very very very nice guy";
console.log(text.replace(/very/g ,"beutiful"))
