import React from 'react';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '../../ui';

const Header = ({ profileHandler, signOutHandler, forecastHandler }) => {
    const { isLogged } = useSelector((state) => state.authData);
    const { temperature } = useSelector((state) => state.weatherData);

    return (
        <header className={`
            ${styles['header']} 
            ${temperature === 'isCold' ? styles['header-cold'] : ''}
            ${temperature === 'isWarm' ? styles['header-warm'] : ''}
            ${temperature === 'isHot' ? styles['header-hot'] : ''}
        `}>
            <div className={styles['container']}>
                <div className={styles['name-box']}>
                    <span className={styles['name']}>Weather Forecast</span>
                </div>
                {isLogged
                    ? <div className={styles['buttons-box']}>
                        <Button>
                            <NavLink
                                className={styles['link']}
                                to='/forecast'
                            >
                                Forecast
                            </NavLink>
                        </Button>
                        <Button>
                            <NavLink
                                className={styles['link']}
                                to='/profile'
                            >
                                Profile
                            </NavLink>
                        </Button>
                        <Button
                            name='Sign Out'
                            action={signOutHandler}
                            temperature={temperature}
                        />
                      </div>
                    : <div className={styles['buttons-box']}>
                        <Button
                            name='Sign Up'
                            action={(event) => console.log(event.target.name)}
                        />
                      </div>
                }
            </div>
        </header>
    );
};

export default Header;