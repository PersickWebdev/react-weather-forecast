import React, { useState } from 'react';
import styles from './EditProfileForm.module.scss';
import { useForm } from 'react-hook-form';
import { Button } from '../../../ui';

const EditProfileForm = ({ user }) => {
    const { register, handleSubmit, errors } = useForm();
    const [ defaultValue, setDefaultValue ] = useState({
        firstName: user.firstName,
        secondName: user.secondName,
        age: user.age,
        email: user.email,
    });

    const onChangeHandler = (event) => {
        setDefaultValue({
            ...defaultValue,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (defaultValue) => {
        console.log(defaultValue)
    }

    return (
        <div className={styles['edit']}>
            <h3 className={styles['edit__heading']}>Edit form</h3>
            <form
                className={styles['form']}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles['input-group']}>
                    <div className={styles['label-wrap']}>
                        <label htmlFor="firstName">First name:</label>
                    </div>
                    <div className={styles['input-wrap']}>
                        <input type="text"
                               name='firstName'
                               ref={register}
                               className={styles['input']}
                               value={defaultValue.firstName}
                               onChange={(event) => onChangeHandler(event)}
                        />
                    </div>
                </div>
                <div className={styles['input-group']}>
                    <div className={styles['label-wrap']}>
                        <label htmlFor="secondName">Second name:</label>
                    </div>
                    <div className={styles['input-wrap']}>
                        <input type="text"
                               name='secondName'
                               ref={register}
                               className={styles['input']}
                               value={defaultValue.secondName}
                               onChange={(event) => onChangeHandler(event)}
                        />
                    </div>
                </div>
                <div className={styles['input-group']}>
                    <div className={styles['label-wrap']}>
                        <label htmlFor="age">Age:</label>
                    </div>
                    <div className={styles['input-wrap']}>
                        <input type="text"
                               name='age'
                               ref={register}
                               className={styles['input']}
                               value={defaultValue.age}
                               onChange={(event) => onChangeHandler(event)}
                        />
                    </div>
                </div>
                <div className={styles['button-box']}>
                    <Button
                        type='submit'
                        name='Confirm'
                    />
                </div>
            </form>
        </div>
    );
};

export default EditProfileForm;