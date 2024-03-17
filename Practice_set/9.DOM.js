document.title ="title displayed by JS"

document.body.style.backgroundColor ="aqua";
//console.log(document.body.childNodes);


let boxes = document.getElementsByClassName("box")
boxes[2].style.backgroundColor = "red";
boxes[1].style.backgroundColor = "maroon"

document.querySelector(".box").style.backgroundColor = "green";

let boxQ = document.querySelectorAll(".box");
boxQ.forEach((x)=>{
    x.style.color ="white";
})
console.log(typeof boxQ);

/*
function foo (){
    if(true){
        var h1 ="Iron";
        let h2 ="superman";
        const h3 = "Batman";
    }
    console.log(h1);
    console.log(h2);
    console.log(h3);
}
foo()
*/