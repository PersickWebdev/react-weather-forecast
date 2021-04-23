import React from 'react';
import styles from './Weather.module.scss';
import { conditionIcons } from '../../utils/constants';
import { useTime } from '../../data/timeDataProcessing';

const Weather = ({ weather, dayPart }) => {
    const { getTimeFromTimestamp } = useTime();
    const isWindy = weather?.wind;
    const isCloudy = weather?.clouds?.all > 5;
    const isRainy = !!weather?.rain;
    const isSnowy = !!weather?.snow;
    const sunriseTimestamp = weather?.sys.sunrise;
    const sunsetTimestamp = weather?.sys.sunset;
    const sunrise = getTimeFromTimestamp(sunriseTimestamp);
    const sunset = getTimeFromTimestamp(sunsetTimestamp);

    return (
        <div className={styles['weather']}>
            <div className={styles['location-box']}>
                <span className={styles['location__city']}>
                    {weather?.name}
                </span>
                <span className={styles['location__country']}>
                    {weather.sys?.country}
                </span>
            </div>
            <div className={styles['description-box']}>
                <span className={styles['description__text']}>
                    {weather?.weather[0].description}
                </span>
            </div>
            <div className={styles['temperature-box']}>
                <div className={styles['temperature__item']}>
                    <span className={styles['temperature__label']}>
                        Min:
                    </span>
                    <span className={styles['temperature__value']}>
                        {Math.round(weather.main?.temp_min)}&deg;
                    </span>
                </div>
                <div className={styles['temperature__item']}>
                    <span className={styles['temperature__label']}>
                        Average:
                    </span>
                    <span className={styles['temperature__value']}>
                        {Math.round(weather.main?.temp)}&deg;
                    </span>
                </div>
                <div className={styles['temperature__item']}>
                    <span className={styles['temperature__label']}>
                        Max:
                    </span>
                    <span className={styles['temperature__value']}>
                        {Math.round(weather.main?.temp_max)}&deg;
                    </span>
                </div>
                <div className={styles['temperature__item']}>
                    <span className={styles['temperature__label']}>
                        Feels like:
                    </span>
                    <span className={styles['temperature__value']}>
                        {Math.round(weather.main?.feels_like)}&deg;
                    </span>
                </div>
            </div>
            <div className={styles['conditions-box']}>
                {dayPart === 'isDay' &&
                    <div className={styles['condition__item']}>
                        <div className={styles['condition__icon-box']}>
                            {conditionIcons.sunny}
                        </div>
                        <div className={styles['condition__value']}>

                        </div>
                    </div>
                }
                {isWindy &&
                    <div className={styles['condition__item']}>
                        <div className={styles['condition__icon-box']}>
                            {conditionIcons.windy}
                        </div>
                        <div className={styles['condition__value']}>
                            {weather?.wind?.speed}
                        </div>
                    </div>
                }
                {isCloudy &&
                <div className={styles['condition__item']}>
                    <div className={styles['condition__icon-box']}>
                        {conditionIcons.cloudy}
                    </div>
                    <div className={styles['condition__value']}>
                        {weather?.clouds?.all}%
                    </div>
                </div>
                }
                {isRainy &&
                    <div className={styles['condition__item']}>
                        <div className={styles['condition__icon-box']}>
                            {conditionIcons.rainy}
                        </div>
                        <div className={styles['condition__value']}>

                        </div>
                    </div>
                }
                {isSnowy &&
                    <div className={styles['condition__item']}>
                        <div className={styles['condition__icon-box']}>
                            {conditionIcons.snowy}
                        </div>
                        <div className={styles['condition__value']}>

                        </div>
                    </div>
                }
            </div>
            <div className={styles['sunrise-sunset-box']}>
                <div className={styles['sunrise-sunset__item']}>
                    <span className={styles['sunrise-sunset__label']}>
                       Sunrise:
                    </span>
                    <span className={styles['sunrise-sunset__value']}>
                        {sunrise}
                    </span>
                </div>
                <div className={styles['sunrise-sunset__item']}>
                    <span className={styles['sunrise-sunset__label']}>
                       Sunset:
                    </span>
                    <span className={styles['sunrise-sunset__value']}>
                        {sunset}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Weather;