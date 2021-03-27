import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['container']}>
                <div className={styles['rights']}>
                    <span>All rights reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;