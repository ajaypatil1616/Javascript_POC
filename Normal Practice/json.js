// JSON stand for javascript Object Notation

//A common use of JSON is to read data from a web server, and display the data in a web page.

//If You parse JSON string with JavaScript program u can access it as an Objects
//It is used for transfering data 
//Json is independant language

// JSON value cannot contains functions, date and the  undefined

//XML was difficult to parse Than JSON i.e.JSON is faster than XML

/* JSON Data Types 
1. Numbers
2. String
3.Boolean
4.Objects (JSON object) (Nested JSON)
5.array
6.null
op/ 7. Arrays Can be values:{"employee":["ajay","patil","seti"]}
*/

// A common use of json is to exchange dat to/from a web server
// When we receive data from server, the data is always string
//parse the data  with JSON.parse() to become JS object


//JSON.parse()
// is used to Convert the Text into JS Object

/*
const data = JSON.parse('{"name":"ajay","last":"patil","age" : 16}');
console.log(typeof data);
console.log(data);
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(typeof obj);
console.log(obj);

*/
//Date is not allowed in JSON so we need to convert Date into string
/*
const text = '{"name":"ajay", "dob":"2024-12-24","city":"Los Anlges"}';
const data = JSON.parse(text);
console.log(data);
//Converting string date into Date Object
data.dob = new Date(data.dob)
console.log(data.dob);
*/

//We can use another parameter in JSON.parse called revivier
//This Parameter is a function that checks each property before returning the value
/*
const object = '{"name":"ajay", "dob":"2024-11-19", "age": 27}';
const data = JSON.parse(object, function(key,value){
    if(key == "dob"){
        return new Date(value);
    }
    else{
        return value;
    }
})
console.log(data);


//JSON.stringify() 
//stringify() == JSON File creation : is used to convert JS Objects to strings i.e. JSON File
let stringData = JSON.stringify(data);
console.log(stringData);

*/

//Storing data 
/*
//this will work in browser only

const data = {name: "Ajay",age: 27,city:"Kolhapur"}
const strData = JSON.stringify(data);
localStorage.setItem("textJSON",strData)

//// Retrieving data:
let text = localStorage.getItem("textJSON");
let finalData = JSON.parse(text);

*/

//