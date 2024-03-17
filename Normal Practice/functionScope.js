// let globalVariable = 10;

// let localFunction = () => {
//   let localVarible = 20;

//   let functionFunction = () => {
//     let functionVariable = 30;
//     console.log(ajay);
//     if (true) {
//       let blockVarible = 40;
//       var ajay = 1616;
//       console.log(`Inside block`);
//       console.log(`${blockVarible}`);
//       console.log(`${functionVariable}`);
//       console.log(`${localVarible}`);
//       console.log(`${localVarible}`);
//     }
//   };
//   functionFunction();
// };
// localFunction();
let day ;
switch( new Date().getDay()){
  case 0 :
    day = "sunday"
    break;
  case 1 :
    day = "Monday"
    break;
  case 2 :
    day : "Tuesday"
    break;
  case 3:
    day = "Wed"
    break;
  case 4 :
    day = "Thru";
    break;
  case 5 :
    day ="Friday";
    break;
  case 6 :
    day = "sat"
    break;
  
}
console.log(day);