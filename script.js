const search_btn = document.querySelector("#search_img");
const type_bar = document.querySelector("#type_bar");
const city_name = document.querySelector("#city_name");
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const windspeed = document.querySelector("#windspeed");
const temp_btn = document.querySelector("#temp-toggle");


window.addEventListener("load",function(){
    type_bar.value = "Berlin";
    getData();
})

search_btn.addEventListener("click",function(){
    getData();
})
type_bar.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        getData();
    }
})
function getData(){
    let placeName = type_bar.value.trim();
    if(placeName === ""){
        return;

    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&APPID=8657add18f1c961c92f78e3c13257ecc`;

    fetch(url)
    .then(Response => Response.json())
        .then(data =>{
            let currentTemp = data.main.temp;
            console.log(data)
            console.log(data.main.temp)
            console.log(data.wind.speed)
            console.log(data.main.humidity)
            
            city_name.textContent = placeName;
            temperature.textContent = `${data.main.temp}k`;
            windspeed.textContent = `${data.wind.speed}m/s`;
            humidity.textContent = `${data.main.humidity}%`;
        })

}
