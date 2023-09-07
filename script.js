const currentDate = new Date();

// To get the current day of the week
const getCurrentDayOfWeek = () => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  return dayOfWeek;
}

// 
const getCurrentUTCMillisecond = () => {
  const currentUTCTimeMilliseconds = new Date().getTime();
  return `${currentUTCTimeMilliseconds}`
}

const updateUTCTime = () => {
  const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const currentUTCMillisecondElement = document.querySelector('[data-testid="currentUTCTime"]');
  
  currentDayElement.textContent = `Current Day of the Week: ${getCurrentDayOfWeek()}`;
  currentUTCMillisecondElement.textContent = `Current UTC Time: ${getCurrentUTCMillisecond()}`;
  
  // const currentUTCTimeElementHMS = document.querySelector('[data-testid="currentUTCHMS"]');
  // currentUTCTimeElementHMS.textContent = `${getCurrentUTCTimeHMS()}`;
}

// Updating the Current Day of the Week and Current UTC Time elements in the HTML page every 1 second
setInterval(updateUTCTime, 1000);
document.addEventListener("DOMContentLoaded", updateUTCTime);












// To get the current UTC time
// const getCurrentUTCTimeHMS = () => {
//   const hours = currentDate.getUTCHours().toString().padStart(2, "0");
//   const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");
//   const seconds = currentDate.getUTCSeconds().toString().padStart(2, "0");
//   return `${hours}:${minutes}:${seconds}`;
// }


