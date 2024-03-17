let btn = document.getElementById("location");
let displayLocation = document.getElementById("location-info");

let success = async (position) => {
  let response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
  );
  let data = await response.json();

  displayLocation.innerHTML = `${data.address.city},${data.address.country}`;
  console.log(position);
  console.log(data.address.country);
  console.log(position.coords.latitude);
};

let failure = (error) => {
  console.log(error.message);
  console.log("You have failed to get location");
};

let getLocationFunction = () => {
  window.navigator.geolocation.getCurrentPosition(success, failure);
};

btn.addEventListener("click", getLocationFunction);

//window.navigator.geolocation.getCurrentPosition()
//window.navigator.geolocation.watchPosition()
