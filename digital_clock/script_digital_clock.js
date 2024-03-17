function digitalClockFunction (){
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = hours + ":" + minutes + ":" + seconds ;
    

    document.getElementsByTagName('h1')[0].innerHTML = time;
}
setInterval(digitalClockFunction, 1000);