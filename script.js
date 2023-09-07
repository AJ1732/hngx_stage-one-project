const currentDate = new Date();

// To get the current day of the week
function getCurrentDayOfWeek() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  return dayOfWeek;
}

// To get the current UTC time
const getCurrentUTCTimeHMS = () => {
  const hours = currentDate.getUTCHours().toString().padStart(2, "0");
  const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getUTCSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

const getCurrentUTCMillisecond = () => {
  // const milliseconds = currentDate.getUTCMilliseconds().toString();
  const currentUTCTimeMilliseconds = new Date().getTime();
  return `${currentUTCTimeMilliseconds}`
}

// Updating the Current Day of the Week and Current UTC Time elements in the HTML page
document.addEventListener("DOMContentLoaded", () => {
  const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const currentUTCTimeElementHMS = document.querySelector('[data-testid="currentUTCTimeHMS"]');
  const currentUTCMillisecondElement = document.querySelector('[data-testid="currentUTCTime"]');

  currentDayElement.textContent = `Current Day of the Week: ${getCurrentDayOfWeek()}`;
  currentUTCTimeElementHMS.textContent = `${getCurrentUTCTimeHMS()}`;
  currentUTCMillisecondElement.textContent = `Current UTC Time: ${getCurrentUTCMillisecond()}`;
});

