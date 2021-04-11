import React from 'react';
import styles from './SearchForm.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useWeather } from '../../../redux/Weather/weatherDataProcessing';

const SearchForm = () => {
    const dispatch = useDispatch();
    const { fetchWeather } = useWeather();
    const { register, handleSubmit, errors } = useForm();
    const { temperature } = useSelector((state) => state.weatherData);

    const onSubmit = (data) => {
        fetchWeather(data.city, dispatch);
    }

    return (
        <div className={`
            ${styles['search-form']} 
            ${temperature === 'isCold' ? styles['search-form-cold'] : ''}
            ${temperature === 'isWarm' ? styles['search-form-warm'] : ''}
            ${temperature === 'isHot' ? styles['search-form-hot'] : ''}
        `}>
            <form
                className={styles['form']}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles['input-group']}>
                    <input
                        className={styles['input']}
                        type='text'
                        name='city'
                        placeholder='Enter city ...'
                        ref={register}
                    />
                    <p>{errors.city?.message}</p>
                    <input
                        className={styles['submit-button']}
                        type='submit'
                        value='Search!'
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchForm;