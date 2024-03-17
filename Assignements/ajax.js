let ajaxFunction = async () => {

  const ajaxObject = new XMLHttpRequest();

  ajaxObject.open("GET", "https://fakestoreapi.com/products",true);
  
  ajaxObject.send();

  ajaxObject.onload = function () {
    document.getElementById("data").innerHTML = this.responseText;
  };
  // let data = await this.responseText.json()

  // console.log(data.id);

  
};
