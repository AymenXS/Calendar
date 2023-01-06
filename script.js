const daysTag = document.querySelector(".days"),
  currentDate = document.querySelector(".current-date"),
  prevNextIcon = document.querySelectorAll(".icons span");

// Getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

// Storing full name of all months in array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // Getting first date of current month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // Getting last date of current month
  lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // Getting last day of current month
  lastDateofPrevMonth = new Date(currYear, currMonth, 0).getDate(); // Getting last date of previous month

  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    // Creating "<li>" of previous month's last days
    liTag += `<li class="inactive">${lastDateofPrevMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    // Creating "<li>" of current month days
    let isToday =
      i === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class ="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    // Creating "<li>" of next month's first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth); // Creating a new date of current year & month and pass it as date value
      currYear = date.getFullYear(); // Updating current year with new date year
      currMonth = date.getMonth(); // Updating current month with new date month
    } else {
      // Else pass new Date as date value
      date = new Date();
    }
    renderCalendar();
  });
});
