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



        lcloud_pct.innerHTML = result.cloud_pct;
        lfeels_like.innerHTML = result.feels_like
        lhumidity.innerHTML = result.humidity;
        lmax_temp.innerHTML = result.max_temp;
        lmin_temp.innerHTML = result.min_temp;
        lsunrise.innerHTML = result.sunrise;
        lsunset.innerHTML = result.sunset;
        ltemp.innerHTML = result.temp;
        lwind_degrees.innerHTML = result.wind_degrees;
        lwind_speed.innerHTML = result.wind_speed;
    } catch (error) {
        console.error(error);
    }
}

fetchWeather("Lucknow");
