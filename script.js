const displayTime = document.getElementById("time-btn");
const stopBtn = document.getElementById("stop-btn");
const playBtn = document.getElementById("play-btn");
const resetBtn = document.getElementById("repaid-btn");

// window.onload function
window.onload = function () {
  mainFun();
};

// mainFun
function mainFun() {
  let [seconds, minutes, hours] = [0, 0, 0];
  // startWatch function
  function stopWatch() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = `${h} : ${m} : ${s}`;
  }

  // startWatch function
  let timer = null;
  function startWatch() {
    if (timer !== null) {
      clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
  }

  // playBtn addEventListener
  playBtn.addEventListener("click", startWatch);

  // stopBtn addEventListener
  stopBtn.addEventListener("click", function () {
    clearInterval(timer);
  });

  // resetBtn addEventListener
  resetBtn.addEventListener("click", function () {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00 : 00 : 00";
  });
}
