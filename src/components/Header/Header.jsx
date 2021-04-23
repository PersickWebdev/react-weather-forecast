import React from 'react';
import styles from './Header.module.scss';
// import { icons } from '../../assest/icons/svg';

const Header = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['container']}>
                {/*<div className={styles['logo-box']}>*/}
                {/*    {icons.logo}*/}
                {/*</div>*/}
                <div className={styles['logo__text-box']}>
                    <span className={styles['logo__text']}>
                        Weather Forecast
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;