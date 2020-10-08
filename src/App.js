import React, {useState} from 'react';
import style from './App.module.css';
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";

const API_KEY = '5fe3099bc9e3ebcf55fe80c518fc08fc';

const App = (props) => {
    let [weatherData, setWeatherData] = useState({})

    // making a request to get weather data for our city (initially, for Odessa)
    const getWeather = async (event) => {
        event.preventDefault();
        // event.target - form, elements - form's elements, city - form's input name
        // city - dynamical variable used in url address in fetch, which value is based on the form's input value
        const city = event.target.elements.city.value;
        const apiUrl = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        const data = await apiUrl.json();
        console.log(data)

        // if user hasn't entered any city, no processing needed
        if (city) {
            setWeatherData({
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                wind: data.wind.speed,
                error: ''
            })
        } else {
            setWeatherData({
                country: null,
                city: null,
                temp: null,
                tempMin: null,
                tempMax: null,
                wind: null,
                error: 'ENTER THE CITY'
            })
        }
    }

    return (
        <div className={style.application__container}>
            <Form getWeather={getWeather}/>
            <Weather weatherData={weatherData}/>
        </div>
    );
}

export default App;
