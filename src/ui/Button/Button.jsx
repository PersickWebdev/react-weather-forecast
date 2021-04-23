import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
    return (
        <div className={styles['button__container']}>
            <input
                className={styles['button']}
                type='button'
                name={props.name}
                value={props.value}
                onClick={props.action}
            />
        </div>
    );
};

export default Button;