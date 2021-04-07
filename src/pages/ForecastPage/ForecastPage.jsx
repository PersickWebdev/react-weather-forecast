import React from 'react';
import styles from './ForecastPage.module.scss';
import { SearchForm, SearchResult } from '../../pages';

const ForecastPage = () => {
    return (
        <div className={styles['forecast']}>
            <h2 className={styles['heading']}>Forecast</h2>
            <SearchForm />
            <SearchResult />
        </div>
    );
};

export default ForecastPage;