async function fetchWeather(city) {
    cityName.innerHTML = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3a624a7254msh71b7dc498952cf7p131bd1jsn223fc7e0926f',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };


    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);


        cloud_pct.innerHTML = result.cloud_pct;
        feels_like.innerHTML = result.feels_like;
        humidity.innerHTML = result.humidity;
        max_temp.innerHTML = result.max_temp;
        min_temp.innerHTML = result.min_temp;
        sunrise.innerHTML = result.sunrise;
        sunset.innerHTML = result.sunset;
        temp.innerHTML = result.temp;
        // wind_degrees.innerHTML = result.wind_degrees;
        wind_speed.innerHTML = result.wind_speed;
    } catch (error) {
        console.error(error);
    }
}
// function handleClick(e) {
//     e.preventDefault();
//     fetchWeather(city.value);
//   }

//   submit.addEventListener("click", handleClick);


submit.addEventListener("click", (e) => {
    e.preventDefault();
    fetchWeather(city.value);
    // console.log(city.value);
})

fetchWeather("Delhi");