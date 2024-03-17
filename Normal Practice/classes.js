class railWayForm {
  constructor(name, trainNumber, address, pincode) {
    this.name = name;
    this.trainNumber = trainNumber;
    this.address = address;
    this.pincode = pincode;
  }
  
  preview() {
    console.log(
      "name:",
      this.name,
      "trainNumber :",
      this.trainNumber,
      "address:",
      this.address,
      "pincode:",
      this.pincode
    );
  }
  submit() {
    console.log(
      this.name,
      "Your Form succesfully submitted with train Number",
      this.train
    );
  }
  cancel() {
    console.log(this.name, "Your form is canceled of train number", this.train);
  }
}

let ajayForm = new railWayForm("ajay",420,"Kolhapur", 416526)
ajayForm.preview();
ajayForm.submit();
ajayForm.cancel();
ajayForm.preview();