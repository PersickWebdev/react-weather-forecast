import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Button } from '../../ui';
import { useSelector } from 'react-redux';

const Header = ({ profileHandler, signOutHandler }) => {
    const { user, isLogged } = useSelector((state) => state.authData);

    return (
        <header className={styles['header']}>
            <div className={styles['container']}>
                <div className={styles['name-box']}>
                    <span className={styles['name']}>Weather Forecast</span>
                </div>
                {isLogged
                    ? <div className={styles['buttons-box']}>
                        <Button
                            name='Profile'
                            action={profileHandler}
                        />
                        <Button
                            name='Sign Out'
                            action={signOutHandler}
                        />
                      </div>
                    : <div className={styles['buttons-box']}>
                        <Button
                            name='Sign In'
                            action={(event) => console.log(event.target.name)}
                        />
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