import React, { useState } from 'react';
import styles from './ProfilePage.module.scss';
import { UserInfoItem } from '../../components';
import { Button } from '../../ui';
import { useUtils } from '../../utils/useUtils';
import { EditProfileForm } from '../../pages';

const ProfilePage = ({ user }) => {
    const { convertCamelCase } = useUtils();
    const [ isOpened, setIsOpened ] = useState(false);
    const userInfoItems = Object.keys(user).map(key => {
        return (
            <UserInfoItem
                key={`${user.id}_${user[key]}`}
                name={convertCamelCase(key)}
                value={user[key]}
            />
        )
    });

    const editProfileHandler = () => {
        setIsOpened(true);
    }

    return (
        <div className={styles['profile']}>
            {isOpened
                ?
                <EditProfileForm
                    user={user}
                    setIsOpened={setIsOpened}
                />
                :
                <>
                    <h2 className={styles['heading']}>Profile info:</h2>
                    <div className={styles['info-box']}>
                        {userInfoItems}
                    </div>
                    <div className={styles['button-box']}>
                        <Button
                            name='Edit'
                            action={editProfileHandler}
                        />
                    </div>
                </>
            }
        </div>
    );
};

export default ProfilePage;