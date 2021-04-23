import React, { useEffect } from 'react';
import styles from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useTime } from './data/timeDataProcessing';
import { Header, SearchBar, Weather } from './components';

const App = () => {
    const dispatch = useDispatch();
    const { setCurrentDayPart } = useTime();
    const { dayPart } = useSelector((state) => state.timeData);
    const { weather } = useSelector((state) => state.weatherData);
    const isWeather = !!Object.keys(weather).length;

    useEffect(() => {
        setCurrentDayPart(dispatch);
    }, []);

    return (
        <div className={`${styles['app']} ${dayPart === 'isDay' ? styles['background__day'] : styles['background__night']}`}>
            <Header/>
            <main className={styles['main']}>
                <SearchBar/>
                {isWeather &&
                    <Weather
                        weather={weather}
                        dayPart={dayPart}
                    />
                }
            </main>
        </div>
    );
};

export default App;