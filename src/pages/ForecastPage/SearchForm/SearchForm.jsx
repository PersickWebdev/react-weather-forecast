import React from 'react';
import styles from './SearchForm.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useWeather } from '../../../redux/Weather/weatherDataProcessing';

const SearchForm = () => {
    const dispatch = useDispatch();
    const { fetchWeather } = useWeather();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        fetchWeather(data.city, dispatch);
    }

    return (
        <div className={styles['search-form']}>
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