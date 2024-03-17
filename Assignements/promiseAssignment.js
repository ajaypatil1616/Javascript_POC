//Intro Promise

// let p = new Promise((resolve,reject) => {
//     let a = 1+3; //async opertions
//     if(a === 2){
//         resolve("success");
//     }
//     else{
//         reject("Failure")
//     }
// })
// p.then((msg) => { //then will run for resolve
//     console.log("This is in the then :", msg);
// }).catch((msg)=>{//catch will run for reject
//     console.log("this is in the catch :",msg);
// })

//Promise.all
/*
const p1 = new Promise((resolve,reject) =>{
    resolve("P1 success")
})
const p2 = new Promise((resolve,reject)=>{
    resolve("p2 success")
})
const p3 = new Promise((resolve,reject) =>{
    resolve("p3 success")
})

Promise.all([
    p1,
    p2,
    p3
]).then((msg)=>{
    console.log(msg);
})
*/

//Assignment

let url = //"https://fakestoreapi.com/products"
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
let data = fetch(url); //this returns a promise

data
  .then((response) => {
    return response.json(); //this also returns a promise
  })
  .then((json) => {
    //promise can be handled by .this
    //console.log(json);
    console.log(json.latitude);

    let data = JSON.stringify(json);

    const fs = require("fs");
    fs.writeFileSync("weatherData.json", data, "utf-8");
   
  })
  .catch((err) => {
    console.log(err.message);
    console.log(err.name);
  });

  