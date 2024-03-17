
function* generatorsFunction(){
    console.log("Starting");
    yield 1;
    console.log("yeilded 1");
    yield 2 ;
    console.log("yeilded 2");
    yield 3;
    console.log("yeilde 3");
}

let generator = generatorsFunction();
 
generator.next();
generator.next();
generator.next();
generator.next();



const fun = function* (){
     yield 'a';
     yield 'b';
     yield 'c';
}

let str = "";
for(let val of fun()){
    str = str +val
}
console.log(str);











