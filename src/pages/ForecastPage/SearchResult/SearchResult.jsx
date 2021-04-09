import React from 'react';
import styles from './SearchResult.module.scss';
import { useSelector } from 'react-redux';

import iconCloudy from '../../../assest/images/icon-cloudy.png';
import iconWindy from '../../../assest/images/iconWind.png';

const SearchResult = () => {
    const { weather } = useSelector((state) => state.weatherData);
    const isWeather = !!Object.keys(weather).length;
    const isCloudy = weather.clouds?.all > 0;
    const isWindy = weather.wind?.speed > 0;
    const isRainy = Object.keys(weather).some(item => item === 'rain');
    const temperature = Math.round(weather.main?.temp);
    console.log('isRainy: ', isRainy)

    const defineTemperature = (temperature) => {
        if (temperature <= 10) return 'isCold';
        if (temperature > 10 && temperature <= 25) return 'isWarm';
        if (temperature > 25) return 'isHot';
    }

    const temp = defineTemperature(temperature);
    console.log(temp)

    return (
        <div className={styles['result']}>
            <div className={styles['result__location']}>
                <div className={styles['location__section']}>
                    <span className={styles['location__city']}>{weather.name}</span>
                </div>
                <div className={styles['location__section']}>
                    <span className={styles['location__country']}>{weather.sys?.country}</span>
                </div>
            </div>
            {isWeather &&
            <div className={styles['result__temperature-box']}>
                <div className={styles['temperature__item']}>
                    <span>{Math.round(weather.main?.temp)}&deg;</span>
                </div>
            </div>
            }
            <div className={styles['result__conditions']}>
                {isWeather &&
                <div className={styles['result__description-box']}>
                    <span className={styles['description__text']}>{weather.weather[0].description}</span>
                </div>
                }
                <div className={styles['condition__items-box']}>
                    {isCloudy &&
                    <div className={styles['condition__item']}>
                        <div className={styles['item__image-box']}>
                            <img className={styles['item__image']} src={iconCloudy} alt="icon-cloudy"/>
                        </div>
                        <div className={styles['item__value-box']}>
                            <span className={styles['item__value']}>&nbsp;</span>
                        </div>
                    </div>
                    }
                    {isWindy &&
                    <div className={styles['condition__item']}>
                        <div className={styles['item__image-box']}>
                            <img className={styles['item__image']} src={iconWindy} alt="icon-windy"/>
                        </div>
                        <div className={styles['item__value-box']}>
                            <span className={styles['value__text']}>{weather.wind?.speed} </span>
                            <span className={styles['value__units']}>m/sec</span>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchResult;