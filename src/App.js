import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
// import Form from "./components/Form/Form";
// import Weather from "./components/Weather/Weather";
import { Header, Login } from './components';
import { useSelector, useDispatch } from 'react-redux';
// import { useAuth } from './redux/Auth/authDataProcessing';
import { Footer } from './components';
import { Profile } from './components';
import { setIsLogged, setUser } from './redux/Auth/authActionCreators';

const API_KEY = '5fe3099bc9e3ebcf55fe80c518fc08fc';

const App = () => {
    const dispatch = useDispatch();
    const { user, isLogged } = useSelector((state) => state.authData);
    const [ isOpened, setIsOpened ] = useState(false);

    const profileHandler = () => {
        setIsOpened(true);
    }

    const signOutHandler = () => {
        dispatch(setIsLogged(false));
        dispatch(setUser({}));
        setIsOpened(false);
    }

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
        <div className={styles['app']}>
            <Header
                profileHandler={profileHandler}
                signOutHandler={signOutHandler}
            />
            <div className={styles['content']}>
                <div className={styles['content-overlay']}>
                    <div className={styles['container']}>
                        {!isLogged && <Login />}
                        {isOpened && <Profile user={user}/>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
