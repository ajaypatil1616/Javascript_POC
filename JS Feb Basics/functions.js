// functions are heart of javascript
let my = (a,b) =>{
    
    console.log(a+b);
    return a*b;
}
console.log(my(4,5));

//With arrow functions the this keyword always represents
// the object that defined the arrow function.


//In regular functions the this keyword represented the object 
//that called the function, which could be the 
//window, the document, a button or whatever.