// this year
let timeContainer = document.querySelector(".author time"),
  thisYear = new Date().getFullYear();
if (thisYear > 2024) {
  timeContainer.innerHTML = `2024 - ${thisYear}.`;
}
