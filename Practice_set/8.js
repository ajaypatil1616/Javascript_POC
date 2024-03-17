const alertFunction = () => {
  alert("Hey There");
};
let btn = document.getElementById("alert");
btn.addEventListener("click", alertFunction);

//
let google = document.getElementById("google");
google.setAttribute("href", "https://www.google.com");

let fb = document.getElementById("fb");
fb.setAttribute("href", "https://www.facebook.com");

let insta = document.getElementById("insta");
insta.setAttribute("href", "https://www.instagram.com");

setInterval(async () => {
  let url = "https://jsonplaceholder.typicode.com/todos";
  let data = await fetch(url);
  let jsonData = await data.json()
  console.log(jsonData);

  //writing data
  /*
    let jsonData  = await pr.json()
    let Data = JSON.stringify(jsonData)

    let fs = require("fs");
    fs.writeFileSync("data.json", Data, "utf-8")
*/
}, 5000);

/*setInterval(async function(){
    document.querySelector("#buld").classList.toggle("buld")
},300   )
*/