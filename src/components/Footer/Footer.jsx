import React from 'react';
import styles from './Footer.module.scss';
import {useSelector} from "react-redux";

const Footer = () => {
    const { temperature } = useSelector((state) => state.weatherData);

    return (
        <footer className={`
            ${styles['footer']} 
            ${temperature === 'isCold' ? styles['footer-cold'] : ''}
            ${temperature === 'isWarm' ? styles['footer-warm'] : ''}
            ${temperature === 'isHot' ? styles['footer-hot'] : ''}
        `}>
            <div className={styles['container']}>
                <div className={styles['rights']}>
                    <span>All rights reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;