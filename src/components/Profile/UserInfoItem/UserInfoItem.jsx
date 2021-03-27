import React from 'react';
import styles from './UserInfoItem.module.scss';

const UserInfoItem = ({ name, value }) => {
    return (
        <div className={styles['user-info-item']}>
            <div className={styles['name-box']}>
                <span className={styles['name-text']}>{name}</span>
            </div>
            <div className={styles['value-box']}>
                <span className={styles['value-text']}>{value}</span>
            </div>
        </div>
    );
};

export default UserInfoItem;