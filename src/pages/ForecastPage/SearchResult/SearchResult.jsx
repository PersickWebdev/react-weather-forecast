import React from 'react';
import styles from './SearchResult.module.scss';
import { useSelector } from 'react-redux';

import iconCloudy from '../../../assest/images/icon-cloudy.png';
import iconWindy from '../../../assest/images/iconWind.png';

const SearchResult = () => {
    const { weather } = useSelector((state) => state.weatherData);

    const isCloudy = weather.clouds?.all > 0;
    const isWindy = weather.wind?.speed > 0;

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
            <div className={styles['result__conditions']}>
                {isCloudy &&
                    <div className={styles['condition__item']}>
                        <img src={iconCloudy} alt="icon-cloudy"/>
                    </div>
                }
                {isWindy &&
                    <div className={styles['condition__item']}>
                        <img src={iconWindy} alt="icon-windy"/>
                    </div>
                }
            </div>
        </div>
    );
};

export default SearchResult;