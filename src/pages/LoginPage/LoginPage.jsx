import React from 'react';
import styles from './LoginPage.module.scss';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../redux/Auth/authDataProcessing';
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {
    const dispatch = useDispatch();
    const { checkUser } = useAuth();
    const { register, handleSubmit, errors } = useForm();
    const { temperature } = useSelector((state) => state.weatherData);

    const onSubmit = (data) => {
        checkUser(data, dispatch);
    };

    return (
        <div className={`
            ${styles['login']} 
            ${temperature === 'isCold' ? styles['login-cold'] : ''}
            ${temperature === 'isWarm' ? styles['login-warm'] : ''}
            ${temperature === 'isHot' ? styles['login-hot'] : ''}
        `}>
            <form
                className={styles['form']}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles['input-group']}>
                    <div className={styles['label-box']}>
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className={styles['input-box']}>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter email ..."
                            ref={register}
                        />
                        <p>{errors.firstName?.message}</p>
                    </div>
                </div>
                <div className={styles['input-group']}>
                    <div className={styles['label-box']}>
                        <label htmlFor="email">Password:</label>
                    </div>
                    <div className={styles['input-box']}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password ..."
                            ref={register}
                        />
                        <p>{errors.password?.message}</p>
                    </div>
                </div>
                <div className={styles['button-box']}>
                    <input
                        className={styles['submit-button']}
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default LoginPage;