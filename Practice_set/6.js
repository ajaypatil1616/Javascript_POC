// Prompt the age from user and alert him to he can drive or not
//add confirm box to edit the age

/*
const drivingFunction = () => {
  let age = Number.parseInt(prompt("Enter Your age "));
  let editAge = confirm(
    "Do You want to see prompt again/ Do want to edit your age"
  );
  if (editAge) {
    let Age = Number.parseInt(prompt("Enter your age "));
  }
  age >= 18 ? alert("You can drive") : alert("You can not drive");
};
*/

// In Previous Q add console log the error if age is negative
/*
const drivingFunction = () => {
    let age = Number.parseInt(prompt("Enter the age"));
    if (age < 0)
    {
        console.error("Please enter a valid age");
    }
    age >= 18 ? alert("You can drive") : alert("You can not drive")
}
*/

//Write a program to change the url to google.com (redirection) if user enters a
//number greater than 4

/*
const drivingFunction = () => {
  let number = Number.parseInt(prompt("Enter the number"));
  if (number > 4) {
    location.href = "https://www.google.com";
    //window.location.replace("https://www.linkedIn.com");
  }
};
*/

//Change the background color of page based on value entered 

const drivingFunction = () => {
    let color = prompt("Enter the background color you want");
    document.body.style.backgroundColor = color;
}

