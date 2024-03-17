//Crearte an array and take number from user and add it to the array
/*
let myFunction = () => {
    const array = [1,2,3,4,5]
let num = Number.parseInt(prompt("Enter the number of elements to add in array"));

for( let i =0; i <num;i++){
    let element = Number.parseInt(prompt("Enter Array element values"));
    array.push(element);
}
console.log(array);
}
*/
// Keep adding the elements until 0 is added
/*
let myFunction = () => 
{
    const array = [1,2,3,4,5];
    let number = Number.parseInt(prompt("Enter the number of array elements you wanna add"));

    for(let i = 0 ; i < number ; i ++)
    {
        let element = Number.parseInt(prompt("Enter array element"));
        array.push(element)
        if(element === 0)
        {
            break;
        }
    }
    console.log(array);
}
*/

//Filter from array : The number divisible by 10
/*
const array = [10, 20, 30, 40, 50, 15, 12, 13, 15, 546, 464, 6468, 46, 1, 645];
let numberDivBy10 = array.filter((x) => x % 10 === 0);

console.log(numberDivBy10);
*/

//Create an array of square of given array
/*
const array = [10, 20, 30, 40, 50, 15, 12, 13, 15, 546, 464, 6468, 46, 1, 645];
let sqOfArrayElements = array.map((n) =>{
    return Math.pow(n,2)
})
console.log(sqOfArrayElements);
*/

//Use reduce to calculate factorial of a given number from an array of first n natural numbers

/*
const array = [1,2,3,4,5,6,7,8,9,10];

let op = array.reduce((x,m) => {
    return x*m
})
console.log(op);
*/