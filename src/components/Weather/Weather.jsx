import React from "react";
import style from './Weather.module.css';

const Weather = (props) => {
    return (
        <div className={style.weather__container}>
            { props.weatherData.city
                ?   <div className={style.weather__content}>
                        <h4 className={style.weather__country}>{props.weatherData.country}</h4>
                        <h5 className={style.weather__city}>{props.weatherData.city}</h5>
                        <p className={style.weather__temperature}>{props.weatherData.temp}&deg;</p>
                        <div className={style.weather__temperatureMinMax}>
                            <p className={style.weather__temperatureMin}><span>{props.weatherData.tempMin}&deg;</span></p>
                            <p className={style.weather__temperatureMax}><span>{props.weatherData.tempMax}&deg;</span></p>
                        </div>
                        <div className={style.weather__icons}>
                            <div className={style.weather__iconItem}>
                                {props.weatherData.wind}
                            </div>
                        </div>
                    </div>
                :   <p className={style.weather__error}>{props.weatherData.error}</p>
            }
        </div>
    )
}

export default Weather;