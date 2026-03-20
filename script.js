const search_btn = document.querySelector("#search_img");
const type_bar = document.querySelector("#type_bar");
const city_name = document.querySelector("#city_name");
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const windspeed = document.querySelector("#windspeed");
const temp_btn = document.querySelector("#temp-toggle");

let currentTemp = null;
let isCelsius = false;
window.addEventListener("load", function () {
    type_bar.value = "Berlin";
  getData();
});

search_btn.addEventListener("click", function () {
  getData();        
});
type_bar.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getData();
  }
});
function getData() {
  let placeName = type_bar.value.trim();
  if (placeName === "") {
    return;
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&units=metric&APPID=8657add18f1c961c92f78e3c13257ecc`;

  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      currentTemp = data.main.temp;
      isCelsius = true;
      console.log(data);
      console.log(data.main.temp);
      console.log(data.wind.speed);
      console.log(data.main.humidity);

      city_name.textContent = data.name;
      temperature.textContent = `${currentTemp}°C`;
      windspeed.textContent = `${data.wind.speed}m/s`;
      humidity.textContent = `${data.main.humidity}%`;
      
      temp_btn.textContent = "Fahrenheit";
    })
    .catch((error)=>{
        alert("City not found!")
    });
}

temp_btn.addEventListener("click", function () {
        if(currentTemp === null){
        return;
    }
    if(isCelsius){
        let fahrenheit = (currentTemp *9/5) + 32;
        temperature.textContent = `${(fahrenheit).toFixed(1)}°F`
        temp_btn.textContent = "celsius";
        isCelsius = false;
    }
    else{
        temperature.textContent = `${currentTemp}°C`
        temp_btn.textContent = "Fahrenheit";
        isCelsius = true;
    }
});
