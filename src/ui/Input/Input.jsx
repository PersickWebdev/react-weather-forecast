import React from 'react';
import styles from './Input.module.scss';

const Input = (props) => {
    return (
        <div className={styles['input__container']}>
            <input
                className={styles['input']}
                type={props.type}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.action}
            />
        </div>
    );
};

export default Input;