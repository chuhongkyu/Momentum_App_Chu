const API_KEY ="6efb83df4991f9f102d8ecd228523468";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data =>{
          const weather= document.querySelector("#weather");
          let weatherIcon = data.weather[0].main;
          if(weatherIcon == "Clear"){
              weather.innerHTML  = `<h1>${data.name}</h1><span>&nbsp<i class="fa-solid fa-sun fa-2x"></i> &nbsp</span>  <p> ${data.main.temp}°C</p>`;
          }else if(weatherIcon == "Rain"){
              weather.innerHTML  = `<h1>${data.name}</h1><span>&nbsp<i class="fa-solid fa-cloud-rain"></i> &nbsp</span>  <p> ${data.main.temp}°C</p>`;
          }else if(weatherIcon == "Snow"){
              weather.innerHTML  = `<h1>${data.name}</h1><span>&nbsp<i class="fa-solid fa-snowflake"></i> &nbsp</span>  <p> ${data.main.temp}°C</p>`;
          }
          else{
              weather.innerHTML  = `<h1>${data.name}</h1> ${weatherIcon} <p> ${data.main.temp}°C</p>`; 
          }
          console.log(data);
          console.log(data.weather[0].main);
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
