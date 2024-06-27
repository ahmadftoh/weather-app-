var serchInput = document.getElementById(`searchbtn`);
let cityname = document.getElementById(`cityname`);
let temp = document.getElementById(`temp`);
let dayicon = document.getElementById(`dayicon`);
let skyCondition = document.getElementById(`skyCondition`);
let humidity = document.getElementById(`humidity`);
let windSpeed = document.getElementById(`windSpeed`);
let windDirection = document.getElementById(`windDirection`);
let theDay = document.getElementById(`theDay`);
let theDate = document.getElementById(`theDate`);
let nextDayName = document.getElementById(`nextDay`);
let nextDayIcon = document.getElementById(`nextDayIcon`);
let thirdDayIcon= document.getElementById(`thirdDayIcon`);
let nextHigh= document.getElementById(`nextHigh`);
let nextMin= document.getElementById(`nextMin`);
let nextCondition= document.getElementById(`nextCondition`);
let thirdHigh= document.getElementById(`thirdHigh`);
let thirdMin= document.getElementById(`thirdMin`);
let thirdCondition= document.getElementById(`thirdCondition`);
getData(`cairo`);
serchInput.addEventListener(`input`, function () {
  getData(serchInput.value);
});
getData(`cairo`);
let d = [];
async function getData(city) {
   let data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=42708e91ff6e4783b2a163340241206&q=${city}&days=3`);
  let final = await data.json();
  d = final;
  disply();
};
function disply() {
  let dateString = d.forecast.forecastday[0].date;
  let dateObject = new Date(dateString);
  let dateTwoObject = new Date(dateString);
  dateTwoObject.setDate(dateTwoObject.getDate() + 1);
let nextDay = String(dateTwoObject.getDate()).padStart(2, '0');
let theCurrentDay = d.forecast.forecastday[0].date.split('-');
  let dayOfWeekNumber = dateObject.getDay();
  let daysOfWeek = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let daySecondOfWeekName = daysOfWeek[dayOfWeekNumber+1];
  let dayOfWeekName = daysOfWeek[dayOfWeekNumber];
  let monthNumber = dateObject.getMonth();
  let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let monthName = monthsOfYear[monthNumber];
  cityname.innerHTML = d.location.name;
  temp.innerHTML = d.current.temp_c;
  dayicon.src = d.current.condition.icon;
  skyCondition.innerHTML = d.current.condition.text;
  humidity.innerHTML = d.current.humidity;
  windSpeed.innerHTML = d.current.wind_kph;
  windDirection.innerHTML = d.current.wind_dir;
  theDay.innerHTML = dayOfWeekName;
  theDate.innerHTML = theCurrentDay[2]+ monthName;
  nextDayName.innerHTML = daySecondOfWeekName;
  nextDayIcon.src = d.forecast.forecastday[1].day.condition.icon;
  thirdDayIcon.src = d.forecast.forecastday[2].day.condition.icon;
  nextHigh.innerHTML= d.forecast.forecastday[1].day.maxtemp_c;
  nextMin.innerHTML= d.forecast.forecastday[1].day.mintemp_c;
  nextCondition.innerHTML = d.forecast.forecastday[1].day.condition.text;
  thirdHigh.innerHTML= d.forecast.forecastday[2].day.maxtemp_c;
  thirdMin.innerHTML= d.forecast.forecastday[2].day.mintemp_c;
  thirdCondition.innerHTML = d.forecast.forecastday[2].day.condition.text;
};

