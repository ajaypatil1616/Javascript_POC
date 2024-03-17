let displayCountdownFunction = () => {
  let time = document.getElementById("countdown-time").value;
  let countdownTime = Number.parseInt(time);
  //let countdownButton = document.getElementById("countdown-button");
  let displayTime = document.getElementsByTagName("div");

  let seconds = 60;

  let timerInterval = setInterval(() => {
    displayTime[0].innerHTML = `${countdownTime -1} : ${seconds}`;
    seconds--;
    if (seconds === 0) {
      countdownTime--;
      seconds = 60;
    }

    if (countdownTime === 0) {
      displayTime[0].innerHTML = "Your Time Finished";
      clearInterval(timerInterval);
    }
  }, 1000);
};
