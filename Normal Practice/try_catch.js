// myFun(x)
// function myFun(y)
// {
//     console.log(y);
// }
//  var x = 10

//"use strict"
//  x = 10;
//  debugger;
// console.log(x)
// let promtFunction = () => {
//     // let a = prompt("enter the Value");
//     let a = confirm("are you sure u wanna quit ?")
// };

// document.getElementById("p").innerHTML = document.write(a);
// debugger

//Hositing
// myfun()
// console.log(myfun)
// console.log(x)

// var x = 7
// function myfun ()
// {
//     console.log("Hi this is called hoisting");
// }

// Diffe between let var and const
// var x = 10
// {
//     var x =15
// }
// console.log(x);

//How Js Variables and function works by  akshay saini
// var x = 1 ;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x);
// }

//EVENTS Mouse

//1.onclick
let onclickFunction = () =>{
    document.getElementById("onclick-id").innerHTML = "Hi this is Happened Because of onclick event";
};

//oncontextmenu
const oncontext = document.getElementById("oncontextmenu-id");
oncontext.addEventListener("contextmenu", (e) => {e.preventDefault()});

// dbclick
 function dbclickFunction () {
    document.getElementById("dbclick-id").style.backgroundColor += "red";
};

//on onmouseover
 function onmouseoverFunction1 ()  {
    let para = document.getElementById("onmouseover-id");
    para.style.color = "red";
  };

  //on mousedown
  function onmousedownFunction(){
    document.getElementById("onmousedown-id").style.background = "aqua";

  }
  function onmouseupFunction(){
    document.getElementById("onmousedown-id").style.background = "red";
  }

  function onmouseoverFunction(){
    document.getElementById("onmouseover-id1").style.background = "maroon";
  }
  function onmouseoutFunction (){
    document.getElementById("onmouseover-id1").style.color = "white";
  }

  function onmousemove() {
    document.getElementById("onmousemove-id").style.background = "red";
    }

function myFunction() {
    document.getElementById("demo").style.background ="red";
}
function enter(){
    document.getElementById("enter-leave").style.fontSize = "40px";
}

function leave(){
    document.getElementById("enter-leave").style.fontSize = "10px";
}