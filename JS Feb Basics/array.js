// Basic Array

// const arr= [12,24,25,366,45]; //declare arr with const
// // arr[2] = 28 // reassgin value at index 2 . indexing starts with 
// // let l = arr.length; // optimization : finding the length of array
// // for (i = 0 ; i<l; i++){
// //     console.log(arr[i]);
// // }


// //The real strength of JavaScript arrays are the built-in array properties and methods:
//  //1. length
//  console.log(arr.length, "is the length of array");

//  //2. toString() method
//  console.log(arr.toString());

//  //3. .push
//  arr.push(95);
//  console.log(arr);

// //arrays with named(key value pair) index in called associative arrays (js does not support it)
// // use object when element name is string
// //use array when element name is number

// //4. sort
// let sortedArray = arr.sort
// console.log(sortedArray, "sorted array");

// //5. Array.isArray(arr) check whether array is array or not
// console.log(Array.isArray(arr));


//2.Array Methods
/*
// at
let arr = [1,2,5,4,3,5,6];
console.log(arr.at(-1));
 
// join() works like toString
console.log(arr.join("*"));

// pop() will remove last element of arr
arr.pop(3)
console.log(arr);

//push() will add element at last 
arr.push("6")
console.log(arr);

//concat arr
let newArr = [45,85,96,45];
const  array = arr.concat(newArr);
console.log(array);

// flat()
 const a = [[1,2,3],[3,4],[5,68,9,8]]
 console.log(a, "multi dimensional array");
 console.log(a.flat());


 //splice(1,3,"hi","hi","hi") add new element to array
 const fruits = ['apple', 'banana', 'cherry', 'date'];

// Remove 'banana' and 'cherry', and add 'lemon' and 'orange' starting at index 1
fruits.splice(1, 2, 'lemon', 'orange'); 
console.log(fruits); // Output: ['apple', 'lemon', 'orange', 'date']

 //slice() remove elements from array
 const fruits = ['apple', 'banana', 'cherry', 'date'];

// Create a new array containing elements from index 1 to index 3 (excluding index 3)
const slicedFruits = fruits.slice(1, 3); 
console.log(slicedFruits); // Output: ['banana', 'cherry']
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date'] (original array remains unchanged)

*/
 

//3.Array Search

/*
//indexOf
const arr = [12,35,68,9,85,35,65,554,35];
console.log(arr.indexOf(35)+1);

// lastIndexOf 

console.log(arr.lastIndexOf(35)+1);

//includes()
console.log(arr.includes(554));

//find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);

*/

//4.Array sort

/*
//sort
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let sortedArr = fruits.sort();
console.log(sortedArr, "Sort Method");

//toSorted() use toSorted over sort()
let toSortedArray = fruits.toSorted();
console.log(toSortedArray, "use toSorted() method over sort");

//reverse
let reverse = sortedArr.reverse();
console.log(reverse, "reversed array");

//toReversed() use this over reverse()
let toReversed1 = sortedArr.toReversed();
console.log(toReversed1, "use toReversed() over reverese method ");

//math.min use custom functions for sorting numeric arrays
const points = [40, 100, 1, 5, 25, 10];
//console.log(points.min());

*/

//5.array iteration

// 1.forEach()
/*
const arr = [4,5,68,89,324,5];
arr.forEach((element) => {
    console.log(element)
});


let myFunction = (v,i,array) =>{
    console.log(v,i);
}
const array = [1,2,3,4,5,6,7,8,9];
array.forEach(myFunction);


array.forEach((n) => {
    n = n**2
    console.log(n)
});
*/

// 2.Map : creates a new array by performing a function on each element
// The map() method does not change the original array.

// map vs forEach
// forEach modifies existing array while map returns a new array

/*
let mapFunction = (value,index,array) =>{
    return value **2;
}
let array = [1,2,3,45,6,9,5,46];
let newArr = array.map(mapFunction);

let nums = [12,34,55,65,99,710,456,777,99,11]; //array
let result = nums.filter((n) =>  n%2 ===0) //filtering out  even elements
    .map((n) => n*2)        // mapping each element with *2
    .reduce((a,b) => a+b);  // reducing elments to one with addition
console.log(result);
*/
// 3. Flatmap :Use flatMap when you want to transform each element of 
// an array and then flatten the result into a new array. It first maps each 
// element using a mapping function, then flattens the result into a new array
/*
const arr = [1,2,3,4,5,6];
const newArr=arr.flatMap((x)=>x*2)
console.log(newArr)

//4.filter filtering out the elements

let filterArray = arr.filter((x) => x > 4)
console.log(filterArray)

//5.reduce : normal left to right 
//The reduceRight() works from right-to-left in the array.
let reducedArray = arr.reduce((n,m) => n*m);
console.log(reducedArray);
*/
// 6. spread operator 
// The ... operator expands an iterable (like an array) into more elements:

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1,...q2,...q3,...q4]
console.log(year);



//6. array const
//Always declare arrays with const keyword



