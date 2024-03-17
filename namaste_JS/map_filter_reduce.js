// map

/*
const array = [5, 1, 3, 2, 6];
const double = (n) => {
  return n * 2;
};

const triple = (n) => {
  return n * 3;
};
const binary = (n) => {
  return n.toString(2);

};

const output = array.map(double);
console.log("double", output);

const o2 = array.map(triple);
console.log("triple", o2);

const b2 = array.map(binary);
console.log("binary", b2);
*/

//Filter : filtering out the elements
/*
const arr = [1,2,3,4,5,6];
const output = arr.filter((x) => x%2 ==0 );
console.log(output);
*/

//reduce : sum of all, maximum of all of them

/*
const  arr = [12,4,56,565,862,6965,65,656,55555]
const output =  arr.reduce((acc,curr)=>{
if(curr > acc)
{
    acc =curr
}
return acc
},0)
console.log(output);
*/

const users = [
  { firsName: "Ajay", lastName: "Patil", age: 24 },
  { firsName: "Vivek", lastName: "Patil", age: 26 },
  { firsName: "Pratik", lastName: "Patil", age: 22 },
  { firsName: "Tejas", lastName: "mole", age: 23 },
  { firsName: "sanket", lastName: "mole", age: 25 },
  { firsName: "PYADII", lastName: "mole", age: 21 },
  { firsName: "najim", lastName: "mole", age: 28 },
];
/*
let output = users.map((x) => x.firsName + " "+x.lastName);
console.log(output);
*/

/*
const output = users.reduce((acc,curr) => {
  if(acc[curr.age]){
   acc[curr.age] = ++ acc[curr.age]
  }
  else{
    acc[curr.age] = 1;
  }
  return acc
},{});
console.log(output);
*/

/*
let output = users.filter((n) => n.age < 25).map((x) => x.firsName);
console.log(output);
*/

let output = users.reduce((acc, curr) =>{
  if(curr.age < 25)
  {
    acc.push(curr.firsName)
  }
  return acc
},[])

console.log(output);
