//Promises are used to handle async operations in JS
/*
const cart = ["shoes","pants","kurta"];

createOrder(cart, function(orderId){
    proceedToPayment(orderId);
})
*/
//Here Inversion of data is problem() || Callback hell also

//Here comes the promise in picture
/*
const promise = createOrder(cart) // this is empty object
promise.then(function (orderId){
    proceedToPayment(orderId)
})
*/

const API = "https://api.github.com/users/akshaymarch7";
const user = fetch(API);
// console.log(user);
user.then((response) => {
 return response.json()

  }).then((data)=>{
    console.log(data);
  });
