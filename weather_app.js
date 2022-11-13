var input = document.querySelector('.input_text');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var humd = document.querySelector('.humd');
var rec = document.querySelector('.recommendation');

fetch('https://api.openweathermap.org/data/2.5/weather?lat=1.290270&lon=103.851959&appid=bf758320bb5efae44361fed1d883e9d0')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var descValue = data['weather'][0]['description'];
  var descMain = data['weather'][0]['main'];
  var humdValue = data['main']['humidity'];

  var tempinCelsius = tempValue - 273.15;

  if (descMain == "Thunderstorm"){
    temp.innerHTML = '<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">' + tempinCelsius.toFixed(2) + "&#8451";
    humd.innerHTML = "Humidity: " + humdValue + "%";
  }
  else if (descMain == "Drizzle"){
    temp.innerHTML = '<img src="http://openweathermap.org/img/wn/09d@2x.png" alt="weather icon" class="w-icon">' + tempinCelsius.toFixed(2) + "&#8451";
    humd.innerHTML = "Humidity: " + humdValue + "%";
  }
  else if (descMain == "Rain"){
    temp.innerHTML = '<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon">' + tempinCelsius.toFixed(2) + "&#8451";
    humd.innerHTML = "Humidity: " + humdValue + "%";
  }
  else if (descMain == "Haze"){
    temp.innerHTML = '<img src="http://openweathermap.org/img/wn/50d@2x.png" alt="weather icon" class="w-icon">' + tempinCelsius.toFixed(2) + "&#8451";
    humd.innerHTML = "Humidity: " + humdValue + "%";
  }
  else if (descMain == "Clear"){
    temp.innerHTML = '<img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" class="w-icon">' + tempinCelsius.toFixed(2) + "&#8451";
    humd.innerHTML = "Humidity: " + humdValue + "%";
  }
  else if (descValue == "few clouds"){
    temp.innerHTML = '<img src="http://openweathermap.org/img/wn/02d@2x.png" alt="weather icon" class="w-icon">' + tempinCelsius.toFixed(2) + "&#8451";
    humd.innerHTML = "Humidity: " + humdValue + "%";
  }
  else if (descValue == "scattered clouds"){
    temp.innerHTML = '<img src="http://openweathermap.org/img/wn/03d@2x.png" alt="weather icon" class="w-icon">' + tempinCelsius.toFixed(2) + "&#8451";
    humd.innerHTML = "Humidity: " + humdValue + "%";
  }
  else if (descValue == "broken clouds" || descValue == "overcast clouds"){
    temp.innerHTML = '<img src="http://openweathermap.org/img/wn/04d@2x.png" alt="weather icon" class="w-icon">' + tempinCelsius.toFixed(2) + "&#8451";
    humd.innerHTML = "Humidity: " + humdValue + "%";
  }

  // For recommending food:
  if (descMain == "Thunderstorm" || descMain == "Drizzle" || descMain == "Rain" || descValue == "overcast clouds"){
    rec.innerHTML = "<h5><i> Brrr... Today's weather is cold. How about we have some hot food?</i></h5>" + '<img style="width: 400px;" src="assets/img/pho.png">' + '<img style="width: 350px;" src="assets/img/kimchi.jpg">'
                      + '<img style="width: 600px;" src="assets/img/laksa.png">';
  }
  else if (descMain == "Haze"){
    rec.innerHTML = "<h5><i> Today's hazy. How about have some herbal tea instead?</i></h5>" + '<img style="width: 350px;" src="assets/img/herbaltea.webp">';
  }
  else if (descMain == "Clear"){
    rec.innerHTML = "<h5><i> Today's weather is warm/hot. How about have some appetising food?</i></h5>" + '<img style="width: 350px;" src="assets/img/pizza.png">' + '<img style="width: 350px;" src="assets/img/salmonbowl.png">' +'<img style="width: 350px;" src="assets/img/pizza.png">' + '<img style="width: 350px;" src="assets/img/pasta.png">';
  }
  else if (descValue == "few clouds"||descValue == "scattered clouds"|| descValue == "broken clouds"){
    rec.innerHTML = "<h5><i> Today's a cloudy day. How about have some dessert instead?</i></h5>" + '<img style="width: 350px;" src="assets/img/pancake.jpg">' + '<img style="width: 350px;" src="assets/img/oats.png">';
  }
})
