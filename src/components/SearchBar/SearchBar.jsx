import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import { useDispatch } from 'react-redux';
import { useWeather } from '../../data/weatherDataProcessing';
import { Input, Button } from '../../ui';

const SearchBar = () => {
    const dispatch = useDispatch();
    const { fetchWeather } = useWeather();
    const [ city, setCity ] = useState('');

    const onChangeHandler = (event) => {
        setCity(event.target.value);
    };

    const onClickHandler = () => {
        fetchWeather(city, dispatch);
    };

    return (
        <div className={styles['searchbar']}>
            <div className={styles['container']}>
                <Input
                    type='text'
                    name='city'
                    placeholder='Enter city ...'
                    action={onChangeHandler}
                    value={city}
                />
                <Button
                    name='search'
                    value='Search'
                    action={onClickHandler}
                />
            </div>
        </div>
    );
};

export default SearchBar;