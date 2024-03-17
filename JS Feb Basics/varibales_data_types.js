/*// variable declared with var can be reassigned and can be changed 
// var x = 10;
//  var x =20;
//  console.log(
//     x
//  );

 //let are block scoped you can not redeclare varible with let
 let x = 100;
  function myFunction (){
    let x = 200;
    console.log(x);
 }
 console.log(x);
 myFunction()


 let x = "sdffs";
 x = "sasdf"
 console.log(x)// we can reassign or update with the let 

 //const are constant whose value can neither be updated nor be redeclared with that block
 const y = 150;
 let f = () =>{
    const y = 200
    console.log(y);
 }
 console.log(y);
 f()


 //
  let b = 100;//script
  {
    var a = 10; //Global 
    let b = 20; // block
    const c = 30; //block
  }  
  */

//Data Types
//1. strings : let aj = "Sdfsdf"
//2. numbers : int float : let w = 68.9;
//3. Big Int : eg. let d = BigInt("9168249665")
//4. boolean :  true false
//5. undefined : let g ;
//6. NULL :
//7. Object :  const person = {key: "value"}
//. Object :  const arr = [12,5,12,2]
//. Object :  const d = new Date("20241-02-14")

//8. symbol
/*
const mySymbol = Symbol("");

console.log(mySymbol);

function foo (){
  if(true){
      var h1 ="Iron";
      let h2 ="superman";
      const h3 = "Batman";
  }
  console.log(h1);
  // console.log(h2);
  // console.log(h3);
}
foo()
*/
/*
let x =50 ;
x = 100;
console.log(x);
*/
