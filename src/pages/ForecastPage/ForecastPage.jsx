import React from 'react';
import styles from './ForecastPage.module.scss';
import { SearchForm, SearchResult } from '../../pages';
import { useSelector } from "react-redux";

const ForecastPage = () => {
    const { temperature } = useSelector((state) => state.weatherData);

    return (
        <div className={`
            ${styles['forecast']} 
            ${temperature === 'isCold' ? styles['forecast-cold'] : ''}
            ${temperature === 'isWarm' ? styles['forecast-warm'] : ''}
            ${temperature === 'isHot' ? styles['forecast-hot'] : ''}
        `}>
            <h2 className={styles['heading']}>Forecast</h2>
            <SearchForm />
            <SearchResult />
        </div>
    );
};

export default ForecastPage;