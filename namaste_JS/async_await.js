//creating promise
// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is 1st Promise");
//   }, 10000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("THis is 2nd Promise");
//   }, 5000);
// });

//handling promise with  normal function
/*
function getData() {
    //JS engine will not wait to resolve the promise
  p.then((res) => console.log(res));
  console.log("This will be printed first");
}
getData();
*/

// async always returns a promise
//handling promise using async await
//await is written before the promise always
/*
async function handlePromise(){
    console.log("Hello World");

    //JS engine will wait here for promise to resolve
    const val = await p;  //await keyword is only be used inside a  async function and before the promise
    console.log("Namaste JS 1st Time");
    console.log(val);

    //
   const val2 = await p2;
   console.log("Namaste JS 2nd Time");
   console.log(val2);
}

handlePromise()
*/

const API_URL = "https://api.github.com/users/ajaypatil1616";
(async function handlePromise() {
  
  try {
    const data = await fetch(API_URL); // fetch returns a promise
    // fetch response with Response named as data
    const jsonValue = await data.json(); // json() also return promise ..await is used
    console.log(jsonValue);

    //writing file  
    let jsonData = JSON.stringify(jsonValue);
    const fs = require("fs");
    fs.writeFileSync("data1.json", jsonData, "utf8");

  } catch (err) {
    console.log(err.message);
    console.log(err.name);
  }
})()
//handlePromise();
