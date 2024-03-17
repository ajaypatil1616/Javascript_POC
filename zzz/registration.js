
let formValidation = ()=>{
    let fullName = document.getElementById("full-name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirm-password").value
    let number = document.getElementById("number").value
    console.log(number.length);

    if(fullName==="" || email==="" || password===""){
        alert("Enter all the details")
        return false;
    }
    let fnameRegexr = /\d/
    if(fnameRegexr.test(fullName)){
        alert("Full Name Can not containt number")
        return false;
    }
    if(password.search(/[a-z]/)< 0){
        alert("password must containt 1 lower case")
        return false;
    }
    if(password.search(/[A-Z]/)< 0){
        alert("password must containt 1 Upper case")
        return false;
    }
    if(password.search(/[0-9]/)< 0){
        alert("password must containt 1 digit")
        return false;
    }
    if(password.search(/[!@#%^&*()]/)< 0){
        alert("password must containt special char !@#%^&*()")
        return false;
    }
    if(confirmPassword !==)
    if(number.length <10 || number.length > 10){
        alert("number must be 10 digit")
        return false;
    }

return true;
}