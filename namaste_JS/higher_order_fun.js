//Highrt Order Function
/*
function x(){
    console.log("THis is callback Function");
}
//THis is higher order function
function y(x){
    x();
}

*/
// DRY Principle : Do not Repeat Yourself

//Find the area, cicumference and the diameter of following radius

/*
let radius = [3,1,2,4];

const calculateArea =  (radius) => {
    let output = [];
    for (let i = 0; i< radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);

    }
    console.log(output);
    return output;
};

calculateArea(radius);

const calculateCircumference   = (radius) => {
    const output = [];
    for (let i = 0 ; i < radius.length ; i++)
    {
        output.push(2 * Math.PI * radius[i])
    }
    console.log(output);
    return output;
}
calculateCircumference(radius);

const calculateDiameter = (radius) => {
    let output = []
    for(let i = 0 ; i < radius.length; i ++){
        output.push(2 * radius[i])
    }
    console.log(output);
    return output
}
calculateDiameter(radius);

*/

// But here comes the DRY principle in Software engg
//Do Not Repeat Yourself

//Here comes the functional programming in picture
//where you write small functions to execute task

/*
const radius = [1,2,3,4,5,6,7,8,9];

const area = function (radius){
    return Math.PI * radius * radius;
};
const cicumference = function (radius){
    return Math.PI * 2 * radius;
};
const diameter = function (radius){
    return 2 * radius;
};
const calculate = (radius,logic) => {
    const output = []
    for(let i = 0 ; i< radius.length; i++){
        output.push(logic(radius[i]));
    }
    console.log(output);
    return output
};
calculate(radius,area); // We can pass an array to a fucntion as argument and parameter || function as well (callback Function)
calculate(radius,diameter);
calculate(radius,cicumference);

*/

