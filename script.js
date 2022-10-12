const getWeatherData = (city) => {
  //template literals used to create a url with input and an API key
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '65e7eb92a7mshd914bc4d8f6caecp1c53f9jsn9c5710af36ca',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
} ;
  
return fetch( `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then(data => (data))
    .catch(err => console.error(err));

}

//  get city input results for the weather data: use of promise 

const searchCity = async() => {
  const city = document.getElementById('city-input').value;
  console.log(city);
  const data = await getWeatherData(city);
  showWeatherData(data);

}

//  Dom manipulation to show weather data in HTML

const showWeatherData = (weatherData) => {

console.log(weatherData.temp);

document.getElementById('temp').innerText = weatherData.temp;
  
document.getElementById('city-name').innerText =document.getElementById('city-input').value;
  
document.getElementById('min-temp').innerText =  weatherData.min_temp;

  
document.getElementById('max-temp').innerText = weatherData.max_temp;
 
}