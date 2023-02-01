const API_KEY = '83407093126f198d0221ae6ca1065818';

function onGeoOk(position) {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;

   console.log(`You live in ${latitude} and ${longitude}`);

   fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
   )
      .then(response => response.json())
      .then(data => console.log(`온도 : ${data.main.temp}, 날씨 : ${data.weather[0].main}`));
}

function onGeoError() {
   alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

/*
//현재 위치만 알 수 있는 코드
navigator.geolocation.getCurrentPosition(function(pos) {
    console.log(pos);
    var latitude = pos.coords.latitude;
    var longitude = pos.coords.longitude;
    alert("현재 위치는 : " + latitude + ", "+ longitude);
});
*/