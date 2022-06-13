const pText = document.querySelector("main #timer");

let newTime = "00:00",
  newTimeHour = "00",
  newTimeMinute = "00",
  newTimeSecond = "00";

let timer = setInterval(() => {
  newTimeSecond = newTimeSecond - 0;
  newTimeSecond++;
  //当秒<10时，以0开头
  if (newTimeSecond < 10) {
    newTimeSecond = "0" + newTimeSecond;
  }
  // 每过60秒，分+1，秒归零
  if (newTimeSecond === 60) {
    newTimeMinute = newTimeMinute - 0;
    newTimeSecond = "00";
    newTimeMinute++;
    //当分<10时，以0开头
    if (newTimeMinute < 10) {
      newTimeMinute = "0" + newTimeMinute;
    }
  }
  //每过60分，小时+1，分钟归零
  if (newTimeMinute === 60) {
    newTimeMinute = "00";
    newTimeHour = newTimeHour - 0;
    newTimeHour++;
    //当小时<10时，以0开头
    if (newTimeHour < 10) {
      newTimeHour = "0" + newTimeHour;
    }
  }
  //当歌曲时间不超过一个小时时，不显示小时
  if (newTimeHour - 0 > 0) {
    newTime = newTimeHour + ":" + newTimeMinute + ":" + newTimeSecond;
  } else {
    newTime = newTimeMinute + ":" + newTimeSecond;
  }
  pText.innerHTML = newTime;
}, 1000);
