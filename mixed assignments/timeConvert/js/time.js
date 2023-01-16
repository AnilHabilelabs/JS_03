// 10.	Convert seconds to hour, minute and seconds.
let inputTime = window.prompt("Enter Your Time In Seconds");
function timeChanger(inputTime) {
  if (inputTime % 60 != 0) {
    seconds = Math.abs(Math.ceil(inputTime / 60) * 60 - inputTime - 60);
  } else {
    seconds = 0;
  }
  minute = Math.floor(inputTime / 60);
  hour = Math.floor(minute / 60);
  console.log(hour + " Hour : " + minute + " Minute : " + seconds + " Seconds");
  console.log(hour + ":" + minute + ":" + seconds);
}
timeChanger(inputTime);
