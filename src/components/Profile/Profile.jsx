import React from 'react';
import styles from './Profile.module.scss';
import { UserInfoItem } from '../../components';

const Profile = ({ user }) => {
    const userInfoItems = Object.keys(user).map(key => {
        return (
            <UserInfoItem
                key={`${user.id}_${user[key]}`}
                name={key}
                value={user[key]}
            />
        )
    })

    return (
        <div className={styles['profile']}>
            <h2 className={styles['heading']}>Profile info:</h2>
            <div className={styles['info-box']}>
                {userInfoItems}
            </div>
        </div>
    );
};

export default Profile;