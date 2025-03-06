let humidity = document.querySelector("humidity");
let windspeed = document.querySelector("speed");   
let weatherimg = document.querySelector(".weatherimg");

let tempe = document.querySelector(".tempval");
let skydescp = document.querySelector("skyinfo");
let feelslike = document.querySelector("feelslike")
let input = document.querySelector("input");
let city = document.querySelector("#city");
let boxx = document.querySelector(".tohide");
let searchbtn = document.querySelector("#search");

let apikey = "9e1fc9ed921807c88e8f292e669d1154";
boxx.hidden = true;

searchbtn.addEventListener("click",function(){
    event.preventDefault();
    boxx.hidden = false;

    let cityname1 = input.value;
    let cityname2 = city.value;
    let cityname = cityname1;
    if(cityname1 === ""){
        cityname= cityname2;
        input.disabled = true;
    }
    
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;
    
    getweather(url);
}
);

async function getweather(url){
    const response = await(fetch(url));
    const data = await response.json();
    console.log(data);

    let temperature = Math.round(data.main.temp);
    console.log(temperature);
    tempe.innerHTML =`${temperature}`;

    let humid = Math.round(data.main.humidity);
    console.log(humidity);
    humidity.innerHTML = `${humid}`;

    let windspd = Math.round(data.wind.speed);
    console.log(windspd);
    windspeed.innerHTML = `${windspd}`;

    let feels = Math.round(data.main.feels_like);
    console.log(feels);
    feelslike.innerHTML=`Feels Like ${feels}°C`;

    let discp = data.weather[0].description;
    console.log(discp);
    skydescp.innerHTML=`${discp}`
    
    let img = data.weather[0].icon;
    weatherimg.innerHTML=`<img src="https://openweathermap.org/img/wn/${img}@4x.png" alt="Weather icon">`;

}



