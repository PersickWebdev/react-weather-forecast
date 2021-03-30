import React from 'react';
import styles from './ProfilePage.module.scss';
import { UserInfoItem } from '../../components';
import { useUtils } from '../../utils/useUtils';

const ProfilePage = ({ user }) => {
    const { convertCamelCase } = useUtils();
    const userInfoItems = Object.keys(user).map(key => {
        return (
            <UserInfoItem
                key={`${user.id}_${user[key]}`}
                name={convertCamelCase(key)}
                value={user[key]}
            />
        )
    });

    return (
        <div className={styles['profile']}>
            <h2 className={styles['heading']}>Profile info:</h2>
            <div className={styles['info-box']}>
                {userInfoItems}
            </div>
        </div>
    );
};

export default ProfilePage;