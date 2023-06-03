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



        gcloud_pct.innerHTML = result.cloud_pct;
        gfeels_like.innerHTML = result.feels_like
        ghumidity.innerHTML = result.humidity;
        gmax_temp.innerHTML = result.max_temp;
        gmin_temp.innerHTML = result.min_temp;
        gsunrise.innerHTML = result.sunrise;
        gsunset.innerHTML = result.sunset;
        gtemp.innerHTML = result.temp;
        gwind_degrees.innerHTML = result.wind_degrees;
        gwind_speed.innerHTML = result.wind_speed;
    } catch (error) {
        console.error(error);
    }
}

fetchWeather("Gurugram");
