import React from 'react';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '../../ui';

const Header = ({ profileHandler, signOutHandler, forecastHandler }) => {
    const { isLogged } = useSelector((state) => state.authData);

    return (
        <header className={styles['header']}>
            <div className={styles['container']}>
                <div className={styles['name-box']}>
                    <span className={styles['name']}>Weather Forecast</span>
                </div>
                {isLogged
                    ? <div className={styles['buttons-box']}>
                        <Button>
                            <NavLink to='/forecast'>Forecast</NavLink>
                        </Button>
                        <Button>
                            <NavLink to='/profile'>Profile</NavLink>
                        </Button>
                        <Button
                            name='Sign Out'
                            action={signOutHandler}
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