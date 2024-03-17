// function green() {
//   var sec = document.getElementById("sec").value;

//   var green = document.getElementById("green");
//   green.style.backgroundColor = "#00ff54";
//   green.style.boxShadow = "0px 0px 10px #00ff54, 0px 0px 20px #00ff54";
//   /* Disabling Red */
//   var red = document.getElementById("red");
//   red.style.backgroundColor = "black";
//   red.style.boxShadow = "none";

//   setTimeout(yellow, sec);
// }
// function red() {
//   var sec = document.getElementById("sec").value;
//   var red = document.getElementById("red");
//   red.style.backgroundColor = "red";
//   red.style.boxShadow = "0px 0px 10px red, 0px 0px 20px red";
//   /*Disabling yellow*/
//   var yellow = document.getElementById("yellow");

//   yellow.style.backgroundColor = "black";
//   yellow.style.boxShadow = "none";
//   setTimeout(green, sec);
// }
// function yellow() {
//   var sec = document.getElementById("sec").value;
//   var yellow = document.getElementById("yellow");
//   var green = document.getElementById("green");
//   yellow.style.backgroundColor = "yellow";
//   yellow.style.boxShadow = "0px 0px 10px yellow,0px 0px 20px yellow";
//   /*disabling green*/
//   green.style.backgroundColor = "black";
//   green.style.boxShadow = "none";
//   setTimeout(red, sec);
// }

// function Traffic() {
//   // yellow.style.backgroundColor = "yellow";
//   // yellow.style.boxShadow = "0px 0px 10px yellow,0px 0px 20px yellow";
//   /*disabling green*/
//   green.style.backgroundColor = "black";
//   green.style.boxShadow = "none";
// }

var green = document.getElementById("green");
var yellow = document.getElementById("yellow");
var red = document.getElementById("red");


let arr = [green, yellow, red];

let i = 0;

function Traffic() {
  var sec = document.getElementById("sec").value;

  setInterval(() => 
  {
    let Element1 = arr[i];

    // console.log(Element1.getAttribute("id"));
    Element1.style.backgroundColor = Element1.getAttribute("id");

    arr
      .filter((items) => items != Element1)
      .map((item) => {
        item.style.backgroundColor = "black";
        item.style.boxShadow = "none";
      });
    i++;
    if (i == 3) {
      i = 0;
    }
  }, sec);
}
