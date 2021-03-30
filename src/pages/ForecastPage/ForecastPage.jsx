import React from 'react';
import styles from './ForecastPage.module.scss';
import { SearchForm } from '../../pages';

const ForecastPage = () => {
    return (
        <div className={styles['forecast']}>
            <h2 className={styles['heading']}>Forecast</h2>
            <SearchForm/>
        </div>
    );
};

export default ForecastPage;